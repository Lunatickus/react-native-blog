export const selectUser = state => state.auth.user;

export const selectUserLogin = state => state.auth.user.login;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserAvatar = state => state.auth.user.avatar;

export const selectUserIsLoading = state => state.auth.isLoading;

export const selectUserError = state => state.auth.error;