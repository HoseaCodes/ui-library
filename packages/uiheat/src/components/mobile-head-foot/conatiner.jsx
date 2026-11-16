import React from 'react'
import Navbar from './nav';
import CallToAction from './cta';

export default function StickyMobileContainer({children}) {
  return (
      <div className="flex-1 flex flex-col items-stretch overflow-hidden">
        <Navbar />
        {children}
        <CallToAction />
      </div>
  );
}
