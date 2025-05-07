# 🔐 Encapsulation in Java (with Advanced Concepts)

---

**Encapsulation** is one of the four core concepts of **Object-Oriented Programming (OOP)** in Java. It refers to the technique of **hiding internal object details** and providing **controlled access** to them through public methods.

Encapsulation ensures that the internal representation of an object is hidden from the outside and only accessible through a well-defined interface.

<br/>

## 🚀 Why is Encapsulation Important?

<br/>

* ✅ Protects object integrity by preventing unauthorized access.
* ✅ Makes code more **modular**, **readable**, and **maintainable**.
* ✅ Allows **validation logic** inside setter methods.
* ✅ Enhances **security** by limiting what parts of the code can interact with the object's data.

<br/>

## 🧱 Key Principles of Encapsulation
<br/>

1. **Use `private` access modifier** for class variables to restrict direct access.
2. **Provide public `getters` and `setters`** to access or update private fields.
3. **Perform validation or processing** within setters, if needed.
4. **Hide implementation details** and expose only what’s necessary.

<br/>

## ✅ Simple Example of Encapsulation

<br/>
<div class="code-container">
  <pre><code class="code-block">
    <span class="keyword">class</span> <span class="classname">Student</span> {
        <span class="keyword">private</span> <span class="classname">String</span> <span class="variable-name">name</span>;
        <span class="keyword">private</span> <span class="classname">int</span> <span class="variable-name">age</span>;
        <span class="keyword">public</span> <span class="classname">String</span> <span class="method">getName</span>() {
            <span class="keyword">return</span> <span class="variable-name">name</span>;
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="method">setName</span>(<span class="classname">String</span> <span class="variable-name">name</span>) {
            <span class="keyword">this</span>.<span class="variable-name">name</span> = <span class="variable-name">name</span>;
        }
        <span class="keyword">public</span> <span class="classname">int</span> <span class="method">getAge</span>() {
            <span class="keyword">return</span> <span class="variable-name">age</span>;
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="method">setAge</span>(<span class="classname">int</span> <span class="variable-name">age</span>) {
            <span class="keyword">if</span> (<span class="variable-name">age</span> > <span class="number">0</span>) {
                <span class="keyword">this</span>.<span class="variable-name">age</span> = <span class="variable-name">age</span>;
            }
        }
    }
  </code></pre>
</div>


## 👨‍💻 Accessing the Encapsulated Fields

<br/>
<div class="code-container">
  <pre><code class="code-block">
    <span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">EncapsulationTest</span> {
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="function-name">main</span>(<span class="keyword">String</span>[] <span class="variable-name">args</span>) {
            <span class="classname">Student</span> <span class="variable-name">st</span> = <span class="keyword">new</span> <span class="classname">Student</span>();
            <span class="variable-name">st</span>.<span class="function-name">setName</span>(<span class="string">"Alice"</span>);
            <span class="variable-name">st</span>.<span class="function-name">setAge</span>(<span class="number">20</span>);
            <span class="keyword">System</span>.<span class="function-name">out</span>.<span class="function-name">println</span>(<span class="string">"Name: "</span> + <span class="variable-name">st</span>.<span class="function-name">getName</span>());
            <span class="keyword">System</span>.<span class="function-name">out</span>.<span class="function-name">println</span>(<span class="string">"Age: "</span> + <span class="variable-name">st</span>.<span class="function-name">getAge</span>());
        }
    }
  </code></pre>
</div>


<br/>

## 🧠 Advanced Encapsulation Concepts

<br/>

### 🔄 Immutable Classes

* Make class fields `final` and remove setters.
* Provides thread safety and ensures consistent state.

<br/><br/>
<div class="code-container">
  <pre><code class="code-block">
    <span class="keyword">final</span> <span class="keyword">class</span> <span class="classname">Employee</span> {
        <span class="keyword">private</span> <span class="keyword">final</span> <span class="classname">String</span> <span class="variable-name">name</span>;
        <span class="keyword">private</span> <span class="keyword">final</span> <span class="classname">int</span> <span class="variable-name">id</span>;
        <span class="keyword">public</span> <span class="classname">Employee</span>(<span class="classname">String</span> <span class="variable-name">name</span>, <span class="classname">int</span> <span class="variable-name">id</span>) {
            <span class="variable-name">this</span>.<span class="variable-name">name</span> = <span class="variable-name">name</span>;
            <span class="variable-name">this</span>.<span class="variable-name">id</span> = <span class="variable-name">id</span>;
        }
        <span class="keyword">public</span> <span class="classname">String</span> <span class="function-name">getName</span>() {
            <span class="keyword">return</span> <span class="variable-name">name</span>;
        }
        <span class="keyword">public</span> <span class="classname">int</span> <span class="function-name">getId</span>() {
            <span class="keyword">return</span> <span class="variable-name">id</span>;
        }
    }
  </code></pre>
</div>


<br/>

### 🛑 Restricting Field Modification

* Encapsulation lets you protect critical variables:

<br/>
<div class="code-container">
  <pre><code class="code-block">
    <span class="keyword">class</span> <span class="classname">BankAccount</span> {
        <span class="keyword">private</span> <span class="classname">double</span> <span class="variable-name">balance</span>;
        <span class="keyword">public</span> <span class="classname">double</span> <span class="function-name">getBalance</span>() {
            <span class="keyword">return</span> <span class="variable-name">balance</span>;
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">deposit</span>(<span class="classname">double</span> <span class="variable-name">amount</span>) {
            <span class="keyword">if</span> (<span class="variable-name">amount</span> <span class="operator">></span> <span class="number">0</span>) {
                <span class="variable-name">balance</span> <span class="operator">+=</span> <span class="variable-name">amount</span>;
            }
        }
        <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">withdraw</span>(<span class="classname">double</span> <span class="variable-name">amount</span>) {
            <span class="keyword">if</span> (<span class="variable-name">amount</span> <span class="operator">></span> <span class="number">0</span> <span class="keyword">&&</span> <span class="variable-name">amount</span> <span class="operator"><=</span> <span class="variable-name">balance</span>) {
                <span class="variable-name">balance</span> <span class="operator">-=</span> <span class="variable-name">amount</span>;
            }
        }
    }
  </code></pre>
</div>


<br/>

### 🔐 Encapsulation + Access Levels

* Use `protected`, `private`, and `default` wisely in complex applications with inheritance and packages.

<br/>

### 📦 Encapsulation in API Design

* Frameworks often encapsulate internal logic and provide interfaces or abstract classes for user extension.

<br/>

### 🧪 Encapsulation and Unit Testing

* Good encapsulation allows easier mocking and testing of classes with minimal interdependence.

<br/>

## 🧩 Summary

---

<br/>

* Encapsulation is **fundamental for security and clean design** in Java.
* It promotes **data hiding**, **controlled access**, and **modular code**.
* Advanced techniques like **immutability** and **custom validation logic** improve robustness.
<br/>

> "Design classes like black boxes: expose only what is necessary and hide the rest."



✅ Now you're ready to encapsulate like a pro!
