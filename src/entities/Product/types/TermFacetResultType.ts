type FacetTerm = {
  term: string;
  count: number;
};

type TermFacetResultType = {
  type: 'terms';
  dataType: string | boolean | number;
  missing: number;
  total: number;
  other: number;
  terms: FacetTerm[];
};

type FacetsType = {
  'variants.attributes.manufacturer': TermFacetResultType;
};

export type FacetResponse = {
  facets: FacetsType;
};
