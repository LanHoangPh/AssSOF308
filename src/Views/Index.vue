<script setup>

</script>

<template>
  <div class="container-fluid bg-light mt-4">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/img_2.png" class="d-block w-100 rounded-5" alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Leap of Faith</h1>
            <p>
              Trusting God is a lifelong journey. Don’t travel alone.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/img_2.png" class="d-block w-100 rounded-5" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Leap of Faith</h1>
            <p>
              Trusting God is a lifelong journey. Don’t travel alone.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/img_2.png" class="d-block w-100 rounded-5" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Leap of Faith</h1>
            <p>
              Trusting God is a lifelong journey. Don’t travel alone.
            </p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
<!--    Content-->
    <div class="container mt-5">
      <h1 class="text-center p-5">All My Stories</h1>
      <hr />
      <!-- ---More Blog--- -->
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <!-- Blog Card 1 -->
          <div class="col">
            <div class="card bg-light">
              <img src="/images/blog1.webp" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>July 3, 2024</strong><br>
                    <small>2 hours ago</small>
                  </div>
                  <div class="ellipsis-button" onclick="toggleShareOptions(this)">...</div>
                </div>
                <div class="share-options">
                  <button onclick="shareOnFacebook()">Share on Facebook</button>
                  <button onclick="shareOnTwitter()">Share on Twitter</button>
                  <button onclick="shareOnInstagram()">Share on Instagram</button>
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
                  <div class="ellipsis-button" onclick="toggleShareOptions(this)">...</div>
                </div>
                <div class="share-options">
                  <button onclick="shareOnFacebook()">Share on Facebook</button>
                  <button onclick="shareOnTwitter()">Share on Twitter</button>
                  <button onclick="shareOnInstagram()">Share on Instagram</button>
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
          <!-- -----cái 3 -->
          <div class="col">
            <div class="card bg-light">
              <img src="/images/blog2.webp" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <div class="blog-info">
                  <div>
                    <strong>July 3, 2024</strong><br>
                    <small>2 hours ago</small>
                  </div>
                  <div class="ellipsis-button" onclick="toggleShareOptions(this)">...</div>
                </div>
                <div class="share-options">
                  <button onclick="shareOnFacebook()">Share on Facebook</button>
                  <button onclick="shareOnTwitter()">Share on Twitter</button>
                  <button onclick="shareOnInstagram()">Share on Instagram</button>
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
                  <div class="ellipsis-button" onclick="toggleShareOptions(this)">...</div>
                </div>
                <div class="share-options">
                  <button onclick="shareOnFacebook()">Share on Facebook</button>
                  <button onclick="shareOnTwitter()">Share on Twitter</button>
                  <button onclick="shareOnInstagram()">Share on Instagram</button>
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
        <hr />
        <h1 class="text-center p-5">About</h1>
        <!-- ---- About -->
        <hr>
        <div class="container m-5">
          <div class="row align-items-center">
            <!-- Left side: Text content -->
            <div class="col-md-6">
              <h1><strong>Hi, I'm Isabella!</strong></h1>
              <h1><strong>So good to have you here.</strong></h1>
              <p class="about-text">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                double click me to add your own content and make changes to the font. I’m a great place for you to tell
                a story and let your users know a little more about you.
              </p>
              <a href="" class="btn btn-light" onclick="loadPage('podcast.html')">Read More</a>
            </div>
            <!-- Right side: Image -->
            <div class="col-md-6">
              <img src="/images/img_1.png" class="img-fluid" alt="About Image">
            </div>
          </div>
        </div>
        <hr>
        <h1 class="text-center p-5">My Podcast</h1>
        <!-- ------My Podcast -->
        <hr>
        <div class="container m-5">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src="/images/img.png" class="img-fluid" alt="Podcast Image">
            </div>
            <div class="col-md-6">
              <h1><strong>Lessons of Life: Things I've Learned, Moments I Cherish.</strong></h1>
              <p class="about-text">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                double click me to add your own content and make changes to the font. I’m a great place for you to tell
                a story and let your users know a little more about you.
              </p>
              <a href="#" class="btn btn-light">Listen</a>
              <!-- Icons -->
              <div class="podcast-icons mt-3">
                <a href="#" class="btn btn-icon"><i class="fab fa-spotify"></i></a>
                <a href="#" class="btn btn-icon"><i class="fas fa-music"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- ------ -->
        <hr>
        <h1 class="text-center b1">Have Faith. Subscribe</h1>
        <div class="container d-flex justify-content-center m-5">
          <div class="form-container">
            <form>
              <!-- Email Label and Input -->
              <div class="mb-3">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" id="emailInput" class="form-control" placeholder="Enter your email">
              </div>
              <!-- Checkbox and Button -->
              <div class="d-flex align-items-center justify-content-between">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="subscribeCheckbox">
                  <label class="form-check-label" for="subscribeCheckbox">
                    Yes, subscribe me to your newsletter.
                  </label>
                </div>
                <button type="submit" class="btn btn-subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-post img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.ellipsis-button {
  cursor: pointer;
  color: black;
  font-size: 20px;
}

.share-options {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  right: 10px;
  top: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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

.about-text {
  margin-top: 20px;
  margin-bottom: 30px;
}

.btn-light {
  border: 1px solid black;
  color: black;
  border-radius: 5px;
  padding: 10px 40px;
  font-weight: bold;
}

.btn-transparent:hover {
  background-color: #007bff;
  color: white;
}

.card {
  border: none;
}

.b1 {
  margin-top: 100px;
}

.btn-subscribe {
  background-color: #2921b9;
  color: #ffffff;
  border: 1px solid black;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
}

.btn-subscribe:hover {
  background-color: #5a52d1;
  /* Màu tím đậm hơn khi hover */
  color: #ffffff;
}

.form-container {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
}

.form-check-label {
  margin-left: 5px;
}
</style>