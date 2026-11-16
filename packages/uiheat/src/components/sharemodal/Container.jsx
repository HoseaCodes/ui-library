import React, { useState } from "react";
import ShareModal from "./ShareModal";

export function ShareContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="ShareContainer">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenModal}
      >
        Share
      </button>
      <ShareModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Share this content"
        description="Check out this amazing content!"
        url="https://example.com"
        message="Check out this amazing content at https://example.com"
      />
    </div>
  );
}
