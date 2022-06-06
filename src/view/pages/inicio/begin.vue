
<template>
    <div data-app>
        <div class="row">
            <UserInfo @Videoshow="onClickChild"></UserInfo>
        </div>
        <div class="row">
            <div class="here">
                <img src="media/logos/abacas.png" style="width:50px">
                <div class="here-p ml-4"><p>Aquí usas ábaco</p></div>
            </div>
            <v-row class="mt-5 mb-5">
                <v-col class="text-center d-flex justify-content-center" lg="2" md="4" sm="6" v-for="(item) in abacusArr" v-bind:key="item.description">
                    <div>
                        <img v-if="item.timetostart" src="media/logos/openabacus.png">
                        <img v-if="!item.timetostart" src="media/logos/closeabacus.png">
                        <div class="openabacus p-2" v-if="item.timetostart">
                            <p class="description">{{item.description}}</p>
                            <p class="description">{{item.level}}</p>
                            <p class="timetostart">¡Hora de comenzar!</p>
                        </div>
                        <div class="closeabacus p-2" v-if="!item.timetostart">
                            <p class="closedescription mb-0">{{item.description}}</p>
                            <p class="closedescription">{{item.level}}</p>
                        </div>
                    </div>                    
                </v-col>
            </v-row>
        </div>
        <v-divider></v-divider>
        <div class="mt-10 mb-10" >
            <div class="here" style="display:inline-flex;">
                <img src="media/logos/brain.png" style="width:50px">
                <div class="here-p ml-4"><p>Aquí usas tu ábaco mental</p></div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-2">
                    <img src="media/logos/brainlock.png" width="250px">
                    <div class="mental p-2">
                        <div class="ml-4 mr-5">
                            <p class="mb-0 ml-2 mr-5">Sumas y Restas fáciles</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
         <v-divider></v-divider>
        <v-row class="mt-10">
            <div class="here">
                <img src="media/logos/abacas.png" style="width:50px;height:41px;margin-top:5px"><img src="media/logos/Mano.png" style="width:50px"><img src="media/logos/brain.png" style="width:50px">
                <div class="here-p ml-4"><p>Aquí usas todas las herramientas</p></div>
            </div>
        </v-row>
        <v-row class="mt-10 mb-10">
            <v-col lg="2" md="4" sm="6" class=" d-flex justify-content-center">
                <div class="tools">
                    <div class="tools-screen">
                        <span class="material-icons">lock</span>
                    </div>
                </div>
            </v-col>
        </v-row>
         <v-dialog v-model="learndialogue" max-width="500">
              <v-card>
                 <video
                    :key="VideoUrl"
                    width="500"
                    controls
                    >
                    <source
                        src="media/videos/sample.mp4"
                        type="video/mp4"
                    >
                </video>
              </v-card>
         </v-dialog>
    </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/begin/begin.scss";
</style>

<script>
import UserInfo from "@/view/content/user/Userinfo.vue";
export default {
  name: "inicio",
  components: {
    UserInfo,
  },
  data() {
      return {
          abacusArr:[
              {description:'Sumas y Restas fáciles', level:'', timetostart:true},
              {description:'Los primos te ayudan a sumar', level:'+5',timetostart:false},
              {description:'Los primos te ayudan a restar', level:'-5',timetostart:false},
              {description:'Primos sumando y restando', level:'+5, -5',timetostart:false},
              {description:'Los tíos te ayudan a sumar', level:'+10',timetostart:false},
              {description:'Los tíos te ayudan a restar', level:'-10',timetostart:false},
              {description:'Tíos sumando y restando', level:'+10, -10',timetostart:false},
              {description:'Familia sumando', level:'+10',timetostart:false},
              {description:'Familia restando', level:'-10',timetostart:false},
              {description:'Familia sumando y restando', level:'+10, -10',timetostart:false},
          ],
          VideoUrl:"",
          learndialogue: false,
      }
  },
  methods: {
      onClickChild(val) {
          console.log('--- child component---', val);
          this.learndialogue = true;
      }
  }
}
</script>