export default {
  find: () => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve([{ name: 'Orz' }]);
      }, 10000);
    });
  },
};
