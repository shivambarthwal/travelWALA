"use client"; // For Next.js or similar frameworks
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MarqueeText = ({ text, speed = 1, direction = 'left', className = '' }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
     gsap.to(".marqueeContent", {
          transform:"translateX(-100%)",
          repeat: -1,
          duration: 10,
        });

  },[])
  
  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const marqueeContent = marquee.querySelector('.marquee-content');

      if (marqueeContent) {
        // Duplicate the content to create a seamless loop
        marqueeContent.innerHTML = `${text} ${text} ${text} ${text}`;

        const contentWidth = marqueeContent.scrollWidth / 4; 
        const duration = contentWidth / (100 * speed);

        // GSAP animation for continuous scrolling
        const animation = gsap.to(marqueeContent, {
          x: direction === 'left' ? -contentWidth : contentWidth,
          duration: duration,
          ease: 'none',
          repeat: -1,
        });

        
        ScrollTrigger.create({
          trigger: marquee,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const scrollDirection = self.direction; // 1 for upward, -1 for downward
            if (scrollDirection === 1) {
              // Scroll upward: move marquee text to the right
              gsap.to(marqueeContent, {
                x: '+=10', // Move right
                ease: 'power1.out',
                overwrite: true,
              });
            } else if (scrollDirection === -1) {
              // Scroll downward: move marquee text to the left
              gsap.to(marqueeContent, {
                x: '-=10', // Move left
                ease: 'power1.out',
                overwrite: true,
              });
            }
          },
        });

        // Cleanup on unmount
        return () => {
          animation.kill(); // Stop the GSAP animation
          ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
        };
      }
    }
  }, [text, speed, direction]);

  return (
    <div ref={marqueeRef} className={`marquee ${className}`} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div className="marquee-content" style={{ display: 'inline-block' }}>{text}</div>
    </div>
  );
};

export default MarqueeText;