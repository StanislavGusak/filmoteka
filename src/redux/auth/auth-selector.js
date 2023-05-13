const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshing = state => state.auth.isRefreshing;

const getName = state => state.auth.user.name;

const getEmail = state => state.auth.user.email;

const selectToken = state => state.auth.token;

const authSelector = {
  getIsLoggedIn,
  getIsRefreshing,
  getName,
  getEmail,
  selectToken,
};

export default authSelector;