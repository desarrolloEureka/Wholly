export interface OptionsButtons {
  id: number;
  name: string;
}

export interface StepOneHandle {
  validateForm: () => boolean;
}
export interface ImagesValue {
  subtitle: string;
  id: number;
  src: string;
  title: string;
}
export interface CarouselItemProps {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  tex: string;
}
export interface ImagesExperts {
  subtitle: string;
  id: number;
  src: string;
  title: string;
  socialLinks?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}
