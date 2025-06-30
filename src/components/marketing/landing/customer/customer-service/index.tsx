import Link from "next/link";
import React from "react";

const CustomerService: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="sticky top-0 bg-black flex flex-col gap-8 text-center py-8">
        <Link href="/">
          <button className="mt-16 bg-white text-black px-4 py-1.5 rounded-md shadow hover:bg-gray-100 text-sm">
            Votre projet, entre de bonnes mains 🤝
          </button>
        </Link>
        <h2 className="text-white font-semibold text-4xl">
          Notre approche: vous <br />
          accompagner de A à Z
        </h2>
      </div>
      <p className="text-gray-300  text-center w-[400px] mx-auto mb-16">
        Chaque projet est unique. C&apos;est pourquoi notre approche est
        personnalisée pour chacun d&apos;eux, afin de comprendre les besoins
        pour concevoir les solutions adaptées.
      </p>

      {/* Section des trois cartes */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte 1 */}
          <div className="bg-gradient-to-b from-black to-gray-800 rounded-xl p-8 min-h-[300px] border border-gray-700">
            <h3 className="text-white font-semibold text-2xl mb-6 text-center">
              Une approche centrée sur vos objectifs pour des solutions
              sur-mesure
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center text-sm">
              Nous récoltons vos besoins pour créer des solutions qui répondent
              à vos objectifs et à votre vision. Notre but : que le résultat
              soit à votre image, concret et performant.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-black px-4 py-1.5 rounded text-sm hover:bg-gray-100 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-gradient-to-b from-black to-gray-800 rounded-xl p-8 min-h-[300px] border border-gray-700">
            <h3 className="text-white font-semibold text-2xl mb-6 text-center">
              Une expertise polyvalente à votre service
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center text-sm">
              Notre force réside dans la diversité des talents réunis en
              développement, design et intégrations. Cette complémentarité
              permet de prendre en charge votre projet avec créativité,
              stratégie, et qualité.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-black px-4 py-1.5 rounded text-sm hover:bg-gray-100 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Carte 3 - Un suivi continu (centrée en bas) */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-xl p-8 min-h-[300px] border border-gray-700 h-full flex flex-col justify-between">
              <h3 className="text-white font-semibold text-2xl mb-6 text-center md:text-left">
                Un suivi continu pour garantir l&apos;évolution de vos projets
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-center text-sm md:text-left">
                Votre projet ne s&apos;arrête pas à sa mise en ligne. Nous
                restons disponibles pour vous proposer un suivi régulier et un
                plan d&apos;évolution personnalisé. Que ce soit pour des mises à
                jour, des optimisations ou des ajouts fonctionnels, afin que
                votre projet continue de performer dans le temps.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-white text-black px-4 py-1.5 rounded text-sm hover:bg-gray-100 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section des six cartes */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte 1 - Solutions sur-mesure */}
          <div className="rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.6 14.75H1.75C1.3375 14.75 0.984375 14.6031 0.690625 14.3094C0.396875 14.0156 0.25 13.6625 0.25 13.25V10.4C0.85 10.4 1.375 10.2094 1.825 9.82812C2.275 9.44688 2.5 8.9625 2.5 8.375C2.5 7.7875 2.275 7.30313 1.825 6.92188C1.375 6.54063 0.85 6.35 0.25 6.35V3.5C0.25 3.0875 0.396875 2.73438 0.690625 2.44063C0.984375 2.14688 1.3375 2 1.75 2H4.75C4.75 1.475 4.93125 1.03125 5.29375 0.66875C5.65625 0.30625 6.1 0.125 6.625 0.125C7.15 0.125 7.59375 0.30625 7.95625 0.66875C8.31875 1.03125 8.5 1.475 8.5 2H11.5C11.9125 2 12.2656 2.14688 12.5594 2.44063C12.8531 2.73438 13 3.0875 13 3.5V6.5C13.525 6.5 13.9688 6.68125 14.3313 7.04375C14.6938 7.40625 14.875 7.85 14.875 8.375C14.875 8.9 14.6938 9.34375 14.3313 9.70625C13.9688 10.0688 13.525 10.25 13 10.25V13.25C13 13.6625 12.8531 14.0156 12.5594 14.3094C12.2656 14.6031 11.9125 14.75 11.5 14.75H8.65C8.65 14.125 8.45312 13.5938 8.05938 13.1563C7.66563 12.7188 7.1875 12.5 6.625 12.5C6.0625 12.5 5.58438 12.7188 5.19063 13.1563C4.79688 13.5938 4.6 14.125 4.6 14.75ZM1.75 13.25H3.34375C3.64375 12.425 4.125 11.8438 4.7875 11.5063C5.45 11.1688 6.0625 11 6.625 11C7.1875 11 7.8 11.1688 8.4625 11.5063C9.125 11.8438 9.60625 12.425 9.90625 13.25H11.5V8.75H13C13.1 8.75 13.1875 8.7125 13.2625 8.6375C13.3375 8.5625 13.375 8.475 13.375 8.375C13.375 8.275 13.3375 8.1875 13.2625 8.1125C13.1875 8.0375 13.1 8 13 8H11.5V3.5H7V2C7 1.9 6.9625 1.8125 6.8875 1.7375C6.8125 1.6625 6.725 1.625 6.625 1.625C6.525 1.625 6.4375 1.6625 6.3625 1.7375C6.2875 1.8125 6.25 1.9 6.25 2V3.5H1.75V5.15C2.425 5.4 2.96875 5.81875 3.38125 6.40625C3.79375 6.99375 4 7.65 4 8.375C4 9.0875 3.79375 9.7375 3.38125 10.325C2.96875 10.9125 2.425 11.3375 1.75 11.6V13.25Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Solutions sur-mesure
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Pour nous, chaque projet est unique. C&apos;est pourquoi nous vous
              proposons des solutions personnalisées et adaptées à vos objectifs
              spécifiques, qu&apos;il s&apos;agisse de design, de développement
              ou de stratégie digitale.
            </p>
          </div>

          {/* Carte 2 - Une collaboration constante */}
          <div className="rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83366 15.5C4.19269 15.0625 2.838 14.0656 1.7696 12.5094C0.701194 10.9531 0.166992 9.225 0.166992 7.325V2.75L5.83366 0.5L11.5003 2.75V7.325C11.5003 9.225 10.9661 10.9531 9.89772 12.5094C8.82932 14.0656 7.47463 15.0625 5.83366 15.5ZM5.83366 13.925C6.9788 13.55 7.93505 12.8094 8.70241 11.7031C9.46977 10.5969 9.91838 9.3625 10.0482 8H5.83366V2.09375L1.58366 3.78125V7.6625C1.58366 7.75 1.59546 7.8625 1.61908 8H5.83366V13.925Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Une collaboration constante
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              La communication est la clé. Vous êtes impliqués à chaque étape,
              du brainstorming à la livraison. Pour garantir que vos idées et
              besoins restent alignés avec vos attentes.
            </p>
          </div>

          {/* Carte 3 - Une approche de A à Z */}
          <div className="rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9165 12C9.2415 12 7.82275 11.4188 6.66025 10.2563C5.49775 9.09375 4.9165 7.675 4.9165 6C4.9165 4.3375 5.49775 2.92188 6.66025 1.75313C7.82275 0.584375 9.2415 0 10.9165 0C12.579 0 13.9946 0.584375 15.1634 1.75313C16.3321 2.92188 16.9165 4.3375 16.9165 6C16.9165 7.675 16.3321 9.09375 15.1634 10.2563C13.9946 11.4188 12.579 12 10.9165 12ZM10.9165 10.5C12.1665 10.5 13.229 10.0625 14.104 9.1875C14.979 8.3125 15.4165 7.25 15.4165 6C15.4165 4.75 14.979 3.6875 14.104 2.8125C13.229 1.9375 12.1665 1.5 10.9165 1.5C9.6665 1.5 8.604 1.9375 7.729 2.8125C6.854 3.6875 6.4165 4.75 6.4165 6C6.4165 7.25 6.854 8.3125 7.729 9.1875C8.604 10.0625 9.6665 10.5 10.9165 10.5ZM12.6228 8.79375L13.6915 7.725L11.6665 5.7V3H10.1665V6.31875L12.6228 8.79375ZM1.1665 3.75V2.25H4.1665V3.75H1.1665ZM0.416504 6.75V5.25H4.1665V6.75H0.416504ZM1.1665 9.75V8.25H4.1665V9.75H1.1665Z"
                    fill="#E8EAED"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Une approche de A à Z
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Nous nous occupons de tout : brainstorming, conception,
              développement, intégration et même la maintenance. Vous
              n&apos;avez qu&apos;à nous faire part de votre vision, et nous
              nous chargeons de la transformer en réalité.
            </p>
          </div>

          {/* Carte 4 - Une expertise polyvalente */}
          <div className="rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.45 15.875L5.025 13.475L2.325 12.875L2.5875 10.1L0.75 8L2.5875 5.9L2.325 3.125L5.025 2.525L6.45 0.125L9 1.2125L11.55 0.125L12.975 2.525L15.675 3.125L15.4125 5.9L17.25 8L15.4125 10.1L15.675 12.875L12.975 13.475L11.55 15.875L9 14.7875L6.45 15.875ZM7.0875 13.9625L9 13.1375L10.95 13.9625L12 12.1625L14.0625 11.675L13.875 9.575L15.2625 8L13.875 6.3875L14.0625 4.2875L12 3.8375L10.9125 2.0375L9 2.8625L7.05 2.0375L6 3.8375L3.9375 4.2875L4.125 6.3875L2.7375 8L4.125 9.575L3.9375 11.7125L6 12.1625L7.0875 13.9625ZM8.2125 10.6625L12.45 6.425L11.4 5.3375L8.2125 8.525L6.6 6.95L5.55 8L8.2125 10.6625Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Une expertise polyvalente
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Notre équipe réunit des experts en design, développement, et
              stratégie digitale. Cette polyvalence nous permet de vous assurer
              que votre projet reste performant, complet, évolutif et à jour
              dans les tendances.
            </p>
          </div>

          {/* Carte 5 - Support et suivi post-livraison */}
          <div className="rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.3335 16.25V14.75H12.5835V14H9.5835V8H12.5835V7.25C12.5835 5.8 12.071 4.5625 11.046 3.5375C10.021 2.5125 8.7835 2 7.3335 2C5.8835 2 4.646 2.5125 3.621 3.5375C2.596 4.5625 2.0835 5.8 2.0835 7.25V8H5.0835V14H2.0835C1.671 14 1.31787 13.8531 1.02412 13.5594C0.730371 13.2656 0.583496 12.9125 0.583496 12.5V7.25C0.583496 6.325 0.761621 5.45312 1.11787 4.63438C1.47412 3.81563 1.9585 3.1 2.571 2.4875C3.1835 1.875 3.89912 1.39063 4.71787 1.03438C5.53662 0.678125 6.4085 0.5 7.3335 0.5C8.2585 0.5 9.13037 0.678125 9.94912 1.03438C10.7679 1.39063 11.4835 1.875 12.096 2.4875C12.7085 3.1 13.1929 3.81563 13.5491 4.63438C13.9054 5.45312 14.0835 6.325 14.0835 7.25V14.75C14.0835 15.1625 13.9366 15.5156 13.6429 15.8094C13.3491 16.1031 12.996 16.25 12.5835 16.25H7.3335ZM2.0835 12.5H3.5835V9.5H2.0835V12.5ZM11.0835 12.5H12.5835V9.5H11.0835V12.5Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Support et suivi post-livraison
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Notre engagement ne s&apos;arrête pas à la livraison du projet.
              Nous restons disponibles pour vous assurer un support continu, des
              mises à jour régulières et des améliorations selon vos besoins.
            </p>
          </div>

          {/* Carte 6 - Garantie de qualité et de performance */}
          <div className="rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.579 12.65L9.46025 8H6.46025L7.004 3.74375L3.53525 8.75H6.1415L5.579 12.65ZM3.6665 15.5L4.4165 10.25H0.666504L7.4165 0.5H8.9165L8.1665 6.5H12.6665L5.1665 15.5H3.6665Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Garantie de qualité et de performance
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Nous nous engageons à délivrer des produits de haute qualité,
              testés et optimisés pour offrir les meilleures performances, que
              ce soit pour l&apos;expérience utilisateur ou pour les solutions
              techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
