<template>
  <div id="app">
    <app-nav />
    <transition name="slide-fade">
      <router-view class="page" />
    </transition>
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: { AppNav }
}
</script>


<style lang="scss">

  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }

  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }


  @import './assets/styles/global.scss';
  .page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 56px);
  }
</style>
