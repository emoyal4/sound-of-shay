import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sounds:[
      {
        id: 's101',
        title: 'title 1',
        mood: 'Sleeping',
        duration: 3.2,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662106201/sounds-of-shay/DSC_5058_l9cdki.jpg',
        soundUrl: 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg'
      },
      {
        id: 's102',
        title: 'title 2',
        mood: 'Eating',
        duration: 1.6,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662106106/sounds-of-shay/DSC_5067_ejk8uu.jpg',
        soundUrl: 'https://sndup.net/bsc2/d'
      },
      {
        id: 's103',
        title: 'title 3',
        mood: 'Playful',
        duration: 3.8,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662105947/sounds-of-shay/DSC_5052_ntuutg.jpg',
        soundUrl: 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg'
      },
      {
        id: 's104',
        title: 'title 4',
        mood: 'Yawning',
        duration: 1.5,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662105946/sounds-of-shay/DSC_5145_hggdvb.jpg',
        soundUrl: 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg'
      },
      {
        id: 's105',
        title: 'title 5',
        mood: 'Sleeping',
        duration: 2.1,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662105946/sounds-of-shay/DSC_5151_wyq622.jpg',
        soundUrl: 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg'
      },
      {
        id: 's106',
        title: 'title 6',
        mood: 'Eating',
        duration: 1.6,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662106106/sounds-of-shay/DSC_5067_ejk8uu.jpg',
        soundUrl: 'https://sndup.net/vjvt/d'
      },
      {
        id: 's107',
        title: 'title 7',
        mood: 'Hiccup',
        duration: 1.6,
        imgUrl: 'https://res.cloudinary.com/eli-ltd/image/upload/v1662106106/sounds-of-shay/DSC_5067_ejk8uu.jpg',
        soundUrl: 'https://sndup.net/zysc/d'
      },
    ]
  },
  getters:{
    sounds(state){
      return state.sounds
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
