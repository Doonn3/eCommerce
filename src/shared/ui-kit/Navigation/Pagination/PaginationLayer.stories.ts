import type { Meta, StoryObj } from '@storybook/vue3';

import PaginationLayer from './PaginationLayer.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof PaginationLayer> = {
  title: 'UI-KIT/Navigation/PaginationLayer',
  component: PaginationLayer,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {}
};
