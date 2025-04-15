# Java Arrays and Collections

Arrays and collections in Java are fundamental concepts for storing and manipulating data efficiently. Arrays are used for fixed-size data, while collections provide more flexible data structures. This guide covers various types of arrays and collections in Java and how to use them effectively.

## Table of Contents
- [What are Arrays?](#what-are-arrays)
- [Creating Arrays](#creating-arrays)
  - [One-Dimensional Arrays](#one-dimensional-arrays)
  - [Multi-Dimensional Arrays](#multi-dimensional-arrays)
- [Array Operations](#array-operations)
  - [Sorting Arrays](#sorting-arrays)
  - [Searching Arrays](#searching-arrays)
- [Introduction to Collections](#introduction-to-collections)
  - [List](#list)
  - [Set](#set)
  - [Queue](#queue)
  - [Map](#map)
- [ArrayList vs LinkedList](#arraylist-vs-linkedlist)
- [Working with Maps](#working-with-maps)
- [Array and Collection Performance](#array-and-collection-performance)
- [Best Practices for Working with Arrays and Collections](#best-practices-for-working-with-arrays-and-collections)
- [Summary](#summary)

<!-- Custom Styles for Code Examples and Sections -->
<style>
    h1, h2, h3 {
        color: #3a3a3a;
        font-family: Arial, sans-serif;
    }

    pre {
        background-color: #f4f4f4;
        border: 1px solid #ccc;
        padding: 10px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        color: #333;
    }

    code {
        background-color: #f4f4f4;
        padding: 2px 4px;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
        color: #d14;
    }

    blockquote {
        border-left: 4px solid #ccc;
        padding-left: 10px;
        font-style: italic;
        color: #666;
    }

    ul {
        font-size: 16px;
    }

    li {
        margin-bottom: 8px;
    }

    .example {
        background-color: #e7f3fe;
        padding: 10px;
        border: 1px solid #bcd9f1;
        font-family: 'Courier New', Courier, monospace;
    }
</style>

### What are Arrays?
An **array** in Java is a container object that holds a fixed number of values of a single type. Arrays are used when you know the number of elements in advance and when the size of the collection does not change over time.

### Creating Arrays

Arrays in Java can be created in two main ways:

1. **One-Dimensional Arrays**  
2. **Multi-Dimensional Arrays**

#### One-Dimensional Arrays

A one-dimensional array stores a sequence of elements of the same type. It's the simplest type of array in Java.

##### Example of One-Dimensional Array:

<div class="example">
<pre>
int[] numbers = new int[5]; // Declare an array of 5 integers
numbers[0] = 10; // Assign values to array elements
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

System.out.println(numbers[2]); // Output: 30
</pre>
</div>

#### Multi-Dimensional Arrays

Multi-dimensional arrays are arrays of arrays, like a matrix or table of data.

##### Example of Multi-Dimensional Array:

<div class="example">
<pre>
int[][] matrix = new int[3][3]; // Declare a 3x3 matrix
matrix[0][0] = 1; // Assign values
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;

System.out.println(matrix[1][1]); // Output: 5
</pre>
</div>

### Array Operations

Once you have created an array, there are various operations you can perform, like sorting and searching.

#### Sorting Arrays

Java provides the `Arrays.sort()` method to sort arrays.

##### Example of Sorting Array:

<div class="example">
<pre>
import java.util.Arrays;

int[] numbers = {5, 3, 8, 1, 2};
Arrays.sort(numbers); // Sort the array

for(int num : numbers) {
    System.out.print(num + " "); // Output: 1 2 3 5 8
}
</pre>
</div>

#### Searching Arrays

You can search for elements in an array using `Arrays.binarySearch()` for sorted arrays.

##### Example of Searching Array:

<div class="example">
<pre>
int[] numbers = {1, 2, 3, 5, 8};
int index = Arrays.binarySearch(numbers, 5); // Search for 5
System.out.println(index); // Output: 3 (index of 5)
</pre>
</div>

### Introduction to Collections

Java provides several built-in collection classes that allow you to store and manipulate groups of objects dynamically. The most common collections include:

1. **List**: An ordered collection that allows duplicate elements.
2. **Set**: A collection that does not allow duplicate elements.
3. **Queue**: A collection used for holding elements prior to processing.
4. **Map**: A collection of key-value pairs.

#### List

The `List` interface provides an ordered collection of elements. Common implementations include `ArrayList`, `LinkedList`, and `Vector`.

##### Example of List:

<div class="example">
<pre>
import java.util.ArrayList;
import java.util.List;

List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");

for(String fruit : fruits) {
    System.out.println(fruit);
}
</pre>
</div>

#### Set

The `Set` interface does not allow duplicate elements. The most common implementation of `Set` is `HashSet`.

##### Example of Set:

<div class="example">
<pre>
import java.util.HashSet;
import java.util.Set;

Set<String> colors = new HashSet<>();
colors.add("Red");
colors.add("Blue");
colors.add("Green");

for(String color : colors) {
    System.out.println(color);
}
</pre>
</div>

#### Queue

The `Queue` interface represents a collection designed for holding elements prior to processing. `LinkedList` and `PriorityQueue` are common implementations.

##### Example of Queue:

<div class="example">
<pre>
import java.util.LinkedList;
import java.util.Queue;

Queue<String> queue = new LinkedList<>();
queue.add("First");
queue.add("Second");
queue.add("Third");

System.out.println(queue.poll()); // Output: First
</pre>
</div>

#### Map

The `Map` interface represents a collection of key-value pairs. `HashMap` is one of the most commonly used implementations.

##### Example of Map:

<div class="example">
<pre>
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> ageMap = new HashMap<>();
ageMap.put("Alice", 30);
ageMap.put("Bob", 25);
ageMap.put("Charlie", 35);

System.out.println(ageMap.get("Bob")); // Output: 25
</pre>
</div>

### ArrayList vs LinkedList

Both `ArrayList` and `LinkedList` implement the `List` interface, but they have different internal structures and performance characteristics.

- **ArrayList**: Based on a dynamic array. It provides fast random access but slower insertions and deletions in the middle of the list.
- **LinkedList**: Based on a doubly linked list. It provides faster insertions and deletions but slower random access.

### Working with Maps

Maps are powerful structures that associate keys with values. Here’s an example of using a `Map` in Java:

##### Example of Using Maps:

<div class="example">
<pre>
import java.util.HashMap;
import java.util.Map;

Map<Integer, String> map = new HashMap<>();
map.put(1, "Apple");
map.put(2, "Banana");
map.put(3, "Cherry");

System.out.println(map.get(1)); // Output: Apple
</pre>
</div>

### Array and Collection Performance

- **Arrays**: Arrays are faster than collections when you need fixed-size storage and need to perform operations like access and iteration.
- **Collections**: Collections are more flexible and allow dynamic resizing, but may have overhead depending on the type (e.g., `ArrayList` vs `LinkedList`).

### Best Practices for Working with Arrays and Collections

- Use arrays when you know the size in advance and need fast access to elements.
- Use collections when you need flexibility and when the size of the data structure may change.
- Choose the appropriate collection type based on your use case (e.g., `HashMap` for key-value pairs, `ArrayList` for ordered data).

### Summary

- **Arrays**: Fixed-size, fast access to elements.
- **Collections**: Flexible, dynamic data structures for storing and manipulating objects.
- **List, Set, Queue, Map**: Different types of collections to suit various needs.
- **Best Practices**: Choose the right data structure based on size, performance, and requirements.

Mastering arrays and collections in Java is crucial for handling data efficiently in applications. By understanding when and how to use each type, you can write optimized and scalable code.
