import { DICTIONARY, LANGUAGES } from "../configuration/i18n.configuration";
import { useTranslatedPath } from "../utilities/useTranslatedPath";
import { WorldIcon } from "./icons/WorldIcon";

export default function LanguageSelector({
  currentLang,
}: {
  currentLang: keyof typeof DICTIONARY;
}) {
  const translatePath = useTranslatedPath(currentLang);

  const handleClick = () => {
    const menu = document.getElementById("lang-menu");

    if (!menu) return;

    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
  };

  return (
    <>
      <div className="relative">
        <button
          id="lang-button"
          className="rounded-full grid place-items-center hover:bg-gray-700 transition-colors cursor-pointer"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={handleClick}
        >
          <WorldIcon />
        </button>

        <ul
          id="lang-menu"
          className="absolute overflow-hidden cursor-pointer right-0 mt-2 w-40 bg-[#BDF8FF] text-[#000E1C] font-poppins-semibold rounded-lg shadow-lg hidden"
        >
          {Object.entries(LANGUAGES).map(([lang, label]) => (
            <li key={lang}>
              <a
                href={translatePath("/", lang)}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  lang === currentLang ? "font-semibold text-blue-600" : ""
                } `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
