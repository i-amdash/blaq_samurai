import Image from "next/image";
import React from "react";

type CollectionCardProps = {
  href: string;
  imageSrc: any;
  altText?: string;
};

const CollectionCard = ({ href, imageSrc, altText = "collection image" }: CollectionCardProps) => {
  return (
    <a href={href} className="w-64 cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
      <div className="h-[25vh] overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>
    </a>
  );
};

export default CollectionCard;