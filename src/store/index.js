import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    plugins: [createPersistedState()],
    state(){
        return {
            token: null,
            isAuthenticated: false,
            role: 'admin',
        }
    },

    getters: {
        user(state){
            return state.token;
        },
        role(state){
            return state.role
        }
    },

    mutations: {
        user(state,payload){
            state.token = payload;
        },
        role(state,payload){
            state.role = payload;
        }
    },

    actions: {
        user(context, payload){
            context.commit('user', payload);
        },
        role(context, payload){
            context.commit('role', payload);
        }

    }
});

export default store;

