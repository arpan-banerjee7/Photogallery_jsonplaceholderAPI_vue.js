<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
        <div class="card" style="width: 18rem;">
          <img src class="card-img-top" alt />
          <div class="card-body">
            <h5 class="card-title">{{albumId}}</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    albumId: {
      type: String,
      default: 1
    }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
