class car
{
    constructor(regno , brand , colour)
    {
this.regno=regno;
this.brand=brand;
this.colour=colour;
    }
}


const car1=new car(73,'audi','white')
const car2=new car(75,'mercedes','red')
const car3=new car(80,'renault','blue')

const car4=[car1 , car2 , car3]


function delElement(car){
     let targetindex=car4.findIndex(a => a.regno===car.regno)
     if(targetindex!=-1){

         car4.splice(targetindex , 1)
         console.log(car4)
     }
     else 
     {
         console.log("please enter the regno which is present in the array")
     }}

     delElement(car2)