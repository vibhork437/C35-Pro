class Food{
        constructor(x,y,foodStock,lastFed){
       // var foodStock = 0;
        //var lastFed;
        this.image = loadImage("Milk.png");
        }


updateFoodStock(x){
    if(x>=20){
        x = 20
    }else{
       x = x + 1
    }
    firebase.database().ref('/').update({
        Food : x
    });
}


deductFood(){
   if(x<=0){
    x = 0
   }else{
    x = x - 1
   }
   firebase.database().ref('/').update({
    Food : x
});

    }



getfoodStock(){
    return this.foodStock;
}

display(){

    //addFoods();

    var x = 80 , y = 100

    imageMode(CENTER);
    //image(this.image,20,220,70,70);

    if(this.foodS != 0){
        for(var i = 0 ; i < foodS ; i++){
            if(i%10==0){
                x = 40
                y = y + 50
            }

            image(this.image, x, y, 50, 50);
            x = x + 30
        }
    }
}
};