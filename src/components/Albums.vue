<template>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
      <h1 style="text-align:center">Albums and Users</h1>
      <hr />
      <div class="albums">
        {{albumsList.length}}--{{arr.length}}
        <ul class="list-group">
          <app-album-details v-for="album in arr" :album="album" :key="album.id"></app-album-details>
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
      albumsList: [],
      arr: []
    };
  },
  created() {
    this.$http
      .get("albums")
      .then(response => {
        return response.json();
      })
      .then(albums => {
        albums.forEach(album => {
          //console.log(album);
          let albumObj = { [album.id]: album };
          //console.log(albumObj);
          this.albumsList.push(albumObj);
        });
        //console.log(this.albumsList);
        this.albumsList.forEach(album => {
          //console.log(album);
          Object.keys(album).forEach(key => {
            //console.log(album[key].userId);
            this.$http
              .get("users/" + album[key].userId)
              .then(result => result.json())
              .then(user => {
                album[key].userName = user.username;
                //console.log(album[key]);
                this.arr.push({ ...album[key] });
              });
          });
        });
        console.log(this.arr);
      });
  }
};
</script>

<style scoped>
</style>
