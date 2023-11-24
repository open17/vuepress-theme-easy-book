<template>
  <div class="flex h-full w-full justify-center items-center flex-col space-y-10 my-5">
    <div class="form-control">
      <div class="input-group input-group-lg">
        <input
          type="text"
          placeholder="Get password..."
          class="input input-bordered input-lg"
          v-model="password"
        />
        <button class="btn btn-square btn-lg" @click="getHash">
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
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="form-control">
      <div class="input-group input-group-lg">
        <input
          type="text"
          placeholder="Password..."
          class="input input-bordered input-lg"
          v-model="hashPassword"
        />
        <button class="btn btn-square btn-lg">
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
    </div>
  </div>
</template>

<script>
import { SHA256 } from "crypto-js";
export default {
  data() {
    return {
      password: "",
      hashPassword: "",
    };
  },
  methods: {
    getHash() {
      this.hashPassword = SHA256(this.password).toString();
    },
  },
};
</script>

<style>
</style>