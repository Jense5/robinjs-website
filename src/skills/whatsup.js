module.exports.trigger = (sen) => (sen === 'how are you');
module.exports.resolve = () => new Promise((resolve) => {
  resolve("I'm good, how about you?'");
});
