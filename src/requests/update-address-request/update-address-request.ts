// utils
import { fetcher, type FetcherParams } from "../../globals/fetcher/fetcher";

// types
import type { UpdateAddressRequestProps } from "./types";

export const UpdateAddressRequest = async ({
  id,
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
  setCurrentItem,
}: UpdateAddressRequestProps) => {
  try {
    setIsLoading(true);
    const data: FetcherParams = {
      url: `/regions/apiEditAddress/${id}/`,
      options: {
        method: "PATCH",
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
      setCurrentItem(null);
    } else {
      setIsLoading(false);
      setIsError(response.address[0]);
    }
  } catch {
    setIsLoading(false);
    setIsError("Ocurrió un error al actualizar la dirección.");
  }
};
