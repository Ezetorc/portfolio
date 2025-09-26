import { LANGUAGES } from "../configuration/i18n.configuration";
import { useTranslatedPath } from "../utilities/useTranslatedPath";
import { WorldIcon } from "./icons/WorldIcon";

export default function LanguageSelector(props: {
  currentLang: keyof typeof LANGUAGES;
}) {
  const translatePath = useTranslatedPath(props.currentLang);

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
          className="rounded-full p-2 grid place-items-center clickable"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={handleClick}
        >
          <WorldIcon />
        </button>

        <ul
          id="lang-menu"
          className="absolute overflow-hidden cursor-pointer right-0 mt-2 w-40 bg-light-bg border-highlight border-[1px] text-primary-text font-poppins-semibold rounded-lg shadow-lg hidden"
        >
          {Object.entries(LANGUAGES).map(([lang, label]) => (
            <li key={lang}>
              <a
                href={translatePath("/", lang)}
                className={`block px-4 py-2 text-sm hover:bg-highlight transition-colors ${
                  lang === props.currentLang
                    ? "font-poppins-semibold"
                    : "font-poppins-light"
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
