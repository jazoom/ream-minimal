<template>
  <div>

    <div>
      <router-link tag='button' to='page1'>Page 1</router-link>
      <router-link tag='button' to='page2'>Page 2</router-link>
      <router-link tag='button' to='page3'>Page 3</router-link>
    </div>

    <router-view></router-view>

  </div>
</template>

<script src='./script.js'></script>