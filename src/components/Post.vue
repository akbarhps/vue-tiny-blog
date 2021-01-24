<template>
  <div class="post">
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <h3 class="title">{{ titleSnippet }}</h3>
      <p class="author">Posted {{ convertTimestamp() }} by {{ post.author }}</p>
      <p>{{ bodySnippet }}</p>
    </router-link>
    <PostTags :tags="post.tags" />
  </div>
</template>

<script>
import { computed } from "vue";
import PostTags from "./PostTags.vue";

export default {
  props: ["post"],
  components: { PostTags },
  setup(props) {
    const bodySnippet = computed(() => {
      let bodySnippet = props.post.body.substring(0, 100);
      if (props.post.body.length > 100) {
        bodySnippet += "...";
      }
      return bodySnippet;
    });

    const titleSnippet = computed(() => {
      let titleSnippet = props.post.title.substring(0, 30);
      if (props.post.title.length > 30) {
        titleSnippet += "...";
      }
      return titleSnippet;
    });

    function convertTimestamp() {
      return new Date(props.post.timestamp).toLocaleDateString();
    }

    return { titleSnippet, bodySnippet, convertTimestamp };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.post a {
  text-decoration: none;
}

.post p {
  color: #444;
}

.post .title {
  font-size: 1.2rem;
  color: white;
  background: black;
  padding: 4px;
}

.post .author {
  margin-bottom: 10px;
  font-weight: bold;
}

.post .body {
  white-space: pre-wrap;
}
</style>