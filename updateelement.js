
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

const car10=new car(73,'tata','black')


     function update(car){

        const updateindex=car4.findIndex(a => (a.regno === car.regno))

        if(updateindex!=-1){
            car4[updateindex]=car
            console.log(car4)
        }
        else
        {
            console.log("Plese enter the car regno that is present in the given array")
        }
     }

update(car10)