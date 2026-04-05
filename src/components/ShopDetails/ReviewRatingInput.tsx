"use client";
import React, { useState } from "react";

import { STARS } from "@/constants";


export const ReviewRatingInput = () => {
  const [activeStar, setActiveStar] = useState(1);


  return (
    <div className="flex items-center gap-1">
      {STARS.map((star, key) => (
        <span
          key={key}
          onClick={() => setActiveStar(star.id)}
          className={
            `cursor-pointer ${star.id <= activeStar ? 'text-[#FBB040]' : 'text-gray-5'} `}>
          <svg
            className="fill-current"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
              fill=""
            />
          </svg>
        </span>
      ))}

    </div>
  );
};

