<template>
  <section class="sound-list" :class="{ open: isListOpen }">
    <sound-preview
      v-for="sound in sounds"
      :key="sound.id"
      :isSelected="sound.id === selectedSound?.id"
      :isPlaying="isPlaying"
      :sound="sound"
      @on-select-sound="$emit('on-select-sound', $event)"
    />
  </section>
</template>

<script>
import SoundPreview from "./SoundPreview.vue";
export default {
  components: { SoundPreview },
  props: ["selectedSound", "isListOpen", "isPlaying"],
  computed: {
    sounds() {
      return this.$store.getters["sounds"];
    },
  },
};
</script>


<style>
</style>