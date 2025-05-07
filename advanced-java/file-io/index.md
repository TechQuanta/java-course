## 📁 File I/O Operations in Java
---

Java provides extensive support for file input and output through classes in the `java.io`, `java.nio.file`, and `java.util` packages. This guide covers all key file I/O operations with examples.

<br/>

### 🔸 Basic File Reading (Old Way)

<br/>


<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.*;

public class ReadFile {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("example.txt");
        BufferedReader br = new BufferedReader(fr);
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>FileReader</strong>: A class used for reading character files. It reads the content of the file character by character, making it suitable for text files only.</li>
    <li><strong>BufferedReader</strong>: Wraps around a <code class="code-block">FileReader</code> and adds buffering capability. It reads larger chunks of data and stores them in a buffer, making reading operations more efficient.</li>
    <li><strong>readLine()</strong>: Reads a line of text from the file. Returns <code class="code-block">null</code> when the end of the file is reached.</li>
    <li><strong>System.out.println(line)</strong>: Prints each line to the console as it's read.</li>
    <li><strong>br.close()</strong>: Closes the <code class="code-block">BufferedReader</code>, which also closes the underlying <code class="code-block">FileReader</code>.</li>
  </ul>

  <h3 style="color:#4EC9B0;">💡 Why Use BufferedReader?</h3>
  <ul>
    <li><strong>Efficiency:</strong> It reads in larger blocks, reducing disk I/O.</li>
    <li><strong>Convenience:</strong> Provides utility methods like <code class="code-block">readLine()</code> that are not available in <code class="code-block">FileReader</code>.</li>
  </ul>

  <h3 style="color:#4EC9B0;">📦 Used Classes:</h3>
  <ul>
    <li><code class="code-block">java.io.FileReader</code> - Reads characters from a file.</li>
    <li><code class="code-block">java.io.BufferedReader</code> - Buffers characters for efficient reading.</li>
  </ul>
</div>



<br/>

<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.*;

public class WriteFile {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("example.txt");
        BufferedWriter bw = new BufferedWriter(fw);
        bw.write("Hello, Java File I/O!");
        bw.newLine();
        bw.close();
    }
}
  </code></pre>

  <h3 >🔍 Explanation:</h3>
  <ul>
    <li><strong>FileWriter</strong>: A class used for writing character files. It writes characters to the file directly.</li>
    <li><strong>BufferedWriter</strong>: Wraps around a <code class="code-block">FileWriter</code> to improve efficiency by buffering the characters before writing.</li>
    <li><strong>write()</strong>: Writes a string to the file.</li>
    <li><strong>newLine()</strong>: Inserts a platform-specific newline (like <code class="code-block">\n</code> or <code class="code-block">\r\n</code>).</li>
    <li><strong>bw.close()</strong>: Closes the <code class="code-block">BufferedWriter</code>, which also flushes the buffer and closes the underlying <code class="code-block">FileWriter</code>.</li>
  </ul>

  <h3 >💡 Why Use BufferedWriter?</h3>
  <ul>
    <li><strong>Efficiency:</strong> It reduces the number of write operations by buffering them first.</li>
    <li><strong>Functionality:</strong> Provides convenience methods like <code class="code-block">newLine()</code> that <code class="code-block">FileWriter</code> alone doesn't offer.</li>
  </ul>

  <h3>📦 Used Classes:</h3>
  <ul>
    <li><code class="code-block">java.io.FileWriter</code> - Writes characters to a file.</li>
    <li><code class="code-block">java.io.BufferedWriter</code> - Buffers characters for efficient writing.</li>
  </ul>
</div>



### 🔸 Self-Closing with `try-with-resources`
<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.*;

public class TryWithResources {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>try-with-resources</strong>: Automatically closes resources like <code class="code-block">BufferedReader</code> after use, even if an exception occurs.</li>
    <li><strong>BufferedReader</strong>: Efficiently reads text from a file line-by-line.</li>
    <li><strong>Exception Handling</strong>: Any <code class="code-block">IOException</code> is caught and printed via <code class="code-block">e.printStackTrace()</code>.</li>
  </ul>

  <h3 style="color:#4EC9B0;">💡 Advantage:</h3>
  <ul>
    <li>No need to explicitly call <code class="code-block">close()</code>.</li>
    <li>Reduces boilerplate and prevents resource leaks.</li>
  </ul>
</div>

<br/>

### 🔸 File I/O with `java.nio.file`
<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code (Read using NIO):</h3>
  <pre><code class="code-block">
import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class NIORead {
    public static void main(String[] args) throws IOException {
        List&lt;String&gt; lines = Files.readAllLines(Paths.get("example.txt"));
        lines.forEach(System.out::println);
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>Files.readAllLines()</strong>: Reads all lines from a file into a <code class="code-block">List&lt;String&gt;</code>.</li>
    <li><strong>Paths.get()</strong>: Converts a string path to a <code class="code-block">Path</code> object.</li>
    <li><strong>forEach()</strong>: Iterates and prints each line using method reference.</li>
  </ul>

  <h3 style="color:#4EC9B0;">📦 Used Classes:</h3>
  <ul>
    <li><code class="code-block">java.nio.file.Files</code></li>
    <li><code class="code-block">java.nio.file.Paths</code></li>
    <li><code class="code-block">java.util.List</code></li>
  </ul>
</div>

<div>
  <h3 style="color:#4EC9B0;">📄 Code (Write using NIO):</h3>
  <pre><code class="code-block">
import java.nio.file.*;
import java.io.IOException;

public class NIOWrite {
    public static void main(String[] args) throws IOException {
        String content = "Written using NIO";
        Files.write(Paths.get("nio.txt"), content.getBytes());
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>Files.write()</strong>: Writes byte data to the specified file.</li>
    <li><strong>content.getBytes()</strong>: Converts the string into bytes.</li>
    <li><strong>Paths.get()</strong>: Creates a <code class="code-block">Path</code> to the target file.</li>
  </ul>

  <h3 style="color:#4EC9B0;">💡 Use Case:</h3>
  <ul>
    <li>Quick and modern approach to file writing using the NIO package.</li>
  </ul>
</div>

<br/>

### 🔸 Check File Existence & Properties
<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.File;

public class FileCheck {
    public static void main(String[] args) {
        File file = new File("example.txt");
        if (file.exists()) {
            System.out.println("File exists");
            System.out.println("Readable: " + file.canRead());
            System.out.println("Writable: " + file.canWrite());
            System.out.println("Path: " + file.getAbsolutePath());
        } else {
            System.out.println("File does not exist");
        }
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>file.exists()</strong>: Checks if the file is present on disk.</li>
    <li><strong>file.canRead()/canWrite()</strong>: Checks permissions on the file.</li>
    <li><strong>getAbsolutePath()</strong>: Returns the complete path of the file.</li>
  </ul>

  <h3 style="color:#4EC9B0;">📦 Used Class:</h3>
  <ul>
    <li><code class="code-block">java.io.File</code> - Used to represent and query file or directory properties.</li>
  </ul>
</div>

<br/>

### 🔸 Delete / Rename File
<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.File;

public class FileDeleteRename {
    public static void main(String[] args) {
        File file = new File("old.txt");
        file.delete(); // Deletes the file
        File oldFile = new File("oldName.txt");
        File newFile = new File("newName.txt");
        oldFile.renameTo(newFile); // Renames file
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>file.delete()</strong>: Deletes the file from disk if it exists.</li>
    <li><strong>renameTo()</strong>: Renames a file to a new name/path.</li>
  </ul>
</div>


<br/>

### 🔸 Directory Operations
<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.File;

public class DirectoryOps {
    public static void main(String[] args) {
        File dir = new File("myDir");
        if (!dir.exists()) {
            dir.mkdir(); // Creates single directory
        }
        File nestedDirs = new File("parent/child/grandchild");
        nestedDirs.mkdirs(); // Creates nested directories
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>mkdir()</strong>: Creates a single directory.</li>
    <li><strong>mkdirs()</strong>: Creates nested directories in a path.</li>
    <li><strong>exists()</strong>: Checks if the directory already exists to avoid duplication.</li>
  </ul>
</div>


<br/>

### 🔸 File Copying

<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.nio.file.*;
import java.io.IOException;

public class FileCopy {
    public static void main(String[] args) throws IOException {
        Files.copy(Paths.get("source.txt"), Paths.get("destination.txt"), StandardCopyOption.REPLACE_EXISTING);
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>Files.copy()</strong>: Copies the contents of one file to another.</li>
    <li><strong>StandardCopyOption.REPLACE_EXISTING</strong>: Replaces destination if it already exists.</li>
  </ul>
</div>


<br/>

### 🔸 File Serialization Example
<br/>
<div>
  <h3 style="color:#4EC9B0;">📄 Code:</h3>
  <pre><code class="code-block">
import java.io.*;

class Student implements Serializable {
    String name;
    int age;
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class SerializeDemo {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Student s = new Student("Alice", 22);
        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("student.ser"));
        out.writeObject(s);
        out.close();
        ObjectInputStream in = new ObjectInputStream(new FileInputStream("student.ser"));
        Student obj = (Student) in.readObject();
        System.out.println(obj.name + " - " + obj.age);
        in.close();
    }
}
  </code></pre>

  <h3 style="color:#4EC9B0;">🔍 Explanation:</h3>
  <ul>
    <li><strong>Serializable</strong>: Enables the object to be converted into a byte stream.</li>
    <li><strong>ObjectOutputStream</strong>: Writes the object to a file.</li>
    <li><strong>ObjectInputStream</strong>: Reads the object back into memory.</li>
  </ul>

  <h3 style="color:#4EC9B0;">💾 Output:</h3>
  <ul>
    <li><code class="code-block">Alice - 22</code> will be printed after deserialization.</li>
  </ul>
</div>


<br/>

### 🔸 Types of File Readers in Java
<br/>

#### 1. `FileReader` – Character stream reader for text files
<br/>
<div>
  <h3 style="color:#4EC9B0;">📘 1. FileReader (Character Stream Reader):</h3>
  <pre><code class="code-block">
FileReader fr = new FileReader("example.txt");
int i;
while ((i = fr.read()) != -1) {
    System.out.print((char) i);
}
fr.close();
  </code></pre>
  <p>Reads character-by-character. Ideal for reading small text files.</p>
</div>

<div>
  <h3 style="color:#4EC9B0;">📘 2. BufferedReader (Buffered Text Reader):</h3>
  <pre><code class="code-block">
BufferedReader br = new BufferedReader(new FileReader("example.txt"));
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
br.close();
  </code></pre>
  <p>Efficient line-by-line reading with internal buffer support.</p>
</div>

<div>
  <h3 style="color:#4EC9B0;">📘 3. InputStreamReader (Byte-to-Char Bridge):</h3>
  <pre><code class="code-block">
InputStreamReader isr = new InputStreamReader(new FileInputStream("example.txt"));
int i;
while ((i = isr.read()) != -1) {
    System.out.print((char) i);
}
isr.close();
  </code></pre>
  <p>Converts byte input to character stream. Useful when encoding matters.</p>
</div>

<div>
  <h3 style="color:#4EC9B0;">📘 4. Scanner (Line/Word Reader):</h3>
  <pre><code class="code-block">
Scanner sc = new Scanner(new File("example.txt"));
while (sc.hasNextLine()) {
    System.out.println(sc.nextLine());
}
sc.close();
  </code></pre>
  <p>Easy-to-use parser for primitive types and strings from files.</p>
</div>

<br/>

### ✅ Summary

<br/>

| Operation            | API Used                                               |
| -------------------- | ------------------------------------------------------ |
| Read File            | FileReader, BufferedReader, Scanner, NIO               |
| Write File           | FileWriter, BufferedWriter, Files.write                |
| Try-With-Resources   | Auto-close I/O resources                               |
| File Properties      | File class                                             |
| Directory Management | File.mkdir, File.mkdirs                                |
| File Copy            | Files.copy                                             |
| Serialization        | ObjectOutputStream                                     |
| Readers Used         | FileReader, BufferedReader, InputStreamReader, Scanner |



> 📌 Tip: Always prefer `try-with-resources` for file handling to avoid memory leaks.

