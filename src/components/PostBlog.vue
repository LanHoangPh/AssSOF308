<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <!-- From Nhập Để Post-->
      <div class="col-lg-8">
        <div class="card bg-light mt-5">
          <div class="card-header">
            <h3 class="text-center">Create a New Blog Post</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitPost">
              <div class="form-group mb-3">
                <label for="postTitle">Post Title</label>
                <input
                    v-model="postTitle"
                    type="text"
                    class="form-control"
                    id="postTitle"
                    placeholder="Enter post title"
                    required
                />
              </div>
              <div class="form-group mb-3">
                <label for="postDate">Post Date</label>
                <input
                    v-model="postDate"
                    type="date"
                    class="form-control"
                    id="postDate"
                    required
                />
              </div>
              <div class="form-group mb-3">
                <label for="postContent">Content</label>
                <textarea
                    v-model="postContent"
                    class="form-control"
                    id="postContent"
                    rows="6"
                    placeholder="Write your post content here"
                    required
                ></textarea>
              </div>
              <div class="form-group mb-3">
                <label for="postImage">Post Image</label>
                <input
                    type="file"
                    class="form-control-file"
                    id="postImage"
                    accept="image/*"
                    @change="handleImageUpload"
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit Post
              </button>
            </form>
          </div>
        </div>
      </div>
<!--      Danh sách các bài post-->
      <div class="container mt-5">
        <h1 class="text-center p-5">All My Stories</h1>
        <hr />
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col" v-for="(post, index) in posts" :key="index">
            <div class="card bg-light">
              <img :src="post.image" class="card-img-top" alt="Post Image" />
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>{{ post.date }}</strong><br />
                    <small>{{ formatTimeAgo(post.date) }}</small>
                  </div>
                </div>
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.content }}</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span>Views: <strong>120</strong></span>
                <span @click="toggleCommentForm(index)">Comments: <strong>{{ post.comments.length }}</strong></span>
              </div>
              <div v-if="post.showCommentForm" class="card-body">
                <form @submit.prevent="submitComment(post, index)">
                  <div class="form-group">
                      <textarea
                          v-model="post.newComment"
                          class="form-control"
                          rows="3"
                          placeholder="Thêm Comment của bạn..."
                          required
                      ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">Submit Comment</button>
                </form>
              </div>
              <div class="card-body">
                <ul>
                  <li v-for="(comment, commentIndex) in post.comments" :key="commentIndex">
                    <strong>{{ comment.user.firstName }} {{ comment.user.lastName }}</strong>: {{ comment.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTitle: "",
      postDate: "",
      postContent: "",
      postImage: null,
      posts: [],
    };
  },
  mounted() {
    const savedPosts = sessionStorage.getItem("posts");
    if (savedPosts) {
      this.posts = JSON.parse(savedPosts);
    }
  },
  methods: {
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.postImage = await this.convertToBase64(file);
      }
    },
    convertToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    },
    submitPost() {
      if (!this.postTitle || !this.postDate || !this.postContent) {
        alert("Please fill in all the fields!");
        return;
      }
      const newPost = {
        title: this.postTitle,
        date: new Date(this.postDate).toISOString(),
        content: this.postContent,
        image: this.postImage || "/images/default.jpg",
        comments: [],
        showCommentForm: false,
        newComment: "",
      };

      this.posts.unshift(newPost);
      this.saveToSessionStorage();
      this.clearForm();
    },
    clearForm() {
      this.postTitle = "";
      this.postDate = "";
      this.postContent = "";
      this.postImage = null;
    },

    formatTimeAgo(postDate) {
      const now = new Date();
      const postTime = new Date(postDate);
      const diff = now - postTime;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (seconds < 60) {
        return `${seconds} seconds ago`;
      } else if (minutes < 60) {
        return `${minutes} minutes ago`;
      } else if (hours < 24) {
        return `${hours} hours ago`;
      } else {
        return `${days} days ago`;
      }
    },
    toggleCommentForm(postIndex) {
      this.posts[postIndex].showCommentForm = !this.posts[postIndex].showCommentForm;
    },
    submitComment(post, postIndex) {
      const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
      if (!loggedInUser) {
        alert('Bạn cần đăng nhập hoặc đằng ký để comment!');
        return;
      }
      if (post.newComment.trim() === "") {
        alert("Nhập cái gì đi chứ.");
        return;
      }

      const newComment = {
        user: {
          firstName: loggedInUser.firstName,
          lastName: loggedInUser.lastName,
        },
        text: post.newComment,
      };
      post.comments.push(newComment);
      post.newComment = "";
      post.showCommentForm = false;
      this.saveToSessionStorage();
    },

    saveToSessionStorage() {
      const savedPosts = JSON.parse(sessionStorage.getItem('posts')) || [];
      const postIndex = savedPosts.findIndex(p => p.title === this.posts[0].title);
      if (postIndex !== -1) {
        savedPosts[postIndex] = this.posts[0];
        sessionStorage.setItem('posts', JSON.stringify(savedPosts));
      }
    },
  },
};
</script>

<style scoped>
.blog-post img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
.card {
  border: none;
}
</style>
