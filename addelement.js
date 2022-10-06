class car
{
    constructor(regno , brand , colour)
    {
this.regno=regno;
this.brand=brand;
this.colour=colour;
    }
}

const car1=new car(73,'audi')
const car2=new car(75,'mercedes')
const car3=new car(80,'renault')
const car5=new car(82,'renault')



const carv2=[car1 , car2]

function add(car){
    var check;
        carv2.forEach(a => { 
            if(a.regno===car.regno)
                { check=1;
                console.log("element is already present ")}})
            if(check===undefined){
                carv2.push(car)
                console.log(carv2)
            }
           
}

add(car3)
add(car5)