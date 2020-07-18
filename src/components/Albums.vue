<template>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
      <h1 style="text-align:center">Albums and Users</h1>
      <hr />
      <div class="albums">
        <ul class="list-group">
          <li class="list-group-item" v-for="album in albumsList" :key="album.id">
            <div class="albums__title">
              Title ►
              <span>{{album.title}}</span>
            </div>
            <br />
            <div class="albums__username">
              User Name:
              <span>{{album.userName}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          this.$http
            .get("users?id=" + album.userId)
            .then(response => response.json())
            .then(user => {
              let albumObj = {};
              albumObj.id = album.id;
              albumObj.userId = album.userId;
              albumObj.title = album.title;
              albumObj.userName = user[0].username;
              console.log(albumObj);
              this.albumsList.push(albumObj);
            });
        });
        console.log(this.albumsList);
      });
  }
};
</script>

<style scoped>
.albums li {
  cursor: pointer;
}
.albums__title {
  font-family: "Lato", sans-serif;
}
.albums__username span {
  font-family: "Ranchers", cursive, sans-serif;
  font-size: 120%;
}
.albums__title span {
  font-weight: bold;
  font-family: "Modak", cursive, Sans-Serif;
  color: rgba(248, 125, 125, 0.842);
  font-size: 140%;
}
</style>
