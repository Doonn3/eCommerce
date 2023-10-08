import type { Meta, StoryObj } from '@storybook/vue3';

import SimpleButton from './SimpleButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof SimpleButton> = {
  title: 'UI-KIT/Buttons/SimpleButton',
  component: SimpleButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // position: { control: 'select', options: ['small', 'medium', 'large'] }
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
    name: 'Simple Button'
  }
};
