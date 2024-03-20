// Code your solution in this file!
      //2) returns a distance in blocks
 
     //3) calculates distances below 42nd street
const hQ = 42;
const feet = 264;
function distanceFromHqInBlocks(pickUp) {
    let distance = pickUp - hQ;
    return Math.abs(distance)
}
distanceFromHqInBlocks();
   //returns a distance in feet
   // calculates distances below 42nd street

function distanceFromHqInFeet(pickUp) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUp);
    return distanceInBlocks * feet;
        
}
distanceFromHqInFeet();

//returns the distance travelled in feet
//returns a distance in feet
//returns distance when destination is below distance
function distanceTravelledInFeet(begin, destination) {
    return Math.abs(destination - begin) * feet;
 }
 distanceFromHqInFeet();
//1) gives customers a free sample
//2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//3) charges 25 dollars for a distance over 2000 feet
//4) does not allow rides over 2500 feet

function calculatesFarePrice(begin, destination) {
    const distance = distanceTravelledInFeet(begin, destination);

    if (distance <= 400){
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return `cannot travel that far`;
    }
}
calculatesFarePrice();