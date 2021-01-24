<template>
  <div class="screen-layout">
    <div v-if="post" class="post">
      <h3 class="title">{{ post.title }}</h3>
      <p class="author">Posted {{ convertTimestamp() }} by {{ post.author }}</p>
      <p class="body">{{ post.body }}</p>
      <PostTags :tags="post.tags" />
      <button v-if="isLoading" disabled>Deleting Post..</button>
      <button v-else @click="deletePost()">Delete Post</button>
    </div>

    <div v-else-if="error">{{ error }}</div>
    <div v-else><ProgressBar /></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// import projectFirestore from '../firebase/config';
import fetchPost from "../composables/fetchPost";
import PostTags from "../components/PostTags.vue";
import ProgressBar from "../components/ProgressBar.vue";

export default {
  components: { ProgressBar, PostTags },
  setup() {
    const router = useRouter();
    const { id } = useRoute().params;
    const { post, error, getPost } = fetchPost();
    const isLoading = ref(false);

    function convertTimestamp() {
      return new Date(post.value.timestamp).toLocaleDateString();
    }

    async function deletePost() {
      isLoading.value = true;
      try {
        // firebase delete
        // await projectFirestore.collection("posts").doc(props.id).delete();

        // json-server delete
        await fetch(`http://localhost:3000/blogs/${id}`, { method: "DELETE" });
        router.push("/");
      } catch (err) {
        console.error(err);
        isLoading.value = false;
      }
    }

    onMounted(getPost(id));

    return { post, error, isLoading, convertTimestamp, deletePost };
  },
};
</script>

<style scoped>
button {
  border: none;
  display: block;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  padding: 8px 16px;
  border-radius: 32px;
  background: black;
}
</style>