import profileBG from "@/assets/Profile Background.png";
import Image from "next/image";
import profile from "@/assets/Profile Pic (1).png";
import profileS from "@/assets/Profile Pic (2).png";
import { HiPhotograph } from "react-icons/hi";
import { FaGamepad } from "react-icons/fa";
import p1 from "@/assets/photo/Rectangle 1.png";
import p2 from "@/assets/photo/Rectangle 2 (1).png";
import p3 from "@/assets/photo/Rectangle 3 (5).png";
import p4 from "@/assets/photo/Rectangle 4.png";
import v1 from "@/assets/video/Video.png";
import v2 from "@/assets/video/Video (1).png";
import v3 from "@/assets/video/Video (2).png";
import v4 from "@/assets/video/Video (3).png";
import v5 from "@/assets/video/Rectangle 5 (4).png";
import Blog from "./Blog";

export default function Profile() {
  return (
    <div>
      {/* background banner */}
      <div className="w-full h-[300px] relative">
        <Image
          src={profileBG}
          alt="profile background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {/* profile */}
      <div className="container mx-auto h-[120px] bg-base-200 ">
        <div className="container mx-auto px-4 md:px-16 absolute h-[120px] bg-base-200">
          <div className="flex justify-center gap-3 items-end w-full md:w-3/5 relative py-4 -top-16 md:-top-16 lg:-top-28">
            <div>
              <Image
                src={profile}
                alt="profile"

                className="hidden md:block"
              />
              <Image
                src={profileS}
                alt="profile"

                className="block md:hidden"
              />
            </div>
            <div className="font-bold">
              <div className="flex justify-between items-center gap-2 lg:gap-10 w-full mt-10 pt-1">
                <div className="flex gap-2 lg:gap-4 items-center">
                  <p className="text-lg lg:text-3xl">John Doe</p>
                  <p className="bg-black h-2 w-2 rounded-full"></p>
                  <p className="text-sm lg:text-lg text-[#76A4CE] ">@johndoe</p>
                </div>
                <button className="px-3 lg:px-6 py-2 rounded-full lg:text-lg lg:font-semibold bg-[#196AA0] text-white hidden xl:block">
                  Follow
                </button>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-sm lg:text-lg">
                    Astrophotographer <HiPhotograph />
                  </p>
                  <p className="flex items-center gap-2 text-sm lg:text-lg">
                    Gamer <FaGamepad />
                  </p>
                </div>
                <button className="px-2 py-1  rounded-full text-sm bg-[#196AA0] text-white block xl:hidden">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog, photo and content */}
      <div className="container mx-auto bg-base-200 flex flex-col md:flex-row-reverse">
        {/* photo & video */}

        <div className="w-full md:w-2/5 p-4 md:p-10 pb-0 lg:py-0 grid grid-cols-2 md:flex md:flex-col gap-4
        lg:-mt-10 xl:-mt-24 z-30">
          {/* photo */}
          <div>
            <p className="text-lg md:text-2xl mb-3 font-bold">Photos</p>
            <div className="grid grid-cols-2 gap-0">
              <div className="relative w-full h-0 pb-[100%]">
                <Image src={p2} alt="photo" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full h-0 pb-[100%]">
                <Image src={p1} alt="photo" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full h-0 pb-[100%]">
                <Image src={p4} alt="photo" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full h-0 pb-[100%]">
                <Image src={p3} alt="photo" layout="fill" objectFit="cover" />
              </div>
            </div>
            <p className="float-end text-[#196AA0] xl:pr-8">More+</p>
          </div>
          {/* video */}
          <div>
            <p className="text-lg md:text-2xl mb-3 font-bold pl-2 md:pl-0">Videos</p>
            <div className="p-2">
              <div className="mb-4">
                <Image src={v1} alt="video" layout="responsive" width={100} height={100} />
              </div>
              <div className="flex justify-between gap-2">
                <Image src={v2} alt="video" width={100} height={100} />
                <Image src={v2} alt="video" width={100} height={100} />
                <Image src={v2} alt="video" width={100} height={100} />
              </div>
              <p className="text-[#196AA0] float-end mt-4">More+</p>
            </div>
          </div>
        </div>
        {/* blogs */}
        <div className="w-full md:w-3/5 p-10 pb-0">
          <Blog />
        </div>
      </div>
    </div>
  );
}
