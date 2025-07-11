import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Partners from "./partners";
import { OnRuntimeWordMark } from "@/logos/components";
import Balancer from "react-wrap-balancer";
import Routes from "@/constants/routes";
import Link from "next/link";

const Featured: React.FC = () => {
  return (
    <header className="bg-gradient-to-t from-onruntime-blue/10 to-transparent">
      <div className="px-4 md:px-8 py-16 flex flex-col justify-center items-center max-w-5xl mx-auto">
        <div className="relative max-w-xl flex flex-col items-center gap-6">
          <h1 className="font-semibold text-5xl md:text-6xl text-foreground text-center">
            <Balancer>
              La machine à rêves,{" "}
              <span className="text-onruntime-blue inline">
                onRuntime Studio
              </span>
              .
            </Balancer>
          </h1>

          <h2 className="text-center text-muted-foreground">
            <Balancer>
              Une communauté dynamique de créateurs : développeurs, designers et
              artistes de divers horizons, unis par l&apos;innovation et la
              créativité.
            </Balancer>
          </h2>

          <div className="flex gap-3">
            <Link href={Routes.contact}>
              <Button>Réserver une prestation</Button>
            </Link>

            <Link href={Routes.projects}>
              <Button variant={"outline"}>Voir notre travail</Button>
            </Link>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <div className="relative mt-12 rounded-sm">
          {/* SVG décoratif gauche - visible uniquement desktop */}
          <div className="absolute -top-20 left-20 z-[-10] pointer-events-none hidden md:block">
            <svg
              width="150"
              height="150"
              viewBox="0 0 171 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-15deg]"
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
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

          {/* SVG décoratif droite - visible uniquement desktop */}
          <div className="absolute -top-20 right-20 z-[-10] pointer-events-none hidden md:block">
            <svg
              width="150"
              height="150"
              viewBox="0 0 174 174"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-15deg]"
            >
              <g filter="url(#filter0_d_2071_267)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M84.9995 42.6393C74.4663 38.1378 62.2783 43.0274 57.7767 53.5605L42.6395 88.9801C38.1379 99.5133 43.0275 111.701 53.5607 116.203L88.9802 131.34C99.5134 135.842 111.701 130.952 116.203 120.419L131.34 84.9994C135.842 74.4662 130.952 62.2781 120.419 57.7765L84.9995 42.6393ZM107.219 76.0239C106 72.9864 102.55 71.5119 99.5123 72.7305L68.0846 85.3386C65.0471 86.5572 63.5726 90.0074 64.7912 93.0449L66.7612 97.9554C67.9798 100.993 71.43 102.467 74.4675 101.249L105.895 88.6407C108.933 87.4222 110.407 83.9719 109.189 80.9345L107.219 76.0239Z"
                  fill="#2294FF"
                />
                <path
                  d="M122.5 52.9087C135.721 58.5595 141.859 73.8586 136.208 87.0803L121.071 122.5C115.42 135.721 100.121 141.858 86.8993 136.208L51.4807 121.071C38.2589 115.421 32.121 100.121 37.7716 86.8992L52.9089 51.4797C58.5596 38.2581 73.8587 32.121 87.0804 37.7715L122.5 52.9087ZM102.305 77.9945C102.175 77.6711 101.807 77.5135 101.483 77.6434L70.0555 90.2515C69.7319 90.3814 69.5749 90.7494 69.7044 91.0732L71.6753 95.984C71.8052 96.3079 72.1722 96.4647 72.496 96.3348L103.925 83.727C104.248 83.5969 104.406 83.229 104.276 82.9054L102.305 77.9945Z"
                  stroke="#F7F7F7"
                  strokeWidth="10.5882"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2071_267"
                  x="0.374512"
                  y="0.37439"
                  width="173.231"
                  height="173.231"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_2071_267"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2071_267"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <Image
            src={"/static/images/onruntime-team.jpg"}
            alt={"Équipe onRuntime Studio"}
            width={1024}
            height={510}
            className="relative z-0 max-h-[510px] object-cover rounded-[15px]"
            priority
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end items-center p-5 md:p-10 gap-5 rounded-b-lg">
            <Image
              className="hidden md:block self-start"
              src={"/static/images/quotes.png"}
              alt={"stylized quote"}
              width={46}
              height={43}
            />

            <p className="hidden md:block text-background leading-5">
              <Balancer>
                À la base, nous sommes passionnés par le développement web et le
                développement en général depuis plus de 6 ans. Nous sommes très
                intéressés par les nouvelles technologies et le monde de la
                création (design, musique, etc.). À partir de là nous avons créé
                un Studio et une communauté autour de celui-ci, nous adorons
                nous retrouver autour d&apos;une tasse de café ☕️ pour discuter,
                jouer et surtout créer des projets.
              </Balancer>
            </p>

            <OnRuntimeWordMark
              fill="white"
              height={24}
              className="self-end h-6"
            />
          </div>
        </div>

        <Partners />
      </div>
    </header>
  );
};

export default Featured;
