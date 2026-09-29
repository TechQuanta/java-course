# 🧬 Java Inheritance: Advanced Concepts
---
Inheritance in Java is one of the key features of Object-Oriented Programming (OOP) that allows a class to inherit methods and fields from another class. This enhances reusability and supports polymorphism and dynamic method binding.

<br/>

## 1. 🏠 **Basic Inheritance (Extending a Class)**

Inheritance allows a subclass to inherit fields and methods from a superclass. The subclass can also add new methods or override the existing methods.
<br/>

### Theory:

- **`extends`** keyword is used to inherit properties and behaviors from a superclass.
- A subclass can inherit all non-private members (fields and methods) from its superclass.
- Subclasses can add their own methods or override inherited methods to provide specific functionality.
<br/>

### Example:

<div class="code-container">
  <pre><code class="language-java">
    class Animal {
        void eat() {
            System.out.println("Eating...");
        }
    }
    class Dog extends Animal {
        void bark() {
            System.out.println("Barking...");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Dog dog = new Dog();
            dog.eat();  // Inherited from Animal
            dog.bark(); // Defined in Dog
        }
    }
  </code></pre>
</div>


**Key Points**:
- `Dog` inherits the `eat()` method from `Animal`.
- `Dog` adds its own `bark()` method.
- This is an example of **single inheritance**.

<br/>

## 2. 🧑‍💻 **Single Inheritance (extends keyword)**

In Java, a class can only extend one other class, which makes Java a **single inheritance** language.
<br/>

### Theory:

- **Single inheritance** allows a class to inherit from only one superclass. 
- It supports the reuse of code, making it easier to build on top of existing functionality.

<br/>

### Example:

<div class="code-container">
  <pre><code class="language-java">
    class Vehicle {
        void drive() {
            System.out.println("Driving...");
        }
    }
    class Car extends Vehicle {
        void honk() {
            System.out.println("Honking...");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Car car = new Car();
            car.drive(); // Inherited from Vehicle
            car.honk();  // Defined in Car
        }
    }
  </code></pre>
</div>


**Key Points**:
- `Car` extends `Vehicle` and inherits the `drive()` method.
- This is a clear example of single inheritance in Java.


<br/>


## 3. 🔄 **Multiple Inheritance via Interfaces**

Although Java does not support multiple inheritance with classes, it supports multiple inheritance via **interfaces**. A class can implement multiple interfaces.

<br/>

### Theory:

- **`implements`** keyword allows a class to inherit behavior from multiple interfaces.
- Interfaces only provide method signatures, so the implementing class must provide the actual method definitions.

<br/>

### Example:

<div class="code-container">
  <pre><code class="language-java">
    interface Animal {
        void eat();
    }
    interface Pet {
        void play();
    }
    class Dog implements Animal, Pet {
        public void eat() {
            System.out.println("Dog is eating...");
        }
        public void play() {
            System.out.println("Dog is playing...");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Dog dog = new Dog();
            dog.eat();  // From Animal interface
            dog.play();  // From Pet interface
        }
    }
  </code></pre>
</div>


**Key Points**:
- `Dog` implements both `Animal` and `Pet` interfaces.
- Java allows **multiple inheritance through interfaces** only, not through classes.

<br/>

## 4. ⚠️ **The Diamond Problem in Java**

The **Diamond Problem** arises in languages that support multiple inheritance, where a class inherits from two classes that have a common ancestor, causing ambiguity in method calls. Java avoids this problem using **interfaces**.

<br/>

### Theory:

- Java does not allow multiple inheritance of classes to avoid the **Diamond Problem**.
- However, if multiple interfaces extend a common interface, the implementing class can still inherit methods from both interfaces.
- If the method in the interface is ambiguous, Java uses **default methods** to resolve conflicts.

<br/>

### Example:

<div class="code-container">
  <pre><code class="language-java">
    interface A {
        void methodA();
    }
    interface B extends A {
        void methodB();
    }
    interface C extends A {
        void methodC();
    }
    class D implements B, C {
        public void methodA() {
            System.out.println("methodA");
        }
        public void methodB() {
            System.out.println("methodB");
        }
        public void methodC() {
            System.out.println("methodC");
        }
    }
    public class Main {
        public static void main(String[] args) {
            D obj = new D();
            obj.methodA();
            obj.methodB();
            obj.methodC();
        }
    }
  </code></pre>
</div>


**Key Points**:
- Interface `B` and `C` both extend interface `A`.
- Class `D` implements both interfaces, avoiding the Diamond Problem.

<br/>

## 5. 🧩 **Method Overloading vs. Method Overriding**

In Java, method overloading and method overriding are key concepts related to polymorphism.
<br/>

### Theory:

- **Method Overloading** occurs at **compile-time** and involves defining multiple methods with the same name but different parameter types or numbers.
- **Method Overriding** occurs at **runtime** and involves redefining a superclass method in the subclass.

### Method Overloading Example:

<div class="code-container">
  <pre><code class="language-java">
    class Calculator {
        int add(int a, int b) {
            return a + b;
        }
        double add(double a, double b) {
            return a + b;
        }
    }
    public class Main {
        public static void main(String[] args) {
            Calculator calc = new Calculator();
            System.out.println(calc.add(10, 20));    // int version
            System.out.println(calc.add(10.5, 20.5)); // double version
        }
    }
  </code></pre>
</div>


**Key Points**:
- Overloading is resolved at **compile-time** based on the method signature.

### Method Overriding Example:

<div class="code-container">
  <pre><code class="language-java">
    class Animal {
        void sound() {
            System.out.println("Some sound");
        }
    }
    class Dog extends Animal {
        @Override
        void sound() {
            System.out.println("Barks");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Animal animal = new Dog();
            animal.sound();  // Output: Barks
        }
    }
  </code></pre>
</div>


**Key Points**:
- Overriding is resolved at **runtime** based on the actual object type.

<br/>

## 6. 🏗️ **Constructor Inheritance**

Constructors are not inherited in Java, but the subclass can invoke the superclass constructor using the **`super()`** keyword.

<br/>

### Theory:

- Subclasses cannot inherit constructors from the superclass.
- To call a constructor from the superclass, the subclass can use `super()` inside its own constructor.

<br/>

### Example:

<div class="code-container">
  <pre><code class="language-java">
    class Animal {
        Animal() {
            System.out.println("Animal is created");
        }
    }
    class Dog extends Animal {
        Dog() {
            super();  // Calls Animal constructor
            System.out.println("Dog is created");
        }
    }
    public class Main {
        public static void main(String[] args) {
            Dog dog = new Dog();  // Output: Animal is created \n Dog is created
        }
    }
  </code></pre>
</div>


**Key Points**:
- The `Dog` constructor calls the `Animal` constructor using `super()`.

<br/>


## 7. 🔧 **Super Keyword in Inheritance**

The `super` keyword is used to refer to the superclass and can be used to:
- Call a superclass method.
- Access a superclass constructor.
- Access a superclass field.

<br/>

### Example:

<div class="code-container">
  <pre><code class="language-java">
    class Animal {
        String name = "Animal";
        void speak() {
            System.out.println("Animal speaking...");
        }
    }
    class Dog extends Animal {
        String name = "Dog";
        void printNames() {
            System.out.println("Name in Dog class: " + name);
            System.out.println("Name in Animal class: " + super.name);
        }
    }
    public class Main {
        public static void main(String[] args) {
            Dog dog = new Dog();
            dog.printNames();  // Output: Name in Dog class: Dog \n Name in Animal class: Animal
        }
    }
  </code></pre>
</div>


**Key Points**:
- `super.name` refers to the field `name` from the superclass (`Animal`).
- The `super()` keyword can also call a constructor from the superclass.

<br/>

## 8. 🧠 **Summary**
<br/>

1. **Basic Inheritance**: 
   - Subclass inherits from superclass using the `extends` keyword.
   - Subclasses can override or add new methods.
   
2. **Single Inheritance**: 
   - Java allows a class to extend only one class, making it a **single inheritance** language.

3. **Multiple Inheritance (via Interfaces)**: 
   - Java supports multiple inheritance using interfaces, where a class can implement multiple interfaces using the `implements` keyword.

4. **Constructor Inheritance**: 
   - Constructors are not inherited but can be called from the subclass using `super()`.

5. **Method Overriding**: 
   - Subclasses can override superclass methods to provide specific functionality.

6. **Access Modifiers in Inheritance**: 
   - Inherited methods and fields can have different access levels (`public`, `protected`, `private`).

7. **Polymorphism**: 
   - Inheritance enables polymorphism where the subclass can be treated as an instance of the superclass.

8. **The `super` Keyword**: 
   - Used to call superclass methods and constructors.

9. **The `this` Keyword**: 
   - Refers to the current instance of the class.

10. **Method Overloading**: 
    - A form of polymorphism where multiple methods have the same name but different parameter lists.
