import { useState, useEffect, useRef } from 'react';

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
};

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const startTimestampRef = useRef(null);
  const animationFrameRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;

        if (isVisible) {
          // Start counting when the element becomes visible
          startTimestampRef.current = null; // Reset startTimestamp
          animationFrameRef.current = requestAnimationFrame(startCounting);
        } else {
          // Reset count when the element is not visible
          setCount(0);
          cancelAnimationFrame(animationFrameRef.current);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe the Counter element
    observer.observe(counterRef.current);

    return () => {
      // Clean up the observer when component is unmounted
      observer.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [targetNumber]);

  const startCounting = (timestamp) => {
    if (!startTimestampRef.current) startTimestampRef.current = timestamp;

    const progress = timestamp - startTimestampRef.current;
    const duration = 1500;

    const percentage = Math.min(progress / duration, 1);
    const newCount = Math.floor(percentage * targetNumber);

    setCount(newCount);

    if (newCount < targetNumber) {
      animationFrameRef.current = requestAnimationFrame(startCounting);
    }
  };

  return (
    <div ref={counterRef} className="text-blue-800 mb-0 text-5xl">
      {formatNumberWithCommas(count)}
    </div>
  );
};

export default Counter;
