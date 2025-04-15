# Tokens & Data Types

In Java the program contains classes and methods.  

Futhur, the classes and method contain expressions and statements required to per form a specific operation these statements and expressions are made up of *tokens*.  

*Tokens* are small building blocks of Java program.  

Furthur, These two components contain variables constants, and operators.  

The Java compiler breaks the line of code into text words is called **Java tokens**.  

> **Note:** *The delimiters are not the part of the Java Tokens*


# Tokens:-
<hr><br/>
It is the smallest unit in java program.
<div align="center" width=700 height=200>
<img src="https://github.com/user-attachments/assets/77230a9c-a012-4be8-8170-441e1c4d651e" class="execution" alt="DT">
</div><br/>
There are primarily 8 tokens in java which used to write the source code.


# Keywords:-
<hr><br/>
These are pre-defined reserved words of any programming langauge.  

Each keyword has a speacial meaning it is always written in lower case.  


<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>Keyword</th>
        <th>No.</th>
        <th>Keyword</th>
        <th>No.</th>
        <th>Keyword</th>
        <th>No.</th>
        <th>Keyword</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01</td>
        <td><code>abstract</code></td>
        <td>11</td>
        <td><code>do</code></td>
        <td>21</td>
        <td><code>import</code></td>
        <td>31</td>
        <td><code>public</code></td>
      </tr>
      <tr>
        <td>02</td>
        <td><code>boolean</code></td>
        <td>12</td>
        <td><code>double</code></td>
        <td>22</td>
        <td><code>instanceof</code></td>
        <td>32</td>
        <td><code>return</code></td>
      </tr>
      <tr>
        <td>03</td>
        <td><code>byte</code></td>
        <td>13</td>
        <td><code>else</code></td>
        <td>23</td>
        <td><code>int</code></td>
        <td>33</td>
        <td><code>short</code></td>
      </tr>
      <tr>
        <td>04</td>
        <td><code>break</code></td>
        <td>14</td>
        <td><code>extends</code></td>
        <td>24</td>
        <td><code>interface</code></td>
        <td>34</td>
        <td><code>static</code></td>
      </tr>
      <tr>
        <td>05</td>
        <td><code>class</code></td>
        <td>15</td>
        <td><code>final</code></td>
        <td>25</td>
        <td><code>long</code></td>
        <td>35</td>
        <td><code>super</code></td>
      </tr>
      <tr>
        <td>06</td>
        <td><code>case</code></td>
        <td>16</td>
        <td><code>finally</code></td>
        <td>26</td>
        <td><code>native</code></td>
        <td>36</td>
        <td><code>switch</code></td>
      </tr>
      <tr>
        <td>07</td>
        <td><code>catch</code></td>
        <td>17</td>
        <td><code>float</code></td>
        <td>27</td>
        <td><code>new</code></td>
        <td>37</td>
        <td><code>synchronized</code></td>
      </tr>
      <tr>
        <td>08</td>
        <td><code>char</code></td>
        <td>18</td>
        <td><code>for</code></td>
        <td>28</td>
        <td><code>package</code></td>
        <td>38</td>
        <td><code>this</code></td>
      </tr>
      <tr>
        <td>09</td>
        <td><code>continue</code></td>
        <td>19</td>
        <td><code>if</code></td>
        <td>29</td>
        <td><code>private</code></td>
        <td>39</td>
        <td><code>throw</code></td>
      </tr>
      <tr>
        <td>10</td>
        <td><code>default</code></td>
        <td>20</td>
        <td><code>implements</code></td>
        <td>30</td>
        <td><code>protected</code></td>
        <td>40</td>
        <td><code>throws</code></td>
      </tr>
      <tr>
        <td>41</td>
        <td><code>transient</code></td>
        <td>42</td>
        <td><code>try</code></td>
        <td>43</td>
        <td><code>void</code></td>
        <td>44</td>
        <td><code>volatile</code></td>
      </tr>
      <tr>
        <td>45</td>
        <td><code>while</code></td>
        <td>46</td>
        <td><code>assert</code></td>
        <td>47</td>
        <td><code>const</code></td>
        <td>48</td>
        <td><code>enum</code></td>
      </tr>
      <tr>
        <td>49</td>
        <td><code>goto</code></td>
        <td>50</td>
        <td><code>strictfp</code></td>
      </tr>
    </tbody>
  </table>
</div>

They Define **Structure & Flow**  
`const` & `goto` are reserved but not in use.


# Identifiers
<hr><br/>
They name which user provide for class, Variable, interfaces etc.

- **Rules**  
  - Must start with `_` or `$` in JAVA.  
  - Cannot start with number.  
  - Cannot be a keyword.  
  - Case-Sensitive  

*In Java you apply Pascal and Camel Casing for identifiers.*  
Like : Camel Case `addNote()` for variables &functions etc.  
Pascal Case `HelloWorld` for class names etc.


# Literals
<hr><br/>
It is the fixed values directly used in the code  
**Types of literals**:  
- Integer: `1`  
- Floating point number: `1.2`  
- Character: `'c'`  
- String: `"Hello World!"`  
- Boolean: `true`, `false`  
- Null: `null`


# Operators
<hr><br/>
These are use to perform operation on variables and values.

*In Java there are 9 types of operators*  
Types:  
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`  
<div class="code-container">
  <h3>Arithmetic Operators:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">ArithmeticDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">int</span> <span class="var">a</span> <span class="operator">=</span> <span class="number">20</span><span class="punctuation">,</span> <span class="var">b</span> <span class="operator">=</span> <span class="number">10</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">add</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">+</span> <span class="var">b</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">sub</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">-</span> <span class="var">b</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">mul</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">*</span> <span class="var">b</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">div</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">/</span> <span class="var">b</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">mod</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">%</span> <span class="var">b</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`  
<div class="code-container">
  <h3>Assignment Operators:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">AssignmentDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">int</span> <span class="var">value</span> <span class="operator">=</span> <span class="number">5</span><span class="punctuation">;</span>
        <span class="var">value</span> <span class="operator">+=</span> <span class="number">10</span><span class="punctuation">;</span>
        <span class="var">value</span> <span class="operator">-=</span> <span class="number">3</span><span class="punctuation">;</span>
        <span class="var">value</span> <span class="operator">*=</span> <span class="number">2</span><span class="punctuation">;</span>
        <span class="var">value</span> <span class="operator">/=</span> <span class="number">4</span><span class="punctuation">;</span>
        <span class="var">value</span> <span class="operator">%=</span> <span class="number">3</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Comparision**: `==`, `!=`, `<`, `>`, `<=`, `>=`  
<div class="code-container">
  <h3>Comparison Operators:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">ComparisonDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">int</span> <span class="var">a</span> <span class="operator">=</span> <span class="number">10</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">b</span> <span class="operator">=</span> <span class="number">20</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">isEqual</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">==</span> <span class="var">b</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">isLess</span> <span class="operator">=</span> <span class="var">a</span> <span class="operator">&lt;</span> <span class="var">b</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Logical**: `&&`, `||`  
<div class="code-container">
  <h3>Logical Operators:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">LogicalDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">boolean</span> <span class="var">p</span> <span class="operator">=</span> <span class="boolean">true</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">q</span> <span class="operator">=</span> <span class="boolean">false</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">andResult</span> <span class="operator">=</span> <span class="var">p</span> <span class="operator">&amp;&amp;</span> <span class="var">q</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">orResult</span> <span class="operator">=</span> <span class="var">p</span> <span class="operator">||</span> <span class="var">q</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">notResult</span> <span class="operator">=</span> <span class="operator">!</span><span class="var">p</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`  
<div class="code-container">
  <h3>Bitwise Operators:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">BitwiseDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">int</span> <span class="var">x</span> <span class="operator">=</span> <span class="number">12</span><span class="punctuation">;</span> <span class="comment">// 1100 in binary</span>
        <span class="keyword">int</span> <span class="var">y</span> <span class="operator">=</span> <span class="number">5</span><span class="punctuation">;</span>   <span class="comment">// 0101 in binary</span>
        <span class="keyword">int</span> <span class="var">and</span> <span class="operator">=</span> <span class="var">x</span> <span class="operator">&amp;</span> <span class="var">y</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">or</span> <span class="operator">=</span> <span class="var">x</span> <span class="operator">|</span> <span class="var">y</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">xor</span> <span class="operator">=</span> <span class="var">x</span> <span class="operator">^</span> <span class="var">y</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">not</span> <span class="operator">=</span> <span class="operator">~</span><span class="var">x</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">leftShift</span> <span class="operator">=</span> <span class="var">x</span> <span class="operator"><<</span> <span class="number">1</span><span class="punctuation">;</span>
        <span class="keyword">int</span> <span class="var">rightShift</span> <span class="operator">=</span> <span class="var">x</span> <span class="operator">>></span> <span class="number">1</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Unary**: `+`, `-`, `++`, `--`, `!`  
<div class="code-container">
  <h3>Unary Operators:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">UnaryDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">int</span> <span class="var">num</span> <span class="operator">=</span> <span class="number">5</span><span class="punctuation">;</span>
        <span class="variable">++num</span><span class="punctuation">;</span> <span class="comment">// Prefix increment</span>
        <span class="variable">num++</span><span class="punctuation">;</span> <span class="comment">// Postfix increment</span>
        <span class="variable">--num</span><span class="punctuation">;</span> <span class="comment">// Prefix decrement</span>
        <span class="variable">num--</span><span class="punctuation">;</span> <span class="comment">// Postfix decrement</span>
        <span class="operator">+</span><span class="var">num</span><span class="punctuation">;</span> <span class="comment">// Unary plus</span>
        <span class="operator">-</span><span class="var">num</span><span class="punctuation">;</span> <span class="comment">// Unary minus</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Ternary**: `? :`  
<div class="code-container">
  <h3>Ternary Operator:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">TernaryDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">int</span> <span class="var">score</span> <span class="operator">=</span> <span class="number">75</span><span class="punctuation">;</span>
        <span class="keyword">String</span> <span class="var">result</span> <span class="operator">=</span> <span class="var">score</span> <span class="operator">&gt;</span> <span class="number">50</span> <span class="operator">?</span> <span class="string">"Pass"</span> <span class="operator">:</span> <span class="string">"Fail"</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

- **Instance Check**: `instanceof`  

- **Lambda**: `->`

<div class="code-container">
  <h3>Instance Check &amp; Lambda:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">MiscDemo</span> <span class="punctuation">{</span>
    <span class="keyword">public static void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span> <span class="punctuation">{</span>
        <span class="keyword">Object</span> <span class="var">obj</span> <span class="operator">=</span> <span class="string">"Hello"</span><span class="punctuation">;</span>
        <span class="keyword">boolean</span> <span class="var">isString</span> <span class="operator">=</span> <span class="var">obj</span> <span class="operator">instanceof</span> <span class="keyword">String</span><span class="punctuation">;</span>
        <span class="comment">// Lambda expression using -></span>
        <span class="keyword">Runnable</span> <span class="var">r</span> <span class="operator">=</span> <span class="parens">(</span><span class="parens">)</span> <span class="operator">-&gt;</span> <span class="punctuation">{</span>
            <span class="class-ref">System</span>.<span class="method">out</span>.<span class="method">println</span><span class="parens">(</span><span class="string">"Lambda expression"</span><span class="parens">)</span><span class="punctuation">;</span>
        <span class="punctuation">}</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>


# Seprators
<hr><br/>

Character that help to define the boundaries of the statements & code block.

**List of Seperators**: `;`, `{}`, `()`, `[]`, `,`, `.`

<div class="code-container">
  <h3>Example Program:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Example</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] <span class="var">args</span><span class="parens">)</span> <span class="comment">// Signature where the java program starts</span>
    {
        <span class="type">int</span>[] <span class="var">arr</span> = <span class="punctuation">{</span><span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span><span class="punctuation">}</span>;
        <span class="class-ref">System</span>.<span class="method">out</span>.<span class="method">println</span><span class="parens">(</span><span class="class-ref">arr</span><span class="punctuation">[</span><span class="number">0</span><span class="punctuation">]</span><span class="parens">)</span>;
    }
}
  </code></pre>
</div>


# Comments in JAVA
<hr><br/>
There are two types of comments in java.
<div class="code-container">
<h4>Single line comment</h4>
  <pre><code class="code-block">
<span class="comment">// This is single line comment</span>
  </code></pre>

  <h4>Multi line comment</h4>
  <pre><code class="code-block">
<span class="comment">/*</span> This is multiline comment <span class="comment">*/</span>
  </code></pre>

  <h4>Java Docs comment</h4>
  <pre><code class="code-block">
<span class="comment">/**</span>
<span class="comment"> * This is docs comment for java</span>
<span class="comment"> * </span><span class="comment">*/</span>
<span class="keyword">public</span> <span class="keyword">int</span> <span class="method">add</span><span class="parens">(</span><span class="type">int</span> <span class="var">a</span>, <span class="type">int</span> <span class="var">b</span>) <span class="keyword">{</span> 
  <span class="keyword">return</span> <span class="var">a</span> <span class="operator">+</span> <span class="var">b</span>;
<span class="keyword">}</span>
  </code></pre>

</div>


# White Spaces in Java
<hr><br/>

It is use to seperate tokens with its value and it is ignored by the compiler at the time of compilation.
<div class="code-container">
  <h3>Example Program:</h3>
  <pre><code class="code-block">
<span class="type">int</span> <span class="var">x</span><span class="operator">=</span><span class="number">10</span> <span class="comment">//invalid, no space between tokens</span>
<span class="type">int</span> <span class="var">y</span> <span class="operator">=</span> <span class="number">20</span> <span class="comment">//valid</span>
  </code></pre>

  <p class="note">In the first line, there is no space between the variable name and assignment operator, which makes it invalid. In the second line, spaces are correctly placed.</p>
</div>


# Special Symbols
<hr><br/>

In java special symbols create in special context in java.
Symbols: @, _ (from java 9 "_" alone is not allowed), $ can be used in identifiers not allowed for user code.
like: In java we use annotation like for overriding the method we use @override anotation to prevent it overriding.
Example: 

<div class="code-container">
  <h3>Example Program:</h3>
  <pre><code class="code-block">
<span class="annotation">@<span class="keyword">override</span></span>
<span class="keyword">public</span> <span class="keyword">void</span> <span class="method">add</span><span class="parens">(</span><span class="type">int</span> <span class="var">a</span>, <span class="type">int</span> <span class="var">b</span><span class="parens">)</span> <span class="punctuation">{</span>
    <span class="keyword">return</span> <span class="var">a</span> <span class="operator">/</span> <span class="var">b</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
  </code></pre>

  <p class="note">This method performs division between two integers.</p>
</div>

# Data Types

<div align="center" width=700 height=200>
<img src="https://github.com/user-attachments/assets/dfd27266-b2a4-40df-b1e0-b74155362cfe" class="execution" alt="DT">
</div><br/>



<br/>

# 🧠 Java Data Types
<hr><br/>

Java has two main types of data types: **Primitive** and **Non-Primitive**. Let's explore each category and their usage.

<br/>

## 🔢 Primitive Data Types
<hr><br/>

Primitive data types are the most basic data types available in Java. They hold simple values and are not objects. There are **8** primitive data types in Java.


<br/>

### 📝 List of Primitive Data Types:
<hr><br/>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Size (in bits)</th>
      <th>Default Value</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>byte</code></td>
      <td>8</td>
      <td>0</td>
      <td>Used to save memory in large arrays, where the memory savings is most needed.</td>
    </tr>
    <tr>
      <td><code>short</code></td>
      <td>16</td>
      <td>0</td>
      <td>Can be used in applications where memory is limited.</td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td>32</td>
      <td>0</td>
      <td>The default data type for integer values unless there is a concern about memory.</td>
    </tr>
    <tr>
      <td><code>long</code></td>
      <td>64</td>
      <td>0L</td>
      <td>Used when a wider range than <code>int</code> is needed.</td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td>32</td>
      <td>0.0f</td>
      <td>Used for decimal values, more precise than <code>double</code>.</td>
    </tr>
    <tr>
      <td><code>double</code></td>
      <td>64</td>
      <td>0.0d</td>
      <td>The default data type for decimal values.</td>
    </tr>
    <tr>
      <td><code>char</code></td>
      <td>16</td>
      <td>'\u0000'</td>
      <td>Used to store single characters. For example, <code>'a'</code>, <code>'1'</code>.</td>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td>1</td>
      <td>false</td>
      <td>Used for <code>true</code> or <code>false</code> values.</td>
    </tr>
  </tbody>
</table>

<br/>

## 🔢 Non-Primitive Data Types
<hr><br/>

Non-primitive data types are objects in Java. These include **arrays**, **strings**, **classes**, and **interfaces**. They are used to represent more complex types.

<br/>

### 📝 List of Non-Primitive Data Types:
<hr><br/>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>String</code></td>
      <td>A sequence of characters.</td>
    </tr>
    <tr>
      <td><code>Array</code></td>
      <td>A container object that holds a fixed number of values of a single type.</td>
    </tr>
    <tr>
      <td><code>Class</code></td>
      <td>A blueprint for creating objects. A class contains fields (variables) and methods (functions).</td>
    </tr>
    <tr>
      <td><code>Interface</code></td>
      <td>A reference type in Java, it is similar to a class, but it can contain only constants, method signatures, default methods, static methods, and nested types.</td>
    </tr>
  </tbody>
</table>


<br/>

## 🧑‍💻 Wrapper Classes
<hr><br/>

In Java, each primitive data type has a corresponding wrapper class that allows it to be treated as an object. This is useful in situations such as when you need to use primitives in collections like **ArrayLists** or **Vectors**.

<br/>

### 📝 List of Wrapper Classes:
<hr><br/>

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Primitive Type</th>
      <th>Wrapper Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>byte</code></td>
      <td><code>Byte</code></td>
    </tr>
    <tr>
      <td><code>short</code></td>
      <td><code>Short</code></td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td><code>Integer</code></td>
    </tr>
    <tr>
      <td><code>long</code></td>
      <td><code>Long</code></td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td><code>Float</code></td>
    </tr>
    <tr>
      <td><code>double</code></td>
      <td><code>Double</code></td>
    </tr>
    <tr>
      <td><code>char</code></td>
      <td><code>Character</code></td>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td><code>Boolean</code></td>
    </tr>
  </tbody>
</table>
