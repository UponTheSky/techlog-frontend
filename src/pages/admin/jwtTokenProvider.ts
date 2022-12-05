// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures

export const jwtTokenProvider = (() => {
  const storage = window.localStorage;

  const set = (arg: string) => {
    storage.setItem('token', arg);
  };

  const get = () => storage.getItem('token');

  return {
    value() {
      return get();
    },

    setToken(arg: string) {
      set(arg);
    },

    deleteToken() {
      set('');
    }
  }

})();
