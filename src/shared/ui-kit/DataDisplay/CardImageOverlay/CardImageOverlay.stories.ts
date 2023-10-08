import type { Meta, StoryObj } from '@storybook/vue3';

import CardImageOverlay from './CardImageOverlay.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof CardImageOverlay> = {
  title: 'UI-KIT/Data-Display/CardImageOverlay',
  component: CardImageOverlay,
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
    title: 'Shoes!',
    urlImg: 'https://www.grandtexrm.com/images/product-06.jpg',
    descriptions: 'If a dog chews shoes whose shoes does he choose?'
  }
};
