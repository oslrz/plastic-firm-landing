<template>
  <footer class="bg-white rounded-lg shadow mt-5 mx-1 dark:bg-gray-800 ">
    <div
      class="mx-auto w-[90%] p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {{currentYear}} ©
        All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
    
        <li>
          <a href="#" class="hover:underline">Контакти</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

</script>