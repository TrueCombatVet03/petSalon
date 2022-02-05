let names = ["Victoria", "Mark", "MIke", "Phil"];
let mixed = [99,"Derek",true,null,45,"hello"];

function displayNames(){
    for(let i=0;i<names.length;i++){
        console.log(names[i]);
    }
}
//displayNames();
let ages = ["20","32","50","75"];
//console.log("ages");

function displayAges(){
    for(let i=0;i<ages.length;i++){
        console.log(ages[i]);
    }
}
//displayAges();

//object literal

let student={
    name:"Joey",
    age:80,
    student:true,
    grade:"A-",
    music:["Eminem","Coldplay","Rolling stones"],
    address:{
    city:"San Diego",
    country:"USA"
    }
}
console.log(student.address.country);
console.log(student.music[0]);
console.log(student["music"][0]);

let students=[
    {
        name:"Guillermo",
        age:24,
        activeStudent:true
    },
    {
        name:"Arturo",
        age:23,
        activeStudent:true
    },
    {
        name:"mark",
        age:30,
        activeStudents:false
    }
]
console.log(students);