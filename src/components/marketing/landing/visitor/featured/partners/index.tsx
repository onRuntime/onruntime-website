import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <div className="mt-12">
      <p className="text-center">Ils nous accompagnent</p>

      <div className="mt-8 overflow-hidden">
        <div className="flex items-center justify-center space-x-16">
          <Image
            src="/static/images/partners/frenchtechnormandy.png"
            alt="French Tech Normandy"
            width={100}
            height={100}
            className="h-20 w-20 object-contain grayscale transition-all duration-300 hover:grayscale-0"
          />

          <Image
            src="/static/images/partners/needforschool.png"
            alt="Need For School"
            width={100}
            height={100}
            className="h-20 w-20 object-contain grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;