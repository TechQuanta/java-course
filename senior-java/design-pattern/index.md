# Patterns in Programming

## Introduction

Patterns are a handy application of loops and will provide you with better clarity and understanding of the implementation of loops.

Before printing any pattern, you must consider the following three things:
- The first step in printing any pattern is to figure out the number of rows that the pattern requires.
- Next, you should know how many columns are there in the ith row.
- Once, you have figured out the number of rows and columns, then focus on the pattern to print.

## Java Implementation for Patterns

We generally need two loops to print patterns. The outer loop iterates over the rows, while the inner nested loop is responsible for traversing the columns. The algorithm to print any pattern can be described as follows:
- Accept the number of rows or size of the pattern from a user using the `.nextInt()` function.
- Iterate the rows using the outer loop.
- Use the nested inner loop to handle the column contents. The internal loop iteration depends on the values of the outer loop.
- Print the required pattern contents using the print function.
- Add a new line after each row.

### Basic Template for Pattern Printing

```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print("*"); // Printing in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Square Patterns

### Pattern 1.1 - Basic Square Pattern
```
// For N=4:
****
****
****
****
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: Print "*" N times in all rows

### Pattern 1.2 - Row Number Square Pattern
```
// N = 5
11111
22222
33333
44444
55555
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: All entries in any row are the same as the corresponding row numbers

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print(row); // Printing row number in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 1.3 - Column Number Square Pattern
```
// N = 5
12345
12345
12345
12345
12345
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: All entries in any row are the same as the corresponding column numbers

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print(col); // Printing column number in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 1.4 - Reverse Column Number Square Pattern
```
// N = 5
54321
54321
54321
54321
54321
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: All entries in any row are N-columnNumber+1

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print(N - col + 1); // Printing N-col+1 in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 1.5 - Incrementing Row-Column Sum Pattern
```
// N = 5
12345
23456
34567
45678
56789
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: The first entry in the ith row is i, and the remaining entries are incremented continuously by 1

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print(col + row - 1); // Printing col+row-1 in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Triangular Patterns

### Pattern 1.6 - Row Number Triangle Pattern
```
// N = 5
1
22
333
4444
55555
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: The number of columns in any row is the same as the corresponding row number
- What to print: All entries in any row are the same as the corresponding row numbers

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= row) { // Loop will run for 'row' times
            System.out.print(row); // Printing row number in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 1.7 - Column Number Triangle Pattern
```
// N = 5
1
12
123
1234
12345
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: The number of columns in any row is the same as the corresponding row number
- What to print: All entries in any row are the same as the corresponding column numbers

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= row) { // Loop will run for 'row' times
            System.out.print(col); // Printing column number in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 1.8 - Continuous Number Triangle Pattern
```
// N = 5
1
23
456
78910
1112131415
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: The number of columns in any row is the same as the corresponding row number
- What to print: The pattern starts with 1 and then each column entry is incremented by 1

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    int temp = 1;
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= row) { // Loop will run for 'row' times
            System.out.print(temp); // Printing temp in each column
            temp = temp + 1;
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Character Patterns

### Pattern 1.9 - Alphabet Square Pattern
```
// N = 4
ABCD
ABCD
ABCD
ABCD
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: The 1st column has all A's, 2nd column has all B's, and so on

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print((char)(64 + col)); // Print character in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 1.10 - Incrementing Alphabet Pattern
```
// N = 4
ABCD
BCDE
CDEF
DEFG
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: Similar to Pattern 1.5, but with alphabets instead of integers

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            System.out.print((char)(64 + col + row - 1)); // Print character
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Advanced Patterns

### Pattern 2.1 - Inverted Triangle
```
// N = 3
* * *
* *
*
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: The number of columns in any row is equal to N-rowNumber+1
- What to print: All entries in any row are "*"

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N - row + 1) { // Number of columns = N-rowNumber+1
            System.out.print("*"); // Printing in each column
            col = col + 1; // Increment the current column (Inner Loop)
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 2.2 - Reversed Pattern
```
// N = 3
  *
 **
***
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: N columns in each row
- What to print: Print spaces when col <= N-rowNumber, and "*" when col > N-rowNumber

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // Loop starts with the first column in the current row
        while (col <= N) { // Loop will run for N columns
            if (col <= N - row)
                System.out.print(" "); // Printing " "
            else
                System.out.print("*"); // Printing "*"
            col = col + 1; // Increment the current column
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

### Pattern 2.3 - Isosceles Pattern
```
// N = 4
   1
  121
 12321
1234321
```

**Approach:**
- Number of Rows: N rows
- Number of Columns: First print N-rowNumber spaces, then print 2*rowNumber-1 numbers
- What to print: First print spaces, then increasing numbers from 1 to row number, then decreasing numbers from row number-1 to 1

**Java Implementation:**
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int spaces = 1; // Printing spaces
        while (spaces <= N - row) {
            System.out.print(" ");
            spaces = spaces + 1;
        }
        int num = 1; // Variable to print the numbers
        while (num <= row) { // Increasing Pattern
            System.out.print(num);
            num = num + 1;
        }
        num = row - 1; // Start printing the decreasing part
        while (num >= 1) { // Decreasing Pattern
            System.out.print(num);
            num = num - 1;
        }
        row = row + 1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Practice Patterns

Here are some additional patterns for practice. All patterns are drawn for N=4:

### Triangle Patterns
```
*
***
*****
*******
```

```
1
121
12321
1234321
```

```
1
121
12321
1234321
12321
121
1
```

```
1 1
2 2
3 3
4
3 3
2 2
1 1
```

### Diamond Patterns
```
*
***
*****
*******
*****
***
*
```

### Number Patterns
```
12344321
123**321
12****21
1******1
```

```
ABCD
ABC
AB
A
```

```
4555
3455
2345
1234
```

```
1
11
202
3003
```

### Character Patterns
```
A
BB
CCC
DDDD
```

## Conclusion

Patterns are an excellent way to master loops and logical thinking in programming. By understanding the row-column relationship and what to print in each cell, you can create a wide variety of patterns. Start with simpler patterns and gradually move to more complex ones as you gain confidence.

Remember the key steps:
1. Identify the number of rows
2. Determine the column count for each row
3. Decide what character/number to print in each position
4. Implement using nested loops

# Advanced Patterns

## Pattern 2.1 - Inverted Triangle

```
// N = 3
* * *
* *
*
```

### Approach:
From the above pattern, we can observe:
- **Number of Rows**: The pattern has 3 rows. We have to print the pattern for N rows.
- **Number of Columns**: The number of columns in any row is equal to N-rowNumber+1. 1st row has 3 columns (3-1+1), 2nd row has 2 columns (3-2+1), and so on. Thus, in a pattern of N rows, the ith row will have N-i+1 columns.
- **What to print**: All the entries in any row are "*".

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // loop starts with the first column in the current row
        while (col <= N-row+1) { //Number of columns = N-rowNumber+1
            System.out.print("*"); // printing in each column
            col = col+1; //Increment the current column (Inner Loop)
        }
        row = row+1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Pattern 2.2 - Reversed Pattern

```
// N = 3
  *
 **
***
```

### Approach:
From the above pattern, we can observe:
- **Number of Rows**: The pattern has 3 rows. We have to print the pattern for N rows.
- **Number of Columns**: The number of columns in any row is equal to N.
- **What to print**: In the 1st row, while columnNumber <= 2(3-1), we print a " " in every column. Beyond the 2nd column, we print a "*". Similarly, in the 2nd row, we print a " " till columnNumber <=1(3-2) and beyond the 1st column, we print a "*". We can easily notice that if col <= N-rowNumber, we are printing a " " (Space). And if col > N-rowNumber, we are printing a "*".

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int col = 1; // loop starts with the first column in the current row
        while (col <= N) { //loop will run for N columns
            if(col<=N-row)
                System.out.print(" "); // printing " "
            else
                System.out.print("*"); // printing "*"
            col = col+1; //Increment the current column
        }
        row = row+1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Pattern 2.3 - Isosceles Pattern

```
// N = 4
   1
  121
 12321
1234321
```

### Approach:
From the above pattern we can observe:
- **Number of Rows**: The pattern has 4 rows. We have to print the pattern for N rows.
- **Number of Columns**: Similar to Pattern 2.2, we first have N-rowNumber columns of spaces. Following this, we have 2*rowNumber-1 columns of numbers.
- **What to print**: We can notice that if col <= N-rowNumber, we are printing a " " (Space). Further, the pattern has two parts. First is the increasing part and second is the decreasing part. For the increasing part, we will initialize a variable num=1. In each row we will keep printing num till its value becomes equal to the rowNumber. We will increment num by 1 after printing it; this will account for the first part of the pattern. We have num = rowNumber at this stage. The decreasing part starts with rowNumber - 1. Hence, we will initialize num with rowNumber - 1. Now, for the decreasing part, we will again start printing num till num>=1. After printing num we will decrement it by 1.

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N= Number of Rows
    int row = 1; // The loop starts with the 1st row
    while (row <= N) { // Loop will run for N rows
        int spaces = 1; // Printing spaces
        while (spaces <= N-row) {
            System.out.print(" ");
            spaces=spaces+1;
        }
        int num=1; // Variable to print the numbers
        while (num <= row) { // Increasing Pattern
            System.out.print(num);
            num=num+1;
        }
        num=row-1; // We have to start printing the decreasing part
                  // from one less than the rowNumber
        while (num >= 1) { // Decreasing Pattern
            System.out.print(num);
            num=num-1;
        }
        row = row+1; // Increment the current row (Outer Loop)
        System.out.println(); // Add a new Line after each row
    }
}
```

## Practice Problems

Here are a few similar patterns problems for your practice. All the patterns have been drawn for N=4.

### Pattern A
```
*
***
*****
*******
```

### Pattern B
```
1
121
12321
1234321
```

### Pattern C
```
1
121
12321
1234321
12321
121
1
```

### Pattern D
```
1 1
2 2
3 3
4
3 3
2 2
1 1
```

### Pattern E
```
*
***
*****
*******
*****
***
*
```
# Solutions for Practice Pattern Problems

Let's solve each of the practice problems that were given in the patterns document. For each pattern, I'll provide the expected output, analyze the pattern approach, and implement the solution in Java.

## Pattern A
```
*
***
*****
*******
```

### Approach:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: For the ith row, we print 2*i-1 stars
- **What to print**: Odd number of stars in each row, starting with 1 and increasing by 2

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    int row = 1; // The loop starts with the 1st row
    
    while (row <= N) { // Loop will run for N rows
        int col = 1;
        // In each row, print 2*row-1 stars
        while (col <= 2*row-1) {
            System.out.print("*");
            col = col + 1;
        }
        
        row = row + 1; // Increment the current row
        System.out.println(); // Add a new line after each row
    }
}
```

## Pattern B
```
1
121
12321
1234321
```

### Approach:
This is the Isosceles Pattern (Pattern 2.3) already covered in the main document. It consists of:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: For the ith row, we print 2*i-1 numbers
- **What to print**: First increasing numbers from 1 to i, then decreasing from i-1 to 1

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    int row = 1; // The loop starts with the 1st row
    
    while (row <= N) { // Loop will run for N rows
        // First print increasing numbers from 1 to row
        int num = 1;
        while (num <= row) {
            System.out.print(num);
            num = num + 1;
        }
        
        // Then print decreasing numbers from row-1 to 1
        num = row - 1;
        while (num >= 1) {
            System.out.print(num);
            num = num - 1;
        }
        
        row = row + 1; // Increment the current row
        System.out.println(); // Add a new line after each row
    }
}
```

## Pattern C
```
1
121
12321
1234321
12321
121
1
```

### Approach:
This is a diamond-like pattern of numbers. It consists of:
- **Number of Rows**: 2*N-1 total rows (7 for N=4)
- **First half**: Rows 1 to N follow the Isosceles Pattern (Pattern B)
- **Second half**: Rows N+1 to 2*N-1 are a mirror image of rows N-1 down to 1

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    // First half (rows 1 to N)
    int row = 1;
    while (row <= N) {
        // Print increasing numbers from 1 to row
        int num = 1;
        while (num <= row) {
            System.out.print(num);
            num = num + 1;
        }
        
        // Print decreasing numbers from row-1 to 1
        num = row - 1;
        while (num >= 1) {
            System.out.print(num);
            num = num - 1;
        }
        
        row = row + 1;
        System.out.println();
    }
    
    // Second half (rows N+1 to 2*N-1)
    row = N - 1;
    while (row >= 1) {
        // Print increasing numbers from 1 to row
        int num = 1;
        while (num <= row) {
            System.out.print(num);
            num = num + 1;
        }
        
        // Print decreasing numbers from row-1 to 1
        num = row - 1;
        while (num >= 1) {
            System.out.print(num);
            num = num - 1;
        }
        
        row = row - 1;
        System.out.println();
    }
}
```

## Pattern D
```
1 1
2 2
3 3
4
3 3
2 2
1 1
```

### Approach:
This is another diamond-like pattern, but with spaces in between numbers. It consists of:
- **Number of Rows**: 2*N-1 total rows (7 for N=4)
- **First half**: For rows 1 to N-1, print row number, spaces, then row number again
- **Middle row**: For row N, just print N
- **Second half**: For rows N+1 to 2*N-1, mirror image of rows N-1 down to 1

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    // First half (rows 1 to N-1)
    int row = 1;
    while (row < N) {
        // Print row number, space, row number
        System.out.print(row + " " + row);
        row = row + 1;
        System.out.println();
    }
    
    // Middle row (N)
    System.out.println(N);
    
    // Second half (rows N+1 to 2*N-1)
    row = N - 1;
    while (row >= 1) {
        // Print row number, space, row number
        System.out.print(row + " " + row);
        row = row - 1;
        System.out.println();
    }
}
```

## Pattern E
```
*
***
*****
*******
*****
***
*
```

### Approach:
This is a diamond pattern with stars. It consists of:
- **Number of Rows**: 2*N-1 total rows (7 for N=4)
- **First half**: For rows 1 to N, print 2*i-1 stars (like Pattern A)
- **Second half**: For rows N+1 to 2*N-1, mirror image of rows N-1 down to 1

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    // First half (rows 1 to N)
    int row = 1;
    while (row <= N) {
        int col = 1;
        // In each row, print 2*row-1 stars
        while (col <= 2*row-1) {
            System.out.print("*");
            col = col + 1;
        }
        
        row = row + 1;
        System.out.println();
    }
    
    // Second half (rows N+1 to 2*N-1)
    row = N - 1;
    while (row >= 1) {
        int col = 1;
        // In each row, print 2*row-1 stars
        while (col <= 2*row-1) {
            System.out.print("*");
            col = col + 1;
        }
        
        row = row - 1;
        System.out.println();
    }
}
```

## Additional Practice Patterns from the Document

### Pattern F - Numeric Pattern with Stars in the Middle
```
12344321
123**321
12****21
1******1
```

### Approach:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: 2*N total columns
- **What to print**: For each row i, print numbers 1 to (N-i+1), then 2*(i-1) stars, then numbers (N-i+1) down to 1

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    int row = 1;
    while (row <= N) {
        // Print increasing numbers from 1 to N-row+1
        int num = 1;
        while (num <= N-row+1) {
            System.out.print(num);
            num = num + 1;
        }
        
        // Print stars (2 * (row-1) stars)
        int stars = 1;
        while (stars <= 2*(row-1)) {
            System.out.print("*");
            stars = stars + 1;
        }
        
        // Print decreasing numbers from N-row+1 down to 1
        num = N-row+1;
        while (num >= 1) {
            System.out.print(num);
            num = num - 1;
        }
        
        row = row + 1;
        System.out.println();
    }
}
```

### Pattern G - Decreasing Character Pattern
```
ABCD
ABC
AB
A
```

### Approach:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: For row i, N-i+1 columns
- **What to print**: Characters starting from 'A' in each row

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    int row = 1;
    while (row <= N) {
        int col = 1;
        while (col <= N-row+1) {
            System.out.print((char)(64 + col)); // 'A' is ASCII 65
            col = col + 1;
        }
        
        row = row + 1;
        System.out.println();
    }
}
```

### Pattern H - Numeric Pattern with Increasing First Digit
```
4555
3455
2345
1234
```

### Approach:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: N columns
- **What to print**: Each row starts with N-row+1 and then increments until reaching N

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    int row = 1;
    while (row <= N) {
        int col = 1;
        int value = N - row + 1; // Starting value in each row
        
        while (col <= N) {
            System.out.print(value);
            if (value < N) {
                value = value + 1;
            }
            col = col + 1;
        }
        
        row = row + 1;
        System.out.println();
    }
}
```

### Pattern I - Zero Filled Triangle
```
1
11
202
3003
```

### Approach:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: For row i, i columns
- **What to print**: First and last columns print row-1, middle columns print 0

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    int row = 1;
    while (row <= N) {
        int col = 1;
        while (col <= row) {
            // First and last column of each row print row-1
            if (col == 1 || col == row) {
                System.out.print(row-1);
            } else {
                // Other columns print 0
                System.out.print("0");
            }
            col = col + 1;
        }
        
        row = row + 1;
        System.out.println();
    }
}
```

### Pattern J - Increasing Character Triangle
```
A
BB
CCC
DDDD
```

### Approach:
- **Number of Rows**: N rows (4 in the example)
- **Number of Columns**: For row i, i columns
- **What to print**: All columns in row i print the character corresponding to i+'A'-1

### Java Implementation:
```java
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int N = s.nextInt(); // Take user input, N = Number of Rows
    
    int row = 1;
    while (row <= N) {
        int col = 1;
        while (col <= row) {
            // Convert row number to corresponding character (A=1, B=2, etc.)
            System.out.print((char)(64 + row));
            col = col + 1;
        }
        
        row = row + 1;
        System.out.println();
    }
}
```

These solutions cover all the practice problems mentioned in the document. Each solution follows the approach of analyzing the pattern in terms of rows, columns, and what to print, then implementing the appropriate loops to generate the pattern.


# Advanced Java Design Patterns

This guide covers advanced design patterns in Java with concise descriptions, real code examples, and expected outputs.

---

## 🧱 Creational Patterns

Creational patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.

### 1. Singleton Pattern (Thread-safe)

**Description:** Ensures a class has only one instance and provides a global point of access to it. This thread-safe implementation uses double-checked locking.

```java
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();
        
        System.out.println("Are both instances the same? " + (instance1 == instance2));
    }
}
```

**Output:**
```
Are both instances the same? true
```

---

### 2. Builder Pattern

**Description:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

```java
public class User {
    private String name;
    private int age;

    public static class Builder {
        private String name;
        private int age;

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setAge(int age) {
            this.age = age;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }

    private User(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
    }
    
    @Override
    public String toString() {
        return "User{name='" + name + "', age=" + age + "}";
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        User user = new User.Builder()
                .setName("John Doe")
                .setAge(30)
                .build();
                
        System.out.println(user);
    }
}
```

**Output:**
```
User{name='John Doe', age=30}
```

---

### 3. Prototype Pattern

**Description:** Creates new objects by copying an existing object, rather than creating a new instance from scratch.

```java
public class Person implements Cloneable {
    public String name;

    public Person(String name) {
        this.name = name;
    }

    public Person clone() throws CloneNotSupportedException {
        return (Person) super.clone();
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "'}";
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
        Person original = new Person("Original");
        Person clone = original.clone();
        clone.name = "Clone";
        
        System.out.println("Original: " + original);
        System.out.println("Clone: " + clone);
    }
}
```

**Output:**
```
Original: Person{name='Original'}
Clone: Person{name='Clone'}
```

---

## 🏗 Structural Patterns

Structural patterns focus on how classes and objects are composed to form larger structures.

### 4. Adapter Pattern

**Description:** Allows incompatible interfaces to work together by creating a bridge between them.

```java
interface MediaPlayer {
    void play(String audioType, String fileName);
}

class AudioPlayer implements MediaPlayer {
    public void play(String audioType, String fileName) {
        if(audioType.equalsIgnoreCase("mp3")){
            System.out.println("Playing mp3: " + fileName);
        } else {
            new MediaAdapter(audioType).play(audioType, fileName);
        }
    }
}

class MediaAdapter implements MediaPlayer {
    AdvancedMediaPlayer player;

    public MediaAdapter(String audioType){
        if(audioType.equalsIgnoreCase("vlc")){
            player = new VlcPlayer();
        }
    }

    public void play(String audioType, String fileName) {
        if(audioType.equalsIgnoreCase("vlc")){
            player.playVlc(fileName);
        }
    }
}

interface AdvancedMediaPlayer {
    void playVlc(String fileName);
}

class VlcPlayer implements AdvancedMediaPlayer {
    public void playVlc(String fileName) {
        System.out.println("Playing vlc file: " + fileName);
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        AudioPlayer audioPlayer = new AudioPlayer();
        
        audioPlayer.play("mp3", "song.mp3");
        audioPlayer.play("vlc", "movie.vlc");
    }
}
```

**Output:**
```
Playing mp3: song.mp3
Playing vlc file: movie.vlc
```

---

### 5. Decorator Pattern

**Description:** Attaches additional responsibilities to an object dynamically without modifying its structure.

```java
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Shape: Circle");
    }
}

class RedShapeDecorator implements Shape {
    protected Shape decoratedShape;

    public RedShapeDecorator(Shape shape) {
        this.decoratedShape = shape;
    }

    public void draw() {
        decoratedShape.draw();
        System.out.println("Color: Red");
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle();
        Shape redCircle = new RedShapeDecorator(new Circle());
        
        System.out.println("Circle with normal border:");
        circle.draw();
        
        System.out.println("\nCircle with red border:");
        redCircle.draw();
    }
}
```

**Output:**
```
Circle with normal border:
Shape: Circle

Circle with red border:
Shape: Circle
Color: Red
```

---

### 6. Facade Pattern

**Description:** Provides a unified interface to a set of interfaces in a subsystem, making the subsystem easier to use.

```java
class CPU {
    void start() { System.out.println("CPU Started"); }
}

class Memory {
    void load() { System.out.println("Memory Loaded"); }
}

class Computer {
    private CPU cpu;
    private Memory memory;

    public Computer() {
        cpu = new CPU();
        memory = new Memory();
    }

    public void start() {
        cpu.start();
        memory.load();
        System.out.println("Computer ready to use");
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.start();
    }
}
```

**Output:**
```
CPU Started
Memory Loaded
Computer ready to use
```

---

### 7. Composite Pattern

**Description:** Composes objects into tree structures to represent part-whole hierarchies, letting clients treat individual objects and compositions uniformly.

```java
import java.util.*;

interface Component {
    void showDetails();
}

class Leaf implements Component {
    private String name;
    public Leaf(String name) {
        this.name = name;
    }
    public void showDetails() {
        System.out.println(name);
    }
}

class Composite implements Component {
    private List<Component> children = new ArrayList<>();
    private String name;
    
    public Composite(String name) {
        this.name = name;
    }

    public void add(Component c) {
        children.add(c);
    }

    public void showDetails() {
        System.out.println(name + ":");
        for (Component c : children) {
            c.showDetails();
        }
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Leaf file1 = new Leaf("File 1");
        Leaf file2 = new Leaf("File 2");
        Leaf file3 = new Leaf("File 3");
        
        Composite folder1 = new Composite("Folder 1");
        folder1.add(file1);
        
        Composite folder2 = new Composite("Folder 2");
        folder2.add(file2);
        folder2.add(file3);
        
        Composite root = new Composite("Root");
        root.add(folder1);
        root.add(folder2);
        
        root.showDetails();
    }
}
```

**Output:**
```
Root:
Folder 1:
File 1
Folder 2:
File 2
File 3
```

---

## 🤝 Behavioral Patterns

Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects.

### 8. Strategy Pattern

**Description:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable.

```java
interface Strategy {
    int execute(int a, int b);
}

class Add implements Strategy {
    public int execute(int a, int b) { return a + b; }
}

class Subtract implements Strategy {
    public int execute(int a, int b) { return a - b; }
}

class Context {
    private Strategy strategy;
    public Context(Strategy strategy) { this.strategy = strategy; }
    public int executeStrategy(int a, int b) {
        return strategy.execute(a, b);
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Context context = new Context(new Add());
        System.out.println("10 + 5 = " + context.executeStrategy(10, 5));
        
        context = new Context(new Subtract());
        System.out.println("10 - 5 = " + context.executeStrategy(10, 5));
    }
}
```

**Output:**
```
10 + 5 = 15
10 - 5 = 5
```

---

### 9. Observer Pattern

**Description:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

```java
import java.util.*;

interface Observer {
    void update(String msg);
}

class Subject {
    private List<Observer> observers = new ArrayList<>();
    private String message;

    public void addObserver(Observer o) {
        observers.add(o);
    }

    public void setMessage(String message) {
        this.message = message;
        notifyAll(message);
    }

    public void notifyAll(String msg) {
        for (Observer o : observers) {
            o.update(msg);
        }
    }
}

class User implements Observer {
    private String name;
    public User(String name) { this.name = name; }

    public void update(String msg) {
        System.out.println(name + " received: " + msg);
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Subject subject = new Subject();
        
        User user1 = new User("User 1");
        User user2 = new User("User 2");
        
        subject.addObserver(user1);
        subject.addObserver(user2);
        
        subject.setMessage("First Message");
        subject.setMessage("Second Message");
    }
}
```

**Output:**
```
User 1 received: First Message
User 2 received: First Message
User 1 received: Second Message
User 2 received: Second Message
```

---

### 10. Command Pattern

**Description:** Encapsulates a request as an object, allowing parameterization of clients with different requests and queue or log requests.

```java
interface Command {
    void execute();
}

class Light {
    public void turnOn() {
        System.out.println("Light is ON");
    }
    
    public void turnOff() {
        System.out.println("Light is OFF");
    }
}

class LightOnCommand implements Command {
    private Light light;
    public LightOnCommand(Light light) {
        this.light = light;
    }
    public void execute() {
        light.turnOn();
    }
}

class LightOffCommand implements Command {
    private Light light;
    public LightOffCommand(Light light) {
        this.light = light;
    }
    public void execute() {
        light.turnOff();
    }
}

class RemoteControl {
    private Command command;
    
    public void setCommand(Command command) {
        this.command = command;
    }
    
    public void pressButton() {
        command.execute();
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Light light = new Light();
        Command lightsOn = new LightOnCommand(light);
        Command lightsOff = new LightOffCommand(light);
        
        RemoteControl remote = new RemoteControl();
        
        remote.setCommand(lightsOn);
        remote.pressButton();
        
        remote.setCommand(lightsOff);
        remote.pressButton();
    }
}
```

**Output:**
```
Light is ON
Light is OFF
```

---

### 11. State Pattern

**Description:** Allows an object to alter its behavior when its internal state changes, appearing to change its class.

```java
interface State {
    void doAction(Context context);
}

class StartState implements State {
    public void doAction(Context context) {
        System.out.println("Player is in start state");
        context.setState(this);
    }
    
    public String toString() {
        return "Start State";
    }
}

class StopState implements State {
    public void doAction(Context context) {
        System.out.println("Player is in stop state");
        context.setState(this);
    }
    
    public String toString() {
        return "Stop State";
    }
}

class Context {
    private State state;
    
    public Context() {
        this.state = null;
    }
    
    public void setState(State state) {
        this.state = state;
    }
    
    public State getState() {
        return state;
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Context context = new Context();
        
        StartState startState = new StartState();
        startState.doAction(context);
        System.out.println("Current state: " + context.getState());
        
        StopState stopState = new StopState();
        stopState.doAction(context);
        System.out.println("Current state: " + context.getState());
    }
}
```

**Output:**
```
Player is in start state
Current state: Start State
Player is in stop state
Current state: Stop State
```

---

### 12. Template Method Pattern

**Description:** Defines the skeleton of an algorithm in a method, deferring some steps to subclasses, allowing subclasses to redefine certain steps without changing the algorithm's structure.

```java
abstract class Game {
    abstract void start();
    abstract void end();

    public void play() {
        start();
        System.out.println("Playing...");
        end();
    }
}

class Football extends Game {
    void start() { System.out.println("Football Started"); }
    void end() { System.out.println("Football Ended"); }
}

class Basketball extends Game {
    void start() { System.out.println("Basketball Started"); }
    void end() { System.out.println("Basketball Ended"); }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Game football = new Football();
        Game basketball = new Basketball();
        
        System.out.println("Football game:");
        football.play();
        
        System.out.println("\nBasketball game:");
        basketball.play();
    }
}
```

**Output:**
```
Football game:
Football Started
Playing...
Football Ended

Basketball game:
Basketball Started
Playing...
Basketball Ended
```

---

## 📦 Dependency and Service Patterns

These patterns focus on component relationships and service discovery/management.

### 13. Dependency Injection (Constructor-based)

**Description:** Provides objects that an object needs (its dependencies) instead of having it construct them itself.

```java
class Engine {
    public void start() {
        System.out.println("Engine started");
    }
}

class Car {
    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving");
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Engine engine = new Engine();
        Car car = new Car(engine);
        car.drive();
    }
}
```

**Output:**
```
Engine started
Car is moving
```

---

### 14. Service Locator Pattern

**Description:** Used to locate various services using a service locator, centralizing service instantiation and lifecycle management.

```java
import java.util.HashMap;

interface Service {
    String getName();
    void execute();
}

class Service1 implements Service {
    public String getName() { return "Service1"; }
    public void execute() { System.out.println("Executing Service1"); }
}

class Service2 implements Service {
    public String getName() { return "Service2"; }
    public void execute() { System.out.println("Executing Service2"); }
}

class ServiceLocator {
    private static HashMap<String, Service> cache = new HashMap<>();

    public static Service getService(String name) {
        Service service = cache.get(name);
        if (service == null) {
            if(name.equals("Service1")) {
                service = new Service1();
            } else if(name.equals("Service2")) {
                service = new Service2();
            }
            cache.put(name, service);
        }
        return service;
    }
}
```

**Sample Usage and Output:**
```java
public class Main {
    public static void main(String[] args) {
        Service service1 = ServiceLocator.getService("Service1");
        service1.execute();
        
        // Getting the same instance from cache
        Service cachedService = ServiceLocator.getService("Service1");
        cachedService.execute();
        
        Service service2 = ServiceLocator.getService("Service2");
        service2.execute();
    }
}
```

**Output:**
```
Executing Service1
Executing Service1
Executing Service2
```

---
