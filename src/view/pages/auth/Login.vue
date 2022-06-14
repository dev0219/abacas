<template>
<div class="d-flex flex-column flex-root">
    <div
      class="login login-1 login-signin-on d-flex flex-column  flex-row-fluid"
      id="kt_login"
    >
      <!--begin::Content-->
      <KTHeader></KTHeader>
      <div
        class="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden"
      >
        <div class="d-flex flex-column-fluid flex-center mt-20 mb-10">
            <div>
              <!--begin::Content header-->
              <!--end::Content header-->

              <!--begin::Signin-->
              <div v-if="isStudentinfo" class="login-form login-signin bg-white p-2">
                <div class="icon-close"><router-link
                    class="font-weight-bold font-size-3 ml-2"
                    :to="{ name: 'landing' }"
                  ><v-icon class="mdi-close" md >mdi-close</v-icon></router-link></div>
                <div class="text-center mb-5 mb-lg-10">
                  <h3 class="login-header-title">Iniciar sesión</h3>
                  <p class="login-header-playing text-muted font-weight-semi-bold">
                  ¿Estás listo para aprender jugando?
                  </p>
                </div>

                <!--begin::Form-->
                <div class="signin-logo">
                  <v-img :src="require('@/assets/images/avlogo.svg')"></v-img>
                </div>
                <b-form class="form" @submit.stop.prevent="onSubmit">
                  <div
                    role="alert"
                    v-bind:class="{ show: errors.length }"
                    class="alert fade alert-danger"
                  >
                    <div class="alert-text" v-for="(error, i) in errors" :key="i">
                      {{ error }}
                    </div>
                  </div>

                  <b-form-group
                    id="example-input-group-1"
                    label=""
                    label-for="example-input-1"
                    class="pr-7 pl-7"
                  >
                    <v-text-field
                       single-line
                        outlined 
                      label="Nombre de usuario"
                      prepend-inner-icon="mdi-account"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                    ></v-text-field>

                    <b-form-invalid-feedback id="input-1-live-feedback">
                      Email is required and a valid email address.
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group
                    id="example-input-group-2"
                    label=""
                    label-for="example-input-2"
                    class="pr-7 pl-7"
                  >
                    <v-text-field
                      outlined
                      single-line
                      label="Contransena"
                      prepend-inner-icon="mdi-lock"
                      v-model="$v.form.password.$model"
                      :state="validateState('password')"
                    ></v-text-field>
                    <b-form-invalid-feedback id="input-2-live-feedback">
                      Password is required.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <!--begin::Action-->
                  <div
                    class="login-action form-group d-flex flex-wrap justify-content-between align-items-center pr-7 pl-7"
                  >
                    <a
                      href="#"
                      class="text-dark-60 text-hover-primary my-3 mr-2"
                      id="kt_login_forgot"
                      @click="forgotPassLink()"
                    >
                    ¿Olvidaste tu contraseña?
                    </a>
                    <button
                      ref="kt_login_signin_submit"
                      class="login-button btn btn-success font-weight-bold px-9 py-4 my-3 font-size-3 rounded-pill"
                    >
                    Iniciar sesión en FastMind
                    </button>
                  </div>
                  <!--end::Action-->
                </b-form>
                <div
                class="top-0 right-0 text-right mb-15 mb-lg-0 flex-column-auto justify-content-center pr-7 pb-3"
                >
                  <router-link
                    class="font-weight-bold font-size-3 ml-2"
                    :to="{ name: 'register' }"
                  >
                    ¿No tienes una cuenta? Regístrate ahora
                  </router-link>
                </div>
                <!--end::Form-->
              </div>
              <div v-if="isForgotPassword" class="login-form login-signin bg-white p-2">
                <div class="icon-close" @click="StudentinfoLink()"><v-icon class="mdi-close" md >mdi-close</v-icon></div>
                <div class="text-center mb-5 mb-lg-10">
                  <h3 class="login-header-title">He olvidado la contraseña o el nombre de usuario.</h3>
                  <p class="login-header-playing text-muted font-weight-semi-bold">
                  Introduce el correo electrónico para restablecer tu contraseña.
                  </p>
                </div>
                <b-form class="form" @submit.stop.prevent="onSubmit">
                  <div
                    role="alert"
                    v-bind:class="{ show: errors.length }"
                    class="alert fade alert-danger"
                  >
                    <div class="alert-text" v-for="(error, i) in errors" :key="i">
                      {{ error }}
                    </div>
                  </div>

                  <b-form-group
                    id="example-input-group-1"
                    label=""
                    label-for="example-input-1"
                    class="pr-7 pl-7"
                  >
                    <v-text-field
                      outlined
                      label="Nombre de usuario"
                      prepend-inner-icon="mdi-email"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                    ></v-text-field>

                    <b-form-invalid-feedback id="input-1-live-feedback">
                      Email is required and a valid email address.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <!--begin::Action-->
                  <div
                    class="form-group d-flex flex-wrap justify-content-between align-items-center pr-7 pl-7"
                  >
                    <button
                      ref="kt_login_signin_submit"
                      class="login-button btn btn-success font-weight-bold px-9 py-4 my-3 font-size-3 rounded-pill w-100"
                    >
                    Send email to reset password
                    </button>
                  </div>
                  <!--end::Action-->
                </b-form>
                <div class="top-0 right-0 text-right mb-15 mb-lg-0 flex-column-auto justify-content-center pr-7 pb-3" v-if="isStudentinfo" >
                  <router-link
                    class="font-weight-bold font-size-3 ml-2"
                    :to="{ name: 'register' }"
                  >
                    ¿No tienes una cuenta? Regístrate ahora
                  </router-link>
                </div>
                <!--end::Form-->
              </div>
              <!--end::Signin-->
            </div>
        </div>
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Courier+Prime&display=swap');
@import "@/assets/sass/pages/login/login-1.scss";
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
</style>

<script>
import KTHeader from "@/view/layout/header/Header.vue";
import { mapState } from "vuex";
import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";

import { validationMixin } from "vuelidate";
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "login",
  components: {
    KTHeader,
  },
  data() {
    return {
      // Remove this dummy login info
      form: {
        email: "admin@demo.com",
        password: "demo"
      },
      isStudentinfo:true,
      isForgotPassword:false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    forgotPassLink() {
      this.isStudentinfo = false;
      this.isForgotPassword = true;
    },
    StudentinfoLink() {
      this.isStudentinfo = true;
      this.isForgotPassword = false;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      const email = this.$v.form.email.$model;
      const password = this.$v.form.password.$model;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { email, password })
          // go to which page after successfully login
          .then(() => this.$router.push({ name: "begin" }));

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
