import Albums from "./components/Albums.vue";
import Photo from "./components/Photo.vue";
import PhotoDetail from "./components/PhotoDetail.vue";

export const routes = [
  { path: "", component: Albums },
  { path: "/albums", component: Albums, props: true },
  { path: "/albums/:id", component: Photo, name: "photos" },
  { path: "photo-detail", component: PhotoDetail }
];
