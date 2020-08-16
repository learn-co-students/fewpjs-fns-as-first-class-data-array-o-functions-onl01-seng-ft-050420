function wakeDog(dogName, dogBreed) {
    let a = `Wake ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }
  
  function leashDog(dogName, dogBreed) {
    let a = `Leash ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }

  function walkToPark(dogName, dogBreed) {
    let a = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }

  function throwFrisbee(dogName, dogBreed) {
    let a = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
    
  }

  function walkHome(dogName, dogBreed) {
    let a = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }

  function unleashDog(dogName, dogBreed) {
    let a = `Unleash ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }


let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
  ]
  
  function exerciseDog(dogName, dogBreed){
    let new_array = []
    for(let i=0; i < routine.length; i++){
      new_array += routine[i](dogName, dogBreed);
    }
    return new_array
  }