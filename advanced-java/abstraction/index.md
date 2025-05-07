# ✨ Advanced Abstraction in Java
---

Abstraction is one of the four main pillars of Object-Oriented Programming (OOP) in Java. It allows programmers to define the *what* without specifying the *how*.



## 🔍 What is Abstraction?

Abstraction is the process of hiding the implementation details and showing only the essential functionality to the user.



## 🎯 Why Use Abstraction?

- Reduce complexity by hiding unnecessary implementation details
- Improve code reusability and maintainability
- Promote loose coupling between components


<br/>

## ⚙️ How is Abstraction Achieved in Java?

There are **two primary ways** to implement abstraction in Java:
1. **Abstract Classes**
2. **Interfaces**


<br/>

## 🧱 Abstract Classes

An abstract class:

- Is declared with the `abstract` keyword
- Can have abstract (no body) and non-abstract methods
- Cannot be instantiated
- Can contain constructors and instance variables

<br/>

### 📄 Syntax

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">abstract</span> <span class="keyword">class</span> <span class="classname">Vehicle</span> {
    <span class="keyword">abstract</span> <span class="keyword">void</span> <span class="method">start</span>();
    <span class="keyword">void</span> <span class="method">fuel</span>() {
        <span class="classname">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Refueling..."</span>);
    }
}
  </code></pre>
</div>



### 🧪 Example

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">abstract</span> <span class="keyword">class</span> <span class="classname">Animal</span> {
    <span class="keyword">abstract</span> <span class="keyword">void</span> <span class="method">sound</span>();
    <span class="keyword">void</span> <span class="method">breathe</span>() {
        <span class="classname">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Breathing..."</span>);
    }
}

<span class="keyword">class</span> <span class="classname">Dog</span> <span class="keyword">extends</span> <span class="classname">Animal</span> {
    <span class="keyword">void</span> <span class="method">sound</span>() {
        <span class="classname">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Barks"</span>);
    }
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">TestAbstraction</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
        <span class="classname">Animal</span> <span class="variable-name">obj</span> = <span class="keyword">new</span> <span class="classname">Dog</span>();
        <span class="variable-name">obj</span>.<span class="method">sound</span>();   <span class="comment">// Output: Barks</span>
        <span class="variable-name">obj</span>.<span class="method">breathe</span>(); <span class="comment">// Output: Breathing...</span>
    }
}
  </code></pre>
</div>

<br/>


## 🧾 Rules of Abstract Class

- If a class contains **at least one abstract method**, it must be declared abstract.
- Abstract classes **can** have constructors, static methods, and final methods.
- A class **extending** an abstract class must **implement** all abstract methods unless it is also abstract.

<br/>

## 🎮 Interfaces

An interface:

- Is a reference type in Java similar to a class
- Can contain only abstract methods (Java 7 and earlier)
- From Java 8 onwards, **can include default and static methods**
- Supports **multiple inheritance**

### 📄 Syntax

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">interface</span> <span class="classname">Drawable</span> {
    <span class="keyword">void</span> <span class="method">draw</span>();
}
  </code></pre>
</div>
<br/>

### 🧪 Example

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">interface</span> <span class="classname">Drawable</span> {
    <span class="keyword">void</span> <span class="method">draw</span>();
}

<span class="keyword">class</span> <span class="classname">Circle</span> <span class="keyword">implements</span> <span class="classname">Drawable</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="method">draw</span>() {
        <span class="classname">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Drawing Circle"</span>);
    }
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">TestInterface</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span>(<span class="classname">String</span>[] <span class="variable-name">args</span>) {
        <span class="classname">Drawable</span> <span class="variable-name">d</span> = <span class="keyword">new</span> <span class="classname">Circle</span>();
        <span class="variable-name">d</span>.<span class="method">draw</span>(); <span class="comment">// Output: Drawing Circle</span>
    }
}
  </code></pre>
</div>

<br/>


## 🌟 Java 8+ Interface Enhancements

Java 8 introduced **default** and **static** methods in interfaces.

### ✅ Default Methods

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">interface</span> <span class="class-name">MyInterface</span> {
    <span class="keyword">default</span> <span class="keyword">void</span> <span class="function-name">show</span>() {
        <span class="class-ref">System</span>.out.<span class="function-name">println</span>(<span class="string">"Default Show Method"</span>);
    }
}
  </code></pre>
</div>


<br/>

### ✅ Static Methods

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">interface</span> <span class="class-name">MyInterface</span> {
    <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">display</span>() {
        <span class="class-ref">System</span>.out.<span class="function-name">println</span>(<span class="string">"Static Display Method"</span>);
    }
}
  </code></pre>
</div>


<br/>

## 🧬 Multiple Inheritance with Interfaces

Java does not allow multiple inheritance with classes but does support it using interfaces.

<br/>

### 🧪 Example

<div class="code-container">
<pre><code class="code-block">
<span class="keyword">interface</span> <span class="class-name">Printable</span> {
    <span class="keyword">void</span> <span class="function-name">print</span>();
}

<span class="keyword">interface</span> <span class="class-name">Showable</span> {
    <span class="keyword">void</span> <span class="function-name">show</span>();
}

<span class="keyword">class</span> <span class="class-name">A</span> <span class="keyword">implements</span> <span class="class-name">Printable</span>, <span class="class-name">Showable</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">print</span>() {
        <span class="class-ref">System</span>.out.<span class="function-name">println</span>(<span class="string">"Printing..."</span>);
    }
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">show</span>() {
        <span class="class-ref">System</span>.out.<span class="function-name">println</span>(<span class="string">"Showing..."</span>);
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

<br/>

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
<br/>

#### 🧪 Example:

<div class="code-container">
<pre><code class="code-block">
<span class="keyword">interface</span> <span class="class-name">Shape</span> {
    <span class="keyword">void</span> <span class="function-name">draw</span>();
    <span class="keyword">double</span> <span class="function-name">area</span>();
}

<span class="keyword">class</span> <span class="class-name">Circle</span> <span class="keyword">implements</span> <span class="class-name">Shape</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">draw</span>() {
        <span class="class-ref">System</span>.out.<span class="function-name">println</span>(<span class="string">"Drawing Circle"</span>);
    }
    <span class="keyword">public</span> <span class="keyword">double</span> <span class="function-name">area</span>() {
        <span class="keyword">return</span> <span class="class-ref">Math</span>.PI * <span class="number">5</span> * <span class="number">5</span>;
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

<br/>

#### 🧪 Example:

<div class="code-container">
<pre><code class="code-block">
<span class="annotation">@FunctionalInterface</span>
<span class="keyword">interface</span> <span class="class-name">Greeting</span> {
    <span class="keyword">void</span> <span class="function-name">sayHello</span>(<span class="class-name">String</span> <span class="variable-name">name</span>);
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="class-name">LambdaExample</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="class-name">String</span>[] <span class="variable-name">args</span>) {
        <span class="class-name">Greeting</span> <span class="variable-name">greet</span> = (<span class="variable-name">name</span>) -> 
            <span class="class-ref">System</span>.out.<span class="function-name">println</span>(<span class="string">"Hello "</span> + <span class="variable-name">name</span>);
        <span class="variable-name">greet</span>.<span class="function-name">sayHello</span>(<span class="string">"Alice"</span>);
    }
}
</code></pre>
</div>

<br/>

#### ✅ Built-in Functional Interfaces in `java.util.function`:

| Interface     | Abstract Method     | Description                        |
|---------------|----------------------|------------------------------------|
| `Predicate<T>` | `test(T t)`          | Returns boolean                    |
| `Function<T,R>`| `apply(T t)`         | Returns transformed value          |
| `Consumer<T>`  | `accept(T t)`        | Consumes without return            |
| `Supplier<T>`  | `get()`              | Provides a value                   |



### 🔸 3. **Marker Interface**

A **marker interface** is an interface with **no methods** or **fields**. It is used to mark a class for special treatment by the JVM or frameworks.

<br/>

#### ✅ Examples:
- `Serializable`
- `Cloneable`
- `Remote`

<br/>

#### 🧪 Example:

<div class="code-container">
<pre><code class="code-block">
<span class="keyword">interface</span> <span class="class-name">MyMarker</span> {}

<span class="keyword">class</span> <span class="class-name">MyClass</span> <span class="keyword">implements</span> <span class="class-name">MyMarker</span> {
    <span class="comment">// JVM or frameworks may treat this differently</span>
}
</code></pre>
</div>


> ☝️ Marker interfaces are often checked using `instanceof` to determine if an object has a specific capability.



### 🔸 4. **Public Interface**

In Java, interfaces are `public` by default when declared in their own file.

#### ✅ Features:
- Accessible from any class
- Must be placed in a file with the same name

<br/>

#### 🧪 Example:

<div class="code-container">
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">interface</span> <span class="classname">Vehicle</span> {
    <span class="keyword">void</span> <span class="method">run</span>();
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Car</span> <span class="keyword">implements</span> <span class="classname">Vehicle</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="method">run</span>() {
        <span class="class-ref">System</span>.out.<span class="method">println</span>(<span class="string">"Car is running"</span>);
    }
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Bike</span> <span class="keyword">implements</span> <span class="classname">Vehicle</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="method">run</span>() {
        <span class="class-ref">System</span>.out.<span class="method">println</span>(<span class="string">"Bike is running"</span>);
    }
}

<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span>(<span class="type">String</span>[] <span class="variable-name">args</span>) {
        <span class="classname">Vehicle</span> <span class="variable-name">v1</span> = <span class="keyword">new</span> <span class="classname">Car</span>();
        <span class="classname">Vehicle</span> <span class="variable-name">v2</span> = <span class="keyword">new</span> <span class="classname">Bike</span>();
        <span class="variable-name">v1</span>.<span class="method">run</span>();
        <span class="variable-name">v2</span>.<span class="method">run</span>();
    }
}
  </code></pre>
</div>

