# Advanced Java Threads in Java
---
Java supports multithreading to allow concurrent execution. Threads can be created in **multiple ways**, and understanding each is crucial for writing scalable, concurrent applications.



## ✅ Ways to Create Threads in Java

### 1. By Extending `Thread` Class
<br/>
<div class="code-container">
<pre><code class="language-java">
<span class="keyword">class</span> <span class="class-name">MyThread</span> <span class="keyword">extends</span> <span class="class-name">Thread</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">run</span>() {
        <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Thread using Thread class"</span>);
    }
}

<span class="class-name">MyThread</span> <span class="variable-name">t1</span> = <span class="keyword">new</span> <span class="class-name">MyThread</span>();
<span class="variable-name">t1</span>.<span class="method">start</span>();
</code></pre>
</div>



<br/>

### 2. By Implementing `Runnable` Interface

<br/>
<div class="code-container">
<pre><code class="language-java">
<span class="keyword">class</span> <span class="class-name">MyRunnable</span> <span class="keyword">implements</span> <span class="class-name">Runnable</span> {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">run</span>() {
        <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Thread using Runnable interface"</span>);
    }
}

<span class="class-name">Thread</span> <span class="variable-name">t2</span> = <span class="keyword">new</span> <span class="class-name">Thread</span>(<span class="keyword">new</span> <span class="class-name">MyRunnable</span>());
<span class="variable-name">t2</span>.<span class="method">start</span>();
</code></pre>
</div>


<br/>

### 3. Using **Anonymous Inner Class**

<br/>
<div class="code-container">
<pre><code class="language-java">
<span class="class-name">Thread</span> <span class="variable-name">t3</span> = <span class="keyword">new</span> <span class="class-name">Thread</span>() {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">run</span>() {
        <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Thread using anonymous Thread class"</span>);
    }
};
<span class="variable-name">t3</span>.<span class="method">start</span>();
</code></pre>
</div>



<br/>

### 4. Using Anonymous `Runnable` Class
<br/>
<div class="code-container">
<pre><code class="language-java">
<span class="class-name">Thread</span> <span class="variable-name">t4</span> = <span class="keyword">new</span> <span class="class-name">Thread</span>(<span class="keyword">new</span> <span class="class-name">Runnable</span>() {
    <span class="keyword">public</span> <span class="keyword">void</span> <span class="function-name">run</span>() {
        <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Thread using anonymous Runnable"</span>);
    }
});
<span class="variable-name">t4</span>.<span class="method">start</span>();
</code></pre>
</div>




### 5. Using Lambda Expression (Java 8+)
<br/>
<div class="code-container">
<pre><code class="language-java">
<span class="class-name">Thread</span> <span class="variable-name">t5</span> = <span class="keyword">new</span> <span class="class-name">Thread</span>(() -> {
    <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Thread using lambda expression"</span>);
});
<span class="variable-name">t5</span>.<span class="method">start</span>();
</code></pre>
</div>




### 6. Using `ExecutorService` (Thread Pool)
<br/>
<div class="code-container">
<pre><code class="language-java">
<span class="keyword">import</span> <span class="classname">java.util.concurrent.ExecutorService</span>;
<span class="keyword">import</span> <span class="classname">java.util.concurrent.Executors</span>;

<span class="keyword">public class</span> <span class="classname">ExecutorExample</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(<span class="type">String</span>[] <span class="variable-name">args</span>) {
        <span class="classname">ExecutorService</span> <span class="variable-name">executor</span> = 
            <span class="classname">Executors</span>.newFixedThreadPool(<span class="number">2</span>);
        <span class="variable-name">executor</span>.<span class="method">execute</span>(() -> {
            <span class="class-ref">System</span>.<span class="class-ref">out</span>.<span class="method">println</span>(<span class="string">"Thread using ExecutorService"</span>);
        });
        <span class="variable-name">executor</span>.<span class="method">shutdown</span>();
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
