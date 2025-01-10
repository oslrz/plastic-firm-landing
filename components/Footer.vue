<template>
  <footer class="bg-white  shadow mt-5  dark:bg-gray-800 ">
    <div
      class="mx-auto  p-4 flex items-center justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {{currentYear}} ©
        All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
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