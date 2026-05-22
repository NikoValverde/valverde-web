import { useEffect, useRef, useState } from "react";

export default function FancyText({ children }) {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative inline-block overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-700">
        {children}
      </h2>

      <h2
        className={`absolute inset-0 text-4xl md:text-5xl font-bold text-white whitespace-nowrap overflow-hidden ${
          visible ? "animate-fancy-fill" : "w-0"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}