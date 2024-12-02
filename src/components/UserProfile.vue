<template>
  <main>
    <div class="container-fluid bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">User Profile</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="updateUser">
                  <div class="form-group text-center">
                    <img
                        :src="profileImage || defaultImage"
                        alt="Profile"
                        class="rounded-circle mb-3"
                        width="120"
                        height="120"
                    />
                    <input type="file" class="form-control" @change="onFileChange" />
                  </div>
                  <div class="form-floating mb-3">
                    <input
                        v-model="firstName"
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="First Name"
                        required
                    />
                    <label for="inputFirstName">First Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                        v-model="lastName"
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Last Name"
                        required
                    />
                    <label for="inputLastName">Last Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                        v-model="email"
                        class="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <label for="inputEmail">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                        v-model="password"
                        class="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                    />
                    <label for="inputPassword">New Password (Optional)</label>
                  </div>
                  <div class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <router-link to="/" class="btn btn-secondary">Cancel</router-link>
                  </div>
                </form>
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
      profileImage: null,
      defaultImage: 'https://via.placeholder.com/120',
    };
  },
  created() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
      if (loggedInUser) {
        this.firstName = loggedInUser.firstName;
        this.lastName = loggedInUser.lastName;
        this.email = loggedInUser.email;
        this.profileImage = loggedInUser.profileImage || null;
      } else {
        alert('Bạn Chưa Đăng Nhập!');
        this.$router.push('/login');
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateUser() {
      const users = JSON.parse(sessionStorage.getItem('users')) || [];
      const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

      const userIndex = users.findIndex((user) => user.email === loggedInUser.email);

      if (userIndex !== -1) {
        users[userIndex] = {
          ...users[userIndex],
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          profileImage: this.profileImage,
          password: this.password || users[userIndex].password,
        };

        sessionStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('loggedInUser', JSON.stringify(users[userIndex]));

        alert('Profile updated successfully!');
      } else {
        alert('An error occurred while updating the profile.');
      }
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
  border: 2px solid #ccc;
}
</style>
