import React from "react";
import Balancer from "react-wrap-balancer";

const Hero: React.FC = () => {
  return (
    <section className="conventionnal-layout pt-16">
      <h1 className="hero-title">
        <Balancer>
          <span className="text-onruntime-magenta inline">Votre objectif</span><br />est notre priorité.
        </Balancer>
      </h1>

      <p className="mt-5">
        Donnons vie à votre vision !
        <br/>
        Notre équipe d&apos;experts passionnés conçoit et développe des solutions web sur-mesure qui allient performance technique et expérience utilisateur innovante. Du design créatif au développement robuste, nous transformons vos idées en réalisations web impactantes qui démarquent votre marque dans l&apos;univers numérique.
      </p>
    </section>
  )
};

export default Hero;
