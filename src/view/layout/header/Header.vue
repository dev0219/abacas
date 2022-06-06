<template>
  <!-- begin:: Header -->
  <div
    id="kt_header"
    ref="kt_header"
    class="header"
    v-bind:class="headerClasses"
  >
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <!-- begin:: Header Menu -->
      <div
        class="header-menu-wrapper header-menu-wrapper-left"
        ref="kt_header_menu_wrapper"
      >
        <div
          v-if="headerMenuEnabled"
          id="kt_header_menu"
          ref="kt_header_menu"
          class="header-menu header-menu-mobile"
          v-bind:class="headerMenuClasses"
        >
        <div class="header-logo">
          <v-img src="media/logos/fastmind.png"></v-img>
        </div>
        </div>
      </div>
      <!-- end:: Header Menu -->
     
      <div class="d-flex">
         <div class="session-landing" v-if="islanding">
          <router-link :to="{ name: 'login' }">
            <v-btn rounded class="text-capitalize sesstion-button">
              Inicia Sesión
            </v-btn>
          </router-link>
        </div>
        <div v-if="islanding || islogin">
          <v-btn rounded class='text-capitalize week-free-button'>
            <div class="week-free-icon">
              <img src="media/logos/checkmark.png">
            </div>
            Prueba una semana gratis
          </v-btn>
          <div class="bank-card-detail"><p>Sin necesidad de dejar datos de tarjeta bancaria</p></div>
        </div>
        <div v-if="isregister">
          <v-btn rounded class='text-capitalize week-free-button'>
            <div class="week-free-icon">
              <img src="media/logos/checkmark.png">
            </div>
            Iniciar sesión
          </v-btn>
        </div>
        <div class="d-flex" v-if="!isregister && !islanding && !islogin">
          <router-link class="teacher-help d-flex mr-7" to="#"><span class="material-icons mr-2" style="font-size:24px;">support_agent</span><p class="mb-0 mt-1">¿Necesitas ayuda de una maestra?</p></router-link>
          <span class="material-icons" style="font-size:24px;">menu</span>
        </div>
      </div>
    </div>
  </div>
  <!-- end:: Header -->
</template>

<script>
import { mapGetters } from "vuex";
// import KTTopbar from "@/view/layout/header/Topbar.vue";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import KTLayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";

export default {
  name: "KTHeader",
  components: {
    // KTTopbar
  },
  data() {
    return {
      islanding:false,
      isregister:false,
      islogin:false,
    }
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init("kt_header", "kt_header_mobile");
    // Init Header Menu
    KTLayoutHeaderMenu.init(
      this.$refs["kt_header_menu"],
      this.$refs["kt_header_menu_wrapper"]
    );
    var pathname = new URL(location.href).pathname;
    if (pathname.includes('landing')) {
      this.islanding = true;
      this.isregister = false;
      this.islogin = true;
    } else if (pathname.includes('register')) {
      this.islanding = false;
      this.isregister = true;
      this.islogin = false;
    } else if(pathname.includes('login')){
      this.islanding = false;
      this.isregister = false;
      this.islogin = true;
    } else {
      this.islanding = false;
      this.isregister = false;
      this.islogin = false;
    }
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
