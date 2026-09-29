# Functional Programming in Java

Functional programming (FP) is a programming paradigm where computation is treated as the evaluation of mathematical functions, avoiding changing state and mutable data. Java, starting from version 8, introduced several functional programming features, such as lambda expressions, streams, and functional interfaces, which help Java developers write cleaner, more efficient, and more concise code.

## 1. Lambda Expressions

Lambda expressions allow you to write methods or functions as expressions. They provide a clear and concise way to represent a method interface (functional interface). A lambda expression can be used to implement the abstract method of a functional interface.
<div class="example">
  <pre><code class="language-java">
BinaryOperator&lt;Integer&gt; add = (a, b) -&gt; a + b;
System.out.println(add.apply(5, 10));  // Output: 15
  </code></pre>
</div>


Lambda expressions help simplify code, making it more readable and concise. Here's another example:

<div class="example">
  <pre><code class="language-java">
@FunctionalInterface
public interface MyFunctionalInterface {
    void myMethod();
}

// Using Lambda Expression
MyFunctionalInterface myFunc = () -&gt; System.out.println("Hello, Functional Programming!");
myFunc.myMethod();  // Output: Hello, Functional Programming!
  </code></pre>
</div>


## 2. Functional Interfaces

A functional interface is an interface with just one abstract method. It can have multiple default or static methods. Java 8 introduced the `@FunctionalInterface` annotation to mark interfaces as functional interfaces. Lambda expressions are often used to provide the implementation of the abstract method of functional interfaces.

<div class="example">
  <pre><code class="language-java">
@FunctionalInterface
public interface MyFunctionalInterface {
    void myMethod();
}

// Using Lambda Expression
MyFunctionalInterface myFunc = () -&gt; System.out.println("Hello, Functional Programming!");
myFunc.myMethod();  // Output: Hello, Functional Programming!
  </code></pre>
</div>


## 3. Streams

Streams are sequences of elements that support aggregate operations. You can process collections of objects in a functional style. Stream operations can be either intermediate (like `map`, `filter`) or terminal (like `forEach`, `collect`). Streams enable us to process data in a declarative manner.

<div class="example">
  <pre><code class="language-java">
List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
       .filter(n -&gt; n % 2 == 0) // Filter even numbers
       .map(n -&gt; n * n)         // Square the numbers
       .forEach(System.out::println);  // Output: 4 16
  </code></pre>
</div>


## 4. Method References

Method references are a shorthand notation of a lambda expression that calls a method. Instead of writing out a lambda expression to invoke a method, you can directly refer to the method using the `::` operator.

<div class="example">
  <pre><code class="language-java">
List&lt;String&gt; fruits = Arrays.asList("Apple", "Banana", "Cherry");
fruits.forEach(System.out::println);  // Output: Apple, Banana, Cherry
  </code></pre>
</div>


## 5. Optional

`Optional` is a container object which may or may not contain a value. It is used to prevent `NullPointerException` and to represent the presence or absence of a value. Instead of returning `null` from a method, an `Optional` can be returned to indicate the possibility of no result.

<div class="example">
  <pre><code class="language-java">
Optional&lt;String&gt; name = Optional.of("John");
name.ifPresent(System.out::println);  // Output: John
  </code></pre>
</div>

## 6. Predicate Interface

The `Predicate` interface represents a boolean-valued function of one argument. It is often used to evaluate conditions, such as checking if a string is not empty or if a number is even.

<div class="example">
  <pre><code class="language-java">
Predicate&lt;String&gt; isNotEmpty = str -&gt; !str.isEmpty();
System.out.println(isNotEmpty.test("Hello"));  // Output: true
  </code></pre>
</div>


## 7. Consumer Interface

The `Consumer` interface represents an operation that accepts a single input argument and returns no result. It's typically used for operations where the result is not needed, like printing to the console.

<div class="example">
  <pre><code class="language-java">
Consumer&lt;String&gt; print = str -&gt; System.out.println(str);
print.accept("Hello, Consumer!");  // Output: Hello, Consumer!
  </code></pre>
</div>


## 8. Function Interface

The `Function` interface represents a function that accepts one argument and produces a result. It is used in functional programming to perform transformations or calculations.

<div class="example">
  <pre><code class="language-java">
Function&lt;Integer, Integer&gt; square = x -&gt; x * x;
System.out.println(square.apply(5));  // Output: 25
  </code></pre>
</div>


## 9. UnaryOperator Interface

The `UnaryOperator` interface represents a function that accepts a single argument and returns a result of the same type. It is a special case of the `Function` interface where both the input and output are of the same type.

### Syntax:
```java
T apply(T t);

```
<br>

### Key Concepts:
- **Lambda Expressions**: Allows you to implement abstract methods in functional interfaces concisely.
- **Functional Interfaces**: Interfaces with a single abstract method, enabling the use of lambda expressions.
- **Common Functional Interfaces**: Including `Function`, `Predicate`, `Consumer`, `UnaryOperator`, and `BinaryOperator`.
- **Streams and Method References**: How you can process data and reduce boilerplate using method references.

This Markdown file contains examples with real-world use cases for each functional interface, demonstrating their practical applications in Java.
