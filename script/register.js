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
    pet:[
        {
            name:"Scooby",
            age:60,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Betsy",
            age:10,
            gender:"female",
            breed:"Dane",
            service:"Grooming",
            owner:"John",
            phone:"555-777-5555"
        },
        {
            name:"Sarge",
            age:5,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            owner:"Kevin",
            phone:"555-585-5555"
        },
        {
            name:"Army",
            age:2,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            owner:"Mike",
            phone:"555-989-5555"
        },
        
    ]
}
console.log(salon.pet);



function displayPetAges(){
    for(let i=0;i<salon.pet.length;i++){
        console.log(salon.pet[i].name);
    }
}

//alert('Pets Registered: 4')

displayPetAges();