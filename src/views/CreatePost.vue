<template>
  <div class="create-post">
    <form @submit.prevent="handleSubmit">
      <label>Author:</label>
      <input v-model="author" type="text" required />
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content:</label>
      <textarea v-model="body" required />
      <label>Tags:</label>
      <input
        @keydown.space="handleKeydown"
        v-model="tag"
        type="text"
        placeholder="Hit space to add, click tag to delete"
      />
      <div
        v-for="tag in tags"
        :key="tag"
        class="tag-bullet"
        @click="handleDeleteTag(tag)"
      >
        {{ tag }}
      </div>
      <button v-if="isLoading" disabled>Adding Post...</button>
      <button v-else>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PostTags from "../components/PostTags.vue";
// import { projectFirestore, timestamp } from "../firebase/config";

export default {
  components: { PostTags },
  setup() {
    const router = useRouter();
    const isLoading = ref(false);
    const author = ref("");
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");

    function handleKeydown() {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    }

    function handleDeleteTag(tag) {
      const index = tags.value.indexOf(tag);
      tags.value.splice(index, 1);
    }

    async function handleSubmit() {
      isLoading.value = true;
      const post = {
        author: author.value,
        title: title.value,
        body: body.value,
        tags: tags.value,
        timestamp: new Date().getTime(),
      };

      try {
        // firebase post
        // await projectFirestore.collection("posts").add(post);

        // json-server post
        await fetch("http://localhost:3000/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
        router.push({ name: "Home" });
      } catch (err) {
        console.error(err.message);
        isLoading.value = false;
      }
    }

    return {
      author,
      title,
      body,
      tags,
      tag,
      isLoading,
      handleKeydown,
      handleSubmit,
      handleDeleteTag,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

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