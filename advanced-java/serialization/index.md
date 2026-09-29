# 🧊 Serialization in Java

**Serialization** in Java is a mechanism of converting the state of an object into a byte stream. 
**Deserialization** is the reverse process where the byte stream is used to recreate the actual Java object in memory.

This is primarily used to persist object state to a file, database, or send objects over a network.

---

## 1. The `Serializable` Interface

To make a Java object serializable, the class must implement the `java.io.Serializable` interface. This is a **marker interface** (it has no methods). It simply tells the JVM that the object can be serialized.

<div class="code-container">
  <pre><code class="language-java">
import java.io.Serializable;

// Implement Serializable to allow serialization
public class Student implements Serializable {
    private static final long serialVersionUID = 1L; // Recommended best practice

    int id;
    String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
  </code></pre>
</div>

---

## 2. Serializing an Object (Writing to a file)

We use `ObjectOutputStream` connected to a `FileOutputStream` to write the object to a file.

<div class="code-container">
  <pre><code class="language-java">
import java.io.*;

public class SerializeDemo {
    public static void main(String[] args) {
        Student s1 = new Student(101, "Alice");

        try (FileOutputStream fileOut = new FileOutputStream("student.ser");
             ObjectOutputStream out = new ObjectOutputStream(fileOut)) {
             
            out.writeObject(s1);
            System.out.println("Serialized data is saved in student.ser");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
  </code></pre>
</div>

---

## 3. Deserializing an Object (Reading from a file)

We use `ObjectInputStream` connected to a `FileInputStream` to read the object back.

<div class="code-container">
  <pre><code class="language-java">
import java.io.*;

public class DeserializeDemo {
    public static void main(String[] args) {
        Student s = null;

        try (FileInputStream fileIn = new FileInputStream("student.ser");
             ObjectInputStream in = new ObjectInputStream(fileIn)) {
             
            s = (Student) in.readObject();
            
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }

        System.out.println("Deserialized Student ID: " + s.id + ", Name: " + s.name);
    }
}
  </code></pre>
</div>

---

## 4. The `transient` Keyword

If you do not want a specific field of an object to be serialized (e.g., passwords, temporary calculations), you can mark it with the `transient` keyword. When the object is deserialized, the transient field will have its default value (e.g., `null` for objects, `0` for int).

<div class="code-container">
  <pre><code class="language-java">
public class User implements Serializable {
    String username;
    transient String password; // This will NOT be saved
}
  </code></pre>
</div>
