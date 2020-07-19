<template>
  <div class="row justify-content-center">
    <div class="card" style="width: 58rem;">
      <img :src="imageUrl" class="card-img-top" alt="imageUrl" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      default: "https://via.placeholder.com/600/92c952"
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.imageUrl);
  }
};
</script>

<style>
</style>
