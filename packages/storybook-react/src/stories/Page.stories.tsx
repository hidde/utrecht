import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Page } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page/README.md?raw';
import tokensDefinition from '@utrecht/components/page/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Default as PageContent } from './PageContent.stories';
import { Default as PageHeader } from './PageContent.stories';
import { Default as PageFooter } from './PageFooter.stories';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page',
  id: 'react-page',
  component: Page,
  subcomponents: { PageContent, PageFooter, PageHeader },
  args: {
    children: [
      <PageHeader {...PageContent.args} />,
      <PageContent {...PageContent.args} />,
      <PageFooter {...PageFooter.args} />,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-page',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
