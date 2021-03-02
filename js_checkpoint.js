/*-------------------------------------------------------------------ex 1-----------------------------------------------------*/
/*function minMax(arr) {

	arr.sort((a,b)=>{
		return a-b
	})
	return [arr[0],arr[arr.length-1]]
}*/
/*-------------------------------------------------------------------ex 2----------------------------------------------------*/
/*function isSameNum(num1, num2) {
	let bool;
	if (num1 === num2){
		bool = true;
	}else {
		bool = false;
	}
	return bool;
}*/
/*-------------------------------------------------------------------ex 3----------------------------------------------------*/
/*function filterArray(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i]) === arr[i]) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}*/
/*-------------------------------------------------------------------ex 4----------------------------------------------------*/
/*function getAbsSum(arr) {
  let sumAbs = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAbs += Math.abs(arr[i]);
  }
  return sumAbs;
}*/
/*-------------------------------------------------------------------ex 5----------------------------------------------------*/
/*function countTrue(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      num++;
    }
  }
  return num;
}*/
/*-------------------------------------------------------------------ex 6----------------------------------------------------*/
/*function inkLevels() {
  let k = Object.values(inks);

  k.sort((a, b) => {
    return a - b;
  });
  return k[0];
}*/
/*-------------------------------------------------------------------ex 7----------------------------------------------------*/
/*function objectToArray() {
  let k = Object.keys(obj);
  let f = Object.values(obj);
  let g = [];
  for (let i = 0; i < k.length; i++) {
    g.push([k[i], f[i]]);
  }

  return g;
}*/
//or (copiage)
/*function objectToArray() {
  console.log(Object.entries(obj));
}
let obj = {
  D: 1,
  B: 2,
  C: 3,
};
objectToArray(obj);*/

/*-------------------------------------------------------------------ex 8----------------------------------------------------*/
/*function getBudgets() {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].budget;
  }
  console.log(sum);
}
*/
/*-------------------------------------------------------------------ex 9----------------------------------------------------*/
/*function afterNYears(names, n) {
  let arr = Object.keys(names);
  for (let i = 0; i < arr.length; i++) {
    names[arr[i]] = names[arr[i]] + n;
  }
  console.log(names);
}*/
/*-------------------------------------------------------------------ex 10----------------------------------------------------*/
/*const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  let arr_names = Object.keys(GUEST_LIST);
  let arr_countries = Object.values(GUEST_LIST);
  let grtng;
  for (let i = 0; i < arr_names.length; i++) {
    if (arr_names[i] == name) {
      grtng = `hi i am ${arr_names[i]}, i am from ${arr_countries[i]}`;
      break;
    } else {
      grtng = "hi i am a guest";
    }
  }
  console.log(grtng);
}
greeting("");*/
