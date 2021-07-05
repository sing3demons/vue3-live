<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light my-4">Login</h3>
                </div>
                <div class="card-body">
                  <form @submit.prevent="onSubmit">
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="email"
                        type="email"
                        v-model="email"
                        placeholder="name@example.com"
                      />
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="password"
                        type="password"
                        v-model="password"
                        placeholder="Password"
                      />
                      <label for="inputPassword">Password</label>
                    </div>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        id="inputRememberPassword"
                        type="checkbox"
                        value=""
                      />
                      <label
                        class="form-check-label"
                        for="inputRememberPassword"
                        >Remember Password</label
                      >
                    </div>
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        mt-4
                        mb-0
                      "
                    >
                      <a class="small" href="password.html">Forgot Password?</a>
                      <button type="submit" class="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center py-3">
                  <div class="small">
                    <a href="register.html">Need an account? Sign up!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div id="layoutAuthentication_footer">
      <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2021</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { BASE_API_URL } from "../constants/index";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Login",
  setup: () => {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const { dispatch } = useStore();

 

    const onSubmit = async () => {
      try {
        const { data } = await axios.post(`${BASE_API_URL}/api/login`, {
          email: email.value,
          password: password.value,
        });
        // console.log(data.access_token);
        localStorage.setItem("token", JSON.stringify(data.access_token));

        //call actions = store.dispatch
        dispatch("getProfile");

        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    return { onSubmit, email, password };
  },
};
</script>

<style></style>
