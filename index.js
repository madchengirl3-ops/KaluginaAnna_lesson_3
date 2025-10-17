let startYear = 1800;
let endYear = 2020;
let yearCount = 0;

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        yearCount++;
    }
}
console.log(`Количество високосных лет между ${startYear} и ${endYear} годами: ${yearCount}`);



