// Homepage hero — accessible autoplay video with pause/mute controls,
// single primary CTA plus one lower-commitment secondary CTA, and a trust strip.
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-toro-espresso text-toro-cream">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl md:text-6xl">
          Artisan Coffee Beans
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-toro-sand">
          Sourced, roasted and delivered fresh — from our roastery to your cup.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/shop"
            className="rounded-full bg-toro-clay px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Shop Coffee
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-toro-cream px-6 py-3 font-semibold text-toro-cream hover:bg-toro-cream hover:text-toro-espresso"
          >
            Our Story
          </Link>
        </div>

        <p className="mt-6 text-sm text-toro-sand">
          Free delivery over R500 · Roasted to order · Nationwide shipping
        </p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="rounded-full bg-black/40 p-2 text-white opacity-70 hover:opacity-100"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="rounded-full bg-black/40 p-2 text-white opacity-70 hover:opacity-100"
        >
          {muted ? <MuteIcon /> : <SoundIcon />}
        </button>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
  );
}
function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
  );
}
function MuteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4zM23 9l-6 6M17 9l6 6" /></svg>
  );
}
function SoundIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4zM15 9a4 4 0 0 1 0 6M18 7a8 8 0 0 1 0 10" /></svg>
  );
}
