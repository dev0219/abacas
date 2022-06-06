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
        <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
          <router-view></router-view>
        </div>
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import { mapState } from "vuex";
import KTHeader from "@/view/layout/header/Header.vue";

export default {
  name: "auth",
   components: {
    KTHeader,
  },
  methods: {},
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
  }
};
</script>
