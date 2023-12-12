const Dragon = require('./dragon');

//Dragon = drag.Dragon;

class EvilDragon extends Dragon{

    constructor(name, color, evilDoings, nemesis)
    {
        super(name,color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner()
    {
        this.evilDoings.forEach(ele => {

            console.log(`${this.name} will ${ele}`);

        });
    }

    burnsNemesis()
    {
        return(`${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`);
    }



}

const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
      "spit a fireball at Steve",
      "rule over all the Endermen",
      "destroy all blocks in its way"
    ],
    "Steve"
  );
  console.log(enderDragon);
  enderDragon.dontInviteThemOverForDinner();
  console.log(enderDragon.breathesFire());
  console.log(enderDragon.burnsNemesis());

module.exports  = EvilDragon;


// Your code here
