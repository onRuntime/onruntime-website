import React from "react";
import Testimonial from "../../testimonial";

const LucasTestimonial: React.FC = () => {
  return (
    <div className="md:px-4">
      {/* Témoignage Lucas Bodin */}
      <Testimonial
        quote="onRuntime Studio c'est bien plus qu'un simple studio de créateurs. C'est un espace où l'innovation, la collaboration, et la passion se lient pour donner vie à des projets uniques. Nous croyons au pouvoir de l'intelligence collective, où chaque créateur, apporte sa vision afin qu'ensemble, nous transformions des idées en réalités."
        author="Lucas Bodin"
        role="Head of Design"
        company="onRuntime Studio"
        imageSrc="/static/images/members/lucas-bodin.jpg"
      />
    </div>
  );
};

export default LucasTestimonial;
