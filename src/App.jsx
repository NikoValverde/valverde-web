import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa"

import FancyText from "./components/FancyText";

import { useState } from "react";

import heroImage from "./assets/Banner-1.jpg";

import {
  Hammer,
  Wrench,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Thumbs,
  Zoom,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/zoom";

function BrandLogo({ href, src, alt, size, noInvert = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0"
    >
      <img
        src={src}
        alt={alt}
        className={`
          ${size}
          object-contain
          opacity-70
          grayscale
          ${noInvert ? "" : "brightness-0 invert"}
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:scale-105
          group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]
        `}
      />
    </a>
  );
}

export default function App() {
  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const projects = {
    cocinas: {
      title: "Cocinas a Medida",
      description:
        "Diseños modernos y funcionales con materiales premium y terminaciones elegantes.",
      images: [
        "/images/projects/cocinas/cocina1.jpg",
        "/images/projects/cocinas/cocina2.jpg",
        "/images/projects/cocinas/cocina3.jpg",
      ],
    },

    pergolas: {
      title: "Pérgolas",
      description:
        "Estructuras exteriores modernas combinando diseño y resistencia.",
      images: [
        "/images/projects/pergolas/pergola1.jpg",
        "/images/projects/pergolas/pergola2.jpg",
        "/images/projects/pergolas/pergola3.jpg",
      ],
    },

    bibliotecas: {
      title: "Bibliotecas",
      description:
        "Muebles personalizados pensados para integrar diseño y funcionalidad.",
      images: [
        "/images/projects/bibliotecas/biblio1.jpg",
        "/images/projects/bibliotecas/biblio2.jpg",
        "/images/projects/bibliotecas/biblio3.jpg",
      ],
    },

    parrillas: {
      title: "Frentes de Parrilla",
      description:
        "Diseños modernos en herrería y carpintería para espacios únicos.",
      images: [
        "/images/projects/parrillas/parrilla1.jpg",
        "/images/projects/parrillas/parrilla2.jpg",
        "/images/projects/parrillas/parrilla3.jpg",
      ],
    },

    otros: {
      title: "Otros Trabajos",
      description:
        "Proyectos personalizados realizados según las necesidades de cada cliente.",
      images: [
        "/images/projects/otros/otro1.jpg",
        "/images/projects/otros/otro2.jpg",
        "/images/projects/otros/otro3.jpg",
      ],
    },
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setResult("Enviando...");

    const formData = new FormData(event.target);

    formData.append("access_key", "98d2ddbd-b079-4aee-a4ad-d335659d5a7b");

    /* VALIDACIÓN POR DOMINIOS RAROS */

    const email = formData.get("email");

    const blockedDomains = [
      "tempmail.com",
      "10minutemail.com",
      "guerrillamail.com",
      "mailinator.com",
    ];

    const domain = email.split("@")[1];

    if (blockedDomains.includes(domain)) {
      setResult("Por favor utiliza un correo válido.");
      setLoading(false);
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Solicitud enviada correctamente.");
      event.target.reset();
    } else {
      setResult("Ocurrió un error.");
    }

    setLoading(false);
  };
  return (
    <div className="bg-black text-white min-h-screen">
    {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-22 bg-black/90 backdrop-blur-md border-b border-yellow-600 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-6 ml-1">

            <img
              src="/logo.png"
              alt="Valverde"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-3xl font-bold tracking-wide ml-4">
                VALVERDE
              </h1>

              <p className="text-xs text-yellow-500 tracking-[3px]">
                CARPINTERÍA Y HERRERÍA
              </p>
            </div>

          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">

            <a href="#inicio" className="hover:text-yellow-500 transition">
              Inicio
            </a>

            <a href="#servicios" className="hover:text-yellow-500 transition">
              Servicios
            </a>

            <a href="#portfolio" className="hover:text-yellow-500 transition">
              Galería
            </a>

            <a href="#nosotros" className="hover:text-yellow-500 transition">
              Nosotros
            </a>

            <a href="#contacto" className="hover:text-yellow-500 transition">
              Contacto
            </a>

          </nav>

          {/* BOTON MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-yellow-500"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden bg-black border-b border-yellow-600 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >

          <nav className="flex flex-col items-center gap-6 py-6 text-sm uppercase tracking-wider">

            <a
              href="#inicio"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Inicio
            </a>

            <a
              href="#servicios"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Servicios
            </a>

            <a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Galería
            </a>

            <a
              href="#nosotros"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Contacto
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Diseño y fabricación</h2>
            <h2><span className="text-5xl md:text-7xl font-bold leading-tight text-yellow-500"> a medida</span>
          </h2>

          <p className="mt-8 text-[#e5e5e5] text-lg leading-relaxed">
            Especialistas en carpintería y herrería moderna. Creamos muebles,
            estructuras y proyectos únicos con diseño elegante y materiales de
            primera calidad.
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition"
          >
            Solicitar presupuesto
            <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="scroll-mt-24 py-24 px-6 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <FancyText>
              Nuestros Servicios
            </FancyText>

            <p className="text-zinc-400 mt-4">
              Soluciones modernas y personalizadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* SERVICIOS CARPINTERÍA */}
            <div className="relative group rounded-3xl p-[1px] overflow-hidden">

              {/* CONTENIDO */}
              <div className="relative rounded-3xl overflow-hidden h-[340px] border border-zinc-800">

                {/* IMAGEN */}
                <img
                  src="/images/servicios/carpinteria.jpg"
                  alt="Carpintería"
                  className="absolute inset-0 w-full h-full object-cover scale-100 blur-0 brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-50"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TEXTO */}
                <div className="relative z-10 h-full flex flex-col justify-end p-10 transition-all duration-500">

                  <Hammer
                    size={50}
                    className="text-yellow-500 mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110"
                  />

                  <h4 className="text-3xl font-bold transition-all duration-500 group-hover:-translate-y-2">
                    Carpintería
                  </h4>

                  <p className="mt-4 leading-relaxed text-[15px] md:text-base text-zinc-300 opacity-80 transition-all duration-500 group-hover:text-white group-hover:opacity-100 group-hover:text-[16px] md:group-hover:text-lg">
                    Nos especializamos en la fabricación de amoblamientos de cocina,
                     vestidores, vanitorys, escaleras, revestimientos y muebles personalizados,
                     desarrollando proyectos únicos con materiales de calidad y terminaciones premium.
                  </p>

                </div>

              </div>
            </div>

            {/*  SERVICIOS HERRERÍA */}
            <div className="relative group rounded-3xl p-[1px] overflow-hidden">

              {/* CONTENIDO */}
              <div className="relative rounded-3xl overflow-hidden h-[340px] border border-zinc-800">

                {/* IMAGEN */}
                <img
                  src="/images/servicios/herreria.jpg"
                  alt="Herrería"
                  className="absolute inset-0 w-full h-full object-cover scale-100 blur-0 brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-50"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TEXTO */}
                <div className="relative z-10 h-full flex flex-col justify-end p-10 transition-all duration-500">

                  <Wrench
                    size={50}
                    className="text-yellow-500 mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110"
                  />

                  <h4 className="text-3xl font-bold transition-all duration-500 group-hover:-translate-y-2">
                    Herrería
                  </h4>

                  <p className="mt-4 leading-relaxed text-[15px] md:text-base text-zinc-300 opacity-80 transition-all duration-500 group-hover:text-white group-hover:opacity-100 group-hover:text-[16px] md:group-hover:text-lg">
                    Creamos proyectos de herrería que combinan diseño,
                    funcionalidad y durabilidad. Realizamos pérgolas,
                    escaleras, puertas, frentes de parrilla, divisores y 
                    estructuras metálicas con estética moderna y terminaciones cuidadas.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section
        id="portfolio"
        className="scroll-mt-24 py-24 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto">

          {/* TITULO */}
          <div className="text-center mb-16">

            <FancyText>
              Galería
            </FancyText>

            <p className="text-zinc-400 mt-4">
              Algunos de nuestros trabajos realizados.
            </p>

          </div>

          {/* GRID */}
          <div className="relative hidden md:block min-h-[650px] rounded-3xl overflow-hidden border border-zinc-800">

            {/* BACKGROUNDS */}

            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                activeIndex === 0
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage:
                  "url('/images/portfolio/trabajo1.jpg')",
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === 0
                    ? "bg-black/20"
                    : "bg-black/60"
                }`}
              ></div>
            </div>

            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                activeIndex === 1
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage:
                  "url('/images/portfolio/trabajo2.jpg')",
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === 1
                    ? "bg-black/20"
                    : "bg-black/60"
                }`}
              ></div>
            </div>

            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                activeIndex === 2
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage:
                  "url('/images/portfolio/trabajo3.jpg')",
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === 2
                    ? "bg-black/20"
                    : "bg-black/60"
                }`}
              ></div>
            </div>

            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                activeIndex === 3
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage:
                  "url('/images/portfolio/trabajo4.jpg')",
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === 3
                    ? "bg-black/20"
                    : "bg-black/60"
                }`}
              ></div>
            </div>

            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                activeIndex === 4
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage:
                  "url('/images/portfolio/otro1.jpg')",
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === 4
                    ? "bg-black/20"
                    : "bg-black/60"
                }`}
              ></div>
            </div>

            {/* CARDS */}
            <div className="hidden md:grid absolute inset-0 md:grid-cols-5">

              {/* CARD 1 */}
              <div
                onMouseEnter={() => setActiveIndex(0)}
                onClick={() => setSelectedProject(projects.cocinas)}
                className="group relative flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-all duration-500 group-hover:bg-black/80"></div>

                <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-2">

                  <span className="text-yellow-500 text-sm uppercase tracking-[3px]">
                    Carpintería
                  </span>

                  <button
                    className="text-left"
                  >
                    <h3 className="text-white text-3xl font-bold mt-3 hover:text-yellow-400 transition">
                      Cocinas a Medida
                    </h3>
                  </button>

                  <p
                    className={`text-zinc-300 mt-4 leading-relaxed transition-all duration-500 ${
                      activeIndex === 0
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Diseño moderno con materiales de primera calidad y terminaciones elegantes.
                  </p>

                </div>
              </div>

              {/* CARD 2 */}
              <div
                onMouseEnter={() => setActiveIndex(1)}
                onClick={() => setSelectedProject(projects.pergolas)}
                className="group relative flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-all duration-500 group-hover:bg-black/80"></div>

                <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-2">

                  <span className="text-yellow-500 text-sm uppercase tracking-[3px]">
                    Herrería
                  </span>

                  <button
                    className="text-left"
                  >
                    <h3 className="text-white text-3xl font-bold mt-3 hover:text-yellow-400 transition">
                      Pérgolas
                    </h3>
                  </button>

                  <p
                    className={`text-zinc-300 mt-4 leading-relaxed transition-all duration-500 ${
                      activeIndex === 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Estructuras metálicas combinadas con diseño minimalista y funcional.
                  </p>

                </div>
              </div>

              {/* CARD 3 */}
              <div
                onMouseEnter={() => setActiveIndex(2)}
                onClick={() => setSelectedProject(projects.bibliotecas)}
                className="group relative flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-all duration-500 group-hover:bg-black/80"></div>

                <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-2">

                  <span className="text-yellow-500 text-sm uppercase tracking-[3px]">
                    Carpintería
                  </span>

                  <button
                    className="text-left"
                  >
                    <h3 className="text-white text-3xl font-bold mt-3 hover:text-yellow-400 transition">
                      Bibliotecas
                    </h3>
                  </button>

                  <p
                    className={`text-zinc-300 mt-4 leading-relaxed transition-all duration-500 ${
                      activeIndex === 2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Espacios funcionales con estética moderna y detalles personalizados.
                  </p>

                </div>
              </div>

              {/* CARD 4 */}
              <div
                onMouseEnter={() => setActiveIndex(3)}
                onClick={() => setSelectedProject(projects.parrillas)}
                className="group relative flex flex-col justify-end p-8 cursor-pointer overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-all duration-500 group-hover:bg-black/80"></div>

                <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-2">

                  <span className="text-yellow-500 text-sm uppercase tracking-[3px]">
                    Herrería
                  </span>

                  <button
                    className="text-left"
                  >
                    <h3 className="text-white text-3xl font-bold mt-3 hover:text-yellow-400 transition">
                      Frente de Parrillas
                    </h3>
                  </button>

                  <p
                    className={`text-zinc-300 mt-4 leading-relaxed transition-all duration-500 ${
                      activeIndex === 3
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Combinación de metal y vidrio para ambientes modernos y elegantes.
                  </p>

                </div>
              </div>

              {/* CARD 5 */}
              <div
                onMouseEnter={() => setActiveIndex(4)}
                onClick={() => setSelectedProject(projects.otros)}
                className="group relative flex flex-col justify-end p-8 border-l border-white/10 cursor-pointer overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-all duration-500 group-hover:bg-black/80"></div>

                <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-2">

                  <span className="text-yellow-500 text-sm uppercase tracking-[3px]">
                    Proyectos
                  </span>

                  <button
                    className="text-left"
                  >
                    <h3 className="text-white text-3xl font-bold mt-3 hover:text-yellow-400 transition">
                      Otros Trabajos
                    </h3>
                  </button>

                  <p
                    className={`text-zinc-300 mt-4 leading-relaxed transition-all duration-500 ${
                      activeIndex === 4
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Proyectos personalizados y trabajos realizados a medida para cada espacio.
                  </p>

                </div>
              </div>

            </div>
          </div>
          {/* MOBILE GALLERY */}
          <div className="md:hidden mt-8 space-y-4">

            {[
              {
                title: "Cocinas a Medida",
                category: "Carpintería",
                image: "/images/portfolio/trabajo1.jpg",
                project: projects.cocinas,
              },

              {
                title: "Pérgolas",
                category: "Herrería",
                image: "/images/portfolio/trabajo2.jpg",
                project: projects.pergolas,
              },

              {
                title: "Bibliotecas",
                category: "Carpintería",
                image: "/images/portfolio/trabajo3.jpg",
                project: projects.bibliotecas,
              },

              {
                title: "Frente de Parrillas",
                category: "Herrería",
                image: "/images/portfolio/trabajo4.jpg",
                project: projects.parrillas,
              },

              {
                title: "Otros Trabajos",
                category: "Proyectos",
                image: "/images/portfolio/otro1.jpg",
                project: projects.otros,
              },
            ].map((item, index) => (

              <button
                key={index}
                onClick={() => setSelectedProject(item.project)}
                className="relative w-full h-[180px] rounded-3xl overflow-hidden border border-zinc-800 text-left"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">

                  <span className="text-yellow-500 text-xs uppercase tracking-[3px]">
                    {item.category}
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    {item.title}
                  </h3>

                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <FancyText>Nosotros</FancyText>

          <p className="text-zinc-400 mt-8 leading-relaxed text-lg">
            En Carpintería y Herrería Valverde combinamos la tradición de una carpintería familiar con estándares de calidad modernos. 
            Desarrollamos proyectos personalizados en madera y herrería, priorizando la excelencia en terminaciones, la funcionalidad y el diseño. 
            Cada trabajo refleja nuestro compromiso con la calidad y el cuidado en cada detalle.
          </p>
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-20 bg-black overflow-hidden border-t border-zinc-900">

        <div className="text-center mb-12">

          <p className="text-zinc-200 uppercase tracking-[5px] text-sm">
            Trabajamos con marcas líderes
          </p>

        </div>

        {/* FADE LATERALES */}
        <div className="relative">

          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* MARQUEE */}
          <div className="flex w-max animate-marquee gap-24 items-center">

            {/* SET 1 */}

            <BrandLogo
              href="https://www.blum.com/su/es/"
              src="/images/brands/blum.png"
              alt="Blum"
              size="h-14"
            />

            <BrandLogo
              href="https://www.hafele.com.ar/"
              src="/images/brands/hafele.png"
              alt="Häfele"
              size="h-7"
            />

            <BrandLogo
              href="https://www.ducasseindustrial.com/"
              src="/images/brands/ducasse.png"
              alt="Ducasse"
              size="h-12"
            />

            <BrandLogo
              href="https://euro-hard.com.ar/"
              src="/images/brands/eurohard.png"
              alt="Eurohard"
              size="h-10"
            />

            <BrandLogo
              href="https://www.faplaconline.com.ar/home/"
              src="/images/brands/faplac.png"
              alt="Faplac"
              size="h-10"
              noInvert={true}
            />

            {/* DUPLICADO PARA LOOP */}

            <BrandLogo
              href="https://www.blum.com/su/es/"
              src="/images/brands/blum.png"
              alt="Blum"
              size="h-14"
            />

            <BrandLogo
              href="https://www.hafele.com.ar/"
              src="/images/brands/hafele.png"
              alt="Häfele"
              size="h-7"
            />

            <BrandLogo
              href="https://www.ducasseindustrial.com/"
              src="/images/brands/ducasse.png"
              alt="Ducasse"
              size="h-12"
            />

            <BrandLogo
              href="https://euro-hard.com.ar/"
              src="/images/brands/eurohard.png"
              alt="Eurohard"
              size="h-10"
            />

            <BrandLogo
              href="https://www.faplaconline.com.ar/home/"
              src="/images/brands/faplac.png"
              alt="Faplac"
              size="h-10"
              noInvert={true}
            />

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <FancyText>Contacto</FancyText>

            <p className="text-zinc-400 mt-6">
              Hablemos sobre tu próximo proyecto.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500" />
                <span>+54 9 11 3638-5790</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500" />
                <span>valverdecyh@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
  
                <FaInstagram
                  size={24}
                  className="text-yellow-500"
                />

                <a
                  href="https://instagram.com/carpinteria.valverde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-yellow-500 transition"
                >
                  @carpinteria.valverde
                </a>

              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-500" />
                <span>Buenos Aires, Moreno</span>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
        <form
          onSubmit={onSubmit}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-6"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            minLength={3}
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-500"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-500"
          />

          <select
            name="servicio"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-500"
          >
            <option>Carpintería</option>
            <option>Herrería</option>
            <option>Ambos servicios</option>
          </select>

         <textarea
            rows="5"
            name="proyecto"
            placeholder="Cuéntanos tu proyecto"
            required
            minLength={15}
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-black font-bold py-4 rounded-xl transition"
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>

          <p className="text-center text-yellow-500">
            {result}
          </p>
        </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        © 2026 Carpintería y Herrería Valverde. Todos los derechos reservados.
      </footer>
      <a
        href="https://wa.me/5491136385790"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-300"></div>

        <div className="relative bg-green-500 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg">

          <FaWhatsapp
            size={32}
            className="text-white"
          />

        </div>
      </a>

    {/* MODAL PROYECTOS */}
    {selectedProject && (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[999] flex items-center justify-center px-4">

        {/* BOTON CERRAR */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 text-white hover:text-yellow-500 transition z-50"
        >
          <X size={40} />
        </button>

        <div className="w-full max-w-6xl">

          {/* TITULO */}
          <div className="mb-8 text-center">

            <h2 className="text-4xl md:text-5xl font-bold">
              {selectedProject.title}
            </h2>

            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              {selectedProject.description}
            </p>

          </div>

          {/* SLIDER PRINCIPAL */}
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectFade,
              Thumbs,
              Zoom,
            ]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            effect="fade"
            zoom
            loop
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed
                  ? thumbsSwiper
                  : null,
            }}
            className="rounded-3xl overflow-hidden"
          >

            {selectedProject.images.map((image, index) => (
              <SwiperSlide key={index}>

                <div className="swiper-zoom-container">

                  <img
                    src={image}
                    alt=""
                    className="w-full h-[70vh] object-cover"
                  />

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

          {/* THUMBNAILS */}
          <Swiper
            modules={[Thumbs]}
            onSwiper={(swiper) => {
              if (!swiper.destroyed) {
                setThumbsSwiper(swiper);
              }
            }}
            slidesPerView={4}
            spaceBetween={15}
            watchSlidesProgress
            className="mt-6"
          >

            {selectedProject.images.map((image, index) => (
              <SwiperSlide key={index}>

                <img
                  src={image}
                  alt=""
                  className="h-24 w-full object-cover rounded-xl cursor-pointer opacity-70 hover:opacity-100 transition"
                />

              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    )}                  

    </div>
  );
}
