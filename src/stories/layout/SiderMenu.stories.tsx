import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SiderMenu } from './SiderMenu';

export default {
  title: 'Sider Menu',
  component: SiderMenu,
} as ComponentMeta<typeof SiderMenu>;

const Template: ComponentStory<typeof SiderMenu> = (args) => (
  <SiderMenu {...args} />
);

export const HiddenSiderMenu = Template.bind({});
HiddenSiderMenu.args = {
  isHidden: true,
  willFade: false,
};

export const VisibleSiderMenu = Template.bind({});
VisibleSiderMenu.args = {
  isHidden: false,
  willFade: false,
};

export const FadingSiderMenu = Template.bind({});
FadingSiderMenu.args = {
  isHidden: false,
  willFade: true,
};
