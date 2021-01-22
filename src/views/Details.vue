<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <!-- <button class="delete">delete post</button> -->
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import fetchPost from "../composables/fetchPost";
import { useRoute } from "vue-router";

// component imports
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  components: { Spinner },
  setup() {
    const route = useRoute();
    const { error, post, loadPost } = fetchPost(route.params.id);
    loadPost();

    return { error, post };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>