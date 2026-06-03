import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "30+", label: "Años de experiencia" },
  { value: "100%", label: "Trabajo a medida" },
  { value: "Alta", label: "Calidad en terminaciones" },
  { value: "3", label: "Generaciones de oficio" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Artesanía real",
    desc: "Cada pieza es trabajada a mano, con el cuidado y la precisión que solo dan los años de oficio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Materiales nobles",
    desc: "Seleccionamos maderas y metales de primera calidad para garantizar durabilidad y belleza.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Trabajo a medida",
    desc: "Escuchamos cada necesidad y diseñamos soluciones personalizadas que se adaptan a tu espacio y estilo.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, visible];
}

export default function Nosotros() {
  const [sectionRef, sectionVisible] = useInView();
  const [statsRef, statsVisible] = useInView();

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* SUPERPOSICION DE VETAS MADERA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            92deg,
            #eab308 0px,
            transparent 1px,
            transparent 18px,
            #eab308 19px,
            transparent 20px
          )`,
        }}
      />

      {/* LINEA DE ACENTO AMBAR PARTE SUPERIOR */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#eab308] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* ── HEADER ─────────────────────────────────────── */}
        <div
          className={`transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-yellow-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Quiénes somos
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Más de tres décadas<br />
            <span className="text-[#eab308]">construyendo con oficio</span>
          </h2>
        </div>

        {/* ── DISEÑO DE DOS COLUMNAS ──────────────────────────── */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* HISTORIA DE LA IZQUIERDA */}
          <div
            className={`transition-all duration-700 delay-100 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
              <p>
                Carpintería y Herrería{" "}
                <strong className="font-semibold">Valverde</strong>
                {" "}nació del compromiso con el trabajo bien hecho. Desde hace más de
                treinta años desarrollamos proyectos a medida, combinando experiencia,
                atención personalizada y materiales de primera calidad.
              </p>

              <p>
                Trabajamos madera y metal para crear muebles, aberturas,
                estructuras y soluciones funcionales que se adaptan a cada espacio,
                cuidando cada detalle desde el diseño hasta la instalación final.
              </p>

              <p>
                Creemos que los mejores resultados nacen del diálogo con cada cliente,
                transformando ideas en proyectos duraderos, elegantes y pensados para
                acompañar el uso cotidiano durante muchos años.
              </p>
            </div>

            {/* DETALLE DE LA FIRMA */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#eab308]" />
              <p className="text-[#eab308] text-sm font-medium tracking-widest uppercase">
                Familia Valverde
              </p>
            </div>
          </div>

          {/* DERECHA: TARJETA DE VALORES */}
          <div
            className={`transition-all duration-700 delay-200 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="group flex gap-5 items-start p-5 rounded-lg 
                  border border-white/[0.07] 
                  bg-white/[0.03] 
                  hover:bg-white/[0.05] 
                  hover:border-[#eab308]/30
                  hover:-translate-y-1 
                  transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mt-0.5 flex-shrink-0 text-[#eab308] group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{v.title}</h3>
                    <p className="text-[#9b978f] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BARRA DE ESTADO ─────────────────────────────────── */}
        <div
          ref={statsRef}
          className={`mt-20 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p
                className="text-4xl md:text-5xl font-bold text-[#eab308] leading-none mb-2"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {s.value}
              </p>
              <p className="text-[#7a756d] text-xs tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* LINEA DE ACENTO AMBAR EN LA PARTE INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#eab308]/40 to-transparent" />
    </section>
  );
}
