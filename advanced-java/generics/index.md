# 📐 Generics in Java

**Generics** were introduced in Java 5 to provide **compile-time type safety** and eliminate the need for explicit type casting. Generics allow types (classes and interfaces) to be parameters when defining classes, interfaces, and methods.

---

## Why do we need Generics?

Before generics, collections in Java (like `ArrayList`) stored objects of type `Object`. This meant you could accidentally put a `String` and an `Integer` in the same list, causing a runtime error when trying to retrieve them.

### Before Generics (The Problem)

<div class="code-container">
  <pre><code class="language-java">
List list = new ArrayList();
list.add("Hello");
list.add(10); // Compiler allows this!

// Requires explicit casting and can cause ClassCastException
String s = (String) list.get(1); // Runtime Error! 10 cannot be cast to String
  </code></pre>
</div>

### After Generics (The Solution)

<div class="code-container">
  <pre><code class="language-java">
List<String> list = new ArrayList<>();
list.add("Hello");
// list.add(10); // Compiler Error! Type safety enforced.

String s = list.get(0); // No casting required
  </code></pre>
</div>

---

## Creating a Generic Class

You can create your own classes that use generics. The type parameter is conventionally named with a single uppercase letter, like `T` (Type), `E` (Element), `K` (Key), or `V` (Value).

<div class="code-container">
  <pre><code class="language-java">
// A Generic Class
public class Box<T> {
    private T object;

    public void set(T object) {
        this.object = object;
    }

    public T get() {
        return object;
    }
}

// Usage
Box<Integer> integerBox = new Box<>();
integerBox.set(10);

Box<String> stringBox = new Box<>();
stringBox.set("Hello Generics");
  </code></pre>
</div>

---

## Generic Methods

You can also write generic methods inside a regular (non-generic) class.

<div class="code-container">
  <pre><code class="language-java">
public class Utilities {
    // Generic method to print any type of array
    public static <E> void printArray(E[] elements) {
        for (E element : elements) {
            System.out.println(element);
        }
    }
}
  </code></pre>
</div>

---

## Bounded Type Parameters

Sometimes you want to restrict the types that can be used as type arguments. For example, a method that operates on numbers might only want to accept instances of `Number` or its subclasses.

<div class="code-container">
  <pre><code class="language-java">
// T must be a subclass of Number
public <T extends Number> void processNumber(T number) {
    System.out.println(number.doubleValue());
}
  </code></pre>
</div>

---

## Wildcards in Generics

The question mark `?` represents an unknown type in generics.

1. **Unbounded Wildcard**: `List<?>` - A list of an unknown type.
2. **Upper Bounded Wildcard**: `List<? extends Number>` - A list of Number or its subclasses (e.g., Integer, Double). Good for reading data.
3. **Lower Bounded Wildcard**: `List<? super Integer>` - A list of Integer or its superclasses (e.g., Number, Object). Good for writing data.
