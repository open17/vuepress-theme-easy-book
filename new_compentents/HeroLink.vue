<template>
  <div>
    <a :href="link" v-if="isOutLink(link)">
      <p>{{ Name }}</p>
      <svg
        stroke-width="4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </a>
    <router-link :to="link" v-else>
      <p>{{ Name }}</p>
      <svg
        stroke-width="4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["Name", "link"],
  methods: {
    isOutLink(link) {
      return link.startsWith("http://") || link.startsWith("https://");
    },
  },
};
</script>

<style scoped>
a {
  padding: 0;
  margin: 0;
  margin-left: 3%;
  border: none;
  background: none;
}

a {
  --primary-color: #111;
  --hovered-color: rgb(207, 22, 22);
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  gap: 0.5rem;
  align-items: center;
}

a p {
  margin: 0;
  position: relative;
  font-size: 20px;
  color: var(--primary-color);
}

a::after {
  position: absolute;
  content: "";
  width: 0;
  left: 0;
  bottom: -7px;
  background: var(--hovered-color);
  height: 2px;
  transition: 0.3s ease-out;
}

a p::before {
  position: absolute;
  /*   box-sizing: border-box; */
  content: "";
  width: 0%;
  inset: 0;
  color: var(--hovered-color);
  overflow: hidden;
  transition: 0.3s ease-out;
}

a:hover::after {
  width: 100%;
}

a:hover p::before {
  width: 100%;
}

a:hover svg {
  transform: translateX(4px);
  color: var(--hovered-color);
}

a svg {
  color: var(--primary-color);
  transition: 0.2s;
  position: relative;
  width: 15px;
  transition-delay: 0.2s;
}
</style>