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
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}
//create three pets using the constructor


let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");

//register section//
function register(){
    console.log("Register");
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,selService.value);
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
let breedInput= document.querySelector(`#txtBreed`);
let selServiceInput = document.querySelector(`#selService`);

btnAdd.addEventListener('click', () =>{
    let name = nameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;
    let breed = breedInput.value;
    let selService = selServiceInput.value;

    let template = `
    <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${breed}</td>
        <td>${selService}</td>     
    </tr>`;

    table.innerHTML += template;
    alert("You have registered a new pet!")
});


//function showPetsCards(){
//
//   //travel the array(loop)
//   For(let i=0;i<salon.pets.length;i++){
//   console.log(createCard(salon.pets[i])); 
//}
//    //create the card
//    document.getElementById("petList").innerHTML +=
//    createCard(salon.pets[i]);
//    //append the tmp into html
//}

//function createCard(pet){
//   return `
//     <div class="pet-card">
//       <h3>${pet.name}<h3>
//       <p>Age: ${pet.age}</p>
//       <p>Gender: ${pet.gender}</p>
//       <P>Service: ${pet.service}</P>
//     </div>
//   `;
//
//}


//function init(){
    //let sarge = newPet("Sarge",12,"male","Rott","nails");
//    salon.pets.push(sarge);
//    showPetsCards();
//}

//window.onload=init;