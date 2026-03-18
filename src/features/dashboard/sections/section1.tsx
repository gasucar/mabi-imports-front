import CustomButton from "../../../shared/ui/buttons/custom_button"
import banner from "../../../assets/images/dashboard_banner.png";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight capitalize">
          {t("section1.title_line1")} <br />
          {t("section1.title_line2")}
        </h1>

        <p className="mt-6 text-gray-200 text-base font-medium md:text-lg max-w-2xl mx-auto">
          {t("section1.subtitle")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center">
          <CustomButton variant="primary" size="lg">
            {t("section1.talkToPerfumina")}
          </CustomButton>
          <CustomButton variant="outline" size="lg">
            {t("section1.goCatalog")}
          </CustomButton>
        </div>

      </div>
    </section>
  )
}

export default Section1;