<template>
  <button @click="clickHandler" class="my-button">
    Тестовая кнопка
  </button>
</template>

<script setup>
const clickHandler = () => {
  alert("Кнопка нажата!");
};
</script>

<style scoped>
.my-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
}
</style>
