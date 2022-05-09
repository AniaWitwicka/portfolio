<script>
import ProjectButton from "./ProjectButton.vue";

const NavBar = {
  template: "#second-panel",
};
export default {
  components: {
    ProjectButton,
  },
};
</script>

<template>
  <div class="grid grid-rows-3 justify-around content-center p-20">
    <h1 class="font-koulen text-6xl text-pink py-3">my projects</h1>
    <h1 class="font-coding text-2xl text-pink py-3">
      In my free time I like to work on projects that are useful for my personal
      life, so most of my projects is somehow connected to my hobbies
    </h1>
    <div class="grid grid-cols-3 justify-between py-2 gap-5">
      <project-button
        name="koreapp"
        description="app creating wordcards for learning korean"
      />
      <project-button
        name="koreapp"
        description="app creating wordcards for learning korean"
      />
      <project-button
        name="koreapp"
        description="app creating wordcards for learning korean"
      />
    </div>
  </div>
</template>
<style>
</style>
