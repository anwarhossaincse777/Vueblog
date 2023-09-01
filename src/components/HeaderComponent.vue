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
  <!-- Top Bar Nav -->
  <nav class="w-full py-4 bg-blue-800 shadow">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

      <nav>
        <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li><RouterLink class="hover:text-gray-200 hover:underline px-4" :to="{name:'home'}">Sports Blog</RouterLink></li>

        </ul>
      </nav>

      <div class="flex items-center text-lg no-underline text-white pr-8">
        <nav>
          <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
            <li>
              <RouterLink class="hover:text-gray-200 hover:underline px-6" :to="{name:'home'}">Home</RouterLink>
            </li>
           <span v-for="category in categories" :key="category.id">
           <RouterLink class="hover:text-gray-200 hover:underline px-4"   :to="{name:'PostsPage',params:{id:category.id}}" >{{category.name}}</RouterLink>
           </span>



          </ul>
        </nav>
      </div>
    </div>

  </nav>


</template>

<style scoped>

</style>