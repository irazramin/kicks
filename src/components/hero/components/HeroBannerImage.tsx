interface HeroBannerImageProps {
  imageUrl: string;
}

export function HeroBannerImage({ imageUrl }: HeroBannerImageProps) {
  return (
    <div className="absolute inset-0 md:rounded-[64px] rounded-[24px] bg-gray-300">
      <div
        className="absolute inset-0 bg-gray-300"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.3s ease-in-out",
        }}
        role="img"
        aria-label="Hero product visual"
      />
    </div>
  );
}
