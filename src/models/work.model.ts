export type Work = {
  id: string;
  images: {
    icon: string;
    overview?: string;
    process?: string;
  };
  technologies:
  | {
    frontend: string[];
    backend: string[];
  }
  | string[];
  colors: {
    from: string;
    to: string;
  };
  links: {
    code: string;
    site?: string
  };
};
