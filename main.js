
let FoodContainer = document.getElementsByClassName("imagecolumn")[0];


foodMenuList.forEach((FOODdata) => {
    let DivCreated = document.createElement('div');

    let ImgCreated = document.createElement('img');
    let paraCreated = document.createElement('p');

    DivCreated.appendChild(ImgCreated);

    DivCreated.appendChild(paraCreated);
    paraCreated.innerHTML = FOODdata.Name;
    ImgCreated.src = FOODdata.image;

    paraCreated.classList.add("recipeTextdesc");
    ImgCreated.classList.add("theimagecontainer");


    DivCreated.addEventListener('click',function(){
localStorage.setItem('Id',FOODdata.id);
window.location.assign("recipe.html");
    });

    FoodContainer.appendChild(DivCreated);
});