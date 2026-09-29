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
<div align="center" width=700 height=200>
<img src="IMAGES/exception.jpg" class="execution" alt="exception hierarchy">
</div><br/>
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
try {
    // risky code
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(e);
}
  </code></pre>
</div>


<br/>

## ✅ try-multiple-catch Example

n Java, handling multiple exceptions can be done using multiple catch blocks. This approach is helpful when a block of code in the try block can throw different types of exceptions, and each type needs to be handled differently.

<div class="code-block">
  <pre><code>
try {
    // code with multiple possible exceptions
} 
catch (NullPointerException e) {
    // handle null pointer
}
catch (ArithmeticException e) {
    // handle arithmetic
}
  </code></pre>
</div>


<br/>

## ✅ try-catch-finally Example

In this example, the finally block is used to execute code after the try and catch blocks, regardless of whether an exception was thrown or not. This ensures that any cleanup or final actions are performed.

<div class="code-block">
  <pre><code>
try {
    // code
} 
catch (Exception e) {
    // handling
} 
finally {
    System.out.println("Always executed");
}
  </code></pre>
</div>

<br/>

## ✅ throw-keyword Example

throw keyword is use to throw the exception.

<div class="code-block">
  <pre><code>
throw new ArithmeticException("Divide by zero");
  </code></pre>
</div>

<br/>

## ✅ throws-keyword Example

throws keyword use to throw the exception and used in the method signature rather than directly like throw();
<div class="code-block">
  <pre><code>
public void readFile() throws IOException {
    // file operations
}
  </code></pre>
</div>

<br/>

## ✅ nested-try Example

In this example, a try block contains another try-catch block inside it. This demonstrates how exceptions can be caught at different levels in a nested structure.

<div class="code-block">
  <pre><code>
try {
    // outer block
    try {
        // inner block
        int x = 10 / 0;
    } catch (ArithmeticException e) {
        System.out.println("Inner catch");
    }
} catch (Exception e) {
    System.out.println("Outer catch");
}
  </code></pre>
</div>
<br/>

## ✅ user-defined-exception Example

In this example, we create a custom exception by extending the Exception class. This allows you to define your own exception type and use it in your application.

<div class="code-block">
  <pre><code>
class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
  </code></pre>
</div>

we create a custom exception called MyException and use it in a method checkAge that throws this exception when the provided age is under 18. The exception is then caught and handled in the main method.

<div class="code-block">
  <pre><code>
public class Test {
    static void checkAge(int age) throws MyException {
        if (age &lt; 18) {
            throw new MyException("Underage not allowed");
        }
    }
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (MyException e) {
            System.out.println(e.getMessage());
        }
    }
}
  </code></pre>
</div>

