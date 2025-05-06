# Java Exception Handling
---

Java provides a powerful mechanism for handling **runtime errors**, maintaining the program’s normal flow. This is known as **exception handling**.



## 🔹 What is an Exception?

An **exception** is an event that disrupts the normal flow of the program. It is an object that describes an error condition.


## 🔹 Types of Exceptions

- **Checked Exceptions** – Known at compile time (e.g., `IOException`)
- **Unchecked Exceptions** – Known at runtime (e.g., `ArithmeticException`)
- **Errors** – Serious issues that applications should not try to handle (e.g., `OutOfMemoryError`)

<br/>

```plaintext
Throwable
 ├── Error
 │    ├── OutOfMemoryError
 │    ├── StackOverflowError
 │    └── VirtualMachineError
 └── Exception
      ├── IOException
      │    ├── FileNotFoundException
      │    └── EOFException
      ├── SQLException
      ├── RuntimeException
      │    ├── NullPointerException
      │    ├── ArithmeticException
      │    └── ArrayIndexOutOfBoundsException
      ├── ExceptionInInitializerError
      └── Custom Exception (User-defined)
```

<br/>

## 🔹 Keywords in Exception Handling

- `try` – defines a block to test for errors
- `catch` – defines a block to handle the error
- `finally` – always executed after `try` or `catch`
- `throw` – used to explicitly throw an exception
- `throws` – declares exceptions a method can throw

<br/>

## ✅ try-catch Example

The `try-catch` block in Java is used to gracefully handle **runtime exceptions** without abruptly terminating the program.  
The code that might throw an exception is placed inside the `try` block, and the code to handle the exception goes inside the `catch` block.

If an exception occurs inside the `try`, control immediately transfers to the corresponding `catch` block that can handle that specific type of exception.

### 🔸 Syntax Overview
- `try` → contains code that might throw an exception.
- `catch` → handles specific exception types.
- You can have multiple `catch` blocks for different exceptions.

### 🧪 Basic Example

This example demonstrates how an `ArithmeticException` (division by zero) is caught and handled using `try-catch`.


<div class="code-block">
  <pre><code>
<span class="keyword">try</span> <span class="punctuation">{</span>
    <span class="comment">// risky code</span>
    <span class="keyword">int</span> <span class="variable">result</span> = <span class="number">10</span> / <span class="number">0</span><span class="punctuation">;</span>
<span class="punctuation">}</span> <span class="keyword">catch</span> (<span class="classname">ArithmeticException</span> <span class="variable">e</span>) <span class="punctuation">{</span>
    <span class="method">System.out.println</span>(<span class="variable">e</span>)<span class="punctuation">;</span>
<span class="punctuation">}</span>
  </code></pre>
</div>


<br/>

## ✅ try-multiple-catch Example

n Java, handling multiple exceptions can be done using multiple catch blocks. This approach is helpful when a block of code in the try block can throw different types of exceptions, and each type needs to be handled differently.

<div class="code-block">
  <pre><code>
<span class="keyword">try</span> <span class="punctuation">{</span>
    <span class="comment">// code with multiple possible exceptions</span>
<span class="punctuation">}</span> 
<span class="keyword">catch</span> (<span class="classname">NullPointerException</span> <span class="variable">e</span>) <span class="punctuation">{</span>
    <span class="comment">// handle null pointer</span>
<span class="punctuation">}</span>
<span class="keyword">catch</span> (<span class="classname">ArithmeticException</span> <span class="variable">e</span>) <span class="punctuation">{</span>
    <span class="comment">// handle arithmetic</span>
<span class="punctuation">}</span>
  </code></pre>
</div>


<br/>

## ✅ try-catch-finally Example

In this example, the finally block is used to execute code after the try and catch blocks, regardless of whether an exception was thrown or not. This ensures that any cleanup or final actions are performed.

<div class="code-block">
  <pre><code>
<span class="keyword">try</span> <span class="punctuation">{</span>
    <span class="comment">// code</span>
<span class="punctuation">}</span> 
<span class="keyword">catch</span> (<span class="classname">Exception</span> <span class="variable">e</span>) <span class="punctuation">{</span>
    <span class="comment">// handling</span>
<span class="punctuation">}</span> 
<span class="keyword">finally</span> <span class="punctuation">{</span>
    <span class="method">System.out.println</span>(<span class="string">"Always executed"</span>)<span class="punctuation">;</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

<br/>

## ✅ throw-keyword Example

throw keyword is use to throw the exception.

<div class="code-block">
  <pre><code>
<span class="keyword">throw</span> <span class="keyword">new</span> <span class="classname">ArithmeticException</span>(<span class="string">"Divide by zero"</span>)<span class="punctuation">;</span>
  </code></pre>
</div>

<br/>

## ✅ throws-keyword Example

throws keyword use to throw the exception and used in the method signature rather than directly like throw();
<div class="code-block">
  <pre><code>
<span class="keyword">public</span> <span class="keyword">void</span> <span class="method">readFile</span>() <span class="keyword">throws</span> <span class="classname">IOException</span> <span class="punctuation">{</span>
    <span class="comment">// file operations</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

<br/>

## ✅ nested-try Example

In this example, a try block contains another try-catch block inside it. This demonstrates how exceptions can be caught at different levels in a nested structure.

<div class="code-block">
  <pre><code>
<span class="keyword">try</span> <span class="punctuation">{</span>
    <span class="comment">// outer block</span>
    <span class="keyword">try</span> <span class="punctuation">{</span>
        <span class="comment">// inner block</span>
        <span class="keyword">int</span> <span class="variable">x</span> = <span class="number">10</span> / <span class="number">0</span><span class="punctuation">;</span>
    <span class="punctuation">}</span> <span class="keyword">catch</span> (<span class="classname">ArithmeticException</span> <span class="variable">e</span>) <span class="punctuation">{</span>
        <span class="method">System.out.println</span>(<span class="string">"Inner catch"</span>)<span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span> <span class="keyword">catch</span> (<span class="classname">Exception</span> <span class="variable">e</span>) <span class="punctuation">{</span>
    <span class="method">System.out.println</span>(<span class="string">"Outer catch"</span>)<span class="punctuation">;</span>
<span class="punctuation">}</span>
  </code></pre>
</div>
<br/>

## ✅ user-defined-exception Example

In this example, we create a custom exception by extending the Exception class. This allows you to define your own exception type and use it in your application.

<div class="code-block">
  <pre><code>
<span class="keyword">class</span> <span class="classname">MyException</span> <span class="keyword">extends</span> <span class="classname">Exception</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="classname">MyException</span>(<span class="keyword">String</span> <span class="variable">message</span>) <span class="punctuation">{</span>
        <span class="keyword">super</span>(<span class="variable">message</span>)<span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

we create a custom exception called MyException and use it in a method checkAge that throws this exception when the provided age is under 18. The exception is then caught and handled in the main method.

<div class="code-block">
  <pre><code>
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Test</span> <span class="punctuation">{</span>
    <span class="keyword">static void</span> <span class="method">checkAge</span>(<span class="keyword">int</span> <span class="variable">age</span>) <span class="keyword">throws</span> <span class="classname">MyException</span> <span class="punctuation">{</span>
        <span class="keyword">if</span> (<span class="variable">age</span> &lt; <span class="number">18</span>) <span class="punctuation">{</span>
            <span class="keyword">throw</span> <span class="keyword">new</span> <span class="classname">MyException</span>(<span class="string">"Underage not allowed"</span>)<span class="punctuation">;</span>
        <span class="punctuation">}</span>
    <span class="punctuation">}</span>
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="keyword">String</span>[] <span class="variable">args</span>) <span class="punctuation">{</span>
        <span class="keyword">try</span> <span class="punctuation">{</span>
            <span class="method">checkAge</span>(<span class="number">15</span>)<span class="punctuation">;</span>
        <span class="punctuation">}</span> <span class="keyword">catch</span> (<span class="classname">MyException</span> <span class="variable">e</span>) <span class="punctuation">{</span>
            <span class="method">System.out.println</span>(<span class="variable">e</span>.getMessage())<span class="punctuation">;</span>
        <span class="punctuation">}</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

