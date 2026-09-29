# 🔤 String Handling in Java

In Java, strings are widely used to represent sequences of characters. Java provides three main classes for working with strings: `String`, `StringBuilder`, and `StringBuffer`.

---

## 1. The `String` Class

The `String` class in Java is **immutable**, meaning once a `String` object is created, its value cannot be changed. Any operation that modifies a string actually creates a new `String` object.

### Creating Strings

<div class="code-container">
  <pre><code class="language-java">
// Using string literal (stored in String Pool)
String s1 = "Hello Java";

// Using new keyword (stored in Heap memory)
String s2 = new String("Hello Java");
  </code></pre>
</div>

### Common String Methods

| Method | Description |
|--------|-------------|
| `length()` | Returns the length of the string. |
| `charAt(int index)` | Returns the character at the specified index. |
| `substring(int begin, int end)` | Returns a part of the string. |
| `toLowerCase()` / `toUpperCase()` | Converts the string to lower or upper case. |
| `equals(Object anObject)` | Compares contents of two strings. |
| `contains(CharSequence s)` | Checks if the string contains the specified sequence. |
| `replace(char old, char new)` | Replaces occurrences of a character. |
| `trim()` | Removes leading and trailing spaces. |

---

## 2. `StringBuilder` Class

Since `String` is immutable, modifying strings frequently (like in a loop) is inefficient because it creates many intermediate objects. `StringBuilder` is **mutable** and provides an efficient way to manipulate strings. It is not thread-safe.

<div class="code-container">
  <pre><code class="language-java">
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");    // Hello World
sb.insert(5, ",");      // Hello, World
sb.reverse();           // dlroW ,olleH
  </code></pre>
</div>

---

## 3. `StringBuffer` Class

`StringBuffer` is similar to `StringBuilder` (it is mutable), but it is **synchronized (thread-safe)**. It should be used in multithreaded environments where multiple threads might modify the same string.

<div class="code-container">
  <pre><code class="language-java">
StringBuffer sbf = new StringBuffer("Java");
sbf.append(" Programming");
System.out.println(sbf.toString());
  </code></pre>
</div>

---

## ⚖️ `String` vs `StringBuilder` vs `StringBuffer`

| Feature | `String` | `StringBuilder` | `StringBuffer` |
|---------|----------|-----------------|----------------|
| **Mutability** | Immutable | Mutable | Mutable |
| **Thread Safety** | Thread-safe (due to immutability) | Not Thread-safe | Thread-safe |
| **Performance** | Slow (if modifying) | Fast | Slower than StringBuilder |
| **Use Case** | When string value won't change | Single-threaded string manipulation | Multi-threaded string manipulation |

---

## String Pool

Java optimizes memory by maintaining a **String Constant Pool** in the heap memory. When you create a string literal, Java checks the pool first. If the string already exists, it returns a reference to the pooled instance instead of creating a new object.

<div class="code-container">
  <pre><code class="language-java">
String str1 = "Java";
String str2 = "Java";
System.out.println(str1 == str2); // true, both point to the same object in the pool
  </code></pre>
</div>
