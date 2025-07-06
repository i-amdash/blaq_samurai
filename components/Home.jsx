import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '@/components/store';
import { CustomButton } from '@/components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '@/config/motion';
import Image from 'next/image';
import { logoBlackImage } from '@/utils';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      <div className="absolute inset-0 bg-grain mix-blend-multiply" />
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <div className="flex items-center py-3 lg:py-0 justify-between"/>
          </motion.header>

          <motion.div className="flex-1 w-full xl:justify-center justify-start flex flex-col gap-5 lg:gap-10 z-20" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="xl:text-[8rem] 2xl:text-[10rem] lg:text-[5rem] md:text-[4rem] text-[3rem] xl:leading-[9rem] 2xl:leading-[11rem] lg:leading-[5rem] leading-[3rem] font-black text-black">
                BLAQ <br className="lg:block hidden" /> SAMURAI.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="outline"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home