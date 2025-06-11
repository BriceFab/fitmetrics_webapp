import React from "react";

export default function AboutUsPage() {
  return (
      <div className="min-h-screen py-20 px-6 sm:px-16 flex flex-col items-center bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <p className="max-w-3xl text-lg leading-7 text-center mb-12">
          FitMetrics is dedicated to helping you track your fitness goals with precision.
          Our team of engineers, designers, and health experts build user-centric tools
          that empower personal wellness through data and technology.
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl w-full">
          <div className="p-6 rounded-xl border dark:border-neutral-700 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-sm leading-6">
              To make fitness tracking intuitive, insightful, and accessible for everyone.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-neutral-700 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-sm leading-6">
              Empower people to take control of their health using data-driven technology.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-neutral-700 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc list-inside text-sm leading-6">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Empathy</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </section>
      </div>
  );
}
