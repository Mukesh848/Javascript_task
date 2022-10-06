//wwith the help of classes 

class car
{
    constructor(regno , brand , colour)
    {
this.regno=regno;
this.brand=brand;
this.colour=colour;
    }
}

// const car1=new car(73,'audi')
// const car2=new car(75,'mercedes')
// const car3=new car(80,'renault')
// const car5=new car(80,'renault')



// const carv2=[car1 , car2]

// function add(car){
//     var check;
//         carv2.forEach(a => { 
//             if(a.regno===car.regno)
//                 { check=1;
//                 console.log("element is already present ")}})
//             if(check===undefined){
//                 carv2.push(car)
//                 console.log(carv2)
//             }
//            
// }

// add(car3)
// add(car5)





const car1=new car(73,'audi','white')
const car2=new car(75,'mercedes','red')
const car3=new car(80,'renault','blue')

const car4=[car1 , car2 , car3]


function delelement(car){
     let targetindex=car4.findIndex(a => a.regno===car.regno)
     if(targetindex!=-1){

         car4.splice(targetindex , 1)
         console.log(car4)
     }
     else 
     {
         console.log("please enter the regno which is present in the array")
     }}

     delelement(car2)

// const car10=new car(1,'tata','black')


//      function update(car){

//         const updateindex=car4.findIndex(a => (a.regno === car.regno))

//         if(updateindex!=-1){
//             car4[updateindex]=car
//             console.log(car4)
//         }
//         else
//         {
//             console.log("Plese enter the car regno that is present in the given array")
//         }
//      }

// update(car10)
    



