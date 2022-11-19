import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleButton } from './ToggleButton';

export default {
  title: 'Toggle Button',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const MenuButton = Template.bind({});
MenuButton.args = {
  isMenuOpen: false,
};

export const CloseButton = Template.bind({});
CloseButton.args = {
  isMenuOpen: true,
};
