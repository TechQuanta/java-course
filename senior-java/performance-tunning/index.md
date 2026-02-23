# Performance Tuning in Java

> Java performance tuning — from JVM internals and memory management to profiling, concurrency, database optimization, and production best practices.

---

## Table of Contents

### PART 1 — FOUNDATIONS
1. [Why Performance Tuning Matters](#1-why-performance-tuning-matters)
2. [Performance Tuning Methodology](#2-performance-tuning-methodology)
3. [Key Performance Metrics](#3-key-performance-metrics)

### PART 2 — JVM INTERNALS
4. [JVM Architecture Overview](#4-jvm-architecture-overview)
5. [JVM Memory Structure](#5-jvm-memory-structure)
6. [Class Loading & JIT Compilation](#6-class-loading--jit-compilation)

### PART 3 — GARBAGE COLLECTION
7. [Garbage Collection Basics](#7-garbage-collection-basics)
8. [GC Algorithms](#8-gc-algorithms)
9. [GC Tuning & Flags](#9-gc-tuning--flags)
10. [GC Logging & Analysis](#10-gc-logging--analysis)

### PART 4 — JVM TUNING FLAGS
11. [Heap & Memory Flags](#11-heap--memory-flags)
12. [GC Selection Flags](#12-gc-selection-flags)
13. [JIT & Compilation Flags](#13-jit--compilation-flags)
14. [Monitoring & Diagnostic Flags](#14-monitoring--diagnostic-flags)

### PART 5 — PROFILING & TOOLS
15. [Profiling Tools Overview](#15-profiling-tools-overview)
16. [JDK Built-in Tools](#16-jdk-built-in-tools)
17. [Heap Dump Analysis](#17-heap-dump-analysis)
18. [Thread Dump Analysis](#18-thread-dump-analysis)

### PART 6 — CODE-LEVEL OPTIMIZATIONS
19. [String Optimizations](#19-string-optimizations)
20. [Collections & Data Structures](#20-collections--data-structures)
21. [Java Streams & Lambdas](#21-java-streams--lambdas)
22. [Object Creation & Memory](#22-object-creation--memory)
23. [I/O Optimizations](#23-io-optimizations)
24. [Reflection & Generics](#24-reflection--generics)

### PART 7 — CONCURRENCY PERFORMANCE
25. [Threading Best Practices](#25-threading-best-practices)
26. [Thread Pools & Executors](#26-thread-pools--executors)
27. [Concurrency Utilities](#27-concurrency-utilities)
28. [Avoiding Common Concurrency Bottlenecks](#28-avoiding-common-concurrency-bottlenecks)

### PART 8 — DATABASE & CACHING
29. [JDBC & Connection Pooling](#29-jdbc--connection-pooling)
30. [JPA & Hibernate Optimization](#30-jpa--hibernate-optimization)
31. [Caching Strategies](#31-caching-strategies)

### PART 9 — SPRING BOOT PERFORMANCE
32. [Spring Boot Startup Optimization](#32-spring-boot-startup-optimization)
33. [Spring Web Performance](#33-spring-web-performance)
34. [Spring Data Performance](#34-spring-data-performance)

### PART 10 — BENCHMARKING & BEST PRACTICES
35. [Benchmarking with JMH](#35-benchmarking-with-jmh)
36. [Performance Anti-Patterns](#36-performance-anti-patterns)
37. [Production Performance Checklist](#37-production-performance-checklist)
38. [Performance Tuning Cheat Sheet](#38-performance-tuning-cheat-sheet)

---

---

# PART 1 — FOUNDATIONS

---

## 1. Why Performance Tuning Matters

Performance tuning is the process of making a system faster, more efficient, and more scalable. Poor performance costs money, users, and reputation.

### Real-World Impact

```
100ms delay  → Amazon loses 1% of sales
1s delay     → Google gets 11% fewer searches
53%          → Mobile users abandon a site that takes >3s to load
```

### Performance Goals

```
Throughput       → How many requests can be handled per second
Latency          → How fast does one request get a response
Scalability      → How well does performance hold under increasing load
Resource Usage   → CPU, Memory, Network, Disk consumption
Availability     → System uptime and reliability
```

### The Golden Rule

```
"Measure first, optimize second."
Never guess where the bottleneck is.
Always profile before making changes.
Premature optimization is the root of all evil. — Donald Knuth
```

---

## 2. Performance Tuning Methodology

Follow a structured approach — never tune randomly.

### The Performance Tuning Cycle

```
1. DEFINE     → Set clear performance goals (SLAs, SLOs)
      |
      v
2. MEASURE    → Establish baseline with real or realistic load
      |
      v
3. PROFILE    → Find the actual bottleneck (CPU, memory, I/O, DB)
      |
      v
4. ANALYZE    → Understand WHY the bottleneck exists
      |
      v
5. OPTIMIZE   → Make ONE change at a time
      |
      v
6. VERIFY     → Measure again — did it improve?
      |
      v
7. REPEAT     → Until goals are met
```

### Where Bottlenecks Usually Live

```
~60%  → Database (slow queries, missing indexes, N+1 problems)
~20%  → Network (too many calls, large payloads, no caching)
~10%  → Application code (inefficient algorithms, bad data structures)
~5%   → JVM / GC (excessive GC pauses, memory leaks)
~5%   → I/O (blocking reads/writes, missing buffering)
```

### Performance Requirements (SLA Examples)

```
API Response Time:
  P50 (median)   < 100ms
  P95            < 500ms
  P99            < 1000ms
  P99.9          < 2000ms

Throughput:
  Minimum: 500 requests/second
  Peak:    2000 requests/second

Availability:
  99.9% uptime (8.7 hours downtime/year)
  99.99% uptime (52 minutes downtime/year)
```

---

## 3. Key Performance Metrics

### Application Metrics

| Metric | Description | Target |
|---|---|---|
| **Response Time** | Time to complete one request | < 200ms (p95) |
| **Throughput** | Requests per second (RPS) | Define based on load |
| **Error Rate** | % of failed requests | < 0.1% |
| **Latency Percentiles** | p50, p95, p99, p99.9 | Define per SLA |
| **Apdex Score** | User satisfaction score (0–1) | > 0.9 |

### JVM Metrics

| Metric | Description | Alert Threshold |
|---|---|---|
| **Heap Usage** | Used heap / max heap | > 80% |
| **GC Pause Time** | Time spent in GC stop-the-world | > 200ms |
| **GC Frequency** | How often GC runs | Too frequent = memory pressure |
| **GC Throughput** | % time NOT in GC | < 95% is a concern |
| **Thread Count** | Active threads | Depends on app |
| **CPU Usage** | Application CPU % | > 80% sustained |
| **Off-Heap Memory** | Direct buffers, Metaspace | Monitor for leaks |

### Monitoring Tools

```
JVM Metrics:    JConsole, VisualVM, Java Mission Control (JMC)
APM:            New Relic, Dynatrace, Datadog, AppDynamics
Open Source:    Prometheus + Grafana + Micrometer
Logs:           ELK Stack (Elasticsearch, Logstash, Kibana)
Profilers:      async-profiler, JProfiler, YourKit
```

---

---

# PART 2 — JVM INTERNALS

---

## 4. JVM Architecture Overview

```
+────────────────────────────────────────────────────────────────+
│                         JVM                                     │
│                                                                  │
│  ┌─────────────────┐    ┌──────────────────────────────────┐   │
│  │  Class Loader   │    │           Memory Areas           │   │
│  │  Subsystem      │    │                                  │   │
│  │  ─────────────  │    │  ┌──────────┐  ┌────────────┐   │   │
│  │  Bootstrap CL   │    │  │   Heap   │  │  Metaspace │   │   │
│  │  Extension CL   │    │  │  (Young  │  │  (Classes) │   │   │
│  │  Application CL │    │  │   + Old) │  │            │   │   │
│  └─────────────────┘    │  └──────────┘  └────────────┘   │   │
│                          │  ┌──────────┐  ┌────────────┐   │   │
│  ┌─────────────────┐    │  │  Stack   │  │   Native   │   │   │
│  │  Execution      │    │  │  (Frames)│  │   Method   │   │   │
│  │  Engine         │    │  └──────────┘  │   Stack    │   │   │
│  │  ─────────────  │    │  ┌──────────┐  └────────────┘   │   │
│  │  Interpreter    │    │  │    PC    │  ┌────────────┐   │   │
│  │  JIT Compiler   │    │  │ Register │  │   Code     │   │   │
│  │  GC             │    │  └──────────┘  │   Cache    │   │   │
│  └─────────────────┘    │               └────────────┘   │   │
│                          └──────────────────────────────────┘   │
+────────────────────────────────────────────────────────────────+
```

### Key Components

| Component | Description |
|---|---|
| **Class Loader** | Loads .class files into JVM |
| **Bytecode Verifier** | Ensures code is safe to execute |
| **Interpreter** | Executes bytecode line by line |
| **JIT Compiler** | Compiles hot bytecode to native machine code |
| **Garbage Collector** | Automatically manages memory |
| **Heap** | Where objects live |
| **Stack** | Per-thread call frames |
| **Metaspace** | Class metadata (replaces PermGen in Java 8+) |

---

## 5. JVM Memory Structure

### Heap Memory Layout

```
+─────────────────────────────────────────────────────────────────+
│                          HEAP                                    │
│                                                                  │
│  ┌─────────────────────────────┐  ┌──────────────────────────┐ │
│  │         Young Generation    │  │      Old Generation      │ │
│  │                             │  │      (Tenured Space)     │ │
│  │  ┌────────┐  ┌──────────┐  │  │                          │ │
│  │  │  Eden  │  │Survivor 0│  │  │  Long-lived objects      │ │
│  │  │ Space  │  │    S0    │  │  │  Promoted from Young Gen │ │
│  │  │        │  ├──────────┤  │  │                          │ │
│  │  │ New    │  │Survivor 1│  │  │  Major GC (Full GC)      │ │
│  │  │ objects│  │    S1    │  │  │  runs here               │ │
│  │  └────────┘  └──────────┘  │  │                          │ │
│  │                             │  │                          │ │
│  │  Minor GC runs here         │  │                          │ │
│  └─────────────────────────────┘  └──────────────────────────┘ │
│                                                                  │
+─────────────────────────────────────────────────────────────────+

+─────────────────────────────────────────────────────────────────+
│                       NON-HEAP MEMORY                           │
│                                                                  │
│  ┌──────────────────┐  ┌───────────────┐  ┌──────────────────┐ │
│  │    Metaspace      │  │  Code Cache   │  │  Direct Buffers  │ │
│  │                   │  │               │  │  (NIO off-heap)  │ │
│  │  Class metadata   │  │  JIT-compiled │  │                  │ │
│  │  Method info      │  │  native code  │  │  Not managed     │ │
│  │  No fixed limit   │  │               │  │  by GC           │ │
│  └──────────────────┘  └───────────────┘  └──────────────────┘ │
+─────────────────────────────────────────────────────────────────+
```

### Object Lifecycle in Memory

```
1. New object created → allocated in Eden Space
2. Eden fills up → Minor GC triggered
3. Surviving objects move to Survivor Space (S0 or S1)
4. Objects surviving multiple Minor GCs → promoted to Old Gen
5. Old Gen fills up → Major GC (Full GC) triggered
6. Full GC unable to free enough space → OutOfMemoryError
```

### Memory Areas and Flags

```bash
# Heap
-Xms512m                    # Initial heap size
-Xmx2g                      # Maximum heap size
-XX:NewRatio=3              # Old:Young ratio (3:1 = 75% old, 25% young)
-XX:NewSize=512m            # Initial Young Gen size
-XX:MaxNewSize=512m         # Max Young Gen size
-XX:SurvivorRatio=8         # Eden:Survivor ratio (8:1:1)

# Metaspace
-XX:MetaspaceSize=256m      # Initial Metaspace size
-XX:MaxMetaspaceSize=512m   # Max Metaspace (prevent unlimited growth)

# Stack
-Xss512k                    # Thread stack size (default 512k-1m)

# Direct Memory (NIO)
-XX:MaxDirectMemorySize=1g  # Limit off-heap direct memory
```

---

## 6. Class Loading & JIT Compilation

### Class Loading Phases

```
Loading → Linking → Initialization

Loading:
  Read .class file from disk/jar into memory

Linking:
  Verification  → Ensure bytecode is valid and safe
  Preparation   → Allocate memory for static fields
  Resolution    → Replace symbolic references with direct references

Initialization:
  Execute static initializers and static blocks
```

### JIT Compilation

The JIT (Just-In-Time) compiler identifies "hot" code (frequently executed methods) and compiles them to native machine code for much faster execution.

```
Bytecode execution:
  1st run:  Interpreted (slow)
  ...runs many times...
  Hot!  → JIT compiles to native code
  Next: Native execution (10-100x faster)

Compilation Tiers (Tiered Compilation):
  Tier 0: Interpreter
  Tier 1: Simple C1 compilation (client compiler, fast compile)
  Tier 2: Limited C1 compilation
  Tier 3: Full C1 compilation with profiling
  Tier 4: C2 compilation (server compiler, optimized, slower compile)
```

### JIT Optimizations

```
Inlining          → Replace method call with method body (eliminates call overhead)
Loop Unrolling    → Expand small loops to reduce iteration overhead
Escape Analysis   → Allocate objects on stack instead of heap if they don't escape
Dead Code Elim    → Remove code that can never execute
Constant Folding  → Compute constant expressions at compile time
Vectorization     → Use SIMD CPU instructions for array operations
```

### JIT Flags

```bash
-server                          # Use C2 (server) JIT compiler
-XX:+TieredCompilation           # Use all tiers (default Java 8+)
-XX:CompileThreshold=10000       # Methods compiled after N invocations
-XX:+PrintCompilation            # Log JIT compilation events
-XX:+PrintInlining               # Log inlining decisions
-XX:+EliminateAllocations        # Enable scalar replacement (escape analysis)
-XX:+DoEscapeAnalysis            # Enable escape analysis (default on)
```

---

---

# PART 3 — GARBAGE COLLECTION

---

## 7. Garbage Collection Basics

Garbage Collection (GC) automatically reclaims memory occupied by objects that are no longer reachable.

### How GC Determines Reachability

```
GC Roots:
  - Local variables in active threads
  - Static fields
  - JNI references

An object is LIVE if reachable from any GC root.
An object is GARBAGE if not reachable from any GC root.

Example:
  User user = new User();   // user is reachable → LIVE
  user = null;              // no references left → GARBAGE → eligible for GC
```

### GC Pause Types

```
Minor GC (Young GC):
  - Collects Eden + Survivor spaces
  - Fast (milliseconds)
  - Happens frequently
  - Stop-The-World: briefly pauses all application threads

Major GC (Old GC):
  - Collects Old Generation
  - Slower (100ms - seconds)
  - Happens less frequently

Full GC:
  - Collects entire heap (Young + Old + Metaspace)
  - Slowest — can take seconds
  - MUST be minimized in production
```

### Stop-The-World (STW) Events

```
During STW:
  All application threads are FROZEN
  GC does its work
  All threads RESUME

Impact:
  500ms Full GC = 500ms where your app is completely frozen
  This causes latency spikes and timeout errors
```

---

## 8. GC Algorithms

### Serial GC

```
Single-threaded GC — one thread does everything.
Best for: Small apps, single-core machines, embedded systems.

-XX:+UseSerialGC
```

### Parallel GC (Throughput Collector)

```
Uses multiple threads for Minor and Major GC.
Focus: Maximum throughput (minimize total GC time).
Trade-off: Can have long STW pauses.
Best for: Batch jobs, CPU-intensive background processing.

-XX:+UseParallelGC
-XX:ParallelGCThreads=4    # Number of GC threads
```

### G1 GC (Garbage First) — Default since Java 9

```
Divides heap into equal-sized regions (~2048 regions).
Predictable pause times — tries to meet pause time goal.
Best for: Applications needing low latency + high throughput.
Best for: Heaps 4GB - 32GB.

+─────────────────────────────────────────────────────+
│               Heap (G1 Regions)                      │
│  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐ │
│  │ E │ E │ S │ O │ E │ O │ H │ E │ S │ O │ E │ O │ │
│  └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘ │
│  E=Eden, S=Survivor, O=Old, H=Humongous              │
+─────────────────────────────────────────────────────+

-XX:+UseG1GC
-XX:MaxGCPauseMillis=200       # Target max pause time (soft goal)
-XX:G1HeapRegionSize=4m        # Region size (1MB-32MB, power of 2)
-XX:G1NewSizePercent=5         # Min Young Gen % of heap
-XX:G1MaxNewSizePercent=60     # Max Young Gen % of heap
-XX:G1ReservePercent=10        # Reserve % to avoid evacuation failure
-XX:ConcGCThreads=2            # Concurrent marking threads
-XX:InitiatingHeapOccupancyPercent=45  # Start concurrent marking at 45% heap use
```

### ZGC (Z Garbage Collector) — Java 11+

```
Concurrent, low-latency GC.
Sub-millisecond pause times (< 1ms) regardless of heap size.
Supports heaps from MB to TB.
Best for: Applications with strict latency requirements.

-XX:+UseZGC
-XX:ZUncommitDelay=300         # Return unused memory to OS after 300s
-XX:SoftMaxHeapSize=2g         # Soft heap limit (ZGC can exceed if needed)
```

### Shenandoah GC — Java 12+

```
Concurrent evacuation — moves objects while app runs (no STW for evacuation).
Very low pause times.
Higher CPU overhead than G1.

-XX:+UseShenandoahGC
-XX:ShenandoahGCHeuristics=adaptive   # Adaptive, static, compact, aggressive
```

### GC Comparison Table

| GC | Java Version | Pause Time | Throughput | Best Heap Size | Best For |
|---|---|---|---|---|---|
| Serial | All | High | Low | Small (< 1GB) | Single CPU, embedded |
| Parallel | All | Medium-High | Highest | Any | Batch processing |
| G1 | 9+ (default) | Low-Medium | High | 4GB–32GB | General purpose |
| ZGC | 11+ | Sub-ms | Medium | Any (up to TB) | Ultra-low latency |
| Shenandoah | 12+ | Sub-ms | Medium | Any | Low latency |

---

## 9. GC Tuning & Flags

### General GC Tuning Strategy

```
Step 1: Choose the right GC algorithm for your use case
Step 2: Set appropriate heap size (-Xms, -Xmx)
Step 3: Tune Young/Old generation ratio
Step 4: Set pause time goals
Step 5: Monitor and adjust
```

### Heap Sizing Rules

```bash
# Rule: Set -Xms = -Xmx to avoid heap resizing overhead
-Xms4g -Xmx4g

# Rule: Leave memory for OS and non-heap (Metaspace, Code Cache, threads)
# If machine has 8GB RAM:
#   OS:          1GB
#   Non-heap:    1GB  (Metaspace, Code Cache, Direct Memory)
#   Heap:        6GB  → -Xmx6g

# Rule: Young Gen should be 1/4 to 1/3 of total heap
# 6GB heap → Young Gen ~ 2GB
-XX:NewSize=2g -XX:MaxNewSize=2g
```

### G1GC Tuning

```bash
# Start with these settings and measure:
-XX:+UseG1GC
-Xms4g -Xmx4g
-XX:MaxGCPauseMillis=200       # Tune based on your SLA
-XX:G1HeapRegionSize=16m       # Larger regions = fewer Humongous objects
-XX:G1ReservePercent=15        # Increase if you see evacuation failures
-XX:InitiatingHeapOccupancyPercent=35  # Lower if Full GCs happen too often

# If you see too many Full GCs:
#   1. Increase heap size
#   2. Lower IHOP threshold
#   3. Increase G1ReservePercent

# If pause times are too long:
#   1. Lower MaxGCPauseMillis (but GC will run more often)
#   2. Increase Young Gen size
#   3. Reduce G1MixedGCCountTarget
```

### ZGC Tuning

```bash
-XX:+UseZGC
-Xms8g -Xmx8g
-XX:ConcGCThreads=4            # More threads = faster GC but more CPU
-XX:ZAllocationSpikeTolerance=5 # Tolerance for allocation spikes
```

---

## 10. GC Logging & Analysis

### Enable GC Logging (Java 11+)

```bash
# Basic GC logging
-Xlog:gc

# Detailed GC logging to file
-Xlog:gc*:file=/var/log/app/gc.log:time,uptime,level,tags:filecount=5,filesize=50m

# Human-readable format
-Xlog:gc+heap=debug:file=/var/log/app/gc.log:time,uptime:filecount=5,filesize=20m
```

### GC Log Sample Output

```
[2024-01-15T10:30:00.123+0000][0.456s][info][gc] GC(42) Pause Young (Normal) (G1 Evacuation Pause) 512M->256M(2048M) 45.678ms
[2024-01-15T10:30:10.456+0000][10.789s][info][gc] GC(43) Pause Full (System.gc()) 1024M->512M(2048M) 1234.567ms  ← ALERT!

Key fields:
  512M->256M(2048M)  = Before→After(Total Heap)
  45.678ms           = GC Pause Duration
```

### GC Analysis Tools

```
GCEasy        → https://gceasy.io (upload GC log, get analysis)
GCViewer      → Open source GC log visualizer
Java Mission Control (JMC) → Oracle's JVM analysis tool
```

### Common GC Problems and Solutions

| Problem | Symptom | Solution |
|---|---|---|
| Frequent Minor GC | High GC frequency, short pauses | Increase Eden size (`-XX:NewSize`) |
| Long Full GC | Long pauses (>1s), memory spikes | Increase heap, switch to G1/ZGC |
| Memory Leak | Heap grows indefinitely | Fix code, take heap dump, analyze |
| Humongous Allocations (G1) | Many Full GCs | Increase `G1HeapRegionSize` |
| Metaspace OOM | `OutOfMemoryError: Metaspace` | Increase `-XX:MaxMetaspaceSize` |
| Evacuation Failure (G1) | Full GC triggered | Increase `G1ReservePercent`, heap |

---

---

# PART 4 — JVM TUNING FLAGS

---

## 11. Heap & Memory Flags

```bash
# ── Heap Size ─────────────────────────────────────────────────────
-Xms2g                          # Initial heap size (set equal to Xmx)
-Xmx4g                          # Maximum heap size
-XX:NewRatio=2                  # Old:Young = 2:1 (Old=67%, Young=33%)
-XX:NewSize=1g                  # Initial Young Gen size
-XX:MaxNewSize=1g               # Max Young Gen size
-XX:SurvivorRatio=8             # Eden:S0:S1 = 8:1:1

# ── Metaspace ──────────────────────────────────────────────────────
-XX:MetaspaceSize=128m          # Triggers first GC Metaspace expansion
-XX:MaxMetaspaceSize=512m       # Hard limit (prevent OOM)

# ── Code Cache (JIT compiled code) ────────────────────────────────
-XX:InitialCodeCacheSize=64m    # Initial code cache
-XX:ReservedCodeCacheSize=256m  # Max code cache size
-XX:+UseCodeCacheFlushing       # Allow code cache eviction

# ── Stack ──────────────────────────────────────────────────────────
-Xss256k                        # Thread stack size (reduce for many threads)

# ── Direct/Off-Heap Memory ────────────────────────────────────────
-XX:MaxDirectMemorySize=512m    # Max NIO direct buffer memory

# ── Object Tenuring ────────────────────────────────────────────────
-XX:MaxTenuringThreshold=15     # GC cycles before promotion to Old Gen
-XX:InitialTenuringThreshold=7  # Initial tenuring threshold
```

---

## 12. GC Selection Flags

```bash
# ── GC Algorithm Selection ─────────────────────────────────────────
-XX:+UseSerialGC                # Serial (single-threaded)
-XX:+UseParallelGC              # Parallel (throughput)
-XX:+UseG1GC                    # G1 (balanced, default Java 9+)
-XX:+UseZGC                     # ZGC (ultra-low latency, Java 11+)
-XX:+UseShenandoahGC            # Shenandoah (low latency, Java 12+)

# ── G1GC Flags ─────────────────────────────────────────────────────
-XX:MaxGCPauseMillis=200        # Target max pause (soft goal)
-XX:G1HeapRegionSize=16m        # Region size (1m-32m, power of 2)
-XX:G1NewSizePercent=5          # Min young gen as % of heap
-XX:G1MaxNewSizePercent=60      # Max young gen as % of heap
-XX:G1ReservePercent=10         # Reserve heap % for headroom
-XX:InitiatingHeapOccupancyPercent=45  # When to start concurrent marking
-XX:G1MixedGCCountTarget=8      # Target number of mixed GC passes
-XX:ConcGCThreads=4             # Concurrent GC threads

# ── Parallel GC Flags ──────────────────────────────────────────────
-XX:ParallelGCThreads=8         # Number of GC threads (default = CPU count)
-XX:GCTimeRatio=99              # Target: 99% app time, 1% GC time
-XX:MaxGCPauseMillis=500        # Target max pause

# ── ZGC Flags ──────────────────────────────────────────────────────
-XX:ConcGCThreads=4             # Concurrent threads
-XX:ZUncommitDelay=300          # Delay before returning memory to OS

# ── Explicit GC ────────────────────────────────────────────────────
-XX:+DisableExplicitGC          # Disable System.gc() calls
-XX:+ExplicitGCInvokesConcurrent  # Make System.gc() concurrent (G1/CMS)
```

---

## 13. JIT & Compilation Flags

```bash
# ── Compilation ─────────────────────────────────────────────────────
-XX:+TieredCompilation          # Enable tiered compilation (default)
-XX:CompileThreshold=10000      # Invocations before JIT compiles method
-XX:OnStackReplacePercentage=140  # OSR compilation threshold
-XX:+AggressiveOpts             # Enable aggressive JIT optimizations

# ── Inlining ────────────────────────────────────────────────────────
-XX:MaxInlineSize=35            # Max bytecodes for inline (default 35)
-XX:FreqInlineSize=325          # Max bytecodes for hot method inline
-XX:InlineSmallCode=1000        # Max compiled code size for inlining
-XX:MaxInlineLevel=9            # Max nesting depth for inlining

# ── Optimization ────────────────────────────────────────────────────
-XX:+DoEscapeAnalysis           # Enable escape analysis (default on)
-XX:+EliminateAllocations       # Scalar replacement via escape analysis
-XX:+OptimizeStringConcat       # Optimize String concatenation
-XX:+UseLoopPredicate           # Loop predicate optimization

# ── Debugging JIT (use in dev/staging only) ─────────────────────────
-XX:+PrintCompilation           # Log compiled methods
-XX:+PrintInlining              # Log inlining decisions
-XX:+UnlockDiagnosticVMOptions
-XX:+PrintAssembly              # Print generated native assembly
```

---

## 14. Monitoring & Diagnostic Flags

```bash
# ── GC Logging ──────────────────────────────────────────────────────
-Xlog:gc*:file=/logs/gc.log:time,uptime,level,tags:filecount=10,filesize=50m

# ── OOM Handling ────────────────────────────────────────────────────
-XX:+HeapDumpOnOutOfMemoryError          # Dump heap on OOM
-XX:HeapDumpPath=/dumps/heap-dump.hprof  # Heap dump location
-XX:OnOutOfMemoryError="kill -9 %p"      # Kill process on OOM (let orchestrator restart it)

# ── Crash Handling ──────────────────────────────────────────────────
-XX:ErrorFile=/logs/hs_err_pid%p.log     # JVM crash log location

# ── JMX Monitoring ──────────────────────────────────────────────────
-Dcom.sun.management.jmxremote
-Dcom.sun.management.jmxremote.port=9999
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false

# ── Native Memory Tracking ──────────────────────────────────────────
-XX:NativeMemoryTracking=summary         # Track native memory usage
# Then run: jcmd <pid> VM.native_memory

# ── Flight Recorder (Java 11+) ──────────────────────────────────────
-XX:+FlightRecorder
-XX:StartFlightRecording=duration=60s,filename=recording.jfr

# ── Useful Diagnostics ──────────────────────────────────────────────
-XX:+PrintFlagsFinal             # Print all JVM flags and their values
-verbose:gc                      # Verbose GC output (older style)
-XX:+PrintGCDetails              # Detailed GC info (older style)
```

---

---

# PART 5 — PROFILING & TOOLS

---

## 15. Profiling Tools Overview

| Tool | Type | Cost | Best For |
|---|---|---|---|
| **VisualVM** | Profiler/Monitor | Free | Development profiling |
| **Java Mission Control (JMC)** | Profiler/Monitor | Free (OpenJDK) | Production-safe profiling |
| **async-profiler** | Sampling Profiler | Free | Low-overhead CPU/memory profiling |
| **JProfiler** | Full Profiler | Paid | Deep profiling in development |
| **YourKit** | Full Profiler | Paid | Deep profiling in development |
| **Arthas** | Runtime Diagnoser | Free | Production live diagnostics |
| **JConsole** | JMX Monitor | Free (JDK) | Basic real-time monitoring |
| **perf** | System Profiler | Free (Linux) | CPU hotspot analysis |

### Profiling Categories

```
CPU Profiling    → Where is time being spent? (hot methods)
Memory Profiling → Where are objects being allocated? (allocations, leaks)
Thread Profiling → Thread states, locks, deadlocks, contention
I/O Profiling    → Network, disk, database wait times
```

---

## 16. JDK Built-in Tools

### jps — List Java Processes

```bash
jps -l           # List Java processes with full class names
jps -v           # Include JVM flags

# Output:
# 12345 com.example.MyApp
# 23456 org.apache.kafka.Kafka
```

### jstat — JVM Statistics

```bash
# Monitor GC every 1000ms
jstat -gcutil <pid> 1000

# Output columns:
# S0    S1    E      O      M     CCS    YGC  YGCT   FGC  FGCT    CGC  CGCT     GCT
# 0.00  42.5  72.3   65.8   95.4  92.1   847  12.345   3   2.456     0   0.000  14.801

# S0/S1 = Survivor space %
# E     = Eden %
# O     = Old Gen %
# M     = Metaspace %
# YGC   = Young GC count
# FGC   = Full GC count  ← Watch this!

# More stats
jstat -gc <pid> 1000       # Detailed GC stats
jstat -gccapacity <pid>    # Memory capacity
jstat -gcnew <pid>         # Young Gen stats
jstat -compiler <pid>      # JIT compilation stats
```

### jcmd — JVM Command Tool

```bash
# List all running Java processes
jcmd

# List available commands for a process
jcmd <pid> help

# Thread dump
jcmd <pid> Thread.print

# Heap summary
jcmd <pid> GC.heap_info

# Heap dump
jcmd <pid> GC.heap_dump /tmp/heap-dump.hprof

# Force GC
jcmd <pid> GC.run

# JVM flags
jcmd <pid> VM.flags

# System properties
jcmd <pid> VM.system_properties

# Flight Recorder
jcmd <pid> JFR.start duration=60s filename=recording.jfr
jcmd <pid> JFR.stop

# Native memory tracking
jcmd <pid> VM.native_memory summary

# Class histogram (top memory consumers)
jcmd <pid> GC.class_histogram | head -30
```

### jstack — Thread Dump

```bash
# Take thread dump
jstack <pid>
jstack -l <pid>    # Include lock information

# Save to file
jstack <pid> > /tmp/thread-dump.txt
```

### jmap — Heap Dump & Analysis

```bash
# Heap dump
jmap -dump:format=b,file=/tmp/heap.hprof <pid>

# Live objects only (trigger GC first)
jmap -dump:live,format=b,file=/tmp/heap-live.hprof <pid>

# Class histogram
jmap -histo <pid> | head -30
jmap -histo:live <pid> | head -30

# Heap summary
jmap -heap <pid>
```

### async-profiler (Low-Overhead Profiling)

```bash
# Download async-profiler
wget https://github.com/async-profiler/async-profiler/releases/download/v2.9/async-profiler-2.9-linux-x64.tar.gz
tar -xzf async-profiler-2.9-linux-x64.tar.gz

# CPU profiling for 30 seconds, output flame graph
./profiler.sh -d 30 -f /tmp/cpu-profile.html <pid>

# Allocation profiling
./profiler.sh -d 30 -e alloc -f /tmp/alloc-profile.html <pid>

# Wall-clock profiling (includes I/O wait)
./profiler.sh -d 30 -e wall -f /tmp/wall-profile.html <pid>

# Lock profiling
./profiler.sh -d 30 -e lock -f /tmp/lock-profile.html <pid>
```

---

## 17. Heap Dump Analysis

### Taking a Heap Dump

```bash
# Method 1: jcmd (preferred)
jcmd <pid> GC.heap_dump /tmp/heap.hprof

# Method 2: jmap
jmap -dump:live,format=b,file=/tmp/heap.hprof <pid>

# Method 3: Automatic on OOM
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/dumps/
```

### Analyzing with Eclipse MAT (Memory Analyzer Tool)

```
1. Download MAT from https://eclipse.dev/mat/
2. Open the .hprof file
3. Run "Leak Suspects Report"

Key reports in MAT:
  Dominator Tree    → Objects retaining most memory
  Leak Suspects     → Automatic leak detection
  Object Query Language (OQL) → Query objects like SQL
  Retained Heap     → How much memory is freed if object is GC'd
```

### Common Memory Leak Patterns

```java
// 1. Static Collections growing unbounded
public class BadCache {
    private static Map<String, Object> cache = new HashMap<>();

    public void add(String key, Object value) {
        cache.put(key, value);  // NEVER removed — memory leak!
    }
}

// Fix: Use bounded cache with eviction
private static Map<String, Object> cache =
    Collections.synchronizedMap(new LinkedHashMap<>(1000, 0.75f, true) {
        protected boolean removeEldestEntry(Map.Entry eldest) {
            return size() > 1000;  // Auto-evict when > 1000 entries
        }
    });

// 2. Listener/Callback not removed
public class EventService {
    private List<EventListener> listeners = new ArrayList<>();

    public void register(EventListener listener) {
        listeners.add(listener);
    }

    // BUG: No unregister() — listener held forever
    // Fix: Add unregister() and call it on cleanup
    public void unregister(EventListener listener) {
        listeners.remove(listener);
    }
}

// 3. ThreadLocal not cleaned up
public class RequestContext {
    private static ThreadLocal<User> currentUser = new ThreadLocal<>();

    public static void setUser(User user) {
        currentUser.set(user);
    }

    // BUG: In thread pool, thread is reused but ThreadLocal persists
    // Fix: Always clean up in finally block
    public static void clear() {
        currentUser.remove();  // MUST call this!
    }
}

// Usage:
try {
    RequestContext.setUser(user);
    // ... process request
} finally {
    RequestContext.clear();  // Always clean up!
}
```

---

## 18. Thread Dump Analysis

### Reading a Thread Dump

```
"http-nio-8080-exec-1" #25 daemon prio=5 os_prio=0 cpu=234.56ms elapsed=3600.12s
   java.lang.Thread.State: WAITING (parking)
        at sun.misc.Unsafe.park(Native Method)
        at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)
        at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await
        at java.util.concurrent.LinkedBlockingQueue.take(LinkedBlockingQueue.java:442)
        at java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1074)

Thread States:
  RUNNABLE       → Executing or ready to execute (may actually be waiting for I/O)
  BLOCKED        → Waiting to acquire a monitor lock (synchronized block)
  WAITING        → Waiting indefinitely (Object.wait(), Thread.join())
  TIMED_WAITING  → Waiting with a timeout (Thread.sleep(), Object.wait(timeout))
  TERMINATED     → Thread has finished
```

### Deadlock Detection

```
Thread Dump will show:
  "Found one Java-level deadlock:"
  Thread A is waiting for lock held by Thread B
  Thread B is waiting for lock held by Thread A

Example:
  Thread-1 holds lock 0x000000076b887e30
  Thread-1 waiting for lock 0x000000076b887e60

  Thread-2 holds lock 0x000000076b887e60
  Thread-2 waiting for lock 0x000000076b887e30

  → DEADLOCK!
```

### Thread Dump Analysis Tools

```
fastThread     → https://fastthread.io (upload thread dump, get analysis)
TDA (Thread Dump Analyzer) → Eclipse plugin
VisualVM       → Built-in thread analysis
```

---

---

# PART 6 — CODE-LEVEL OPTIMIZATIONS

---

## 19. String Optimizations

Strings are one of the most common performance bottlenecks in Java.

### String Concatenation

```java
// BAD: Creates a new String object on every iteration
String result = "";
for (int i = 0; i < 10000; i++) {
    result += "item" + i;  // O(n²) — creates thousands of temporary Strings
}

// GOOD: Use StringBuilder (not thread-safe, faster)
StringBuilder sb = new StringBuilder(50000);  // Pre-size to avoid resizing
for (int i = 0; i < 10000; i++) {
    sb.append("item").append(i);
}
String result = sb.toString();

// GOOD: Simple concat in non-loop code is fine (JIT optimizes it)
String name = firstName + " " + lastName;  // OK — JIT converts to StringBuilder

// GOOD: Use String.join() or String.format() for readability
String csv = String.join(",", "a", "b", "c");
```

### String Interning & Deduplication

```java
// String Pool: String literals are automatically interned
String s1 = "hello";           // Stored in String Pool
String s2 = "hello";           // Reuses same object from pool
System.out.println(s1 == s2);  // true — same reference

// new String() bypasses pool
String s3 = new String("hello");  // New object — NOT from pool
System.out.println(s1 == s3);     // false!
System.out.println(s1.equals(s3)); // true — same content

// Manual interning (use sparingly)
String s4 = s3.intern();       // Returns pooled version
System.out.println(s1 == s4);  // true

// G1GC String Deduplication (JVM level)
-XX:+UseStringDeduplication    // G1GC deduplicates equal strings on heap
-XX:StringDeduplicationAgeThreshold=3
```

### Efficient String Operations

```java
// Check if empty — avoid length() == 0
if (str.isEmpty()) { }         // Better
if (str.length() == 0) { }    // Works but less idiomatic

// Check blank (Java 11+)
if (str.isBlank()) { }         // Better than trim().isEmpty()
if (str.trim().isEmpty()) { }  // Creates new trimmed String

// String.chars() for iteration (avoids char array creation)
str.chars().forEach(c -> process((char) c));

// Use startsWith/endsWith instead of substring + equals
if (str.startsWith("prefix")) { }  // Good
if (str.substring(0, 6).equals("prefix")) { }  // Creates new String — worse

// Pre-compile regex patterns — ALWAYS outside the loop!
private static final Pattern EMAIL_PATTERN = Pattern.compile("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$");

public boolean isValidEmail(String email) {
    return EMAIL_PATTERN.matcher(email).matches();  // Reuses compiled pattern
}

// BAD: Compiles regex on every call
public boolean isValidEmailBad(String email) {
    return email.matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$");  // Compiles every time!
}
```

---

## 20. Collections & Data Structures

### Choose the Right Collection

```java
// List — ordered, allows duplicates
ArrayList<E>          // Random access O(1), add O(1) amortized, backed by array
LinkedList<E>         // Add/remove at ends O(1), random access O(n), use as Deque

// Set — no duplicates
HashSet<E>            // O(1) add/contains/remove, no ordering
LinkedHashSet<E>      // O(1) operations, maintains insertion order
TreeSet<E>            // O(log n) operations, sorted

// Map — key-value pairs
HashMap<K,V>          // O(1) get/put, no ordering
LinkedHashMap<K,V>    // O(1) operations, insertion or access order
TreeMap<K,V>          // O(log n) operations, sorted by key
ConcurrentHashMap<K,V>// Thread-safe HashMap, better than Hashtable/synchronizedMap

// Queue / Deque
ArrayDeque<E>         // Faster than LinkedList and Stack for queue/stack ops
PriorityQueue<E>      // Min-heap, O(log n) add/remove, O(1) peek
LinkedBlockingQueue   // Thread-safe, bounded or unbounded
```

### Pre-sizing Collections

```java
// BAD: Default capacity causes multiple resize/copy operations
List<String> list = new ArrayList<>();
for (int i = 0; i < 100_000; i++) {
    list.add("item" + i);  // Resizes 17 times! (16→32→64→...→131072)
}

// GOOD: Pre-size when count is known
List<String> list = new ArrayList<>(100_000);  // Single allocation, no resizing

// HashMap initial capacity — account for load factor (0.75 default)
// If you expect 100 entries: 100 / 0.75 = 134 → use 256 (next power of 2)
Map<String, String> map = new HashMap<>(256);

// Guava helper for sizing
Map<String, String> map = Maps.newHashMapWithExpectedSize(100);
```

### Collection Performance Tips

```java
// 1. Prefer isEmpty() over size() == 0
if (list.isEmpty()) { }         // O(1) always
if (list.size() == 0) { }      // O(1) for most, but misleading semantics

// 2. Avoid contains() on List — use Set instead
List<String> list = Arrays.asList("a", "b", "c");
list.contains("b");  // O(n) linear scan

Set<String> set = new HashSet<>(Arrays.asList("a", "b", "c"));
set.contains("b");   // O(1) hash lookup

// 3. Use removeIf() for bulk removal (Java 8+)
list.removeIf(s -> s.startsWith("a"));  // Better than iterator remove

// 4. Prefer putIfAbsent / computeIfAbsent for Map
// BAD: Two lookups
if (!map.containsKey(key)) {
    map.put(key, new ArrayList<>());
}
map.get(key).add(value);

// GOOD: One lookup
map.computeIfAbsent(key, k -> new ArrayList<>()).add(value);

// 5. Use Collections.unmodifiableList() or List.of() for immutable collections
List<String> immutable = List.of("a", "b", "c");  // Java 9+

// 6. Collections.sort() vs Stream.sorted()
Collections.sort(list);         // Sorts in-place, no new list created
List<String> sorted = list.stream().sorted().collect(toList()); // Creates new list
```

---

## 21. Java Streams & Lambdas

### Stream Performance Tips

```java
// 1. Use primitiveStreams to avoid boxing overhead
IntStream.range(0, 1_000_000).sum();         // No boxing — uses int primitives
Stream.of(1, 2, 3).mapToInt(Integer::intValue).sum(); // Avoid Integer boxing

// 2. Parallel streams — use only for CPU-intensive, independent operations
long count = list.parallelStream()
    .filter(expensiveFilter)       // Only worth it if filter is expensive
    .count();

// DON'T use parallel for:
//   - Small lists (overhead > benefit)
//   - I/O operations
//   - Operations with shared mutable state
//   - Ordered operations (findFirst, forEachOrdered)

// 3. Avoid unnecessary intermediate operations
// BAD: sorted() on everything then filtered
list.stream()
    .sorted()
    .filter(s -> s.length() > 3)
    .collect(toList());

// GOOD: Filter first (less data to sort)
list.stream()
    .filter(s -> s.length() > 3)
    .sorted()
    .collect(toList());

// 4. Use findFirst() + filter() instead of collecting then getting first
// BAD:
Optional<User> user = users.stream()
    .filter(u -> u.getAge() > 18)
    .collect(toList())  // Collects ALL matching users
    .stream()
    .findFirst();       // Then takes first

// GOOD:
Optional<User> user = users.stream()
    .filter(u -> u.getAge() > 18)
    .findFirst();       // Short-circuits after finding first match

// 5. Collectors.toUnmodifiableList() (Java 10+)
List<String> result = stream.collect(Collectors.toUnmodifiableList());

// 6. Stream.toList() (Java 16+) — most concise
List<String> result = stream.toList();

// 7. avoid Collectors.joining() in loops
// GOOD: Use once on whole stream
String result = list.stream().collect(Collectors.joining(", "));
```

---

## 22. Object Creation & Memory

### Reduce Object Creation

```java
// 1. Reuse objects with Object Pools (for expensive objects)
// Example: Apache Commons Pool
GenericObjectPool<Connection> pool = new GenericObjectPool<>(factory);
pool.setMaxTotal(10);
pool.setMinIdle(2);

Connection conn = pool.borrowObject();
try {
    // use connection
} finally {
    pool.returnObject(conn);
}

// 2. Use static factory methods instead of constructors
// BAD: Always creates new object
Boolean b = new Boolean(true);   // Deprecated in Java 9!

// GOOD: Returns cached instance
Boolean b = Boolean.valueOf(true);   // Returns Boolean.TRUE constant
Integer i = Integer.valueOf(127);    // Returns cached Integer (-128 to 127)

// 3. Avoid autoboxing in hot paths
// BAD: Boxes each primitive → creates Integer objects
List<Integer> list = new ArrayList<>();
for (int i = 0; i < 1_000_000; i++) {
    list.add(i);  // Autoboxing: int → Integer (1 million objects!)
}

// GOOD: Use primitive collections (Eclipse Collections, Trove)
IntList list = IntLists.mutable.empty();
for (int i = 0; i < 1_000_000; i++) {
    list.add(i);  // No boxing
}

// 4. Flyweight Pattern — share common immutable objects
public class CharacterFactory {
    private static final Map<Character, GameCharacter> cache = new HashMap<>();

    public static GameCharacter getCharacter(char type) {
        return cache.computeIfAbsent(type, GameCharacter::new);
    }
}

// 5. StringBuilder pooling (ThreadLocal)
private static final ThreadLocal<StringBuilder> SB_POOL =
    ThreadLocal.withInitial(() -> new StringBuilder(512));

public String buildString(String a, String b) {
    StringBuilder sb = SB_POOL.get();
    sb.setLength(0);  // Reset without creating new object
    sb.append(a).append(b);
    return sb.toString();
}
```

### Value Types & Records (Java 16+)

```java
// Records — concise immutable data classes
public record Point(double x, double y) {
    // Compact constructor for validation
    public Point {
        if (x < 0 || y < 0) throw new IllegalArgumentException("Coordinates must be positive");
    }

    public double distanceTo(Point other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}

// Efficient — equals(), hashCode(), toString() auto-generated
Point p1 = new Point(1.0, 2.0);
Point p2 = new Point(1.0, 2.0);
System.out.println(p1.equals(p2));  // true
```

---

## 23. I/O Optimizations

### File I/O

```java
// BAD: Unbuffered file reading (system call per byte)
FileReader reader = new FileReader("data.txt");
int c;
while ((c = reader.read()) != -1) { ... }  // One syscall per character!

// GOOD: Buffered reading (batches reads)
BufferedReader reader = new BufferedReader(new FileReader("data.txt"), 65536);
String line;
while ((line = reader.readLine()) != null) { ... }

// BEST (Java 8+): Files utility methods
List<String> lines = Files.readAllLines(Path.of("data.txt"), StandardCharsets.UTF_8);
// Or stream for large files:
try (Stream<String> lines = Files.lines(Path.of("data.txt"))) {
    lines.filter(l -> l.contains("ERROR")).forEach(System.out::println);
}

// NIO for large files — Memory-mapped files
try (FileChannel channel = FileChannel.open(Path.of("large-file.bin"), READ)) {
    MappedByteBuffer buffer = channel.map(FileChannel.MapMode.READ_ONLY, 0, channel.size());
    // Access bytes directly from mapped memory — very fast!
    while (buffer.hasRemaining()) {
        byte b = buffer.get();
    }
}
```

### Network I/O

```java
// BAD: Blocking I/O with many threads (one thread per connection)
ServerSocket server = new ServerSocket(8080);
while (true) {
    Socket client = server.accept();
    new Thread(() -> handleClient(client)).start();  // Thread per connection — doesn't scale!
}

// GOOD: NIO with Selectors (non-blocking, handles thousands of connections)
Selector selector = Selector.open();
ServerSocketChannel serverChannel = ServerSocketChannel.open();
serverChannel.configureBlocking(false);
serverChannel.register(selector, SelectionKey.OP_ACCEPT);

while (true) {
    selector.select();  // Block until events available
    for (SelectionKey key : selector.selectedKeys()) {
        if (key.isAcceptable()) handleAccept(key);
        if (key.isReadable()) handleRead(key);
    }
}

// BEST: Use Netty or Vert.x for production async I/O
// Or use Spring WebFlux for reactive HTTP
```

### HTTP Client (Java 11+)

```java
// Java 11+ built-in HTTP client (async, non-blocking)
HttpClient client = HttpClient.newBuilder()
        .connectTimeout(Duration.ofSeconds(5))
        .version(HttpClient.Version.HTTP_2)
        .build();

// Async request
HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://api.example.com/users"))
        .timeout(Duration.ofSeconds(10))
        .header("Accept", "application/json")
        .GET()
        .build();

CompletableFuture<HttpResponse<String>> future =
    client.sendAsync(request, HttpResponse.BodyHandlers.ofString());

// Multiple concurrent requests (parallel)
List<CompletableFuture<String>> futures = urls.stream()
    .map(url -> client.sendAsync(
        HttpRequest.newBuilder(URI.create(url)).build(),
        HttpResponse.BodyHandlers.ofString())
        .thenApply(HttpResponse::body))
    .collect(toList());

List<String> results = futures.stream()
    .map(CompletableFuture::join)
    .collect(toList());
```

---

## 24. Reflection & Generics

### Avoid Reflection in Hot Paths

```java
// BAD: Reflection is 10-100x slower than direct calls
Method method = obj.getClass().getMethod("getValue");
Object result = method.invoke(obj);  // Slow! Security checks, boxing, etc.

// GOOD: Direct call
String result = obj.getValue();  // Fast!

// If you MUST use reflection, cache Method/Field references
// BAD: Lookup on every call
public Object getValue(Object obj) throws Exception {
    return obj.getClass().getMethod("getValue").invoke(obj);  // Lookup every time!
}

// GOOD: Cache the Method object
private final Map<Class<?>, Method> methodCache = new ConcurrentHashMap<>();

public Object getValue(Object obj) throws Exception {
    Method method = methodCache.computeIfAbsent(obj.getClass(),
        cls -> cls.getMethod("getValue"));
    return method.invoke(obj);
}

// BETTER: Use MethodHandles (faster than reflection)
MethodHandles.Lookup lookup = MethodHandles.lookup();
MethodHandle handle = lookup.findVirtual(MyClass.class, "getValue",
    MethodType.methodType(String.class));
String result = (String) handle.invokeExact(obj);  // Near direct-call speed

// BEST: Use code generation (ByteBuddy, cglib) or interfaces
```

---

---

# PART 7 — CONCURRENCY PERFORMANCE

---

## 25. Threading Best Practices

### Thread Creation Cost

```java
// Creating threads is EXPENSIVE (stack allocation, OS resources)
// BAD: Create thread for every task
for (Request request : requests) {
    new Thread(() -> process(request)).start();  // Terrible for high load!
}

// GOOD: Use Thread Pools (see next section)
ExecutorService executor = Executors.newFixedThreadPool(10);
for (Request request : requests) {
    executor.submit(() -> process(request));
}
```

### Synchronization Cost

```java
// Synchronization adds overhead:
// - Memory barriers (cache coherence)
// - Monitor acquisition/release
// - Thread contention

// BAD: Over-synchronization (lock held too long)
public synchronized void processAndSave(Data data) {
    expensiveComputation(data);    // Lock held during expensive op!
    repository.save(data);         // Lock held during DB call!
}

// GOOD: Minimize lock scope
public void processAndSave(Data data) {
    expensiveComputation(data);    // No lock needed
    Data result = compute(data);   // No lock needed
    synchronized (this) {
        repository.save(result);   // Only lock what's necessary
    }
}

// BETTER: Use concurrent collections instead of synchronized blocks
// BAD:
private Map<String, Object> cache = Collections.synchronizedMap(new HashMap<>());

// GOOD:
private Map<String, Object> cache = new ConcurrentHashMap<>();
```

### Volatile vs Atomic vs Synchronized

```java
// volatile: Guarantees visibility, NOT atomicity
// Use for single read/write flags
private volatile boolean running = true;  // Other threads see updates immediately

public void stop() {
    running = false;  // Visible to all threads immediately
}

// Atomic classes: Lock-free, thread-safe operations using CAS
// Use for counters and single-variable atomic operations
private AtomicInteger counter = new AtomicInteger(0);
private AtomicLong requestCount = new AtomicLong(0);
private AtomicReference<User> currentUser = new AtomicReference<>();

counter.incrementAndGet();            // Thread-safe increment
counter.compareAndSet(expected, next); // CAS operation

// synchronized: Mutual exclusion for compound operations
// Use for multiple variables that must be updated atomically
private int x, y;

public synchronized void move(int dx, int dy) {
    x += dx;  // Both x and y must be updated atomically
    y += dy;
}
```

---

## 26. Thread Pools & Executors

### Choosing the Right Executor

```java
// 1. Fixed Thread Pool — for CPU-bound tasks
//    Thread count ≈ number of CPU cores
int cpuCores = Runtime.getRuntime().availableProcessors();
ExecutorService cpuPool = Executors.newFixedThreadPool(cpuCores);

// 2. Cached Thread Pool — for short-lived, I/O-bound tasks
//    Creates threads as needed, reuses idle threads (60s keepalive)
//    WARNING: Can create unlimited threads — dangerous under high load!
ExecutorService cachedPool = Executors.newCachedThreadPool();

// 3. Custom ThreadPoolExecutor — RECOMMENDED for production
//    Full control over core/max threads, queue, rejection policy
ExecutorService productionPool = new ThreadPoolExecutor(
    10,                                          // corePoolSize
    50,                                          // maximumPoolSize
    60L, TimeUnit.SECONDS,                       // keepAliveTime
    new ArrayBlockingQueue<>(1000),              // Bounded work queue
    new ThreadFactory() {                        // Named threads for debugging
        private final AtomicInteger count = new AtomicInteger(1);
        public Thread newThread(Runnable r) {
            Thread t = new Thread(r, "app-worker-" + count.getAndIncrement());
            t.setDaemon(false);
            return t;
        }
    },
    new ThreadPoolExecutor.CallerRunsPolicy()    // Rejection policy
    // CallerRunsPolicy: Caller thread runs the task (natural backpressure)
    // AbortPolicy: Throw RejectedExecutionException (default)
    // DiscardPolicy: Silently drop the task
    // DiscardOldestPolicy: Drop oldest queued task
);

// 4. Scheduled Thread Pool — for periodic/delayed tasks
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(5);
scheduler.scheduleAtFixedRate(task, 0, 1, TimeUnit.MINUTES);
scheduler.scheduleWithFixedDelay(task, 0, 1, TimeUnit.MINUTES);
scheduler.schedule(task, 5, TimeUnit.SECONDS);

// 5. Virtual Threads (Java 21+) — for I/O-bound tasks
//    Extremely lightweight — can create millions of them!
ExecutorService virtualPool = Executors.newVirtualThreadPerTaskExecutor();
// OR
Thread virtualThread = Thread.ofVirtual().name("virtual-1").start(() -> {
    // blocking I/O is fine here — virtual thread is unmounted, not blocked
    String data = callExternalService();
});
```

### Thread Pool Sizing Formula

```
For CPU-bound tasks:
  Thread count = CPU cores + 1
  (extra 1 for when a thread is briefly waiting)

For I/O-bound tasks:
  Thread count = CPU cores × (1 + Wait Time / CPU Time)

Example: If a task spends 90% time waiting (I/O) and 10% on CPU:
  Wait/CPU = 0.9 / 0.1 = 9
  Threads = 8 cores × (1 + 9) = 80 threads

For mixed workloads:
  Start with cores × 2, measure, adjust
```

### CompletableFuture for Async Tasks

```java
// Chain async operations without blocking
CompletableFuture<OrderResponse> orderFuture = CompletableFuture
    .supplyAsync(() -> userService.getUser(userId), executor)     // Step 1
    .thenApplyAsync(user -> productService.getProduct(productId), executor)  // Step 2
    .thenApplyAsync(product -> orderService.createOrder(user, product), executor)  // Step 3
    .exceptionally(ex -> {
        log.error("Order failed: {}", ex.getMessage());
        return OrderResponse.failed();
    });

// Run multiple async tasks in parallel
CompletableFuture<UserResponse> userFuture = CompletableFuture
    .supplyAsync(() -> userService.getUser(userId), executor);
CompletableFuture<ProductResponse> productFuture = CompletableFuture
    .supplyAsync(() -> productService.getProduct(productId), executor);

// Wait for all to complete
CompletableFuture.allOf(userFuture, productFuture).join();

UserResponse user = userFuture.get();
ProductResponse product = productFuture.get();

// Wait for first to complete
CompletableFuture.anyOf(userFuture, productFuture).join();
```

---

## 27. Concurrency Utilities

### ReadWriteLock — Multiple Readers, One Writer

```java
// Allow multiple concurrent readers, exclusive writer
ReadWriteLock lock = new ReentrantReadWriteLock();

private Map<String, User> cache = new HashMap<>();

public User getUser(String id) {
    lock.readLock().lock();  // Multiple threads can read simultaneously
    try {
        return cache.get(id);
    } finally {
        lock.readLock().unlock();
    }
}

public void updateUser(String id, User user) {
    lock.writeLock().lock();  // Exclusive access for writes
    try {
        cache.put(id, user);
    } finally {
        lock.writeLock().unlock();
    }
}
```

### Semaphore — Limit Concurrent Access

```java
// Limit concurrent access to a resource (e.g., DB connection, API call)
Semaphore semaphore = new Semaphore(10);  // Allow max 10 concurrent

public void callExternalApi() {
    try {
        semaphore.acquire();       // Block if 10 threads already active
        try {
            externalApiClient.call();
        } finally {
            semaphore.release();   // Release permit when done
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}
```

### CountDownLatch & CyclicBarrier

```java
// CountDownLatch — wait for N events to complete
CountDownLatch latch = new CountDownLatch(3);  // Wait for 3 services

executor.submit(() -> { initDatabase(); latch.countDown(); });
executor.submit(() -> { initCache(); latch.countDown(); });
executor.submit(() -> { initMessageBroker(); latch.countDown(); });

latch.await();  // Block until all 3 countdown to 0
startApplication();

// CyclicBarrier — all threads wait at barrier before proceeding
CyclicBarrier barrier = new CyclicBarrier(4, () ->
    System.out.println("All threads reached barrier!"));

for (int i = 0; i < 4; i++) {
    executor.submit(() -> {
        doWork();
        barrier.await();  // Wait until all 4 threads arrive here
        continueWork();   // All threads proceed together
    });
}
```

---

## 28. Avoiding Common Concurrency Bottlenecks

### Lock Contention

```java
// BAD: High contention — all threads fight for one lock
private final Object globalLock = new Object();
private Map<String, User> users = new HashMap<>();

public void updateUser(String key, User user) {
    synchronized (globalLock) {  // Bottleneck — every update blocks others
        users.put(key, user);
    }
}

// GOOD: ConcurrentHashMap has segment-level locking
private final ConcurrentHashMap<String, User> users = new ConcurrentHashMap<>();

public void updateUser(String key, User user) {
    users.put(key, user);  // No explicit lock needed — internally optimized
}

// GOOD: Stripe locks for finer granularity
private final Object[] locks = new Object[16];  // 16 stripes
{
    for (int i = 0; i < locks.length; i++) locks[i] = new Object();
}

private Object getLock(String key) {
    return locks[Math.abs(key.hashCode()) % locks.length];
}

public void update(String key, User user) {
    synchronized (getLock(key)) {  // Only blocks threads with same key stripe
        users.put(key, user);
    }
}
```

### False Sharing (CPU Cache Line Contention)

```java
// CPUs read/write memory in cache lines (64 bytes)
// If two threads write to variables in the same cache line → false sharing!

// BAD: counter1 and counter2 might be on the same cache line
class BadCounters {
    volatile long counter1;  // These 2 longs (16 bytes) are on same
    volatile long counter2;  // cache line → false sharing!
}

// GOOD: Pad to separate cache lines
class PaddedCounter {
    volatile long value;
    long p1, p2, p3, p4, p5, p6, p7;  // 56 bytes of padding
}

// BEST: Use @Contended annotation (Java 8+)
@sun.misc.Contended
class Counter {
    volatile long value;
}

// Or use LongAdder for high-contention counters
LongAdder counter = new LongAdder();
counter.increment();       // Internally uses striped counters → no false sharing
long total = counter.sum();
```

---

---

# PART 8 — DATABASE & CACHING

---

## 29. JDBC & Connection Pooling

### Connection Pooling with HikariCP

```yaml
# application.yml — HikariCP (Spring Boot default connection pool)
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret
    hikari:
      pool-name: MyHikariPool
      minimum-idle: 5               # Keep 5 connections always ready
      maximum-pool-size: 20         # Max 20 connections
      connection-timeout: 30000     # Wait max 30s for connection
      idle-timeout: 600000          # Remove idle connection after 10min
      max-lifetime: 1800000         # Connection max lifetime 30min
      connection-test-query: SELECT 1  # Validate connection before use
      leak-detection-threshold: 60000  # Log if connection held > 60s
```

### Pool Size Formula

```
Optimal Pool Size = Tn × (Cm - 1) + 1

Where:
  Tn = Max number of threads in app
  Cm = Max connections the DB server supports

HikariCP recommendation:
  Pool Size = (CPU cores × 2) + effective_spindle_count

For most apps: Start with 10, monitor, adjust
Too many connections = context switching overhead on DB server
Too few connections = threads wait for connection → slow response
```

### Efficient JDBC Queries

```java
// BAD: String concat — SQL injection vulnerability + slow
String sql = "SELECT * FROM users WHERE email = '" + email + "'";

// GOOD: PreparedStatement — safe + faster (DB caches execution plan)
String sql = "SELECT id, name, email FROM users WHERE email = ?";
try (PreparedStatement stmt = conn.prepareStatement(sql)) {
    stmt.setString(1, email);
    ResultSet rs = stmt.executeQuery();
    while (rs.next()) {
        // process row
    }
}

// GOOD: Batch inserts for multiple rows
String sql = "INSERT INTO events (user_id, action, timestamp) VALUES (?, ?, ?)";
try (PreparedStatement stmt = conn.prepareStatement(sql)) {
    for (Event event : events) {
        stmt.setLong(1, event.getUserId());
        stmt.setString(2, event.getAction());
        stmt.setTimestamp(3, Timestamp.from(event.getTimestamp()));
        stmt.addBatch();
    }
    int[] results = stmt.executeBatch();  // One network roundtrip for all!
}

// GOOD: Fetch only needed columns
"SELECT id, name FROM users"    // Good — only 2 columns
"SELECT * FROM users"           // Bad — fetches all columns including BLOBs!

// GOOD: Use LIMIT to avoid fetching millions of rows
"SELECT id, name FROM users WHERE status = 'ACTIVE' LIMIT 1000"
```

---

## 30. JPA & Hibernate Optimization

### N+1 Query Problem (Most Common JPA Issue)

```java
// PROBLEM: N+1 queries
// Fetching 100 orders + 1 query per order for user = 101 queries!
List<Order> orders = orderRepository.findAll();  // Query 1: SELECT * FROM orders
for (Order order : orders) {
    String userName = order.getUser().getName();  // Query 2-101: SELECT * FROM users WHERE id=?
}

// SOLUTION 1: JPQL JOIN FETCH
@Query("SELECT o FROM Order o JOIN FETCH o.user WHERE o.status = :status")
List<Order> findByStatusWithUser(@Param("status") OrderStatus status);

// SOLUTION 2: Entity Graph
@EntityGraph(attributePaths = {"user", "orderItems"})
List<Order> findByStatus(OrderStatus status);

// SOLUTION 3: Fetch = EAGER in @ManyToOne (use carefully — always loads)
@ManyToOne(fetch = FetchType.EAGER)  // Only if always needed
private User user;

// SOLUTION 4: DTO Projection (best for read-only, skips entity hydration)
@Query("SELECT new com.example.dto.OrderSummary(o.id, u.name, o.totalPrice) " +
       "FROM Order o JOIN o.user u WHERE o.status = :status")
List<OrderSummary> findOrderSummaries(@Param("status") OrderStatus status);
```

### Lazy vs Eager Loading

```java
// Default fetch types:
@OneToMany  → LAZY   (correct default — load on demand)
@ManyToMany → LAZY   (correct default)
@ManyToOne  → EAGER  (often causes N+1 — consider changing to LAZY)
@OneToOne   → EAGER  (often causes N+1 — consider changing to LAZY)

// Recommended: Use LAZY everywhere, explicitly JOIN FETCH when needed
@ManyToOne(fetch = FetchType.LAZY)  // Change default EAGER to LAZY
@JoinColumn(name = "user_id")
private User user;
```

### Hibernate Batch Operations

```yaml
# application.yml
spring:
  jpa:
    properties:
      hibernate:
        jdbc:
          batch_size: 50             # Batch up to 50 INSERTs/UPDATEs
        order_inserts: true          # Group inserts for same entity type
        order_updates: true          # Group updates for same entity type
        batch_versioned_data: true   # Enable batching for versioned entities
```

```java
// Batch insert with Spring Data
@Service
@Transactional
public class UserBatchService {

    private final UserRepository userRepository;
    private final EntityManager entityManager;

    public void batchInsert(List<User> users) {
        int batchSize = 50;
        for (int i = 0; i < users.size(); i++) {
            entityManager.persist(users.get(i));
            if ((i + 1) % batchSize == 0) {
                entityManager.flush();   // Execute batch
                entityManager.clear();   // Clear first-level cache
            }
        }
        entityManager.flush();  // Flush remaining
    }
}
```

### Query Optimization

```java
// 1. Pagination — never load all data
Page<User> users = userRepository.findAll(PageRequest.of(0, 20));
// Generates: SELECT * FROM users LIMIT 20 OFFSET 0

// 2. Count query separately (avoid count on every page)
Page<User> page = userRepository.findActiveUsers(
    PageRequest.of(0, 20),
    countQuery = "SELECT count(u.id) FROM User u WHERE u.status = 'ACTIVE'"
);

// 3. Use @Modifying for bulk updates (avoid loading entities first)
// BAD: Load all users, update one by one
List<User> inactiveUsers = userRepository.findByStatus(INACTIVE);
inactiveUsers.forEach(u -> u.setStatus(DELETED));  // N updates in Hibernate

// GOOD: Single UPDATE statement
@Modifying
@Query("UPDATE User u SET u.status = 'DELETED' WHERE u.status = 'INACTIVE' AND u.lastLogin < :cutoff")
int bulkDeleteInactiveUsers(@Param("cutoff") LocalDateTime cutoff);

// 4. Read-only transactions for queries
@Transactional(readOnly = true)  // Hibernate skips dirty checking → faster
public List<User> getAllUsers() {
    return userRepository.findAll();
}

// 5. Second-level cache for frequently read, rarely changed data
@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_MOSTLY)  // Hibernate 2nd level cache
public class Country {
    @Id private Long id;
    private String name;
    private String code;
}
```

---

## 31. Caching Strategies

### Spring Cache Abstraction

```java
// Enable caching
@SpringBootApplication
@EnableCaching
public class Application { ... }

// Cache a method result
@Service
public class UserService {

    @Cacheable(value = "users", key = "#id")  // Cache result by id
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
        // First call: hits DB and caches result
        // Subsequent calls: returns from cache (no DB call)
    }

    @CachePut(value = "users", key = "#user.id")  // Update cache after write
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @CacheEvict(value = "users", key = "#id")  // Remove from cache on delete
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @CacheEvict(value = "users", allEntries = true)  // Clear entire cache
    @Scheduled(fixedRate = 3600000)  // Every hour
    public void clearUserCache() { }

    @Caching(
        evict = {
            @CacheEvict(value = "users", key = "#user.id"),
            @CacheEvict(value = "usersByEmail", key = "#user.email")
        }
    )
    public void deleteUserComplex(User user) {
        userRepository.delete(user);
    }
}
```

### Redis Cache Configuration

```yaml
spring:
  data:
    redis:
      host: localhost
      port: 6379
      timeout: 2000ms
  cache:
    type: redis
    redis:
      time-to-live: 600000  # 10 minutes default TTL
      cache-null-values: false
```

```java
@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory factory) {
        RedisCacheConfiguration defaultConfig = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(10))
                .serializeKeysWith(RedisSerializationContext.SerializationPair
                        .fromSerializer(new StringRedisSerializer()))
                .serializeValuesWith(RedisSerializationContext.SerializationPair
                        .fromSerializer(new GenericJackson2JsonRedisSerializer()))
                .disableCachingNullValues();

        Map<String, RedisCacheConfiguration> cacheConfigs = new HashMap<>();
        cacheConfigs.put("users", defaultConfig.entryTtl(Duration.ofHours(1)));
        cacheConfigs.put("products", defaultConfig.entryTtl(Duration.ofMinutes(30)));
        cacheConfigs.put("sessions", defaultConfig.entryTtl(Duration.ofMinutes(60)));

        return RedisCacheManager.builder(factory)
                .cacheDefaults(defaultConfig)
                .withInitialCacheConfigurations(cacheConfigs)
                .build();
    }
}
```

### Cache Patterns

```
Cache-Aside (Lazy Loading):
  Read:  App checks cache first → miss → read from DB → store in cache → return
  Write: App writes to DB → invalidate/update cache

Write-Through:
  Write: App writes to cache AND DB simultaneously → always consistent

Write-Behind (Write-Back):
  Write: App writes to cache only → asynchronously writes to DB later → higher risk

Read-Through:
  Read: Cache handles DB read on miss automatically → app always reads from cache

Cache Eviction Policies:
  LRU  (Least Recently Used)   → Evict oldest-accessed item
  LFU  (Least Frequently Used) → Evict least-accessed item
  TTL  (Time To Live)          → Evict after fixed time
  FIFO (First In First Out)    → Evict in insertion order
```

---

---

# PART 9 — SPRING BOOT PERFORMANCE

---

## 32. Spring Boot Startup Optimization

### Reduce Startup Time

```java
// 1. Lazy bean initialization (Spring Boot 2.2+)
// application.properties
spring.main.lazy-initialization=true
// Only initializes beans when first used — reduces startup time

// 2. Exclude unused auto-configurations
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,  // If not using DB
    SecurityAutoConfiguration.class,    // If not using Security
    JmxAutoConfiguration.class          // If not using JMX
})

// 3. Class Data Sharing (CDS) — pre-process class files
# Create archive
java -Xshare:dump -XX:SharedArchiveFile=app-cds.jsa -jar app.jar

# Use archive on startup
java -Xshare:on -XX:SharedArchiveFile=app-cds.jsa -jar app.jar

// 4. Spring AOT (Spring Boot 3+ with GraalVM Native)
// Moves reflection/proxy computation from runtime to build time
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <image>
            <builder>paketobuildpacks/builder:tiny</builder>
        </image>
    </configuration>
</plugin>
```

### JVM Startup Flags

```bash
# Fast startup flags
-XX:TieredStopAtLevel=1          # Use only C1 JIT (faster startup, less optimization)
-XX:+UseSerialGC                 # Simpler GC for small apps
-Xss256k                         # Smaller thread stacks

# GraalVM Native Image — instant startup (< 100ms), lower memory
mvn native:compile -Pnative       # Spring Boot 3+ with GraalVM
./target/app                      # Native binary — no JVM needed!
```

---

## 33. Spring Web Performance

### Controller Optimization

```java
// 1. Use async processing for long-running tasks
@GetMapping("/report")
public CompletableFuture<ResponseEntity<Report>> generateReport() {
    return CompletableFuture.supplyAsync(() -> {
        Report report = reportService.generateExpensiveReport();  // Runs in thread pool
        return ResponseEntity.ok(report);
    }, taskExecutor);
    // Frees up servlet thread immediately while report is being generated
}

// 2. Response compression
// application.properties
server.compression.enabled=true
server.compression.mime-types=application/json,application/xml,text/html
server.compression.min-response-size=1024  # Only compress responses > 1KB

// 3. HTTP caching headers
@GetMapping("/products/{id}")
public ResponseEntity<Product> getProduct(@PathVariable Long id) {
    Product product = productService.getProduct(id);
    return ResponseEntity.ok()
            .cacheControl(CacheControl.maxAge(1, TimeUnit.HOURS))
            .eTag(String.valueOf(product.getVersion()))
            .body(product);
}

// 4. Pagination for list endpoints
@GetMapping("/users")
public Page<UserDto> getUsers(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size) {
    return userService.getUsers(PageRequest.of(page, Math.min(size, 100)));
}

// 5. Use DTOs — never expose entities directly
// Entities may have LAZY fields that trigger unexpected DB queries during serialization
@GetMapping("/users/{id}")
public UserDto getUser(@PathVariable Long id) {
    User user = userService.getUser(id);
    return userMapper.toDto(user);  // Convert to DTO before returning
}
```

### WebFlux (Reactive) for High Concurrency

```java
// Spring WebFlux — non-blocking, reactive web framework
// Better than MVC for I/O-bound, high-concurrency scenarios
@RestController
@RequestMapping("/api/users")
public class ReactiveUserController {

    private final ReactiveUserService userService;

    @GetMapping
    public Flux<User> getAllUsers() {
        return userService.findAll();  // Reactive stream — non-blocking
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<User>> getUserById(@PathVariable Long id) {
        return userService.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Mono<ResponseEntity<User>> createUser(@RequestBody Mono<User> userMono) {
        return userMono
                .flatMap(userService::save)
                .map(user -> ResponseEntity.status(HttpStatus.CREATED).body(user));
    }
}
```

---

## 34. Spring Data Performance

```java
// 1. Projection interfaces — fetch only needed fields
public interface UserSummary {
    Long getId();
    String getFirstName();
    String getLastName();
    String getEmail();
    // JPA fetches only these 4 columns
}

public interface UserRepository extends JpaRepository<User, Long> {
    List<UserSummary> findByStatus(UserStatus status);
    // SELECT id, first_name, last_name, email FROM users WHERE status = ?
    // NOT: SELECT * FROM users WHERE status = ?
}

// 2. Specification for dynamic queries
public class UserSpecifications {
    public static Specification<User> hasStatus(UserStatus status) {
        return (root, query, cb) -> status == null ? null :
                cb.equal(root.get("status"), status);
    }

    public static Specification<User> hasNameLike(String name) {
        return (root, query, cb) -> name == null ? null :
                cb.like(cb.lower(root.get("firstName")),
                        "%" + name.toLowerCase() + "%");
    }
}

// Usage — compose specifications dynamically
Specification<User> spec = Specification
    .where(UserSpecifications.hasStatus(UserStatus.ACTIVE))
    .and(UserSpecifications.hasNameLike(searchTerm));
Page<User> users = userRepository.findAll(spec, PageRequest.of(0, 20));

// 3. @QueryHints for performance
@QueryHints(value = {
    @QueryHint(name = HINT_FETCH_SIZE, value = "50"),          // JDBC fetch size
    @QueryHint(name = HINT_CACHEABLE, value = "true"),         // Query cache
    @QueryHint(name = HINT_READONLY, value = "true")           // Read-only mode
})
@Query("SELECT u FROM User u WHERE u.status = :status")
List<User> findActiveUsersOptimized(@Param("status") UserStatus status);
```

---

---

# PART 10 — BENCHMARKING & BEST PRACTICES

---

## 35. Benchmarking with JMH

**JMH (Java Microbenchmark Harness)** is the gold standard for measuring Java performance. Never benchmark without it — JIT compilation makes naive benchmarks unreliable.

### Setup

```xml
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.37</version>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.37</version>
    <scope>provided</scope>
</dependency>
```

### Writing Benchmarks

```java
@BenchmarkMode(Mode.AverageTime)      // Measure average time per operation
@OutputTimeUnit(TimeUnit.MICROSECONDS)
@State(Scope.Benchmark)              // One state instance per benchmark run
@Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)    // JVM warmup
@Measurement(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
@Fork(2)                              // Run in 2 separate JVM processes
public class StringBenchmark {

    @Param({"100", "1000", "10000"})  // Run with different sizes
    private int size;

    private List<String> items;

    @Setup(Level.Trial)               // Run once before all iterations
    public void setup() {
        items = IntStream.range(0, size)
                .mapToObj(i -> "item" + i)
                .collect(Collectors.toList());
    }

    @Benchmark
    public String concatWithPlus() {
        String result = "";
        for (String item : items) {
            result += item;           // Measure this approach
        }
        return result;
    }

    @Benchmark
    public String concatWithStringBuilder() {
        StringBuilder sb = new StringBuilder(size * 8);
        for (String item : items) {
            sb.append(item);          // Compare with this approach
        }
        return sb.toString();
    }

    @Benchmark
    public String joinWithStreams() {
        return String.join("", items);  // And this approach
    }
}
```

### Running Benchmarks

```bash
# Build and run
mvn clean install
java -jar target/benchmarks.jar

# Run specific benchmark
java -jar target/benchmarks.jar StringBenchmark

# Quick run (fewer iterations)
java -jar target/benchmarks.jar -wi 2 -i 3 StringBenchmark

# Output results to JSON
java -jar target/benchmarks.jar -rf json -rff results.json
```

### Sample Output

```
Benchmark                          (size)  Mode  Cnt     Score      Error  Units
StringBenchmark.concatWithPlus        100  avgt   20    12.345 ±  0.234  us/op
StringBenchmark.concatWithPlus       1000  avgt   20  1234.567 ± 12.345  us/op
StringBenchmark.concatWithStringBuilder 100  avgt  20     1.234 ±  0.012  us/op
StringBenchmark.concatWithStringBuilder 1000 avgt  20    10.234 ±  0.123  us/op
StringBenchmark.joinWithStreams        100  avgt   20     1.456 ±  0.023  us/op
StringBenchmark.joinWithStreams       1000  avgt   20    12.345 ±  0.234  us/op

Result: StringBuilder is ~100x faster than + for size=1000!
```

---

## 36. Performance Anti-Patterns

### Top Performance Anti-Patterns in Java

```java
// 1. SYNCHRONIZING UNNECESSARILY
// BAD:
public synchronized String buildMessage(String name) {  // No shared state!
    return "Hello, " + name;  // Pointless sync
}

// 2. USING WRONG DATA STRUCTURE
// BAD: O(n) lookup in List
List<User> users = new ArrayList<>();
boolean exists = users.contains(target);  // O(n)

// GOOD: O(1) lookup in Set
Set<User> users = new HashSet<>();
boolean exists = users.contains(target);  // O(1)

// 3. CREATING OBJECTS IN LOOPS
// BAD: SimpleDateFormat is expensive to create
for (String dateStr : dateStrings) {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  // Created 1000x!
    Date date = sdf.parse(dateStr);
}

// GOOD: Reuse or use thread-safe alternatives
private static final DateTimeFormatter FORMATTER =
    DateTimeFormatter.ofPattern("yyyy-MM-dd");  // Immutable, thread-safe

for (String dateStr : dateStrings) {
    LocalDate date = LocalDate.parse(dateStr, FORMATTER);
}

// 4. CATCHING Exception/Throwable
// BAD:
try {
    processData();
} catch (Exception e) {
    // swallowing the exception — hides bugs and can cause memory leaks
}

// 5. LOADING ALL DATA — no pagination
// BAD:
List<User> allUsers = userRepository.findAll();  // Could be millions of rows!
for (User u : allUsers) { process(u); }

// GOOD: Process in batches
int page = 0;
Page<User> batch;
do {
    batch = userRepository.findAll(PageRequest.of(page++, 1000));
    batch.forEach(this::process);
} while (batch.hasNext());

// 6. IGNORING AUTOBOXING IN HOT CODE
// BAD:
Map<String, Integer> counts = new HashMap<>();
for (String key : keys) {
    counts.merge(key, 1, Integer::sum);  // Boxing int -> Integer on every increment
}

// GOOD: Use primitive maps or LongAdder
Map<String, LongAdder> counts = new ConcurrentHashMap<>();
for (String key : keys) {
    counts.computeIfAbsent(key, k -> new LongAdder()).increment();  // No boxing
}

// 7. BLOCKING IN REACTIVE CODE
// BAD:
Flux<Data> result = Flux.fromIterable(ids)
    .map(id -> {
        return repository.findById(id).block();  // BLOCKING in reactive stream!
    });

// GOOD:
Flux<Data> result = Flux.fromIterable(ids)
    .flatMap(id -> repository.findById(id));  // Non-blocking flatMap
```

---

## 37. Production Performance Checklist

### JVM Configuration

```bash
# Production-ready JVM flags
java \
  -server \
  -Xms4g -Xmx4g \               # Heap: set equal to avoid resizing
  -XX:+UseG1GC \                 # Use G1 GC
  -XX:MaxGCPauseMillis=200 \     # Target pause time
  -XX:G1HeapRegionSize=16m \     # Tune region size
  -XX:MetaspaceSize=256m \       # Initial Metaspace
  -XX:MaxMetaspaceSize=512m \    # Max Metaspace
  -XX:+HeapDumpOnOutOfMemoryError \
  -XX:HeapDumpPath=/dumps/ \
  -Xlog:gc*:file=/logs/gc.log:time,uptime:filecount=10,filesize=50m \
  -XX:+DisableExplicitGC \       # Prevent System.gc() from apps
  -jar app.jar
```

### Application Code

```
[ ] No N+1 queries — use JOIN FETCH or EntityGraph
[ ] All queries use indexes — verify with EXPLAIN
[ ] Connection pool sized appropriately (HikariCP)
[ ] HTTP connections are pooled (RestTemplate/WebClient)
[ ] Caching implemented for expensive/repeated reads
[ ] Pagination on all list endpoints
[ ] Async processing for long-running tasks
[ ] Thread pool sized correctly (CPU vs I/O bound)
[ ] No blocking calls in reactive code
[ ] Resource leaks fixed (streams, connections, ThreadLocal)
[ ] No memory leaks (bounded caches, listener cleanup)
[ ] String StringBuilder used for concatenation in loops
[ ] Regex patterns compiled once (static final)
[ ] Batch operations for bulk DB writes
[ ] Read-only transactions for queries
```

### Monitoring & Alerting

```
[ ] JVM metrics (heap, GC, threads) monitored
[ ] Application metrics (RPS, latency p95/p99, error rate)
[ ] Database metrics (slow queries, connection pool usage)
[ ] Distributed tracing enabled (Zipkin/Jaeger)
[ ] Alerts configured for:
      - Heap usage > 80%
      - GC pause time > 500ms
      - Full GC frequency > 1 per 5 minutes
      - Response time p99 > SLA threshold
      - Error rate > 0.1%
      - Thread count anomaly
[ ] Dashboards for key metrics (Grafana)
[ ] Log aggregation (ELK/Loki)
```

---

## 38. Performance Tuning Cheat Sheet

### JVM Flags Quick Reference

```bash
# Heap
-Xms4g -Xmx4g                   # Heap size (set equal)
-XX:NewSize=1g -XX:MaxNewSize=1g # Young Gen size
-XX:MetaspaceSize=256m           # Metaspace initial
-XX:MaxMetaspaceSize=512m        # Metaspace max

# GC
-XX:+UseG1GC                     # Use G1 (best default)
-XX:MaxGCPauseMillis=200         # G1 pause target
-XX:+UseZGC                      # Ultra-low latency (Java 11+)
-XX:+UseParallelGC               # Max throughput (batch jobs)

# Diagnostics
-XX:+HeapDumpOnOutOfMemoryError  # Auto heap dump on OOM
-XX:HeapDumpPath=/dumps/         # Dump location
-Xlog:gc*:file=/logs/gc.log      # GC logging

# Monitoring
-Dcom.sun.management.jmxremote   # Enable JMX
```

### GC Selection Guide

```
Batch / throughput apps   → -XX:+UseParallelGC
General web apps          → -XX:+UseG1GC (default)
Low latency APIs (< 10ms) → -XX:+UseZGC
Very large heaps (> 32GB) → -XX:+UseZGC
```

### Common Bottleneck → Solution Map

| Bottleneck | Symptom | Solution |
|---|---|---|
| **N+1 Queries** | Hundreds of DB queries per request | JOIN FETCH, EntityGraph, DTO projection |
| **Missing DB Index** | Slow queries, high DB CPU | Add index, check EXPLAIN output |
| **No Connection Pool** | DB connection errors under load | Use HikariCP, tune pool size |
| **Heap Too Small** | Frequent GC, OOM errors | Increase -Xmx |
| **Memory Leak** | Heap grows forever | Heap dump → MAT analysis |
| **Thread Pool Too Small** | Slow response under load | Increase thread pool size |
| **Thread Contention** | CPU high, throughput low | Reduce sync scope, use concurrent utils |
| **Full GC Pauses** | Long pauses (>1s) | Switch to G1/ZGC, increase heap |
| **No Caching** | Repeated expensive calls | Add Redis/Caffeine cache |
| **Blocking I/O** | High thread count, low throughput | Use async (CompletableFuture, WebFlux) |
| **Large Response Payload** | Slow API, high bandwidth | Pagination, compression, DTOs |

### Performance Testing Tools

```
Load Testing:
  Apache JMeter      → Full-featured, GUI and CLI
  Gatling            → Code-based, great reports, Scala DSL
  k6                 → Modern, JavaScript, cloud integration
  wrk / wrk2         → Fast HTTP benchmarking CLI
  Locust             → Python-based, easy scripting

APM & Monitoring:
  Micrometer         → JVM metrics collection
  Prometheus         → Metrics storage & alerting
  Grafana            → Dashboards & visualization
  Datadog            → Full-stack APM (paid)
  New Relic          → Full-stack APM (paid)
  Dynatrace          → AI-powered APM (paid)

JVM Profilers:
  async-profiler     → Low overhead, flame graphs, free
  VisualVM           → Free, good for development
  JProfiler          → Paid, comprehensive
  YourKit            → Paid, production-safe
  Java Flight Recorder → Built-in (Java 11+), low overhead
```

### Quick Wins List

```
Database (biggest impact):
  1. Add missing indexes (check slow query log)
  2. Fix N+1 queries (JOIN FETCH)
  3. Use connection pooling (HikariCP)
  4. Enable query caching (Redis)
  5. Use read replicas for read-heavy workloads

JVM:
  1. Set -Xms = -Xmx (avoid heap resizing)
  2. Switch to G1GC if using older GC
  3. Enable GC logging and analyze pauses
  4. Add HeapDumpOnOutOfMemoryError flag

Code:
  1. Use StringBuilder for string concatenation
  2. Pre-size collections when size is known
  3. Use proper data structures (Set for lookups)
  4. Compile regex patterns as static final
  5. Move object creation out of loops

Spring Boot:
  1. Use @Transactional(readOnly=true) for queries
  2. Use DTO projections instead of full entities
  3. Enable response compression
  4. Add HTTP cache headers
  5. Use lazy initialization for faster startup
```

---