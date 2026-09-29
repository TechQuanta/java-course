# 🌐 Networking in Java

Java provides extensive support for networking through the `java.net` package. This allows you to write programs that communicate over a network (like the Internet or a local network) using protocols like TCP/IP and UDP.

---

## 1. URL and URLConnection

The `URL` class represents a Uniform Resource Locator, which is a pointer to a "resource" on the World Wide Web.

<div class="code-container">
  <pre><code class="language-java">
import java.net.*;
import java.io.*;

public class URLDemo {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.example.com");
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println(inputLine);
            }
            in.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
  </code></pre>
</div>

---

## 2. TCP Socket Programming

Transmission Control Protocol (TCP) provides a reliable, connection-oriented communication channel. Java uses **Sockets** for TCP networking.
- **Server**: Uses `ServerSocket` to wait for client connections.
- **Client**: Uses `Socket` to connect to the server.

### Server Example

<div class="code-container">
  <pre><code class="language-java">
import java.net.*;
import java.io.*;

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server is listening on port 8080...");

        // Wait for a client to connect
        Socket socket = serverSocket.accept();
        System.out.println("Client connected!");

        // Send a message to the client
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        out.println("Hello from the Server!");

        socket.close();
        serverSocket.close();
    }
}
  </code></pre>
</div>

### Client Example

<div class="code-container">
  <pre><code class="language-java">
import java.net.*;
import java.io.*;

public class SimpleClient {
    public static void main(String[] args) throws IOException {
        // Connect to the server on localhost, port 8080
        Socket socket = new Socket("127.0.0.1", 8080);

        // Read the message from the server
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String response = in.readLine();
        
        System.out.println("Server says: " + response);

        socket.close();
    }
}
  </code></pre>
</div>

---

## 3. UDP Datagram Programming

User Datagram Protocol (UDP) is a connectionless, unreliable protocol. It's faster than TCP but doesn't guarantee delivery. Java uses `DatagramSocket` and `DatagramPacket` for UDP networking.

Use UDP for tasks like video streaming or gaming where speed is more important than absolute reliability.
