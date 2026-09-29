# 🎁 Wrapper Classes and Autoboxing

In Java, everything is not an object. The primitive data types (`int`, `char`, `double`, etc.) are not objects. This was a design choice to optimize performance. 

However, many Java features (like Collections: `ArrayList`, `HashMap`) require objects and cannot work with primitives. To solve this, Java provides **Wrapper Classes**.

---

## What are Wrapper Classes?

Wrapper classes provide a way to use primitive data types as objects. For every primitive data type in Java, there is a corresponding wrapper class in the `java.lang` package.

| Primitive Type | Wrapper Class |
|----------------|---------------|
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

---

## Autoboxing and Unboxing

Before Java 5, you had to manually convert primitives to wrapper objects and vice-versa. Java 5 introduced **Autoboxing** and **Unboxing** to do this automatically.

### Autoboxing (Primitive to Object)
The automatic conversion of primitive types to the object of their corresponding wrapper classes is known as autoboxing.

<div class="code-container">
  <pre><code class="language-java">
// Autoboxing: converting int to Integer
int a = 20;
Integer i = a; 

System.out.println(a + " " + i);
  </code></pre>
</div>

### Unboxing (Object to Primitive)
The automatic conversion of an object of a wrapper class to its corresponding primitive type is known as unboxing.

<div class="code-container">
  <pre><code class="language-java">
// Unboxing: converting Integer to int
Integer a = new Integer(3); // Deprecated since Java 9, use Integer.valueOf(3)
int i = a; 

System.out.println(a + " " + i);
  </code></pre>
</div>

---

## Why use Wrapper Classes?

1. **Collections Framework**: Data structures like `ArrayList` and `Vector` only store objects (reference types), not primitive types.
2. **Utility Methods**: Wrapper classes provide useful static methods. For example, `Integer.parseInt("123")` converts a String to an int.
3. **Null Values**: Objects can be `null`, but primitives cannot. If you need to represent the absence of a value (e.g., in a database mapping), a wrapper class can be `null`.
4. **Generics**: Generic types (like `<T>`) only accept objects. You can use `List<Integer>` but not `List<int>`.

<div class="code-container">
  <pre><code class="language-java">
// Using utility methods
String strNum = "150";
int num = Integer.parseInt(strNum);

System.out.println("Max Integer: " + Integer.MAX_VALUE);
  </code></pre>
</div>
