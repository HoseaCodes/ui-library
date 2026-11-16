import { within, userEvent } from '@storybook/testing-library';

import { QRCodeContainer } from "../components/qr-code/Container";

export default {
  title: "HoseaCodes/QRCode",
  component: QRCodeContainer,
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
