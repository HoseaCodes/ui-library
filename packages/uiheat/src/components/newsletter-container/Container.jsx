import React, { useState, useEffect } from "react";
import Newsletter from "./Newsletter";

export const NewsletterContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("newsletterLastShown");
    const signedUp = localStorage.getItem("newsletterSignedUp");

    if (signedUp) return;

    const now = new Date().getTime();
    if (lastShown && now - lastShown < 7 * 24 * 60 * 60 * 1000) return;

    const timer = setTimeout(() => {
      setIsModalOpen(true);
      localStorage.setItem("newsletterLastShown", now);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("newsletterSignedUp", true);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Our Landing Page</h1>
      {/* Your landing page content */}
      <Newsletter
        isOpen={isModalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

