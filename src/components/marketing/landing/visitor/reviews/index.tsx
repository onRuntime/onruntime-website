import React from "react";
import Image from "next/image";
import Testimonial from "../../testimonial";

// Données extraites pour éviter la répétition
const reviewsData = [
  {
    id: 1,
    text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
    author: "Cécile Pislor",
    role: "CEO @ DroitAuCoeurCoaching",
    avatar: "/favicon-32x32.png",
  },
  {
    id: 2,
    text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
    author: "Cécile Pislor",
    role: "CEO @ DroitAuCoeurCoaching",
    avatar: "/favicon-32x32.png",
  },
  {
    id: 3,
    text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
    author: "Cécile Pislor",
    role: "CEO @ DroitAuCoeurCoaching",
    avatar: "/favicon-32x32.png",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="pt-[4em] md:pt-[15em] py-8 md:py-16 px-4 relative min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        {/* Titre sticky qui reste derrière les commentaires */}
        <div className="sticky top-16 md:top-20 text-center z-0 mb-8 md:mb-16">
          <h2 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4 pointer-events-none px-4">
            Ce que nos experts disent de nous.
          </h2>
          <p className="text-gray-600 text-base md:text-lg pointer-events-none px-4">
            On ne les a pas du tout forcés à parler.
          </p>
        </div>

        {/* Grille des avis qui défile devant le titre */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
          {reviewsData.map((review, index) => {
            const getTransform = (index: number) => {
              switch (index) {
                case 0:
                  return "translate-y-0";
                case 1:
                  return "sm:translate-y-8 md:translate-y-[30rem]"; // Moins de décalage sur mobile
                case 2:
                  return "sm:translate-y-4 md:translate-y-32"; // Moins de décalage sur mobile
                default:
                  return "translate-y-0";
              }
            };

            return (
              <article
                key={review.id}
                className={`bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 ${getTransform(index)} z-10 relative`}
              >
                <blockquote className="mb-4 md:mb-6">
                  <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>
                <div className="flex items-center gap-3 md:gap-4">
                  <Image
                    src={review.avatar}
                    alt={`Photo de ${review.author}`}
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 truncate">
                      {review.author}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {review.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Spacer responsive */}
        <div className="h-[2rem] sm:h-[30rem] md:h-[40rem]"></div>
      </div>

      {/* Témoignage Lucas Bodin */}
      <Testimonial
        quote="onRuntime Studio c'est bien plus qu'un simple studio de créateurs. C'est un espace où l'innovation, la collaboration, et la passion se lient pour donner vie à des projets uniques. Nous croyons au pouvoir de l'intelligence collective, où chaque créateur, apporte sa vision afin qu'ensemble, nous transformions des idées en réalités."
        author="Lucas Bodin"
        role="Head of Design"
        company="onRuntime Studio"
        imageSrc="/static/images/members/lucas-bodin.jpg"
      />
    </section>
  );
};

export default Reviews;
