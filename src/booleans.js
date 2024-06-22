export function countSheep(arrayOfSheep) {
    const count = arrayOfSheep.reduce((acc, sheep) => sheep ? acc + 1 : acc, 0);

    if (count > 0) {
        return `There are ${count} sheep in total`;
    } else {
        return `UPS!!! Wolfs eaten Sheeps`;
    }
}