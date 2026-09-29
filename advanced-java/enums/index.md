# 🔢 Enums in Java

An **enum** (short for enumeration) is a special Java type used to define a collection of constants. It is essentially a class that represents a group of unchangeable variables (like `final` variables).

Enums are used when you have values that you know aren't going to change, like days of the week, colors, deck of cards, etc.

---

## 1. Defining and Using an Enum

To create an enum, use the `enum` keyword. By convention, enum constants are written in uppercase.

<div class="code-container">
  <pre><code class="language-java">
enum Level {
    LOW,
    MEDIUM,
    HIGH
}

public class Main {
    public static void main(String[] args) {
        Level myVar = Level.MEDIUM; 
        System.out.println(myVar); // Prints: MEDIUM
    }
}
  </code></pre>
</div>

---

## 2. Enums in Switch Statements

Enums are often used in `switch` statements to check for corresponding values.

<div class="code-container">
  <pre><code class="language-java">
Level level = Level.HIGH;

switch(level) {
    case LOW:
        System.out.println("Low level");
        break;
    case MEDIUM:
        System.out.println("Medium level");
        break;
    case HIGH:
        System.out.println("High level");
        break;
}
  </code></pre>
</div>

---

## 3. Iterating Over an Enum

The `values()` method returns an array of all enum constants, which is useful for looping through the enum.

<div class="code-container">
  <pre><code class="language-java">
for (Level level : Level.values()) {
    System.out.println(level);
}
  </code></pre>
</div>

---

## 4. Advanced Enums (Fields, Constructors, and Methods)

An enum can have attributes, constructors, and methods, just like a regular class. Note that the enum constructor must be `private` or package-private.

<div class="code-container">
  <pre><code class="language-java">
enum Size {
    SMALL("S"), 
    MEDIUM("M"), 
    LARGE("L"); // Semicolon required if there are fields/methods

    private final String abbreviation;

    // Constructor
    private Size(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    // Method
    public String getAbbreviation() {
        return abbreviation;
    }
}

public class Main {
    public static void main(String[] args) {
        Size s = Size.MEDIUM;
        System.out.println(s.getAbbreviation()); // Prints: M
    }
}
  </code></pre>
</div>
