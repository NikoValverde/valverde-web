import { useEffect, useRef, useState } from "react";

export default function FancyText({ children }) {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
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
      className="relative inline-block max-w-full"
    >
      {/* TEXTO BASE */}
      <h2
        className="
          text-[2rem] sm:text-4xl md:text-5xl
          font-bold leading-tight
          tracking-tight
          text-zinc-700
        "
      >
        {children}
      </h2>

      {/* TEXTO ANIMADO */}
      <div
        className={`
          absolute inset-0 overflow-hidden
          transition-all duration-1000 ease-out
          ${visible ? "w-full" : "w-0"}
        `}
      >
        <h2
          className="
            text-[2rem] sm:text-4xl md:text-5xl
            font-bold leading-tight
            tracking-tight
            text-white
            whitespace-nowrap
          "
        >
          {children}
        </h2>
      </div>
    </div>
  );
}