import React from "react";
import LeftSideBar from "../../../../components/homepage/news/LeftSideBar";
import RightSideBar from "../../../../components/homepage/news/RightSideBar";
import NewsCard from "../../../../components/homepage/news/NewsCard";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
}

async function getNewsbyCategoryId(categoryId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );
  const data = await res.json();
  return data;
}

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

      <div className="bg-pink-300 col-span-6">
        All news
        {news.data.map((n, ind) => (
          <NewsCard key={n._id} news={n} />
        ))}
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
