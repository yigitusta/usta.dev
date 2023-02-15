import React from "react";

export function Page() {
  return (
    <div className="hero min-h-screen bg-neutral font-bungee text-neutral-content">
      <div className="hero-content flex-col lg:flex-row lg:items-stretch">
        <img alt="" src="/images/usta1.jpg" className="max-w-xs rounded-lg shadow-2xl" />
        <div className="flex flex-col justify-between">
          <h1 className="font-bungeeShade text-7xl tracking-wider">HELLO!</h1>
          <div className="flex grow flex-col justify-between gap-3 py-6 text-lg">
            <div>My name is Usta.</div>
            <div>I&apos;m a Turkish software engineer based in Tokyo, Japan.</div>
            <div>I have professional working experience in front-end, back-end, and cloud.</div>
            <div>
              In my personal life, I enjoy doing CrossFit, cooking different kinds of food, listening to German rap
              music and organizing parties.
            </div>
            <div>
              On this website, you can find my{" "}
              <a href="/portfolio" className="link-hover link-info">
                portfolio
              </a>
              ,{" "}
              <a href="/blog" className="link-hover link-info">
                blog
              </a>
              ,{" "}
              <a href="/workouts" className="link-hover link-info">
                workout videos
              </a>
              ,{" "}
              <a href="/cooking" className="link-hover link-info">
                cooking videos
              </a>
              ,{" "}
              <a href="/playlists" className="link-hover link-info">
                favorite spotify playlists
              </a>
              .
            </div>
          </div>
          <div className="flex justify-between">
            <button className="btn-accent btn-wide btn-lg btn text-2xl">Resume</button>
            <button className="btn-accent btn-wide btn-lg btn text-2xl">Transcript</button>
          </div>
        </div>
      </div>
    </div>
  );
}
