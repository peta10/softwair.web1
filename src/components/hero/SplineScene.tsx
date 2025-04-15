import { useEffect, useState } from 'react';

export default function SplineScene() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.documentElement);

    return () => observer.disconnect();
  }, []);

  if (!isInView) {
    return null;
  }

  return (
    <spline-viewer url="https://prod.spline.design/esphLDTNEkPuXFIL/scene.splinecode"></spline-viewer>
  );
}