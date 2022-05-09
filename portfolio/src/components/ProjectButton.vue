<script>
const NavBar = {
  template: "#project-buton",
};
export default {
  props: ["name", "description"],
};
</script>

<template>
  <button class="bg-dark-purple rounded-full">
    <div
      class="grid grid-rows-2 justify-center justify-items-center items-center p-2"
    >
      <h1 class="text-xl text-pink font-coding">
        {{ name }}
      </h1>
      <h1 class="text-l text-pink font-coding">
        {{ description }}
      </h1>
    </div>
  </button>
</template>
<style>
</style>
