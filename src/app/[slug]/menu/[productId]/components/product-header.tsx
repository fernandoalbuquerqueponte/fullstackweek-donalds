"use client";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <div>
      <div className="relative h-[300px] w-full">
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4 z-50 rounded-full"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Image
          src={product.imageUrl}
          alt={product.name}
          className="object-cover"
          fill
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4 z-50 rounded-full"
        >
          <ScrollTextIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;
