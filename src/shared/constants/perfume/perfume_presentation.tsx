import { motion } from "framer-motion";
import example from "../../../assets/items_mock/example.png";
import { formatPrice } from "../../utils/format_price";
import { ShoppingCart } from "lucide-react";
import CustomButton from "../buttons/custom_button";

type Props = {
  name: string;
  description: string;
  brand_name: string;
  price: string;
  image: string
  id: string
};

const PerfumePresentation = ({ id ,name, description, brand_name, price, image }: Props) => {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >

      <div className=" hover:scale-105 transition duration-300">
        <div className="group relative">
          <img
            src={image ?? example}
            alt={name}
            className="w-full h-60 object-cover"
          />
          {/* HOVER */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end pb-3">
            <CustomButton className="w-30 h-10 border border-neutral-300">
              <ShoppingCart size={16} />
              Agregar
            </CustomButton>
          </div>
        </div>
        <a href={`/perfume/${id}`} className="block mt-4">
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
      </div>

    </motion.div>
  );
};

export default PerfumePresentation;