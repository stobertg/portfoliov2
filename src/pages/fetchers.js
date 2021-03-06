
const loadData = async () => {
  await new Promise(r => setTimeout(r, 1000));
  const data = "this is loaded data";
  return data;
};

export default loadData;