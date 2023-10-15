<template>
<div>
  <a :href="link" v-if="isOutLink(link)"><span>{{Name}}</span></a>
<router-link :to="link" v-else><span>{{Name}}</span></router-link>
</div>
  
</template>

<script>
export default {
    props:["Name","link"],
      methods: {
    isOutLink(link) {
      return link.startsWith("http://") || link.startsWith("https://");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.9rem 2rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: #66deff;
  color: ghostwhite;
}

a span {
  position: relative;
  z-index: 10;
  transition: color 0.4s;
}

a:hover span {
  color: black;
}

a::before,
a::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

a::before {
  content: "";
  background: #000;
  width: 120%;
  left: -10%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

a:hover::before {
  transform: translate3d(100%, 0, 0);
}
</style>