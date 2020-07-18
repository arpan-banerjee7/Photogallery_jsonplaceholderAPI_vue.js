import Albums from "./components/Albums.vue";
import Photos from "./components/Photos.vue";
import PhotoDetail from "./components/PhotoDetail.vue";

export const routes = [
  { path: "", component: Albums },
  { path: "/albums", component: Albums },
  { path: "/albums/:id", component: Photos },
  { path: "photo-detail", component: PhotoDetail }
];
