<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 login-signin-on d-flex flex-column  flex-row-fluid"
      id="kt_login"
    >
      <!--begin::Content-->
      <KTHeader></KTHeader>
      <div
        class="flex-row-fluid d-flex flex-column position-relative overflow-hidden landing"
      >
        <v-row no-gutters>
            <div class="mexico-eduction">41% de los estudiantes en México no encuentran trabajo</div>
            <v-col cols="3">
                <div class="child-future">
                    <div>
                        <p class="child-future-header-title">¿Te preocupa el futuro de tu hijo?</p>
                        <p class="child-future-header-detail mt-10">Se apunta que los profesionistas universitarios que trabajan o buscan ocuparse asciende 3.15 millones; 290 mil están desempleados y 1.08 millones se encuentran instalados en la informalidad, haz que tu hijo no forme parte de esta estadística</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="9">
                <div class="easy-month" :style="{ backgroundImage: `url(${backgroundImage})` }">
                <div  class="easy-month-contacts bg-white p-2">
                    <div class="text-center mb-5 mb-lg-10">
                        <h3 class="easy-math-landing-title">Matemáticas fáciles</h3>
                        <p class="easy-math-landing-playing text-muted font-weight-semi-bold">
                        Contáctanos hoy
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
                            single-line
                            outlined                          
                            label="Nombre*"
                            prepend-inner-icon="mdi-account"
                            v-model="$v.form.name.$model"
                            :state="validateState('name')"
                        ></v-text-field>

                            <b-form-invalid-feedback id="input-1-live-feedback">
                                Name is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            id="example-input-group-3"
                            label=""
                            label-for="example-input-3"
                            class="pr-7 pl-7"
                        >
                        <v-text-field
                            single-line
                            outlined                            
                            label="Número*"
                            prepend-inner-icon="mdi-whatsapp"
                            v-model="$v.form.number.$model"
                            :state="validateState('number')"
                        ></v-text-field>

                            <b-form-invalid-feedback id="input-1-live-feedback">
                                Number is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                        id="example-input-group-2"
                        label=""
                        label-for="example-input-2"
                        class="pr-7 pl-7"
                        >
                        <v-text-field
                            single-line
                            outlined                           
                            label="correo electrónico*"
                            prepend-inner-icon="mdi-email"
                            v-model="$v.form.email.$model"
                            :state="validateState('email')"
                        ></v-text-field>

                        <b-form-invalid-feedback id="input-2-live-feedback">
                            Email is required and a valid email address.
                        </b-form-invalid-feedback>
                        </b-form-group>

                        <!--begin::Action-->
                        <div
                        class="form-group d-flex flex-wrap justify-content-between align-items-center float-right pr-7 pl-7"
                        >
                        <button
                            ref="kt_login_signin_submit"
                            class="login-landing-button btn btn-success font-weight-bold px-9 py-4 my-3 font-size-3 rounded-pill w-100"
                        >
                         Comienza ahora
                        </button>
                        </div>
                        <!--end::Action-->
                    </b-form>
                    <!--end::Form-->
                  </div>
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6">
                <div class="About-us">
                    <div class="About-us-title">
                        ¿Quiénes somos?
                    </div>
                    <div class="About-us-content">
                        Somos un <span>GIMNASIO NEURONAL</span> en el que usamos el ábaco sorobán, juegos, clases muy divertidas, la aritmética mental, la tecnología y la programación mental como herramientas principales.
                         Estimulando así las regiones cerebrales cruciales para el desarrollo adecuado del aprendizaje en los niños entre 5 y 13 años.<br>
                         El ábaco japonés es una herramienta visio-espacial muy antigua que sirve para formar imágenes matemáticas en la mente de los niños, reforzando el desarrollo sensorial para la concentración, razonamiento matemático, la creatividad, la lectura, el, la observación, la conceptualización y muchos otros beneficios asociados con el cerebro.

                         <div class="youtube-icon">                            
                            <router-link to="#" class="video"><v-img class="youtube-img" :src="require('@/assets/images/youtube.svg')"></v-img>&nbsp;&nbsp; Ve nuestro video explicativo</router-link>
                         </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="About-us">
                    <v-img class="cerebro" :src="require('@/assets/images/Cerebro.svg')"></v-img>
                </div>
            </v-col>
        </v-row>
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/landing/landing.scss";

</style>

<script>
import { mapState } from "vuex";
import KTHeader from "@/view/layout/header/Header.vue";
import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";

import { validationMixin } from "vuelidate";
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "landing",
   components: {
    KTHeader,
  },
  data() {
      return {
        form: {
            email: "",
            password: "demo",
            name:"",
            number:""
        }
      }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      name: {
        required,
      },
      number: {
        required,
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
            .then(() => this.$router.push({ name: "dashboard" }));

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
    }),
    backgroundImage() {
      return process.env.BASE_URL + "media/logos/Frustracion.jpg";
    }
  }
};
</script>
