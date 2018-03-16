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
  process(sentence) {
    for (const skill of this.config.skills)
      if (skill.trigger(sentence))
        return skill.resolve(sentence).then(s => this.say(s));
    return this.say(this.config.reply);
  }
  say(sentence) {
    const filtered = sentence.replace(/[&\/\\#,+()$~%.'"*?<>{}]/g, '');
    const msg = new SpeechSynthesisUtterance(filtered);
    window.speechSynthesis.speak(msg);
  }
}
