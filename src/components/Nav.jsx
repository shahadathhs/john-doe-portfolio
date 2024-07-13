import logo from "@/assets/Logo (1).png";
import Image from "next/image";
import profile from "@/assets/Profile Pic.png";
import create from "@/assets/nav/Create.png";
import message from "@/assets/nav/Message.png";
import notification from "@/assets/nav/Notification.png";
import search from "@/assets/nav/Search.png";
import option from "@/assets/nav/Options.png";

export default function Nav() {
  const navLinks = (
    <>
      <p>
        <Image src={search} alt="nav img" w={100} h={100} />
      </p>
      <p>
        <Image src={create} alt="nav img" w={200} h={200} />
      </p>

      <p>
        <Image src={message} alt="nav img" w={100} h={100} />
      </p>
      <p>
        <Image src={notification} alt="nav img" w={100} h={100} />
      </p>
      <p>
        <Image src={option} alt="nav img" w={100} h={100} />
      </p>
    </>
  );

  return (
    <div className="navbar container mx-auto px-4 md:px-16 text-white">
      <div className="navbar-start">
        <Image src={logo} alt="logo img" w={100} h={100} />
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <div className="menu menu-horizontal px-4 gap-2">{navLinks}</div>
        </div>
        <Image src={profile} alt="profile img" w={100} h={100} />

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 p-2 shadow space-y-2"
          >
            {navLinks}
          </div>
        </div>
      </div>
    </div>
  );
}
