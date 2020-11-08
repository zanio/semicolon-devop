const AUTH_TOKEN_KEY  = "authId"
const USER_TOKEN  = "userToken"
export function getAuthToken() {
    return JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY));
}

export function getUserToken() {
    return JSON.parse(localStorage.getItem(USER_TOKEN));
}
export function isAuthIdPresent() {
    return getAuthToken();
}
export function isUserTokenPresent(){
    return getUserToken();
}