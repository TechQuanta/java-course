
# Java OOP Concepts
---
## Introduction to OOP

Object-Oriented Programming (OOP) is a programming paradigm that is based on the concept of objects, which have both data and behavior. Java is one of the most widely used object-oriented programming languages. The key principles of OOP are:

- **Encapsulation**
- **Inheritance**
- **Polymorphism**
- **Abstraction**


<br>
<div class="section">
    <h2>1. Classes and Objects</h2>
    <p>A <strong>class</strong> is a blueprint or prototype from which objects are created. It defines the properties (fields) and behaviors (methods) that the objects created from the class will have.</p>
    <h3>Example</h3>
    <pre><code class="code-block">
<span class="keyword">class</span> Car {
    <span class="keyword">String</span> model;
    <span class="keyword">int</span> year;
    <span class="keyword">void</span> startEngine() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Engine started"</span>);
    }
}
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Main</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="type">void</span> <span class="method">main</span>(String[] args) {
        Car car1 = <span class="keyword">new</span> Car();
        car1.model = <span class="string">"Toyota"</span>;
        car1.year = <span class="number">2021</span>;
        car1.startEngine();
    }
}
    </code></pre>
</div>


---
<br><br>
<div class="section">
    <h2>2. Encapsulation</h2>
    <p>Encapsulation means binding the data (variables) and the code acting on the data (methods) together as a single unit. It’s achieved using <code>private</code> access modifiers and public getters/setters.</p>
    <h3>Example</h3>
    <pre><code class="code-block">
<span class="keyword">class</span> Person {
    <span class="keyword">private</span> <span class="type">String</span> name;
    <span class="keyword">public</span> <span class="type">String</span> <span class="method">getName</span>() {
        <span class="keyword">return</span> name;
    }
    <span class="keyword">public</span> <span class="type">void</span> <span class="method">setName</span>(<span class="type">String</span> name) {
        this.name = name;
    }
}
    </code></pre>
</div>

<br><br>
<div class="section">
    <h2>3. Inheritance</h2>
    <p>Inheritance allows one class to inherit fields and methods from another class using the <code>extends</code> keyword.</p>
    <pre><code class="code-block">
<span class="keyword">class</span> Animal {
    <span class="method">void</span> eat() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Animal is eating"</span>);
    }
}
<span class="keyword">class</span> Dog <span class="keyword">extends</span> Animal {
    <span class="method">void</span> bark() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Dog is barking"</span>);
    }
}
    </code></pre>
</div>

---
<br><br>
<div class="section">
    <h2>4. Polymorphism</h2>
    <p><strong>Polymorphism</strong> allows methods to behave differently based on the object that is invoking them.</p>
    <h4>Method Overloading</h4>
    <pre><code class="code-block">
<span class="keyword">class</span> Calculator {
    <span class="method">int</span> add(<span class="type">int</span> a, <span class="type">int</span> b) {
        <span class="keyword">return</span> a + b;
    }
    <span class="method">double</span> add(<span class="type">double</span> a, <span class="type">double</span> b) {
        <span class="keyword">return</span> a + b;
    }
}
    </code></pre>
    <h4>Method Overriding</h4>
    <pre><code class="code-block">
<span class="keyword">class</span> Animal {
    <span class="method">void</span> sound() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Animal makes a sound"</span>);
    }
}
<span class="keyword">class</span> Dog <span class="keyword">extends</span> Animal {
    <span class="method">void</span> sound() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Dog barks"</span>);
    }
}
    </code></pre>
</div>

---
<br><br>
<div class="section">
    <h2>5. Abstraction</h2>
    <p>Abstraction means hiding internal details and showing only the functionality. It is achieved using <code>abstract</code> classes and <code>interfaces</code>.</p>
    <h4>Using Abstract Class</h4>
    <pre><code class="code-block">
<span class="keyword">abstract</span> <span class="keyword">class</span> Animal {
    <span class="method">abstract</span> <span class="method">void</span> sound();
}
<span class="keyword">class</span> Dog <span class="keyword">extends</span> Animal {
    <span class="method">void</span> sound() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Dog barks"</span>);
    }
}
<br>
    </code></pre>
    <h4>Using Interface</h4>
    <pre><code class="code-block">
<span class="keyword">interface</span> Animal {
    <span class="method">void</span> sound();
}
<span class="keyword">class</span> Dog <span class="keyword">implements</span> Animal {
    <span class="method">public</span> <span class="method">void</span> sound() {
        <span class="keyword">System</span>.<span class="method">out</span>.<span class="method">println</span>(<span class="string">"Dog barks"</span>);
    }
}
    </code></pre>
</div>

---
<br><br>
<div class="section">
    <h2>6. Constructors</h2>
    <p>A constructor initializes an object. Java supports <strong>default</strong> and <strong>parameterized</strong> constructors.</p>
    <pre><code class="code-block">
<span class="keyword">class</span> Car {
    <span class="type">String</span> model;
    <span class="type">int</span> year;
    <span class="keyword">Car</span>(<span class="type">String</span> model, <span class="type">int</span> year) {
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
