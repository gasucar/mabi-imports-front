import { motion } from "framer-motion";
import FooterColumn from "./components/footer_column";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-10 py-20">

      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* TOP GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 max-w-xs"
          >

            <h2 className="text-3xl font-serif tracking-wide">
              MABI
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Find your ideal perfume with the help of Perfumina AI.
            </p>

          </motion.div>

          {/* CATALOG */}

          <motion.div variants={fadeUp}>
            <FooterColumn
              title="CATALOG"
              links={[
                { label: "All Fragrances" },
                { label: "For Him" },
                { label: "For Her" },
                { label: "Unisex" },
                { label: "Gift Sets" }
              ]}
            />
          </motion.div>

          {/* COMPANY */}

          <motion.div variants={fadeUp}>
            <FooterColumn
              title="COMPANY"
              links={[
                { label: "About Us" },
                { label: "Perfumina AI" },
                { label: "Why trust in us?" }
              ]}
            />
          </motion.div>

          {/* CONTACT */}

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5"
          >

            <h3 className="text-sm font-semibold tracking-wider">
              CONTACT
            </h3>

            <div className="flex flex-col gap-4 text-sm text-neutral-400">

              <div className="flex items-center gap-3 hover:text-white transition">
                <Mail size={16}/>
                example@gmail.com
              </div>

              <div className="flex items-center gap-3 hover:text-white transition">
                <Phone size={16}/>
                +54 9 11 3333-0022
              </div>

              <div className="flex items-center gap-3 hover:text-white transition">
                <MapPin size={16}/>
                Merlo, Buenos Aires
              </div>

            </div>

          </motion.div>

        </div>

        {/* DIVIDER */}

        <div className="border-t border-neutral-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* COPYRIGHT */}

            <p className="text-sm text-neutral-500 text-center md:text-left">
              © 2026 MABI. All rights reserved.
            </p>

            {/* SOCIAL */}

            <div className="flex items-center gap-6">

              <Instagram
                size={18}
                className="
                text-neutral-400
                cursor-pointer
                transition
                duration-300
                hover:text-white
                hover:scale-110
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              />

              <Facebook
                size={18}
                className="
                text-neutral-400
                cursor-pointer
                transition
                duration-300
                hover:text-white
                hover:scale-110
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              />

              <Twitter
                size={18}
                className="
                text-neutral-400
                cursor-pointer
                transition
                duration-300
                hover:text-white
                hover:scale-110
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              />

            </div>

            {/* LEGAL */}

            <div className="flex items-center gap-6 text-sm text-neutral-400">

              <a
                className="
                transition
                hover:text-white
                hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]
                "
              >
                Privacy Policy
              </a>

              <a
                className="
                transition
                hover:text-white
                hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]
                "
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </motion.div>

    </footer>
  );
};

export default Footer;