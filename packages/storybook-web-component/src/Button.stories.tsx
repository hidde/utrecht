/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button/README.md?raw';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtButton } from '@utrecht/web-component-library-react';
import React from 'react';
import { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface ButtonStoryProps {
  appearance?: string;
  busy?: boolean;
  disabled?: boolean;
  type?: string;
}
const ButtonStory = ({ appearance, busy, children, disabled, type }: PropsWithChildren<ButtonStoryProps>) => (
  <UtrechtButton appearance={appearance} busy={busy || null} disabled={disabled || null} type={type || null}>
    {children}
  </UtrechtButton>
);

const meta = {
  title: 'Web Component/Button',
  id: 'web-component-button',
  component: ButtonStory,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    type: {
      description: 'Type',
      type: {
        name: 'enum',
      },
      options: ['', 'button', 'reset', 'submit'],
    },
  },
  args: {
    busy: false,
    disabled: false,
    children: '',
    type: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Read more...',
  },
};

export const Submit: Story = {
  args: {
    children: 'Send',
    type: 'submit',
  },
};

export const Busy: Story = {
  args: {
    busy: true,
    children: 'Send',
    type: 'submit',
  },
};

export const DesignTokens = designTokenStory(meta);
