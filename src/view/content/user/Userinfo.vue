<template>
    <div class="card card-custom card-stretch gutter-b w-100 p-7">
        <div class="d-flex learning">
            <div class="uservatar d-flex">
                <img src="media/logos/Monito.png" style="width:112px">
                <div class="username ml-4"><p>User Name</p></div>
                
            </div>
            <div class="d-flex mt-3">
                <v-card class="learn-platform mr-6" width="150" height="150" @click="VideoClick('platform')">
                    <div class="learn-byvideo text-center">
                        <img src="media/logos/youtube.png" style="width:50px">
                        <p>¡Aprende a usar la plataforma!</p>
                    </div>
                </v-card>
                <v-card class="learn-platform" width="150" height="150" @click="VideoClick('abacus')">
                    <div class="learn-byvideo use-abacus  text-center">
                        <img src="media/logos/abacas.png" style="width:50px">
                        <p>¡Aprende a usar el ábaco!</p>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/user/userinfo.scss";
</style>

<script>

export default{
   name: "userInfo",
   data() {
       return {

       }
   },
   methods:{
       VideoClick(val) {
            this.$emit('Videoshow', val)
       }
   }
}
</script>
