<template>
  <div
    class="sound-preview"
    :key="sound.id"
    @click="$emit('on-select-sound', sound.id)"
  >
    <div class="player-state">
      <font-awesome-icon
        v-if="isPlaying && isSelected"
        icon="fa-solid fa-pause"
      />
      <font-awesome-icon v-else icon="fa-solid fa-play" />
    </div>
    <div class="preview-content" :class="{ selected: isSelected }">
      <img :src="sound.imgUrl" />
      <div class="info">
        <div class="title">{{ sound.title }}</div>
        <div class="duration">
          <span class="time">{{ sound.duration }}</span>
          <span class="unit">s</span>
        </div>
        <p class="mood">{{ sound.mood }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sound", "isPlaying", "selectedSound", "isSelected"],
};
</script>

<style>
</style>