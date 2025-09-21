/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    const developers = arr.map((person) => {
        if (person.profession === "developer") {
            console.log(person);
        }
    });
}

function PrintDeveloperbyForEach() {
  arr.forEach((person) => {
      if (person.profession === "developer") {
          console.log(person);
      }
  });

}

function addData() {
   function addData() {
   let newUser = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newUser);
     console.log(arr);

   }

  //Write your code here, just console.log


}

function removeAdmin() {
  //Write your code here, just console.log
  function removeAdmin() {
  arr=arr.filter((person) => person.profession !== "admin");
    console.log(arr);
  }
}

function concatenateArray() {
 let newArray = [

 {id:5,name:"sam",age:"23",profession:"developer"},
 {id:6,name:"sara",age:"24",profession:"developer"},
 ];
 let concatendate =arr.concat(newArray);}
 console.log(concatendate);
  //Write your code here, just console.log
}
