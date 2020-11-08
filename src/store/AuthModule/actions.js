import ApiService from "../../common/api.service";
import { timeoutFunction } from "../utility";

/**
 *  @param {function} commit
 *  @param {Object} payload
 */

export function SetLogin({ commit }, payload ) {
  return new Promise((resolve, reject) => {
    commit("FETCH_START");
    ApiService.post("auth/login", payload)
      .then(({ data }) => {
        //WHEN YOU COMMIT A TRANSACTION YOU ARE BASICALLY CALLING THE FUNCTION CORRESPONDING TO THE FUNCTION...
        commit("SET_AUTH", data);
        resolve(data);
      })
      .catch((error) => {
        if (error.response) {
          const errorJson = error.response.data;
          commit("SET_ERROR", errorJson);
        } else if (error.request) {
          commit("SET_ERROR", error.request);
        } else {
          commit("SET_ERROR", error);
        }
        console.log(error);
        reject(error);
        timeoutFunction(commit, "CLEAR_ERROR");
      });
  });
}

export function setRegister({ commit }, payload ) {
  return new Promise((resolve, reject) => {
    commit("FETCH_START");
    console.log(payload)
    ApiService.post("developers/new", payload)
      .then(({ data }) => {
        commit("SET_AUTH", data);
        resolve(data);
      })
      .catch((error) => {

        if (error.response) {
          const errorJson = error.response.data;
          commit("SET_ERROR", errorJson);
        } else if (error.request) {
          commit("SET_ERROR", error.request);
        } else {
          commit("SET_ERROR", error);
        }
        console.log(error);
        reject(error);
        timeoutFunction(commit, "CLEAR_ERROR");
      });
  });
}
