<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">Login</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="loginUser">
                <div class="form-floating mb-3">
                  <input
                      v-model="email"
                      class="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      required
                  />
                  <label for="inputEmail">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                      v-model="password"
                      class="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                      required
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <div class="form-check mb-3">
                  <input
                      v-model="rememberMe"
                      class="form-check-input"
                      id="inputRememberPassword"
                      type="checkbox"
                      value=""
                  />
                  <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                <router-link to="/register">Need an account? Sign up!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    loginUser() {
      const users = JSON.parse(sessionStorage.getItem('users')) || [];
      const user = users.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        alert('Đăng Nhập Thành Công!');
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        this.$router.push('/');
      } else {
        alert('Sai Email Hoặc Mật Khẩu!');
      }
    },
  },
};
</script>

<style scoped>
</style>
