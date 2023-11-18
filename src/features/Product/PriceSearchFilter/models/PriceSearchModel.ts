const model = {
  min: 0,
  max: 0
};

const Model = () => model;

function setMin(val: number) {
  model.min = val;
}

function setMax(val: number) {
  model.max = val;
}

export default {
  Model,
  setMin,
  setMax
};
