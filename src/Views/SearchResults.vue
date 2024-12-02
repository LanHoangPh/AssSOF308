<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="text-center p-5">Search Results</h1>
      <hr>
      <form class="search-bar p-2 m-3">
        <div class="d-flex align-items-center border rounded border-1">
          <button type="submit" class="btn">
            <i class="fas fa-search"></i>
          </button>
          <input type="text" class="form-control border-1 " placeholder="Search......" />
        </div>
      </form>
      <div class="container m-5">
        <div class="row align-items-center">
          <div class="col-md-4">
            <img src="/images/search1.webp" class="img-fluid"  alt="About Image">
          </div>
          <div class="col-md-8">
            <p class="about-text">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
              double click me to add your own content and make changes to the font. I’m a great place for you to tell
              a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>