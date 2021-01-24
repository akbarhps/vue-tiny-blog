<template>
  <div class="screen-layout">
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagTable :posts="posts" />
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else><ProgressBar /></div>
  </div>
</template>

<script>
import fetchPost from "../composables/fetchPost";
import PostList from "../components/PostList.vue";
import TagTable from "../components/TagTable.vue";
import ProgressBar from "../components/ProgressBar.vue";

export default {
  components: { PostList, ProgressBar, TagTable },
  setup() {
    const { posts, error, getAllPost } = fetchPost();

    getAllPost();
    return { posts, error };
  },
};
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>