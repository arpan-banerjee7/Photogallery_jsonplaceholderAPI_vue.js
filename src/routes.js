import Albums from "./components/Albums.vue";
import Photo from "./components/Photo.vue";
import PhotoDetail from "./components/PhotoDetail.vue";

export const routes = [
  { path: "", component: Albums },
  { path: "/albums", component: Albums },
  { path: "/albums/:id", component: Photo, name: "photos", props: true },
  {
    path: "photo-detail/:imageUrl",
    component: PhotoDetail,
    name: "photoDetail",
    props: true
  }
];
