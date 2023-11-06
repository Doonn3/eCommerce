import type { Meta, StoryObj } from '@storybook/vue3';

import InputNumber from './InputNumber.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof InputNumber> = {
  title: 'UI-KIT/Data-Input/InputNumber',
  component: InputNumber,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    condition: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default']
    }
    // onClick: { action: 'clicked' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    isDisable: false,
    pattern: { min: 10, max: 30 }
  }
};
