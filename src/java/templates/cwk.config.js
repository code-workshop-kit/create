export default {
  participants: ['Joe'],
  title: 'Java Workshop',
  target: 'terminal',
  targetOptions: {
    cmd: 'javac Main.java && java Main',
    excludeFromWatch: ['*.class'],
  },
  templateData: {
    appTitle: '<?= name ?>',
    intro() {
      return `Hi ${this.participantName}, welcome to ${this.appTitle}!`;
    },
  },
};
