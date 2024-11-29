<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="text-center p-5">About</h1>
      <hr>
      <div class="container mt-5">
        <div class="about-section bg-light p-4">
          <div class="row align-items-center">
            <!-- Image Section -->
            <div class="col-md-4 text-center">
              <img src="/images/about1.webp" alt="Profile Image" class="profile-image">
              <img src="/images/about2.webp" alt="Profile Image" class="images2">
            </div>

            <!-- Text Section -->
            <div class="col-md-8">
              <h1 class="main-title">Isabella Reeves</h1>
              <p class="subtitle">My personal story</p>
              <p class="subtitle text-end">Life, Faith, Confidence</p>
              <hr>
              <p class="description">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                “Edit Text” or double-click me to add your own content and make changes to the font.
                Feel free to drag and drop me anywhere you like on your page. I’m a great place for you
                to tell a story and let your users know a little more about you.
              </p>
              <p class="description">
                This is a great space to write a long text about your company and your services. You can
                use this space to go into a little more detail about your company.
                Talk about your team and what services you provide. Tell your visitors the story of how
                you came up with the idea for your business and what makes you different from
                your competitors. Make your company stand out.
              </p>
              <a href="#" class="btn btn-light">My Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  padding: 40px;
  border-radius: 10px;
}

.profile-image {
  border-radius: 20px;
  width: 100%;
  max-width: 250px;
  object-fit: cover;
  position: relative;
}


.main-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.description {
  margin-top: 20px;
}

.btn-light {
  border: 1px solid black;
  color: black;
  border-radius: 5px;
  padding: 10px 40px;
  font-weight: bold;
}

.images2 {
  position: absolute;
  bottom: 10px;
  left: 70px;
  z-index: 1;
  width: 250px;
  height: 200px;
}
</style>