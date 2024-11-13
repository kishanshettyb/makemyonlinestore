import * as React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { TypewriterEffectSmooth } from "./typeWriterEffect";

export function Banner() {
  const words = [
    {
      text: "Boost",
    },

    {
      text: "Slaes",
      className: "text-blue-500 dark:text-blue-500",
    },
    { text: "Save" },
    {
      text: " Time!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="w-3/5 mt-20">
      <h1 className="text-5xl font-bold leading-none flex flex-col justify-center items-center mb-0">
        Launch Your Shopify Store with Ease
        <TypewriterEffectSmooth words={words} className="mt-1" />
      </h1>
      <p className="text-xl opacity-50 mx-14 mb-7">
        Make My Online Store takes care of everything from design to launch. Get
        your store up and running in just days!
      </p>
      <Button variant="default">
        Start My Store Today
        <MoveRight />
      </Button>
    </div>
  );
}
