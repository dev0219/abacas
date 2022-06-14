
<template>
    <div data-app>
        
        <div v-bind:class="currentVideo == 'explain' || currentVideo == 'completed'? 'backdrop':'nobackdrop'">
            <div class="video-miss-arrow" v-if="(currentVideo == 'explain' && !learndialogue) || (currentVideo == 'completed' && !learndialogue)">
            <p>Ve el video para comenzar la sección</p>
            <img :src="require('@/assets/images/videomissarrow.svg')" style="margin-right:435px;">
        </div>
        </div>
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
                <v-col cols="1"></v-col>
                <v-col cols="4">
                    <v-row>
                    <v-col class="text-center" cols="12" v-bind:class="currentVideo == 'explain'?'Zindex':''">
                
                            <div  class="explain-byvideo" @click="onClickChild('explain')"  >
                                <div   >
                                    <img :src="require('@/assets/images/videocard.svg')">
                                    <p class="mb-0 mt-10">La Miss te explica</p>
                                </div>
                            </div>
                            <img class="mt-7 cardimg" v-bind:class="currentVideo == 'completed'?'Zindex':'AcuZindex'" :src="require('@/assets/images/card.svg')" @click="Completed()">
                
                        
                    </v-col>
                    </v-row>
                </v-col>
                <v-col cols="7" style="padding-right:20px;">
                    <v-row>
                            <v-col class="text-center" v-for="item in abacusExerciesArr" v-bind:key="item.description" lg="6" md="12" sm="12">
                                        <div class="position-relative">
                                            <div class="lockscreen-body">
                                                <div class="lock-screen" v-if="!item.timetostart">
                                                <span class="material-icons">lock</span>
                                            </div> 
                                            </div>
                                            
                                            <div class="lesson-video" @click="abacusCal(item.id)">
                                            <div>
                                                <img :src="require('@/assets/images/abacuspic.png')">
                                                <p>{{item.description}}</p>
                                            </div>
                                            </div>
                                            <div class="avance">   
                                                <progress id="file" :value="item.Avance" max="100" style="height:20px"> {{item.Avance}}% </progress>                     
                                                <p class="avance-title">Avance {{item.Avance}} %</p>
                                                <div class="avance-divider"></div>
                                                <p class="recompensas-title">RECOMPENSAS</p>
                                                <div class="recompensas-body">
                                                    <img :src="require('@/assets/images/moneypic.svg')" width="50">
                                                    <div class="recompensas-content">
                                                        <p>Termina este reto y recibe {{item.credit}} monedas de crédito</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                            </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>      
         <v-dialog v-model="learndialogue" max-width="500" class="videoscreen" persistent>
             
                 <video
                    :key="VideoUrl"
                    width="500"
                    controls
                     @click="Wahched()"
                    >
                    <source
                        :src="require('@/assets/videos/sample.mp4')"
                        type="video/mp4"
                    >
                </video>
             
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