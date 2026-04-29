import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <ul>
      {categories.data.news_category.map((category) => (
        <li
          key={category.category_id}
          className={`${activeId === category.category_id && "bg-gray-200"} text-center rounded-lg p-4`}
        >
          <Link href={`/category/${category.category_id}`} className=" block ">
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LeftSideBar;
