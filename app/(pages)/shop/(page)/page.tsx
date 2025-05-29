import React from 'react';
import { Metadata } from 'next';
import { aboutImage, aboutImage2, aboutImage3, burnaImage, asapImage, odumoduImage, asapImage2, plain2Image, plainImage, orange2Image, yellowImage } from '@/utils';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shop | Blaq Samurai',
  description: 'Explore our exclusive collection of premium clothing.',
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src={aboutImage2}
            alt="Shop Hero"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold">Featured Products</h1>
          </div>
        </div>

        {/* Products Grid */}
        <div className="absolute inset-0 bg-grain mix-blend-multiply" />
        <section className=" relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {[
              { image: yellowImage, name: "Classic Yellow Tee", price: "$99" },
              { image: asapImage, name: "Premium ASAP Tee", price: "$149" },
              { image: odumoduImage, name: "Big Kala", price: "$299" },
              { image: orange2Image, name: "The Orange Tee", price: "$129" },
              { image: aboutImage3, name: "Limited Edition", price: "$199" },
              { image: burnaImage, name: "Custom Odogwu Tee", price: "$249" },
            ].map((product, index) => (
              <div key={index} className="group relative">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


// import React from 'react';
// import { Metadata } from 'next';
// // import { shopImage } from '@/utils';
// import Image from 'next/image';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// // import ShopLayout from '@/components/ShopLayout';
// // import ShopProducts from '@/components/ShopProducts';
// // import ShopCollections from '@/components/ShopCollections';
// // import ShopMarquee from '@/components/ShopMarquee';
// // import ShopAboutSection from '@/components/ShopAboutSection';
// // import ShopNewArrivals from '@/components/ShopNewArrivals';
// // import ShopHero from '@/components/ShopHero';
// // import ShopNewsletter from '@/components/ShopNewsletter';


// export const metadata: Metadata = {
//   title: 'Shop',
//   description: 'Explore our exclusive collection of products.',
// };
// export default function ShopPage() {
//     return (
//         <>
//         <Navbar />
//         <div className="h-screen flex flex-col relative overflow-x-hidden">
//             {/* Primary background */}
//             <div className="h-[32vh] bg-primary absolute top-0 w-full" />
    
//             {/* Text section - positioned between background and image */}
//             <div className="absolute w-full flex justify-center top-[29%] md:top-[28%] lg:top-[28%] xl:top-[20%] 2xl:top-[24%] z-10">
//             <div className="flex flex-row w-full max-w-7xl justify-between items-center">
//                 <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
//                 BLAQ
//                 </h1>
//                 <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
//                 SAMURAI
//                 </h1>
//             </div>
//             </div>
    
//             {/* Image section */}
//             <div className="absolute bottom-0 h-[68vh] w-full">
//             <div className="absolute inset-0 bg-black opacity-30" />
//             {/* Replace with your shop image */}
//             {/* <Image
//                 src="/path/to/your/shop-image.jpg"
//                 alt="Shop Image"
//                 className="h-full w-full object-cover object-center"
//                 priority
//             /> */}
//             </div>
//         </div>
//         <Footer />
//         </>
//     );
// }