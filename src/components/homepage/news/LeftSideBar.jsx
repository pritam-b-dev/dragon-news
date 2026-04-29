import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <ul>
      {categories.data.news_category.map((category) => (
        <li
          key={category.category_id}
          className={`${activeId === category.category_id && "bg-slate-200"} text-center`}
        >
          <Link
            href={`/category/${category.category_id}`}
            className="mb-4 block p-2 bg-slate-300"
          >
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LeftSideBar;
