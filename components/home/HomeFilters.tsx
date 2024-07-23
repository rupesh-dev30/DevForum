"use client";

import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";
import { SetStateAction, useState } from "react";

export default function HomeFilters() {
  const [active, setActive] = useState("newest");

  function handleActive(e: SetStateAction<string>) {
    setActive(e);
  }

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {
            handleActive(item.value);
          }}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 dark:bg-dark-300"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}