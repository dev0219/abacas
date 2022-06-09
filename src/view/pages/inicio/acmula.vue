
<template>
    <div data-app>
        <div class="row">
            <UserInfo :begin="begin"   :currentVideo="currentVideo"></UserInfo>
        </div>
        <div class="text-center" style="margin-top:100px">
             <img class="mt-10" :src="require('@/assets/images/bigcard.png')" @click="Stepcompleted()">
        </div>      
    </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/begin/begin.scss";
.Zindex{
    z-index: 100000;
}
.noZindex{
    z-index: 9;
}
</style>

<script>
import UserInfo from "@/view/content/user/Userinfo.vue";
export default {
  name: "inicio",
  components: {
    UserInfo,
  },
 created() {
       localStorage.removeItem('CompletedPost')
        localStorage.removeItem('FailPost')
  },
  data() {
      return {
         begin:false,
          currentVideo:"explain",
        
      }
  },
  methods: {
     Stepcompleted() {
            this.$router.push('/begin')
             localStorage.setItem('CompletedPost',true)
     }
  }
}
</script>