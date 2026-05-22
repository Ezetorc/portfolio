import type { TechnologyId } from "../configuration/technologies.configuration";

export type Work = {
  id: string;
  images: {
    icon: string;
    overview?: string;
    process?: string;
  };
  technologies:
    | {
        frontend: TechnologyId[];
        backend: TechnologyId[];
      }
    | TechnologyId[];
  colors: {
    from: string;
    to: string;
  };
  links: {
    code: string;
    site?: string | null;
  };
};
