import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, doloribus?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, doloribus?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, doloribus?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quae ipsa vero facilis iste libero adipisci itaque obcaecati
            veritatis voluptate ex minima quaerat unde, labore excepturi?
            Voluptas incidunt aliquid dignissimos vel laborum.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 sm:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESC */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefit-page-graphic"
          />

          {/* DESC */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-40 before:-top-40 before:-z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBER GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident amet, odio quis tempora voluptas in quaerat ab, magni,
                magnam aspernatur sed. Inventore illo, quae porro, consequuntur
                atque reprehenderit aliquam nulla ratione voluptatum doloremque
                deserunt, soluta dignissimos eligendi pariatur non quidem fugit
                perspiciatis optio facere cupiditate!
              </p>
              <p className="mb-6 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ipsam dicta a consequatur eaque id temporibus, esse facilis
                obcaecati iusto hic accusantium optio quidem, aliquam animi nemo
                cupiditate ea repudiandae rem at sapiente magnam dolore. Omnis,
                voluptate maiores officia necessitatibus eius repellat cum!
                Iste, explicabo.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-40 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
