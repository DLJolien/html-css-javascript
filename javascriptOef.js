function Dog(name = "Hondje"){
    this.name = name;
}

Dog.prototype.wiggle = function(){
    console.log("Dog " + this.name + " is wiggling its tail.");
}

var hond1 = new Dog("Blackie");
hond1.wiggle();

