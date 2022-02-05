let lion = {
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2 ={
    name:"Nala",
    KingOfJungle:false,
    food:"Carnivor"
}

//object contructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("Feeding...");
        this.hunger=this.hunger-2;
    }
}
//create objects

let lionC = new Animal("Simba",true,"Carnivor");
console.log(lionC.feed());

let lionD = new Animal("Nala", false, "Carnivor");
console.log(lionD);

//create a constructor
//school,student,instructor,assignment,course,exam

let school = {
    name:"San Diego Global Knowledge University",
    location:"San Diego",
    hours:247,
    online:true
}




function School(name,location,hours,online){
    this.name=name;
    this.location=location;
    this.hours=hours;
    this.online=online;
}

let school1 = new School("San Diego Global Knowledge University","San Diego","247",true);
console.log(school1);