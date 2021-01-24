<template>
  <div class="screen-layout">
    <h2>Page not found</h2>
    <button>
      <router-link to="/">Back to Homepage</router-link>
    </button>
  </div>
</template>

<style scoped>
button {
  border: none;
  display: block;
  cursor: pointer;
  margin: 30px auto;
  padding: 14px 30px;
  border-radius: 32px;
  background: black;
}

button a {
  color: white;
  text-decoration: none;
}
</style>