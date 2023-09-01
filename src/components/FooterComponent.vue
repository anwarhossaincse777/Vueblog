<script setup>

</script>

<template>
  <footer class="w-full border-t bg-white pb-12">
    <div class="w-full container mx-auto flex flex-col items-center">
      <div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
        <RouterLink :to="{name:''}" class="uppercase px-3">About Us</RouterLink>
        <RouterLink :to="{name:''}" class="uppercase px-3">Privacy Policy</RouterLink>
        <RouterLink :to="{name:''}" class="uppercase px-3">Terms & Conditions</RouterLink>
        <RouterLink :to="{name:''}" class="uppercase px-3">Contact Us</RouterLink>
      </div>
      <div class="uppercase pb-6">&copy; Sports Blog</div>
    </div>
  </footer>
</template>

<style scoped>

</style>