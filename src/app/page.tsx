import { Banner } from "@/components/banner";
import { ContainerScroll } from "@/components/container-scroll-animation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-center mx-auto items-center justify-center flex flex-col relative  ">
      <Banner />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Your Store, Your Vision!
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                - Done by Experts
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-contain h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
