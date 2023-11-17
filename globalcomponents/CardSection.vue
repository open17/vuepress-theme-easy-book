<template>
  <div class="card w-96 bg-base-100 hover:bg-base-200">
    <figure>
      <img :src="img" alt="pic" class=" lg:max-h-60 max-h-48" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <div class="badge badge-secondary" v-if="badge">{{ badge }}</div>
      </h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <div class="flex gap-2">
          <div
            class="badge badge-outline"
            v-for="(i, index) in tags"
            :key="index"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "badge", "description", "tags", "img"],
};
</script>

<style>
</style>