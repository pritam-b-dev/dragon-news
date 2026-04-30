import React from "react";
import LeftSideBar from "../../../../components/homepage/news/LeftSideBar";
import RightSideBar from "../../../../components/homepage/news/RightSideBar";
import NewsCard from "../../../../components/homepage/news/NewsCard";
import { getCategories, getNewsbyCategoryId } from "../../../../lib/data";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsbyCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto">
      <div className=" col-span-3">
        <strong className="block mb-6">All categories</strong>
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      <div className=" col-span-6 p-5">
        <strong className="mb-5 block">Dragon News</strong>
        {news.data.length === 0 ? (
          <p>No news found!</p>
        ) : (
          news.data.map((n, ind) => <NewsCard key={n._id} news={n} />)
        )}
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
