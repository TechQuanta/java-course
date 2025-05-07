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
    <span class="keyword">class</span> <span class="classname">Animal</span> {
        <span class="keyword">void</span> <span class="function-name">eat</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Eating..."</span>);
        }
    }
    <span class="keyword">class</span> <span class="classname">Dog</span> <span class="keyword">extends</span> <span class="classname">Animal</span> {
        <span class="keyword">void</span> <span class="function-name">bark</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Barking..."</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Dog</span> <span class="variable-name">dog</span> = <span class="keyword">new</span> <span class="classname">Dog</span>();
            <span class="variable-name">dog</span>.<span class="function-name">eat</span>();  <span class="comment">// Inherited from Animal</span>
            <span class="variable-name">dog</span>.<span class="function-name">bark</span>(); <span class="comment">// Defined in Dog</span>
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
    <span class="keyword">class</span> <span class="classname">Vehicle</span> {
        <span class="keyword">void</span> <span class="function-name">drive</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Driving..."</span>);
        }
    }
    <span class="keyword">class</span> <span class="classname">Car</span> <span class="keyword">extends</span> <span class="classname">Vehicle</span> {
        <span class="keyword">void</span> <span class="function-name">honk</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Honking..."</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Car</span> <span class="variable-name">car</span> = <span class="keyword">new</span> <span class="classname">Car</span>();
            <span class="variable-name">car</span>.<span class="function-name">drive</span>(); <span class="comment">// Inherited from Vehicle</span>
            <span class="variable-name">car</span>.<span class="function-name">honk</span>();  <span class="comment">// Defined in Car</span>
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
    <span class="keyword">interface</span> <span class="classname">Animal</span> {
        <span class="keyword">void</span> <span class="function-name">eat</span>();
    }
    <span class="keyword">interface</span> <span class="classname">Pet</span> {
        <span class="keyword">void</span> <span class="function-name">play</span>();
    }
    <span class="keyword">class</span> <span class="classname">Dog</span> <span class="keyword">implements</span> <span class="classname">Animal</span>, <span class="classname">Pet</span> {
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">eat</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Dog is eating..."</span>);
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">play</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Dog is playing..."</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Dog</span> <span class="variable-name">dog</span> = <span class="keyword">new</span> <span class="classname">Dog</span>();
            <span class="variable-name">dog</span>.<span class="function-name">eat</span>();  <span class="comment">// From Animal interface</span>
            <span class="variable-name">dog</span>.<span class="function-name">play</span>();  <span class="comment">// From Pet interface</span>
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
    <span class="keyword">interface</span> <span class="classname">A</span> {
        <span class="keyword">void</span> <span class="function-name">methodA</span>();
    }
    <span class="keyword">interface</span> <span class="classname">B</span> <span class="keyword">extends</span> <span class="classname">A</span> {
        <span class="keyword">void</span> <span class="function-name">methodB</span>();
    }
    <span class="keyword">interface</span> <span class="classname">C</span> <span class="keyword">extends</span> <span class="classname">A</span> {
        <span class="keyword">void</span> <span class="function-name">methodC</span>();
    }
    <span class="keyword">class</span> <span class="classname">D</span> <span class="keyword">implements</span> <span class="classname">B</span>, <span class="classname">C</span> {
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">methodA</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"methodA"</span>);
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">methodB</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"methodB"</span>);
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">methodC</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"methodC"</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">D</span> <span class="variable-name">obj</span> = <span class="keyword">new</span> <span class="classname">D</span>();
            <span class="variable-name">obj</span>.<span class="function-name">methodA</span>();
            <span class="variable-name">obj</span>.<span class="function-name">methodB</span>();
            <span class="variable-name">obj</span>.<span class="function-name">methodC</span>();
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
    <span class="keyword">class</span> <span class="classname">Calculator</span> {
        <span class="keyword">int</span> <span class="function-name">add</span>(<span class="keyword">int</span> <span class="variable-name">a</span>, <span class="keyword">int</span> <span class="variable-name">b</span>) {
            <span class="keyword">return</span> <span class="variable-name">a</span> <span class="operator">+</span> <span class="variable-name">b</span>;
        }
        <span class="keyword">double</span> <span class="function-name">add</span>(<span class="keyword">double</span> <span class="variable-name">a</span>, <span class="keyword">double</span> <span class="variable-name">b</span>) {
            <span class="keyword">return</span> <span class="variable-name">a</span> <span class="operator">+</span> <span class="variable-name">b</span>;
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Calculator</span> <span class="variable-name">calc</span> = <span class="keyword">new</span> <span class="classname">Calculator</span>();
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="variable-name">calc</span>.<span class="function-name">add</span>(<span class="number">10</span>, <span class="number">20</span>));    <span class="comment">// int version</span>
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="variable-name">calc</span>.<span class="function-name">add</span>(<span class="number">10.5</span>, <span class="number">20.5</span>)); <span class="comment">// double version</span>
        }
    }
  </code></pre>
</div>


**Key Points**:
- Overloading is resolved at **compile-time** based on the method signature.

### Method Overriding Example:

<div class="code-container">
  <pre><code class="language-java">
    <span class="keyword">class</span> <span class="classname">Animal</span> {
        <span class="keyword">void</span> <span class="function-name">sound</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Some sound"</span>);
        }
    }
    <span class="keyword">class</span> <span class="classname">Dog</span> <span class="keyword">extends</span> <span class="classname">Animal</span> {
        <span class="annotation">@Override</span>
        <span class="keyword">void</span> <span class="function-name">sound</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Barks"</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Animal</span> <span class="variable-name">animal</span> = <span class="keyword">new</span> <span class="classname">Dog</span>();
            <span class="variable-name">animal</span>.<span class="function-name">sound</span>();  <span class="comment">// Output: Barks</span>
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
    <span class="keyword">class</span> <span class="classname">Animal</span> {
        <span class="classname">Animal</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Animal is created"</span>);
        }
    }
    <span class="keyword">class</span> <span class="classname">Dog</span> <span class="keyword">extends</span> <span class="classname">Animal</span> {
        <span class="classname">Dog</span>() {
            <span class="keyword">super</span>();  <span class="comment">// Calls Animal constructor</span>
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Dog is created"</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Dog</span> <span class="variable-name">dog</span> = <span class="keyword">new</span> <span class="classname">Dog</span>();  <span class="comment">// Output: Animal is created \n Dog is created</span>
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
    <span class="keyword">class</span> <span class="classname">Animal</span> {
        <span class="variable-name">String</span> <span class="variable-name">name</span> = <span class="string">"Animal"</span>;
        <span class="keyword">void</span> <span class="function-name">speak</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Animal speaking..."</span>);
        }
    }
    <span class="keyword">class</span> <span class="classname">Dog</span> <span class="keyword">extends</span> <span class="classname">Animal</span> {
        <span class="variable-name">String</span> <span class="variable-name">name</span> = <span class="string">"Dog"</span>;
        <span class="keyword">void</span> <span class="function-name">printNames</span>() {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Name in Dog class: "</span> + <span class="variable-name">name</span>);
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Name in Animal class: "</span> + <span class="keyword">super</span>.<span class="variable-name">name</span>);
        }
    }
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Dog</span> <span class="variable-name">dog</span> = <span class="keyword">new</span> <span class="classname">Dog</span>();
            <span class="variable-name">dog</span>.<span class="function-name">printNames</span>();  <span class="comment">// Output: Name in Dog class: Dog \n Name in Animal class: Animal</span>
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
