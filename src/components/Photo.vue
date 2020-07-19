<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="photo in photosArr" :key="photo.id" class="card" style="width: 15rem;">
        <img :src="photo.thumbnailUrl" class="card-img-top" alt="photoUrl" />
        <div class="card-body">
          <h5 class="card-title">{{photo.title}}</h5>
        </div>
        <router-link :to="{name:'photoDetail',params:{imageUrl:photo.url}}">
          <button class="btn btn-primary btn-block">Enlarge Image</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      default: 1
    }
  },
  data() {
    return {
      photosArr: []
    };
  },
  created() {
    this.$http
      .get("photos?albumId=" + this.id)
      .then(response => response.json())
      .then(photos => {
        this.photosArr = photos;
        console.log(this.photosArr);
      });
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.card {
  margin: 20px;
}
</style>
