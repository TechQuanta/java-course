# 🚀 Java 8+ Features

Java 8 was a revolutionary release that introduced functional programming concepts to Java. Subsequent versions (Java 9 through 21) have continued to add powerful features.

---

## 1. Lambda Expressions (Java 8)

Lambda expressions introduced a new, concise syntax to write anonymous functions. They are used primarily to implement functional interfaces (interfaces with a single abstract method).

<div class="code-container">
  <pre><code class="language-java">
// Before Java 8
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running...");
    }
};

// With Java 8 Lambda
Runnable r2 = () -> System.out.println("Running...");
  </code></pre>
</div>

---

## 2. Stream API (Java 8)

The Stream API is used to process collections of objects in a functional and declarative way. It supports filtering, mapping, and reducing.

<div class="code-container">
  <pre><code class="language-java">
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Filter and print names starting with 'C'
names.stream()
     .filter(name -> name.startsWith("C"))
     .forEach(System.out::println);
  </code></pre>
</div>

---

## 3. Optional Class (Java 8)

`Optional` is a container object used to contain not-null objects. It was introduced to avoid `NullPointerException` and provide a cleaner way to handle potentially null values.

<div class="code-container">
  <pre><code class="language-java">
Optional<String> optional = Optional.ofNullable(getName());

// Print if present, otherwise do nothing
optional.ifPresent(System.out::println);

// Provide a default value if empty
String name = optional.orElse("Default Name");
  </code></pre>
</div>

---

## 4. Default Methods in Interfaces (Java 8)

Interfaces can now have method implementations using the `default` keyword. This allowed the Java API to evolve without breaking existing code.

<div class="code-container">
  <pre><code class="language-java">
interface Vehicle {
    void start();
    
    // Default method
    default void honk() {
        System.out.println("Honk!");
    }
}
  </code></pre>
</div>

---

## 5. Local Variable Type Inference - `var` (Java 10)

Java 10 introduced `var` for local variables. The compiler infers the type based on the assigned value.

<div class="code-container">
  <pre><code class="language-java">
// Instead of:
// List<Map<String, List<Integer>>> complexList = new ArrayList<>();

// Use var:
var list = new ArrayList<String>();
var message = "Hello"; // inferred as String
  </code></pre>
</div>

---

## 6. Switch Expressions (Java 14)

Switch expressions simplify switch statements, remove the need for `break` statements, and allow switch to return a value.

<div class="code-container">
  <pre><code class="language-java">
String day = "MONDAY";
int numLetters = switch (day) {
    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
    case "TUESDAY" -> 7;
    case "THURSDAY", "SATURDAY" -> 8;
    case "WEDNESDAY" -> 9;
    default -> 0;
};
  </code></pre>
</div>

---

## 7. Records (Java 16)

Records are a special kind of class that help to create immutable data carriers with minimal boilerplate. They automatically generate constructors, getters, `equals()`, `hashCode()`, and `toString()`.

<div class="code-container">
  <pre><code class="language-java">
// A complete data class in one line!
public record Point(int x, int y) {}

Point p = new Point(10, 20);
System.out.println(p.x()); // 10
  </code></pre>
</div>
