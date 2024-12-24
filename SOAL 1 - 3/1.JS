function ganjilGenap(input) {
  const genap = input.filter((num) => num % 2 === 0).sort((a, b) => a - b);
  const ganjil = input.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  return [...genap, ...ganjil];
}

const input = [5, 3, 8, 6, 1, 9, 2];
console.log(ganjilGenap(input));
