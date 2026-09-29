# Advanced Java Threads in Java
---
Java supports multithreading to allow concurrent execution. Threads can be created in **multiple ways**, and understanding each is crucial for writing scalable, concurrent applications.



## ✅ Ways to Create Threads in Java

### 1. By Extending `Thread` Class
<br/>
<div class="code-container">
<pre><code class="language-java">
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread using Thread class");
    }
}

MyThread t1 = new MyThread();
t1.start();
</code></pre>
</div>



<br/>

### 2. By Implementing `Runnable` Interface

<br/>
<div class="code-container">
<pre><code class="language-java">
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread using Runnable interface");
    }
}

Thread t2 = new Thread(new MyRunnable());
t2.start();
</code></pre>
</div>


<br/>

### 3. Using **Anonymous Inner Class**

<br/>
<div class="code-container">
<pre><code class="language-java">
Thread t3 = new Thread() {
    public void run() {
        System.out.println("Thread using anonymous Thread class");
    }
};
t3.start();
</code></pre>
</div>



<br/>

### 4. Using Anonymous `Runnable` Class
<br/>
<div class="code-container">
<pre><code class="language-java">
Thread t4 = new Thread(new Runnable() {
    public void run() {
        System.out.println("Thread using anonymous Runnable");
    }
});
t4.start();
</code></pre>
</div>




### 5. Using Lambda Expression (Java 8+)
<br/>
<div class="code-container">
<pre><code class="language-java">
Thread t5 = new Thread(() -> {
    System.out.println("Thread using lambda expression");
});
t5.start();
</code></pre>
</div>




### 6. Using `ExecutorService` (Thread Pool)
<br/>
<div class="code-container">
<pre><code class="language-java">
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorExample {
    public static void main(String[] args) {
        ExecutorService executor = 
            Executors.newFixedThreadPool(2);
        executor.execute(() -> {
            System.out.println("Thread using ExecutorService");
        });
        executor.shutdown();
    }
}
</code></pre>
</div>





### 🔁 Summary Table
<br/>

| Method                             | Description                              |
|------------------------------------|------------------------------------------|
| Extending Thread                   | Simple but can't extend another class    |
| Implementing Runnable              | Flexible, supports multiple inheritance  |
| Anonymous Thread class             | Quick for one-time thread logic          |
| Anonymous Runnable                 | Common pattern for multi-threading       |
| Lambda Expression                  | Shorter syntax (Java 8+)                 |
| ExecutorService                    | Best for thread pooling and scaling      |

---

Would you like me to also include `Callable`, `Future`, `ScheduledExecutorService`, or `ReentrantLock` usage in this doc?
mail us on techquanta.community@gmail.com
