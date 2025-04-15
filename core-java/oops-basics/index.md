<style>
.section {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section h2 {
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
}

.section pre {
    background-color: #2d2d2d;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-family: Consolas, 'Courier New', monospace;
    margin-top: 10px;
}

.section code {
    font-size: 14px;
}

.section ul {
    padding-left: 20px;
}

.section ul li {
    margin: 5px 0;
}
</style>

# Java OOP Concepts

## Introduction to OOP

Object-Oriented Programming (OOP) is a programming paradigm that is based on the concept of objects, which have both data and behavior. Java is one of the most widely used object-oriented programming languages. The key principles of OOP are:

- **Encapsulation**
- **Inheritance**
- **Polymorphism**
- **Abstraction**

---

<div class="section">
    <h2>1. Classes and Objects</h2>
    <p>A <strong>class</strong> is a blueprint or prototype from which objects are created. It defines the properties (fields) and behaviors (methods) that the objects created from the class will have.</p>
    <h3>Example</h3>
    <pre><code>
class Car {
    String model;
    int year;
    void startEngine() {
        System.out.println("Engine started");
    }
}
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.model = "Toyota";
        car1.year = 2021;
        car1.startEngine();
    }
}
    </code></pre>
</div>

---

<div class="section">
    <h2>2. Encapsulation</h2>
    <p>Encapsulation means binding the data (variables) and the code acting on the data (methods) together as a single unit. It’s achieved using <code>private</code> access modifiers and public getters/setters.</p>
    <pre><code>
class Person {
    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
    </code></pre>
</div>

---

<div class="section">
    <h2>3. Inheritance</h2>
    <p>Inheritance allows one class to inherit fields and methods from another class using the <code>extends</code> keyword.</p>
    <pre><code>
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}
    </code></pre>
</div>

---

<div class="section">
    <h2>4. Polymorphism</h2>
    <p><strong>Polymorphism</strong> allows methods to behave differently based on the object that is invoking them.</p>
    <h4>Method Overloading</h4>
    <pre><code>
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
}
    </code></pre>
    <h4>Method Overriding</h4>
    <pre><code>
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
    </code></pre>
</div>

---

<div class="section">
    <h2>5. Abstraction</h2>
    <p>Abstraction means hiding internal details and showing only the functionality. It is achieved using <code>abstract</code> classes and <code>interfaces</code>.</p>
    <h4>Using Abstract Class</h4>
    <pre><code>
abstract class Animal {
    abstract void sound();
}
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
    </code></pre>
    <h4>Using Interface</h4>
    <pre><code>
interface Animal {
    void sound();
}
class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}
    </code></pre>
</div>

---

<div class="section">
    <h2>6. Constructors</h2>
    <p>A constructor initializes an object. Java supports <strong>default</strong> and <strong>parameterized</strong> constructors.</p>
    <pre><code>
class Car {
    String model;
    int year;
    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}
    </code></pre>
</div>

---

## ✅ Conclusion

By mastering these Java OOP principles:

- You’ll write **clean**, **reusable**, and **scalable** code.
- Use **abstract** keyword with both abstract classes and abstract methods.
- Understand how interfaces allow **multiple inheritance**.

This guide gives a complete foundation to Object-Oriented Programming in Java—perfect for your course! 🎓
