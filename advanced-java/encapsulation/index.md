# 🔐 Encapsulation in Java (with Advanced Concepts)

---

**Encapsulation** is one of the four core concepts of **Object-Oriented Programming (OOP)** in Java. It refers to the technique of **hiding internal object details** and providing **controlled access** to them through public methods.

Encapsulation ensures that the internal representation of an object is hidden from the outside and only accessible through a well-defined interface.

<br/>

## 🚀 Why is Encapsulation Important?

<br/>

* ✅ Protects object integrity by preventing unauthorized access.
* ✅ Makes code more **modular**, **readable**, and **maintainable**.
* ✅ Allows **validation logic** inside setter methods.
* ✅ Enhances **security** by limiting what parts of the code can interact with the object's data.

<br/>

## 🧱 Key Principles of Encapsulation
<br/>

1. **Use `private` access modifier** for class variables to restrict direct access.
2. **Provide public `getters` and `setters`** to access or update private fields.
3. **Perform validation or processing** within setters, if needed.
4. **Hide implementation details** and expose only what’s necessary.

<br/>

## ✅ Simple Example of Encapsulation

<br/>
<div class="code-container">
  <pre><code class="code-block">
    class Student {
        private String name;
        private int age;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public int getAge() {
            return age;
        }
        public void setAge(int age) {
            if (age > 0) {
                this.age = age;
            }
        }
    }
  </code></pre>
</div>


## 👨‍💻 Accessing the Encapsulated Fields

<br/>
<div class="code-container">
  <pre><code class="code-block">
    public class EncapsulationTest {
        public static void main(String[] args) {
            Student st = new Student();
            st.setName("Alice");
            st.setAge(20);
            System.out.println("Name: " + st.getName());
            System.out.println("Age: " + st.getAge());
        }
    }
  </code></pre>
</div>


<br/>

## 🧠 Advanced Encapsulation Concepts

<br/>

### 🔄 Immutable Classes

* Make class fields `final` and remove setters.
* Provides thread safety and ensures consistent state.

<br/><br/>
<div class="code-container">
  <pre><code class="code-block">
    final class Employee {
        private final String name;
        private final int id;
        public Employee(String name, int id) {
            this.name = name;
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public int getId() {
            return id;
        }
    }
  </code></pre>
</div>


<br/>

### 🛑 Restricting Field Modification

* Encapsulation lets you protect critical variables:

<br/>
<div class="code-container">
  <pre><code class="code-block">
    class BankAccount {
        private double balance;
        public double getBalance() {
            return balance;
        }
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }
        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
            }
        }
    }
  </code></pre>
</div>


<br/>

### 🔐 Encapsulation + Access Levels

* Use `protected`, `private`, and `default` wisely in complex applications with inheritance and packages.

<br/>

### 📦 Encapsulation in API Design

* Frameworks often encapsulate internal logic and provide interfaces or abstract classes for user extension.

<br/>

### 🧪 Encapsulation and Unit Testing

* Good encapsulation allows easier mocking and testing of classes with minimal interdependence.

<br/>

## 🧩 Summary

---

<br/>

* Encapsulation is **fundamental for security and clean design** in Java.
* It promotes **data hiding**, **controlled access**, and **modular code**.
* Advanced techniques like **immutability** and **custom validation logic** improve robustness.
<br/>

> "Design classes like black boxes: expose only what is necessary and hide the rest."



✅ Now you're ready to encapsulate like a pro!
