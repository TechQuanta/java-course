<style>
        h1, h2, h3 {
            color:rgb(76, 125, 175);
        }
       
        ul {
            list-style-type: none;
            padding: 0;
        }
        .li {
            margin-bottom: 10px;
            padding:4px;
            display:inline-block;
            background-color:rgba(76, 175, 79, 0.51);
            border-radius:10px;
        }
        .table-container {
            margin-top: 20px;
            border-collapse: collapse;
            width: 100%;
        }
        .table-container th, .table-container td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        .table-container th {
            background: linear-gradient(135deg,rgb(0, 0, 0),rgb(92, 92, 93));
            color: white;
            text-align:center;
        }
        .section-header {
            margin-top: 30px;
            padding: 10px 0;
            border-bottom: 2px solid #4CAF50;
        }
    </style>
<h1>Java Methods Overview</h1>
    <p>This page provides an in-depth guide to <strong>Java methods</strong>, their access modifiers, scope, and other key concepts. It covers the basic structure of a Java method, access levels, and how different modifiers affect method visibility and behavior.</p>
    <div class="section-header">
        <h2>Table of Contents</h2>
        <ul style="display:block;font-weight:bolder;">
            <li class="li" style="margin:10px;    text-align:center; border-radius:10px;"><a href="#what-are-java-methods">What are Java Methods?</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#method-syntax">Method Syntax</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#access-modifiers">Access Modifiers</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#method-scope">Method Scope</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#method-return-types">Method Return Types</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#method-overloading">Method Overloading</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#method-overriding">Method Overriding</a></li>
            <li class="li" style="margin:10px;  text-align:center;"><a href="#summary">Summary</a></li>
        </ul>
    </div><br/>
    <h3 id="what-are-java-methods">What are Java Methods?</h3>
    <p>A <strong>method</strong> in Java is a block of code that performs a specific task. It is a part of a class and can be called to execute that task whenever needed. Methods in Java can have parameters, return values, and can be invoked based on their scope and visibility.</p>
    <h3 id="method-syntax">Method Syntax</h3>
    <p>The basic syntax of a method in Java is as follows:</p>
    <pre><code>
[access_modifier] [return_type] method_name([parameters]) {
// Method body
}
</code></pre>
<br>
    <ul>
        <li><strong class="li">Access Modifier</strong> : Defines the visibility of the method.</li>
        <li><strong class="li">Return Type</strong> : Specifies what the method will return (if anything).</li>
        <li><strong class="li">Method Name</strong> : The name of the method.</li>
        <li><strong class="li">Parameters</strong>  : The inputs to the method (optional).</li>
        <li><strong class="li">Method Body</strong> : The code that the method will execute.</li>
    </ul>
    <br>
    <h3 id="access-modifiers">Access Modifiers</h3>
    <p>Access modifiers define the visibility of methods in Java. Here are the common modifiers:</p>
    <div class="table-container">
        <table>
            <tr>
                <th>Modifier</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>public</td>
                <td>Accessible from anywhere, no restrictions.</td>
                <td><code>public void myMethod()</code></td>
            </tr>
            <tr>
                <td>private</td>
                <td>Accessible only within the class.</td>
                <td><code>private void myMethod()</code></td>
            </tr>
            <tr>
                <td>protected</td>
                <td>Accessible within the same package or by subclasses.</td>
                <td><code>protected void myMethod()</code></td>
            </tr>
            <tr>
                <td>default</td>
                <td>No modifier; accessible only within the same package.</td>
                <td><code>void myMethod() (default modifier)</code></td>
            </tr>
        </table>
    </div>
    <p>Example:</p>
    <pre><code>
public class MyClass {
public void publicMethod() {
System.out.println("I am public.");
}
    private void privateMethod() {
        System.out.println("I am private.");
    }
    protected void protectedMethod() {
        System.out.println("I am protected.");
    }
    void defaultMethod() {
        System.out.println("I am default.");
    }
}
</code></pre>
<br>
    <h3 id="method-scope">Method Scope</h3>
    <p>The scope of a method defines where it can be accessed from in your program. The scope is determined by the access modifier and where the method is declared (inside or outside the class).</p>
    <div class="table-container">
        <table>
            <tr>
                <th>Scope</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>Package-level</td>
                <td>Method is accessible only within the same package.</td>
                <td><code>void myMethod() (default modifier)</code></td>
            </tr>
            <tr>
                <td>Class-level</td>
                <td>Method is accessible within the class where it is defined.</td>
                <td><code>private void myMethod()</code></td>
            </tr>
            <tr>
                <td>Instance-level</td>
                <td>Method is accessible on instances of the class (non-static).</td>
                <td><code>void instanceMethod()</code></td>
            </tr>
            <tr>
                <td>Static-level</td>
                <td>Method is accessible without needing an instance of the class.</td>
                <td><code>static void staticMethod()</code></td>
            </tr>
        </table>
    </div>
    <pre><code>
class MyClass {
static void staticMethod() {
System.out.println("I am static.");
}
    void instanceMethod() {
        System.out.println("I am an instance method.");
    }

}
</code></pre>
<br>
    <h3 id="method-return-types">Method Return Types</h3>
    <p>Java methods can return values or be declared void to indicate that they do not return anything. The return type is specified before the method name.</p>
    <div class="table-container">
        <table>
            <tr>
                <th>Return Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>void</td>
                <td>The method does not return any value.</td>
            </tr>
            <tr>
                <td>Primitive Types</td>
                <td>Methods that return a primitive value like int, float, etc.</td>
            </tr>
            <tr>
                <td>Object Types</td>
                <td>Methods that return an object, like String, MyClass, etc.</td>
            </tr>
        </table>
    </div>
    <p>Example:</p>
    <pre><code>
// Returning an integer
public int addNumbers(int a, int b) {
return a + b;
}

// Returning void
public void printMessage(String message) {
System.out.println(message);
}
</code></pre>
<br>
    <h3 id="method-overloading">Method Overloading</h3>
    <p>Java allows methods to have the same name but different parameter lists. This feature is known as method overloading. Overloading can happen by changing the number or type of parameters.</p>
    <pre><code>
public class MyClass {
public void display(String msg) {
System.out.println("Message: " + msg);
}
    public void display(int num) {
        System.out.println("Number: " + num);
    }
}
</code></pre>
<br>
    <h3 id="method-overriding">Method Overriding</h3>
    <p>Method overriding occurs when a subclass provides a specific implementation of a method already defined in its superclass. The method in the subclass should have the same name, return type, and parameters.</p>
    <pre><code>
class Animal {
public void sound() {
System.out.println("Animal makes a sound");
}
}

class Dog extends Animal {
@Override
public void sound() {
System.out.println("Dog barks");
}
}
</code></pre>
<br>
    <h3 id="summary">Summary</h3>
    <p>Java methods are essential building blocks for implementing behavior in your application. Understanding the following concepts is crucial for effective method usage:</p>
    <ul>
        <li><strong class="li">Access Modifiers</strong> : Control the visibility of your methods.</li>
        <li><strong class="li">Scope</strong> : Determines where the method can be accessed.</li>
        <li><strong class="li">Return Types</strong> : Define the type of value (if any) that a method returns.</li>
        <li><strong class="li">Overloading and Overriding</strong> : Offer flexibility in defining method behavior.</li>
    </ul><br/>
    <p>By mastering these concepts, you can write clean, efficient, and organized Java code.</p>
