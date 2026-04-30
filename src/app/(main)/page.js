// (main)/page.js

import LeftSideBar from "../../components/homepage/news/LeftSideBar";
import NewsCard from "../../components/homepage/news/NewsCard";
import RightSideBar from "../../components/homepage/news/RightSideBar";
import { getCategories, getNewsbyCategoryId } from "../../lib/data";

const default_category_id = "08";
export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsbyCategoryId(default_category_id);

  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto">
      <div className="col-span-3">
        <strong className="block mb-6">All categories</strong>
        <LeftSideBar categories={categories} activeId={default_category_id} />
      </div>

      <div className="col-span-6">
        <strong className="mb-5 block">Dragon News</strong>
        {news.data.map((n, ind) => (
          <NewsCard key={n._id} news={n} />
        ))}
      </div>

      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}
