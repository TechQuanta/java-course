# 🔍 Regular Expressions in Java

Regular Expressions (Regex) define a search pattern for strings. The `java.util.regex` package provides classes for pattern matching with regular expressions.

There are three main classes in this package:
1. **`Pattern`**: A compiled representation of a regular expression.
2. **`Matcher`**: An engine that performs match operations on a character sequence by interpreting a `Pattern`.
3. **`PatternSyntaxException`**: An unchecked exception indicating a syntax error in a regular expression pattern.

---

## 1. Basic Regex Example

To use regular expressions, you generally compile a pattern and then use it to create a matcher.

<div class="code-container">
  <pre><code class="language-java">
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String[] args) {
        // 1. Compile the regex pattern (e.g., search for "java" case-insensitively)
        Pattern pattern = Pattern.compile("java", Pattern.CASE_INSENSITIVE);
        
        // 2. Create a matcher for a specific string
        Matcher matcher = pattern.matcher("I love learning Java!");
        
        // 3. Perform the match
        boolean matchFound = matcher.find();
        
        if(matchFound) {
            System.out.println("Match found!");
        } else {
            System.out.println("Match not found");
        }
    }
}
  </code></pre>
</div>

---

## 2. Common Regex Metacharacters

| Character | Description |
|-----------|-------------|
| `.` | Matches any single character (except newline) |
| `^` | Matches the beginning of a line |
| `$` | Matches the end of a line |
| `[abc]` | Matches a, b, or c |
| `[^abc]` | Matches any character EXCEPT a, b, or c |
| `[0-9]` | Matches any digit from 0 to 9 |
| `[a-zA-Z]`| Matches any alphabetic character |

---

## 3. Quantifiers

Quantifiers define how often an element can occur.

| Quantifier | Description |
|------------|-------------|
| `*` | Zero or more times |
| `+` | One or more times |
| `?` | Zero or one time |
| `{n}` | Exactly n times |
| `{n,m}` | Between n and m times |

---

## 4. Extracting Data with Regex

You can use capture groups (parentheses) to extract specific parts of a matched string.

<div class="code-container">
  <pre><code class="language-java">
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractDemo {
    public static void main(String[] args) {
        String text = "Contact me at john.doe@example.com or support@company.com";
        
        // Regex to find email addresses
        Pattern p = Pattern.compile("([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6})");
        Matcher m = p.matcher(text);
        
        while (m.find()) {
            System.out.println("Found Email: " + m.group(1));
        }
    }
}
  </code></pre>
</div>
