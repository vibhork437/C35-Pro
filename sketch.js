var dog, happyDog 

var database, foodS;

var foodStock, readStock;

var img, img2

var Dog

var fedTime, lastFed

var addfood, feeddrago;

var foodObj,Input,submit

var name

function preload(){
  
  //load images here
  img = loadImage("Dog.png");
  img2 = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();

  createCanvas(800, 700);

  milk = new Food(200,200);


  Dog = createSprite(420, 320, 40, 40);
  Dog.addImage(img);
  img.resize(200, 200);

  img2.resize(200, 200);

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
 
  feed = createButton("Feed your Pet");
  feed.position(600, 95);
  feed.mousePressed(feedDog)

  addFood = createButton("Add Milk Bottles")
  addFood.position(900,95);
  addFood.mousePressed(addFoods)

  namepet = createButton("Name your Pet")
  namepet.position(750,135)
  namepet.mousePressed(Name)
  
  greeting = createElement('h2');
}


function draw() {  
  background(46, 139, 87);


  drawSprites();

  fedTime = database.ref('fedTime');
  fedTime.on("value",function(data){
    lastFed = data.val()
  });
  
  var hour = getTime()

  textSize(16);
  fill(255,255,254);
  textSize(25);
  if(lastFed>=12){
   text("last Feed : " + lastFed + "PM",340,500)
  } else if(lastFed==0){
    text("last Feed : 12 AM",340,500)
  } else{
    text("last Feed : " + lastFed + "Am",340,500)
  }

  text("Milk bottles Left : ", 340, 550)
  text(foodS, 540, 550)

 
    
 
  milk.display();
}



function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  x = x + 1


  database.ref('/').update({
    food : x
  })

}

function feedDog(){
  Dog.addImage(img2);

Dog.x = 80
Dog.y = 100

  foodS = foodS - 1

  

  //foodObj.updateFoodStock(foodObj.getFoodStock()-1);

  database.ref('/').update({
   Food:foodS,
   fedTime : hour()
  })
}

function addFoods(){
  foodS++;

 Dog.x = 420
 Dog.y = 320

  database.ref('/').update({
  Food : foodS,
  })
  Dog.addImage(img);
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var jsondat = await response.json();

  var dayTime = jsondat.datetime;
  var hour = dayTime.slice(11,13);
  console.log(hour);
 return hour;

//prompt("Please name your pet","")


}

function Name(){
 Input = createInput()
 Input.position(750,135);
submit = createButton("Submit");
submit.position(930,135)
submit.mousePressed(ss)
}

function ss(){
   name = Input.value()
  greeting.html("Your Pet name is : " + name)
  greeting.position(600,20)
  Input.hide()
submit.hide()
}

function hide(){
  Input.hide()
submit.hide();
}








