let foodMenu = [
{
    Name:'Zucchini Slice',
     Type:'Lunch',
     image:"food_images/zucchini-slice-10160-1.jpeg",
     id:'jfy73hclmsy7j3hd7yf'
},
{
    Name:'Pumpkin Soup',
     Type:'Dinner',
     image:"food_images/best-easy-pumpkin-soup-recipe-185570-1.jpg",
     id:'MGUKTNW6793KBSfhd'
},
{
    Name:'Easy Fried Rice',
     Type:'Dinner',
     image:"food_images/easy-fried-rice-187086-1.jpg",
     id:'8IJ43Yyhb3hmsnw2'
},
{
    Name:'Classic Shepherds Pie',
     Type:'Dinner',
     image:"food_images/classic-shepherds-pie_1980x1320-118395-1.jpg",
     id:'ioi034jfnvyd'
},
{
    Name:'Chesse Quiche',
     Type:'Dinner',
     image:"food_images/impossible-quiche-24036-1.jpeg",
     id:'ljdfhne394jfnvyd'
},

{
    Name:'Lasagne',
     Type:'Dinner',
     image:"food_images/our-favourite-lasagne-193150-2.jpg",
     id:'ytyjtynenmt7432yd'
},

{
    Name:'Thai Beef Salad',
     Type:'Dinner',
     image:"food_images/thai-beef-salad_1980x1320-118406-1.jpg",
     id:'pi8ghioptrewwssugf432yd'
},

{
    Name:'Curried Sausages',
     Type:'Dinner',
     image:"food_images/curried-sausages-72753-1.jpeg",
     id:'afd4565orthyd'
},

{
    Name:'Basic Chicken And Vegetable Stirfry',
     Type:'Lunch',
     image:"food_images/basic-chicken-and-vegetable-stirfry_1980x1320-117899-1.jpg",
     id:'pkukiyr5432yd'
},
{
    Name:'San Choy Bau',
     Type:'Lunch',
     image:"food_images/san-choy-bau_1980x1320-118402-1.jpg",
     id:'pdsffgt5ew432yd'
},
];

let FoodContainer = document.getElementsByClassName("imagecolumn")[0];


foodMenu.forEach((FOODdata)=>{
let DivCreated = document.createElement('div');
let ImgCreated = document.createElement('img');
let paraCreated = document.createElement('p');
DivCreated.appendChild(ImgCreated);
DivCreated.appendChild(paraCreated);
paraCreated.innerHTML = FOODdata.Name;
ImgCreated.src=FOODdata.image;

paraCreated.classList.add("recipeTextdesc");
ImgCreated.classList.add("theimagecontainer");


FoodContainer.appendChild(DivCreated);
});