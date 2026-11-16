import { within, userEvent } from '@storybook/testing-library';

import { NewsletterContainer } from "../components/newsletter-container/Container";

export default {
  title: "HoseaCodes/Page",
  component: NewsletterContainer,
  parameters: {
    layout: "fullscreen",
  },
};

export const Newsletter = (args) => <NewsletterContainer {...args} />;

