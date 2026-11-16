// src/components/ShareModal.jsx
import React, { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { XIcon, MailIcon, LinkIcon } from "@heroicons/react/outline";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   LinkedinShareButton,
//   LinkedinIcon,
// } from "react-share";

const ShareModal = ({ isOpen, onClose, title, description, url, message }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            {/* <XIcon className="w-6 h-6 text-gray-700" /> */}
          </button>
        </div>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="mb-4">
          {/* <CopyToClipboard text={message} onCopy={() => setCopied(true)}>
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              <LinkIcon className="w-5 h-5 mr-2" />
              {copied ? "Copied" : "Copy Message"}
            </button>
          </CopyToClipboard> */}
        </div>
        <div className="mb-4">
          {/* <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded">
              <LinkIcon className="w-5 h-5 mr-2" />
              {copied ? "Link Copied" : "Copy Link"}
            </button>
          </CopyToClipboard> */}
        </div>
        <div className="flex justify-around">
          {/* <FacebookShareButton url={url} quote={message}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton url={url} summary={description} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton> */}
          {/* Add more share buttons as needed */}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
