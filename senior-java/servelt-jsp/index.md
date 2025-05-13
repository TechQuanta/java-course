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

# Java Servlet Overview
- # Servlet Application Directory Structure

The directory structure of a typical Java Servlet web application follows a specific layout to ensure compatibility and organization. This structure is recommended by Sun Microsystems (now Oracle).

---


<body>
  <h1> Standard Directory Layout</h1>
  <pre>
YourWebAppRoot/
│
├── WEB-INF/
│   ├── classes/
│   │   └── (compiled .class files)
│   └── lib/
│       └── (JAR files)
│
├── src/
│   └── (Java source files, e.g., .java files)
│
├── images/
│   └── (image files, e.g., .png, .jpg)
│
├── css/
│   └── (CSS files)
│
├── js/
│   └── (JavaScript files)
│
├── html/
│   └── (HTML files)
│
├── jsp/
│   └── (JSP files)
│
└── index.html (or other entry point files)
  </pre>
</body>

<br/>
<div align="center" width=600 height=100>
<img src="IMAGES\directly.png" class="execution" alt="exception hierarchy">
</div><br/>

<br/>

---

## Explanation

- **YourWebAppRoot/**  
  The root directory of your web application. You can name it as you wish.

- **WEB-INF/**  
  A crucial directory that is not accessible directly from the web. Contains:
  - **classes/**: Holds compiled Java classes (`.class` files) for servlets and other classes.
  - **lib/**: Contains JAR files your application depends on.

- **src/**  
  Contains Java source files (`.java`). Typically used during development.

- **images/**  
  Folder for images used within your web application.

- **css/**  
  Contains stylesheets (CSS files).

- **js/**  
  JavaScript files to add interactivity.

- **html/**  
  Static HTML pages.

- **jsp/**  
  JSP (JavaServer Pages) files for dynamic web content.

- **index.html**  
  Often the default entry point of your web application.

---

## Additional Notes

- You can create other folders as needed under the root or WEB-INF directories.
- The presence of the `WEB-INF` directory is mandatory for proper deployment.
- Organizing your app using this structure helps manage resources and dependencies effectively.


## Applications of Servlets

<br/>
<div align="center" width=700 height=200>
<img src="IMAGES\serv-req.jpg" class="execution" alt="exception hierarchy">
</div><br/>

<br/>

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


<br/>
<div align="center" width=700 height=200>
<img src="IMAGES\servlet-arch.jpg" class="execution" alt="exception hierarchy">
</div><br/>

<br/>

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


<br/>
<div align="center" width=700 height=200>
<img src="IMAGES\serv-lifrcycle.jpg" class="execution" alt="exception hierarchy">
</div><br/>

<br/>

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





## Servlets - Form Data (Full HTML and Java Source)

You often need to pass information from your browser to a web server and backend program using two HTTP methods: **GET** and **POST**.

---

### GET Method

The GET method appends encoded user information to the URL after a `?`. Example:

`http://www.test.com/hello?key1=value1&key2=value2`


Limitations: Max 1024 characters, visible in browser location, avoid for sensitive data.

Handled by servlet's `doGet()` method.

---

### POST Method

The POST method sends data separately in the message body. It is more secure and reliable. Handled by servlet’s `doPost()` method.

---

### Reading Form Data Using Servlet

Servlet APIs provide:

- `getParameter()` — fetch a single form parameter.
- `getParameterValues()` — fetch multiple values (e.g., checkboxes).
- `getParameterNames()` — get all parameter names.

---

## GET Method Example Using URL

Example URL passing first and last name:
`http://localhost:8080/HelloForm?first_name=ZARA&last_name=ALI`


#### `HelloForm.java`

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



# JDBC Application Guide

This guide explains how a JDBC (Java Database Connectivity) application works and what you need to set up before accessing a database through a Java Servlet.

---

## 🔁 How a JDBC Application Works with DATABASE

JDBC acts as a bridge between Java applications and relational databases. Here's a step-by-step breakdown of the process:

### 1. Load JDBC Driver

Load the JDBC driver into memory.

```java
Class.forName("com.mysql.cj.jdbc.Driver"); // For MySQL
```

> This registers the driver with the DriverManager.

---

### 2. Establish a Database Connection

Use the DriverManager to connect to your database.

```java
Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/your_database", "username", "password");
```

---

### 3. Create a Statement Object

This is used to execute SQL queries.

```java
Statement stmt = con.createStatement();
```

Or, for dynamic queries:

```java
PreparedStatement pstmt = con.prepareStatement("SELECT * FROM users WHERE id=?");
```

---

### 4. Execute SQL Queries

Execute your query using the statement object.

```java
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
```

---

### 5. Process the Results

Use the ResultSet to retrieve data.

```java
while(rs.next()) {
    System.out.println(rs.getString("username"));
}
```

---

### 6. Close Resources

Always close JDBC objects to prevent memory leaks.

```java
rs.close();
stmt.close();
con.close();
```

---

## ✅ JDBC Environment Setup Before Servlet Access

Before accessing a database using a Servlet, ensure the following:

### 1. Install a Database Server

Examples:
- MySQL
- PostgreSQL
- Oracle DB

Make sure:
- The server is running.
- The database and tables are created.

---

### 2. Add JDBC Driver to Classpath

Include the JDBC driver `.jar` file in your project.

For example, for MySQL:
- Use `mysql-connector-j-8.0.x.jar`
- Place it in your `WEB-INF/lib/` directory in a servlet-based project.

---

### 3. Setup Project Structure

Typical structure of a web project:

```
YourWebApp/
├── WEB-INF/
│   ├── web.xml
│   ├── lib/
│   │   └── mysql-connector-j-8.0.x.jar
├── index.html
├── ServletClass.java
```


Once this setup is done, you can create Servlets that connect to and interact with your database using JDBC.
---
---

**This  creating a table in MySQL, inserting data, and accessing it using a Java Servlet with JDBC**.



## 🧱 Step 1: Create Table in MySQL

Open Command Prompt and navigate to MySQL's bin directory:

```bash
C:\> cd Program Files\MySQL\bin
```

Login to MySQL as root:

```bash
C:\Program Files\MySQL\bin> mysql -u root -p
Enter password: ********
mysql>
```

Switch to the `TEST` database and create the `Employees` table:

```sql
mysql> use TEST;
mysql> create table Employees (
   id int not null,
   age int not null,
   first varchar(255),
   last varchar(255)
);
```

---

## 📥 Step 2: Insert Data Records

Insert some records into the `Employees` table:

```sql
mysql> INSERT INTO Employees VALUES (100, 18, 'Zara', 'Ali');
mysql> INSERT INTO Employees VALUES (101, 25, 'Mahnaz', 'Fatma');
mysql> INSERT INTO Employees VALUES (102, 30, 'Zaid', 'Khan');
mysql> INSERT INTO Employees VALUES (103, 28, 'Sumit', 'Mittal');
```

---

## 🌐 Step 3: Access Database Using Servlet

Here is a complete Java Servlet example that connects to the `TEST` database and retrieves employee data:

```java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DatabaseAccess extends HttpServlet {

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      // JDBC driver and DB URL
      final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
      final String DB_URL = "jdbc:mysql://localhost/TEST";

      // Database credentials
      final String USER = "root";
      final String PASS = "password";

      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String title = "Database Result";

      String docType =
         "<!doctype html public "-//w3c//dtd html 4.0 transitional//en">\n";

      out.println(docType +
         "<html><head><title>" + title + "</title></head>" +
         "<body bgcolor='#f0f0f0'><h1 align='center'>" + title + "</h1>");

      Connection conn = null;
      Statement stmt = null;
      try {
         Class.forName("com.mysql.jdbc.Driver");
         conn = DriverManager.getConnection(DB_URL, USER, PASS);
         stmt = conn.createStatement();
         String sql = "SELECT id, first, last, age FROM Employees";
         ResultSet rs = stmt.executeQuery(sql);

         while(rs.next()){
            int id  = rs.getInt("id");
            int age = rs.getInt("age");
            String first = rs.getString("first");
            String last = rs.getString("last");

            out.println("ID: " + id + "<br>");
            out.println(", Age: " + age + "<br>");
            out.println(", First: " + first + "<br>");
            out.println(", Last: " + last + "<br><br>");
         }
         out.println("</body></html>");
         rs.close();
         stmt.close();
         conn.close();
      } catch(SQLException se) {
         se.printStackTrace();
      } catch(Exception e) {
         e.printStackTrace();
      } finally {
         try {
            if(stmt != null) stmt.close();
         } catch(SQLException se2) { }
         try {
            if(conn != null) conn.close();
         } catch(SQLException se) {
            se.printStackTrace();
         }
      }
   }
}
```

---

## 🔧 Step 4: Configure `web.xml`

Add the servlet configuration to your `web.xml` file:

```xml
<servlet>
   <servlet-name>DatabaseAccess</servlet-name>
   <servlet-class>DatabaseAccess</servlet-class>
</servlet>

<servlet-mapping>
   <servlet-name>DatabaseAccess</servlet-name>
   <url-pattern>/DatabaseAccess</url-pattern>
</servlet-mapping>
```

---

## 🌍 Step 5: Accessing the Servlet

Run your servlet and open the following URL in a browser:

```
http://localhost:8080/DatabaseAccess
```

You will see output like:

```
Database Result

ID: 100, Age: 18, First: Zara, Last: Ali
ID: 101, Age: 25, First: Mahnaz, Last: Fatma
ID: 102, Age: 30, First: Zaid, Last: Khan
ID: 103, Age: 28, First: Sumit, Last: Mittal
```

---

✅ Done! You’ve successfully created and accessed a MySQL table using a Servlet with JDBC.


# Introduction to JSP

# JSP Life Cycle

The **JSP Life Cycle** defines the steps from the creation to the destruction of a JSP page. It is similar to the **Servlet life cycle**, with an added step to compile the JSP into a Servlet.

### Life Cycle Steps:

<br/>
<div align="center" width=700 height=200>
<img src="IMAGES\jsp.png" class="execution" alt="exception hierarchy">
</div><br/>

<br/>
1. **Compilation**
2. **Initialization**
3. **Execution**
4. **Cleanup**

### 1. Compilation
When a browser requests a JSP page:
- The JSP engine checks if the page needs compilation (e.g., if it's new or modified).
- **Compilation Steps**:
  - Parsing the JSP.
  - Translating the JSP into a Servlet.
  - Compiling the Servlet class.

### 2. Initialization
- The container calls the `jspInit()` method once, after loading the JSP but before processing any request.
- You can override `jspInit()` to perform initialization tasks.

### 3. Execution
- For every request, the `_jspService(HttpServletRequest req, HttpServletResponse res)` method is called.
- This method handles the response and supports all HTTP methods like `GET`, `POST`, `DELETE`, etc.

### 4. Cleanup
- When the JSP is removed or the server is shut down, `jspDestroy()` is called.
- Override `jspDestroy()` to release resources like database connections or open files.

---

# JSP Elements

JSP provides three types of elements to embed Java code within HTML:

### 1. Declaration
Used to declare variables or methods.

```jsp
<%! int i = 0; %>
<%! int a, b, c; %>
<%! Circle circle = new Circle(2.0); %>
```

### 2. Expression
Outputs a value directly to the client.

```jsp
<p>Today's date: <%= new java.util.Date() %></p>
```

### 3. Scriptlet
Contains any valid Java code.

```jsp
<%
for (int i = 0; i < 10; i++) {
    out.println("Value of counter = " + i + "<br>");
}
%>
```

---

# JSP Implicit Objects

JSP provides several **implicit objects** that are automatically available:

| Object       | Description |
|--------------|-------------|
| `request`    | Instance of `HttpServletRequest`. Holds client request data. |
| `response`   | Instance of `HttpServletResponse`. Used to send response to client. |
| `out`        | Instance of `JspWriter` (a PrintWriter). Sends output to client. |
| `session`    | Instance of `HttpSession`. Manages session data. |
| `application`| Instance of `ServletContext`. Shared across the entire web app. |
| `config`     | Instance of `ServletConfig`. Configuration info for this JSP page. |
| `pageContext`| Provides access to all other implicit objects and environment details. |
| `page`       | Refers to the current JSP page instance (`this`). |
| `exception`  | Used in error pages to display exception information. |

---

# JSP Directives

Directives are instructions to the JSP engine. They affect the entire JSP page and are used to set page-level instructions.

### 1. `page` Directive
Used to set various attributes for the JSP.

```jsp
<%@ page language="java" import="java.util.*" session="true" %>
```

Common attributes:
- `import`: Import Java packages.
- `session`: Enable/disable session tracking.
- `errorPage`: Define error handler page.
- `isErrorPage`: Mark if the current page is an error page.

### 2. `include` Directive
Includes the content of another file at **translation time**.

```jsp
<%@ include file="header.jsp" %>
```

### 3. `taglib` Directive
Declares tag libraries used in the JSP.

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

- `uri`: The location of the tag library descriptor.
- `prefix`: Used as a namespace in custom tag usage.


---