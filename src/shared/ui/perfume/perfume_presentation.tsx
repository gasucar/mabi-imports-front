import { motion } from "framer-motion";
import example from "../../../assets/items_mock/example.png";
import { formatPrice } from "../../utils/format_price";

type Props = {
  name: string;
  description: string;
  brand_name: string;
  price: string;
  image: string
};

const PerfumePresentation = ({ name, description, brand_name, price, image }: Props) => {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <a href="" className="hover:scale-105 transition duration-300">
        <img
          src={image ?? example}
          alt={name}
          className="w-full h-60 object-cover"
        />

        <h3 className="mt-4 text-sm font-medium">{name}</h3>
        <p className="text-xs text-neutral-800 font-medium text-shadow-lg">
          {brand_name}
        </p>

        <p className="text-xs text-neutral-500 mt-1">
          {description}
        </p>

        <p className="text-sm mt-2 font-medium">
          ${formatPrice(price)}
        </p>
      </a>
    </motion.div>
  );
};

export default PerfumePresentation;