<script setup>
import SideBarComponent from "@/components/SideBarComponent.vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});


import {onMounted, ref} from "vue";
import axios from "axios";

const postList=ref([])



if (isNaN((parseInt(props.id)))){

  list();
  async function list(){

    let url="https://basic-blog.teamrabbil.com/api/post-list/2"
    let res= await axios.get(url);
    postList.value=res.data;
  }
}else {

  alert("worng");

}






</script>

<template>
  <div class="container mx-auto flex flex-wrap py-6">

    <!-- Posts Section -->
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">

      <article v-for="post in postList" :key="post.id" class="flex flex-col shadow my-4">
        <!-- Article Image -->
        <a href="#" class="hover:opacity-75">
          <img :src="post.img">
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
          <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{{post.title}}</a>
          <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{post.short}}</a>
        </div>
      </article>


      <!-- Pagination -->
      <div class="flex items-center py-8">
        <a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
        <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
        <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
      </div>

    </section>
    <SideBarComponent/>
  </div>

</template>

<style scoped>

</style>