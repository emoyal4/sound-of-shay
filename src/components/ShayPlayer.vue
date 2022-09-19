<template>
  <section class="shay-player main-layout">
    <div class="sound-details">
      <img
        :src="
          selectedSound?.imgUrl ||
          'https://m.media-amazon.com/images/I/81Z-X7OjlvL._AC_SL1500_.jpg'
        "
      />
      <audio ref="elAudio"></audio>

      <div class="audio-animation" :class="{ playing: isPlaying }">
        <img
          :src="
            selectedSound?.imgUrl ||
            'https://m.media-amazon.com/images/I/81Z-X7OjlvL._AC_SL1500_.jpg'
          "
        />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M46.1,-44.4C62.2,-30,79.3,-15,81.8,2.5C84.3,20,72.2,40,56.1,53.8C40,67.6,20,75.2,-1.5,76.7C-23,78.2,-46,73.6,-58.1,59.8C-70.3,46,-71.5,23,-69.6,1.9C-67.8,-19.2,-62.7,-38.4,-50.5,-52.8C-38.4,-67.2,-19.2,-76.8,-2.1,-74.7C15,-72.6,30,-58.8,46.1,-44.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M66.1,-42.9C76.5,-20.3,69.2,7.7,55.3,29.6C41.3,51.5,20.7,67.2,-2.7,68.7C-26,70.2,-51.9,57.6,-63.1,37.3C-74.3,17,-70.7,-10.9,-57.8,-35C-44.8,-59.1,-22.4,-79.4,2.8,-80.9C27.9,-82.5,55.8,-65.4,66.1,-42.9Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M64.1,-50.9C76.5,-35.7,75.3,-9.4,68.7,14.3C62.2,37.9,50.3,58.9,33.1,66.1C15.9,73.3,-6.5,66.8,-23.3,55.9C-40.1,44.9,-51.2,29.6,-58.1,10.2C-65,-9.2,-67.7,-32.6,-57.3,-47.4C-46.9,-62.2,-23.4,-68.3,1.2,-69.3C25.9,-70.3,51.8,-66.1,64.1,-50.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div v-if="selectedSound" class="info">
        <h2 class="title">{{ selectedSound.title }}</h2>
        <p class="mood">{{ selectedSound.mood }}</p>
      </div>
    </div>

    <sound-list
      :isListOpen="isListOpen"
      :isPlaying="isPlaying"
      :selectedSound="selectedSound"
      @on-select-sound="onSelectSound"
    />
  </section>
</template>

<script>
import SoundList from "./SoundList.vue";
export default {
  name: "ShayPlayer",
  props: [],
  components: { SoundList },
  data() {
    return {
      isListOpen: false,
      selectedSound: {},
      isPlaying: false,
    };
  },

  mounted() {
    this.$refs.elAudio.addEventListener(
      "ended",
      () => (this.isPlaying = false)
    );
    this.$refs.elAudio.addEventListener(
      "pause",
      () => (this.isPlaying = false)
    );
    this.$refs.elAudio.addEventListener("play", () => (this.isPlaying = true));

  },

  computed: {
    sounds() {
      return this.$store.getters["sounds"];
    },
  },

  methods: {
    onSelectSound(soundId) {
      if (this.selectedSound.id === soundId) {
        this.$refs.elAudio.pause();
        this.isPlaying = false;
        this.selectedSound = {};
        this.$refs.elAudio.src = "";
        return;
      }

      this.selectedSound = this.sounds.filter(
        (sound) => sound.id === soundId
      )[0];
      this.$refs.elAudio.src = this.selectedSound.soundUrl;
      this.$refs.elAudio.play();
    },
  },
};
</script>
