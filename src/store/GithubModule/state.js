import JwtService from "@/common/jwt.service";

/** @var { GithubAuthModuleState } */
const STATE = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken(),
    isLoading: false
};

export default STATE;
