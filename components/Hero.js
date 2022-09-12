// import next/Image
import Image from "next/image";
// import motion
import { motion } from "framer-motion";

// import variants
import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from "../variants";

// import icons
import { CgArrowLongRight } from "react-icons/cg";

// import components
import Header from "../components/Header";

const Hero = ({ heroData, headerData, navData }) => {
  //  destructure heor data
  const { title, sceneImg, boyImg, girlImg, truckImg, btnText } = heroData;

  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px]"
      >
        {/* header */}
        <motion.div variants={fadeInDown}>
          <Header headerData={headerData} navData={navData} />
        </motion.div>
        {/* title */}
        <motion.h1
          variants={fadeInDown}
          className="h1 max-w-[740px] text-white pt-[12rem] mb-[]60px"
        >
          {title}
        </motion.h1>
        {/* button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          variants={fadeInDown}
          className="btn"
        >
          {btnText} <CgArrowLongRight className="text-[30px]" />
        </motion.button>
        {/* girl Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={girlAnim}
          className="hidden lg:flex absolute bottom-0"
        >
          <Image src={girlImg} alt=" " width={206} height={495}  />
        </motion.div>
        {/* truck Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={heroTruckAnim}
          className="hidden lg:flex absolute -bottom-[25%] -left-[30%]"
        >
          <Image src={truckImg} alt="" width={395} height={811}  />
        </motion.div>
        {/* boy Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={boyAnim}
          className="hidden lg:flex absolute right-[380px] bottom-0 z-10"
        >
          <Image src={boyImg} alt="" height={495} width={206} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
