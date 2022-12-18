/* Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal */

//Objects
{
    console.log("Objects\n____________________")
    let animal = {
        move: true,
        sayMove(){
            console.log(`Animal is moving? ${this.move}`);
        }
    };
    let cat = {
        __proto__: animal, //inheritance
        isFine: true, //something new
        sayMove(){ // change method
            console.log(`Cat is moving? ${this.move}`); 
        }
    };
    animal.sayMove();
    cat.sayMove();
    cat.move = false; // change cat's property
    animal.sayMove();
    cat.sayMove();
}


// Classes *bonus
{
    console.log("_____________________\nClasses\n____________________")
    class Animal{
        constructor(name){
            this.name = name;
            this.move = true;
        }
        sayMove(){
            console.log(`${this.name} is moving? ${this.move}`)
        }
    };
    class Cat extends Animal{
        constructor(name){
            super(name);
            this.isFine = true;
        }
    };
    let koshka = new Cat('Мурка');
    koshka.sayMove();
}