import React from "react";
import IndexController from "../../controller";
import Image from "next/image";

const Page = async () => {
  const photos = await IndexController.Checkphotos();
  console.log("sdfg", photos); // Fetch photos from the controller

  return (
    <div className="flex gap-3 items-center flex-wrap px-4 py-10">
      {photos.map((item: any, index: number) => (
        <div key={index}>
          <Image
            src={item?.urls?.small}
            alt={item?.alt_description || "Image"} // Fallback alt text
            width={1920}
            height={1080}
            className="h-80 w-[100vw] md:w-96 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
