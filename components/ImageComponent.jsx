import Image from "next/image";

export default function AppBgImg({ bgCover }) {
  return (
    <Image
      src={bgCover}
      placeholder="blur"
      alt="background Image"
      size="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
        height: "85vh",
        position: "absolute",
        width: "100vw",
      }}
    />
  );
}
