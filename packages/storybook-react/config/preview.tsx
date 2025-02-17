import { withTests } from '@storybook/addon-jest';
import { Preview } from '@storybook/react';
import results from '@utrecht/component-library-react/dist/.jest-test-results.json';
import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
import { addonThemes } from '@utrecht/storybook-helpers/src/addon-themes';
import { addonViewport } from '@utrecht/storybook-helpers/src/addon-viewport';
import React from 'react';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';
import '@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
console.log(results);
const preview: Preview = {
  decorators: [
    (Story: any) => <div className="utrecht-document">{Story()}</div>,
    ///
    withTests({ results }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      // Show code by default.
      // Stories without concise code snippets can hide the code at Story level.
      source: {
        state: 'open',
      },
    },
    ...addonStatus,
    ...addonThemes,
    ...addonViewport,
  },
};

export default preview;
