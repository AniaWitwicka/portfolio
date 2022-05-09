<script>
const NavBar = {
  template: "#first-panel",
};
export default {
  methods: {
    goto(refName) {
      this.$emit("goto", refName);
    },
  },
  computed: {
    age() {
      var today = new Date();
      var birthDate = new Date("1996/05/23");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    experience() {
      var today = new Date();
      var birthDate = new Date("2018/04/01");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-2 items-center justify-around">
    <div class="grid grid-rows-3 content-center py-10 px-20">
      <h1 class="font-koulen text-6xl text-pink">hi, i'm anna.</h1>
      <h1 class="font-coding text-2xl text-pink">
        I’m {{ age }} year old software developer with {{experience}} years of experience.
      </h1>
      <button
        class="
          rounded-full
          bg-pink
          text-dark-blue
          font-koulen
          text-2xl
          w-1/3
          py-1
          my-2
        "
        @click="goto('fourth-panel')"
      >
        get to know me
      </button>
    </div>
    <div class="py-10 px-20">
      <img
        class="object-cover h-96 w-96 rounded-full"
        src="https://drive.google.com/uc?id=1yekKZUblEEw7yCfcC5jN6cLmZceUzHmq"/>
    </div>
  </div>
</template>
<style>
</style>
