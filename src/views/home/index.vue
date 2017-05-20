<template>
  <div>

    <div>
      <router-link tag='button' replace to='page1'>Page 1</router-link>
      <router-link tag='button' replace to='page2'>Page 2</router-link>
      <router-link tag='button' replace to='page3'>Page 3</router-link>
    </div>

    <router-view></router-view>

  </div>
</template>

<script src='./script.js'></script>