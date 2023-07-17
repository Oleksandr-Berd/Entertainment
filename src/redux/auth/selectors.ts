export const selectIsLoggedIn = (state: any) => {    
    return state.auth.isLoggedIn
};

export const selectUser = (state:any) => state.auth.user;

export const selectIsRefreshing = (state:any) => state.auth.isRefreshing;
