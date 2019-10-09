<template>
  <main>
    <input v-model="newName" placeholder="name" type="text"></input>
    <button @click="addName">
      Add
    </button>
    <button @click="sortNames">
      Sort
    </button>

    <transition-group tag="ul" name="slide-up" appear>
      <li v-for="(name, index) in nameList" :key="index">
        {{ name }}
      </li>
    </transition-group>
  </main>
</template>

<script>
export default {
  name: 'FakeList',
  data () {
    return {
      nameList: ['nicolas', 'anais', 'mathilde'],
      newName: ''
    }
  },
  methods: {
    addName () {
      this.nameList.push(this.newName)
      this.newName = ''
    },
    sortNames() {
      this.nameList.sort()
    }
  }
}
</script>

<style scoped>
.slide-up-enter {
    transform: translateY(10px);
    opacity: 0;
}

.slide-up-enter-active {
    transition: all 0.2s ease;
}

.slide-up-move {
        transition: all 1s ease-out;
    }
</style>
