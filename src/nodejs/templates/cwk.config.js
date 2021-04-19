export default {
  participants: ['Joe'],
  title: 'NodeJS Workshop',
  target: 'terminal',
  targetOptions: {
    cmd: 'node index.js',
  },
  templateData: {
    appTitle: '<?= name ?>',
    intro() {
      return `Hi ${this.participantName}, welcome to ${this.appTitle}!`;
    },
  },
};
