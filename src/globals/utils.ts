// types
import type { Address, LocationGeneral } from "./types";

export function ParseAddressesData(addresses: Address[]): Address[] {
  if (!Array.isArray(addresses)) {
    return [];
  }
  return addresses.map(
    ({
      id,
      address,
      address_name,
      city,
      complement,
      contact_number,
      country,
      departament,
      is_main,
      postal_code,
    }) => ({
      id,
      address,
      address_name,
      city,
      complement,
      contact_number,
      country,
      departament,
      is_main,
      postal_code,
    })
  );
}

export function ParseCountriesData(
  countries: LocationGeneral[]
): LocationGeneral[] {
  if (!Array.isArray(countries)) {
    return [];
  }
  return countries.map(({ id, name }) => ({
    id,
    name,
  }));
}
