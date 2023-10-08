import type { Meta, StoryObj } from '@storybook/vue3';

import CheckBoxToggle from './CheckBoxToggle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof CheckBoxToggle> = {
  title: 'UI-KIT/Data-Input/CheckBoxToggle',
  component: CheckBoxToggle,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
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
  args: {
    isDisabled: false,
    isChecked: false,
    isIndeterminate: true
  }
};
