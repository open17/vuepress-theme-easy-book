<template>
<div class="relative h-screen overflow-hidden">
    <img src="../assets/404.svg" class="absolute object-cover w-full h-full"/>
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-center w-full font-mono">
            <h1 class="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                You&#x27;re alone here
            </h1>
            <p class="font-extrabold text-white text-8xl my-44 animate-bounce">
                404
            </p>
            <router-link to="/" class=" text-white font-bold text-3xl border-2 rounded-xl p-2">
            返回
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import "tailwindcss/tailwind.css"
export default {

}
</script>

<style>

</style>