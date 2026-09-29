# 🧅 Inner Classes in Java

In Java, it is possible to declare a class inside another class. These are known as **nested classes**. 

Nested classes are divided into two categories:
1. **Static nested classes**
2. **Non-static nested classes** (Inner classes)

Inner classes logically group classes that are only used in one place, increase encapsulation, and can lead to more readable and maintainable code.

---

## 1. Regular Inner Class (Non-static)

An inner class is a regular class defined inside another class. It has access to all members (including private) of the outer class.

<div class="code-container">
  <pre><code class="language-java">
class OuterClass {
    private int outerData = 10;

    class InnerClass {
        public void display() {
            // Can access private members of OuterClass
            System.out.println("Outer Data: " + outerData); 
        }
    }
}

public class Main {
    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.display();
    }
}
  </code></pre>
</div>

---

## 2. Static Nested Class

A static nested class cannot access non-static members of the outer class. It is instantiated without creating an instance of the outer class.

<div class="code-container">
  <pre><code class="language-java">
class OuterClass {
    private static int staticOuterData = 20;

    static class StaticNestedClass {
        public void display() {
            System.out.println("Static Outer Data: " + staticOuterData); 
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // No need for outer class instance
        OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass();
        nested.display();
    }
}
  </code></pre>
</div>

---

## 3. Local Inner Class

A local inner class is a class defined within a block, usually inside a method. It is only accessible within that block.

<div class="code-container">
  <pre><code class="language-java">
class OuterClass {
    public void myMethod() {
        class LocalInnerClass {
            public void print() {
                System.out.println("Inside Local Inner Class");
            }
        }
        LocalInnerClass lic = new LocalInnerClass();
        lic.print();
    }
}
  </code></pre>
</div>

---

## 4. Anonymous Inner Class

An anonymous inner class is a class with no name. It is typically used to override a method of a class or interface on the fly. It is extremely useful when writing GUI event handlers or using functional interfaces (before Java 8 lambdas).

<div class="code-container">
  <pre><code class="language-java">
interface Greeting {
    void sayHello();
}

public class Main {
    public static void main(String[] args) {
        // Anonymous Inner Class implementing the interface
        Greeting greeting = new Greeting() {
            @Override
            public void sayHello() {
                System.out.println("Hello World!");
            }
        };
        greeting.sayHello();
    }
}
  </code></pre>
</div>
