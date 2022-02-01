export const setUserStorage = (user_id, token) => {
  if (typeof Storage === 'undefined') return;

  const user = JSON.stringify({
    user_id,
    token,
  });

  if (localStorage.setItem('user', user)) {
    return true;
  }

  return false;
};

export const getUserStorage = () => {
  if (typeof Storage === 'undefined') return;

  return JSON.parse(localStorage.getItem('user'));
};

export const removeUserStorage = () => {
  if (typeof Storage === 'undefined') return;

  localStorage.removeItem('user');
};
