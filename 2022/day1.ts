export function findElfMaxCalories(data) {
  let maxIndex = 0;
  let maxCalories = 0;
  const elves = data.split(/\n{2,}/g);
  elves.forEach((elf, i) => {
    const food = elf.split("\n");
    let caloriesSum = 0;
    food.forEach(food => caloriesSum += +food);
    if (caloriesSum > maxCalories) {
      maxCalories = caloriesSum;
      maxIndex = i;
    }
  });
  return { maxCalories, maxIndex };
}

export function findTop3ElfCalories() {
  const elvesCalories = [];
  const elves = data.split(/\n{2,}/g);
  elves.forEach((elf, i) => {
    const food = elf.split("\n");
    let caloriesSum = 0;
    food.forEach(food => caloriesSum += +food);
    elvesCalories.push(caloriesSum);
  });
  elvesCalories.sort((a,b) => b - a);
  return elvesCalories[0] + elvesCalories[1] + elvesCalories[2];
}
