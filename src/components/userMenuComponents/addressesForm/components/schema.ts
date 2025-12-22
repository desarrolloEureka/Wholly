// external components
import * as Yup from "yup";

export const CreateAddressSchema = Yup.object().shape({
  address_name: Yup.string().required("Campo requerido"),
  address: Yup.string().required("Campo requerido"),
  complement: Yup.string().required("Campo requerido"),
  contact_number: Yup.string().required("Campo requerido"),
  postal_code: Yup.string().required("Campo requerido"),
  country: Yup.string().required("Campo requerido"),
  departament: Yup.string().required("Campo requerido"),
  city: Yup.string().required("Campo requerido"),
});
