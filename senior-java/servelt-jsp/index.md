# Introduction to Java Servlets

Java Servlets are a powerful technology for building web-based applications in a platform-independent manner. They provide a component-based approach that overcomes the performance limitations of traditional CGI (Common Gateway Interface) programs.

## Why Learn Servlets?

1. **Dynamic Content Generation**: Collect user input from web forms, retrieve records from databases, and create dynamic web pages.
2. **Performance**: Servlets run within the web server's address space, leading to significantly better performance compared to CGI.
3. **Platform Independence**: Being written in Java, Servlets can run on any server that supports Java.
4. **Security**: Java's security manager enforces restrictions that protect server resources, making Servlets a trusted option.
5. **Access to Java APIs**: Servlets can utilize the full range of Java class libraries for various functionalities.

## Hello World Servlet Example

Here’s a simple "Hello World" Servlet program:

```java
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class HelloWorld extends HttpServlet {
 
   private String message;

   public void init() throws ServletException {
      // Do required initialization
      message = "Hello World";
   }

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      // Set response content type
      response.setContentType("text/html");

      // Actual logic goes here.
      PrintWriter out = response.getWriter();
      out.println("<h1>" + message + "</h1>");
   }

   public void destroy() {
      // do nothing.
   }
}
```
# Java Servlet Overview

## Explanation of the Code

### Imports
The necessary libraries for handling input/output and servlet functionality are imported. This includes classes from the `javax.servlet` and `javax.servlet.http` packages.

### Class Declaration
The `HelloWorld` class extends `HttpServlet`, which allows it to handle HTTP requests and responses.

### Initialization
The `init()` method is called by the servlet container to initialize the servlet. This method can be overridden to perform any startup tasks.

### Handling GET Requests
The `doGet()` method processes GET requests. It retrieves data from the request and writes the response back to the client. In this example, it sends a simple "Hello, World!" message.

### Cleanup
The `destroy()` method is called when the servlet is taken out of service. This method can be overridden to release resources or perform cleanup tasks.

## Applications of Servlets

1. **Reading Client Data**: 
   - Servlets can read explicit data sent by clients, such as form submissions. This allows for dynamic processing based on user input.

2. **Processing Requests**: 
   - Servlets can process data, which may involve database interactions or web service calls. This is essential for applications that require backend processing.

3. **Generating Responses**: 
   - Servlets can generate responses in various formats, including HTML, XML, or binary data. This flexibility allows for a wide range of applications.

4. **Managing HTTP Responses**: 
   - Servlets can set response headers, manage cookies, and control caching behavior. This is important for optimizing performance and ensuring proper client-server communication.

## Key Features of Java Servlets

- **Platform Independence**: Servlets are written in Java, making them platform-independent.
- **Performance**: Servlets are efficient and can handle multiple requests simultaneously.
- **Integration**: They can easily integrate with other Java technologies, such as JSP (JavaServer Pages) and frameworks like Spring.


## Servlet Architecture

1. **Client**: A web browser or any HTTP client that sends requests to the server.
2. **Web Server**: A server that handles HTTP requests and responses. It can be a standalone server like Apache Tomcat or part of a larger application server.
3. **Servlet Container**: A part of the web server that manages the lifecycle of servlets, including loading, instantiating, and invoking them.



## Major Tasks of Servlets

- **Read Explicit Data**: Read data sent by clients such as HTML forms, applets, or custom HTTP clients.
- **Read Implicit HTTP Request Data**: Access cookies, headers, media types, and compression schemes from the client request.
- **Process Data**: Perform logic such as database access, remote calls (RMI, CORBA), web service invocation, or computations.
- **Send Explicit Data**: Return response data in formats like HTML, XML, JSON, images, or binary files.
- **Send Implicit HTTP Response Data**: Manage response headers, content types, cookies, and caching policies.

## Servlet Packages

- **`javax.servlet`**: Core servlet classes and interfaces.
- **`javax.servlet.http`**: HTTP-specific servlet classes and interfaces.

These packages are part of Java Enterprise Edition (Java EE) and implement Java Servlet and JSP specifications.

## Development and Compilation

1. **Setup**: Install servlet packages and add to classpath, typically via a Java EE server like Apache Tomcat.
2. **Create Servlets**: Extend `HttpServlet` and override methods like `doGet()` and `doPost()`.
3. **Compile**: Use the Java compiler (javac) to compile servlet classes.
4. **Deploy**: Place compiled classes in the server's deployment directory and configure URL mappings in `web.xml`.

---

Java Servlets enable dynamic web applications via a request-response model, handling HTTP requests and responses effectively within Java EE environments.



# Setting Up a Development Environment for Java Servlets

A development environment is essential for developing, testing, and running Java Servlets. This setup involves several key steps:

## 1. Setting Up Java Development Kit (JDK)

To begin, download and install the Java Software Development Kit (SDK):

- **Download**: Get the JDK from [Oracle's Java SE Downloads](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- **Installation**: Follow the installation instructions provided.
- **Environment Variables**:
  - **Windows**:
    - Add the following lines to your `C:\autoexec.bat` file:
      ```bat
      set PATH=C:\jdk1.8.0_65\bin;%PATH%
      set JAVA_HOME=C:\jdk1.8.0_65
      ```
    - Alternatively, use the Environment Variables settings in System Properties.
  - **Unix (Linux/Solaris)**:
    - Add the following lines to your `.cshrc` file:
      ```csh
      setenv PATH /usr/local/jdk1.8.0_65/bin:$PATH
      setenv JAVA_HOME /usr/local/jdk1.8.0_65
      ```

## 2. Setting Up Web Server - Tomcat

Apache Tomcat is a popular open-source web server for running Java Servlets. Follow these steps to set it up:

- **Download**: Get the latest version of Tomcat from [Apache Tomcat](https://tomcat.apache.org/).
- **Installation**: Unpack the binary distribution to a convenient location (e.g., `C:\apache-tomcat-8.0.28` on Windows or `/usr/local/apache-tomcat-8.0.28` on Unix).
- **Environment Variable**: Set the `CATALINA_HOME` variable to point to the Tomcat installation directory.

### Starting Tomcat

- **Windows**:
  ```bat
  %CATALINA_HOME%\bin\startup.bat
  ```
 
- **Unix**:

   ```bash
   $CATALINA_HOME/bin/startup.sh
   ```
   After starting Tomcat, access it via `http://localhost:8080/` to see the Tomcat home page.

### Stopinng Tomcat
   
- **Windows**:
  ```bat
  C:\apache-tomcat-8.0.28\bin\shutdown.bat
  ```
 
- **Unix**:

   ```bash
   $CATALINA_HOME/bin/shutdown.sh
   ```

## 3. Setting Up the CLASSPATH:
   
   Since servlets are not part of the standard Java platform, you need to specify the servlet classes to the compiler:

- **Windows**:

     Add the following lines to your C:\autoexec.bat file:

    ```bat
    set CATALINA=C:\apache-tomcat-8.0.28
    set CLASSPATH=%CATALINA%\common\lib\servlet-api.jar;%CLASSPATH%

    ```
- **Unix**:

    ```csh
    setenv CATALINA=/usr/local/apache-tomcat-8.0.28
    setenv CLASSPATH $CATALINA/common/lib/servlet-api.jar:$CLASSPATH
    ```
## Servlet Lifecycle

The lifecycle of a servlet is managed by the servlet container and consists of the following phases:

1. **Loading and Instantiation**: The servlet container loads the servlet class and creates an instance of it.
2. **Initialization**: The `init()` method is called to initialize the servlet. This is where resources can be allocated.
3. **Request Handling**: The servlet processes client requests through the `doGet()`, `doPost()`, or other HTTP methods. Each request is handled in a separate thread.
4. **Destruction**: The `destroy()` method is called when the servlet is taken out of service, allowing for resource cleanup.

- **Java Servlet Lifecycle Methods**

Java Servlets have a defined lifecycle managed by the servlet container. The key methods in this lifecycle are `init()`, `service()`, `doGet()`, `doPost()`, and `destroy()`. 

### 1. The `init()` Method

- **Purpose**: The `init()` method is called only once when the servlet is created. It is used for one-time initializations, similar to the `init` method in applets.
- **Invocation**: This method is invoked when a user first accesses the servlet's URL, or it can be configured to load when the server starts.
- **Threading**: A single instance of the servlet is created, and each user request results in a new thread that calls `doGet()` or `doPost()`.
- **Definition**:
  ```java
  public void init() throws ServletException {
      // Initialization code...
  }```

### 2. The `service()` Method

- **Purpose**: The `service()` method is the main method for handling client requests and generating responses..
- **Invocation**: The servlet container calls this method for each request, spawning a new thread for each request. 
- **Threading**: It checks the HTTP request type (GET, POST, etc.) and delegates the request to the appropriate method ( `doGet()` or `doPost()`,etc.).
- **Definition**:
  ```java
  public void service(ServletRequest request, ServletResponse response) 
    throws ServletException, IOException {
    // Service code...
  }```

 ### 3. The `doGet()` Method
 - **Purpose**:Handles GET requests, which are typically made when a user requests a URL or submits a form without a specified method.
 - **Definition**:
  ```java
  public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    // Servlet code for GET request... 
  } 
  ```
  ### 4. The `doPost()` Method
 - **Purpose**:Handles POST requests, which occur when a form explicitly specifies POST as the method.
 - **Definition**:
  ```java
  public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    // Servlet code for POST request...

  } 
  ```
  ### 5. The `destroy()` Method
 - **Purpose**:The `destroy()` method is called once at the end of the servlet's lifecycle, allowing for cleanup activities such as closing database connections and halting background threads.
 - **Invocation**: After this method is called, the servlet object is marked for garbage collection.

 - **Definition**:
  ```java
  public void destroy() {
    // Finalization code...

  } 
  ```

## Example of a Simple Java Servlet

Here’s a simple example of a Java Servlet that responds with "Hello, World!".


  </section>
  <section id="compile-deploy">
    <h2>Compiling and Deploying a Servlet</h2>
    <h3>Create Servlet File</h3>
    <p>Create <code>HelloWorld.java</code> in your development directory:</p>
    <pre><code>import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class HelloWorld extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("&lt;h1&gt;Servlet Example&lt;/h1&gt;");
    }
}

    <p>Run:</p>
    <pre><code>javac HelloWorld.java
</code></pre>
    <p>Make sure <code>javac</code> is in your PATH and <code>servlet-api.jar</code> is in your CLASSPATH.</p>
    <h3>Deploy the Servlet</h3>
    <ul>
      <li>Copy <code>HelloWorld.class</code> to <code>&lt;Tomcat-install-dir&gt;/webapps/ROOT/WEB-INF/classes/</code></li>
      <li>Edit <code>web.xml</code> file inside <code>&lt;Tomcat-install-dir&gt;/webapps/ROOT/WEB-INF/</code> and add:</li>
    </ul>
    <pre><code>&lt;servlet&gt;
  &lt;servlet-name&gt;HelloWorld&lt;/servlet-name&gt;
  &lt;servlet-class&gt;HelloWorld&lt;/servlet-class&gt;
&lt;/servlet&gt;
&lt;servlet-mapping&gt;
  &lt;servlet-name&gt;HelloWorld&lt;/servlet-name&gt;
  &lt;url-pattern&gt;/HelloWorld&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
</code></pre>
    <h3>Start Tomcat Server</h3>
    <p>Run:</p>
    <pre><code>Windows:
&lt;Tomcat-install-dir&gt;\bin\startup.bat
Unix/Linux:
&lt;Tomcat-install-dir&gt;/bin/startup.sh
</code></pre>
    <h3>Access the Servlet</h3>
    <p>Open browser at:</p>
    <pre><code>http://localhost:8080/HelloWorld
</code></pre>
    <p>You should see:</p>
    <pre><code>Servlet Example
</code></pre>

  </section>

### Step 1: Create a Dynamic Web Project

If you are using an IDE like Eclipse:
- Go to `File` -> `New` -> `Dynamic Web Project`.
- Name your project (e.g., `HelloWorldServlet`).

### Step 2: Create the Servlet

1. Right-click on the `src` folder of your project.
2. Select `New` -> `Servlet`.
3. Name your servlet (e.g., `HelloWorldServlet`).

### Step 3: Implement the Servlet

Here’s the code for the `HelloWorldServlet`:

```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Hello, World!</h1>");
        out.println("</body></html>");
    }
}
```

### Step 4: Configure the Web Descriptor (Optional)

If you are not using annotations, you need to configure the `web.xml` file located in the `WEB-INF` directory:

```xml
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee 
         http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
    <servlet>
        <servlet-name>HelloWorldServlet</servlet-name>
        <servlet-class>com.example.HelloWorldServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloWorldServlet</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>
```

### Step 5: Deploy the Servlet

- Export your project as a WAR file or run it directly on your servlet container (like Tomcat).
- If you exported it, place the WAR file in the `webapps` directory of your Tomcat installation.

### Step 6: Run the Servlet

- Start your Tomcat server.
- Open a web browser and navigate to `http://localhost:8080/HelloWorldServlet/hello`.

## Applications of Servlets

1. **Reading Client Data**: Servlets can read data sent by clients, such as form submissions.
2. **Processing Requests**: They can process data, which may involve database interactions or web service calls.
3. **Generating Responses**: Servlets can generate responses in various formats, including HTML, XML, or binary data.
4. **Managing HTTP Responses**: Servlets can set response headers, manage cookies, and control caching behavior.





# Servlets - Form Data (Full HTML and Java Source)

You often need to pass information from your browser to a web server and backend program using two HTTP methods: **GET** and **POST**.

---

## GET Method

The GET method appends encoded user information to the URL after a `?`. Example:

`http://www.test.com/hello?key1=value1&key2=value2`


Limitations: Max 1024 characters, visible in browser location, avoid for sensitive data.

Handled by servlet's `doGet()` method.

---

## POST Method

The POST method sends data separately in the message body. It is more secure and reliable. Handled by servlet’s `doPost()` method.

---

## Reading Form Data Using Servlet

Servlet APIs provide:

- `getParameter()` — fetch a single form parameter.
- `getParameterValues()` — fetch multiple values (e.g., checkboxes).
- `getParameterNames()` — get all parameter names.

---

## GET Method Example Using URL

Example URL passing first and last name:
`http://localhost:8080/HelloForm?first_name=ZARA&last_name=ALI`


### `HelloForm.java`

```java
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class HelloForm extends HttpServlet {
 
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      // Set response content type
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String title = "Using GET Method to Read Form Data";
      String docType =
         "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";
         
      out.println(docType +
         "<html>\n" +
            "<head><title>" + title + "</title></head>\n" +
            "<body bgcolor=\"#f0f0f0\">\n" +
               "<h1 align=\"center\">" + title + "</h1>\n" +
               "<ul>\n" +
                  "  <li><b>First Name</b>: "
                  + request.getParameter("first_name") + "\n" +
                  "  <li><b>Last Name</b>: "
                  + request.getParameter("last_name") + "\n" +
               "</ul>\n" +
            "</body>" +
         "</html>"
      );
   }
}
```
- **Compile with** :
```bash
javac HelloForm.java
```
``
 compilation would produce HelloForm.class file. Next you would have to copy this class file in `<Tomcat-installationdirectory>/webapps/ROOT/WEB-INF/`classes and create following entries in web.xml file located in `<Tomcat-installation-directory>/webapps/ROOT/WEB-INF/`.

**Add entries in `web.xml`** :
```xml
   <servlet>
  <servlet-name>HelloForm</servlet-name>
  <servlet-class>HelloForm</servlet-class>
</servlet>

<servlet-mapping>
  <servlet-name>HelloForm</servlet-name>
  <url-pattern>/HelloForm</url-pattern>
</servlet-mapping>
```
**Visit** :
`http://localhost:8080/HelloForm?first_name=ZARA&last_name=ALI`

### GET METHOD USING FORM
 example which passes two values using HTML FORM and submit button.
```html
<html>
   <body>
      <form action="HelloForm" method="GET">
         First Name: <input type="text" name="first_name">
         <br />
         Last Name: <input type="text" name="last_name" />
         <input type="submit" value="Submit" />
      </form>
   </body>
</html>
```
Save this as` Hello.html` in` <Tomcat-installation-directory>/webapps/ROOT/`. Access with `http://localhost:8080/Hello.html`.
<html>
   <body>
      <form action="HelloForm" method="POST">
         First Name: <input type="text" name="first_name">
         <br />
         Last Name: <input type="text" name="last_name" />
         <input type="submit" value="Submit" />
      </form>
   </body>
</html>

### POST METHOD USING FORM
 Modify `HelloForm.java` to handle both GET and POST: 
```java
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class HelloForm extends HttpServlet {

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String title = "Using GET Method to Read Form Data";
      String docType =
         "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";
         
      out.println(docType +
         "<html>\n" +
            "<head><title>" + title + "</title></head>\n" +
            "<body bgcolor=\"#f0f0f0\">\n" +
               "<h1 align=\"center\">" + title + "</h1>\n" +
               "<ul>\n" +
                  "  <li><b>First Name</b>: "
                  + request.getParameter("first_name") + "\n" +
                  "  <li><b>Last Name</b>: "
                  + request.getParameter("last_name") + "\n" +
               "</ul>\n" +
            "</body>" +
         "</html>"
      );
   }

   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      doGet(request, response);
   }
}
```
HTML form for POST method:
```html
<html>
   <body>
      <form action="HelloForm" method="POST">
         First Name: <input type="text" name="first_name">
         <br />
         Last Name: <input type="text" name="last_name" />
         <input type="submit" value="Submit" />
      </form>
   </body>
</html>
```
<html>
   <body>
      <form action="HelloForm" method="POST">
         First Name: <input type="text" name="first_name">
         <br />
         Last Name: <input type="text" name="last_name" />
         <input type="submit" value="Submit" />
      </form>
   </body>
</html>
### Passing Checkbox Data to Servlet Program
Example `CheckBox.html`:
```html
<html>
   <body>
      <form action="CheckBox" method="POST" target="_blank">
         <input type="checkbox" name="maths" checked="checked" /> Maths
         <input type="checkbox" name="physics" /> Physics
         <input type="checkbox" name="chemistry" checked="checked" /> Chemistry
         <input type="submit" value="Select Subject" />
      </form>
   </body>
</html>
```
<html>
   <body>
      <form action="CheckBox" method="POST" target="_blank">
         <input type="checkbox" name="maths" checked="checked" /> Maths
         <input type="checkbox" name="physics" /> Physics
         <input type="checkbox" name="chemistry" checked="checked" /> Chemistry
         <input type="submit" value="Select Subject" />
      </form>
   </body>
</html>
Example servlet `CheckBox.java`:
```java
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class CheckBox extends HttpServlet {
 
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String title = "Reading Checkbox Data";
      String docType =
         "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";

      out.println(docType +
         "<html>\n" +
            "<head><title>" + title + "</title></head>\n" +
            "<body bgcolor=\"#f0f0f0\">\n" +
               "<h1 align=\"center\">" + title + "</h1>\n" +
               "<ul>\n" +
                  "  <li><b>Maths Flag: </b> "
                  + request.getParameter("maths") + "\n" +
                  "  <li><b>Physics Flag: </b> "
                  + request.getParameter("physics") + "\n" +
                  "  <li><b>Chemistry Flag: </b> "
                  + request.getParameter("chemistry") + "\n" +
               "</ul>\n" +
            "</body>" +
         "</html>"
      );
   }

   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      doGet(request, response);
   }
}
```
- Result Checkbox data
  - Maths Flag : : on
  - Physics Flag: : null
  - Chemistry Flag: : on

#### Reading All Form Parameters
Example servlet`ReadParams.java`which reads all parameters dynamically:

```java
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

// Extend HttpServlet class
public class ReadParams extends HttpServlet {
 
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String title = "Reading All Form Parameters";
      String docType =
         "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";

      out.println(docType +
         "<html>\n" +
         "<head><title>" + title + "</title></head>\n" +
         "<body bgcolor=\"#f0f0f0\">\n" +
         "<h1 align=\"center\">" + title + "</h1>\n" +
         "<table width=\"100%\" border=\"1\" align=\"center\">\n" +
         "<tr bgcolor=\"#949494\">\n" +
            "<th>Param Name</th>" +
            "<th>Param Value(s)</th>\n"+
         "</tr>\n"
      );

      Enumeration<String> paramNames = request.getParameterNames();

      while(paramNames.hasMoreElements()) {
         String paramName = paramNames.nextElement();
         out.print("<tr><td>" + paramName + "</td>\n<td>");
         String[] paramValues = request.getParameterValues(paramName);

         if (paramValues.length == 1) {
            String paramValue = paramValues[0];
            if (paramValue.length() == 0)
               out.println("<i>No Value</i>");
            else
               out.println(paramValue);
         } else {
            out.println("<ul>");
            for(int i = 0; i < paramValues.length; i++) {
               out.println("<li>" + paramValues[i] + "</li>");
            }
            out.println("</ul>");
         }
         out.println("</td></tr>\n");
      }
      out.println("</table>\n</body></html>");
   }
   
   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      doGet(request, response);
   }
}
```
Example form to test`ReadParams servlet`:
```
<html>
   <body>
      <form action="ReadParams" method="POST" target="_blank">
         <input type="checkbox" name="maths" checked="checked" /> Maths
         <input type="checkbox" name="physics" /> Physics
         <input type="checkbox" name="chemistry" checked="checked" /> Chem
         <input type="submit" value="Select Subject" />
      </form>
   </body>
</html>
```
- Reading all forms parameters
<table border="1" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <th>Param Name</th>
      <th>Param Value(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>maths</td>
      <td>on</td>
    </tr>
    <tr>
      <td>chemistry</td>
      <td>on</td>
    </tr>
  </tbody>
</table>
