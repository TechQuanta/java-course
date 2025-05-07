# 🧬 Java Polymorphism
---
Polymorphism allows Java objects to take multiple forms. It enables objects to behave differently based on their actual runtime types, making code more flexible and extensible.

<br/>

## 1. ✅ Compile-Time Polymorphism (Method Overloading)

<div class="code-container">
<pre><code class="language-java">
class Adder {
    int add(int a, int b) {
        return a + b;
    }

```
double add(double a, double b) {
    return a + b;
}
```

} </code></pre>

</div>
<br/>

**Key Points**:

* Resolved at compile time
* Same method name, different parameter types or counts

<br/>

## 2. 🔄 Runtime Polymorphism (Method Overriding)

Runtime polymorphism, also known as method overriding, occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. The method to be executed is determined at runtime, based on the actual object type, not the reference type.

<div class="code-container">
<pre><code class="language-java">
class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    // Overriding the sound method
    void sound() {
        System.out.println("Barks");
    }
}

class Cat extends Animal {
    // Overriding the sound method
    void sound() {
        System.out.println("Meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        // The actual object type determines the method execution at runtime
        myAnimal.sound();  // Output: Some sound
        myDog.sound();     // Output: Barks
        myCat.sound();     // Output: Meows
    }
}
 </code></pre>

</div>

<br/>

**Key Points**:

* Resolved at runtime
* Overridden methods in subclass are invoked via superclass references

<br/>

## 3. 🧱 Polymorphism with Abstract Classes

Abstract classes allow partial implementation. They can have abstract methods (which must be implemented by subclasses) and concrete methods (which provide shared functionality). Polymorphism can be achieved by invoking methods of the subclass using a reference of the abstract class type.

<div class="code-container">
<pre><code class="language-java">
abstract class Vehicle {
    abstract void start();  // Abstract method, must be implemented by subclass
    void stop() {
        System.out.println("Vehicle is stopping...");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car is starting...");
    }
}

class Bike extends Vehicle {
    @Override
    void start() {
        System.out.println("Bike is starting...");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        Vehicle myBike = new Bike();
        myCar.start();  // Output: Car is starting...
        myBike.start(); // Output: Bike is starting...
        myCar.stop();   // Output: Vehicle is stopping...
    }
}
 </code></pre>

</div>

<br/>


## 4. 🔗 Interface-Based Polymorphism

Java interfaces allow classes to achieve polymorphism by defining methods that the implementing classes must provide. Interfaces support multiple inheritance, meaning a class can implement multiple interfaces.

<br/>

### a) Basic Interface Usage

<div class="code-container">
<pre><code class="language-java">
interface Shape {
    void draw();
    double area();
}

class Circle implements Shape {
public void draw() {
System.out.println("Drawing Circle");
}

```
public double area() {
    return Math.PI * 5 * 5;
}
```

} </code></pre>

</div>
<br/>

### b) Multiple Interface Implementation

<div class="code-container">
<pre><code class="language-java">
interface Printable {
    void print();
}

interface Showable {
void show();
}

class A implements Printable, Showable {
public void print() {
System.out.println("Printing...");
}
public void show() {
System.out.println("Showing...");
}
} </code></pre>

</div>

<br/>

### c) Default Methods

Java 8 introduced default methods in interfaces. A default method has a body, and it can be overridden by implementing classes, though it is not mandatory.

<div class="code-container">
<pre><code class="language-java">
interface MyInterface {
    default void show() {
        System.out.println("Default Show Method");
    }
}
</code></pre>
</div>

### d) Static Methods

Interfaces can also have static methods, which are not inherited by the implementing classes.

<div class="code-container">
<pre><code class="language-java">
interface MyInterface {
    static void display() {
        System.out.println("Static Display Method");
    }
}
</code></pre>
</div>


## 5. 🧪 Functional Interface & Lambda Expression

<div class="code-container">
<pre><code class="language-java">
@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

public class LambdaExample {
public static void main(String\[] args) {
Greeting greet = (name) -> System.out.println("Hello " + name);
greet.sayHello("Alice");
}
} </code></pre>

</div>



## 6. 🏛️ Marker Interfaces (Tagging)

<div class="code-container">
<pre><code class="language-java">
interface MyMarker {}

class MyClass implements MyMarker {
// JVM or frameworks may treat this differently
} </code></pre>

</div>

<br/>

## 🧠 Summary
<br/>

* **Polymorphism** lets the same interface behave differently based on the object.
* **Compile-time polymorphism**: Method overloading
* **Runtime polymorphism**: Method overriding
* **Abstract classes** offer partial abstraction
* **Interfaces** support multiple inheritance and default/static methods
* **Lambdas** leverage polymorphism via functional interfaces
* **Marker interfaces** are used for metadata tagging (e.g., `Serializable`)

