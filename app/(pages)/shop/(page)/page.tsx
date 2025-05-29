import React from 'react';
import { Metadata } from 'next';
// import { shopImage } from '@/utils';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import ShopLayout from '@/components/ShopLayout';
// import ShopProducts from '@/components/ShopProducts';
// import ShopCollections from '@/components/ShopCollections';
// import ShopMarquee from '@/components/ShopMarquee';
// import ShopAboutSection from '@/components/ShopAboutSection';
// import ShopNewArrivals from '@/components/ShopNewArrivals';
// import ShopHero from '@/components/ShopHero';
// import ShopNewsletter from '@/components/ShopNewsletter';


export const metadata: Metadata = {
  title: 'Shop',
  description: 'Explore our exclusive collection of products.',
};
export default function ShopPage() {
    return (
        <>
        <Navbar />
        <div className="h-screen flex flex-col relative overflow-x-hidden">
            {/* Primary background */}
            <div className="h-[32vh] bg-primary absolute top-0 w-full" />
    
            {/* Text section - positioned between background and image */}
            <div className="absolute w-full flex justify-center top-[29%] md:top-[28%] lg:top-[28%] xl:top-[20%] 2xl:top-[24%] z-10">
            <div className="flex flex-row w-full max-w-7xl justify-between items-center">
                <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                BLAQ
                </h1>
                <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                SAMURAI
                </h1>
            </div>
            </div>
    
            {/* Image section */}
            <div className="absolute bottom-0 h-[68vh] w-full">
            <div className="absolute inset-0 bg-black opacity-30" />
            {/* Replace with your shop image */}
            {/* <Image
                src="/path/to/your/shop-image.jpg"
                alt="Shop Image"
                className="h-full w-full object-cover object-center"
                priority
            /> */}
            </div>
        </div>
        <Footer />
        </>
    );
}