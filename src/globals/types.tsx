export interface OptionsButtons {
  id: number;
  name_english: string;
  name_spanish: string;
  description_english: string;
  description_spanish: string;
  image: string | null;
  type?: string;
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

export interface Address {
  id: number;
  address_name: string;
  postal_code: string;
  contact_number: string;
  address: string;
  complement: string;
  is_main: boolean;
  country: LocationGeneral;
  departament: LocationGeneral;
  city: LocationGeneral;
}

export interface LocationGeneral {
  id: number;
  name: string;
}

export interface Kit {
  id: number;
  name_spanish: string;
  name_english: string;
  description_spanish: string;
  description_english: string;
  code: string;
  percentage_discount: number;
  value: number;
  image?: string;
}

export interface Category {
  id: number;
  name_spanish: string;
  name_english: string;
  image?: string;
  description_spanish: string;
  description_english: string;
  percentage_discount: number;
  state: number;
}

export interface Supplement {
  id: number;
  name_spanish: string;
  name_english: string;
  description_spanish: string;
  description_english: string;
  sku: string;
  price: number;
  discount: number;
  tax: number;
  price_total: number;
  price_final: number;
  image?: string;
}
