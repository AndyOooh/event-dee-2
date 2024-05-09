import type { Meta, StoryObj } from '@storybook/react';

import { ColoredDiv, colorMap } from '@repo/ui';

const meta = {
  title: 'Atoms/ColoredDiv',
  component: ColoredDiv,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: Object.keys(colorMap) },
    direction: { control: 'inline-radio', options: ['bottom', 'top', 'left', 'right'] },
    skew: { control: 'object' }, // can change to square brackets on ui
    width: { control: { type: 'range', min: 1, max: 20, step: 0.5 } },
    height: { control: { type: 'range', min: 1, max: 20, step: 0.5 } },
  },
} satisfies Meta<typeof ColoredDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 10,
    height: 8,
  },
};

export const Secondary: Story = {
  args: {
    width: 10,
    height: 8,
    color: 'blue',
    direction: 'right',
    // className: '',
  },
};

export const Left: Story = {
  args: {
    direction: 'left',
    color: 'green',
    width: 10,
    height: 8,
  },
};
