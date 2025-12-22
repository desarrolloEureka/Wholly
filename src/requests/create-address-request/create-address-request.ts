// utils
import { fetcher, type FetcherParams } from "../../globals/fetcher/fetcher";

// types
import type { CreateAddressRequestProps } from "./types";

export const CreateAddressRequest = async ({
  address,
  address_name,
  city,
  complement,
  contact_number,
  postal_code,
  isMain,
  setIsError,
  setIsLoading,
  onBack,
}: CreateAddressRequestProps) => {
  try {
    setIsLoading(true);
    const data: FetcherParams = {
      url: `/regions/apiCreateAddress`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: {
            name: address_name,
            address,
            complement,
            cell_phone: contact_number,
            postal_code: postal_code,
            city: city,
            is_main: isMain,
          },
        }),
      },
    };
    const response = await fetcher(data);
    if (response.status) {
      setIsLoading(false);
      setIsError("");
      onBack();
    } else {
      setIsLoading(false);
      setIsError(response.address[0]);
    }
  } catch {
    setIsLoading(false);
    setIsError("Ocurrió un error al actualizar la dirección.");
  }
};
