# Java Collections Framework

The **Java Collections Framework (JCF)** is a set of classes and interfaces that implement commonly used collection data structures. It provides a standard way to handle and organize data in Java, allowing for efficient storage, retrieval, and manipulation of data.

## Table of Contents
1. [Overview](#overview)
2. [Collection Interfaces](#collection-interfaces)
3. [Common Implementations](#common-implementations)
4. [List Interface](#list-interface)
5. [Set Interface](#set-interface)
6. [Queue Interface](#queue-interface)
7. [Map Interface](#map-interface)
8. [Iterators](#iterators)
9. [Collections Utility Class](#collections-utility-class)
10. [Advanced Concepts](#advanced-concepts)

## Overview

The **Java Collections Framework** (JCF) includes interfaces, implementations, and algorithms for working with collections of objects. It provides high-level abstractions and implementations for different types of collections such as lists, sets, and maps.

### Key Components of the Collections Framework:
- **Interfaces**: Define common behavior for different collection types.
- **Implementations**: Concrete classes that implement the collection interfaces.
- **Algorithms**: Methods that operate on collections, such as sorting and searching.

<br/>
<div align="center" width=700 height=200>
<img src="IMAGES/collection.png" class="execution" alt="exception hierarchy">
</div><br/>

## Collection Interfaces

The core interfaces of the Java Collections Framework are:

- **Collection**: The root interface for all collections. It defines basic operations like adding, removing, and checking for elements.
- **List**: Extends Collection. It represents an ordered collection that allows duplicates and provides indexed access to elements.
- **Set**: Extends Collection. It represents a collection of unique elements with no duplicates.
- **Queue**: Extends Collection. It represents a collection used to hold elements prior to processing.
- **Deque**: Extends Queue. It represents a double-ended queue where elements can be added or removed from both ends.
- **Map**: Not a true collection. It represents a collection of key-value pairs, with unique keys.

## Common Implementations

- **ArrayList**: Implements the List interface using a dynamic array. Provides fast random access to elements.
- **LinkedList**: Implements both List and Queue interfaces using a doubly linked list.
- **HashSet**: Implements the Set interface using a hash table. It provides constant time performance for basic operations.
- **TreeSet**: Implements Set using a Red-Black tree. It maintains elements in sorted order.
- **HashMap**: Implements the Map interface using a hash table.
- **TreeMap**: Implements Map using a Red-Black tree. It maintains keys in sorted order.
- **PriorityQueue**: Implements Queue using a priority heap. It provides efficient retrieval of the highest-priority element.

## List Interface

The **List** interface is an ordered collection that allows duplicate elements. It has several key methods:

- `add(E e)`: Adds an element to the list.
- `get(int index)`: Retrieves an element by its index.
- `remove(int index)`: Removes the element at the specified index.
- `set(int index, E element)`: Replaces the element at the specified index.
- `indexOf(Object o)`: Returns the index of the first occurrence of the specified element.
- `size()`: Returns the size of the list.

### Common Implementations:
- **ArrayList**: Provides constant-time random access to elements. It is backed by an array.
- **LinkedList**: Implements both the List and Queue interfaces. It provides better performance for adding and removing elements at the ends of the list.

### Example:

```java
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Cherry");
System.out.println(list.get(0)); // Output: Apple
