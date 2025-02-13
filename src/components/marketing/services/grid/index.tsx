import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesGrid: React.FC = () => {
  const data = [
    {
      name: "Digital",
      slogan: "Adaptez les designs aux usages et concrétisez vos idées.",
      description: "De l’idée à la conception graphique, le design digital est la discipline historique de notre agence. Notre approche s’ancre dans une compréhension profonde des usages actuels du digital. Grâce à l’UX et à l’UI design, nous concevons des interfaces qui allient fonctionnalité et esthétique, sans jamais compromettre l’une pour l’autre. Chaque produit est designé pour s’approprier la direction artistique définie ensemble tout en offrant la navigation la plus intuitive.",
      target: "UIX / Web design / Développement",
      imageUrl: "/static/images/onruntime-team.jpg",
      url: Routes.services.digital
    },
    {
      name: "Branding",
      slogan: "Faites vous rêver avec une nouvelle identité visuelle.",
      description: "Le branding est la personnalité de votre marque. Nous rafraîchissons ou donnons corps à une vision en la développant dans une plateforme, une identité verbale et une identité visuelle. Du naming à l’illustration, chaque élément est conçu pour refléter votre culture, atteindre votre audience et raconter votre histoire. L’identité de marque et les règles qu’elle suit sont formalisées dans un brandbook, outil essentiel pour assurer l’autonomie de vos équipes et la constance de vos prises de paroles.",
      target: "Brandbook / Logo & Direction artistique",
      imageUrl: "/static/images/onruntime-team.jpg",
      url: Routes.services.branding
    },
    {
      name: "Production",
      slogan: "Souriez, vous êtes filmés !",
      description: "La production de contenu de qualité est essentielle pour véhiculer efficacement votre message et captiver votre audience. Nos services de production couvrent la photographie, la vidéo et la création sonore, garantissant des résultats professionnels qui renforcent l’identité de votre marque. Chaque projet est traité avec soin, en respectant vos besoins spécifiques et en apportant une touche créative unique.",
      target: "Shooting photo / Tournage vidéo",
      imageUrl: "/static/images/onruntime-team.jpg",
      url: Routes.services.production
    }
  ];

  return (
    <section className="conventionnal-layout mt-12 flex flex-col">
      {data.map((item, index) => {
        const isLeftSided = index % 2 === 0;

        return (
          <div key={index} className={cn("min-h-56 flex", isLeftSided ? "flex-row" : "flex-row-reverse")}>
            <div
              className={cn("flex-1 my-20 flex flex-col justify-between", isLeftSided ? "items-start" : "items-end text-end")}
            >
              <div className="max-w-[90%]">
                <Link href={Routes.services.digital}>
                  <h2 className="text-4xl font-semibold">{item.name}</h2>
                </Link>

                <p className="text-foreground font-semibold">{item.slogan}</p>

                <p className="mt-3">{item.description}</p>
              </div>

              <p className="mt-5">{item.target}</p>
            </div>
            
            <div
              className={cn("max-w-80 overflow-hidden", isLeftSided ? "rounded-tl-lg" : "rounded-tr-lg")}
            >
              <Image className="object-cover h-full" src={item.imageUrl} alt={item.name} width={1024} height={510} />
            </div>
          </div>
        )})
      }
    </section>
  );
};

export default ServicesGrid;
