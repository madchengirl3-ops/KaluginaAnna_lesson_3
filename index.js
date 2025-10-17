let firstFlight = 1961;
let currentYear = 2025;
let found = false;

for (let year = currentYear; year >= firstFlight; year--) {
    if (year === firstFlight) {
        console.log(`Год первого полета человека в космос: ${year}`);
        found = true;
        break;
        
    }
}


