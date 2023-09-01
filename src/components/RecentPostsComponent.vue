<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const posts = ref([])

list();

async function list() {

  let url = "https://basic-blog.teamrabbil.com/api/post-newest"
  let res = await axios.get(url);
  posts.value = res.data;

}

</script>

<template>

  <div class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl font-semibold pb-5">New Posts</p>
    <div class="grid grid-cols-3 gap-2 list-none">
    <span v-for="post in posts" :key="post.id">
            <RouterLink :to="{name:'SinglePostPage',params:{id:post.id}}">

             <img :src="post.img" alt="">

            </RouterLink>
    </span>

    </div>
  </div>
</template>

<style scoped>

</style>