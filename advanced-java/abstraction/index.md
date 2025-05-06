# ✨ Advanced Abstraction in Java
---

Abstraction is one of the four main pillars of Object-Oriented Programming (OOP) in Java. It allows programmers to define the *what* without specifying the *how*.



## 🔍 What is Abstraction?

Abstraction is the process of hiding the implementation details and showing only the essential functionality to the user.



## 🎯 Why Use Abstraction?

- Reduce complexity by hiding unnecessary implementation details
- Improve code reusability and maintainability
- Promote loose coupling between components


## ⚙️ How is Abstraction Achieved in Java?

There are **two primary ways** to implement abstraction in Java:

1. **Abstract Classes**
2. **Interfaces**



## 🧱 Abstract Classes

An abstract class:

- Is declared with the `abstract` keyword
- Can have abstract (no body) and non-abstract methods
- Cannot be instantiated
- Can contain constructors and instance variables

### 📄 Syntax

<div class="example">
  <pre><code class="language-java">
<span class="keyword">abstract</span> <span class="keyword">class</span> <span class="class-name">Vehicle</span> {
    <span class="keyword">abstract</span> <span class="keyword">void</span> <span class="function-name">start</span>();
    <span class="keyword">void</span> <span class="function-name">fuel</span>() {
        <span class="class-name">System</span>.<span class="function-name">out</span>.<span class="function-name">println</span>(<span class="string">"Refueling..."</span>);
    }
}
  </code></pre>
</div>


### 🧪 Example

<div class="example">
  <pre><code class="language-java">
<span class="keyword">abstract</span> <span class="keyword">class</span> <span class="class-name">Animal</span> {
    <span class="keyword">abstract</span> <span class="keyword">void</span> <span class="function-name">sound</span>();
    <span class="keyword">void</span> <span class="function-name">breathe</span>() {
        <span class="class-name">System</span>.<span class="function-name">out</span>.<span class="function-name">println</span>(<span class="string">"Breathing..."</span>);
    }
}

<span class="keyword">class</span> <span class="class-name">Dog</span> <span class="keyword">extends</span> <span class="class-name">Animal</span> {
    <span class="keyword">void</span> <span class="function-name">sound</span>() {
        <span class="class-name">System</span>.<span class="function-name">out</span>.<span class="function-name">println</span>(<span class="string">"Barks"</span>);
    }
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="class-name">TestAbstraction</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="class-name">String</span>[] <span class="variable-name">args</span>) {
        <span class="class-name">Animal</span> <span class="variable-name">obj</span> = <span class="keyword">new</span> <span class="class-name">Dog</span>();
        <span class="variable-name">obj</span>.<span class="function-name">sound</span>();   <span class="comment">// Output: Barks</span>
        <span class="variable-name">obj</span>.<span class="function-name">breathe</span>(); <span class="comment">// Output: Breathing...</span>
    }
}
  </code></pre>
</div>




## 🧾 Rules of Abstract Class

- If a class contains **at least one abstract method**, it must be declared abstract.
- Abstract classes **can** have constructors, static methods, and final methods.
- A class **extending** an abstract class must **implement** all abstract methods unless it is also abstract.



## 🎮 Interfaces

An interface:

- Is a reference type in Java similar to a class
- Can contain only abstract methods (Java 7 and earlier)
- From Java 8 onwards, **can include default and static methods**
- Supports **multiple inheritance**

### 📄 Syntax

<div class="example">
  <pre><code class="language-java">
<span class="keyword">interface</span> <span class="class-name">Drawable</span> {
    <span class="keyword">void</span> <span class="function-name">draw</span>();
}
  </code></pre>
</div>

### 🧪 Example

<div class="example">
  <pre><code class="language-java">
<span class="keyword">interface</span> <span class="class-name">Drawable</span> {
    <span class="keyword">void</span> <span class="function-name">draw</span>();
}

<span class="keyword">class</span> <span class="class-name">Circle</span> <span class="keyword">implements</span> <span class="class-name">Drawable</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">draw</span>() {
        <span class="class-name">System</span>.<span class="function-name">out</span>.<span class="function-name">println</span>(<span class="string">"Drawing Circle"</span>);
    }
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="class-name">TestInterface</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="class-name">String</span>[] <span class="variable-name">args</span>) {
        <span class="class-name">Drawable</span> <span class="variable-name">d</span> = <span class="keyword">new</span> <span class="class-name">Circle</span>();
        <span class="variable-name">d</span>.<span class="function-name">draw</span>(); <span class="comment">// Output: Drawing Circle</span>
    }
}
  </code></pre>
</div>




## 🌟 Java 8+ Interface Enhancements

Java 8 introduced **default** and **static** methods in interfaces.

### ✅ Default Methods

<div class="example">
<pre><code class="language-java">
interface MyInterface {
    default void show() {
        System.out.println("Default Show Method");
    }
}
</code></pre>
</div>

### ✅ Static Methods

<div class="example">
<pre><code class="language-java">
interface MyInterface {
    static void display() {
        System.out.println("Static Display Method");
    }
}
</code></pre>
</div>



## 🧬 Multiple Inheritance with Interfaces

Java does not allow multiple inheritance with classes but does support it using interfaces.

### 🧪 Example

<div class="example">
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
}
</code></pre>
</div>



## 🧪 Abstract Class vs Interface

| Feature                     | Abstract Class                        | Interface                              |
|----------------------------|----------------------------------------|-----------------------------------------|
| Abstraction Level          | 0% to 100%                             | 100% (Java 7), 0–100% (Java 8+)         |
| Methods                    | Can be abstract & concrete             | Abstract only (Java 7), default/static (Java 8+) |
| Constructors               | Yes                                    | No                                      |
| Instance Variables         | Yes                                    | Only constants (`public static final`)  |
| Multiple Inheritance       | Not supported                          | Supported                               |
| Access Modifiers           | Can be any                             | Methods are `public abstract` by default |
| Speed                      | Faster                                 | Slower                                  |



## 🔧 When to Use What?

| Use Case                                      | Abstract Class           | Interface               |
|----------------------------------------------|--------------------------|--------------------------|
| Common behavior with optional implementation | ✅ Yes                   | ❌ Not ideal             |
| Define type contract without implementation  | ❌ Not ideal             | ✅ Yes                   |
| Need multiple inheritance                    | ❌ Not supported         | ✅ Yes                   |
| Java 8+ with default behavior                | ✅ Partial use allowed   | ✅ Default/static allowed |



## 🌐 Real-world Analogy

| Concept         | Example                            |
|-----------------|-------------------------------------|
| Interface       | Remote Control (only buttons defined) |
| Abstract Class  | Vehicle template (has wheels, engine, but different movement) |
| Concrete Class  | Car, Bike (real object with complete behavior) |




## 🌉 Interfaces

An interface is a blueprint of a class. It has static constants and abstract methods. Java 8+ also allows default and static methods.



### 🔹 1. **Normal Interface**

These are typical interfaces with abstract methods.

#### ✅ Features:
- Only abstract methods (until Java 7)
- Implemented by classes using `implements`
- Cannot contain constructors

#### 🧪 Example:

<div class="example">
<pre><code class="language-java">
interface Shape {
    void draw();
    double area();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing Circle");
    }
    public double area() {
        return Math.PI * 5 * 5;
    }
}
</code></pre>
</div>



### 🔸 2. **Functional Interface**

A **functional interface** is an interface with only **one abstract method**, used primarily for **lambda expressions**.

#### ✅ Features:
- Annotated with `@FunctionalInterface`
- Can have default and static methods
- Introduced in Java 8

#### 🧪 Example:

<div class="example">
<pre><code class="language-java">
@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

public class LambdaExample {
    public static void main(String[] args) {
        Greeting greet = (name) -> System.out.println("Hello " + name);
        greet.sayHello("Alice");
    }
}
</code></pre>
</div>

#### ✅ Built-in Functional Interfaces in `java.util.function`:

| Interface     | Abstract Method     | Description                        |
|---------------|----------------------|------------------------------------|
| `Predicate<T>` | `test(T t)`          | Returns boolean                    |
| `Function<T,R>`| `apply(T t)`         | Returns transformed value          |
| `Consumer<T>`  | `accept(T t)`        | Consumes without return            |
| `Supplier<T>`  | `get()`              | Provides a value                   |



### 🔸 3. **Marker Interface**

A **marker interface** is an interface with **no methods** or **fields**. It is used to mark a class for special treatment by the JVM or frameworks.

#### ✅ Examples:
- `Serializable`
- `Cloneable`
- `Remote`

#### 🧪 Example:

<div class="example">
<pre><code class="language-java">
interface MyMarker {}

class MyClass implements MyMarker {
    // JVM or frameworks may treat this differently
}
</code></pre>
</div>

> ☝️ Marker interfaces are often checked using `instanceof` to determine if an object has a specific capability.



### 🔸 4. **Public Interface**

In Java, interfaces are `public` by default when declared in their own file.

#### ✅ Features:
- Accessible from any class
- Must be placed in a file with the same name

#### 🧪 Example:

```java
// File: Vehicle.java
public interface Vehicle {
    void run();
}

## 🧠 Key Takeaways

- **Abstraction** lets you define functionality without worrying about implementation.
- Java supports abstraction through **abstract classes** and **interfaces**.
- Use abstract classes for shared code.
- Use interfaces to define contracts and support multiple inheritance.
- Java 8+ gives more flexibility to interfaces with default and static methods.

---
