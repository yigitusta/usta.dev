import React from "react";
import { GitHubIcon, InstagramIcon, LinkedInIcon, StackOverflowIcon } from "./icons";

export function Page() {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-cyan-800 via-violet-800 to-blue-800 font-bungee text-neutral-content">
      <div className="hero-content flex-col lg:flex-row lg:items-stretch">
        <img alt="" src="/images/usta3.png" className="max-w-xs rounded-lg shadow-2xl" />
        <div className="flex flex-col justify-between">
          <h1 className="text-center font-bungeeShade text-7xl tracking-wider text-primary md:text-start">HELLO!</h1>
          <div className="flex grow flex-col justify-between gap-3 py-6 text-lg">
            <div>My name is Usta.</div>
            <div>I&apos;m a software engineer based in Tokyo, Japan.</div>
            <div>
              In my personal life, I enjoy doing CrossFit, cooking rather interesting food, listening to German rap
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
          <div className="flex flex-row justify-center gap-4 lg:justify-start">
            <GitHubIcon className="w-12 fill-neutral-content transition-all hover:cursor-pointer" />
            <StackOverflowIcon className="w-12 fill-neutral-content transition-all hover:cursor-pointer " />
            <LinkedInIcon className="w-12 fill-neutral-content transition-all hover:cursor-pointer" />
            <InstagramIcon className="w-12 fill-neutral-content transition-all hover:cursor-pointer" />
          </div>
          {/* <div className="flex justify-between">
            <button className="btn-accent btn-wide btn-lg btn text-2xl">Resume</button>
            <button className="btn-accent btn-wide btn-lg btn text-2xl">Transcript</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
