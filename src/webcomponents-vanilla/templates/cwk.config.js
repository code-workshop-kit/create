export default {
  participants: ['Joe'],
  title: 'Web Components Workshop',
  targetOptions: {
    mode: 'module',
  },
  templateData: {
    appTitle: '<?= name ?>',
    participantNameFiltered() {
      return this.participantName.replace(/[^a-zA-Z0-9]/g, '');
    },
    participantNameLowercase() {
      return this.participantNameFiltered().toLowerCase();
    },
    intro() {
      return `Hi ${this.participantName}, welcome to ${this.appTitle}!`;
    },
  },
};
