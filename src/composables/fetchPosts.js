import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const fetchPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadPosts = async () => {
    try {
      const res = await projectFirestore.collection('posts')
        //.orderBy('title', 'desc')
        .orderBy('createdAt', 'desc')
        .get()

      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      error.value = err.message;
    }
  }

  return { posts, error, loadPosts }
}

export default fetchPosts