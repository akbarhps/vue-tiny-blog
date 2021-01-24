<template>
  <div>
    <span class="tag-bullet" v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'PostsByTag', params: { tag: tag } }">
        {{ tag }}
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: ["tags"],
};
</script>

<style>
.tag-bullet {
  display: inline-block;
  margin: 10px 10px 0 0;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.tag-bullet a {
  color: black;
  text-decoration: none;
}
</style>