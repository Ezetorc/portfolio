import { OptionsIcon } from "./icons/OptionsIcon";

export function OptionsMenu() {
  return (
    <button className="desktop:hidden clickable">
      <OptionsIcon />
    </button>
  );
}
