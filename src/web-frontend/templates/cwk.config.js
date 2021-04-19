export default {
  participants: ['Joe'],
  title: 'Frontend Workshop',
  templateData: {
    appTitle: '<?= name ?>',
    intro() {
      return `Hi ${this.participantName}, welcome to ${this.appTitle}!`;
    },
  },
};
