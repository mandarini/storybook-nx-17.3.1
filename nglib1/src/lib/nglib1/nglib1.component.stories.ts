import type { Meta, StoryObj } from '@storybook/angular';
import { Nglib1Component } from './nglib1.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<Nglib1Component> = {
  component: Nglib1Component,
  title: 'Nglib1Component',
};
export default meta;
type Story = StoryObj<Nglib1Component>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nglib1 works!/gi)).toBeTruthy();
  },
};
