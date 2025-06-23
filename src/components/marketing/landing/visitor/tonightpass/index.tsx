import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Tonightpass: React.FC = () => {
    return(
<div className="flex flex-col items-center h-auto min-h-screen bg-black pt-16">
   <Link href="/projects/tonightpass">
   <button className="bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-100">
    Notre success story 🏆
   </button>
   </Link>
   <h2 className="text-white font-semibold text-center mt-8 text-4xl">Tonight Pass, <br /> la billetterie 2.0</h2>
   <p className="text-white text-center mt-8">Réservez votre entrée, entrez rapidement, <br />restez en contact avec les gens.</p>
   <strong className="text-white text-center mt-8">En quelques clics depuis votre canapé 🛋️</strong>
   <Link href="/projects/tonightpass">
   <button className="mt-8 bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-100">
    En savoir plus
   </button>
   </Link>
   <div className="w-full max-w-screen-lg mt-8 mb-8">
    <Image
      src="/static/images/projects/tonightpass/showcase.jpg"
      alt="Showcase Tonight Pass"
      width={1000}
      height={800}
      className="w-full h-auto rounded-md"
    />
  </div>
</div>
    )
};

export default Tonightpass;