type ManufacturerFilterType = string;

type PriceFilterType = {
  min: number;
  max: number;
};

export type OptionsFilterType = {
  manufacturer?: ManufacturerFilterType[];
  price?: PriceFilterType;
};
