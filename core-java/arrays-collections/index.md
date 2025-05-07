<section id="java-arrays-collections">
  <h1>Java Arrays and Collections</h1>
  <p>Arrays and collections in Java are fundamental concepts for storing and manipulating data efficiently. Arrays are used for fixed-size data, while collections provide more flexible data structures. This guide covers various types of arrays and collections in Java and how to use them effectively.</p>

  <h2>What are Arrays?</h2>
  <p>An <strong>array</strong> in Java is a container object that holds a fixed number of values of a single type. Arrays are used when you know the number of elements in advance and when the size of the collection does not change over time.</p>

  <h2>Creating Arrays</h2>
  <p>Arrays in Java can be created in two main ways:</p>
  <ul>
    <li>One-Dimensional Arrays</li>
    <li>Multi-Dimensional Arrays</li>
  </ul>

  <h3>One-Dimensional Arrays</h3>
  <br/>
  <div align="center" width=700 height=200>
  <img src="IMAGES/onedarray.png" class="execution" alt="exception hierarchy">
  </div><br/>
  <p>A one-dimensional array stores a sequence of elements of the same type. It's the simplest type of array in Java.</p>

  <h4>Example of One-Dimensional Array:</h4><br>
<div class="example">
  <pre><code class="language-java">
    <span class="keyword">int[]</span> <span class="variable">numbers</span> = <span class="keyword">new</span> <span class="class-name">int</span>[<span class="number">5</span>]; <span class="comment">// Declare an array of 5 integers</span>
    <span class="variable">numbers</span>[<span class="number">0</span>] = <span class="number">10</span>; <span class="comment">// Assign values</span>
    <span class="variable">numbers</span>[<span class="number">1</span>] = <span class="number">20</span>;
    <span class="variable">numbers</span>[<span class="number">2</span>] = <span class="number">30</span>;
    <span class="variable">numbers</span>[<span class="number">3</span>] = <span class="number">40</span>;
    <span class="variable">numbers</span>[<span class="number">4</span>] = <span class="number">50</span>;
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">numbers</span>[<span class="number">2</span>]); <span class="comment">// Output: 30</span>
  </code></pre>
</div>
<br>

  <h3>Multi-Dimensional Arrays</h3>
  <br/>
  <div align="center" width=700 height=200>
  <img src="IMAGES/twodarray.jpg" class="execution" alt="exception hierarchy">
  </div><br/>
  <p>Multi-dimensional arrays are arrays of arrays, like a matrix or table of data.</p>

  <h4>Example of Multi-Dimensional Array:</h4><br>
<div class="example">
  <pre><code class="language-java">
    <span class="keyword">int[][]</span> <span class="variable">matrix</span> = <span class="keyword">new</span> <span class="class-name">int</span>[<span class="number">3</span>][<span class="number">3</span>]; <span class="comment">// Declare a 3x3 matrix</span>
    <span class="variable">matrix</span>[<span class="number">0</span>][<span class="number">0</span>] = <span class="number">1</span>;
    <span class="variable">matrix</span>[<span class="number">0</span>][<span class="number">1</span>] = <span class="number">2</span>;
    <span class="variable">matrix</span>[<span class="number">0</span>][<span class="number">2</span>] = <span class="number">3</span>;
    <span class="variable">matrix</span>[<span class="number">1</span>][<span class="number">0</span>] = <span class="number">4</span>;
    <span class="variable">matrix</span>[<span class="number">1</span>][<span class="number">1</span>] = <span class="number">5</span>;
    <span class="variable">matrix</span>[<span class="number">1</span>][<span class="number">2</span>] = <span class="number">6</span>;
    <span class="variable">matrix</span>[<span class="number">2</span>][<span class="number">0</span>] = <span class="number">7</span>;
    <span class="variable">matrix</span>[<span class="number">2</span>][<span class="number">1</span>] = <span class="number">8</span>;
    <span class="variable">matrix</span>[<span class="number">2</span>][<span class="number">2</span>] = <span class="number">9</span>;
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">matrix</span>[<span class="number">1</span>][<span class="number">1</span>]); <span class="comment">// Output: 5</span>
  </code></pre>
</div>

<section id="array-operations"><br>
  <h2>Array Operations</h2>
  <p>Once you have created an array in Java, you can perform several operations to manipulate or access its data. Common operations include sorting, searching, updating, and traversing arrays. These operations are vital in handling large sets of data efficiently.</p>

  <h3>Sorting Arrays</h3>
  <p>Java provides the built-in utility method <code>Arrays.sort()</code> from the <code>java.util</code> package to sort arrays in ascending order. This method uses a dual-pivot Quicksort algorithm for primitives and a modified MergeSort for objects.</p>

  <h4>Example of Sorting Array:</h4><br>
  <div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.Arrays</span>;
    <span class="keyword">int[]</span> <span class="variable">numbers</span> = <span class="array">{
      <span class="number">5</span>, <span class="number">3</span>, <span class="number">8</span>, <span class="number">1</span>, <span class="number">2</span>
    };
    <span class="class-name">Arrays</span>.<span class="method">sort</span>(<span class="variable">numbers</span>); <span class="comment">// Sort the array in ascending order</span>
    <span class="keyword">for</span>(<span class="keyword">int</span> <span class="variable">num</span> : <span class="variable">numbers</span>) {
      <span class="keyword">System.out</span>.<span class="method">print</span>(<span class="variable">num</span> + <span class="string">" "</span>); <span class="comment">// Output: 1 2 3 5 8</span>
    }
  </code></pre>
</div>


  <p><strong>Note:</strong> Sorting modifies the original array. For descending order, you can sort and then reverse manually or use wrapper classes and comparators.</p>

  <h3>Searching Arrays</h3>
  <p>Java provides the <code>Arrays.binarySearch()</code> method to search for elements in a sorted array. It returns the index of the key if found; otherwise, it returns a negative value indicating the insertion point.</p>

  <h4>Example of Searching in an Array:</h4><br>
  <div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.Arrays</span>;
    <span class="keyword">int[]</span> <span class="variable">numbers</span> = <span class="array">{
      <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">5</span>, <span class="number">8</span>
    };
    <span class="keyword">int</span> <span class="variable">index</span> = <span class="class-name">Arrays</span>.<span class="method">binarySearch</span>(<span class="variable">numbers</span>, <span class="number">5</span>); <span class="comment">// Search for element 5</span>
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="string">"Element found at index: "</span> + <span class="variable">index</span>); <span class="comment">// Output: 3</span>
  </code></pre>
</div>


  <p><strong>Important:</strong> The array must be <em>sorted</em> before using <code>binarySearch()</code>. Otherwise, the result is undefined.</p>

  <h3>Other Array Operations</h3>
  <ul>
    <li><strong>Updating Elements:</strong> Use the index to modify array values directly: <code>arr[2] = 100;</code></li>
    <li><strong>Traversing:</strong> Use <code>for</code>, <code>for-each</code>, or <code>while</code> loops to iterate through arrays.</li>
    <li><strong>Copying:</strong> Use <code>Arrays.copyOf()</code> or <code>System.arraycopy()</code> to copy arrays.</li>
    <li><strong>Filling:</strong> Use <code>Arrays.fill(arr, value)</code> to assign a value to all elements.</li>
    <li><strong>Comparing:</strong> Use <code>Arrays.equals(arr1, arr2)</code> for content comparison.</li>
  </ul>

  <h3>Time Complexity Overview</h3>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Operation</th>
        <th>Time Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Access</td>
        <td>O(1)</td>
      </tr>
      <tr>
        <td>Search (Linear)</td>
        <td>O(n)</td>
      </tr>
      <tr>
        <td>Search (Binary on sorted)</td>
        <td>O(log n)</td>
      </tr>
      <tr>
        <td>Insertion / Deletion (fixed size)</td>
        <td>Not allowed (requires new array)</td>
      </tr>
      <tr>
        <td>Sort</td>
        <td>O(n log n)</td>
      </tr>
    </tbody>
  </table>

  <h3>Limitations of Arrays</h3>
  <ul>
    <li>Fixed size – cannot grow dynamically.</li>
    <li>Insertion and deletion are not flexible.</li>
    <li>Manual effort required for complex operations.</li>
    <li>No direct support for advanced data structures (like hash maps or stacks).</li>
  </ul>

  <h3>When to Use Arrays?</h3>
  <p>Arrays are ideal when:</p>
  <ul>
    <li>You know the number of elements in advance.</li>
    <li>Memory allocation needs to be tightly controlled.</li>
    <li>You require fast random access to elements.</li>
  </ul>
</section>

<br>

  <h2>Java Collections Framework Overview</h2>
  <p>The <strong>Collections Framework</strong> in Java provides dynamic data structures like lists, sets, and maps that grow and shrink as needed.</p>

  <ul>
    <li><strong>List</strong>: Ordered collection. Allows duplicates. Example: <code>ArrayList</code>, <code>LinkedList</code></li>
    <li><strong>Set</strong>: Unordered collection. No duplicates. Example: <code>HashSet</code>, <code>TreeSet</code></li>
    <li><strong>Map</strong>: Stores key-value pairs. Example: <code>HashMap</code>, <code>TreeMap</code></li>
  </ul>

  <h4>Example using ArrayList:</h4><br>
  <div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.ArrayList</span>;
    <span class="variable">ArrayList&lt;String&gt;</span> <span class="variable">fruits</span> = <span class="keyword">new</span> <span class="class-name">ArrayList</span>&lt;&gt;();
    <span class="variable">fruits</span>.<span class="method">add</span>(<span class="string">"Apple"</span>);
    <span class="variable">fruits</span>.<span class="method">add</span>(<span class="string">"Banana"</span>);
    <span class="variable">fruits</span>.<span class="method">add</span>(<span class="string">"Orange"</span>);
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">fruits</span>.<span class="method">get</span>(<span class="number">1</span>)); <span class="comment">// Output: Banana</span>
  </code></pre>
</div>

</section>
<br>

### Introduction to Collections

<br>

Java provides several built-in collection classes that allow you to store and manipulate groups of objects dynamically. The most common collections include:

1. **List**: An ordered collection that allows duplicate elements.
2. **Set**: A collection that does not allow duplicate elements.
3. **Queue**: A collection used for holding elements prior to processing.
4. **Map**: A collection of key-value pairs.

<br>

#### List

The `List` interface provides an ordered collection of elements. Common implementations include `ArrayList`, `LinkedList`, and `Vector`.

##### Example of List:
<br>

<div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.ArrayList</span>;
    <span class="keyword">import</span> <span class="class-name">java.util.List</span>;
    <span class="class-name">List&lt;String&gt;</span> <span class="variable">fruits</span> = <span class="keyword">new</span> <span class="class-name">ArrayList</span>&lt;&gt;();
    <span class="variable">fruits</span>.<span class="method">add</span>(<span class="string">"Apple"</span>);
    <span class="variable">fruits</span>.<span class="method">add</span>(<span class="string">"Banana"</span>);
    <span class="variable">fruits</span>.<span class="method">add</span>(<span class="string">"Mango"</span>);
    <span class="keyword">for</span>(<span class="keyword">String</span> <span class="variable">fruit</span> : <span class="variable">fruits</span>) {
      <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">fruit</span>);
    }
  </code></pre>
</div>
<br>

#### Set

The `Set` interface does not allow duplicate elements. The most common implementation of `Set` is `HashSet`.

##### Example of Set:
<br>

<div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.HashSet</span>;
    <span class="keyword">import</span> <span class="class-name">java.util.Set</span>;
    <span class="class-name">Set&lt;String&gt;</span> <span class="variable">colors</span> = <span class="keyword">new</span> <span class="class-name">HashSet</span>&lt;&gt;();
    <span class="variable">colors</span>.<span class="method">add</span>(<span class="string">"Red"</span>);
    <span class="variable">colors</span>.<span class="method">add</span>(<span class="string">"Blue"</span>);
    <span class="variable">colors</span>.<span class="method">add</span>(<span class="string">"Green"</span>);
    <span class="keyword">for</span>(<span class="keyword">String</span> <span class="variable">color</span> : <span class="variable">colors</span>) {
      <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">color</span>);
    }
  </code></pre>
</div>
<br>

#### Queue

The `Queue` interface represents a collection designed for holding elements prior to processing. `LinkedList` and `PriorityQueue` are common implementations.

##### Example of Queue:
<br>

<div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.LinkedList</span>;
    <span class="keyword">import</span> <span class="class-name">java.util.Queue</span>;
    <span class="class-name">Queue&lt;String&gt;</span> <span class="variable">queue</span> = <span class="keyword">new</span> <span class="class-name">LinkedList</span>&lt;&gt;();
    <span class="variable">queue</span>.<span class="method">add</span>(<span class="string">"First"</span>);
    <span class="variable">queue</span>.<span class="method">add</span>(<span class="string">"Second"</span>);
    <span class="variable">queue</span>.<span class="method">add</span>(<span class="string">"Third"</span>);
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">queue</span>.<span class="method">poll</span>()); <span class="comment">// Output: First</span>
  </code></pre>
</div>
<br>

#### Map

The `Map` interface represents a collection of key-value pairs. `HashMap` is one of the most commonly used implementations.

##### Example of Map:
<br>

<div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.HashMap</span>;
    <span class="keyword">import</span> <span class="class-name">java.util.Map</span>;
    <span class="class-name">Map&lt;String, Integer&gt;</span> <span class="variable">ageMap</span> = <span class="keyword">new</span> <span class="class-name">HashMap</span>&lt;&gt;();
    <span class="variable">ageMap</span>.<span class="method">put</span>(<span class="string">"Alice"</span>, <span class="number">30</span>);
    <span class="variable">ageMap</span>.<span class="method">put</span>(<span class="string">"Bob"</span>, <span class="number">25</span>);
    <span class="variable">ageMap</span>.<span class="method">put</span>(<span class="string">"Charlie"</span>, <span class="number">35</span>);
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">ageMap</span>.<span class="method">get</span>(<span class="string">"Bob"</span>)); <span class="comment">// Output: 25</span>
  </code></pre>
</div>
<br>

### ArrayList vs LinkedList
<br>

Both `ArrayList` and `LinkedList` implement the `List` interface, but they have different internal structures and performance characteristics.

- **ArrayList**: Based on a dynamic array. It provides fast random access but slower insertions and deletions in the middle of the list.
- **LinkedList**: Based on a doubly linked list. It provides faster insertions and deletions but slower random access.

### Working with Maps
<br>

Maps are powerful structures that associate keys with values. Here’s an example of using a `Map` in Java:

##### Example of Using Maps:
<br>

<div class="example">
  <pre><code class="language-java">
    <span class="keyword">import</span> <span class="class-name">java.util.HashMap</span>;
    <span class="keyword">import</span> <span class="class-name">java.util.Map</span>;
    <span class="class-name">Map&lt;Integer, String&gt;</span> <span class="variable">map</span> = <span class="keyword">new</span> <span class="class-name">HashMap</span>&lt;&gt;();
    <span class="variable">map</span>.<span class="method">put</span>(<span class="number">1</span>, <span class="string">"Apple"</span>);
    <span class="variable">map</span>.<span class="method">put</span>(<span class="number">2</span>, <span class="string">"Banana"</span>);
    <span class="variable">map</span>.<span class="method">put</span>(<span class="number">3</span>, <span class="string">"Cherry"</span>);
    <span class="keyword">System.out</span>.<span class="method">println</span>(<span class="variable">map</span>.<span class="method">get</span>(<span class="number">1</span>)); <span class="comment">// Output: Apple</span>
  </code></pre>
</div>

<br>
<br>

### Array and Collection Performance
<br>

- **Arrays**: Arrays are faster than collections when you need fixed-size storage and need to perform operations like access and iteration.
- **Collections**: Collections are more flexible and allow dynamic resizing, but may have overhead depending on the type (e.g., `ArrayList` vs `LinkedList`).
<br>

### Best Practices for Working with Arrays and Collections
<br>

- Use arrays when you know the size in advance and need fast access to elements.
- Use collections when you need flexibility and when the size of the data structure may change.
- Choose the appropriate collection type based on your use case (e.g., `HashMap` for key-value pairs, `ArrayList` for ordered data).
<br>

### Summary
<br>

- **Arrays**: Fixed-size, fast access to elements.
- **Collections**: Flexible, dynamic data structures for storing and manipulating objects.
- **List, Set, Queue, Map**: Different types of collections to suit various needs.
- **Best Practices**: Choose the right data structure based on size, performance, and requirements.

Mastering arrays and collections in Java is crucial for handling data efficiently in applications. By understanding when and how to use each type, you can write optimized and scalable code.
