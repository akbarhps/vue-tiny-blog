import { ref } from 'vue'
// import { projectFirestore } from '../firebase/config'

function fetchPost() {
  const posts = ref([]);
  const post = ref(null)
  const error = ref(null)

  async function getAllPost() {
    try {
      // Firebase fetchPosts
      // const res = await projectFirestore.collection('posts')
      //   .orderBy('createdAt', 'desc')
      //   .get()

      // posts.value = res.docs.map(doc => {
      //   return { ...doc.data(), id: doc.id }
      // })

      // json-server fetchPosts
      const res = await fetch('http://localhost:3000/blogs');
      if (!res.ok) {
        throw Error("Fetching data failed..")
      }

      let data = await res.json();
      data.sort((a, b) => {
        let da = new Date(a.timestamp),
          db = new Date(b.timestamp);
        return db - da;
      })

      posts.value = data
    } catch (err) {
      error.value = err.message;
    }
  }

  const getPost = async (id) => {
    try {
      // firebase fetch
      // let res = await projectFirestore.collection('posts').doc(id).get()
      // if (!res.exists) {
      //   throw Error('That post does not exist')
      // }
      // post.value = { ...res.data(), id: res.id }

      // json-server fetch
      const res = await fetch('http://localhost:3000/blogs/' + id);
      if (!res.ok) {
        throw Error("Fetching data failed..")
      }

      post.value = await res.json();
    } catch (err) {
      error.value = err.message
    }
  }

  return { posts, post, error, getAllPost, getPost }
}

export default fetchPost