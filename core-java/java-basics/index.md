# Introduction to java
Java is class-based, **object-oriented** programming language developed by *James Gosling* at *Sun Microsystems Inc.* in May 1995 and acquired by Oracle in Jan 27, 2010 it was known by Oak earlier.

- It is designed to have as few implementation dependencies as possible.

- It is WORA (write once and run anywhere) means without any need of recompilation the Java code run each and every platform with portability.

# How Java Code Executes
<div align="center" width=700 height=200>
<img src="https://github.com/user-attachments/assets/6fbace23-57fa-4761-a3d1-1352fb3cbd84" class="execution" alt="Java Code Execution" width=700 height=200>
</div>
<br/>

## History of Oak
<hr/>
<br/>
Java implementation was begun in 1991 by *James Gosling, Mike Sheridan, and Patrick Naughton* a team of engineers at Sun Microsystems known as the Green Team. The name was inspired by Java coffee and the first version released was Java 1.0.
- *Arthur Van Hoff* rewrote the Java 1.0 compiler to strictly comply with its specifications.
- In 1997 Sun Microsystems aimed to formalize Java through the ISO standards body but eventually withdrew from the process.

- Despite not formalizing through ISO SM offered most JAVA implementations at no cost earning revenue by licensing specialized products such as the JAVA Enterprise System.

- A significant milestone in JAVA's history occurred on November 13, 2006 when SM released a large portion of the JVM as free (Open-Source software contribution).

- By May 08, 2007 the JVM code was fully available under Open-source distribution terms.

- At that time Java made itself a preferred language for various applications including, Internet programming, Gaming & e-business etc.

## Features of Java
<hr/>
<br/>

- Java is known for its simplicity, robustness and security features making it a popular choice for enterprise-level applications.

- Java eliminates complex features like: pointers(*) and multiple inheritance, making it easier to write, debug, and maintain code.

- Java applications are compiled to byte code that can run on any JVM.

- The syntax of Java is similar to C/C++.

- Java makes writing, compiling and debugging easy.

- It helps to create modular programming by providing modularity like: abstract classes, interfaces, inheritance etc.

## Key Features of Java
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

# How we can create our first Java program
<hr/>

- Creating file name it use (**.java**) extension in any IDE(**Integrated Development Environment**) IntelliJ IDEA, Eclipse, or NetBeans.
- Compiling the file/program with (java compiler **javac**) convert the source code -> bytecode(**.class**) file which can be execute on any os having JVM.
- Running the program using (**java**) tool the JVM execute the compiled bytecode into machine level code using JIT and MC executed by the CPU.

<br/>
<div class="code-container">
  <h3>Example Program:</h3>
  <pre><code class="code-block">
<span class="keyword">public</span> <span class="keyword">class</span> <span class="classname">HelloWorld</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="method">main</span><span class="parens">(</span><span class="type">String</span>[] args<span class="parens">)</span>
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


## Basic Terminologies in Java:-
<hr/>
<br/>

#### **JVM** (*Java Virtual Machine*)

It is an integral part of Java platform responsible for execution of `.class` bytecode.

**Write Program → Compile Program (javac) → JVM Output**

- Programmer will write the code.  
- `javac` compiler will compile it. It is in JDK (Java Development Toolkit). It takes the program, converts it into bytecode as output.  
- In Running Phase, JVM will take bytecode, convert it to machine code, and show output to the user.

<br/>

#### **Bytecode**

It is intermediate code generated by JVM and it is platform independent.


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
