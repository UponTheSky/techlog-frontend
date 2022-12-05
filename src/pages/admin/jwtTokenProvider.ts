// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures

export const jwtTokenProvider = (() => {
  let token: string | null = null;

  const set = (arg: string) => {
    token = arg;
  };

  return {
    value() {
      return token;
    },

    setToken(arg: string) {
      set(arg);
    },

    deleteToken() {
      set('');
    }
  }

})();
