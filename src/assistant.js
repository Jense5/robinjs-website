const defaults = {
  skills: [],
  name: 'Robin',
  language: 'en-US',
  reply: "Sorry, I don't know that one.",
};

export default class Assistant {
  constructor(config = {}) {
    this.config = { ...defaults, ...config };
    // eslint-disable-next-line
    this.recognizer = new webkitSpeechRecognition();
    this.recognizer.lang = this.config.language;
    this.recognizer.addEventListener('end', () => {
      this.recognizer.start();
    });
    this.recognizer.addEventListener('result', (instance) => {
      const transcript = Array.from(instance.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .map(str => str.toLowerCase())[0];
      const words = transcript.split(' ');
      if (words[0] === this.config.name.toLocaleLowerCase()) {
        this.process(words.slice(1).join(' '));
      }
    });
  }
  start() {
    this.recognizer.start();
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
