let minValue = 0, maxValue = 12, month, season;

const getMonth = () => month = Math.ceil(Math.random() * ( maxValue - minValue ) + minValue);
console.log( getMonth() );

switch ( getMonth() ) {
    case 12: case 1: case 2:
        season = "Winter"
        break;

    case 3: case 4: case 5:
        season = "Spring"
        break;
    
    case 6: case 7: case 8:
        season = "Summer"
        break;

    case 9: case 10: case 11:
        season = "Fall"
        break;

    default:
        console.log("Error");
        break;
}

console.log(`Month ${month} belongs season ${season}`);