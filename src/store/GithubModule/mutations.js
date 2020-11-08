
export default {
    /**
     *
     * @param { GithubAuthModuleState } state
     * @param payload
     */
    SET_DATA:(state, payload )=>{
        state.user = payload;
    },
    /**
     *
     * @param { object } state
     */
    FETCH_START: (state) => {
        state.isLoading = true;
    },
    /**
     *
     * @param { object } state
     */
    FETCH_END: (state) => {
        state.isLoading = false;
    },

    SET_ERROR: (state, error) => {
        state.isLoading = false;
        state.errors = error;
    },
};
