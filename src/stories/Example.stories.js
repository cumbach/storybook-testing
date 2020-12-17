import React from 'react';
import Example from '../Example.js';

export default {
  title: 'Example',
  component: Example,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Example {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: 'Learn React',
};
