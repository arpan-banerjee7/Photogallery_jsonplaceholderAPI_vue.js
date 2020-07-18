<template>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
      <h1 style="text-align:center">Albums and Users</h1>
      <hr />
      <div class="albums">
        <ul class="list-group">
          <app-album-details v-for="album in albumsList" :album="album" :key="album.id"></app-album-details>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumDetail from "./AlbumDetail";
export default {
  components: {
    "app-album-details": AlbumDetail
  },
  data() {
    return {
      albumsList: []
    };
  },
  created() {
    this.$http
      .get("albums")
      .then(response => response.json())
      .then(albums => {
        albums.forEach(album => {
          let albumObj = {};
          this.$http
            .get("users?id=" + album.userId)
            .then(response => response.json())
            .then(user => {
              //console.log(user);
              albumObj.userName = user[0].username;
              console.log(albumObj);
              this.albumsList.push(albumObj);
            });
          albumObj.id = album.id;
          albumObj.title = album.title;
          albumObj.userId = album.userId;
        });
      });
  }
};
</script>

<style scoped>
</style>
