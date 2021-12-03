class CustomArray 
{
  constructor() {
    this.elements = arguments;
  }

//   CustomSome(callback)
//   {
//       let result=false;

//       for (const item of this.elements) {
//           if(callback(item)){
//               result=true;
//               break;
//           }

//       }
//       return result;
//   }
// CustomMap(callback){
//     let newArray = [];
//     let x = this.length;
//     for (let i = 0; i < x; i++) {
//       let counter = callback(this[i]);
//       newArray.push(counter);
//     }
//     return newArray;
// }
CustomIncludes = function(num){
    for(let i = 0; i < this.length; i++){
       const el = this[i];
       if(num === el){
          return true;
       };
    };
    return false;
 };
}


let myArr = new CustomArray(7,8,9,10,11,12);
console.log(myArr.CustomIncludes(num));

// 1)Map
// 2)Some
// 3)include
// 4)join
// 5)Filter
// 6)toString
// 7)indexof vs lastIndexOf
