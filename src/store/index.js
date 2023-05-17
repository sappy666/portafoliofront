import { createStore } from 'vuex'
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc} from "firebase/firestore";
import { db } from "@/auth/auth.service"

export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export default createStore({
  state: {
    perros: [],
    mostrarPerro: {img: ''},
    login:false,
    usuarioConectado:"",
    carga: false
  },

  getters: {

    loginTrue(state) {
      return state.login;
    }
  },
  
  mutations: {
    [SET_LOGIN_STATE](state, payload) {
      state.login = payload;
    },
    cambiaEstadoLogin (state) {
      state.login = true
    },
    cambiaEstadoLoginFalse (state) {
      state.login = false
    }
  },
  actions: {
  },
  modules: {
  }
})

