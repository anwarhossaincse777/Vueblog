<script setup>
import {ref} from "vue";
import axios from "axios";
import {RouterLink} from 'vue-router'
import router from "@/router";

const categories = ref([])

list();

async function list() {

  let url = "https://basic-blog.teamrabbil.com/api/post-categories"
  let res = await axios.get(url);
  categories.value = res.data;

}


function getData(category) {

  router.push({name: 'CategoryBlogPage', params: {id: category.id, category_name: category.name}})

}


</script>

<template>

  <div class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl font-semibold pb-5">Categories</p>
    <div class="grid grid-cols-3 gap-2 list-none">
    <span v-for="category in categories" :key="category.id">
<!--            <RouterLink :to="{name:'CategoryBlogPage',params:{id:category.id}}" >{{category.name}}</RouterLink>-->

            <button @click="getData(category)">{{ category.name }}</button>
    </span>

    </div>
  </div>
</template>

<style scoped>

</style>