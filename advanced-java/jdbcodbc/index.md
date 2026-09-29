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
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.SQLException;
  </code></pre>
</div>

These are all part of the `java.sql` package.

<br/>

### 2️⃣ Register JDBC Driver
<br/>
<div class="code-block">
  <pre><code>
Class.forName("com.mysql.cj.jdbc.Driver");
  </code></pre>
</div>

This loads the MySQL JDBC driver.

<br/>

### 3️⃣ Establish Connection
<br/>
<div class="code-block">
  <pre><code>
String url = "jdbc:mysql://localhost:3306/mydatabase"; // 3306 is MySQL default port
String user = "root";
String password = "your_password";

Connection conn = DriverManager.getConnection(url, user, password);
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
Statement stmt = conn.createStatement();
  </code></pre>
</div>


You can also use:
<div class="code-block">
  <pre><code>
PreparedStatement pstmt = conn.prepareStatement("INSERT INTO users VALUES (?, ?)");
  </code></pre>
</div>


<br/>

### 5️⃣ Execute Queries
<br/>

#### SELECT Example:
<br/>
<div class="code-block">
  <pre><code>
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
while (rs.next()) {
    System.out.println(rs.getString("username"));
}
  </code></pre>
</div>

#### INSERT Example:

<br/>
<div class="code-block">
  <pre><code>
String query = "INSERT INTO users (username, password) VALUES (?, ?)";
PreparedStatement pstmt = conn.prepareStatement(query);
pstmt.setString(1, "john");
pstmt.setString(2, "secret");
pstmt.executeUpdate();
  </code></pre>
</div>


<br/>

### 6️⃣ Close Resources
<br/>
<div class="code-block">
  <pre><code>
rs.close();
stmt.close();
conn.close();
  </code></pre>
</div>


Always close connections to avoid memory leaks.

<br/>

## 🧱 JDBC Connection URL Format
<br/>

<div class="code-block">
  <pre><code>
jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;database&gt;?&lt;options&gt;
  </code></pre>
</div>


Example:
<br/>
<div class="code-block">
  <pre><code>
jdbc:mysql://localhost:3306/school?useSSL=false&amp;serverTimezone=UTC
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
try {
    // operations
    Connection conn = DriverManager.getConnection(url, user, pass);
} catch (SQLException e) {
    e.printStackTrace();
}
  </code></pre>
</div>


<br/>

## 📘 Sample JDBC Program
<br/>
<div class="code-block">
  <pre><code>
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " " + rs.getString("name"));
            }
            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
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
