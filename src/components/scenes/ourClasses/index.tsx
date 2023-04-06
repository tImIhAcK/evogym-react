import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              rerum perspiciatis placeat magni officia at facilis fuga quod
              veritatis laudantium id tenetur in quae, quidem, a voluptate hic,
              recusandae quos!`,
    image: image1,
  },
  {
    name: "Yoga Classes",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              rerum perspiciatis placeat magni officia at facilis fuga quod
              veritatis laudantium id tenetur in quae, quidem, a voluptate hic,
              recusandae quos!`,
    image: image2,
  },
  {
    name: "Adventure Classes",
    image: image3,
  },
  {
    name: "Ftiness Classes",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              rerum perspiciatis placeat magni officia at facilis fuga quod
              veritatis laudantium id tenetur in quae, quidem, a voluptate hic,
              recusandae quos!`,
    image: image4,
  },
  {
    name: "Training Classes",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              rerum perspiciatis placeat magni officia at facilis fuga quod
              veritatis laudantium id tenetur in quae, quidem, a voluptate hic,
              recusandae quos!`,
    image: image5,
  },
  {
    name: "Weight Training Classes",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
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
          className="mx-auto w-5/6"
        >
          <div className="w-5/6">
            <HText>OUR CLASSES</HText>
            <p className="py-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              rerum perspiciatis placeat magni officia at facilis fuga quod
              veritatis laudantium id tenetur in quae, quidem, a voluptate hic,
              recusandae quos!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={index}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
