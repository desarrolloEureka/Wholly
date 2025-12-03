export interface OptionsButtons {
  id: number;
  name_english: string;
  name_spanish: string;
  description_english: string;
  description_spanish: string;
  image: string | null;
}

export interface StepOneHandle {
  validateForm: () => boolean;
}
export interface ImagesCategories {
  subtitle?: string;
  id: number;
  src: string;
  title: string;
  description: string;
}
export interface ImagesVariety {
  subtitle: string;
  id: number;
  src: string;
  title: string;
  description: string;
  amount?: any;
  code?: any;
}
export interface ImagesExclusive {
  subtitle: string;
  id: number;
  src: string;
  title: string;
  description: string;
  description1: string;
  description2: string;
  description3: string;
  code?: any;
  price?: any;
  price_final?: any;
}
