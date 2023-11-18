const model: string[] = [];

const Model = () => [...model];

function add(item: string) {
  model.push(item);
}

function deletionsByName(item: string) {
  const index = model.indexOf(item);
  if (index >= 0) {
    model.splice(index, 1);
  }
}

export default {
  add,
  deletionsByName,
  Model
};
