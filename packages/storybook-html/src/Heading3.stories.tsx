/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-3/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-3/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Heading3 = ({ children }) => <h3>{children}</h3>;

const meta = {
  title: 'HTML Component/Heading/Heading 3',
  id: 'html-heading-3',
  component: Heading3,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the heading',
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-heading-3',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<h3>` element.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
