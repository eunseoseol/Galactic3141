"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  const hoverStyle = {
    maxWidth: '150px',
    marginBottom: '20px',
  };
  const mobileHoverStyle = {
    maxWidth: '80px',
    marginBottom: '10px',
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider below 768px as mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageStyle = isMobile ? mobileHoverStyle : hoverStyle;

  const links = {
    book: "https://medium.com/@eunseoseol",
   


    // 나머지 링크들도 여기에 추가...
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>








      
      <div style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '100px', paddingBottom: '100px', height: 'calc(100vh - 20px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <main className="p-4" style={{ height: '100vh' }}>
          <div style={{ position: 'relative', zIndex: 1, paddingBottom: '40px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '-50px' }}>
            {Object.entries(links).map(([name, url]) => (
              <a key={name} href={url} style={{ marginBottom: '10px' }}>
                <img src={`/${name}.png`} alt={name} style={imageStyle} />
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
