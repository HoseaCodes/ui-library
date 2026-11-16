import { within, userEvent } from '@storybook/testing-library';

import { ShareModalContainer } from "../components/sharemodal/Container";

export default {
  title: "HoseaCodes/Page",
  component: ShareModalContainer,
  parameters: {
    layout: "fullscreen",
  },
};

// export const ShareModal = (args) => <ShareModalContainer {...args} />;
export const ShareModal = {
  isOpen: true,
  onClose: () => { },
  title: "None",
  description: "None",
  url: "None",
  message: "None",
}
