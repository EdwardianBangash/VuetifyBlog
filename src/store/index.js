import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      token: null,
      isAuthenticated: false,
      role: "admin",
      blogId: null,
      blogTitle: null,
      blogDescription: null,
      categoryName: null,
    };
  },

  getters: {
    user(state) {
      return state.token;
    },
    role(state) {
      return state.role;
    },
    blogId(state) {
      return state.blogId;
    },
    blogTitle(state) {
      return state.blogTitle;
    },
    blogDescription(state) {
      return state.blogDescription;
    },
    categoryName(state) {
      return state.categoryName;
    },
  },

  mutations: {
    user(state, payload) {
      state.token = payload;
    },
    role(state, payload) {
      state.role = payload;
    },
    blogId(state, payload) {
      state.blogId = payload;
    },
    blogTitle(state, payload) {
      state.blogTitle = payload;
    },
    blogDescription(state, payload) {
      state.blogDescription = payload;
    },
    categoryName(state, payload) {
      state.categoryName = payload;
    },
  },

  actions: {
    user(context, payload) {
      context.commit("user", payload);
    },
    role(context, payload) {
      context.commit("role", payload);
    },
    blogId(context, payload) {
      context.commit("blogId", payload);
    },
    blogTitle(context, payload) {
      context.commit("blogTitle", payload);
    },
    blogDescription(context, payload) {
      context.commit("blogDescription", payload);
    },
    categoryName(context, payload){
        context.commit("categoryName", payload);
    }
  },
});

export default store;
