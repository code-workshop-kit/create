import { WebFrontendMixin } from '../web-frontend/index.js';
import { WebcomponentsVanillaMixin } from '../webcomponents-vanilla/index.js';
import { WebcomponentsLitMixin } from '../webcomponents-lit/index.js';
import { NodeJSMixin } from '../nodejs/index.js';
import { JavaMixin } from '../java/index.js';

export function gatherMixins(options) {
  const mixins = [];

  switch (options.type) {
    case 'webFrontend':
      mixins.push(WebFrontendMixin);
      break;
    case 'webcomponentsVanilla':
      mixins.push(WebcomponentsVanillaMixin);
      break;
    case 'webcomponentsLit':
      mixins.push(WebcomponentsLitMixin);
      break;
    case 'jsNode':
      mixins.push(NodeJSMixin);
      break;
    case 'java':
      mixins.push(JavaMixin);
      break;
    // no default
  }

  return mixins;
}
