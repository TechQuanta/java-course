# JDBC (Java Database Connectivity)

## Introduction to JDBC
JDBC (Java Database Connectivity) is an API in Java that enables applications to connect and interact with databases. It allows Java programs to execute SQL statements, retrieve results, and manage database connections.
## Topics Covered:
- JDBC Architecture
- JDBC Components
- DriverManager
- Connection
- Statement / PreparedStatement
- ResultSet
- SQLException

## 📌 JDBC Architecture

<br/>
<div align="center" width=700 height=200>
<img src="IMAGES/jdbcarch.jpg" class="execution" alt="exception hierarchy">
</div><br/>

<br/>

## JDBC Components
### 1. JDBC API

The JDBC (Java Database Connectivity) API provides various methods and interfaces for easy communication with databases. It includes two key packages:

<h3>1. java.sql</h3>
<p>This package is part of Java Standard Edition (Java SE) and contains the core interfaces and classes for accessing and processing data in relational databases. It provides essential functionalities such as:</p>
<ul>
    <li>Establishing connections to the database</li>
    <li>Executing SQL queries</li>
    <li>Handling result sets</li>
</ul>

<h3>2. javax.sql</h3>
<p>This package is part of Java Enterprise Edition (Java EE) and extends the capabilities of <code>java.sql</code> by offering additional features such as:</p>
<ul>
    <li>Connection pooling</li>
    <li>Statement pooling</li>
    <li>Data source management</li>
</ul>

### 2. DriverManager
- **Description**: Manages a list of database drivers and establishes connections.
- **Key Methods**:
  - `getConnection(String url, String user, String password)`
  - `registerDriver(Driver driver)`

### 3. Connection
- **Description**: Provides methods for establishing a connection and managing transactions.
- **Key Methods**:
  - `createStatement()`
  - `prepareStatement(String sql)`
  - `close()`

### 4. Statement
- **Description**: Used to execute SQL queries against the database.
- **Key Methods**:
  - `executeQuery(String sql)`
  - `executeUpdate(String sql)`

### 5. PreparedStatement
- **Description**: Used for executing precompiled SQL statements with or without parameters.
- **Key Methods**:
  - `setInt(int parameterIndex, int value)`
  - `setString(int parameterIndex, String value)`

### 6. ResultSet
- **Description**: Represents the result set of a query.
- **Key Methods**:
  - `next()`
  - `getString(int columnIndex)`
  - `close()`

### 7. SQLException
- **Description**: Provides information on database access errors.
- **Key Methods**:
  - `getMessage()`
  - `getSQLState()`


# JDBC Drivers

## What is JDBC?

JDBC (Java Database Connectivity) is a Java API that enables Java applications to connect and interact with databases. It is part of the Java Standard Edition and provides classes in the `java.sql` and `javax.sql` packages. JDBC allows applications to:
- Connect to a data source (database).
- Send SQL queries and updates.
- Retrieve and process query results.

## JDBC Driver Architecture

Applications use the JDBC API, which communicates with the JDBC Driver Manager. The Driver Manager handles different database drivers to establish connections with databases such as Oracle, SQL Server, etc.


<br/>
<div align="center" width=700 height=200>
<img src="IMAGES/jdbcarch.jpg" class="execution" alt="exception hierarchy">
</div><br/>

<br/>
## Types of JDBC Drivers

### Type-1: JDBC-ODBC Bridge Driver
- **Description:** Converts JDBC calls to ODBC calls to connect to the database.The JDBC-ODBC bridge driver converts JDBC method calls into the ODBC function calls. Type-1 driver is also called Universal driver because it can be used to connect to any of the databases.

  - Built into JDK; no separate installation required.
  - Database independent.


### Type-2: Native-API Driver
- **Description:** Uses database native client-side libraries to convert JDBC calls.Uses client-side libraries to convert JDBC calls into native database API calls. Requires local API for each database, providing more secure data transfer. Also known as a Partially Java driver.


  - Better performance than Type-1.
  - More secure due to direct native calls.


### Type-3: Network Protocol Driver
- **Description:** Uses middleware that converts JDBC calls to database-specific protocols.
  - Fully written in Java; portable.
  - No client-side libraries required.
  - Supports multiple databases and additional middleware features.

### Type-4: Thin Driver
- **Description:** Directly interacts with the database using native protocol; no middleware involved.

  - No native library or middleware installation.
  - Fully Java-based; portable.

## Choosing the Right Driver

- Use **Type-4** drivers for single database applications (e.g., Oracle).
- Use **Type-3** drivers when accessing multiple different databases simultaneously.
- Use **Type-2** drivers if Type-3 or Type-4 are unavailable for your database.
- **Type-1** drivers are mainly for development and testing, not recommended for production.

## Conclusion

Each JDBC driver type serves different scenarios with trade-offs in performance, portability, and installation requirements. Choosing the appropriate driver depends on your application’s needs and database environment.


# Java Database Connectivity

During programming, you may need to interact with a database to solve your problem. Java provides JDBC to connect to databases and work with them. Using standard library routines, you can open a connection to the database. JDBC allows the integration of SQL calls into a general programming environment by providing library routines, which interface with the database. In particular, Java’s JDBC has a rich collection of routines which makes such an interface extremely simple and intuitive.

## Steps to Connect to a Database in Java

To connect with any database through a Java application, follow these 7 steps:

<ol>
    <li><b>Load the specific driver</b> with respect to your database.</li>
    <li><b>Establish the connection</b> with the loaded driver.</li>
    <li><b>Create some statements</b> to deal with the database.</li>
    <li><b>Create a result set</b> if any data is returned by the query.</li>
    <li><b>Fetch the data</b> from the existing result set in any direction.</li>
    <li><b>Close all statements</b> and result sets.</li>
    <li><b>Close the established connection</b> with the database.</li>
</ol>

### Load the vendor-specific driver

This is very important because you have to ensure portability and code reuse. The API should be designed as independent of the version or the vendor of a database as possible. Since different DBMS’s have different behaviors, you need to tell the driver manager which DBMS you wish to use, so that it can invoke the correct driver.

For example, an Oracle driver is loaded using the following code snippet:

```java
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
```

###  Establishing A Connection

The first thing to do is to install Java, JDBC, and the DBMS on the working machines. Since you want to interface with a database, you would need a driver for this specific database.

#### Make the connection

Once the driver is loaded and ready for a connection to be made, you may create an instance of a Connection object using:

```java
Connection con = DriverManager.getConnection(url, username, password);
```

Let us see what these parameters passed to the `getConnection` method of the `DriverManager` class mean. The first string is the URL for the database, including the protocol, the vendor, the driver, and the server port number. The username and password are the credentials for the database.

The connection `con` returned is an open connection, which will be used to pass SQL statements to the database.



## JDBC STATMENTS

## Creating JDBC Statements
A JDBC `Statement` object is used to send SQL statements to the DBMS. It is entirely different from the SQL statement. A JDBC `Statement` object is an open connection, and not any single SQL Statement. You can think of a JDBC `Statement` object as a channel sitting on a connection, and passing one or more of the SQL statements to the DBMS.

An active connection is needed to create a `Statement` object. The following code is a snippet using our `Connection` object `con`:

```java
Statement statmnt = con.createStatement();
```

At this point, you will notice that a `Statement` object exists, but it does not have any SQL statement to pass on to the DBMS.

### Creating JDBC PreparedStatement

A `PreparedStatement` object is more convenient and efficient for sending SQL statements to the DBMS. The main feature, which distinguishes `PreparedStatement` objects from `Statement` class objects, is that it gives an SQL statement right when it is created. This SQL statement is then sent to the DBMS right away, where it is compiled. 

Another advantage offered by the `PreparedStatement` object is that if you need to use the same or similar query with different parameters multiple times, the statement can be compiled and optimized by the DBMS just once. While with a normal `Statement`, each use of the same SQL statement requires a compilation all over again.

`PreparedStatements` are also created with a `Connection` method. The following code shows how to create a parameterized SQL statement with three input parameters:

```java
PreparedStatement prepareUpdatePrice = con.prepareStatement(
    "UPDATE Employee SET emp_address =? WHERE emp_code = '1001' AND emp_name =?");
prepareUpdatePrice.setInt(1, 3);
prepareUpdatePrice.setString(2, "Renuka");
prepareUpdatePrice.setString(3, "101, Sector-8, Vasundhara, M.P");
```
### Callable Statement in JDBC

A `CallableStatement` is used to execute stored procedures in the database. Stored procedures are precompiled SQL statements that can be called with parameters. They are useful for executing complex operations that involve multiple SQL statements.

<h3>Syntax</h3>

```java
CallableStatement cstmt = con.prepareCall("{call ProcedureName(?, ?)}");
```


<p><code>{call ProcedureName(?, ?)}</code>: Calls a stored procedure named <code>ProcedureName</code> with placeholders <code>?</code> for input parameters.</p>

<h3>Methods to Execute</h3>
<ul>
    <li><code>execute()</code>: Executes the stored procedure and returns a boolean indicating whether the result is a ResultSet (true) or an update count (false).</li>
    <li><code>executeQuery()</code>: Executes a stored procedure that returns a ResultSet.</li>
    <li><code>executeUpdate()</code>: Executes a stored procedure that performs an update and returns the number of rows affected.</li>
</ul>

<h3>Example</h3>

```java
<pre><code class="language-java">
// Java Program illustrating 
// Callable Statement in JDBC
import java.sql.*;

public class Geeks {
    public static void main(String[] args) {
        // Try block to check if any exceptions occur
        try {
            // Load and register the driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish a connection
            Connection con = DriverManager.getConnection("jdbc:mysql:///world", "root", "12345");

            // Create a CallableStatement
            CallableStatement cs = con.prepareCall("{call GetPeopleInfo()}");

            // Execute the stored procedure
            ResultSet res = cs.executeQuery();

            // Process the results
            while (res.next()) {
                // Print and display elements (Name and Age)
                System.out.println("Name : " + res.getString("name"));
                System.out.println("Age : " + res.getInt("age"));
            }

            // Close resources
            res.close();
            cs.close();
            con.close();
        } 
        // Catch block for SQL exceptions
        catch (SQLException e) {
            e.printStackTrace();
        } 
        // Catch block for ClassNotFoundException
        catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```
</code></pre>


<h3>Output</h3>
<p>Output for Callable Statement</p>

<h3>Explanation</h3>
<p>This Java code demonstrates how to use a <code>CallableStatement</code> in JDBC to execute a stored procedure. It connects to a MySQL database and prepares a <code>CallableStatement</code> to call a stored procedure named <code>GetPeopleInfo</code>. After executing the procedure, it runs a SELECT query to retrieve and display all records from the people table. Exception handling is included to manage potential SQL and class loading errors.</p>

### Executing CREATE/INSERT/UPDATE Statements of SQL

Executing SQL statements in JDBC varies depending on the intention of the SQL statement. DDL (Data Definition Language) statements such as table creation and table alteration statements, as well as statements to update the table contents, all are executed using the `executeUpdate` method.

```java
Statement stmt = con.createStatement();
stmt.executeUpdate("CREATE TABLE Employee (emp_name VARCHAR2(40), emp_address VARCHAR2(40), emp_sal REAL)");
stmt.executeUpdate("INSERT INTO Employee VALUES ('Archana', '10, Down California', 30000)");
```


<br> <div class="section"> <h2>1. JDBC Setup</h2> <p>Before using JDBC, ensure you have a JDBC driver (e.g., MySQL JDBC driver: <code>mysql-connector-java</code>).</p> <h3>MySQL Setup Example</h3> 
```java
 // Add MySQL JDBC jar to your project // Example: mysql-connector-j-8.0.33.jar </code></pre> </div>
 ``` 
<br> <div class="section"> <h2>2. Connecting to the Database</h2> <p>Use <code>DriverManager.getConnection()</code> to connect to the database.</p>

 ```java
import java.sql.*;
public class DBConnection {
public static void main(String[] args) {
String url = "jdbc:mysql://localhost:3306/testdb";
String user = "root";
String password = "yourpassword";

pgsql
Copy
Edit
    try {
        Connection conn = DriverManager.getConnection(url, user, password);
        System.out.println("Connection successful!");
        conn.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
}
```


</div>
<br> <div class="section"> <h2>3. Creating Tables</h2>

```java
import java.sql.*;
public class CreateTable {
public static void main(String[] args) {
String url = "jdbc:mysql://localhost:3306/testdb";
String user = "root";
String password = "yourpassword";

pgsql
Copy
Edit
    String sql = "CREATE TABLE IF NOT EXISTS users (" +
                 "id INT AUTO_INCREMENT PRIMARY KEY," +
                 "name VARCHAR(100)," +
                 "email VARCHAR(100))";

    try (Connection conn = DriverManager.getConnection(url, user, password);
         Statement stmt = conn.createStatement()) {
        stmt.execute(sql);
        System.out.println("Table created.");
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
}

```

</code></pre>

</div>
<br> <div class="section"> <h2>4. Inserting Data</h2> 

```java
import java.sql.*;
public class InsertData {
public static void main(String[] args) {
String sql = "INSERT INTO users (name, email) VALUES (?, ?)";

java
Copy
Edit
    try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "yourpassword");
         PreparedStatement pstmt = conn.prepareStatement(sql)) {

        pstmt.setString(1, "Alice");
        pstmt.setString(2, "alice@example.com");
        pstmt.executeUpdate();

        System.out.println("Data inserted successfully.");
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
} 

```


</div>
<br> <div class="section"> <h2>5. Reading Data (SELECT)</h2>

```java
import java.sql.*;
public class ReadData {
public static void main(String[] args) {
String sql = "SELECT * FROM users";

less
Copy
Edit
    try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "yourpassword");
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(sql)) {

        while (rs.next()) {
            System.out.println("ID: " + rs.getInt("id") +
                               ", Name: " + rs.getString("name") +
                               ", Email: " + rs.getString("email"));
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
}

```

</code></pre>

</div>
<br> <div class="section"> <h2>6. Updating Data</h2> 

```java
import java.sql.*;
public class UpdateData {
public static void main(String[] args) {
String sql = "UPDATE users SET email=? WHERE name=?";

java
Copy
Edit
    try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "yourpassword");
         PreparedStatement pstmt = conn.prepareStatement(sql)) {

        pstmt.setString(1, "alice@newdomain.com");
        pstmt.setString(2, "Alice");
        pstmt.executeUpdate();

        System.out.println("Record updated.");
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
}

```
</code></pre>

</div>
<br> <div class="section"> <h2>7. Deleting Data</h2>

 ```java
import java.sql.*;
public class DeleteData {
public static void main(String[] args) {
String sql = "DELETE FROM users WHERE name=?";

java
Copy
Edit
    try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "yourpassword");
         PreparedStatement pstmt = conn.prepareStatement(sql)) {

        pstmt.setString(1, "Alice");
        pstmt.executeUpdate();

        System.out.println("Record deleted.");
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
}
```
</code></pre>

</div>
<br> <div class="section"> <h2>8. Handling Exceptions</h2>
 <p>JDBC operations often throw <code>SQLException</code>. Always use try-catch blocks and close connections.</p> <p>Use try-with-resources to auto-close resources.</p>
<br> <div class="section"> <h2>9. Best Practices</h2> <ul> <li>Always close your <code>Connection</code>, <code>Statement</code>, and <code>ResultSet</code>.</li> <li>Use <code>PreparedStatement</code> to prevent SQL injection.</li> <li>Use connection pooling for large applications.</li> </ul> </div>

</br>

### Executing SELECT Statements

A query is expected to return a set of tuples as the result, and not change the state of the database. Not surprisingly, there is a corresponding method called `executeQuery`, which returns its results as a `ResultSet` object.

```java
String ename, eaddress;
float esal;
ResultSet rs = stmt.executeQuery("SELECT * FROM Employee");
while (rs.next()) {
    ename = rs.getString("emp_name");
    eaddress = rs.getString("emp_address");
    esal = rs.getFloat("emp_salary");
    System.out.println(ename + " address is " + eaddress + " and draws salary " + esal + " in dollars");
}
```

# Execute SQL Query in Java

Now comes the most important part: executing the query. The query here is an SQL Query. We can have multiple types of queries, some of which are as follows:

<ul>
    <li>The query for updating/inserting a table in a database.</li>
    <li>The query for retrieving data.</li>
</ul>

The <code>executeQuery()</code> method of the <code>Statement</code> interface is used to execute queries for retrieving values from the database. This method returns an object of <code>ResultSet</code> that can be used to get all the records of a table.

The <code>executeUpdate(sql query)</code> method of the <code>Statement</code> interface is used to execute queries for updating/inserting.

<h3>Pseudo Code</h3>


```java
int m = st.executeUpdate(sql);

if (m == 1) 
    System.out.println("Inserted successfully: " + sql);
else 
    System.out.println("Insertion failed");
```

<h3>Example</h3>

The below Java program demonstrates how to connect to a MySQL database, execute a query, retrieve data, and display it.

```java
// This code is for establishing connection with MySQL
// database and retrieving data
// from db Java Database connectivity

/*
 * 1. import ---> java.sql
 * 2. load and register the driver ---> com.jdbc.
 * 3. create connection
 * 4. create a statement
 * 5. execute the query
 * 6. process the results
 * 7. close
 */

import java.sql.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        String url = "jdbc:mysql://localhost:3306/database_name"; // Database details
        String username = "rootgfg"; // MySQL credentials
        String password = "gfg123";
        String query = "select * from students"; // Query to be run

        // Load and register the driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Establish connection
        Connection con = DriverManager.getConnection(url, username, password);
        System.out.println("Connection Established successfully");

        // Create a statement
        Statement st = con.createStatement();

        // Execute the query
        ResultSet rs = st.executeQuery(query);

        // Process the results
        while (rs.next()) {
            String name = rs.getString("name"); // Retrieve name from db
            System.out.println(name); // Print result on console
        }

        // Close the statement and connection
        st.close();
        con.close();
        System.out.println("Connection Closed....");
    }
}
```
<p> <code>sql</code> is the SQL query of the type <code>String</code>.</p>

## Closing Connections in Java

So, finally, we have sent the data to the specified location, and now we are on the verge of completing our task. By closing the connection, the objects of <code>Statement</code> and <code>ResultSet</code> will be closed automatically. The <code>close()</code> method of the <code>Connection</code> interface is used to close the connection, as shown below:

```java
con.close();
```

<p>It is recommended to use <code>try-with-resources</code> to automatically close resources like <code>Connection</code>, <code>Statement</code>, and <code>ResultSet</code>. This ensures that all resources are closed properly, even if an exception occurs.</p>

<h3>Example of try-with-resources</h3>

```java
try (Connection con = DriverManager.getConnection(url, username, password);
     Statement st = con.createStatement();
     ResultSet rs = st.executeQuery(query)) {

    // Process the results
    while (rs.next()) {
        String name = rs.getString("name"); // Retrieve name from db
        System.out.println(name); // Print result on console
    }
} catch (SQLException e) {
    e.printStackTrace();
}
```
# Open Database Connectivity (ODBC)

Open Database Connectivity (ODBC) is a standard API (Application Programming Interface) for accessing database management systems (DBMS). The goal of ODBC is to make it possible to access any data from any application, regardless of which DBMS is handling the data.

## Key Components of ODBC

1. **ODBC Driver**: A driver that translates ODBC calls into commands that the DBMS understands. Each DBMS has its own ODBC driver.

2. **Data Source Name (DSN)**: A data structure that contains information about a specific database that an ODBC driver needs to connect to it. This includes the database name, directory, and driver information.

3. **ODBC API**: A set of functions that applications can use to interact with the ODBC driver and perform database operations.

## How ODBC Works

1. An application calls an ODBC function.
2. The ODBC driver manager loads the appropriate driver for the requested data source.
3. The driver translates the ODBC function calls into commands that the DBMS understands.
4. The DBMS processes the commands and returns the results to the driver.
5. The driver returns the results to the application.

## Example: Connecting to a Database Using ODBC in C#

Below is a simple example of how to establish an ODBC connection to a Microsoft Access database in C#.

```csharp
using System;
using System.Data.Odbc;

class Program
{
    static void Main()
    {
        string connectionString = "Driver={Microsoft Access Driver (*.mdb)};DBQ=yourdatabasename.mdb;";
        using (OdbcConnection connection = new OdbcConnection(connectionString))
        {
            try
            {
                connection.Open();
                Console.WriteLine("Connection Open!");

                // Execute a query or perform database operations here

            }
            catch (Exception ex)
            {
                Console.WriteLine("Cannot open connection! " + ex.Message);
            }
        } // Connection is automatically closed here
    }
}
```
# Differences Between ODBC and JDBC
 JDBC (Java Database Connectivity) and ODBC (Open Database Connectivity). These both are API standards used for connecting applications to databases. ODBC can be used by various programming languages as it is a general API standard. But JDBC is Java-specific and it provides a Java-based interface for database access.
<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>ODBC (Open Database Connectivity)</th>
      <th>JDBC (Java Database Connectivity)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Full Form</td>
      <td>Open Database Connectivity</td>
      <td>Java Database Connectivity</td>
    </tr>
    <tr>
      <td>Introduced By</td>
      <td>Microsoft in 1992</td>
      <td>SUN Microsystems in 1997</td>
    </tr>
    <tr>
      <td>Language Support</td>
      <td>Supports multiple languages (C, C++, Java, etc.)</td>
      <td>Supports only Java</td>
    </tr>
    <tr>
      <td>Platform Dependency</td>
      <td>Primarily for Windows platform</td>
      <td>Platform-independent</td>
    </tr>
    <tr>
      <td>Driver Development</td>
      <td>Mostly developed in native languages (C, C++)</td>
      <td>Developed in Java</td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>Not recommended for Java applications due to performance and platform dependency issues</td>
      <td>Highly recommended for Java applications with no performance or platform dependency issues</td>
    </tr>
    <tr>
      <td>Programming Paradigm</td>
      <td>Procedural</td>
      <td>Object-oriented</td>
    </tr>
  </tbody>
</table>

# ODBC Connection in C#

Below is a simple example of how to establish an ODBC connection to a Microsoft Access database in a C# Windows Forms application.

<h3>Complete Code Example</h3>

```java


<pre><code class="language-csharp">
using System;
using System.Windows.Forms;
using System.Data.Odbc;

namespace WindowsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // Connection string to connect to the Microsoft Access database
            string connectionString = "Driver={Microsoft Access Driver (*.mdb)};DBQ=yourdatabasename.mdb;";
            OdbcConnection cnn = new OdbcConnection(connectionString);

            try
            {
                // Open the connection
                cnn.Open();
                MessageBox.Show("Connection Open!");
            }
            catch (Exception ex)
            {
                // Show error message if connection fails
                MessageBox.Show("Cannot open connection! " + ex.Message);
            }
            finally
            {
                // Ensure the connection is closed
                if (cnn.State == System.Data.ConnectionState.Open)
                {
                    cnn.Close();
                }
            }
        }
    }
}
```

</code></pre>

# JDBC Connection in Java

Below is an example of how to establish a JDBC connection to a MySQL database in Java.

<h3>Complete Code Example</h3>

```java

<pre><code class="language-java">
import java.sql.*;

class JavaTester {
   public static void main(String args[]) {
      try {
         // Load the MySQL JDBC driver
         Class.forName("com.mysql.jdbc.Driver");
         
         // Establish the connection
         Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/yourDBname", "username", "userpassword");
         
         // Create a statement
         Statement stmt = con.createStatement();
         
         // Execute a query
         ResultSet rs = stmt.executeQuery("select * from emp");
         
         // Process the result set
         while (rs.next()) {
            System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getString(3));
         }
         
         // Close the connection
         con.close();
      } catch (Exception e) {
         System.out.println(e);
      }
   }
}
```

</code></pre>

## Summary of Differences

<ol>
  <li><b>Full Form</b>: ODBC stands for Open Database Connectivity, while JDBC stands for Java Database Connectivity.</li>
  <li><b>Introduced By</b>: ODBC was introduced by Microsoft in 1992, whereas JDBC was introduced by SUN Microsystems in 1997.</li>
  <li><b>Language Support</b>: ODBC can be used with multiple programming languages, including C, C++, and Java. JDBC is specifically designed for Java.</li>
  <li><b>Platform Dependency</b>: ODBC is primarily used on Windows platforms, while JDBC is platform-independent and can be used on any operating system.</li>
  <li><b>Driver Development</b>: ODBC drivers are typically developed in native languages like C and C++, while JDBC drivers are developed in Java.</li>
  <li><b>Performance</b>: ODBC is not recommended for Java applications due to potential performance issues and platform dependency. In contrast, JDBC is highly recommended for Java applications as it avoids these issues.</li>
  <li><b>Programming Paradigm</b>: ODBC follows a procedural programming paradigm, while JDBC is object-oriented.</li>
</ol>