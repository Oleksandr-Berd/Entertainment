export const selectIsLoggedIn = (state: any) => {
    console.log(state.auth);
    
    return state.auth.isLoggedIn
};

export const selectUser = (state:any) => state.auth.user;

export const selectIsRefreshing = (state:any) => state.auth.isRefreshing;
