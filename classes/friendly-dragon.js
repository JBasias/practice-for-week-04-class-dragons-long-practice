// Your code here

const Dragon = require('./dragon');

//Dragon = drag.Dragon;


class FriendlyDragon extends Dragon
{


    constructor(name, color, lifeGoals, friend)
    {
        super(name, color);


        //this.lifeGoals = [];
        this.lifeGoals = lifeGoals;






        this.friend = friend;

    }

    hasLifeGoals()
    {
        this.lifeGoals.forEach(ele => {

            console.log(`${this.name} likes to ${ele}`);

        });
    }

    helpsPeople()
    {

        return(`${this.name} helps their friend ${this.friend}`);

    }
}


module.exports = FriendlyDragon;


/*

const puff = new FriendlyDragon(
    "Puff",
    "green",
    [
      "live by the sea",
      "frolick in the autumn mist",
      "help small children"
    ],
    "Jackie Paper"
  );
  console.log(puff);
  console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
  puff.hasLifeGoals();
  console.log(puff.helpsPeople());
*/

//console.log("Astros!");
