module.exports.trigger = (sen) => (sen === 'what time is it');
module.exports.resolve = () => new Promise((resolve) => {
  const now = new Date();
  const minutes = now.getMinutes() > 0 ? ':' + now.getMinutes() : '';
  resolve(`It is ${now.getHours()}${minutes}.`);
});
