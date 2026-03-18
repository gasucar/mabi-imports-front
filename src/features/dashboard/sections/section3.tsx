import { motion } from "framer-motion";
import CustomButton from "../../../shared/ui/buttons/custom_button";
import type { IPerfume } from "../../../shared/interfaces/interfaces";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../api/dashboard_api";
import PerfumePresentation from "../../../shared/ui/perfume/perfume_presentation";
import { useTranslation } from "react-i18next";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Section3 = () => {
  const {t} = useTranslation()

  const [dashboardPerfumes, setDashboardPerfumes] = useState<IPerfume[]>([]);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response: IPerfume[] = await fetchDashboardData();
        const perfumes = response.slice(0, 4);

        setDashboardPerfumes(perfumes);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchPerfumes();
  }, []);

  return (
    <section className="w-full bg-white py-28 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif"
          >
            {t("section3.title")}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-neutral-500 mt-3 text-sm"
          >
            {t("section3.subtitle")}
          </motion.p>
        </motion.div>

        {/* PRODUCTS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {dashboardPerfumes.length === 0 ?
            <p className="text-center col-span-full text-neutral-500">{t("section3.loading")}</p>
            :
            dashboardPerfumes.map(perfume => (
              <PerfumePresentation
                key={perfume.id}
                name={perfume.name}
                brand_name={perfume.brand.name}
                description={perfume.short_description}
                price={perfume.price}
                image={perfume.first_image}
              />
            ))
          }
        </motion.div>

        {/* BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <CustomButton variant="secondary-outline" size="lg">
            {t("section3.button")}
          </CustomButton>
        </motion.div>

      </div>

    </section>
  );
};

export default Section3;