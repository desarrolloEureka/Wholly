// types
import type { RequestProps } from "../types";

export type CreateAddressRequestProps = RequestProps & {
  address_name: string;
  address: string;
  complement: string;
  contact_number: string;
  postal_code: string;
  city: string | number;
  isMain: boolean;
  onBack: () => void;
};
