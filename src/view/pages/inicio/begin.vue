
<template>
    <div data-app>
        
        <div v-bind:class="currentVideo == 'platform' || currentVideo == 'abacus'? 'backdrop':'nobackdrop'"></div>
        <div>
            <UserInfo :begin="begin" @Videoshow="onClickChild" :currentVideo="currentVideo"></UserInfo>
        </div>
        <div>
            <div class="row">
                <div class="here">
                    <img :src="require('@/assets/images/abacas.png')" style="width:50px">
                    <div class="here-p ml-4"><p>Aquí usas ábaco</p></div>
                </div>
                <v-row class="mt-5 mb-5">
                    <v-col class="text-center d-flex justify-content-center" lg="2" md="3" sm="6" v-for="(item,index) in abacusArr" v-bind:key="item.id">
                        <div>
                            <img v-if="item.timetostart" :src="require('@/assets/images/openabacus.png')" @click="LearnAbacus(item.id)">
                            <img v-if="!item.timetostart" :src="require('@/assets/images/closeabacus.png')">
                            <div class="p-2" v-if="item.timetostart" v-bind:class="item.completed?'closeabacus':'openabacus'">
                                <p class="description">{{item.description}}</p>
                                <p class="description">{{item.level}}</p>
                                <p class="timetostart"  v-if="!item.completed && index == 0">¡Hora de comenzar!</p>
                                <p class="checkcircle"  v-if="item.timetostart && item.completed"><span class="material-icons">check_circle</span></p>
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
                    <img :src="require('@/assets/images/brain.png')" style="width:50px">
                    <div class="here-p ml-4"><p>Aquí usas tu ábaco mental</p></div>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-2">
                        <img :src="require('@/assets/images/brainlock.png')" width="250px">
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
                    <img :src="require('@/assets/images/abacas.png')" style="width:50px;height:41px;margin-top:5px"><img :src="require('@/assets/images/Mano.png')" style="width:50px"><img :src="require('@/assets/images/brain.png')" style="width:50px">
                    <div class="here-p ml-4"><p>Aquí usas todas las herramientas</p></div>
                </div>
            </v-row>
            <v-row class="mt-10 mb-10">
                <v-col lg="2" md="4" sm="6" class="">
                    <div class="tools">
                        <div class="tools-screen">
                            <span class="material-icons">lock</span>
                        </div>
                    </div>
                    <div class="mental p-2">
                            <div class="ml-4 mr-5">
                                <p class="mb-0 ml-2 mr-5">Batalla final</p>
                            </div>
                            
                        </div>
                </v-col>
            </v-row>
        </div>      
         <v-dialog v-model="learndialogue" max-width="500" class="videoscreen" persistent>
              <v-card>
                 <video
                    :key="VideoUrl"
                    width="500"
                    controls
                    >
                    <source
                        :src="require('@/assets/videos/sample.mp4')"
                        type="video/mp4"
                    >
                </video>
                <v-card-actions>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="Wahched()"
                >
                    Watched
                </v-btn>
              </v-card-actions>
              </v-card>
         </v-dialog>
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
  data() {
      return {
          previous:"",
          abacusArr:[
              {id:1,description:'Sumas y Restas fáciles', level:'', timetostart:false, completed:false},
              {id:2,description:'Los primos te ayudan a sumar', level:'+5',timetostart:false, completed:false},
              {id:3,description:'Los primos te ayudan a restar', level:'-5',timetostart:false, completed:false},
              {id:4,description:'Primos sumando y restando', level:'+5, -5',timetostart:false, completed:false},
              {id:5,description:'Los tíos te ayudan a sumar', level:'+10',timetostart:false, completed:false},
              {id:6,description:'Los tíos te ayudan a restar', level:'-10',timetostart:false, completed:false},
              {id:7,description:'Tíos sumando y restando', level:'+10, -10',timetostart:false, completed:false},
              {id:8,description:'Familia sumando', level:'+10',timetostart:false},
              {id:9,description:'Familia restando', level:'-10',timetostart:false},
              {id:10,description:'Familia sumando y restando', level:'+10, -10',timetostart:false},
          ],
          abacusExerciesArr:[
              {description:'Aprende y practica',timetostart:false,Avance:0,credit:50},
               {description:'Demuestra tus habilidades',timetostart:false,Avance:60,credit:50}
          ],
          VideoUrl:"",
          learndialogue: false,
          abacusTechVideo:false,
          CourseTitle:"",
          isbackspace:"",
          step:1,
          begin:true,
          currentVideo:"platform"
      }
  },
  created() {
      if(localStorage.getItem('CompletedPost')) {
              this.currentVideo = '';
              this.abacusArr[0]['timetostart'] = true
              this.abacusArr[0]['completed'] = true
              this.abacusArr[1]['timetostart'] = true
      }
  },
  methods: {
      onClickChild(val) {
          this.currentVideo = val;
          this.learndialogue = true;
      },
      Wahched() {

          if(this.currentVideo == 'platform'){
                this.currentVideo = 'abacus'
          }else if (this.currentVideo == 'abacus'){
                this.currentVideo = '';
                this.abacusArr[0]['timetostart'] = true
          }else if (this.currentVideo == 'explain') {
              this.currentVideo = '';
              this.abacusExerciesArr[0]['timetostart'] = true
          }
          if(localStorage.getItem('CompletedPost')) {
              this.currentVideo = '';
          }
          this.learndialogue = false;
      },
      LearnAbacus(id) {
          
      var pathname = new URL(location.href).pathname;
      this.previous = pathname;
      localStorage.setItem('previous',pathname)
        this.$router.push('/begin/'+id)
      }
  }
}
</script>