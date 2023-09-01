<script setup>

import CategoryComponent from "@/components/CategoryComponent.vue";
import RecentPostsComponent from "@/components/RecentPostsComponent.vue";
</script>

<template>
  <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

    <!--    <div class="w-full bg-white shadow flex flex-col my-4 p-6">-->
    <!--      <p class="text-xl font-semibold pb-5">About Us</p>-->
    <CategoryComponent/>
    <!--    </div>-->

    <RecentPostsComponent/>

  </aside>
</template>

<style scoped>

</style>