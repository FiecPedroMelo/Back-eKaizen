import { seed, random, checkRandomNumber } from "./randomNumberGenerator";

function executeCode() {
  seed(192837465);

  const resultMap = new Map();

  for (let i = 0; i < 9; i++) {
    resultMap.set(i, random());
  }

  const values = Array.from(resultMap.values());

  for (const key of resultMap.keys()) {
    console.log(values[key]);
  }

  const output = checkRandomNumber(values);

  console.log(output.status);

  return values;
}

export default executeCode;
