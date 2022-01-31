let minValue = 0, maxValue = 15, month, season;

month = Math.ceil(Math.random() * ( minValue - maxValue ) + maxValue);
console.log(month);

if ( month == 12 || month == 1 || month == 2 ) {
    season = "Winter";
} else if( month == 3 || month == 4 || month == 5 ) {
    season = "Spring";
} else if ( month == 6 || month == 7 || month == 8 ) {
    season = "Summer";
} else if ( month == 9 || month == 10 || month == 11 ) {
    season = "Fall";
} else {
    console.log(`${month} is not a month number`);
}

console.log(season);