# Introduction to java
Java is class-based, **object-oriented** programming language developed by *James Gosling* at *Sun Microsystems Inc.* in May 1995 and acquired by Oracle in Jan 27, 2010 it was known by Oak earlier.

- It is designed to have as few implementation dependencies as possible.

- It is WORA (write once and run anywhere) means without any need of recompilation the Java code run each and every platform with portability.

# How Java Code Executes
<div align="center" width=700 height=200>
<img src="IMAGES/compilation.bmp" class="execution" alt="Java Code Execution" width=700 height=200>
</div>
<br/>

## 🔹History of Oak
<hr/>
<br/>
Java implementation was begun in 1991 by *James Gosling, Mike Sheridan, and Patrick Naughton* a team of engineers at Sun Microsystems known as the Green Team. The name was inspired by Java coffee and the first version released was Java 1.0.
- *Arthur Van Hoff* rewrote the Java 1.0 compiler to strictly comply with its specifications.
- In 1997 Sun Microsystems aimed to formalize Java through the ISO standards body but eventually withdrew from the process.

- Despite not formalizing through ISO SM offered most JAVA implementations at no cost earning revenue by licensing specialized products such as the JAVA Enterprise System.

- A significant milestone in JAVA's history occurred on November 13, 2006 when SM released a large portion of the JVM as free (Open-Source software contribution).

- By May 08, 2007 the JVM code was fully available under Open-source distribution terms.

- At that time Java made itself a preferred language for various applications including, Internet programming, Gaming & e-business etc.

## 🔹Features of Java
<hr/>
<br/>

- Java is known for its simplicity, robustness and security features making it a popular choice for enterprise-level applications.

- Java eliminates complex features like: pointers(*) and multiple inheritance, making it easier to write, debug, and maintain code.

- Java applications are compiled to byte code that can run on any JVM.

- The syntax of Java is similar to C/C++.

- Java makes writing, compiling and debugging easy.

- It helps to create modular programming by providing modularity like: abstract classes, interfaces, inheritance etc.

## 🔹Key Features of Java
<hr/>
<br/>

1. **Platform Independent**:  
- It's said to be independent because the byte code which comes from the compilation of source code can run on any machine which has JVM and on each machine the output will be same.  
- Each OS has a different JVM. That is why we call Java a platform-independent language.
<br/>

2. **Object Oriented Programming**:  
- Because Java is promoting objects and classes. Like each object is treated as an instance of the class.  
<br/>

#### The four main concepts of Oop's are:
```
- Abstraction  
- Encapsulation  
- Inheritance  
- Polymorphism
```
<br/>

3. **Robustness**:  
- Java is robust. It puts lot of efforts into checking errors as early as possible, that is why the Java compiler is able to detect the critical errors which not easy to detect by other programming languages.

<br/>

4. **Security**:  
- In Java we don't have pointers, so we cannot access out-of-bound arrays. If we try to do several security flaws will appear like: stack corruption or buffer overflow are impossible to exploit in Java.  
- Also programs run in an env that is independent of the OS environment which makes Java program more secure.

<br/>

5. **Multi-threading**:  
- Java supports multi-threading by running the program parts concurrently. <br/> 
- The feature is useful for applications that require high performance or real time response.

<br/>

6. **High Performance**:  
- Java-arch is designed in such a way that reduce overhead during runtime and uses JIT (Just In Time) compiler where the compiler compile only those methods that are called, making app run faster.
<br/>

## 🔹 How we can create our first Java program<hr/>
<br/>

- Creating file name it use (**.java**) extension in any IDE(**Integrated Development Environment**) IntelliJ IDEA, Eclipse, or NetBeans.
- Compiling the file/program with (java compiler **javac**) convert the source code -> bytecode(**.class**) file which can be execute on any os having JVM.
- Running the program using (**java**) tool the JVM execute the compiled bytecode into machine level code using JIT and MC executed by the CPU.

<br/>
<div class="code-container">
  <h3>Example Program:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">HelloWorld</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span>//Signature where the java program starts
    {
        <span class="class-ref">System</span>.<span class="method">out</span>.<span class="method">println</span><span class="parens">(</span><span class="string">"Hello, World!"</span><span class="parens">)</span>;
    }
}
  </code></pre>

  <p class="note">Creating this program in your file. Do make sure you are on the right path on the terminal.</p>

  <pre><code class="code-block">
<span class="command">javac</span> HelloWorld.java
<span class="command">java</span> HelloWorld
  </code></pre>
</div>


## 🔹Basic Terminologies in Java:-
<hr/>
<br/>

#### **JVM** (*Java Virtual Machine*)

It is an integral part of Java platform responsible for execution of `.class` bytecode.

**Write Program → Compile Program (javac) → JVM Output**

It provide runtime env not for java progarm for bytecode .class files to be executed.

JVM is platform-dependent because its tailored to specific hardware and software platforms.

JVM implementation is known as JRE.

When ever we create an instance of Java file using Java command on terminal with file name we initialise the instance of the JVM.

- Programmer will write the code.  
- `javac` compiler will compile it. It is in JDK (Java Development Toolkit). It takes the program, converts it into bytecode as output.  
- In Running Phase, JVM will take bytecode, convert it to machine code, and show output to the user.

<br/>

#### **Bytecode**

It is intermediate code generated by JVM and it is platform independent.


## 🔹**JDK Architecture**

 <div align="center" width=700 height=200>
<img src="https://github.com/user-attachments/assets/f78be70a-0aff-4a31-80c7-f4a386388e49" class="execution" alt="Architecture">
</div>

<br/>

#### **JDK** (*Java Development Toolkit*)

The name itself suggests that it is the kit which includes each tool used to run Java on your machine like:

| **Tool**     |    **Description**                                     |
|:------------:|:------------------------------------------------------:|
| `javac`      |    Java compiler                                       |
| `JRE`        |    Java Runtime Environment                            |
| `jdb`        |    Java Debugger                                       |
| `javadoc`    |    Java Documentation Generator                        |
| `jar`        |    Java Archive Tool                                   |
| `jshell`     |    Interactive Java shell (since Java 9)               |
| `javap`      |    Class file disassembler                             |
| `jdeps`      |    Dependency analyzer                                 |
| `jlink`      |    Custom runtime image builder                        |
| `jmod`       |    Java Module tool                                    |
| `jconsole`   |    Java Monitoring Console                             |

<br/>

So, **JDK is the toolbox, not just the hammer**.

- **JRE(Java Runtime Environment)**
JDK includes JRE installation on our computers allows to run programs. We cannot compile it. JRE include a browser, JVM, applet support, & plugins. 
For running the java program, a computer needs JRE.

- **Garbage Collector**
It is used as a JVM tool which helps to delete object space in Java programmer can't delete the Objects.So, Java makes the life easy for programmer handle memroy management.
However if object deleted by the GC will not be recoverable.
- **Profiler**
Profiler helps to see the runtime performance of the program by collecting data related to its execution & runtime behavior of an application.
For Example: 
- *Types of Profiling*(CPU, Memory, Thread, I/O)Profiling.
- **JIT**
It is Just-In-Time tool is a compiler that compile modules which required at the time of calling the moudle enhance the performance.

<br/>

## 🔹JVM Architecture

<div align="center" width=700 height=200>
<img src="IMAGES/jvmarchitecture.jpg" class="execution" alt="JVM">
</div><br/>

## Class Loader Sub-System
---
It is an essential part of the Java Runtime Environment used to load the classes for execution.  
Every class you use needs to be loaded into memory first before it can be used.  
It loads the class over the network, JARs, etc., at the time of runtime.

Java uses a **hierarchical delegation model** for class loading:
- **Bootstrap ClassLoader** → It loads the classes needed at the time of execution, like native classes (rt.jar).
- **Extension ClassLoader** → It loads classes from the `ext/` folder path `JAVA_HOME/lib/ext`.
- **Application ClassLoader** → It loads user classes or classes from the classpath e.g., `-cp` or `CLASSPATH`.

Each class loader loads its parent first. If that is unable to find the class, it loads itself — this is known as the **delegation model**.



### 🔹 `Loading Phase`

### ClassLoader & Memory (Runtime Data Area)

When the JVM starts, it sets up different memory areas.  
The class loader loads class files from storage.


 <h2>📦 JVM Memory Layout (Heap Example)</h2>

<h3>Java Code:</h3>
<pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">Person</span> {
    <span class="type">String</span> <span class="variable">name</span> = <span class="string">"Alice"</span>;
    <span class="type">int</span> <span class="variable">age</span> = <span class="number">25</span>;
    <span class="keyword">static</span> <span class="type">String</span> <span class="variable">species</span> = <span class="string">"Human"</span>;
    <span class="keyword">void</span> <span class="method">greet</span><span class="parens">()</span> {
        <span class="class-ref">System</span>.<span class="method">out</span>.<span class="method">println</span><span class="parens">(</span><span class="string">"Hello, my name is "</span> + <span class="variable">name</span><span class="parens">)</span>;
    }
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] <span class="variable">args</span><span class="parens">)</span> {
        <span class="classname">Person</span> <span class="variable">p</span> = <span class="classname">new</span> <span class="classname">Person</span><span class="parens">()</span>;
        <span class="variable">p</span>.<span class="method">greet</span><span class="parens">()</span>;
    }
}
</code></pre>


  <h3>Memory Table:</h3>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Stored In</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>p</code></td>
        <td>Stack</td>
        <td>Reference variable pointing to the object</td>
      </tr>
      <tr>
        <td><code>new Person()</code></td>
        <td>Heap</td>
        <td>Actual object instance</td>
      </tr>
      <tr>
        <td><code>name</code>, <code>age</code></td>
        <td>Heap</td>
        <td>Instance variables stored in the object</td>
      </tr>
      <tr>
        <td><code>species</code></td>
        <td>Method Area</td>
        <td>Static variable shared across all objects</td>
      </tr>
      <tr>
        <td><code>greet()</code>, <code>main()</code></td>
        <td>Method Area</td>
        <td>Method code (class-level shared space)</td>
      </tr>
    </tbody>
  </table>

- **Method Area**  
  It stores class metadata such as class name, methods, fields, constant pool, etc.  
  The class structure is stored here, basically.

- **Heap**  
  In this area, the objects and arrays created at runtime are stored.  
  Also, this is where the literal pool and all variables that are part of the method are stored, with their references being stored in the heap.  
  The **ClassLoader** itself is an object stored in the heap.

- **Stack**  
  This is created for each thread, as each thread has its own stack.  
  It stores method calls, local variables, etc.



### 🔹 `Linking Phase`

### Verify
It verifies the `.class` file to ensure it executes properly and cannot be penetrated by malfunctioning bytecode.

### Prepare
In the preparation module, the stack and heap areas are allocated for static variables.

### Resolve
In the resolution phase, symbolic references are replaced with actual references.



###  🔹`Initializing Phase`

<br/>

In this phase, variables are initialized with their actual values.

### 🔹`Working`

<br/>

**.class file** → **JVM** → **Create the Heap after verifying the .class file** → **Create the Stack for method calls**



### 🔹`Execution Engine`

<br/>

It runs the bytecode.
- **Interpreter** → Interprets the bytecode line by line (one-time call).
- **JIT Compiler** → Compiles areas of the code for better performance (repeated).

<br/>

### 🔹`JNI (Java Native Interface)`


<br/>

It is used to call methods from the **Native Method Stack** during native code execution by JNI.  
It provides a bridge between Java code and native code.  
It allows calling native libraries written in C/C++ or libraries like `.dll`, `.so`, etc.  
It is used for system-level APIs like **OpenGL**, etc.
