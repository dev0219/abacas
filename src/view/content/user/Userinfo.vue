<template>
    <div class="userinfo card card-custom card-stretch gutter-b w-100 p-7">        
        <div class="d-flex learning">
            <div class="uservatar d-flex" v-bind:style="!begin?'padding:0px !important;':'padding:30px !important'">
                <img :src="require('@/assets/images/Monito.svg')" style="width:112px">
                <div class="username ml-4"><p>User Name</p></div>
                
            </div>
            <div class="d-flex mt-3">
                <div v-if="begin" class="d-flex mt-3">
                    <v-card class="learn-platform mr-6" v-bind:class="currentVideo=='platform'?'videodisplay':'novideodisplay'" width="150" height="150" @click="VideoClick('platform')">
                        <div class="learn-byvideo text-center">
                            <img :src="require('@/assets/images/youtube.svg')" style="width:50px">
                            <p>¡Aprende a usar la plataforma!</p>
                        </div>
                    </v-card>
                    <v-card class="learn-platform" width="150" height="150" @click="VideoClick('abacus')"  v-bind:class="currentVideo=='abacus'?'videodisplay':'novideodisplay'" >
                        <div class="learn-byvideo use-abacus  text-center">
                            <img :src="require('@/assets/images/abacas.svg')" style="width:50px">
                            <p>¡Aprende a usar el ábaco!</p>
                        </div>
                    </v-card>
                </div> 
                <div class="backspace" v-if="!begin">
                    <img :src="require('@/assets/images/back.svg')" @click="backspace()">
                </div>               
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/user/userinfo.scss";
.videodisplay{
    z-index: 100000;
}
.novideodisplay{
    z-index: 9;
}
</style>

<script>

export default{
    props: ['begin','currentVideo'],
   name: "userInfo",
   data() {
       return {

       }
   },
   created() {
       
      this.previous = localStorage.getItem('previous')
   },
   methods:{
       VideoClick(val) {
            this.$emit('Videoshow', val)
       },
       backspace() {
            this.$router.push(this.previous);
       }
   }
}
</script>
