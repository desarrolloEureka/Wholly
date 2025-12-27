// types
import type { Dispatch, SetStateAction } from "react";
import type { Kit } from "../../../globals/types";

export type KitSessionProps = {
  kit: Kit;
  references: {
    results: ResultItem[];
  };
  setCurrentReference: Dispatch<SetStateAction<number | null>>;
};

export interface ResultItem {
  sku_reference_id: number;
  image: string;
  reference_id: number;
}
