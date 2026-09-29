# 🏷️ Annotations in Java

Annotations provide metadata about the program. They are not part of the program itself, meaning they do not directly affect the operation of the code they annotate. However, they can be used by the compiler, or by frameworks at runtime.

---

## 1. Built-in Java Annotations

Java provides several built-in annotations in the `java.lang` package.

### `@Override`
Instructs the compiler to ensure that the annotated method actually overrides a method from the superclass. If it doesn't, a compilation error occurs.

### `@Deprecated`
Marks a method, class, or field as obsolete. The compiler generates a warning if someone tries to use it.

### `@SuppressWarnings`
Tells the compiler to suppress specific warnings that it would normally generate.

<div class="code-container">
  <pre><code class="language-java">
class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }

    @Deprecated
    public void oldMethod() {
        System.out.println("Don't use this anymore!");
    }
}
  </code></pre>
</div>

---

## 2. Creating Custom Annotations

You can define your own annotations using the `@interface` keyword. 

To define how and where a custom annotation can be used, Java provides **Meta-Annotations** (annotations that apply to other annotations).

### Meta-Annotations:
- `@Retention`: Specifies how long the annotation should be retained (`SOURCE`, `CLASS`, `RUNTIME`).
- `@Target`: Specifies where the annotation can be applied (e.g., `METHOD`, `TYPE`, `FIELD`).

<div class="code-container">
  <pre><code class="language-java">
import java.lang.annotation.*;

// Meta-annotations
@Retention(RetentionPolicy.RUNTIME) 
@Target(ElementType.METHOD)         
public @interface MyCustomAnnotation {
    String author() default "John Doe";
    int version() default 1;
}
  </code></pre>
</div>

### Using Custom Annotations

<div class="code-container">
  <pre><code class="language-java">
public class TestClass {
    
    @MyCustomAnnotation(author = "Alice", version = 2)
    public void myMethod() {
        System.out.println("Running method...");
    }
}
  </code></pre>
</div>
