import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface Property {
  slug: string;
  name: string;
  shortDescription: string;
  location: string;
  area: string;
  type: string;
  price: string;
  heroImage: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute left-5 top-5 rounded-full bg-[#C8A24F] px-4 py-2 text-sm font-semibold text-white shadow-lg">
  {property.type}
</div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-8">

        <div>

          <h2 className="font-heading text-3xl text-[#0A2342]">
            {property.name}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-[#C8A24F]">
            <MapPin size={18} />
            <span>{property.location}</span>
          </div>

          <p className="mt-5 leading-8 text-gray-600">
            {property.shortDescription}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-5 rounded-2xl bg-[#F8F8F8] p-5">

          <div>
            <p className="text-sm uppercase text-gray-500">
              Area
            </p>

            <h4 className="mt-2 text-xl font-semibold">
              {property.area}
            </h4>
          </div>

          <div>
            <p className="text-sm uppercase text-gray-500">
              Type
            </p>

            <h4 className="mt-2 text-xl font-semibold">
              {property.type}
            </h4>
          </div>

        </div>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase text-gray-500">
              Starting Price
            </p>

            <h3 className="text-3xl font-bold text-[#C8A24F]">
              {property.price}
            </h3>

          </div>

          <span className="flex items-center gap-2 font-semibold text-[#0A2342] transition-all duration-300 group-hover:gap-4">

            View Details

            <ArrowRight size={18} />

          </span>

        </div>

      </div>
    </Link>
  );
}