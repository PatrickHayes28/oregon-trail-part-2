/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Classes here.

// below is code for the traveler 
class Traveler{
constructor(name){
    this.name = name;
    this.food = 1;
    this.isHealthy = true
}
    hunt() {
    return this.food += 2
    }
    
    eat() {
    if (this.food <= 0){ //if food is empty 
    this.isHealthy = false //the traveler is not healthy 
    return this.food // if false the traveler still has food
    }
    return this.food -=1 //if food is not empty then subtract 1 food
    }
   }
// below is the inheritance code for traveler 
   class Hunter extends Traveler{
    constructor(name, food = 2, isHealthy = true){
    super(name)
    this.food = food;
    this.isHealthy = isHealthy
 }
    //prototype 1 of the hunter is hunt 
    hunt(){ //this gives the hunter 5 food 
        this.food += 5;
        return this.food;
    }
    // the 2nd prototype of hunter is she eats twice as much food as a normal traveler 
    eat(){
        if (this.food >= 2){ //if food is greater than 2 
            this.food -= 2;//the hunter eats 2 food
        }else if (this.food === 1){ // if only 1 food 
            this.food -= 1;         //the hunter eats 1 food 1-1= 0
            this.isHealthy = false  // the hunter becomes sick because food is 0
        }else if (this.food <= 0) { 
          this.food = 0;          //if there is no food
          this.isHealthy = false // the hunter is sick
        } 
    }
    // the 3rd prototype of the hunter is she can give food to other travelers 
    giveFood(traveler,numOfFoodUnits){ 
        if (this.food >= numOfFoodUnits){ // if food is not empty 
         this.food -= numOfFoodUnits //subtract the hunter's food from the numOfFoodUnits being asked to gives
         traveler.food += numOfFoodUnits // add the numOfFoodUnits to the traveler's food
        }
     }
  }
// below is creating a doctor 
   class Doctor extends Traveler{
     constructor (name){
       super(name)
       this.isHealthy= true 
     this.food = 1
     }
     // the doctor's only prototype is heal 
    heal(traveler){ // heals travelers 
        if (traveler.isHealthy === false){ //if isHealthy is false
            return traveler.isHealthy = true // turn isHealthy to true
        }
    }
   } 

   // below is the code for the wagon 
   class Wagon{
        constructor(capacity){
            this.capacity = capacity; //capacity is a parameter where we will pass in a value of 2
        this.passengers = []; // passengers will initially be a empty array that will fill up with our travelers
        }
        // this checks for available seats on the wagon  
        getAvailableSeatCount() { 
          let availableSeats = this.capacity - this.passengers.length
          return availableSeats
        }
        // this is adding passengers to the wagon
        join (Traveler) {
          if (this.getAvailableSeatCount()>0) { //wagon is provided the seats when called so if the provided seat number is greater than 0 it will add the passenger until all seats are full
            this.passengers.push(Traveler)
            console.log(`${Traveler.name} is boarding!`)
          } else {
            console.log ("wagon is full!")
          }
        }
    //this is checking if a passenger is sick. if sick then quarantine
    shouldQuarantine(){
      for (let i = 0;i < this.passengers.length; i += 1){ //
        let Traveler = this.passengers[i]
        if(Traveler.isHealthy === false){ //if travelers are not healthy 
          return true // should quarantine 
        }
      }return false // should not quarantine if travelers are healthy 
      
    }

    //ths is adding up all of the food that the passengers put in the wagon 
    totalFood(){
      let foodTotal = 0
      for (let i = 0;i <this.passengers.length; i += 1){ 
        let traveler = this.passengers[i].food
            foodTotal += traveler; // adding the passengers food to the food total 
            
       }return foodTotal //returning the sum of the total food 
    }
    }