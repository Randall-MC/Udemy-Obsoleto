 let result = addAll(12, 43, 36, 86, 53);
console.log(result);

 function addAll() {
     let add = 0;
     for (let index = 0; index < arguments.length; index++) {
         add += arguments[index];
     }
     return add;
 }