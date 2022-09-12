// import next Link
import Link from "next/link";
// import icons
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInUp } from "../variants";

const Copyright = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView={"animate"}
      className="bg-white h-[140px]"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[140px] lg:pr-24 ">
          {/* copy text */}
          <p>Copyright &copy; 2022 by Akinola</p>
          {/* social icons */}
          <div className="flex gap-x-[30px] ">
            <Link href="/">
              <a>
                <div className="w-9 h-9 bg-accent text-white hover:bg-accent-hover rounded-full flex justify-center items-center transition">
                  <FaYoutube />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="w-9 h-9 bg-accent  hover:bg-accent-hover text-white rounded-full flex justify-center items-center transition">
                  <FaInstagram />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="w-9 h-9 bg-accent  hover:bg-accent-hover text-white rounded-full flex justify-center items-center transition">
                  <FaGithub />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Copyright;
