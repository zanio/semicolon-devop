

/**
 *
 * @param { function } commit
 * @param payload
 * @param { string } data
 */

export function setDrawer({commit} , payload) {
    console.log(commit,payload)
    commit("SET_DRAWER",payload);
}
export function setBarImage({ commit }, payload ) {
    commit("SET_BAR_IMAGE",payload);
}

