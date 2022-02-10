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
function Pet(name,age,gender,breed,selService){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.selService=selService;
}
//create three pets using the constructor


let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let selService = document.getElementById("selService");

//register section//
function register(){
    console.log("Register");
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,selService.value);
    console.log(thePet);
    salon.pets.push(thePet);
    showPetsCards();
    
    console.log(salon.pets);
}
//register to form section//
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput= document.querySelector('#txtName');
let ageInput= document.querySelector('#txtAge');
let genderInput= document.querySelector('#txtGender');
let breedInput= document.querySelector('#txtBreed');
let selServiceInput = document.querySelector('#selService');
let txtSearchInput = document.querySelector('#txtSearch');

btnAdd.addEventListener('click', () =>{
    let name = nameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;
    let breed = breedInput.value;
    let selService = selServiceInput.value;
    let Search = txtSearchInput.value;
    

   
    
    alert("You have registered a new pet!")
});




function removePets(index){
    if(index<salon.pets.length){
    salon.pets.splice(index, 1);
    }
    showPetsCards();

}

function showPetsCards(){
    document.getElementById('bodyTable').innerHTML = "";
    for(let i=0; i<salon.pets.length; i++){
    let template = `
    <tr id="${i}">
        <td>${salon.pets[i].name}</td>
        <td>${salon.pets[i].age}</td>
        <td>${salon.pets[i].gender}</td>
        <td>${salon.pets[i].breed}</td>
        <td>${salon.pets[i].selService}</td>
        <button onclick="removePets(${i});" >Remove</button>     
    </tr>
    `;
    document.getElementById('bodyTable').innerHTML += template;
    }
}


function createCard(pet, index){
    return `
        <div class="pet-card">
        <h3>${pet.name}<h3>
        <p>Age: ${pet.age}</p>
        <p>Gender: ${pet.gender}</p>
        <P>Service: ${pet.service}</P>
        <button onclick="removePets(${index});" >Remove</button>
        </div>
    `;

}


function init(){
    let sarge = newPet("Sarge",12,"male","Rott","nails");
    salon.pets.push(sarge);
    showPetsCards();
}

function searchPet(){
  
    let name = document.getElementById('txtSearch').value;
    
  //clear the field
   
  //travel the array (loop)
    for(let i=0;i<salon.pets.length;i++){
      //create card
        if(name.toLowerCase() == salon.pets[i].name.toLowerCase())
        { 
      //append the card
        document.getElementById(i).style.color = "blue";
        
        }
    } 
}

//window.onload=init; 
