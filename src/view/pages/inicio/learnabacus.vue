
<template>
    <div data-app>
        
        <div v-bind:class="currentVideo == 'explain' || currentVideo == 'completed'? 'backdrop':'nobackdrop'"></div>
        <div class="row">
            <UserInfo :begin="begin"   :currentVideo="currentVideo"></UserInfo>
        </div>
        <div>
            <v-row>
                <v-col cols="12">
                    <div class="course-title">
                        {{abacusobj.description}}
                    </div>
                </v-col> 
                <v-col class="text-center" lg="4" md="6" sm="12" v-bind:class="currentVideo == 'explain'?'Zindex':''">
                
                        <div  class="explain-byvideo" @click="onClickChild('explain')"  >
                            <div   >
                                <img :src="require('@/assets/images/videocard.png')">
                                <p class="mb-0 mt-10">La Miss te explica</p>
                            </div>
                        </div>
                        <img class="mt-7 cardimg" v-bind:class="currentVideo == 'completed'?'Zindex':'AcuZindex'" :src="require('@/assets/images/card.png')" @click="Completed()">
               
                    
                </v-col>
                <v-col class="text-center" v-for="item in abacusExerciesArr" v-bind:key="item.description" lg="4" md="6" sm="12">
                             
                    
                            <div class="position-relative">
                                <div class="lock-screen" v-if="!item.timetostart">
                                    <span class="material-icons">lock</span>
                                </div> 
                                <div class="lesson-video" @click="abacusCal(item.id)">
                                <div>
                                    <img :src="require('@/assets/images/abacuspic.png')">
                                    <p>{{item.description}}</p>
                                </div>
                                </div>
                                <div class="avance">                        
                                    <p class="avance-title">Avance {{item.Avance}} %</p>
                                    <div class="avance-divider"></div>
                                    <p class="recompensas-title">RECOMPENSAS</p>
                                    <div class="recompensas-body">
                                        <img :src="require('@/assets/images/moneypic.png')" width="50">
                                        <div class="recompensas-content">
                                            <p>Termina este reto y recibe {{item.credit}} monedas de crédito</p>
                                        </div>
                                    </div>
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
.AcuZindex{
    opacity: 0.5;
    pointer-events: none;
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
          abacusArr:[
              {description:'Sumas y Restas fáciles', level:'', timetostart:false},
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
          abacusExerciesArr:[
              {id:1,description:'Aprende y practica',timetostart:false,Avance:0,credit:50},
               {id:2,description:'Demuestra tus habilidades',timetostart:false,Avance:60,credit:50}
          ],
          abacusobj:{id:1,description:'Sumas y Restas fáciles', level:'', timetostart:false},
          VideoUrl:"",
          learndialogue: false,
          abacusTechVideo:false,
          CourseTitle:"",
          isbackspace:"",
          step:1,
          begin:false,
          currentVideo:"explain"
      }
  },
  created() {
      if(localStorage.getItem('FailPost')){
          this.currentVideo = 'completed';
          this.abacusExerciesArr = [
              {id:1,description:'Aprende y practica',timetostart:true,Avance:100,credit:50},
               {id:2,description:'Demuestra tus habilidades',timetostart:true,Avance:100,credit:50}
          ];
      }
  },
  methods: {
      onClickChild(val) {
          if(this.currentVideo != ''){
             this.currentVideo = val;          
          this.learndialogue = true;
          }
          
      },
      abacusCal(id) {
           var pathname = new URL(location.href).pathname;
      localStorage.setItem('previous',pathname)
          this.$router.push(pathname+'/'+id)
      },
      Wahched() {
          this.abacusExerciesArr[0]['timetostart'] = true;
          this.currentVideo = '';
          this.learndialogue = false;
      },
      Completed() {
          this.$router.push('/begin/acumula/'+1)
      }
  }
}
</script>