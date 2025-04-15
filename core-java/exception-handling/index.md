<style>
    h1, h2, h3 {
        color: #2C3E50;
    }
    code {
        background-color:rgba(244, 244, 244, 0);
        padding: 0.2em 0.4em;
        border-radius: 4px;
    }
    pre {
        background-color: #2D3E50;
        color: #ECF0F1;
        padding: 15px;
        border-radius: 4px;
        overflow-x: auto;
    }
    blockquote {
        background-color: #ECF0F1;
        border-left: 5px solid #3498DB;
        padding: 10px;
        font-style: italic;
    }
    ul {
        padding-left: 20px;
    }
    li {
        font-size: 16px;
        line-height: 1.6;
    }
    .code-block {
        background-color: #F9F9F9;
        padding: 10px;
        border-radius: 5px;
    }
</style>

# Exception Handling in Java

Exception handling is a core feature of Java, enabling developers to handle errors in a structured way, preventing the program from crashing unexpectedly.

## Exception Hierarchy in Java

In Java, exceptions are part of a class hierarchy. The root class of all exceptions is the `Throwable` class. Below it, there are two main branches:

1. **Checked Exceptions**
2. **Unchecked Exceptions**

### **Class Hierarchy of Exceptions**

```plaintext
Throwable
 ├── Error
 │    ├── OutOfMemoryError
 │    ├── StackOverflowError
 │    └── VirtualMachineError
 └── Exception
      ├── IOException
      │    ├── FileNotFoundException
      │    └── EOFException
      ├── SQLException
      ├── RuntimeException
      │    ├── NullPointerException
      │    ├── ArithmeticException
      │    └── ArrayIndexOutOfBoundsException
      ├── ExceptionInInitializerError
      └── Custom Exception (User-defined)
```