// import motion
import { motion } from "framer-motion";

// import variants
import { fadeInDown } from "../variants";
// import next/link
import Link from "next/link";
import { list } from "postcss";

const NavMobile = ({ navData }) => {
  return (
    <nav className="bg-accent   w-full h-[60vh] p-4">
      {/* nav list */}

      <ul className="  flex flex-col mt-[2rem] justify-center items-center gap-y-6 z-50">
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <motion.li whileHover={{ zoom: 1.2 }} key={idx}>
              <Link href={href}>
                <a className="text-white ">{name}</a>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
