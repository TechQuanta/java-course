# ☕ Java Control Flow Statements

<hr>

In Java, **Control Flow Statements** determine the order in which the code is executed. They help us make decisions, loop through blocks of code, and jump out or skip sections as needed.

## 🔢 How many types of Control Flow Statements?

<hr>

There are **3 main categories** of control flow in Java:

1. **Decision-Making Statements**
2. **Looping Statements**
3. **Branching Statements**

<br/>

## 1️⃣ Decision-Making Statements

<hr>
<br/>

### ➤ `if` Statement

Executes code block only if condition is `true`.

<!-- if statement -->
<div class="code-block">
<pre>
<code>
if (condition) {
    // code to execute if condition is true
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `if-else` Statement

Executes one block if true, another if false.

<!-- if-else statement -->
<div class="code-block">
<pre>
<code>
if (condition) {
    // code if true
} else {
    // code if false
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `if-else-if` Ladder

Checks multiple conditions in order.

<!-- if-else-if ladder -->
<div class="code-block">
<pre>
<code>
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if none are true
}
</code>
</pre>
</div>

<hr><br/>

### ➤ Nested `if`

An `if` inside another `if`.

<!-- nested if -->
<div class="code-block">
<pre>
<code>
if (condition1) {
    if (condition2) {
        // code if both are true
    }
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `switch` Statement

Simplifies checking multiple fixed values.

<!-- switch-case -->
<div class="code-block">
<pre>
<code>
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // default block
}
</code>
</pre>
</div>

<br/>

## 2️⃣ Looping Statements

<hr><br/>

### ➤ `for` Loop

Loops with counter logic.

<!-- for loop -->
<div class="code-block">
<pre>
<code>
for (int i = 0; i < n; i++) {
    // loop body
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `while` Loop

Continues as long as condition is true.

<!-- while loop -->
<div class="code-block">
<pre>
<code>
while (condition) {
    // loop body
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `do-while` Loop

Executes once before checking condition.

<!-- do-while loop -->
<div class="code-block">
<pre>
<code>
do {
    // loop body
} while (condition);
</code>
</pre>
</div>

<hr><br/>

### ➤ Enhanced `for-each` Loop

Iterates through arrays or collections.

<!-- enhanced for loop -->
<div class="code-block">
<pre>
<code>
for (int item : array) {
    // loop body
}
</code>
</pre>
</div>

<hr><br/>

### ➤ Nested Loops

A loop inside another loop.

<!-- nested for loop -->
<div class="code-block">
<pre>
<code>
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        // inner loop code
    }
}
</code>
</pre>
</div>

<hr><br/>

### ➤ Labeled Loops

Used to break/continue specific outer loop.

<!-- labeled loop -->
<div class="code-block">
<pre>
<code>
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == j) {
            break outer;
        }
    }
}
</code>
</pre>
</div>

<hr><br/>

### ➤ Unlabeled Loops

Break/continue affects nearest loop only.

<!-- unlabeled loop -->
<div class="code-block">
<pre>
<code>
for (int i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
}
</code>
</pre>
</div>

<br/>

## 3️⃣ Branching Statements

<hr><br/>

### ➤ `break` Statement

Exits loop or switch early.

<!-- break statement -->
<div class="code-block">
<pre>
<code>
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    // code
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `continue` Statement

Skips current loop iteration.

<!-- continue statement -->
<div class="code-block">
<pre>
<code>
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    // code for odd i
}
</code>
</pre>
</div>

<hr><br/>

### ➤ `return` Statement

Exits from method and optionally returns value.

<!-- return statement -->
<div class="code-block">
<pre>
<code>
public int sum(int a, int b) {
    return a + b;
}
</code>
</pre>
</div>
<br/>

## ✅ Nested vs Non-Nested (Bonus Tip)

<hr><br/>

- **Nested:** One control structure inside another  
  Example: `if` inside `for`, `while` inside `if`, etc.
- **Non-Nested:** Standalone control flow block  
  <br/>

<h2>🧠 Summary Table</h2>
<hr><br/>

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
