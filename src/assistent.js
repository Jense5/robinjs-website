const defaults = {
  skills: [],
  name: 'Robin',
  language: 'en-US',
  reply: "Sorry, I don't know that one.",
};

export default class Assistant {
  constructor(config = {}) {
    this.config = { ...defaults, ...config };
  }
}
