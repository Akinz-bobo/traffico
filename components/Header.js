// import motion
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";
// import next/image
import Image from "next/image";

// import next/link
import Link from "next/link";

// import components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

// import icons
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
const Header = ({ headerData, navData }) => {
  // header state
  const [header, setHeader] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);
  // destructure headerData;
  const { logoImgV1, logoImgV2, btnText } = headerData;

  // scroll events
  useEffect(() => {
    //  set the header state according to scroll Y position
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white px-3  rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed  w-full left-0 right-0 mx-auto max-w-[90vh] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* logo v1 */}
      <Link href="/">
        <a>
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            width={header ? 180 : 212}
            height={50}
            alt=""
          />
        </a>
      </Link>
      {/*  desktop: nav & button wrapper - initially hidden on mobile */}
      <div className="hidden lg:flex gap-x-[96px]">
        {/* nav */}
        <Nav navData={navData} header={header} />

        {/* btn */}
        <motion.button whileTap={{ scale: 1.2 }} className="btn">
          <Link href="#contact">{btnText}</Link>
        </motion.button>
      </div>

      {/* nav menu button - hide on large screns */}
      <motion.div
        onClick={() => setNavMobile(!navMobile)}
        whileTap={{ rotate: 180 }}
        className="lg:hidden cursor-pointer"
      >
        {navMobile ? (
          <CgClose className="text-4xl text-accent-hover" />
        ) : (
          <HiMenu className="text-4xl text-accent-hover" />
        )}
      </motion.div>

      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-[254px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
