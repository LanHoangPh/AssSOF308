<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">Create Account</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="registerUser">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                          v-model="firstName"
                          class="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter your first name"
                          required
                      />
                      <label for="inputFirstName">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                          v-model="lastName"
                          class="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Enter your last name"
                          required
                      />
                      <label for="inputLastName">Last name</label>
                    </div>
                  </div>
                </div>
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
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                          v-model="password"
                          class="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Create a password"
                          required
                      />
                      <label for="inputPassword">Password</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                          v-model="passwordConfirm"
                          class="form-control"
                          id="inputPasswordConfirm"
                          type="password"
                          placeholder="Confirm password"
                          required
                      />
                      <label for="inputPasswordConfirm">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-block">Create Account</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                <router-link to="/login">Have an account? Go to login</router-link>
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.passwordConfirm) {
        alert('Mật Khẩu ko trùng kHớp!');
        return;
      }

      const users = JSON.parse(sessionStorage.getItem('users')) || [];
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      const existingUser = users.some((user) => user.email === this.email);
      if (existingUser) {
        alert('Email đã tồn tại!');
        return;
      }

      users.push(newUser);
      sessionStorage.setItem('users', JSON.stringify(users));
      alert('Đăng Ký Thành Công!');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
</style>