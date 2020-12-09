import React from "react";
import image from "../home-header.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="Musician on stage" className="absolute object-cover w-full h-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-96 px-8">
        <h1 className="text-6xl text-white font-bold roboto leading-none lg:leading-snug home-name">Hello, I'm Alex</h1>
      </section>
    </main>
  );
}
