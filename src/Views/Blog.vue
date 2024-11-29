

<template>
  <div class="container-fluid bg-light m-4">
    <div class="container">
      <h1 class="text-center p-5">All My Stories</h1>
      <hr/>
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <div class="card bg-light">
              <img src="/images/blog1.webp" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>July 3, 2024</strong><br>
                    <small>2 hours ago</small>
                  </div>
                  <div class="ellipsis-button" onclick="">...</div>
                </div>
                <div class="share-options">
                </div>
                <h5 class="card-title">Blog Post Title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span>Views: <strong>120</strong></span>
                <span>Comments: <strong>45</strong></span>
              </div>
            </div>
          </div>
          <!-- ------cái 2 -->
          <div class="col">
            <div class="card bg-light">
              <img src="/images/blog2.webp" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>July 3, 2024</strong><br>
                    <small>2 hours ago</small>
                  </div>
                  <div class="ellipsis-button" onclick="">...</div>
                </div>
                <div class="share-options">
                </div>
                <h5 class="card-title">Blog Post Title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span>Views: <strong>120</strong></span>
                <span>Comments: <strong>45</strong></span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-light">
              <img src="/images/blog2.webp" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>July 3, 2024</strong><br>
                    <small>2 hours ago</small>
                  </div>
                  <div class="ellipsis-button" onclick="">...</div>
                </div>
                <div class="share-options">
                </div>
                <h5 class="card-title">Blog Post Title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span>Views: <strong>120</strong></span>
                <span>Comments: <strong>45</strong></span>
              </div>
            </div>
          </div>
          <!-- ------cái 4 -->
          <div class="col">
            <div class="card bg-light">
              <img src="/images/blog3.webp" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>July 3, 2024</strong><br>
                    <small>2 hours ago</small>
                  </div>
                  <div class="ellipsis-button" onclick="">...</div>
                </div>
                <div class="share-options">
                </div>
                <h5 class="card-title">Blog Post Title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span>Views: <strong>120</strong></span>
                <span>Comments: <strong>45</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

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



.share-options button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  margin: 5px 0;
}

.share-options button:hover {
  text-decoration: underline;
}


.ellipsis-button:hover+.share-options {
  display: block;
}

</style>