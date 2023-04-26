import type { Meta, StoryObj } from '@storybook/react';

import { ColoredDiv } from 'ui';

const meta = {
  title: 'Example/ColoredDiv',
  component: ColoredDiv,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    direction: { control: 'inline-radio', options: ['bottom', 'top', 'left', 'right'] },
    // skew: { control: 'range', min: 0, max: 45, step: 5  },
    skew: { control: 'object'  }, // can change to square brackets on ui
    width: { control: 'range', min: 2, max: 20, step: 4 }, // these dont work
    height: { control: 'range', min: 2, max: 20, step: 4 },
  },
} satisfies Meta<typeof ColoredDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    width: '10',
    height: '8',
    color: 'blue',
    direction: 'right',
    // className: '',
  },
};

export const Left: Story = {
  args: {
    direction: 'left',
  },
};

// export const Small: Story = {
//   args: {

//   },
// };
