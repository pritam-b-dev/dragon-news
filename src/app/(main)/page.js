import LeftSideBar from "../../components/homepage/news/LeftSideBar";
import RightSideBar from "../../components/homepage/news/RightSideBar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto">
      <div className=" col-span-3">
        <strong className="block mb-6">All categories</strong>
        <LeftSideBar categories={categories} activeId={null} />
      </div>

      <div className="bg-pink-300 col-span-6">All news</div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}
