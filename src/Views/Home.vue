<script setup>
</script>
<template>
  <div class="container-fluid">
    <div class="container-fluid bg-light text-black p-3">
      <header class="container-fluid">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <router-link to="/index" class="navbar-brand">L - O - F<span
                style="color: #6a5acd">*</span></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item p-2">
                  <router-link to="/blog" class="nav-link">Blog</router-link>
                </li>
                <li class="nav-item p-2">
                  <router-link to="/blogpost" class="nav-link">Blog Post</router-link>
                </li>
                <li class="nav-item p-2">
                  <router-link to="/podcast" class="nav-link">Podcast</router-link>
                </li>
                <li class="nav-item p-2">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item p-2">
                  <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
              </ul>
              <form class="search-bar p-2">
                <div class="d-flex align-items-center border rounded border-dark">
                  <input type="text" class="form-control border-0 bg-transparent" placeholder="Search..." />
                  <router-link to="/search" class="btn btn-dark">
                    <i class="fas fa-search"></i>
                  </router-link>
                </div>
              </form>
              <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><router-link to="/register" class="dropdown-item" >Đăng Ký</router-link></li>
                    <li><router-link to="/login" class="dropdown-item" >Đăng Nhập</router-link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <router-view></router-view>
    </div>
    <footer class="py-4 bg-warning-subtle mt-auto">
      <div class="footer mt-5 ">
        <div class="container m-5">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2>Send Me a Prayer &<br />I'll Send One Back</h2>
              <div class="social-icons mt-5">
                <a href="#" class="btn btn-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="btn btn-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="btn btn-icon"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="col-md-6">
              <form>
                <div class="row mb-3">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First Name *" required />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Last Name *" required />
                  </div>
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Email *" required />
                </div>
                <div class="mb-3">
                  <textarea class="form-control" rows="3" placeholder="Leave us a message..."></textarea>
                </div>
                <button type="submit" class="btn btn-outline-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="container-fluid  b2 text-center bg-primary-subtle p-2">
      <div class="container mt-3">
        <p>
          © 2024 by Lê Hoàng Lân. Use Bootstrap and Wix
          <a href="#">SOF308</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>