// import next image
import Image from "next/image";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variants";

const How = ({ howData }) => {
  // destructure how to  data
  const { title, subtitle, girlImg } = howData;
  return (
    <section id="how" className="bg-pink-200">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          onViewportEnter={() => ({ once: false, amount: 0.6 })}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          {/* image */}
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} width={720} height={670} alt=""/>
          </motion.div>
          {/* text */}
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[455px]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
