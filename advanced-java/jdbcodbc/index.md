# ☕ JDBC Full Guide: Java Database Connectivity (with MySQL)
---

JDBC (Java Database Connectivity) is an API that enables Java programs to connect to databases like MySQL, Oracle, PostgreSQL, etc., execute SQL queries, and retrieve results.

<br/>

## 📌 JDBC Architecture

<br/>
<div align="center" width=700 height=200>
<img src="IMAGES/jdbcarch.jpg" class="execution" alt="exception hierarchy">
</div><br/>

<br/>

## 🔗 Steps to Connect Java with MySQL Database

### 1️⃣ Import Packages
<br/>
<div class="code-block">
  <pre><code>
<span class="keyword">import</span> java.sql.Connection<span class="punctuation">;</span>
<span class="keyword">import</span> java.sql.DriverManager<span class="punctuation">;</span>
<span class="keyword">import</span> java.sql.ResultSet<span class="punctuation">;</span>
<span class="keyword">import</span> java.sql.Statement<span class="punctuation">;</span>
<span class="keyword">import</span> java.sql.PreparedStatement<span class="punctuation">;</span>
<span class="keyword">import</span> java.sql.SQLException<span class="punctuation">;</span>
  </code></pre>
</div>

These are all part of the `java.sql` package.

<br/>

### 2️⃣ Register JDBC Driver
<br/>
<div class="code-block">
  <pre><code>
<span class="classname">Class</span><span class="punctuation">.</span><span class="method">forName</span><span class="punctuation">(</span><span class="string">"com.mysql.cj.jdbc.Driver"</span><span class="punctuation">)</span><span class="punctuation">;</span>
  </code></pre>
</div>

This loads the MySQL JDBC driver.

<br/>

### 3️⃣ Establish Connection
<br/>
<div class="code-block">
  <pre><code>
<span class="keyword">String</span> <span class="variable">url</span> = <span class="string">"jdbc:mysql://localhost:3306/mydatabase"</span><span class="punctuation">;</span> <span class="comment">// 3306 is MySQL default port</span>
<span class="keyword">String</span> <span class="variable">user</span> = <span class="string">"root"</span><span class="punctuation">;</span>
<span class="keyword">String</span> <span class="variable">password</span> = <span class="string">"your_password"</span><span class="punctuation">;</span>

<span class="classname">Connection</span> <span class="variable">conn</span> = <span class="classname">DriverManager</span><span class="punctuation">.</span><span class="method">getConnection</span><span class="punctuation">(</span><span class="variable">url</span>, <span class="variable">user</span>, <span class="variable">password</span><span class="punctuation">)</span><span class="punctuation">;</span>
  </code></pre>
</div>

- `localhost`: the host
- `3306`: the MySQL port
- `mydatabase`: your database name

<br/>

### 4️⃣ Create Statement
<br/>
<div class="code-block">
  <pre><code>
<span class="classname">Statement</span> <span class="variable">stmt</span> = <span class="variable">conn</span><span class="punctuation">.</span><span class="method">createStatement</span><span class="punctuation">();</span>
  </code></pre>
</div>


You can also use:
<div class="code-block">
  <pre><code>
<span class="classname">PreparedStatement</span> <span class="variable">pstmt</span> = <span class="variable">conn</span><span class="punctuation">.</span><span class="method">prepareStatement</span><span class="punctuation">(</span><span class="string">"INSERT INTO users VALUES (?, ?)"</span><span class="punctuation">);</span>
  </code></pre>
</div>


<br/>

### 5️⃣ Execute Queries
<br/>

#### SELECT Example:
<br/>
<div class="code-block">
  <pre><code>
<span class="classname">ResultSet</span> <span class="variable">rs</span> = <span class="variable">stmt</span><span class="punctuation">.</span><span class="method">executeQuery</span><span class="punctuation">(</span><span class="string">"SELECT * FROM users"</span><span class="punctuation">);</span>
<span class="keyword">while</span> (<span class="variable">rs</span><span class="punctuation">.</span><span class="method">next</span><span class="punctuation">())</span> <span class="punctuation">{</span>
    <span class="method">System.out.println</span><span class="punctuation">(</span><span class="variable">rs</span><span class="punctuation">.</span><span class="method">getString</span><span class="punctuation">(</span><span class="string">"username"</span><span class="punctuation">)</span><span class="punctuation">);</span>
<span class="punctuation">}</span>
  </code></pre>
</div>

#### INSERT Example:

<br/>
<div class="code-block">
  <pre><code>
<span class="keyword">String</span> <span class="variable">query</span> = <span class="string">"INSERT INTO users (username, password) VALUES (?, ?)"</span><span class="punctuation">;</span>
<span class="classname">PreparedStatement</span> <span class="variable">pstmt</span> = <span class="variable">conn</span><span class="punctuation">.</span><span class="method">prepareStatement</span><span class="punctuation">(</span><span class="variable">query</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="variable">pstmt</span><span class="punctuation">.</span><span class="method">setString</span><span class="punctuation">(</span><span class="number">1</span>, <span class="string">"john"</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="variable">pstmt</span><span class="punctuation">.</span><span class="method">setString</span><span class="punctuation">(</span><span class="number">2</span>, <span class="string">"secret"</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="variable">pstmt</span><span class="punctuation">.</span><span class="method">executeUpdate</span><span class="punctuation">()</span><span class="punctuation">;</span>
  </code></pre>
</div>


<br/>

### 6️⃣ Close Resources
<br/>
<div class="code-block">
  <pre><code>
<span class="variable">rs</span><span class="punctuation">.</span><span class="method">close</span><span class="punctuation">()</span><span class="punctuation">;</span>
<span class="variable">stmt</span><span class="punctuation">.</span><span class="method">close</span><span class="punctuation">()</span><span class="punctuation">;</span>
<span class="variable">conn</span><span class="punctuation">.</span><span class="method">close</span><span class="punctuation">()</span><span class="punctuation">;</span>
  </code></pre>
</div>


Always close connections to avoid memory leaks.

<br/>

## 🧱 JDBC Connection URL Format
<br/>

<div class="code-block">
  <pre><code>
<span class="string">jdbc:mysql://</span><span class="variable">&lt;host&gt;</span><span class="punctuation">:</span><span class="variable">&lt;port&gt;</span><span class="punctuation">/</span><span class="variable">&lt;database&gt;</span><span class="punctuation">?</span><span class="variable">&lt;options&gt;</span>
  </code></pre>
</div>


Example:
<br/>
<div class="code-block">
  <pre><code>
<span class="string">jdbc:mysql://</span><span class="variable">localhost</span><span class="punctuation">:</span><span class="number">3306</span><span class="punctuation">/</span><span class="variable">school</span><span class="punctuation">?</span><span class="keyword">useSSL</span><span class="punctuation">=</span><span class="boolean">false</span><span class="punctuation">&amp;</span><span class="keyword">serverTimezone</span><span class="punctuation">=</span><span class="string">UTC</span>
  </code></pre>
</div>


<br/>

## ⚙️ JDBC MySQL Driver Dependency (Maven)
<br/>

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>
```

If using manually, download `mysql-connector-java.jar` and add it to your classpath.

<br/>

## 📦 Key JDBC Classes and Interfaces
<br/>

| Class / Interface        | Purpose                                        |
|-------------------------|------------------------------------------------|
| DriverManager           | Manages JDBC drivers and connections           |
| Connection              | Represents DB connection                       |
| Statement               | Executes static SQL                            |
| PreparedStatement       | Executes dynamic SQL with parameters           |
| ResultSet               | Holds data from SELECT                         |
| SQLException            | Handles JDBC exceptions                        |

<br/>

## 🚫 Exception Handling in JDBC
<br/>

<div class="code-block">
  <pre><code>
<span class="keyword">try</span> <span class="punctuation">{</span>
    <span class="comment">// operations</span>
    <span class="keyword">Connection</span> <span class="variable">conn</span> = <span class="method">DriverManager.getConnection</span>(<span class="variable">url</span>, <span class="variable">user</span>, <span class="variable">pass</span><span class="punctuation">);</span>
<span class="punctuation">}</span> <span class="keyword">catch</span> (<span class="keyword">SQLException</span> <span class="variable">e</span>) <span class="punctuation">{</span>
    <span class="method">e.printStackTrace</span><span class="punctuation">();</span>
<span class="punctuation">}</span>
  </code></pre>
</div>


<br/>

## 📘 Sample JDBC Program
<br/>
<div class="code-block">
  <pre><code>
<span class="keyword">import</span> <span class="package">java.sql.*;</span>

<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">JDBCExample</span> <span class="punctuation">{</span>
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span>(<span class="keyword">String</span>[] <span class="variable">args</span>) <span class="punctuation">{</span>
        <span class="keyword">String</span> <span class="variable">url</span> = <span class="string">"jdbc:mysql://localhost:3306/testdb"</span>;
        <span class="keyword">String</span> <span class="variable">user</span> = <span class="string">"root"</span>;
        <span class="keyword">String</span> <span class="variable">password</span> = <span class="string">"password"</span>;
        <span class="keyword">try</span> <span class="punctuation">{</span>
            <span class="keyword">Class</span>.forName(<span class="string">"com.mysql.cj.jdbc.Driver"</span>);
            <span class="keyword">Connection</span> <span class="variable">conn</span> = <span class="method">DriverManager.getConnection</span>(<span class="variable">url</span>, <span class="variable">user</span>, <span class="variable">password</span><span class="punctuation">);</span>
            <span class="keyword">Statement</span> <span class="variable">stmt</span> = <span class="variable">conn</span>.<span class="method">createStatement</span><span class="punctuation">();</span>
            <span class="keyword">ResultSet</span> <span class="variable">rs</span> = <span class="variable">stmt</span>.<span class="method">executeQuery</span>(<span class="string">"SELECT * FROM students"</span>);
            <span class="keyword">while</span> (<span class="variable">rs</span>.<span class="method">next</span>()) <span class="punctuation">{</span>
                <span class="method">System.out.println</span>(<span class="variable">rs</span>.<span class="method">getInt</span>(<span class="string">"id"</span>) + <span class="string">" "</span> + <span class="variable">rs</span>.<span class="method">getString</span>(<span class="string">"name"</span>));
            <span class="punctuation">}</span>
            <span class="variable">rs</span>.<span class="method">close</span><span class="punctuation">();</span>
            <span class="variable">stmt</span>.<span class="method">close</span><span class="punctuation">();</span>
            <span class="variable">conn</span>.<span class="method">close</span><span class="punctuation">();</span>
        <span class="keyword">} catch</span> (<span class="keyword">Exception</span> <span class="variable">e</span>) <span class="punctuation">{</span>
            <span class="method">e.printStackTrace</span><span class="punctuation">();</span>
        <span class="punctuation">}</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span>
  </code></pre>
</div>


<br/>

## 🛠️ Common JDBC Ports
<br/>

| Database     | Default Port |
|--------------|--------------|
| MySQL        | 3306         |
| PostgreSQL   | 5432         |
| Oracle DB    | 1521         |
| SQL Server   | 1433         |



## 📎 Tips

- Always close ResultSet, Statement, and Connection.
- Use `PreparedStatement` to avoid SQL injection.
- Use try-with-resources for cleaner code.
- Handle exceptions gracefully.


**Happy Coding ☕**