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

export type FacetResponse = {
  facets: {
    [key: string]: TermFacetResultType;
  };
};
