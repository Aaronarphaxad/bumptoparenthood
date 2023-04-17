import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

function Review({ name, stars, review, date }) {
  const ratings = [];

  for (let i = 0; i < stars; i++) {
    ratings.push(
      <StarIcon key={i} width={15} height={15} className="text-yellow-500" />
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 bg-transparent review-card">
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-lg font-semibold dark:text-gray-800">{name}</h3>
        <div className="flex ">
          
          {ratings}
        </div>

        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <p className="text-gray-800 text-base text-center text-sm">{review}</p>
    </div>
  );
}

export default Review;
