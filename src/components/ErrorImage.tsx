import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  name: string;
  className?: string;
};

export function ErrorImage({ src, alt, name, className }: Props) {
  const [hasError, setHasError] = useState(false);
  const fallbackUrl = "https://via.placeholder.com/300x200/FFDDDD/000000?text=🐾";

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <img
        src={hasError ? fallbackUrl : src}
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover rounded-xl"
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm font-semibold text-center p-2 rounded-xl">
          {name} hade ingen bra fotodag och ville inte vara med på bild 💅🏻
        </div>
      )}
    </div>
  );
}

