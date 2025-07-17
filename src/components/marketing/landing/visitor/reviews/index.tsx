import React from "react";

// Données extraites pour éviter la répétition
const reviewsData = [
  {
    id: 1,
    text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
    author: "Cécile Pislor",
    role: "CEO @ DroitAuCoeurCoaching",
  },
  {
    id: 2,
    text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
    author: "Cécile Pislor",
    role: "CEO @ DroitAuCoeurCoaching",
  },
  {
    id: 3,
    text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
    author: "Cécile Pislor",
    role: "CEO @ DroitAuCoeurCoaching",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="pt-[4em] md:pt-[5em] py-8 md:py-16 px-4 relative min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        {/* Titre sticky */}
        <div className="sticky top-16 md:top-20 text-center z-0 mb-8 md:mb-16">
          <h2 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4 pointer-events-none px-4">
            Ce que nos experts disent de nous.
          </h2>
          <p className="text-gray-600 text-base md:text-lg pointer-events-none px-4">
            On ne les a pas du tout forcés à parler.
          </p>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
          {reviewsData.map((review, index) => {
            const getTransform = (index: number) => {
              switch (index) {
                case 0:
                  return "translate-y-0";
                case 1:
                  return "sm:translate-y-8 md:translate-y-[30rem]";
                case 2:
                  return "sm:translate-y-4 md:translate-y-32";
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                    <svg
                      viewBox="0 0 171 171"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <g filter="url(#filter0_d_2071_266)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M55.2564 52.8785C44.3091 56.2504 38.168 67.8584 41.5399 78.8057L52.8784 115.618C56.2503 126.565 67.8583 132.706 78.8055 129.334L115.617 117.995C126.565 114.624 132.706 103.016 129.334 92.0684L117.995 55.2565C114.623 44.3092 103.016 38.1682 92.0683 41.54L55.2564 52.8785ZM93.7871 63.9959C90.8942 62.4654 87.3083 63.5699 85.7779 66.4628L69.9428 96.3946C68.4124 99.2875 69.5168 102.873 72.4097 104.404L77.0866 106.878C79.9795 108.409 83.5653 107.304 85.0958 104.411L100.931 74.4793C102.461 71.5864 101.357 68.0005 98.4639 66.4701L93.7871 63.9959Z"
                          fill="#111111"
                        />
                        <path
                          d="M90.5104 36.4805C104.252 32.2483 118.822 39.9572 123.055 53.6986L134.393 90.5105C138.626 104.252 130.917 118.823 117.175 123.055L80.3643 134.393C66.6227 138.626 52.0514 130.917 47.8189 117.175L36.4804 80.3635C32.2481 66.6221 39.957 52.0515 53.6985 47.819L90.5104 36.4805ZM91.3109 68.6752C91.0026 68.5124 90.62 68.63 90.4569 68.9382L74.6219 98.8701C74.4588 99.1783 74.5768 99.5607 74.8849 99.724L79.5626 102.198C79.871 102.361 80.2524 102.244 80.4156 101.935L96.2516 72.0031C96.4143 71.6947 96.2968 71.3122 95.9886 71.1491L91.3109 68.6752Z"
                          stroke="#F7F7F7"
                          strokeWidth="10.5882"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2071_266"
                          x="0.0244141"
                          y="0.0245361"
                          width="170.825"
                          height="170.825"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2071_266"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2071_266"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
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

        <div className="h-[2rem] sm:h-[30rem] md:h-[40rem]"></div>
      </div>
    </section>
  );
};

export default Reviews;
