<template>
  <router-link tag="li" :to="{name:'photos',params:{id:album.id}}">
    <li class="list-group-item">
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
  </router-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    album: {
      type: Object,
      default: function() {
        return {
          id: 1,
          userId: 1,
          title: "quidem molestiae enim",
          userName: "Bret"
        };
      }
    }
  }
};
</script>

<style scoped>
.albums li {
  list-style: none;
  cursor: pointer;
}
.albums__title {
  font-family: "Lato", sans-serif;
  color: rgba(44, 43, 43, 0.877);
}
.albums__username {
  font-family: "Lato", sans-serif;
  color: rgba(44, 43, 43, 0.877);
}
.albums__username span {
  font-family: "Ranchers", cursive, sans-serif;
  font-size: 120%;
  color: rgba(240, 58, 58, 0.856);
}
.albums__title span {
  font-weight: bold;
  font-family: "Dancing Script", cursive, Sans-Serif;
  color: rgba(250, 109, 109, 0.842);
  font-size: 160%;
}
</style>
