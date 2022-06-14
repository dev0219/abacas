
<template>
    <div data-app>
        <div class="row">
            <UserInfo :begin="begin"   :currentVideo="currentVideo"></UserInfo>
        </div>
        <div>
            <v-row>
                <v-col cols="12" class="text-center">
                    <div class="expression-title mt-4 mb-7">
                        {{abacusobj.abacustitle}} | {{abacusobj.description}}
                    </div>
                    <div class="expression-step">
                        <div class="expression w-100 d-flex">
                            <div class="equation w-50">
                                <p class="equation-title">Ecuación</p>
                                <p class="equation-exp">{{equation.exp}}</p>
                            </div>
                            <div class="response w-50">
                                <p class="equation-title">Respuesta</p>
                                <div class="res-body d-flex">
                                   <input type="text"/>
                                    <v-btn class="text-capitalize response-btn"  @click="pageniation(equation.id+1)">Siguiente<span class="material-icons">arrow_forward_ios</span></v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="expression-pageniation d-flex justify-content-ceneter">
                            <div class="pagenation ml-2 mr-2" v-for="(item, index) in abacusobj.expsLst" v-bind:key="index" v-bind:style="sel == index?'border:1px solid':''">{{index+1}}</div>
                        </div>
                    </div>
                    <img class="mt-8" :src="require('@/assets/images/abacusmachine.svg')" style="width:70%">
                </v-col>
            </v-row>
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
  data() {
      return {
         sel:0,
         equation:{},
         begin:false,
          currentVideo:"explain",
         abacusobj:{
             id:1,
             abacustitle:"SUMAS Y RESTAS FÁCILES",
             description:"Aprende y practica",
             expsLst:[{id:0,exp:'29 +16 -10 -9',ans:''}, 
                      {id:1,exp:'49 +16 -10 -10',ans:''}, 
                      {id:2,exp:'69 +16 -10 -10',ans:''}, 
                      {id:3,exp:'29 +16 -12 -10',ans:''}, 
                      {id:4,exp:'49 +16 -12 -10',ans:''}, 
                      {id:5,exp:'79 +16 -10 -10',ans:''}, 
                      {id:6,exp:'59 +16 -10 -10',ans:''}, 
                      {id:7,exp:'23 +16 -10 -10',ans:''}, 
                      {id:8,exp:'26 +16 -10 -10',ans:''}, 
                      {id:9,exp:'28 +16 -10 -10',ans:''},]
         }
      }
  },
  created() {
       this.equation = this.abacusobj.expsLst[0];
       localStorage.removeItem('FailPost')
  },
  methods: {
     pageniation(num) {
         if(num == 10) {
             this.$router.push('/begin/'+this.abacusobj.id)
             localStorage.setItem('FailPost',true)
         }
         this.equation = this.abacusobj.expsLst[num];
         this.sel = num ;
         
     }
  }
}
</script>