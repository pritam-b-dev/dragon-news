import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: " Major Event Unfolds in the City.  ",
  },
  {
    _id: "2",
    title: "New Policy Announced by the Government.  ",
  },
  {
    _id: "3",
    title: "Sports Team Wins Championship.  ",
  },
];

const BreakingNews = () => {
  return (
    <div className="p-4 bg-gray-200 mt-5 container mx-auto">
      <div className="flex gap-4 container mx-auto">
        <p className="px-4 py-2 bg-red-500 text-white">Latest</p>
        <Marquee pauseOnHover={true}>
          <div>
            {news.map((item) => (
              <span key={item._id} className="mr-2">
                {item.title}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
