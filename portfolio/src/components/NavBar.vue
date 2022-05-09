<script>
const NavBar = {
  template: "#nav-bar",
};

export default {
  data() {
    return {
      color: "text-nav-0",
      logo:"text-nav-1000",
      colors: {
        0: "#f9b294",
        100: "#e3A891",
        200: "#CD9F8F",
        300: "#B8958C",
        400: "#A28C8A",
        500: "#8C8287",
        600: "#767985",
        700: "#616F82",
        800: "#4B6680",
        900: "#355C7D",
        1000: "#355C7D",
        1100: "#355C7D",
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goto(refName) {
      this.$emit("goto", refName);
    },
    handleScroll(event) {
      this.color = `text-nav-${
        Math.floor(window.scrollY / (window.screenY * 10)) * 100
      }`;
      this.logo = `text-nav-${
       1000 - Math.floor(window.scrollY / (window.screenY * 10)) * 100
      }`;
      console.log(this.color);
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-2 justify-between py-5 px-20 backdrop-blur-sm">
    <!-- all the colors below have to be hardcoded 
    to force tailwind to generate new colors
     -->
    <p hidden class="text-nav-0"></p>
    <p hidden class="text-nav-100"></p>
    <p hidden class="text-nav-200"></p>
    <p hidden class="text-nav-300"></p>
    <p hidden class="text-nav-400"></p>
    <p hidden class="text-nav-500"></p>
    <p hidden class="text-nav-600"></p>
    <p hidden class="text-nav-700"></p>
    <p hidden class="text-nav-800"></p>
    <p hidden class="text-nav-900"></p>
    <p hidden class="text-nav-1000"></p>
    <p hidden class="text-nav-1100"></p>
    <div
      class="
        p-1
        justify-self-start
        rounded-full
        bg-pink
        text-dark-blue
        font-koulen
        text-6xl
        px-1
      "
      :class="logo"
    >
      AW
    </div>
    <div
      class="
        grid grid-cols-3
        justify-around justify-items-center justify-self-end
        gap-5
      "
    >
      <button
        class="font-coding text-2xl underline underline-offset-2"
        @click="goto('second-panel')"
        :class="color"
      >
        projects
      </button>
      <button
        class="font-coding text-2xl underline underline-offset-2"
        @click="goto('third-panel')"
        :class="color"
      >
        tech stack
      </button>
      <button
        class="font-coding text-2xl underline underline-offset-2"
        @click="goto('contact')"
        :class="color"
      >
        contact
      </button>
    </div>
  </div>
</template>
<style>
</style>
