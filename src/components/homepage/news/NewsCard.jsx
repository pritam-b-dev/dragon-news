import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm mb-8">
      <div className="card-body">
        <div className="flex gap-5 bg-gray-200 p-2">
          <Image
            src={news.author.img}
            alt="author image"
            width={50}
            height={50}
          />
          <div>
            <p>{news.author.name}</p>
            <p>{news.author.published_date}</p>
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <figure>
          {" "}
          <Image
            src={news.thumbnail_url}
            alt="thumbnail photo"
            width={500}
            height={500}
            className="w-50 h-50"
          />
        </figure>
        <p className="truncate">{news.details}</p>
        <div className=" flex justify-between">
          <div>
            <span className="text-red-300">Rating</span>{" "}
            <span className="font-bold"> {news.rating.number}</span>
          </div>
          <div>
            <Link href={`/news/${news._id}`}>
              <button className="btn">Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
