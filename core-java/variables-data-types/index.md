# Tokens & Data Types

In Java the program contains classes and methods.  

Futhur, the classes and method contain expressions and statements required to per form a specific operation these statements and expressions are made up of *tokens*.  

*Tokens* are small building blocks of Java program.  

Furthur, These two components contain variables constants, and operators.  

The Java compiler breaks the line of code into text words is called **Java tokens**.  

> **Note:** *The delimiters are not the part of the Java Tokens*


# Tokens:-
---
It is the smallest unit in java program.
<div align="center">
  <img src="https://github.com/user-attachments/assets/77230a9c-a012-4be8-8170-441e1c4d651e" alt="JVM" width="700" height="200"/>
</div>
There are primarily 8 tokens in java which used to write the source code.


# Keywords:-
---
These are pre-defined reserved words of any programming langauge.  

Each keyword has a speacial meaning it is always written in lower case.  


### ✅ JAVA Keywords
---

| No. | Keyword     | No. | Keyword     | No. | Keyword     | No. | Keyword     | No. | Keyword     |
|-----|-------------|-----|-------------|-----|-------------|-----|-------------|-----|-------------|
| 01  | `abstract`  | 11  | `do`        | 21  | `import`    | 31  | `public`    | 41  | `transient` |
| 02  | `boolean`   | 12  | `double`    | 22  | `instanceof`| 32  | `return`    | 42  | `try`       |
| 03  | `byte`      | 13  | `else`      | 23  | `int`       | 33  | `short`     | 43  | `void`      |
| 04  | `break`     | 14  | `extends`   | 24  | `interface` | 34  | `static`    | 44  | `volatile`  |
| 05  | `class`     | 15  | `final`     | 25  | `long`      | 35  | `super`     | 45  | `while`     |
| 06  | `case`      | 16  | `finally`   | 26  | `native`    | 36  | `switch`    | 46  | `assert`    |
| 07  | `catch`     | 17  | `float`     | 27  | `new`       | 37  | `synchronized`|47| `const`     |
| 08  | `char`      | 18  | `for`       | 28  | `package`   | 38  | `this`      | 48  | `enum`      |
| 09  | `continue`  | 19  | `if`        | 29  | `private`   | 39  | `throw`     | 49  | `goto`      |
| 10  | `default`   | 20  | `implements`| 30  | `protected` | 40  | `throws`    | 50  | `strictfp`  |

They Define **Structure & Flow**  
`const` & `goto` are reserved but not in use.


# Identifiers
---
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
---
It is the fixed values directly used in the code  
**Types of literals**:  
- Integer: `1`  
- Floating point number: `1.2`  
- Character: `'c'`  
- String: `"Hello World!"`  
- Boolean: `true`, `false`  
- Null: `null`


# Operators
---
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
---
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
---
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
---
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
---
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

