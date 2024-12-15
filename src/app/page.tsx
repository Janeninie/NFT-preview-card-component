"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-veryDarkBlue-main">
      <section className="max-w-72 flex flex-col rounded-lg gap-3 p-5 bg-veryDarkBlue-card">
        <div className="relative hover:bg-white rounded-lg hover:cursor-pointer flex items-center justify-center">
          <Image
            src={"/images/image-equilibrium.jpg"}
            alt="Equilibrium"
            width={200}
            height={200}
            className=" hover:opacity-50 w-auto h-auto rounded-lg "
          />
          <div className="absolute w-full h-full flex items-center justify-center opacity-0 bg-black rounded-lg hover:opacity-50">
            <Image
              src={"/images/icon-view.svg"}
              alt="view"
              width={48}
              height={48}
              className="absolute"
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold hover:cursor-pointer hover:text-primary-cyan">
            Equilibrium #3429
          </h1>
        </div>
        <div>
          <h1 className="text-sm text-primary-softBlue">
            Our Equilibrium collection promotes balance and calm.
          </h1>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-1 items-center">
            <div>
              <Image
                src={"/images/icon-ethereum.svg"}
                alt="ethereum"
                width={9}
                height={11}
                className=" rounded-full"
              />
            </div>
            <h1 className="text-sm text-primary-cyan font-semibold">
              0.041 ETH
            </h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <Image
                src={"/images/icon-clock.svg"}
                alt="clock"
                width={17}
                height={17}
                className=" rounded-full"
              />
            </div>
            <h1 className="text-sm text-primary-softBlue">3 days left</h1>
          </div>
        </div>
        <hr className="border-1 border-veryDarkBlue-line" />
        <div className="flex pb-2 items-center gap-3">
          <div>
            <Image
              src={"/images/image-avatar.png"}
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
          </div>
          <h1 className="text-sm text-primary-softBlue">
            Creation of <span className="text-white">Jules wyvern</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
