import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);
