// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures

const EXPIRATION_TIME = 1000 * 3600; // one hour

export const jwtTokenProvider = (() => {
  const storage = window.localStorage;

  const set = (arg: string) => {
    storage.setItem('token', arg);
    storage.setItem('time', Date.now().toString());
  };

  const get = () => {
    const generatedTime = storage.getItem('time');
    if (Date.now() - Number(generatedTime) > EXPIRATION_TIME) {
      return null;
    }
    return storage.getItem('token');
  };

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
