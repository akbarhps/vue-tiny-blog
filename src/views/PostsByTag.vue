<template>
  <div class="screen-layout">
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagTable :posts="posts" />
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else><ProgressBar /></div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import fetchPost from "../composables/fetchPost";

import PostList from "../components/PostList.vue";
import TagTable from "../components/TagTable.vue";
import ProgressBar from "../components/ProgressBar.vue";

export default {
  components: { PostList, ProgressBar, TagTable },
  setup() {
    const route = useRoute();
    const { posts, error, getAllPost } = fetchPost();

    getAllPost();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>
