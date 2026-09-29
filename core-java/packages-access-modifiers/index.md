# 📦 Packages and Access Modifiers

## 1. Packages in Java

A **package** in Java is a mechanism to encapsulate a group of classes, sub-packages, and interfaces. Packages are used for:
1. Preventing naming conflicts.
2. Making searching/locating and usage of classes, interfaces, enumerations, and annotations easier.
3. Providing controlled access (using access modifiers).

### Types of Packages
- **Built-in Packages**: These are packages from the Java API. Examples: `java.lang`, `java.util`, `java.io`, `java.sql`.
- **User-defined Packages**: These are the packages you create yourself.

### Creating and Using a Package

To create a package, use the `package` keyword at the very top of your Java file.

<div class="code-container">
  <pre><code class="language-java">
package com.mycompany.utils;

public class MathUtils {
    public int add(int a, int b) {
        return a + b;
    }
}
  </code></pre>
</div>

To use a class from another package, you use the `import` keyword.

<div class="code-container">
  <pre><code class="language-java">
import com.mycompany.utils.MathUtils;

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        System.out.println(math.add(5, 3));
    }
}
  </code></pre>
</div>

---

## 2. Access Modifiers

Access modifiers define the scope or accessibility of a class, constructor, variable, method, or data member. Java has **four** types of access modifiers:

### 1. `private`
The access level of a `private` modifier is only within the class. It cannot be accessed from outside the class.

### 2. `default` (Package-Private)
If you don't specify any modifier, it is treated as `default`. The access level is only within the package.

### 3. `protected`
The access level of a `protected` modifier is within the package and outside the package through child classes (inheritance).

### 4. `public`
The access level of a `public` modifier is everywhere. It can be accessed from within the class, outside the class, within the package, and outside the package.

---

## ⚖️ Access Modifiers Visibility Table

| Modifier | Within Class | Within Package | Outside Package (Subclass) | Outside Package (Global) |
|----------|--------------|----------------|----------------------------|--------------------------|
| `public` | ✔️ Yes | ✔️ Yes | ✔️ Yes | ✔️ Yes |
| `protected` | ✔️ Yes | ✔️ Yes | ✔️ Yes | ❌ No |
| `default` | ✔️ Yes | ✔️ Yes | ❌ No | ❌ No |
| `private` | ✔️ Yes | ❌ No | ❌ No | ❌ No |

---

### Example of Access Modifiers

<div class="code-container">
  <pre><code class="language-java">
public class AccessExample {
    public int publicVar = 1;
    protected int protectedVar = 2;
    int defaultVar = 3; // default access
    private int privateVar = 4;

    public void display() {
        // All variables are accessible within the class
        System.out.println(publicVar + protectedVar + defaultVar + privateVar);
    }
}
  </code></pre>
</div>
