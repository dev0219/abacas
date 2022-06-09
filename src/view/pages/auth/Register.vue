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

              <!--begin::Signup-->
              <div class="register-form">
                <div class="step-header">
                    <div class="step-header-title">
                  
                              <v-icon v-if="step != 1" @click="beforeStep()">mdi-arrow-left</v-icon>
                              <v-icon v-if="step == 1">ss</v-icon>
                              <p v-if="step !=3">Registo</p><p v-if="step ==3">Seguridad</p><v-icon @click="landing">mdi-close</v-icon>
                    </div>
                    <div>
                      <div class="steps">
                        <v-btn class="step1-button" color="warning" fab>
                          <span v-if="step != 1" class="material-icons" style="font-size:35px;">
                          check_circle
                          </span>
                          <span v-if="step == 1" class="material-icons" style="font-size:35px;">
                          face
                          </span>
                        </v-btn><hr style="border-top: 2px dotted black"/>
                          <v-btn class="step2-button" v-bind:style=" step !=1  ? 'background-color: #5F3FB1 !important;' :'background-color: #CBD5E1 !important;' " fab>
                            <span v-if="step == 3" class="material-icons" style="font-size:35px;">
                            check_circle
                            </span>
                            <span v-if="step != 3"  class="material-icons" style="font-size:35px;">
                              supervisor_account
                            </span>
                        </v-btn><hr style="border-top: 2px dotted black"/>
                          <v-btn class="step3-button"  v-bind:style=" step ==3  ? 'background-color: #5c77e5 !important;' :'background-color: #CBD5E1 !important;' " color="warning" fab dark>
                          <span class="material-icons" style="font-size:35px;">
                          lock
                          </span>
                        </v-btn>
                      </div>
                      <div class="step-title">
                        <p>Información del estudiante</p>
                        <p>Información parental</p>
                        <p>Información de la cuenta</p>
                      </div>
                                
                    </div>
                </div>
                <div class="step-body">
                    <div class="step1" v-if="step == 1">
                        <v-row>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Nombre"
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Apellido"
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Fecha de nacimiento"
                                prepend-inner-icon="mdi-face"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-select
                                :items="items"
                                label="Grado escolar"
                                
                                outlined
                                single-line
                                prepend-inner-icon="mdi-school"
                              ></v-select>
                          </v-col>
                        </v-row>
                        <div class="d-flex continue">
                          <router-link to="#">¿Ya tienes una cuenta?</router-link>
                          <v-btn rounded color="warning" class="text-capitalize contiuneButton" @click="nextStep(2)">Continuar<span class="material-icons">east</span></v-btn>
                        </div>
                      
                    </div>
                    <div class="step2" v-if="step == 2">
                      <v-row>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                label="Nombre del padre/madre/Tutor"
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Apellido del padre/madre/Tutor"
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                          </v-col>
                          <div class="register-border"></div>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="País"
                                prepend-inner-icon="mdi-face"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Ciudad"
                                prepend-inner-icon="mdi-face"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Número de celular / Whats App"
                                prepend-inner-icon="mdi-phone"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Correo electrónico"
                                prepend-inner-icon="mdi-email"
                              ></v-text-field>
                          </v-col>
                        </v-row>
                        <div class="d-flex continue">
                          <router-link to="#" v-if="step == 1">¿Ya tienes una cuenta?</router-link>
                          <v-icon v-if="step == 2">xxxx</v-icon>
                          <v-btn rounded color="warning" class="text-capitalize contiuneButton" @click="nextStep(3)">Continuar<span class="material-icons">east</span></v-btn>
                        </div>
                    </div>
                    <div class="step3" v-if="step == 3">
                      <v-row>
                          <v-col cols="12">
                            <v-text-field
                                outlined
                                single-line
                                label="Correo electrónico*"
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Contraseña*"
                                prepend-inner-icon="mdi-email"
                              ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                                outlined
                                single-line
                                label="Confirmar Contraseña*"
                                prepend-inner-icon="mdi-email"
                              ></v-text-field>
                          </v-col>
                        </v-row>
                        <div class="d-flex continue">
                          <div>
                            <ul>
                              <li>8 dígitos</li>
                              <li>Al menos una mayúscula</li>
                            </ul> 
                          </div>
                          <v-btn rounded color="warning" class="text-capitalize contiuneButton">Registrar y comenzar</v-btn>
                        </div>
                    </div>
                </div>
                <!-- <div class="text-center mb-10 mb-lg-20">
                  <h3 class="font-size-h1">Sign Up</h3>
                  <p class="text-muted font-weight-semi-bold">
                    Enter your details to create your account
                  </p>
                </div>

              
                <b-form class="form" @submit.stop.prevent="onSubmit">
                  <b-form-group
                    id="example-input-group-0"
                    label=""
                    label-for="example-input-0"
                  >
                    <b-form-input
                      class="form-control form-control-solid h-auto py-5 px-6"
                      id="example-input-0"
                      name="example-input-0"
                      v-model="$v.form.username.$model"
                      :state="validateState('username')"
                      aria-describedby="input-0-live-feedback"
                      placeholder="Username"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-0-live-feedback">
                      Username is required.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="example-input-group-1"
                    label=""
                    label-for="example-input-1"
                  >
                    <b-form-input
                      class="form-control form-control-solid h-auto py-5 px-6"
                      id="example-input-1"
                      name="example-input-1"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                      aria-describedby="input-1-live-feedback"
                      placeholder="Email address"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-1-live-feedback">
                      Email is required and a valid email address.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="example-input-group-2"
                    label=""
                    label-for="example-input-2"
                  >
                    <b-form-input
                      class="form-control form-control-solid h-auto py-5 px-6"
                      type="password"
                      id="example-input-2"
                      name="example-input-2"
                      v-model="$v.form.password.$model"
                      :state="validateState('password')"
                      aria-describedby="input-2-live-feedback"
                      placeholder="Password"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-2-live-feedback">
                      Password is required.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <div class="form-group d-flex flex-wrap flex-center">
                    <button
                      type="submit"
                      ref="kt_login_signup_submit"
                      class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
                    >
                      Submit
                    </button>
                    <button
                      v-on:click="$router.push('login')"
                      class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
                    >
                      Cancel
                    </button>
                  </div>
                </b-form> -->
                
              </div>
              <!--end::Signup-->
            </div>
        </div>
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/login/register.scss";
@import "@/assets/sass/pages/login/login-1.scss";
</style>


<script>
import { mapState } from "vuex";
import { REGISTER } from "@/core/services/store/auth.module";
import { LOGOUT } from "@/core/services/store/auth.module";
import KTHeader from "@/view/layout/header/Header.vue";
import { validationMixin } from "vuelidate";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "register",
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
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      step:1,
      step1:false,
      step2:false,
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    landing() {
      this.$router.push('landing')
    },
    resetForm() {
      this.form = {
        username: null,
        email: null,
        password: null
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

      const username = this.$v.form.username.$model;
      const email = this.$v.form.email.$model;
      const password = this.$v.form.password.$model;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send register request
        this.$store
          .dispatch(REGISTER, {
            email: email,
            password: password,
            username: username
          })
          .then(() => this.$router.push({ name: "dashboard" }));

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    nextStep(val) {
      this.step = val;
    },
    beforeStep() {
      var step = this.step;
      this.step = step - 1;
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
