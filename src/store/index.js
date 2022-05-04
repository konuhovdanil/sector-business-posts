import { createStore } from 'vuex';

import { postsModule } from "./modules/posts.module";

export default createStore({
  modules: {
    postsModule: postsModule
  }
});