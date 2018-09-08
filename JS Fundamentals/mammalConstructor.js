// **Creating constructor Mammal**
function Mammal(name){
  this.name = name;
  this.offspring = [];
}

// // **Adding constructor methods**
Mammal.prototype.sayHello = function(){
  return "My name is "+ this.name + "!";
  // return "My name is Joe!";
}

Mammal.prototype.haveBaby = function(){
      // // **creates an object with specified object's properties and prototype**
  var child = Object.create(Mammal.prototype);
  //Mammal.prototype has name, offspring, sayHello() and haveBaby() properties
  child.name = "Baby " + this.name; //auto updating the name property of child
  this.offspring.push(child); //adds child to offspring array
  return child;
}

// // **this makes cat another mammal constructor //this is constructor syntax**
function Cat(name, color){
  Mammal.call(this, name);
  // // **Using this, you're making another constructor**
  // // **Adding desired additional properties specific to Cat below**
  this.color = color;
}

// // **Shadowing**
Cat.prototype = Object.create(Mammal.prototype);//creates an object with specified object's properties and prototype
Cat.prototype.constructor = Cat; //when using Object.create, the instance's constructor is lost, this adds it back

// // **Polymorphism - overriding inherited methods**
Cat.prototype.haveBaby = function(color){
  var catInstance = new Cat("Baby " + this.name, color); //creating a baby instance using "new" operator
  this.offspring.push(catInstance); //adding baby into offspring array
  return catInstance;
}
