let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"90210",
        number:"113-k"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]

}

function displayPetAges(){
    for(let i=0;i<salon.pet.length;i++){
        console.log(salon.pet[i].name);
    }
}

//create the constructor
function Pet(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
//create three pets using the constructor
let sarge = new Pet("Sarge",12,"male");
salon.pets.push(sarge);


let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");

//register section//
function register(){
    console.log("Register");
    let thePet = new Pet(petName.value,petAge.value,petGender.value);
    console.log(thePet);
    salon.pets.push(thePet);

    
    console.log(salon.pets);
}
//register to form section//
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput= document.querySelector('#txtName');
let ageInput= document.querySelector('#txtAge');
let genderInput= document.querySelector('#txtGender');

btnAdd.addEventListener('click', () =>{
    let name = nameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;

    let template = `
    <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>      
    </tr>`;

    table.innerHTML += template;
});


