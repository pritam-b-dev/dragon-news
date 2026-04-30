import React from "react";
import { getNewsDetailsById } from "../../../../lib/data";
import Image from "next/image";
import RightSideBar from "../../../../components/homepage/news/RightSideBar";
import Link from "next/link";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  console.log(news);
  return (
    <div className="grid grid-cols-12 gap-6 container mx-auto my-8 ">
      <div className="card shadow-sm w-200 col-span-9 mx-auto">
        <div className="card-body mx-auto">
          <Image
            src={news.image_url}
            alt="image"
            width={500}
            height={500}
            className="w-full mx-auto"
          ></Image>
          <h1 className="font-bold text-3xl">{news.title}</h1>
          <p>{news.details}</p>
          <Link
            href={`/category/${news.category_id}`}
            className="cursor-pointer bg-red-300 px-4 py-2 max-w-70 text-center mt-10"
          >
            All news in this Category
          </Link>
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
