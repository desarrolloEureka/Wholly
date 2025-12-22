// types
import type { Dispatch, SetStateAction } from "react";
import type { RequestProps } from "../types";
import type { Address } from "../../globals/types";

export type UpdateAddressRequestProps = RequestProps & {
  id: string;
  address_name: string;
  address: string;
  complement: string;
  contact_number: string;
  postal_code: string;
  city: string | number;
  isMain: boolean;
  onBack: () => void;
  setCurrentItem: Dispatch<SetStateAction<Address | null>>;
};
