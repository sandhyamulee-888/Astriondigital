import React, { useEffect } from 'react';

export default function VisionMissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="inner-page blank-page" style={{ minHeight: '60vh' }}></div>;
}
