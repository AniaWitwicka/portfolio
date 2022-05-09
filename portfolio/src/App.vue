<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FirstPanel from "./components/FirstPanel.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import SecondPanel from "./components/SecondPanel.vue";
import ThirdPanel from "./components/ThirdPanel.vue";
import FourthPanel from "./components/FourthPanel.vue";
import Contact from "./components/Contact.vue";

function goto(id) {
     document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }

</script>

<template>
  <div>
    <div class="snap-y bg-dark-blue">
      <div class="sticky top-0 z-50">
        <nav-bar @goto="goto"></nav-bar>
      </div>
      <div id="first-panel"
        class="
          snap-start
          bg-gradient-to-b
          from-dark-blue
          to-dark-purple
          h-screen
          w-screen
        "
      >
        <first-panel @goto="goto"></first-panel>
      </div>
      <div id="second-panel"
        class="
          snap-center
          bg-gradient-to-b
          from-dark-purple
          to-purple
          h-screen
          w-screen
        "
      >
       <second-panel></second-panel>
      
      </div>
      <div id="third-panel"
        class="
          snap-start
          bg-gradient-to-b
          from-purple
          to-pink
          h-screen
          w-screen
        "
      >
       <third-panel/>
      </div>
      <div id="fourth-panel"
        class="
          snap-start
          bg-gradient-to-b
          from-pink
          to-orange
          h-screen
          w-screen
        "
      >
        <fourth-panel></fourth-panel>
      </div>
      <div id="contact" class="snap-start bg-orange h-fit w-screen">
        <contact/>
      </div>
    </div>
  </div>
</template>

<style>
</style>
