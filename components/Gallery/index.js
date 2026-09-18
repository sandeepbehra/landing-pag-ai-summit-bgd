"use client";
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// --- RICH GALLERY DATA (MATCHED TO PROJECT RENDERS) ---
const SLIDES = [
  {
    image: "/gallery/gal1.webp", // Image 1: Aerial View with Lake & Towers
    title: "100+ Acre Township Masterplan",
    category: "Masterplan",
    subtitle: "Bird's-eye view of high-rise residences, 10+ acre lake, and sports hub",
  },
  {
    image: "/gallery/gal2.webp", // Image 2: Illuminated Sculpture Garden / Plaza
    title: "Solar Tree & Labyrinth Plaza",
    category: "Landscape",
    subtitle: "Sculptural central court framed by lush circular hedge gardens",
  },
  {
    image: "/gallery/gal3.webp", // Image 3: Stepped Tiered Garden Walkway
    title: "Illuminated Terraced Meadows",
    category: "Landscape",
    subtitle: "Stepped garden trails and illuminated flora framing the residential towers",
  },
  {
    image: "/gallery/gal4.webp", // Image 4: Viewing Deck & Water Stream
    title: "Serene Waterside Promenade",
    category: "Amenities",
    subtitle: "Circular observation deck over tranquil streams and blooming trees",
  },
  {
    image: "/gallery/gal5.webp", // Image 5: Top-down Butterfly / Flower Patterned Park
    title: "Curated Botanical Gardens",
    category: "Green Spaces",
    subtitle: "Aerial vista of themed floral arrangements and pedestrian pathways",
  },
  {
    image: "/gallery/gal6.webp", // Image 6: Grand Entrance Arch & Retail Promenade
    title: "Grand Entrance & High-Street Retail",
    category: "Commercial",
    subtitle: "Gated boulevard with direct access to commercial conveniences",
  },
  {
    image: "/gallery/gal7.webp", // Image 7: Kids Waterfall Pool & Splash Deck
    title: "Cascading Waterfall & Splash Park",
    category: "Amenities",
    subtitle: "Interactive water pavilion with family wading pools and viewing deck",
  },
];

// --- FRAMER MOTION VARIANTS ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
};

const swipeConfidenceThreshold = 8000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Gallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const imageIndex = ((page % SLIDES.length) + SLIDES.length) % SLIDES.length;
  const currentSlide = SLIDES[imageIndex];

  const paginate = useCallback((newDirection) => {
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  }, []);

  // --- AUTO SLIDESHOW LOGIC ---
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, paginate]);

  // --- KEYBOARD NAVIGATION ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        paginate(1);
        setIsPlaying(false);
      }
      if (e.key === "ArrowLeft") {
        paginate(-1);
        setIsPlaying(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  return (
    <section
      className="relative w-full h-[65svh] md:h-screen mt-16 bg-[#0a0a0a] text-white overflow-hidden font-sans select-none"
      id="gallery"
      data-track="gallery"
    >
      {/* 1. BACKGROUND IMAGE SLIDER */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
              setIsPlaying(false);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
              setIsPlaying(false);
            }
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            sizes="100vw"
            className="object-cover relative z-10"
            priority
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none z-10" />

      {/* 2. TOP CONTROL BAR */}
      <div className="absolute top-0 left-0 w-full p-5 md:p-10 flex justify-between items-start z-20 pointer-events-none">
        {/* Left: Slide Counter Pill */}
        <div className="pointer-events-auto flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-8 md:py-5">
          <span className="text-white font-sans tracking-[0.2em] text-xs md:text-sm font-bold">
            {String(imageIndex + 1).padStart(2, "0")}{" "}
            <span className="text-white/40">
              / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </span>
        </div>

        {/* Right: Media Controls Pill */}
        <div className="pointer-events-auto flex items-center gap-1 md:gap-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-1 md:p-3">
          <button
            onClick={() => {
              paginate(-1);
              setIsPlaying(false);
            }}
            className="p-3 md:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-all active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>

          <div className="w-[1px] h-5 md:h-6 bg-white/10" />

          {/* PLAY/PAUSE TOGGLE */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 md:p-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-all active:scale-95"
            aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
          >
            {isPlaying ? (
              <Pause
                className="w-4 h-4 md:w-6 md:h-6 fill-current"
                strokeWidth={1.5}
              />
            ) : (
              <Play
                className="w-4 h-4 md:w-6 md:h-6 fill-current"
                strokeWidth={1.5}
              />
            )}
          </button>

          <div className="w-[1px] h-5 md:h-6 bg-white/10" />

          <button
            onClick={() => {
              paginate(1);
              setIsPlaying(false);
            }}
            className="p-3 md:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-all active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* 3. BOTTOM CONTENT LAYER */}
      <div className="absolute bottom-0 left-0 w-full px-6 pt-6 pb-20 md:p-12 flex flex-col md:flex-row justify-between items-end z-20 pointer-events-none gap-8">
        {/* Left: Dynamic Typography Block */}
        <div className="pointer-events-auto flex flex-col max-w-2xl">
          <motion.span
            key={`cat-${imageIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#BDD2C1] text-xs md:text-sm font-semibold mb-2 md:mb-3 tracking-[0.2em] uppercase"
          >
            {currentSlide.category}
          </motion.span>

          <motion.h1
            key={`title-${imageIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] uppercase text-white drop-shadow-lg"
          >
            {currentSlide.title}
          </motion.h1>

          <motion.span
            key={`sub-${imageIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-sm md:text-base font-light mt-3 md:mt-4 tracking-wide max-w-xl"
          >
            {currentSlide.subtitle}
          </motion.span>
        </div>

        {/* Center: Progress Indicator Dots */}
        <div className="pointer-events-auto flex items-center justify-center gap-1.5 md:gap-2 absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-12 w-full md:w-auto px-4 md:px-0">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const newDirection = idx > imageIndex ? 1 : -1;
                setPage([page + (idx - imageIndex), newDirection]);
                setIsPlaying(false);
              }}
              className={`transition-all duration-500 ease-out rounded-full shrink-0 ${
                imageIndex === idx
                  ? "w-8 md:w-10 h-1.5 md:h-2 bg-[#BDD2C1]"
                  : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 4. ARTISTIC IMPRESSION DISCLAIMER */}
      <div className="absolute bottom-6 right-4 md:bottom-12 md:right-12 z-30 pointer-events-none">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full shadow-lg">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium">
            * Artistic Impression
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;