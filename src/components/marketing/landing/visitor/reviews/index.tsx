import React from 'react';
import Image from 'next/image';

// Données extraites pour éviter la répétition
const reviewsData = [
 {
id: 1,
text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
author: "Cécile Pislor",
role: "CEO @ DroitAuCoeurCoaching",
avatar: "/favicon-32x32.png"
 },
 {
id: 2,
text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
author: "Cécile Pislor",
role: "CEO @ DroitAuCoeurCoaching",
avatar: "/favicon-32x32.png"
 },
 {
id: 3,
text: "Composé de talents variés, allant de développeurs à des designers passionnés. Chacun apporte sa touche unique à nos projets. Ensemble, nous formons un collectif où l'innovation est au cœur de tout ce que nous entreprenons.",
author: "Cécile Pislor",
role: "CEO @ DroitAuCoeurCoaching",
avatar: "/favicon-32x32.png"
 }
];

const Reviews: React.FC = () => {
return (
<section className="pt-[15em] py-16 px-4 relative min-h-screen">
<div className="max-w-7xl mx-auto relative">

{/* Titre sticky qui reste derrière les commentaires */}
<div className="sticky top-20 text-center z-0 mb-16">
<h2 className="text-black font-semibold text-4xl mb-4 pointer-events-none">
 Ce que nos experts disent de nous.
</h2>
<p className="text-gray-600 text-lg pointer-events-none">
 On ne les a pas du tout forcés à parler.
</p>
</div>

{/* Grille des avis qui défile devant le titre */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
{reviewsData.map((review, index) => {
const getTransform = (index: number) => {
switch (index) {
case 0: return 'translate-y-0';
case 1: return 'translate-y-[30rem]';
case 2: return 'translate-y-32';
default: return 'translate-y-0';
 }
 };

return (
<article
key={review.id}
className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ${getTransform(index)} z-10 relative`}
>
<blockquote className="mb-6">
<p className="text-gray-700 italic leading-relaxed">
 "{review.text}"
</p>
</blockquote>

<div className="flex items-center gap-4">
<Image
src={review.avatar}
alt={`Photo de ${review.author}`}
width={60}
height={60}
className="rounded-full"
/>
<div>
<h3 className="font-semibold text-lg text-gray-900">
{review.author}
</h3>
<p className="text-sm text-gray-600">
{review.role}
</p>
</div>
</div>
</article>
 );
 })}
</div>

{/* Spacer pour que les cartes aient assez d'espace ET pour révéler le titre à la fin */}
<div className="h-[40rem]"></div>

</div>

{/* Témoignage Lucas Bodin */}
<div className="max-w-7xl mx-auto px-4 py-16">
<div className='flex justify-center items-center gap-8 max-w-5xl mx-auto'>
<Image
src="/static/images/members/lucas-bodin.jpg"
alt="Photo Lucas"
width={150}
height={150}
className="rounded-lg rotate-[-15deg] shadow-lg bg-white px-2 pt-2 pb-4 transition-all duration-300 ease-in-out hover:rotate-0 hover:scale-105"
/>
<div className='flex-1'>
<p className='text-2xl md:text-3xl font-medium text-black leading-relaxed mb-6'>
"onRuntime Studio c'est bien plus qu'un simple studio de créateurs. C'est un espace où l'innovation, la collaboration, et la passion se lient pour donner vie à des projets uniques. Nous croyons au pouvoir de l'intelligence collective, où chaque créateur, apporte sa vision afin qu'ensemble, nous transformions des idées en réalités."
</p>
<p className='text-lg text-gray-600'>
Lucas Bodin, Head of Design @ <strong className='text-black'>onRuntime Studio</strong>
</p>
</div>
</div>
</div>
</section>
 );
 };

export default Reviews;