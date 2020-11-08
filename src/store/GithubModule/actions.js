
/**
 *
 * @param { function } commit
 * @param payload
 * @param { string } data
 */
export function setData({ commit }, payload ) {
    console.log(payload)
    commit("SET_DATA", payload );
}

/**
 *
 * @param commit
 * @param error
 * @param data
 */
export function setError({commit},error){
    commit("SET_ERROR",error)
}

/**
 *
 * @param commit
 * @param data
 */
export function startLoading({commit}){
    commit("FETCH_START");
}


/**
 *
 * @param commit
 * @param data
 */
export function endLoading({commit}){
    commit("FETCH_END");
}