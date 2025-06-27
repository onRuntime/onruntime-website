import React from "react";
import Image from "next/image";

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageSrc: string;
  imageAlt?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  imageSrc,
  imageAlt = `Photo ${author}`,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
        {/* Image - centrée sur mobile, à gauche sur desktop */}
        <div className="flex-shrink-0 order-1 md:order-none">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={120}
            height={120}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px] rounded-lg rotate-[-10deg] md:rotate-[-15deg] shadow-lg bg-white px-2 pt-2 pb-4 md:pb-6 transition-all duration-300 ease-in-out hover:rotate-0 hover:scale-105 mx-auto md:mx-0"
          />
        </div>

        {/* Contenu texte */}
        <div className="flex-1 text-center md:text-left order-2 md:order-none">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black leading-relaxed mb-4 md:mb-6">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="text-base md:text-lg text-gray-600">
            <span className="font-semibold">{author}</span>, {role} @{" "}
            <strong className="text-black">{company}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
