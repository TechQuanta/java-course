# Introduction to java
Java is class-based, **object-oriented** programming language developed by *James Gosling* at *Sun Microsystems Inc.* in May 1995 and acquired by Oracle in Jan 27, 2010 it was known by Oak earlier.

- It is designed to have as few implementation dependencies as possible.

- It is WORA (write once and run anywhere) means without any need of recompilation the Java code run each and every platform with portability.

# How Java Code Executes

<div align="center" width=700 height=200>
  
<img src="https://github.com/user-attachments/assets/6fbace23-57fa-4761-a3d1-1352fb3cbd84" class="execution" alt="Java Code Execution" width=700 height=200>

</div

## History of Oak

Java implementation was begun in 1991 by *James Gosling, Mike Sheridan, and Patrick Naughton* a team of engineers at Sun Microsystems known as the Green Team. The name was inspired by Java coffee and the first version released was Java 1.0.
- *Arthur Van Hoff* rewrote the Java 1.0 compiler to strictly comply with its specifications.
- In 1997 Sun Microsystems aimed to formalize Java through the ISO standards body but eventually withdrew from the process.

- Despite not formalizing through ISO SM offered most JAVA implementations at no cost earning revenue by licensing specialized products such as the JAVA Enterprise System.

- A significant milestone in JAVA's history occurred on November 13, 2006 when SM released a large portion of the JVM as free (Open-Source software contribution).

- By May 08, 2007 the JVM code was fully available under Open-source distribution terms.

- At that time Java made itself a preferred language for various applications including, Internet programming, Gaming & e-business etc.

## Features of Java
- Java is known for its simplicity, robustness and security features making it a popular choice for enterprise-level applications.

- Java eliminates complex features like: pointers(*) and multiple inheritance, making it easier to write, debug, and maintain code.

- Java applications are compiled to byte code that can run on any JVM.

- The syntax of Java is similar to C/C++.

- Java makes writing, compiling and debugging easy.

- It helps to create modular programming by providing modularity like: abstract classes, interfaces, inheritance etc.

## Key Features of Java
**Platform Independent**:  
It's said to be independent because the byte code which comes from the compilation of source code can run on any machine which has JVM and on each machine the output will be same.  
Each OS has a different JVM. That is why we call Java a platform-independent language.

**Object Oriented Programming**:  
Because Java is promoting objects and classes. Like each object is treated as an instance of the class.  
#### The four main concepts of Oop's are:
- Abstraction  
- Encapsulation  
- Inheritance  
- Polymorphism

**Robustness**:  
Java is robust. It puts lot of efforts into checking errors as early as possible, that is why the Java compiler is able to detect the critical errors which not easy to detect by other programming languages.

**Security**:  
In Java we don't have pointers, so we cannot access out-of-bound arrays. If we try to do several security flaws will appear like: stack corruption or buffer overflow are impossible to exploit in Java.  
- Also programs run in an env that is independent of the OS environment which makes Java program more secure.

**Multi-threading**:  
Java supports multi-threading by running the program parts concurrently.  
- The feature is useful for applications that require high performance or real time response.

**High Performance**:  
Java-arch is designed in such a way that reduce overhead during runtime and uses JIT (Just In Time) compiler where the compiler compile only those methods that are called, making app run faster.

# How we can create our first Java program
- Creating file name it use (.java) extension in any IDE(Integrated Development Environment) IntelliJ IDEA, Eclipse, or NetBeans.
- Compiling the file/program with (java compiler javac) convert the source code -> bytecode(.class) file which can be execute on any os having JVM.
- Running the program using (java) tool the JVM execute the compiled bytecode into machine level code using JIT and MC executed by the CPU.
*Example Program*:
```java
public class HelloWorld {
    public static void main(String[] args)
    {
        System.out.println("Hello, World!");
    }
}
```
- Creating this program in your file do make sure you are on right path on command.

```java
javac HelloWrold.java
java HelloWorld
```
