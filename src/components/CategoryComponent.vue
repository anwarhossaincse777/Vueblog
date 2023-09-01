<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const categories=ref([])

list();
async function list(){

  let url="https://basic-blog.teamrabbil.com/api/post-categories"
  let res= await axios.get(url);
  categories.value=res.data;

}







</script>

<template>

  <div class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl font-semibold pb-5">Categories</p>
    <div class="grid grid-cols-3 gap-2 list-none">
    <span v-for="category in categories" :key="category.id">
            <RouterLink :to="{name:'blogPage',params:{id:category.id}}" >{{category.name}}</RouterLink>
    </span>

    </div>
  </div>
</template>

<style scoped>

</style>