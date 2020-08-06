console.log("Wake Byron the poodle");
console.log("Leash Byron the poodle");
console.log("Walk to the park with Byron the poodle");
console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle");

const wakeDog = (dogName, dogBreed) => {
    const statement = `Wake ${dogName} the ${dogBreed}`;
    console.log(statement);
    return statement;
};

const leashDog = (dogName, dogBreed) => {
    const statement = `Leash ${dogName} the ${dogBreed}`;
    console.log(statement);
    return statement;
};

const walkToPark = (dogName, dogBreed) => {
    const statement = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(statement);
    return statement;
};

const throwFrisbee = (dogName, dogBreed) => {
    const statement = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(statement);
    return statement;
};

const walkHome = (dogName, dogBreed) => {
    const statement = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(statement);
    return statement;
};

const unleashDog = (dogName, dogBreed) => {
    const statement = `Unleash ${dogName} the ${dogBreed}`;
    console.log(statement);
    return statement;
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (dogName, dogBreed) => {
    return routine.map( e => e(dogName, dogBreed));
};