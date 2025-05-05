# ☕ Java Control Flow Statements

<hr>

In Java, **Control Flow Statements** determine the order in which the code is executed. They help us make decisions, loop through blocks of code, and jump out or skip sections as needed.

## How many types of Control Flow Statements?



There are **3 main categories** of control flow in Java:

1. **Decision-Making Statements**
2. **Looping Statements**
3. **Branching Statements**

<br/>

# `1️⃣ Decision-Making Statements`
<hr/>

<br/>

### ➤ `if` Statement

Executes code block only if condition is `true`.

<!-- if statement -->
<div class="code-block">
  <pre><code>
<span class="keyword">if</span> (<span class="variable">condition</span>) <span class="punctuation">{</span>
    <span class="comment">// code to execute if condition is true</span>
<span class="punctuation">}</span>
  </code></pre>
</div>



<br/>

### ➤ `if-else` Statement

Executes one block if true, another if false.

<!-- if-else statement -->
<div class="code-block">
  <pre><code>
<span class="keyword">if</span> (<span class="variable">condition</span>) <span class="punctuation">{</span>
    <span class="comment">// code if true</span>
<span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
    <span class="comment">// code if false</span>
<span class="punctuation">}</span>
  </code></pre>
</div>



<br/>

### ➤ `if-else-if` Ladder

Checks multiple conditions in order.

<!-- if-else-if ladder -->
<div class="code-block">
  <pre><code>
<span class="keyword">if</span> (<span class="variable">condition1</span>) <span class="punctuation">{</span>
    <span class="comment">// code if condition1 is true</span>
<span class="punctuation">}</span> <span class="keyword">else if</span> (<span class="variable">condition2</span>) <span class="punctuation">{</span>
    <span class="comment">// code if condition2 is true</span>
<span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
    <span class="comment">// code if none are true</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

<br/>

### ➤ Nested `if`

An `if` inside another `if`.

<!-- nested if -->
<div class="code-block">
  <pre><code>
<span class="keyword">if</span> (<span class="variable">condition1</span>) <span class="punctuation">{</span>
    <span class="keyword">if</span> (<span class="variable">condition2</span>) <span class="punctuation">{</span>
        <span class="comment">// code if both are true</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>



<br/>

### ➤ `switch` Statement

Simplifies checking multiple fixed values.

<!-- switch-case -->
<div class="code-block">
  <pre><code>
<span class="keyword">switch</span> (<span class="variable">expression</span>) <span class="punctuation">{</span>
    <span class="keyword">case</span> <span class="value">value1</span><span class="punctuation">:</span>
        <span class="comment">// code block</span>
        <span class="keyword">break</span><span class="punctuation">;</span>
    <span class="keyword">case</span> <span class="value">value2</span><span class="punctuation">:</span>
        <span class="comment">// code block</span>
        <span class="keyword">break</span><span class="punctuation">;</span>
    <span class="keyword">default</span><span class="punctuation">:</span>
        <span class="comment">// default block</span>
<span class="punctuation">}</span>
  </code></pre>
</div>


<br/>

# `2️⃣ Looping Statements`

<hr><br/>

### ➤ `for` Loop

Loops with counter logic.

<!-- for loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">for</span> (<span class="datatype">int</span> <span class="variable">i</span> = <span class="number">0</span>; <span class="variable">i</span> &lt; <span class="variable">n</span>; <span class="variable">i</span>++) {
    <span class="comment">// loop body</span>
}
  </code></pre>
</div>


<br/>

### ➤ `while` Loop

Continues as long as condition is true.

<!-- while loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">while</span> (<span class="variable">condition</span>) {
    <span class="comment">// loop body</span>
}
  </code></pre>
</div>


<br/>

### ➤ `do-while` Loop

Executes once before checking condition.

<!-- do-while loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">do</span> {
    <span class="comment">// loop body</span>
} <span class="keyword">while</span> (<span class="variable">condition</span>);
  </code></pre>
</div>


<br/>

### ➤ Enhanced `for-each` Loop

Iterates through arrays or collections.

<!-- enhanced for loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">item</span> : <span class="variable">array</span>) {
    <span class="comment">// loop body</span>
}
  </code></pre>
</div>


<br/>

### ➤ Nested Loops

A loop inside another loop.

<!-- nested for loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">i</span> = 0; <span class="variable">i</span> &lt; <span class="variable">n</span>; <span class="variable">i</span>++) {
    <span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">j</span> = 0; <span class="variable">j</span> &lt; <span class="variable">m</span>; <span class="variable">j</span>++) {
        <span class="comment">// inner loop code</span>
    }
}
  </code></pre>
</div>


<br/>

### ➤ Labeled Loops

Used to break/continue specific `outer` loop.

<!-- labeled loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">outer</span>:
<span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">i</span> = 0; <span class="variable">i</span> &lt; 3; <span class="variable">i</span>++) {
    <span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">j</span> = 0; <span class="variable">j</span> &lt; 3; <span class="variable">j</span>++) {
        <span class="keyword">if</span> (<span class="variable">i</span> == <span class="variable">j</span>) {
            <span class="keyword">break</span> <span class="variable">outer</span>;
        }
    }
}
  </code></pre>
</div>


<br/>

### ➤ Unlabeled Loops

Break/continue affects nearest loop only.

<!-- unlabeled loop -->
<div class="code-block">
  <pre><code>
<span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">i</span> = 0; <span class="variable">i</span> &lt; 5; <span class="variable">i</span>++) {
    <span class="keyword">if</span> (<span class="variable">i</span> == 3) {
        <span class="keyword">break</span>;
    }
}
  </code></pre>
</div>


<br/>

## 3️⃣ Branching Statements

<br/>

### ➤ `break` Statement

Exits loop or switch early.

<!-- break statement -->
<div class="code-block">
  <pre><code>
<span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">i</span> = 0; <span class="variable">i</span> &lt; 10; <span class="variable">i</span>++) {
    <span class="keyword">if</span> (<span class="variable">i</span> == 5) {
        <span class="keyword">break</span>;
    }
    <span class="comment">// code</span>
}
  </code></pre>
</div>


<br/>

### ➤ `continue` Statement

Skips current loop iteration.

<!-- continue statement -->
<div class="code-block">
  <pre><code>
<span class="keyword">for</span> (<span class="keyword">int</span> <span class="variable">i</span> = 0; <span class="variable">i</span> &lt; 10; <span class="variable">i</span>++) {
    <span class="keyword">if</span> (<span class="variable">i</span> % 2 == 0) {
        <span class="keyword">continue</span>;
    }
    <span class="comment">// code for odd i</span>
}
  </code></pre>
</div>


<br/>

### ➤ `return` Statement

Exits from method and optionally returns value.

<!-- return statement -->
<div class="code-block">
  <pre><code>
<span class="modifier">public</span> <span class="keyword">int</span> <span class="function">sum</span>(<span class="keyword">int</span> <span class="variable">a</span>, <span class="keyword">int</span> <span class="variable">b</span>) {
    <span class="keyword">return</span> <span class="variable">a</span> + <span class="variable">b</span>;
}
  </code></pre>
</div>

<br/>

## ✅ Nested vs Non-Nested (Bonus Tip)

<br/>

- **Nested:** One control structure inside another  
  Example: `if` inside `for`, `while` inside `if`, etc.
- **Non-Nested:** Standalone control flow block  
  <br/>
<br/>

## 🧠 Summary Table

<hr/>
<br/>

<div align=center >
<table border="1" cellspacing="0" cellpadding="6" >
  <thead>
    <tr>
      <th>Type</th>
      <th>Statements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Decision-Making</td>
      <td><code> if</code>, <code>if-else</code>, <code>if-else-if</code>, <code>switch</code>, nested <code>if</code></td>
    </tr>
    <tr>
      <td>Looping</td>
      <td><code> for</code>, <code>while</code>, <code>do-while</code>, <code>for-each</code>, nested, labeled/unlabeled</td>
    </tr>
    <tr>
      <td>Branching</td>
      <td><code> break</code>, <code>continue</code>, <code>return</code></td>
    </tr>
  </tbody>
</table>
</div>
