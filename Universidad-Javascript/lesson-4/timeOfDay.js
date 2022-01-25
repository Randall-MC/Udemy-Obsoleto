/* 
   6 - 11 a.m. -> Good morning
   12 - 18 p.m. -> Good afternoon
   19 - 24 p.m. -> Good evening
   0 - 6 a.m. -> Sleeping 
*/

let minValue = 0, maxValue = 25, hour;

hour = Math.floor(Math.random() * ( maxValue - minValue ) + minValue );
console.log(hour);

if ( hour >= 6 && hour <= 11 ) {
    console.log("Good morning");
}else if ( hour >= 12 && hour <= 18 ) {
    console.log("Good afternoon");
}else if ( hour >= 19 && hour <= 6 ) {
    console.log("Good evening");
}else {
    console.log("Sleeping");
}