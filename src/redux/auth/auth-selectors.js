export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getUser = state => state.auth.user;

export const getDailyRate = state => state.user.userData.dailyRate;
export const getNotAllowedProducts = state =>
    state.user.userData.notAllowedProducts;
  
export const getDaily = state => {
  const dailyRate = getDailyRate(state);
  const notAllowedProducts = getNotAllowedProducts(state);
  return { dailyRate, notAllowedProducts };
};
