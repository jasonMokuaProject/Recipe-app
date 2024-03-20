let getURL = "";
let get_id = localStorage.getItem("Id");

let item = foodMenuList.find((x) => {

    return x.id == get_id;
});

console.log(window.location.href);
console.log(item);

let ITEMContainer = document.getElementsByClassName("Specific-item")[0];


let DivCreated = document.createElement('div');

let ImgCreated = document.createElement('img');
let paraCreated = document.createElement('p');
let SecondparaCreated = document.createElement('p');
let ThirdparaCreated = document.createElement('p');
let fourthparaCreated = document.createElement('p');


fourthparaCreated.innerHTML = `${item.description}`;
ThirdparaCreated.innerHTML = `Description <br> <br><hr> <br> `;
SecondparaCreated.innerHTML = `${item.prep} Mintues | ${item.calories} Calories | ${item.servings} Servings`;
SecondparaCreated.classList.add("thetextforindividualimagesecond");
ThirdparaCreated.classList.add("thetextforindividualimagethird");
fourthparaCreated.classList.add("thetextforindividualimagefourth");


ITEMContainer.appendChild(ImgCreated);

DivCreated.appendChild(paraCreated);
DivCreated.appendChild(SecondparaCreated);
DivCreated.appendChild(ThirdparaCreated);
DivCreated.appendChild(fourthparaCreated);
paraCreated.innerHTML = item.Name;
ImgCreated.src = item.image;

paraCreated.classList.add("thetextforindividualimage");
ImgCreated.classList.add("IndividualImage");



ITEMContainer.appendChild(DivCreated);
