<template>
  <div
    class="flex h-full w-full justify-center items-center flex-col space-y-5"
  >
    <div class="flex gap-5" v-if="unlockDate">
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="'--value: ' + daysDiff"></span>
        </span>
        days
      </div>
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="'--value: ' + hoursDiff"></span>
        </span>
        hours
      </div>
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="'--value: ' + minutesDiff"></span>
        </span>
        min
      </div>
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="'--value: ' + secondsDiff"></span>
        </span>
        sec
      </div>
    </div>
    <div class="form-control">
      <div class="input-group input-group-lg">
        <input
          type="password"
          placeholder="Password..."
          class="input input-bordered input-lg"
          v-model="password"
        />
        <button class="btn btn-square btn-lg" @click="checkHash">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
      <label class="label">
        <span class="label-text-alt" v-if="tryCnt != 0">密码错误</span>
      </label>
    </div>
  </div>
</template>

<script>
import { SHA256 } from "crypto-js";

export default {
  data() {
    return {
      password: sessionStorage.getItem("password") || "",
      hash: "",
      tryCnt: 0,
      passwordMatch: false,
      unlockDate: null,
      daysDiff: 0,
      hoursDiff: 0,
      minutesDiff: 0,
      secondsDiff: 0,
      countdownInterval: null
    };
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        this.checkTime();
      }, 1);
    },
    checkHash() {
      let inputHash = SHA256(this.password).toString();
      this.passwordMatch = inputHash === this.hash;
      if (!this.passwordMatch) {
        this.tryCnt += 1;
        sessionStorage.removeItem("password");
      } else {
        this.tryCnt = 0;
        this.$EventBus.$emit("unlockPage");
        sessionStorage.setItem("password", this.password);
      }
    },
    checkTime() {
      let currentDate = new Date();
      if (this.unlockDate < currentDate) {
        clearInterval(this.countdownInterval);
        this.$EventBus.$emit("unlockPage");
      } else {
        let timeDiff = Math.abs(
          this.unlockDate.getTime() - currentDate.getTime()
        ); // 获取时间戳的差值，取绝对值
        this.daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 获取天数差异
        this.hoursDiff = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutesDiff = Math.floor(
          (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000); // 获取秒差异
      }
    },
  },
  mounted() {
    if (this.$page.frontmatter.unlock_time) {
      this.unlockDate = new Date(this.$page.frontmatter.unlock_time);
      this.checkTime();
       this.startCountdown();
    }
    this.hash = this.$themeConfig.password;
    if (this.password != "") this.checkHash();
  },
};
</script>