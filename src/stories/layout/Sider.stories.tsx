import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sider } from './Sider';
export default {
  title: 'Sider',
  component: Sider,
} as ComponentMeta<typeof Sider>;

export const Template: ComponentStory<typeof Sider> = () => <Sider />;
