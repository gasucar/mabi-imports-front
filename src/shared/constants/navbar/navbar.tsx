import userIcon from "../../../assets/icons/user_icon.png"
import purchaseIcon from "../../../assets/icons/purchase_icon.png"
import searchIcon from "../../../assets/icons/search_icon.png"
import mbIcon from "../../../assets/icons/mb_icon.png"
import { useTranslation } from "react-i18next";

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <nav className="bg-[#e2e2e2] text-black p-4 sticky top-0 z-50 flex items-center">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/">
                    <div className="flex items-center">
                        <img src={mbIcon} alt="mabi imports icon" width={32} />
                        <div className="text-xl font-semibold uppercase font-serif">mabi imports</div>
                    </div>
                </a>
                <div className="w-139.5 flex justify-between font-medium text-[16px]">
                    <a href="/catalog" className="">{t("navbar.catalog")}</a>
                    <a href="/" className="">{t("navbar.perfumina_ai")}</a>
                    <a href="/about" className="">{t("navbar.about")}</a>
                    <a href="/contact" className="">{t("navbar.contact")}</a>
                </div>
                <div className="w-24.5 flex justify-between text-sm">
                    <a href="/" className=""><img src={userIcon} alt="user icon" width={16} /></a>
                    <a href="/" className=""><img src={purchaseIcon} alt="purchase icon" width={16} /></a>
                    <a href="/about" className=""><img src={searchIcon} alt="search icon" width={16} /></a>
                </div>

            </div>
            <button
                onClick={toggleLanguage}
                className="ml-2 text-xs font-medium cursor-pointer"
            >
                {i18n.language.toUpperCase()}
            </button>
        </nav>
    );
};

export default Navbar;