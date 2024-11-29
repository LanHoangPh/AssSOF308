<script setup>

</script>

<template>
  <div class="container-fluid bg-light">
    <div class="container">
      <h1 class="text-center m-5">My Podcast</h1>
      <hr>
      <div class="container m-sm-5">
        <div class="row align-items-center">
          <div class="col-md-3">
            <img src="/images/headerpodcast.jpg" class="img-fluid" alt="Podcast Image"
                 title="Lessons of Faith" style="width: 280px; height: 280px;">
          </div>
          <div class="col-md-9">
            <h1><strong>Lessons of Faith</strong></h1>
            <p class="about-text">
              Isabella Reeves
            </p>
            <div class="podcast-icons">
              <a href="#" class="btn btn-icon"><i class="fas fa-podcast"></i></a>
              <a href="#" class="btn btn-icon"><i class="fab fa-apple"></i></a>
              <a href="#" class="btn btn-icon"><i class="fas fa-rss"></i></a>
              <a href="#" class="btn btn-icon"><i class="fab fa-spotify"></i></a>
              <a href="#" class="btn btn-icon"><i class="fas fa-music"></i></a>
            </div>
          </div>
          <p class="about-text">
            All the info, audio or video that's needed to show and play your podcast episodes is contained
            in the RSS feed. Head to Settings and connect your podcast's RSS feed.
          </p>
          <!-- ---Tìm kiếm---- -->
          <form class="search-bar p-2 m-3">
            <div class="d-flex align-items-center border rounded border-0">
              <button type="submit" class="btn btn-light">
                <i class="fas fa-search"></i>
              </button>
              <input type="text" class="form-control border-0 bg-transparent"
                     placeholder="Search PodCasts...." />
            </div>
          </form>
          <!-- ------- -->
        </div>
        <!-- ---List Podcast--- -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <div class="podcast-card bg-light">
              <a href="#" class="podcast-link">
                <div class="image-container">
                  <img src="/images/podcast1.jpg" alt="Podcast Cover">
                  <div class="play-button">▶</div>
                </div>
                <div class="podcast-info">
                  <h2>Finding Fulfillment in Community Life</h2>
                  <p>29/9/2023 | 10 min</p>
                  <p>Do you have video episodes in your podcast? Any podcast episodes will get a
                    video player.</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="podcast-card bg-light">
              <a href="#" class="podcast-link">
                <div class="image-container">
                  <img src="/images/podcast6.png" alt="Podcast Cover">
                  <div class="play-button">▶</div>
                </div>
                <div class="podcast-info">
                  <h2>Finding Fulfillment in Community Life</h2>
                  <p>29/9/2023 | 10 min</p>
                  <p>Do you have video episodes in your podcast? Any podcast episodes will get a
                    video player.</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="podcast-card bg-light">
              <a href="#" class="podcast-link">
                <div class="image-container">
                  <img src="/images/podcast2.jpg" alt="Podcast Cover">
                  <div class="play-button">▶</div>
                </div>
                <div class="podcast-info">
                  <h2>Finding Fulfillment in Community Life</h2>
                  <p>29/9/2023 | 10 min</p>
                  <p>Do you have video episodes in your podcast? Any podcast episodes will get a
                    video player.</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="podcast-card bg-light">
              <a href="#" class="podcast-link">
                <div class="image-container">
                  <img src="/images/podcast3.jpg" alt="Podcast Cover">
                  <div class="play-button">▶</div>
                </div>
                <div class="podcast-info">
                  <h2>Finding Fulfillment in Community Life</h2>
                  <p>29/9/2023 | 10 min</p>
                  <p>Do you have video episodes in your podcast? Any podcast episodes will get a
                    video player.</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="podcast-card bg-light">
              <a href="#" class="podcast-link">
                <div class="image-container">
                  <img src="/images/podcast4.jpg" alt="Podcast Cover">
                  <div class="play-button">▶</div>
                </div>
                <div class="podcast-info">
                  <h2>Finding Fulfillment in Community Life</h2>
                  <p>29/9/2023 | 10 min</p>
                  <p>Do you have video episodes in your podcast? Any podcast episodes will get a
                    video player.</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="podcast-card bg-light">
              <a href="#" class="podcast-link">
                <div class="image-container">
                  <img src="/images/podcast5.jpg" alt="Podcast Cover">
                  <div class="play-button">▶</div>
                </div>
                <div class="podcast-info">
                  <h2>Finding Fulfillment in Community Life</h2>
                  <p>29/9/2023 | 10 min</p>
                  <p>Do you have video episodes in your podcast? Any podcast episodes will get a
                    video player.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

.about-text {
  margin-top: 20px;
  margin-bottom: 30px;
}

.bg-transparent {
  width: 280px;
}

.podcast-card {
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.podcast-card:hover {
  transform: translateY(-5px);
}

.podcast-link {
  text-decoration: none;
  color: inherit;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  display: block;
  border-bottom: 2px solid #ddd;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 24px;
  padding: 10px 15px;
  border-radius: 50%;
  display: none;
  cursor: pointer;
}

.image-container:hover .play-button {
  display: block;
}

.podcast-info {
  padding: 15px;
}

.podcast-info h2 {
  font-size: 18px;
  margin: 0 0 10px;
}

.podcast-info p {
  font-size: 14px;
  margin: 5px 0;
  color: #555;
}
</style>