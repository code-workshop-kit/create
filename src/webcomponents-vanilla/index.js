import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { CommonMixin } from '../common/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* eslint-disable no-console */
export const WebcomponentsVanillaMixin = (subclass) =>
  class extends CommonMixin(subclass) {
    async execute() {
      await super.execute();

      // write cwk.config.js --> needs `name` dynamic var
      this.copyTemplate(
        `${__dirname}/templates/cwk.config.js`,
        this.destinationPath(`cwk.config.js`),
        { delimiter: '?' },
      );

      // copy all other files
      await this.copyTemplates(`${__dirname}/templates/static/**/*`, this.destinationPath(), {
        delimiter: '?',
      });
    }
  };
