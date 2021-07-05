import axios from "axios";
import { createStore } from "vuex";
import { BASE_API_URL } from "../constants";
const state = {
  // profile: { id: 1, name: "sing3demons", email: "sing@dev.com" },
  profile: null,
};

const mutations = {
  SET_USER_PROFILE(state, newProfile) {
    state.profile = newProfile;
  },
};

const actions = {
  async getProfile({ commit }) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) return;
    
    const { data } = await axios.get(`${BASE_API_URL}/api/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const newProfile = JSON.parse(JSON.stringify(data?.data?.user));

    commit("SET_USER_PROFILE", newProfile);
  },
};

export default createStore({
  state,
  mutations,
  actions,
  modules: {},
});
