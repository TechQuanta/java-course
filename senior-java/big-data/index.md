# Big Data in Java 

> Big Data ecosystem in Java — from core concepts and Hadoop to Spark, Kafka, Flink, HBase, Hive, and production-ready pipelines.

---

## Table of Contents

### PART 1 — FOUNDATIONS
1. [What is Big Data?](#1-what-is-big-data)
2. [Big Data Architecture Patterns](#2-big-data-architecture-patterns)
3. [Big Data Ecosystem Overview](#3-big-data-ecosystem-overview)
4. [CAP Theorem & Distributed Systems Basics](#4-cap-theorem--distributed-systems-basics)

### PART 2 — HADOOP ECOSYSTEM
5. [Hadoop Core Concepts](#5-hadoop-core-concepts)
6. [HDFS — Hadoop Distributed File System](#6-hdfs--hadoop-distributed-file-system)
7. [MapReduce Programming Model](#7-mapreduce-programming-model)
8. [YARN — Resource Management](#8-yarn--resource-management)
9. [Hadoop Java API](#9-hadoop-java-api)

### PART 3 — APACHE SPARK
10. [Spark Architecture & Core Concepts](#10-spark-architecture--core-concepts)
11. [Spark RDD — Resilient Distributed Datasets](#11-spark-rdd--resilient-distributed-datasets)
12. [Spark DataFrames & Datasets](#12-spark-dataframes--datasets)
13. [Spark SQL](#13-spark-sql)
14. [Spark Streaming](#14-spark-streaming)
15. [Spark MLlib — Machine Learning](#15-spark-mllib--machine-learning)
16. [Spark Optimization & Tuning](#16-spark-optimization--tuning)

### PART 4 — APACHE KAFKA
17. [Kafka Architecture & Core Concepts](#17-kafka-architecture--core-concepts)
18. [Kafka Producer API in Java](#18-kafka-producer-api-in-java)
19. [Kafka Consumer API in Java](#19-kafka-consumer-api-in-java)
20. [Kafka Streams](#20-kafka-streams)
21. [Kafka Connect](#21-kafka-connect)

### PART 5 — APACHE FLINK
22. [Flink Architecture & Core Concepts](#22-flink-architecture--core-concepts)
23. [Flink DataStream API](#23-flink-datastream-api)
24. [Flink Table API & SQL](#24-flink-table-api--sql)
25. [Flink Windowing & State Management](#25-flink-windowing--state-management)

### PART 6 — NOSQL & STORAGE
26. [HBase — Wide-Column Store](#26-hbase--wide-column-store)
27. [Apache Cassandra with Java](#27-apache-cassandra-with-java)
28. [Apache Hive — Data Warehousing](#28-apache-hive--data-warehousing)
29. [Apache Parquet & Avro — Data Formats](#29-apache-parquet--avro--data-formats)

### PART 7 — DATA PIPELINES & ORCHESTRATION
30. [Apache Airflow Concepts](#30-apache-airflow-concepts)
31. [Spring Batch for Big Data](#31-spring-batch-for-big-data)
32. [Building ETL Pipelines in Java](#32-building-etl-pipelines-in-java)

### PART 8 — CLOUD & DEPLOYMENT
33. [Big Data on AWS — EMR, S3, Glue](#33-big-data-on-aws--emr-s3-glue)
34. [Big Data on GCP — Dataproc, BigQuery](#34-big-data-on-gcp--dataproc-bigquery)
35. [Containerizing Big Data — Docker & Kubernetes](#35-containerizing-big-data--docker--kubernetes)

### PART 9 — PATTERNS & BEST PRACTICES
36. [Data Engineering Best Practices](#36-data-engineering-best-practices)
37. [Big Data Design Patterns](#37-big-data-design-patterns)
38. [Big Data Cheat Sheet](#38-big-data-cheat-sheet)

---

---

# PART 1 — FOUNDATIONS

---

## 1. What is Big Data?

**Big Data** refers to datasets so large, fast, or complex that traditional data processing tools cannot handle them efficiently. The definition is guided by the **5 V's**:

### The 5 V's of Big Data

```
Volume    → Scale of data
           Terabytes → Petabytes → Exabytes
           Example: Facebook stores 100+ petabytes of data

Velocity  → Speed at which data arrives
           Batch (daily) → Near-real-time (minutes) → Real-time (milliseconds)
           Example: Twitter processes 500 million tweets/day

Variety   → Different types and formats of data
           Structured (SQL), Semi-structured (JSON, XML), Unstructured (text, video)
           Example: Sensor data + logs + images + social media

Veracity  → Trustworthiness and quality of data
           Noisy data, missing values, inconsistencies
           Example: IoT sensors with occasional faulty readings

Value     → Business insights extracted from data
           Raw data alone is worthless — insights drive decisions
           Example: Netflix recommendations = $1 billion/year saved
```

### Big Data vs Traditional Data

| Aspect | Traditional Data | Big Data |
|---|---|---|
| **Volume** | GB to TB | TB to PB to EB |
| **Processing** | Single machine | Distributed cluster |
| **Storage** | RDBMS (Oracle, MySQL) | HDFS, S3, NoSQL |
| **Processing Style** | Batch (hourly/daily) | Batch + Streaming (real-time) |
| **Schema** | Schema-on-write | Schema-on-read |
| **Latency** | Seconds | Milliseconds to hours |
| **Cost** | Expensive hardware | Commodity hardware |
| **Tools** | SQL, ETL tools | Hadoop, Spark, Kafka, Flink |

### When Do You Need Big Data?

```
✅ Data exceeds what a single server can process (> 1TB active data)
✅ Processing time exceeds business requirements with traditional tools
✅ Real-time or near-real-time processing is needed
✅ Data variety requires flexible schema (logs, events, media)
✅ Multiple heterogeneous data sources must be combined
✅ Machine learning on large datasets

❌ Data fits comfortably in a single database
❌ Processing is not time-critical
❌ Team lacks Big Data expertise
❌ Cost of Big Data infrastructure > business value
```

---

## 2. Big Data Architecture Patterns

### Lambda Architecture

Handles both batch and real-time processing with three layers:

```
                    ┌─────────────────────────────────────────┐
Raw Data Source     │           LAMBDA ARCHITECTURE           │
     │              └─────────────────────────────────────────┘
     │
     ├──────────────────────────────────────────────────────┐
     │                                                       │
     ▼                                                       ▼
┌─────────────┐                                    ┌─────────────────┐
│ Batch Layer │                                    │   Speed Layer   │
│  (Hadoop /  │                                    │  (Kafka/Flink/  │
│   Spark)    │                                    │  Spark Stream)  │
│             │                                    │                 │
│ Recomputes  │                                    │ Low-latency     │
│ everything  │                                    │ real-time views │
│ from raw    │                                    │ (last few mins) │
│ data        │                                    └────────┬────────┘
└──────┬──────┘                                            │
       │                                                    │
       ▼                                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Serving Layer                               │
│              (Merges batch + speed views)                       │
│                    (HBase, Cassandra)                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                         Query / API
```

**Pros:** Accurate batch results + low-latency real-time views
**Cons:** Complex — must maintain two code paths (batch + streaming)

### Kappa Architecture

Simplification of Lambda — treats everything as a stream:

```
Raw Data Source
     │
     ▼
┌─────────────────┐
│  Kafka (event   │  ← All data goes through Kafka
│   log / source  │    Re-processing: replay from beginning
│   of truth)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Stream         │  ← One code path for everything
│  Processing     │    (Flink / Kafka Streams / Spark Streaming)
│  (Flink/Spark)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Serving Layer  │
│ (Real-time DB)  │
└─────────────────┘
```

**Pros:** Simpler — one code path, easier to maintain
**Cons:** Requires Kafka to store all historical data (long retention)

### Data Lake vs Data Warehouse vs Data Lakehouse

```
Data Warehouse:
  - Structured, processed data
  - Schema-on-write (schema defined upfront)
  - Optimized for BI queries
  - Examples: Snowflake, BigQuery, Redshift, Hive

Data Lake:
  - Raw, unprocessed data in any format
  - Schema-on-read (schema applied at query time)
  - Cheap storage (S3, HDFS)
  - Examples: AWS S3 + Glue, HDFS + Parquet

Data Lakehouse (Modern):
  - Combines the best of both
  - ACID transactions on data lake
  - Schema enforcement + governance
  - Examples: Delta Lake, Apache Iceberg, Apache Hudi
```

---

## 3. Big Data Ecosystem Overview

```
┌──────────────────────────────────────────────────────────────────────────┐
│                     BIG DATA ECOSYSTEM                                   │
├──────────────────────────────────────────────────────────────────────────┤
│  INGESTION                                                               │
│  Apache Kafka │ Apache Flume │ Apache Sqoop │ AWS Kinesis │ Logstash    │
├──────────────────────────────────────────────────────────────────────────┤
│  PROCESSING                                                              │
│  Batch:     Apache Spark │ Apache Hadoop MapReduce │ Apache Hive         │
│  Streaming: Apache Flink │ Apache Kafka Streams │ Spark Streaming       │
├──────────────────────────────────────────────────────────────────────────┤
│  STORAGE                                                                 │
│  Distributed FS: HDFS │ AWS S3 │ GCS                                    │
│  NoSQL:          HBase │ Apache Cassandra │ MongoDB │ DynamoDB           │
│  RDBMS:          PostgreSQL │ MySQL (for smaller datasets)               │
│  Cache:          Redis │ Memcached                                       │
├──────────────────────────────────────────────────────────────────────────┤
│  QUERY & ANALYTICS                                                       │
│  Apache Hive │ Apache Spark SQL │ Presto/Trino │ Apache Drill │ BigQuery │
├──────────────────────────────────────────────────────────────────────────┤
│  MACHINE LEARNING                                                        │
│  Spark MLlib │ TensorFlow on Spark │ H2O.ai │ Apache Mahout             │
├──────────────────────────────────────────────────────────────────────────┤
│  ORCHESTRATION & WORKFLOW                                                │
│  Apache Airflow │ Apache Oozie │ Luigi │ Prefect │ Dagster               │
├──────────────────────────────────────────────────────────────────────────┤
│  MONITORING & GOVERNANCE                                                 │
│  Apache Ranger │ Apache Atlas │ Prometheus + Grafana │ Cloudera          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Technology Selection Guide

| Use Case | Recommended Tool |
|---|---|
| Batch ETL processing | Apache Spark |
| Real-time event streaming | Apache Kafka + Flink |
| Large-scale SQL analytics | Apache Hive / Presto / Spark SQL |
| Time-series data | Apache Cassandra / InfluxDB |
| Graph data | Apache TinkerPop / Neo4j |
| ML on big data | Spark MLlib |
| Data ingestion from RDBMS | Apache Sqoop / Debezium |
| Log aggregation | Kafka + ELK Stack |
| Workflow orchestration | Apache Airflow |

---

## 4. CAP Theorem & Distributed Systems Basics

### CAP Theorem

In a distributed system, you can only **guarantee 2 out of 3** properties simultaneously:

```
         Consistency
              /\
             /  \
            /    \
           /      \
          /   CAP  \
         / Theorem  \
        /────────────\
Availability    Partition
                Tolerance

C = All nodes see the same data at the same time
A = Every request receives a response (not necessarily latest data)
P = System continues operating despite network partitions
```

| System | Type | Example |
|---|---|---|
| **CP** (Consistent + Partition Tolerant) | Sacrifices availability | HBase, ZooKeeper, MongoDB (w/ strong consistency) |
| **AP** (Available + Partition Tolerant) | Sacrifices consistency | Cassandra, CouchDB, DynamoDB |
| **CA** (Consistent + Available) | Not partition tolerant | Traditional RDBMS (single node) |

> In real distributed systems, network partitions WILL happen, so P is a must. The real choice is between C and A.

### Key Distributed Systems Concepts

```
Replication    → Copy data across multiple nodes for fault tolerance
Sharding       → Split data across nodes for horizontal scaling
Partitioning   → Divide dataset into logical partitions
Consensus      → Agreement among distributed nodes (Paxos, Raft)
Leader Election → Choose one coordinator node
Eventual Consistency → All nodes converge to same state eventually
```

### Data Partitioning Strategies

```java
// 1. Range Partitioning — partition by value range
// userId 1-1000000 → Node A
// userId 1000001-2000000 → Node B

// 2. Hash Partitioning — deterministic distribution
int partition = Math.abs(key.hashCode()) % numPartitions;

// 3. Round-Robin — sequential distribution
int partition = recordNumber % numPartitions;

// 4. Consistent Hashing — minimize rebalancing on node addition/removal
// Used by Cassandra and Kafka
```

---

---

# PART 2 — HADOOP ECOSYSTEM

---

## 5. Hadoop Core Concepts

Apache Hadoop is an open-source framework for distributed storage and processing of very large datasets using clusters of commodity hardware.

### Core Components

```
┌─────────────────────────────────────────────┐
│              APACHE HADOOP                  │
│                                             │
│  ┌─────────────┐    ┌─────────────────────┐ │
│  │    HDFS     │    │      MapReduce      │ │
│  │ (Storage)   │    │    (Processing)     │ │
│  └─────────────┘    └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │              YARN                   │   │
│  │       (Resource Management)        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │           Hadoop Common             │   │
│  │       (Shared Utilities)            │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Hadoop Cluster Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      HADOOP CLUSTER                              │
│                                                                  │
│  ┌──────────────────────────────────┐                          │
│  │         Master Node              │                          │
│  │  ┌────────────┐ ┌─────────────┐ │                          │
│  │  │ NameNode   │ │ResourceMgr  │ │                          │
│  │  │(HDFS meta) │ │  (YARN)     │ │                          │
│  │  └────────────┘ └─────────────┘ │                          │
│  └──────────────────────────────────┘                          │
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │  Worker Node │ │  Worker Node │ │  Worker Node │  ...       │
│  │ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │           │
│  │ │DataNode  │ │ │ │DataNode  │ │ │ │DataNode  │ │           │
│  │ │(HDFS)    │ │ │ │(HDFS)    │ │ │ │(HDFS)    │ │           │
│  │ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │           │
│  │ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │           │
│  │ │NodeMgr   │ │ │ │NodeMgr   │ │ │ │NodeMgr   │ │           │
│  │ │(YARN)    │ │ │ │(YARN)    │ │ │ │(YARN)    │ │           │
│  │ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

### Maven Dependencies

```xml
<dependencies>
    <!-- Hadoop Common -->
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-common</artifactId>
        <version>3.3.6</version>
    </dependency>
    <!-- Hadoop HDFS -->
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-hdfs</artifactId>
        <version>3.3.6</version>
    </dependency>
    <!-- Hadoop MapReduce -->
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-mapreduce-client-core</artifactId>
        <version>3.3.6</version>
    </dependency>
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-mapreduce-client-jobclient</artifactId>
        <version>3.3.6</version>
    </dependency>
</dependencies>
```

---

## 6. HDFS — Hadoop Distributed File System

HDFS splits large files into blocks (default 128MB) and distributes them across cluster nodes with replication (default factor 3).

```
File: sales-data.csv (1.2 GB)
           │
           ▼  Split into 128MB blocks
  ┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
  │ B1 │ B2 │ B3 │ B4 │ B5 │ B6 │ B7 │ B8 │ B9 │B10│
  └────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘
           │  Replicate each block 3 times
           ▼
  B1 → Node1, Node2, Node3
  B2 → Node2, Node3, Node4
  B3 → Node1, Node3, Node5
  ...
```

### HDFS Java API

```java
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;

public class HdfsOperations {

    private final FileSystem fileSystem;

    public HdfsOperations() throws IOException {
        Configuration conf = new Configuration();
        conf.set("fs.defaultFS", "hdfs://namenode:9000");
        conf.set("dfs.replication", "3");
        this.fileSystem = FileSystem.get(conf);
    }

    // ── Upload file to HDFS ────────────────────────────────────
    public void uploadFile(String localPath, String hdfsPath) throws IOException {
        Path src = new Path(localPath);
        Path dst = new Path(hdfsPath);
        fileSystem.copyFromLocalFile(src, dst);
        System.out.println("Uploaded: " + localPath + " → " + hdfsPath);
    }

    // ── Download file from HDFS ────────────────────────────────
    public void downloadFile(String hdfsPath, String localPath) throws IOException {
        Path src = new Path(hdfsPath);
        Path dst = new Path(localPath);
        fileSystem.copyToLocalFile(src, dst);
    }

    // ── Read file from HDFS ────────────────────────────────────
    public void readFile(String hdfsPath) throws IOException {
        Path path = new Path(hdfsPath);
        try (FSDataInputStream inputStream = fileSystem.open(path);
             BufferedReader reader = new BufferedReader(
                     new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        }
    }

    // ── Write file to HDFS ────────────────────────────────────
    public void writeFile(String hdfsPath, List<String> lines) throws IOException {
        Path path = new Path(hdfsPath);
        try (FSDataOutputStream outputStream = fileSystem.create(path, true);
             BufferedWriter writer = new BufferedWriter(
                     new OutputStreamWriter(outputStream, StandardCharsets.UTF_8))) {
            for (String line : lines) {
                writer.write(line);
                writer.newLine();
            }
        }
    }

    // ── List directory ────────────────────────────────────────
    public void listDirectory(String hdfsPath) throws IOException {
        Path path = new Path(hdfsPath);
        FileStatus[] statuses = fileSystem.listStatus(path);
        for (FileStatus status : statuses) {
            System.out.printf("%-10s %10d %s%n",
                status.isDirectory() ? "DIR" : "FILE",
                status.getLen(),
                status.getPath().getName());
        }
    }

    // ── Create directory ──────────────────────────────────────
    public void createDirectory(String hdfsPath) throws IOException {
        fileSystem.mkdirs(new Path(hdfsPath));
    }

    // ── Delete file or directory ──────────────────────────────
    public void delete(String hdfsPath, boolean recursive) throws IOException {
        fileSystem.delete(new Path(hdfsPath), recursive);
    }

    // ── Check file existence ──────────────────────────────────
    public boolean exists(String hdfsPath) throws IOException {
        return fileSystem.exists(new Path(hdfsPath));
    }

    // ── Get file info ─────────────────────────────────────────
    public void fileInfo(String hdfsPath) throws IOException {
        FileStatus status = fileSystem.getFileStatus(new Path(hdfsPath));
        System.out.println("Path:         " + status.getPath());
        System.out.println("Size:         " + status.getLen() + " bytes");
        System.out.println("Block Size:   " + status.getBlockSize() + " bytes");
        System.out.println("Replication:  " + status.getReplication());
        System.out.println("Modified:     " + new Date(status.getModificationTime()));
        System.out.println("Owner:        " + status.getOwner());
        System.out.println("Permissions:  " + status.getPermission());
    }

    // ── Append to file ────────────────────────────────────────
    public void appendToFile(String hdfsPath, String data) throws IOException {
        Path path = new Path(hdfsPath);
        try (FSDataOutputStream out = fileSystem.append(path)) {
            out.write(data.getBytes(StandardCharsets.UTF_8));
        }
    }

    public void close() throws IOException {
        fileSystem.close();
    }
}
```

### HDFS Shell Commands

```bash
# List files
hdfs dfs -ls /user/data/

# Upload from local
hdfs dfs -put localfile.csv /user/data/

# Download to local
hdfs dfs -get /user/data/file.csv ./

# View file content
hdfs dfs -cat /user/data/file.csv
hdfs dfs -text /user/data/file.gz   # Auto-decompresses

# Create directory
hdfs dfs -mkdir -p /user/data/input

# Delete
hdfs dfs -rm /user/data/file.csv
hdfs dfs -rm -r /user/data/directory/

# Copy within HDFS
hdfs dfs -cp /user/data/src /user/data/dst

# Move within HDFS
hdfs dfs -mv /user/data/src /user/data/dst

# Check disk usage
hdfs dfs -du -h /user/data/
hdfs dfs -df -h

# Check file checksums
hdfs dfs -checksum /user/data/file.csv

# Get block locations
hdfs fsck /user/data/file.csv -files -blocks -locations

# HDFS admin report
hdfs dfsadmin -report
```

---

## 7. MapReduce Programming Model

MapReduce breaks computation into two phases: **Map** (transform) and **Reduce** (aggregate).

```
Input Data (HDFS)
     │
     │  Split into chunks (one per Mapper)
     ▼
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Mapper 1│  │ Mapper 2│  │ Mapper 3│
│ (hello,1)│  │(world, 1)│  │(hello,1)│
│ (world,1)│  │(spark,1) │  │(big,  1)│
└────┬────┘  └────┬────┘  └────┬────┘
     │              │             │
     └──────┬────────┴──────────┘
            │  Shuffle & Sort (by key)
            ▼
     ┌─────────────────┐
     │ big    → [1]    │
     │ hello  → [1,1]  │
     │ spark  → [1]    │
     │ world  → [1,1]  │
     └────────┬────────┘
              │
    ┌─────────┴─────────┐
    │ Reducer           │
    │ big   → 1         │
    │ hello → 2         │
    │ spark → 1         │
    │ world → 2         │
    └───────────────────┘
              │
           Output (HDFS)
```

### Word Count — Classic MapReduce Example

```java
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.*;
import org.apache.hadoop.mapreduce.lib.input.*;
import org.apache.hadoop.mapreduce.lib.output.*;

// ── Mapper ──────────────────────────────────────────────────────────
public class WordCountMapper extends Mapper<LongWritable, Text, Text, IntWritable> {

    private final Text word = new Text();
    private final IntWritable one = new IntWritable(1);

    @Override
    protected void map(LongWritable key, Text value, Context context)
            throws IOException, InterruptedException {

        // key = byte offset, value = one line of text
        String line = value.toString().toLowerCase();

        // Tokenize and emit (word, 1) for each word
        StringTokenizer tokenizer = new StringTokenizer(line, " \t\n\r\f,.!?;:\"'()[]{}");
        while (tokenizer.hasMoreTokens()) {
            String token = tokenizer.nextToken().trim();
            if (!token.isEmpty()) {
                word.set(token);
                context.write(word, one);  // Emit: (word, 1)
            }
        }
    }
}

// ── Combiner (optional local reducer — reduces data sent across network) ─
public class WordCountCombiner extends Reducer<Text, IntWritable, Text, IntWritable> {

    private final IntWritable result = new IntWritable();

    @Override
    protected void reduce(Text key, Iterable<IntWritable> values, Context context)
            throws IOException, InterruptedException {
        int sum = 0;
        for (IntWritable val : values) {
            sum += val.get();
        }
        result.set(sum);
        context.write(key, result);  // Locally aggregated count
    }
}

// ── Reducer ──────────────────────────────────────────────────────────
public class WordCountReducer extends Reducer<Text, IntWritable, Text, IntWritable> {

    private final IntWritable result = new IntWritable();

    @Override
    protected void reduce(Text key, Iterable<IntWritable> values, Context context)
            throws IOException, InterruptedException {
        // key = word, values = list of 1s from all mappers
        int sum = 0;
        for (IntWritable val : values) {
            sum += val.get();
        }
        result.set(sum);
        context.write(key, result);  // Emit: (word, total_count)
    }
}

// ── Driver — configures and submits the job ──────────────────────────
public class WordCountDriver {

    public static void main(String[] args) throws Exception {
        if (args.length != 2) {
            System.err.println("Usage: WordCount <input_path> <output_path>");
            System.exit(1);
        }

        Configuration conf = new Configuration();

        Job job = Job.getInstance(conf, "Word Count");
        job.setJarByClass(WordCountDriver.class);

        // Set Mapper, Combiner, Reducer
        job.setMapperClass(WordCountMapper.class);
        job.setCombinerClass(WordCountCombiner.class);  // Local reduction
        job.setReducerClass(WordCountReducer.class);

        // Set output key/value types
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        // Set input/output formats
        job.setInputFormatClass(TextInputFormat.class);
        job.setOutputFormatClass(TextOutputFormat.class);

        // Set number of reducers
        job.setNumReduceTasks(4);  // 4 parallel reducers

        // Set input/output paths
        FileInputFormat.addInputPath(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, new Path(args[1]));

        // Submit and wait
        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}
```

### Advanced MapReduce — Sales Analysis

```java
// Custom Writable for complex values
public class SalesRecord implements Writable {
    private double revenue;
    private int count;

    public SalesRecord() {}
    public SalesRecord(double revenue, int count) {
        this.revenue = revenue;
        this.count = count;
    }

    @Override
    public void write(DataOutput out) throws IOException {
        out.writeDouble(revenue);
        out.writeInt(count);
    }

    @Override
    public void readFields(DataInput in) throws IOException {
        this.revenue = in.readDouble();
        this.count = in.readInt();
    }

    public double getAvgRevenue() { return count > 0 ? revenue / count : 0; }
    // Getters, setters
}

// Mapper: Parse CSV, emit (product_category, SalesRecord)
public class SalesMapper extends Mapper<LongWritable, Text, Text, SalesRecord> {

    private final Text category = new Text();

    @Override
    protected void map(LongWritable key, Text value, Context context)
            throws IOException, InterruptedException {
        String line = value.toString();
        // Skip header
        if (line.startsWith("order_id")) return;

        String[] fields = line.split(",");
        if (fields.length < 5) return;

        try {
            String productCategory = fields[2].trim();
            double revenue = Double.parseDouble(fields[4].trim());
            category.set(productCategory);
            context.write(category, new SalesRecord(revenue, 1));
        } catch (NumberFormatException e) {
            context.getCounter("Error", "ParseError").increment(1);
        }
    }
}

// Reducer: Aggregate revenue and count per category
public class SalesReducer extends Reducer<Text, SalesRecord, Text, Text> {

    @Override
    protected void reduce(Text key, Iterable<SalesRecord> values, Context context)
            throws IOException, InterruptedException {
        double totalRevenue = 0;
        int totalCount = 0;

        for (SalesRecord record : values) {
            totalRevenue += record.getRevenue();
            totalCount += record.getCount();
        }

        double avgRevenue = totalCount > 0 ? totalRevenue / totalCount : 0;
        String result = String.format("total=%.2f, count=%d, avg=%.2f",
                totalRevenue, totalCount, avgRevenue);

        context.write(key, new Text(result));
    }
}
```

### Running MapReduce Job

```bash
# Compile and package
mvn clean package

# Submit to Hadoop cluster
hadoop jar target/wordcount-1.0.jar \
    com.example.WordCountDriver \
    /user/input/data/ \
    /user/output/wordcount

# Monitor job progress
hadoop job -list
hadoop job -status <job-id>
hadoop job -kill <job-id>

# View output
hdfs dfs -cat /user/output/wordcount/part-r-00000
```

---

## 8. YARN — Resource Management

**YARN (Yet Another Resource Negotiator)** manages cluster resources for multiple applications (MapReduce, Spark, etc.).

```
┌─────────────────────────────────────────────────────────────────┐
│                    Resource Manager (Master)                     │
│  ┌──────────────────┐    ┌───────────────────────────────────┐  │
│  │   Scheduler      │    │   Application Manager             │  │
│  │  (allocates      │    │  (accepts job submissions,        │  │
│  │   resources)     │    │   negotiates first container)     │  │
│  └──────────────────┘    └───────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                │ Allocates containers
                ▼
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│   Node Manager    │  │   Node Manager    │  │   Node Manager    │
│   (Worker Node)   │  │   (Worker Node)   │  │   (Worker Node)   │
│                   │  │                   │  │                   │
│ ┌───┐ ┌───┐ ┌───┐│  │ ┌───┐ ┌───┐ ┌───┐│  │ ┌───┐ ┌───┐ ┌───┐│
│ │Cnt│ │Cnt│ │Cnt││  │ │Cnt│ │Cnt│ │Cnt││  │ │Cnt│ │Cnt│ │Cnt││
│ │App│ │App│ │App││  │ │App│ │App│ │App││  │ │App│ │App│ │App││
│ │Mst│ │   │ │   ││  │ │   │ │   │ │   ││  │ │   │ │   │ │   ││
│ └───┘ └───┘ └───┘│  │ └───┘ └───┘ └───┘│  │ └───┘ └───┘ └───┘│
└───────────────────┘  └───────────────────┘  └───────────────────┘
      Cnt = Container (CPU + Memory unit)
      AppMst = Application Master (runs in one container)
```

---

## 9. Hadoop Java API

### Custom Input Format

```java
// Custom InputFormat for reading fixed-width records
public class FixedWidthInputFormat extends FileInputFormat<LongWritable, Text> {

    @Override
    public RecordReader<LongWritable, Text> createRecordReader(
            InputSplit split, TaskAttemptContext context) {
        return new FixedWidthRecordReader(100); // 100 bytes per record
    }
}

public class FixedWidthRecordReader extends RecordReader<LongWritable, Text> {

    private final int recordLength;
    private FSDataInputStream inputStream;
    private long start, end, current;
    private LongWritable currentKey = new LongWritable();
    private Text currentValue = new Text();

    public FixedWidthRecordReader(int recordLength) {
        this.recordLength = recordLength;
    }

    @Override
    public void initialize(InputSplit split, TaskAttemptContext context) throws IOException {
        FileSplit fileSplit = (FileSplit) split;
        start = fileSplit.getStart();
        end = start + fileSplit.getLength();
        current = start;

        Configuration conf = context.getConfiguration();
        FileSystem fs = fileSplit.getPath().getFileSystem(conf);
        inputStream = fs.open(fileSplit.getPath());
        inputStream.seek(start);
    }

    @Override
    public boolean nextKeyValue() throws IOException {
        if (current >= end) return false;
        byte[] buffer = new byte[recordLength];
        int bytesRead = inputStream.read(buffer);
        if (bytesRead <= 0) return false;

        currentKey.set(current);
        currentValue.set(new String(buffer, 0, bytesRead, StandardCharsets.UTF_8));
        current += bytesRead;
        return true;
    }

    @Override
    public LongWritable getCurrentKey() { return currentKey; }
    @Override
    public Text getCurrentValue() { return currentValue; }
    @Override
    public float getProgress() {
        return end == start ? 0 : (float)(current - start) / (end - start);
    }
    @Override
    public void close() throws IOException { inputStream.close(); }
}
```

### Hadoop Configuration & Counters

```java
// Using counters for monitoring and validation
public class DataQualityMapper extends Mapper<LongWritable, Text, Text, IntWritable> {

    // Define counter groups
    enum DataQualityCounters {
        VALID_RECORDS,
        NULL_VALUES,
        PARSE_ERRORS,
        RECORDS_PROCESSED
    }

    @Override
    protected void map(LongWritable key, Text value, Context context)
            throws IOException, InterruptedException {
        context.getCounter(DataQualityCounters.RECORDS_PROCESSED).increment(1);

        String line = value.toString();
        String[] fields = line.split(",");

        if (fields.length < 5) {
            context.getCounter(DataQualityCounters.PARSE_ERRORS).increment(1);
            return;
        }

        boolean hasNull = false;
        for (String field : fields) {
            if (field == null || field.trim().isEmpty()) {
                context.getCounter(DataQualityCounters.NULL_VALUES).increment(1);
                hasNull = true;
            }
        }

        if (!hasNull) {
            context.getCounter(DataQualityCounters.VALID_RECORDS).increment(1);
            context.write(new Text(fields[0]), new IntWritable(1));
        }
    }
}

// Reading counter values after job completion
public class JobRunner {
    public static void main(String[] args) throws Exception {
        Job job = createJob();
        boolean success = job.waitForCompletion(true);

        if (success) {
            Counters counters = job.getCounters();
            CounterGroup group = counters.getGroup("DataQualityCounters");
            System.out.println("Total Processed: " + group.findCounter("RECORDS_PROCESSED").getValue());
            System.out.println("Valid Records:   " + group.findCounter("VALID_RECORDS").getValue());
            System.out.println("Parse Errors:    " + group.findCounter("PARSE_ERRORS").getValue());
            System.out.println("Null Values:     " + group.findCounter("NULL_VALUES").getValue());
        }
    }
}
```

---

---

# PART 3 — APACHE SPARK

---

## 10. Spark Architecture & Core Concepts

Apache Spark is a fast, in-memory distributed computing engine that is 10–100x faster than MapReduce for many workloads.

### Why Spark Over MapReduce?

```
MapReduce:               Spark:
  Read from HDFS    →     Read from HDFS/memory
  Map               →     Transformation (lazy)
  Write to HDFS     →     Keep in memory (RDD/DataFrame)
  Read from HDFS    →     Next transformation
  Reduce            →     Action (triggers execution)
  Write to HDFS     →     Write to output

Each MapReduce step = disk I/O
Each Spark step = memory operation (100x faster!)
```

### Spark Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                    SPARK APPLICATION                           │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                   Driver Program                         │ │
│  │  ┌───────────────────────────────────────────────────┐  │ │
│  │  │            SparkContext / SparkSession            │  │ │
│  │  │  (entry point — creates RDDs, DataFrames, jobs)  │  │ │
│  │  └───────────────────────────────────────────────────┘  │ │
│  │              │ Submits Tasks                             │ │
│  └──────────────┼──────────────────────────────────────────┘ │
│                 │                                             │
│         ┌───────┴────────┐  Cluster Manager                  │
│         │ YARN / Mesos / │  (allocates resources)            │
│         │  Kubernetes /  │                                   │
│         │  Standalone    │                                   │
│         └───────┬────────┘                                   │
│                 │  Launches Executors                        │
│    ┌────────────┼─────────────────┐                         │
│    ▼            ▼                 ▼                         │
│ ┌──────┐   ┌──────┐         ┌──────┐                        │
│ │Execut│   │Execut│   ...   │Execut│  Worker Nodes         │
│ │  or  │   │  or  │         │  or  │  (run tasks,          │
│ │      │   │      │         │      │   store data)         │
│ │Task1 │   │Task2 │         │TaskN │                        │
│ │Task2 │   │Task3 │         │      │                        │
│ └──────┘   └──────┘         └──────┘                        │
└───────────────────────────────────────────────────────────────┘
```

### Lazy Evaluation

```
Spark is LAZY — transformations are not executed until an action is called.

Transformations (lazy):   map, filter, flatMap, groupBy, join, union, ...
Actions (trigger execution): collect, count, show, save, first, take, ...

Example:
  val rdd = sc.textFile("data.txt")      // Lazy — just a plan
         .filter(_.contains("ERROR"))    // Lazy — adds to plan
         .map(_.split(","))              // Lazy — adds to plan
         .count()                        // ACTION — executes the plan!
```

### Maven Dependencies

```xml
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-core_2.12</artifactId>
    <version>3.5.0</version>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-sql_2.12</artifactId>
    <version>3.5.0</version>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-streaming_2.12</artifactId>
    <version>3.5.0</version>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-mllib_2.12</artifactId>
    <version>3.5.0</version>
</dependency>
```

---

## 11. Spark RDD — Resilient Distributed Datasets

**RDD** is the fundamental data structure in Spark — an immutable, distributed collection of objects partitioned across cluster nodes.

```java
import org.apache.spark.*;
import org.apache.spark.api.java.*;
import org.apache.spark.api.java.function.*;

public class SparkRDDExamples {

    public static void main(String[] args) {

        // ── Create SparkContext ──────────────────────────────────────
        SparkConf conf = new SparkConf()
                .setAppName("RDD Examples")
                .setMaster("local[*]");  // local[*] = use all CPU cores
                // In production: .setMaster("yarn") or spark-submit with --master yarn

        JavaSparkContext sc = new JavaSparkContext(conf);
        sc.setLogLevel("WARN");  // Reduce log noise

        // ── Creating RDDs ─────────────────────────────────────────────

        // From collection
        JavaRDD<Integer> numbersRDD = sc.parallelize(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        // From file (HDFS or local)
        JavaRDD<String> linesRDD = sc.textFile("hdfs://namenode:9000/data/logs/app.log");

        // From multiple files
        JavaRDD<String> multiRDD = sc.textFile("hdfs:///data/logs/app-2024-01-*.log");

        // ── Transformations (Lazy) ────────────────────────────────────

        // map — transform each element
        JavaRDD<String> upperRDD = linesRDD.map(line -> line.toUpperCase());

        // filter — keep elements matching condition
        JavaRDD<String> errorLogs = linesRDD.filter(line -> line.contains("ERROR"));

        // flatMap — each element can produce 0 or more outputs
        JavaRDD<String> wordsRDD = linesRDD.flatMap(
                line -> Arrays.asList(line.split(" ")).iterator());

        // distinct — remove duplicates
        JavaRDD<String> uniqueWords = wordsRDD.distinct();

        // sample — random sample
        JavaRDD<String> sampleRDD = linesRDD.sample(false, 0.1); // 10% sample

        // union — combine two RDDs
        JavaRDD<String> errorRDD = linesRDD.filter(l -> l.contains("ERROR"));
        JavaRDD<String> warnRDD = linesRDD.filter(l -> l.contains("WARN"));
        JavaRDD<String> combined = errorRDD.union(warnRDD);

        // mapPartitions — more efficient than map for expensive setup
        JavaRDD<String> processed = linesRDD.mapPartitions(iterator -> {
            // Setup expensive resources once per partition (e.g., DB connection)
            List<String> results = new ArrayList<>();
            while (iterator.hasNext()) {
                results.add(processLine(iterator.next()));
            }
            return results.iterator();
        });

        // ── Pair RDD (Key-Value) ──────────────────────────────────────

        // Create PairRDD
        JavaPairRDD<String, Integer> wordPairs = wordsRDD
                .mapToPair(word -> new Tuple2<>(word, 1));

        // reduceByKey — aggregate values by key
        JavaPairRDD<String, Integer> wordCounts = wordPairs
                .reduceByKey((a, b) -> a + b);

        // groupByKey — group all values by key (avoid if possible — use reduceByKey)
        JavaPairRDD<String, Iterable<Integer>> grouped = wordPairs.groupByKey();

        // sortByKey — sort by key
        JavaPairRDD<String, Integer> sorted = wordCounts.sortByKey(true); // ascending

        // join — inner join two PairRDDs
        JavaPairRDD<String, Integer> salesRDD = sc.parallelizePairs(
                Arrays.asList(new Tuple2<>("A", 100), new Tuple2<>("B", 200)));
        JavaPairRDD<String, String> regionRDD = sc.parallelizePairs(
                Arrays.asList(new Tuple2<>("A", "North"), new Tuple2<>("B", "South")));

        JavaPairRDD<String, Tuple2<Integer, String>> joinedRDD = salesRDD.join(regionRDD);
        // Result: (A, (100, North)), (B, (200, South))

        // leftOuterJoin, rightOuterJoin, fullOuterJoin
        JavaPairRDD<String, Tuple2<Integer, Optional<String>>> leftJoined =
                salesRDD.leftOuterJoin(regionRDD);

        // aggregateByKey — flexible aggregation
        JavaPairRDD<String, Double> avgSalesByRegion = salesRDD.aggregateByKey(
                new Tuple2<>(0.0, 0),    // Zero value: (sum, count)
                (acc, val) -> new Tuple2<>(acc._1 + val, acc._2 + 1),  // Seq op
                (acc1, acc2) -> new Tuple2<>(acc1._1 + acc2._1, acc1._2 + acc2._2)  // Comb op
        ).mapValues(t -> t._1 / t._2);  // Calculate average

        // ── Actions (Trigger Execution) ───────────────────────────────

        long errorCount = errorLogs.count();
        System.out.println("Error count: " + errorCount);

        List<String> firstErrors = errorLogs.take(10);  // Take first 10
        String firstError = errorLogs.first();          // Take first 1
        List<String> allErrors = errorLogs.collect();   // Collect to driver (careful!)

        // Save to file
        wordCounts.saveAsTextFile("hdfs:///output/wordcounts/");

        // Reduce
        int totalCount = numbersRDD.reduce((a, b) -> a + b);
        System.out.println("Sum: " + totalCount);  // 55

        // CountByValue
        Map<Integer, Long> countByVal = numbersRDD.countByValue();

        // foreach — side effects (printing, writing to DB)
        wordCounts.foreach(pair ->
                System.out.println(pair._1 + ": " + pair._2));

        // ── Caching / Persistence ──────────────────────────────────────

        // Cache RDD in memory (for reuse)
        JavaRDD<String> cachedErrors = errorLogs.cache();  // = persist(MEMORY_ONLY)

        // Different storage levels
        JavaRDD<String> diskCached = errorLogs.persist(StorageLevel.DISK_ONLY());
        JavaRDD<String> memDisk = errorLogs.persist(StorageLevel.MEMORY_AND_DISK());
        JavaRDD<String> serialized = errorLogs.persist(StorageLevel.MEMORY_ONLY_SER());

        // Unpersist when no longer needed
        cachedErrors.unpersist();

        sc.close();
    }
}
```

---

## 12. Spark DataFrames & Datasets

**DataFrames** and **Datasets** are higher-level APIs built on top of RDDs with schema information and SQL-style operations.

```java
import org.apache.spark.sql.*;
import org.apache.spark.sql.types.*;
import static org.apache.spark.sql.functions.*;

public class SparkDataFrameExamples {

    public static void main(String[] args) {

        // ── Create SparkSession ──────────────────────────────────────
        SparkSession spark = SparkSession.builder()
                .appName("DataFrame Examples")
                .master("local[*]")
                .config("spark.sql.shuffle.partitions", "8")  // Tune for cluster size
                .config("spark.sql.adaptive.enabled", "true") // Enable AQE
                .getOrCreate();

        // ── Creating DataFrames ───────────────────────────────────────

        // From JSON
        Dataset<Row> jsonDF = spark.read()
                .option("multiline", "true")
                .json("hdfs:///data/users.json");

        // From CSV
        Dataset<Row> csvDF = spark.read()
                .option("header", "true")
                .option("inferSchema", "true")
                .option("sep", ",")
                .option("nullValue", "NA")
                .csv("hdfs:///data/sales.csv");

        // From Parquet (columnar format — very efficient)
        Dataset<Row> parquetDF = spark.read()
                .parquet("hdfs:///data/events.parquet");

        // Define explicit schema (better than inferSchema for production)
        StructType schema = new StructType()
                .add("order_id", DataTypes.LongType, false)
                .add("user_id", DataTypes.LongType, false)
                .add("product", DataTypes.StringType, true)
                .add("quantity", DataTypes.IntegerType, true)
                .add("price", DataTypes.DoubleType, true)
                .add("order_date", DataTypes.DateType, true);

        Dataset<Row> ordersDF = spark.read()
                .schema(schema)
                .option("header", "true")
                .csv("hdfs:///data/orders.csv");

        // From Java objects (JavaBean)
        List<User> users = Arrays.asList(
                new User(1L, "Alice", 30, "alice@example.com"),
                new User(2L, "Bob", 25, "bob@example.com"),
                new User(3L, "Charlie", 35, "charlie@example.com")
        );
        Dataset<Row> usersDF = spark.createDataFrame(users, User.class);

        // ── Basic Operations ──────────────────────────────────────────

        // Show schema and data
        ordersDF.printSchema();
        ordersDF.show(20);           // Show first 20 rows
        ordersDF.show(10, false);    // Don't truncate columns

        // Select columns
        ordersDF.select("order_id", "product", "price").show();
        ordersDF.select(col("order_id"), col("price").multiply(1.1).as("price_with_tax")).show();

        // Filter rows
        Dataset<Row> expensiveOrders = ordersDF.filter(col("price").gt(100.0));
        Dataset<Row> filtered = ordersDF.filter("price > 100 AND quantity > 1");

        // Add new column
        Dataset<Row> withTotal = ordersDF.withColumn("total",
                col("price").multiply(col("quantity")));

        // Rename column
        Dataset<Row> renamed = ordersDF.withColumnRenamed("order_date", "date");

        // Drop column
        Dataset<Row> dropped = ordersDF.drop("internal_field");

        // Order by
        Dataset<Row> sorted = ordersDF.orderBy(col("price").desc(), col("order_id").asc());

        // Limit
        Dataset<Row> topTen = ordersDF.orderBy(col("price").desc()).limit(10);

        // Distinct
        Dataset<Row> distinctProducts = ordersDF.select("product").distinct();

        // ── Aggregations ──────────────────────────────────────────────

        // Group by + aggregations
        Dataset<Row> salesByProduct = ordersDF
                .groupBy("product")
                .agg(
                    count("order_id").as("order_count"),
                    sum("quantity").as("total_quantity"),
                    sum(col("price").multiply(col("quantity"))).as("total_revenue"),
                    avg("price").as("avg_price"),
                    max("price").as("max_price"),
                    min("price").as("min_price")
                )
                .orderBy(col("total_revenue").desc());

        salesByProduct.show();

        // Multiple group by keys
        Dataset<Row> salesByRegionProduct = ordersDF
                .groupBy("region", "product")
                .agg(
                    sum("price").as("revenue"),
                    count("*").as("orders")
                );

        // Pivot table
        Dataset<Row> pivotTable = ordersDF
                .groupBy("region")
                .pivot("product", Arrays.asList("Laptop", "Phone", "Tablet"))
                .agg(sum("price"));

        // ── Window Functions ──────────────────────────────────────────

        WindowSpec windowSpec = Window
                .partitionBy("product")
                .orderBy(col("order_date").asc());

        Dataset<Row> withRankAndRunning = ordersDF.withColumn(
                        "rank", rank().over(windowSpec))
                .withColumn("running_total",
                        sum("price").over(windowSpec))
                .withColumn("lag_price",
                        lag("price", 1).over(windowSpec))
                .withColumn("lead_price",
                        lead("price", 1).over(windowSpec));

        // ── Joins ─────────────────────────────────────────────────────

        Dataset<Row> productsDF = spark.read().json("hdfs:///data/products.json");

        // Inner join
        Dataset<Row> enrichedOrders = ordersDF.join(productsDF,
                ordersDF.col("product").equalTo(productsDF.col("product_name")),
                "inner");

        // Left outer join
        Dataset<Row> leftJoin = ordersDF.join(productsDF,
                ordersDF.col("product").equalTo(productsDF.col("product_name")),
                "left_outer");

        // Broadcast join (for small tables — avoids shuffle)
        Dataset<Row> broadcastJoin = ordersDF.join(
                broadcast(productsDF),
                ordersDF.col("product").equalTo(productsDF.col("product_name")));

        // ── Writing DataFrames ────────────────────────────────────────

        // Write to Parquet (recommended format)
        withTotal.write()
                .mode(SaveMode.Overwrite)
                .partitionBy("order_date")  // Partition output by date
                .parquet("hdfs:///output/orders_enriched/");

        // Write to CSV
        withTotal.write()
                .mode(SaveMode.Append)
                .option("header", "true")
                .csv("hdfs:///output/orders_csv/");

        // Write to JSON
        withTotal.coalesce(1)   // Merge to single file
                .write()
                .mode(SaveMode.Overwrite)
                .json("hdfs:///output/orders_json/");

        spark.stop();
    }
}
```

### Typed Dataset API

```java
// Define Java Bean for typed operations
public class Order implements Serializable {
    private Long orderId;
    private Long userId;
    private String product;
    private Integer quantity;
    private Double price;
    // Getters, Setters required for Spark Encoder
}

public class TypedDatasetExample {
    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder().appName("Typed").master("local[*]").getOrCreate();
        Encoder<Order> orderEncoder = Encoders.bean(Order.class);

        // Create typed Dataset<Order>
        Dataset<Order> ordersDS = spark.read()
                .option("header", "true")
                .csv("hdfs:///data/orders.csv")
                .as(orderEncoder);  // Converts to typed Dataset

        // Typed operations — compile-time type checking!
        Dataset<Order> expensiveOrders = ordersDS
                .filter((FilterFunction<Order>) order -> order.getPrice() > 100.0);

        Dataset<Double> revenues = ordersDS
                .map((MapFunction<Order, Double>) order ->
                        order.getPrice() * order.getQuantity(),
                     Encoders.DOUBLE());

        // Converts back to DataFrame for SQL ops
        Dataset<Row> df = ordersDS.toDF();
    }
}
```

---

## 13. Spark SQL

```java
public class SparkSQLExamples {

    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder()
                .appName("Spark SQL")
                .master("local[*]")
                .enableHiveSupport()    // Connect to Hive Metastore
                .getOrCreate();

        // Register as temp view
        Dataset<Row> ordersDF = spark.read().parquet("hdfs:///data/orders/");
        ordersDF.createOrReplaceTempView("orders");

        Dataset<Row> usersDF = spark.read().parquet("hdfs:///data/users/");
        usersDF.createOrReplaceTempView("users");

        // ── SQL Queries ───────────────────────────────────────────────

        // Basic SQL
        Dataset<Row> result = spark.sql("""
            SELECT
                product,
                COUNT(*) as order_count,
                SUM(price * quantity) as total_revenue,
                AVG(price) as avg_price
            FROM orders
            WHERE order_date >= '2024-01-01'
              AND status = 'COMPLETED'
            GROUP BY product
            HAVING COUNT(*) > 100
            ORDER BY total_revenue DESC
            LIMIT 20
        """);

        result.show();

        // SQL with JOINs
        Dataset<Row> joinedResult = spark.sql("""
            SELECT
                u.user_id,
                u.name,
                u.region,
                COUNT(o.order_id) as total_orders,
                SUM(o.price) as total_spent,
                MAX(o.order_date) as last_order_date
            FROM users u
            LEFT JOIN orders o ON u.user_id = o.user_id
            WHERE u.status = 'ACTIVE'
            GROUP BY u.user_id, u.name, u.region
            ORDER BY total_spent DESC
        """);

        // SQL with Window Functions
        Dataset<Row> windowResult = spark.sql("""
            SELECT
                product,
                order_date,
                price,
                SUM(price) OVER (
                    PARTITION BY product
                    ORDER BY order_date
                    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
                ) as running_total,
                RANK() OVER (
                    PARTITION BY product
                    ORDER BY price DESC
                ) as price_rank
            FROM orders
        """);

        // SQL with Subqueries
        Dataset<Row> subqueryResult = spark.sql("""
            SELECT *
            FROM orders
            WHERE user_id IN (
                SELECT user_id
                FROM users
                WHERE region = 'North' AND status = 'PREMIUM'
            )
            AND price > (
                SELECT AVG(price) FROM orders
            )
        """);

        // Common Table Expressions (CTE)
        Dataset<Row> cteResult = spark.sql("""
            WITH monthly_sales AS (
                SELECT
                    DATE_TRUNC('month', order_date) as month,
                    product,
                    SUM(price * quantity) as revenue
                FROM orders
                GROUP BY DATE_TRUNC('month', order_date), product
            ),
            ranked_products AS (
                SELECT
                    month,
                    product,
                    revenue,
                    RANK() OVER (PARTITION BY month ORDER BY revenue DESC) as rank
                FROM monthly_sales
            )
            SELECT month, product, revenue
            FROM ranked_products
            WHERE rank <= 5
            ORDER BY month, rank
        """);

        cteResult.show(50, false);

        // ── Global Temporary Views (across sessions) ──────────────────
        ordersDF.createOrReplaceGlobalTempView("global_orders");
        spark.sql("SELECT COUNT(*) FROM global_temp.global_orders").show();

        // ── Hive Tables ───────────────────────────────────────────────
        // Create external Hive table
        spark.sql("""
            CREATE EXTERNAL TABLE IF NOT EXISTS sales_data (
                order_id BIGINT,
                user_id BIGINT,
                product STRING,
                quantity INT,
                price DOUBLE
            )
            STORED AS PARQUET
            LOCATION 'hdfs:///data/sales/'
        """);

        // Read Hive table
        Dataset<Row> hiveData = spark.table("default.sales_data");

        spark.stop();
    }
}
```

---

## 14. Spark Streaming

### Structured Streaming (Modern API)

```java
import org.apache.spark.sql.streaming.*;

public class SparkStructuredStreamingExample {

    public static void main(String[] args) throws Exception {
        SparkSession spark = SparkSession.builder()
                .appName("Structured Streaming")
                .master("local[*]")
                .getOrCreate();

        // ── Read from Kafka ───────────────────────────────────────────
        Dataset<Row> kafkaStream = spark.readStream()
                .format("kafka")
                .option("kafka.bootstrap.servers", "kafka1:9092,kafka2:9092")
                .option("subscribe", "order-events")
                .option("startingOffsets", "latest")
                .option("maxOffsetsPerTrigger", 100000)  // Backpressure
                .load();

        // ── Parse JSON from Kafka ─────────────────────────────────────
        StructType orderSchema = new StructType()
                .add("order_id", DataTypes.LongType)
                .add("user_id", DataTypes.LongType)
                .add("product", DataTypes.StringType)
                .add("quantity", DataTypes.IntegerType)
                .add("price", DataTypes.DoubleType)
                .add("timestamp", DataTypes.TimestampType);

        Dataset<Row> orders = kafkaStream
                .select(from_json(
                        col("value").cast("string"),
                        orderSchema
                ).as("data"))
                .select("data.*")
                .withColumn("event_time", col("timestamp"));

        // ── Windowed Aggregation ──────────────────────────────────────
        // Count orders per product per 5-minute window, update every minute
        Dataset<Row> windowedCounts = orders
                .withWatermark("event_time", "10 minutes")  // Late data tolerance
                .groupBy(
                    window(col("event_time"), "5 minutes", "1 minute"),  // 5-min window, 1-min slide
                    col("product")
                )
                .agg(
                    count("order_id").as("order_count"),
                    sum(col("price").multiply(col("quantity"))).as("revenue")
                )
                .select(
                    col("window.start").as("window_start"),
                    col("window.end").as("window_end"),
                    col("product"),
                    col("order_count"),
                    col("revenue")
                );

        // ── Write Stream to Console (for testing) ─────────────────────
        StreamingQuery consoleQuery = windowedCounts
                .writeStream()
                .outputMode("update")   // update, append, complete
                .format("console")
                .option("truncate", "false")
                .trigger(Trigger.ProcessingTime("1 minute"))
                .start();

        // ── Write Stream to Kafka ──────────────────────────────────────
        StreamingQuery kafkaOutput = windowedCounts
                .select(to_json(struct("*")).as("value"))
                .writeStream()
                .format("kafka")
                .option("kafka.bootstrap.servers", "kafka1:9092")
                .option("topic", "order-metrics")
                .option("checkpointLocation", "hdfs:///checkpoints/order-metrics/")
                .outputMode("update")
                .trigger(Trigger.ProcessingTime("30 seconds"))
                .start();

        // ── Write Stream to Parquet (Data Lake) ───────────────────────
        StreamingQuery parquetOutput = orders
                .writeStream()
                .format("parquet")
                .option("path", "hdfs:///data/streaming/orders/")
                .option("checkpointLocation", "hdfs:///checkpoints/orders/")
                .partitionBy("product")
                .outputMode("append")
                .trigger(Trigger.ProcessingTime("5 minutes"))
                .start();

        // ── Await Termination ──────────────────────────────────────────
        spark.streams().awaitAnyTermination();
    }
}
```

---

## 15. Spark MLlib — Machine Learning

```java
import org.apache.spark.ml.*;
import org.apache.spark.ml.classification.*;
import org.apache.spark.ml.evaluation.*;
import org.apache.spark.ml.feature.*;
import org.apache.spark.ml.regression.*;
import org.apache.spark.ml.tuning.*;

public class SparkMLlibExample {

    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder()
                .appName("Spark MLlib")
                .master("local[*]")
                .getOrCreate();

        // ── Load & Prepare Data ────────────────────────────────────────
        Dataset<Row> rawData = spark.read()
                .option("header", "true")
                .option("inferSchema", "true")
                .csv("hdfs:///data/customer_churn.csv");

        // ── Feature Engineering Pipeline ──────────────────────────────

        // String indexer — convert categorical to numeric
        StringIndexer regionIndexer = new StringIndexer()
                .setInputCol("region")
                .setOutputCol("region_index")
                .setHandleInvalid("keep");

        // One-hot encoder
        OneHotEncoder regionEncoder = new OneHotEncoder()
                .setInputCol("region_index")
                .setOutputCol("region_vec");

        // Imputer — fill missing values
        Imputer imputer = new Imputer()
                .setInputCols(new String[]{"age", "tenure", "monthly_charges"})
                .setOutputCols(new String[]{"age_imp", "tenure_imp", "charges_imp"})
                .setStrategy("mean");

        // Vector assembler — combine features into single vector
        VectorAssembler assembler = new VectorAssembler()
                .setInputCols(new String[]{
                    "region_vec", "age_imp", "tenure_imp", "charges_imp"
                })
                .setOutputCol("features_raw")
                .setHandleInvalid("skip");

        // Scaler — normalize features
        StandardScaler scaler = new StandardScaler()
                .setInputCol("features_raw")
                .setOutputCol("features")
                .setWithMean(true)
                .setWithStd(true);

        // Logistic Regression model
        LogisticRegression lr = new LogisticRegression()
                .setFeaturesCol("features")
                .setLabelCol("churned")
                .setMaxIter(100)
                .setRegParam(0.01);

        // Assemble pipeline
        Pipeline pipeline = new Pipeline().setStages(new PipelineStage[]{
                regionIndexer,
                regionEncoder,
                imputer,
                assembler,
                scaler,
                lr
        });

        // ── Train/Test Split ──────────────────────────────────────────
        Dataset<Row>[] splits = rawData.randomSplit(new double[]{0.8, 0.2}, 42L);
        Dataset<Row> trainingData = splits[0];
        Dataset<Row> testData = splits[1];

        // ── Hyperparameter Tuning ──────────────────────────────────────
        ParamMap[] paramGrid = new ParamGridBuilder()
                .addGrid(lr.regParam(), new double[]{0.001, 0.01, 0.1})
                .addGrid(lr.maxIter(), new int[]{50, 100})
                .build();

        BinaryClassificationEvaluator evaluator = new BinaryClassificationEvaluator()
                .setLabelCol("churned")
                .setMetricName("areaUnderROC");

        CrossValidator cv = new CrossValidator()
                .setEstimator(pipeline)
                .setEvaluator(evaluator)
                .setEstimatorParamMaps(paramGrid)
                .setNumFolds(5)
                .setParallelism(4);  // Run 4 folds in parallel

        // ── Train Model ───────────────────────────────────────────────
        CrossValidatorModel model = cv.fit(trainingData);

        // ── Evaluate Model ────────────────────────────────────────────
        Dataset<Row> predictions = model.transform(testData);
        predictions.select("churned", "prediction", "probability").show(20);

        double auc = evaluator.evaluate(predictions);
        System.out.printf("Area Under ROC: %.4f%n", auc);

        // Accuracy
        long correct = predictions.filter(col("churned").equalTo(col("prediction"))).count();
        long total = predictions.count();
        System.out.printf("Accuracy: %.4f%n", (double) correct / total);

        // ── Save & Load Model ──────────────────────────────────────────
        model.write().overwrite().save("hdfs:///models/churn-model/");
        CrossValidatorModel loadedModel = CrossValidatorModel.load("hdfs:///models/churn-model/");

        spark.stop();
    }
}
```

---

## 16. Spark Optimization & Tuning

```java
// ── Partitioning ──────────────────────────────────────────────────────
// Check current partitions
System.out.println("Partitions: " + df.rdd().getNumPartitions());

// Repartition (full shuffle) — use to increase or change partition key
Dataset<Row> repartitioned = df.repartition(100);
Dataset<Row> keyPartitioned = df.repartition(col("product_id"));

// Coalesce (no shuffle) — use only to REDUCE partitions
Dataset<Row> coalesced = df.coalesce(10);

// ── Broadcast Join ────────────────────────────────────────────────────
// For small tables (< 10MB), broadcast to all workers (no shuffle)
Dataset<Row> smallTable = spark.read().parquet("small_dim_table/");
Dataset<Row> bigTable = spark.read().parquet("large_fact_table/");

// Automatically broadcasts tables < spark.sql.autoBroadcastJoinThreshold
spark.conf().set("spark.sql.autoBroadcastJoinThreshold", 10485760); // 10MB

// Manually force broadcast
Dataset<Row> result = bigTable.join(broadcast(smallTable), "key");

// ── Caching ───────────────────────────────────────────────────────────
// Cache when DataFrame is used multiple times
Dataset<Row> filteredDF = df.filter("status = 'ACTIVE'").cache();
filteredDF.count();          // Materializes the cache

long activeCount = filteredDF.count();  // From cache
Dataset<Row> activeOrders = filteredDF.join(ordersDF, "user_id");  // From cache

filteredDF.unpersist();  // Free cache when done

// ── Avoiding Data Skew ────────────────────────────────────────────────
// Problem: One key has millions of records, others have few
// Check for skew:
df.groupBy("product_id")
  .count()
  .orderBy(col("count").desc())
  .show(20);

// Solution 1: Salting — add random suffix to skewed key
Dataset<Row> saltedDF = df
    .withColumn("salted_key",
        concat(col("product_id"), lit("_"),
        (rand().multiply(10).cast("int"))));

// Solution 2: Enable Adaptive Query Execution (Spark 3.0+)
spark.conf().set("spark.sql.adaptive.enabled", "true");
spark.conf().set("spark.sql.adaptive.skewJoin.enabled", "true");
spark.conf().set("spark.sql.adaptive.coalescePartitions.enabled", "true");

// ── Kryo Serialization (faster than Java serialization) ──────────────
SparkConf conf = new SparkConf()
    .set("spark.serializer", "org.apache.spark.serializer.KryoSerializer")
    .set("spark.kryo.registrationRequired", "false");

// ── Tuning spark-submit ───────────────────────────────────────────────
// spark-submit \
//   --master yarn \
//   --deploy-mode cluster \
//   --num-executors 20 \
//   --executor-cores 4 \
//   --executor-memory 8g \
//   --driver-memory 4g \
//   --conf spark.sql.shuffle.partitions=400 \
//   --conf spark.sql.adaptive.enabled=true \
//   --conf spark.default.parallelism=400 \
//   --conf spark.memory.fraction=0.8 \
//   --conf spark.memory.storageFraction=0.3 \
//   --class com.example.MySparkApp \
//   myapp.jar

// ── Column Pruning & Predicate Pushdown (automatic) ──────────────────
// Spark SQL automatically pushes filters to the source
// and selects only needed columns when reading Parquet/ORC
Dataset<Row> pruned = spark.read()
    .parquet("hdfs:///data/orders/")
    .select("order_id", "product", "price")  // Only reads these columns from Parquet
    .filter("price > 100");                   // Filter pushed to Parquet reader

// Verify with explain()
pruned.explain(true);   // Show physical execution plan
```

---

---

# PART 4 — APACHE KAFKA

---

## 17. Kafka Architecture & Core Concepts

Apache Kafka is a distributed event streaming platform for high-throughput, fault-tolerant, real-time data pipelines.

```
┌─────────────────────────────────────────────────────────────────────┐
│                      KAFKA CLUSTER                                   │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    ZooKeeper / KRaft                          │  │
│  │               (Cluster coordination, leader election)         │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │   Broker 1   │  │   Broker 2   │  │   Broker 3   │             │
│  │              │  │              │  │              │             │
│  │ Topic: orders│  │ Topic: orders│  │ Topic: orders│             │
│  │  Partition 0 │  │  Partition 1 │  │  Partition 2 │             │
│  │  (Leader)    │  │  (Leader)    │  │  (Leader)    │             │
│  │  Partition 1 │  │  Partition 0 │  │  Partition 1 │             │
│  │  (Follower)  │  │  (Follower)  │  │  (Follower)  │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
│                                                                      │
│  Producers ──────────────────────────────────── Consumers          │
│  (write to leader)                              (read from any)     │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Concepts

```
Topic        → Named category of messages (like a table in a DB)
Partition    → Topic is split into partitions for parallelism
Offset       → Unique sequential ID for each message in a partition
Broker       → Kafka server that stores and serves messages
Producer     → Application that writes messages to Kafka
Consumer     → Application that reads messages from Kafka
Consumer Group → Multiple consumers sharing the work (each partition = 1 consumer)
Leader       → The partition replica that handles reads/writes
Follower     → Replica that copies from the leader (for fault tolerance)
Replication Factor → How many copies of each partition exist
Retention    → How long Kafka keeps messages (time or size based)
Lag          → How far behind a consumer is (current offset - latest offset)
```

### Topic Partitioning Strategy

```
Topic: order-events (6 partitions, replication factor 3)

Producer sends order for userId=123
  → Hash(userId) % 6 = partition 3

All orders for userId=123 always go to partition 3
  → Guaranteed ordering per user!

Consumer Group A (6 consumers = 1 consumer per partition):
  Consumer 1 → Partition 0
  Consumer 2 → Partition 1
  ...
  Consumer 6 → Partition 5
  → Maximum parallelism!

Consumer Group B (2 consumers):
  Consumer 1 → Partitions 0,1,2
  Consumer 2 → Partitions 3,4,5
```

### Maven Dependencies

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>3.6.0</version>
</dependency>
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-streams</artifactId>
    <version>3.6.0</version>
</dependency>
```

---

## 18. Kafka Producer API in Java

```java
import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.*;

public class KafkaProducerExamples {

    // ── Basic Producer ─────────────────────────────────────────────────
    public static KafkaProducer<String, String> createProducer() {
        Properties props = new Properties();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "kafka1:9092,kafka2:9092,kafka3:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        // ── Reliability Settings ───────────────────────────────────────
        props.put(ProducerConfig.ACKS_CONFIG, "all");         // Wait for all replicas to confirm
        props.put(ProducerConfig.RETRIES_CONFIG, 3);          // Retry 3 times on failure
        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);  // Exactly-once delivery

        // ── Performance Settings ───────────────────────────────────────
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 65536);         // 64KB batch
        props.put(ProducerConfig.LINGER_MS_CONFIG, 5);              // Wait 5ms to fill batch
        props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy"); // Compress batches
        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 67108864);   // 64MB buffer

        // ── Timeout Settings ────────────────────────────────────────────
        props.put(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG, 30000);
        props.put(ProducerConfig.MAX_BLOCK_MS_CONFIG, 60000);

        return new KafkaProducer<>(props);
    }

    // ── Fire and Forget ────────────────────────────────────────────────
    public static void fireAndForget(KafkaProducer<String, String> producer) {
        ProducerRecord<String, String> record = new ProducerRecord<>(
                "order-events",      // topic
                "user-123",          // key (determines partition)
                "{\"orderId\":1001}" // value
        );
        producer.send(record);  // Async — don't wait for ack
    }

    // ── Synchronous Send ───────────────────────────────────────────────
    public static void synchronousSend(KafkaProducer<String, String> producer)
            throws Exception {
        ProducerRecord<String, String> record = new ProducerRecord<>(
                "order-events", "user-123", "{\"orderId\":1002}");

        // .get() blocks until broker confirms
        RecordMetadata metadata = producer.send(record).get();
        System.out.printf("Sent to topic=%s, partition=%d, offset=%d%n",
                metadata.topic(), metadata.partition(), metadata.offset());
    }

    // ── Asynchronous Send with Callback ────────────────────────────────
    public static void asyncSendWithCallback(KafkaProducer<String, String> producer) {
        ProducerRecord<String, String> record = new ProducerRecord<>(
                "order-events", "user-123", "{\"orderId\":1003}");

        producer.send(record, (metadata, exception) -> {
            if (exception != null) {
                System.err.println("Failed to send message: " + exception.getMessage());
                // Handle error: retry, log, alert
            } else {
                System.out.printf("Sent: partition=%d, offset=%d%n",
                        metadata.partition(), metadata.offset());
            }
        });
    }

    // ── Batch Producer (high throughput) ───────────────────────────────
    public static void batchProduce(KafkaProducer<String, String> producer,
                                     List<Order> orders) {
        for (Order order : orders) {
            String key = String.valueOf(order.getUserId());  // Same user → same partition
            String value = order.toJson();
            ProducerRecord<String, String> record =
                    new ProducerRecord<>("order-events", key, value);

            // Send with specific partition (override key-based partitioning)
            // new ProducerRecord<>("order-events", 2, key, value); // → Partition 2

            // Send with specific timestamp
            // new ProducerRecord<>("order-events", null, order.getTimestamp(), key, value);

            producer.send(record, (metadata, ex) -> {
                if (ex != null) {
                    System.err.println("Failed: " + ex.getMessage());
                }
            });
        }
        producer.flush();  // Ensure all buffered messages are sent
    }

    // ── JSON Producer with Schema ──────────────────────────────────────
    public static void main(String[] args) throws Exception {
        KafkaProducer<String, String> producer = createProducer();

        try {
            // Send 1000 order events
            ObjectMapper mapper = new ObjectMapper();
            for (int i = 1; i <= 1000; i++) {
                OrderEvent event = new OrderEvent(
                    (long) i,
                    "USER-" + (i % 100),
                    "Product-" + (i % 20),
                    ThreadLocalRandom.current().nextDouble(10, 1000),
                    Instant.now()
                );
                String json = mapper.writeValueAsString(event);
                String key = event.getUserId();

                producer.send(
                    new ProducerRecord<>("order-events", key, json),
                    (meta, ex) -> {
                        if (ex != null) System.err.println("Error: " + ex.getMessage());
                    }
                );
            }
        } finally {
            producer.flush();
            producer.close();
        }
    }
}
```

---

## 19. Kafka Consumer API in Java

```java
import org.apache.kafka.clients.consumer.*;
import org.apache.kafka.common.*;
import org.apache.kafka.common.serialization.*;

public class KafkaConsumerExamples {

    public static KafkaConsumer<String, String> createConsumer(String groupId) {
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "kafka1:9092,kafka2:9092");
        props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());

        // ── Offset Management ──────────────────────────────────────────
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest"); // earliest or latest
        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, "false");   // Manual commit!

        // ── Performance ────────────────────────────────────────────────
        props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 500);         // Max records per poll
        props.put(ConsumerConfig.FETCH_MIN_BYTES_CONFIG, 1);            // Min bytes to fetch
        props.put(ConsumerConfig.FETCH_MAX_WAIT_MS_CONFIG, 500);        // Max wait time
        props.put(ConsumerConfig.MAX_PARTITION_FETCH_BYTES_CONFIG, 1048576); // 1MB per partition

        // ── Session Management ─────────────────────────────────────────
        props.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, 45000);
        props.put(ConsumerConfig.HEARTBEAT_INTERVAL_MS_CONFIG, 3000);
        props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000); // Max processing time

        return new KafkaConsumer<>(props);
    }

    // ── Basic Consumer ─────────────────────────────────────────────────
    public static void basicConsumer() {
        KafkaConsumer<String, String> consumer = createConsumer("order-processor-group");
        consumer.subscribe(Arrays.asList("order-events"));  // Subscribe to topic

        try {
            while (true) {
                ConsumerRecords<String, String> records =
                        consumer.poll(Duration.ofMillis(1000));

                for (ConsumerRecord<String, String> record : records) {
                    System.out.printf("Topic=%s, Partition=%d, Offset=%d, Key=%s%n",
                            record.topic(), record.partition(),
                            record.offset(), record.key());

                    // Process the message
                    processRecord(record.value());
                }

                // Commit after processing (at-least-once delivery)
                consumer.commitSync();
            }
        } catch (WakeupException e) {
            // Ignore — triggered by consumer.wakeup() during shutdown
        } finally {
            consumer.close();
        }
    }

    // ── Async Commit (higher throughput) ──────────────────────────────
    public static void asyncCommitConsumer() {
        KafkaConsumer<String, String> consumer = createConsumer("async-group");
        consumer.subscribe(Arrays.asList("order-events"));

        try {
            while (true) {
                ConsumerRecords<String, String> records =
                        consumer.poll(Duration.ofMillis(100));

                for (ConsumerRecord<String, String> record : records) {
                    processRecord(record.value());
                }

                // Async commit — doesn't block, retry on callback
                consumer.commitAsync((offsets, exception) -> {
                    if (exception != null) {
                        System.err.println("Commit failed: " + exception.getMessage());
                        // Fall back to sync commit
                    }
                });
            }
        } finally {
            // Final sync commit on shutdown (important!)
            try {
                consumer.commitSync();
            } finally {
                consumer.close();
            }
        }
    }

    // ── Partition-Level Commit (fine-grained control) ─────────────────
    public static void partitionLevelCommit() {
        KafkaConsumer<String, String> consumer = createConsumer("partition-group");
        consumer.subscribe(Arrays.asList("order-events"));

        Map<TopicPartition, OffsetAndMetadata> offsetsToCommit = new HashMap<>();

        try {
            while (true) {
                ConsumerRecords<String, String> records =
                        consumer.poll(Duration.ofMillis(100));

                for (ConsumerRecord<String, String> record : records) {
                    try {
                        processRecord(record.value());
                        // Track offset for this partition
                        offsetsToCommit.put(
                            new TopicPartition(record.topic(), record.partition()),
                            new OffsetAndMetadata(record.offset() + 1)  // +1 = next to read
                        );
                    } catch (Exception e) {
                        System.err.println("Failed processing offset " + record.offset());
                        // Don't add to commit map — will reprocess on restart
                    }
                }

                if (!offsetsToCommit.isEmpty()) {
                    consumer.commitSync(offsetsToCommit);
                    offsetsToCommit.clear();
                }
            }
        } finally {
            consumer.close();
        }
    }

    // ── Rebalance Listener ─────────────────────────────────────────────
    public static void consumerWithRebalanceListener() {
        KafkaConsumer<String, String> consumer = createConsumer("rebalance-group");
        Map<TopicPartition, OffsetAndMetadata> currentOffsets = new HashMap<>();

        consumer.subscribe(Arrays.asList("order-events"), new ConsumerRebalanceListener() {

            @Override
            public void onPartitionsRevoked(Collection<TopicPartition> partitions) {
                // Called BEFORE rebalance — commit current offsets
                System.out.println("Partitions revoked: " + partitions);
                consumer.commitSync(currentOffsets);
                currentOffsets.clear();
            }

            @Override
            public void onPartitionsAssigned(Collection<TopicPartition> partitions) {
                // Called AFTER rebalance — resume from committed offsets
                System.out.println("Partitions assigned: " + partitions);
            }
        });

        try {
            while (true) {
                ConsumerRecords<String, String> records =
                        consumer.poll(Duration.ofMillis(100));

                for (ConsumerRecord<String, String> record : records) {
                    processRecord(record.value());
                    currentOffsets.put(
                        new TopicPartition(record.topic(), record.partition()),
                        new OffsetAndMetadata(record.offset() + 1)
                    );
                }
                consumer.commitAsync();
            }
        } finally {
            consumer.close();
        }
    }

    // ── Seek to Specific Offset ────────────────────────────────────────
    public static void seekToOffset() {
        KafkaConsumer<String, String> consumer = createConsumer("seek-group");
        TopicPartition partition = new TopicPartition("order-events", 0);
        consumer.assign(Arrays.asList(partition));

        // Seek to beginning
        consumer.seekToBeginning(Arrays.asList(partition));

        // Seek to end
        consumer.seekToEnd(Arrays.asList(partition));

        // Seek to specific offset
        consumer.seek(partition, 5000L);

        // Seek to timestamp (useful for replaying from a point in time)
        Map<TopicPartition, Long> timestampsToSearch = new HashMap<>();
        Instant oneHourAgo = Instant.now().minus(1, ChronoUnit.HOURS);
        timestampsToSearch.put(partition, oneHourAgo.toEpochMilli());

        Map<TopicPartition, OffsetAndTimestamp> offsets =
                consumer.offsetsForTimes(timestampsToSearch);
        offsets.forEach((tp, oat) -> {
            if (oat != null) consumer.seek(tp, oat.offset());
        });
    }

    private static void processRecord(String value) {
        // Process the message
        System.out.println("Processing: " + value);
    }
}
```

---

## 20. Kafka Streams

**Kafka Streams** is a client library for building stream processing applications entirely within Kafka — no separate cluster needed.

```java
import org.apache.kafka.streams.*;
import org.apache.kafka.streams.kstream.*;
import org.apache.kafka.streams.state.*;

public class KafkaStreamsExample {

    public static void main(String[] args) throws InterruptedException {
        Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "order-analytics");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "kafka1:9092");
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        props.put(StreamsConfig.COMMIT_INTERVAL_MS_CONFIG, 1000);
        props.put(StreamsConfig.STATE_DIR_CONFIG, "/tmp/kafka-streams");

        // ── Build Topology ────────────────────────────────────────────
        StreamsBuilder builder = new StreamsBuilder();

        // Read from input topic
        KStream<String, String> orderStream = builder.stream("order-events");

        // ── Stateless Operations ──────────────────────────────────────

        // Filter and transform
        KStream<String, OrderEvent> parsedOrders = orderStream
                .filter((key, value) -> value != null && !value.isEmpty())
                .mapValues(value -> parseOrderEvent(value))
                .filter((key, order) -> order != null && order.getPrice() > 0);

        // Branch into multiple streams
        Map<String, KStream<String, OrderEvent>> branches = parsedOrders.split(Named.as("branch-"))
                .branch((key, order) -> order.getPrice() > 1000, Branched.as("high-value"))
                .branch((key, order) -> order.getPrice() > 100,  Branched.as("medium-value"))
                .defaultBranch(Branched.as("low-value"));

        KStream<String, OrderEvent> highValueOrders = branches.get("branch-high-value");
        highValueOrders.to("high-value-orders");  // Write to different topic

        // Re-key the stream (change partition key)
        KStream<String, OrderEvent> keyedByProduct = parsedOrders
                .selectKey((userId, order) -> order.getProduct());

        // Flat map — one record becomes many
        KStream<String, String> allTags = parsedOrders.flatMapValues(order ->
                Arrays.asList(order.getProduct(), order.getCategory(), order.getBrand()));

        // ── Stateful Operations ───────────────────────────────────────

        // Count orders per user (uses a state store internally)
        KTable<String, Long> orderCountByUser = parsedOrders
                .groupByKey()
                .count(Materialized.as("order-count-store"));

        // Write KTable to output topic
        orderCountByUser.toStream().to("user-order-counts",
                Produced.with(Serdes.String(), Serdes.Long()));

        // Aggregate — total revenue per product
        KTable<String, Double> revenueByProduct = keyedByProduct
                .groupByKey(Grouped.with(Serdes.String(),
                        new JsonSerde<>(OrderEvent.class)))
                .aggregate(
                    () -> 0.0,                  // Initializer
                    (product, order, running) -> running + order.getPrice(), // Aggregator
                    Materialized.<String, Double, KeyValueStore<Bytes, byte[]>>as("revenue-store")
                        .withValueSerde(Serdes.Double())
                );

        // ── Windowed Aggregations ──────────────────────────────────────

        // Count orders in 5-minute tumbling windows
        KTable<Windowed<String>, Long> windowedCounts = parsedOrders
                .groupByKey()
                .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(5)))
                .count(Materialized.as("windowed-count-store"));

        windowedCounts.toStream()
                .map((windowedKey, count) -> {
                    String key = windowedKey.key() + "@" + windowedKey.window().startTime();
                    return KeyValue.pair(key, String.valueOf(count));
                })
                .to("order-window-counts");

        // Sliding windows
        KTable<Windowed<String>, Double> slidingRevenue = keyedByProduct
                .groupByKey(Grouped.with(Serdes.String(), new JsonSerde<>(OrderEvent.class)))
                .windowedBy(SlidingWindows.ofTimeDifferenceWithNoGrace(Duration.ofMinutes(10)))
                .aggregate(() -> 0.0,
                        (k, order, acc) -> acc + order.getPrice(),
                        Materialized.<String, Double, WindowStore<Bytes, byte[]>>
                            as("sliding-revenue-store").withValueSerde(Serdes.Double()));

        // Session windows (user activity sessions)
        KTable<Windowed<String>, Long> sessionCounts = parsedOrders
                .groupByKey()
                .windowedBy(SessionWindows.ofInactivityGapWithNoGrace(Duration.ofMinutes(30)))
                .count(Materialized.as("session-count-store"));

        // ── Stream-Table Join ──────────────────────────────────────────

        // Load user data as GlobalKTable (replicated to all instances)
        GlobalKTable<String, String> usersTable =
                builder.globalTable("user-profiles",
                        Consumed.with(Serdes.String(), Serdes.String()),
                        Materialized.as("users-store"));

        // Enrich orders with user info
        KStream<String, String> enrichedOrders = parsedOrders.join(
                usersTable,
                (orderId, order) -> order.getUserId(),  // Key extractor
                (order, userJson) -> {                   // Value joiner
                    User user = parseUser(userJson);
                    return order.toJson() + ",\"userName\":\"" + user.getName() + "\"";
                }
        );
        enrichedOrders.to("enriched-orders");

        // ── Query State Store ──────────────────────────────────────────
        KafkaStreams streams = new KafkaStreams(builder.build(), props);
        streams.start();

        // Query state interactively
        Thread.sleep(5000); // Let streams start
        ReadOnlyKeyValueStore<String, Long> store =
                streams.store(StoreQueryParameters.fromNameAndType(
                        "order-count-store", QueryableStoreTypes.keyValueStore()));

        store.all().forEachRemaining(kv ->
                System.out.println("User: " + kv.key + " Orders: " + kv.value));

        // Shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));
    }

    private static OrderEvent parseOrderEvent(String json) {
        // Parse JSON to OrderEvent
        return new OrderEvent(); // Simplified
    }

    private static User parseUser(String json) {
        return new User(); // Simplified
    }
}
```

---

## 21. Kafka Connect

**Kafka Connect** imports/exports data between Kafka and external systems without writing code.

```json
// Source Connector — MySQL → Kafka (using Debezium CDC)
{
  "name": "mysql-source-connector",
  "config": {
    "connector.class": "io.debezium.connector.mysql.MySqlConnector",
    "tasks.max": "1",
    "database.hostname": "mysql-host",
    "database.port": "3306",
    "database.user": "debezium",
    "database.password": "dbz",
    "database.server.id": "184054",
    "database.server.name": "mydb",
    "database.include.list": "ecommerce",
    "table.include.list": "ecommerce.orders,ecommerce.users",
    "database.history.kafka.bootstrap.servers": "kafka:9092",
    "database.history.kafka.topic": "schema-changes.ecommerce",
    "transforms": "route",
    "transforms.route.type": "org.apache.kafka.connect.transforms.ReplaceField$Value",
    "include.schema.changes": "true"
  }
}

// Sink Connector — Kafka → Elasticsearch
{
  "name": "elasticsearch-sink-connector",
  "config": {
    "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",
    "tasks.max": "2",
    "topics": "order-events",
    "connection.url": "http://elasticsearch:9200",
    "type.name": "_doc",
    "key.ignore": "true",
    "schema.ignore": "true",
    "behavior.on.malformed.documents": "warn",
    "transforms": "timestampConverter",
    "transforms.timestampConverter.type": "org.apache.kafka.connect.transforms.TimestampConverter$Value",
    "transforms.timestampConverter.field": "timestamp",
    "transforms.timestampConverter.target.type": "string",
    "transforms.timestampConverter.format": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
  }
}

// Sink Connector — Kafka → HDFS
{
  "name": "hdfs-sink-connector",
  "config": {
    "connector.class": "io.confluent.connect.hdfs.HdfsSinkConnector",
    "tasks.max": "4",
    "topics": "order-events",
    "hdfs.url": "hdfs://namenode:9000",
    "flush.size": "1000",
    "storage.class": "io.confluent.connect.hdfs.storage.HdfsStorage",
    "format.class": "io.confluent.connect.hdfs.parquet.ParquetFormat",
    "partitioner.class": "io.confluent.connect.storage.partitioner.TimeBasedPartitioner",
    "path.format": "'year'=YYYY/'month'=MM/'day'=dd/'hour'=HH",
    "locale": "en_US",
    "timezone": "UTC",
    "timestamp.extractor": "RecordField",
    "timestamp.field": "timestamp"
  }
}
```

---

---

# PART 5 — APACHE FLINK

---

## 22. Flink Architecture & Core Concepts

Apache Flink is a stateful stream processing framework with true streaming (not micro-batch) semantics.

### Flink vs Spark Streaming

```
Spark Streaming:          Flink:
  Micro-batch model    →    True streaming (event-by-event)
  Latency: seconds     →    Latency: milliseconds
  Windowing: limited   →    Rich windowing (tumbling, sliding, session)
  State: limited       →    First-class stateful processing
  Time: processing time→    Event time, processing time, ingestion time
  Watermarks: basic    →    Advanced watermark strategies
```

### Flink Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       FLINK CLUSTER                              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Job Manager                           │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │   │
│  │  │  Dispatcher  │  │  Scheduler   │  │  Checkpoint  │  │   │
│  │  │(REST, CLI,   │  │(resources,   │  │  Coordinator │  │   │
│  │  │ submit jobs) │  │ tasks)       │  │              │  │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Task Manager │  │ Task Manager │  │ Task Manager │         │
│  │              │  │              │  │              │         │
│  │ ┌──────────┐ │  │ ┌──────────┐ │  │ ┌──────────┐ │         │
│  │ │ Task Slot│ │  │ │ Task Slot│ │  │ │ Task Slot│ │         │
│  │ │(runs one │ │  │ │(runs one │ │  │ │(runs one │ │         │
│  │ │ task)    │ │  │ │ task)    │ │  │ │ task)    │ │         │
│  │ └──────────┘ │  │ └──────────┘ │  │ └──────────┘ │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

### Maven Dependencies

```xml
<dependency>
    <groupId>org.apache.flink</groupId>
    <artifactId>flink-java</artifactId>
    <version>1.18.0</version>
</dependency>
<dependency>
    <groupId>org.apache.flink</groupId>
    <artifactId>flink-streaming-java</artifactId>
    <version>1.18.0</version>
</dependency>
<dependency>
    <groupId>org.apache.flink</groupId>
    <artifactId>flink-connector-kafka</artifactId>
    <version>3.1.0-1.18</version>
</dependency>
<dependency>
    <groupId>org.apache.flink</groupId>
    <artifactId>flink-table-api-java-bridge</artifactId>
    <version>1.18.0</version>
</dependency>
```

---

## 23. Flink DataStream API

```java
import org.apache.flink.streaming.api.environment.*;
import org.apache.flink.streaming.api.datastream.*;
import org.apache.flink.streaming.api.functions.*;
import org.apache.flink.connector.kafka.source.*;
import org.apache.flink.connector.kafka.sink.*;
import org.apache.flink.api.common.serialization.*;

public class FlinkDataStreamExample {

    public static void main(String[] args) throws Exception {

        // ── Setup Environment ─────────────────────────────────────────
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        env.setParallelism(4);

        // Enable checkpointing (fault tolerance)
        env.enableCheckpointing(60000);  // Checkpoint every 60 seconds
        env.getCheckpointConfig().setCheckpointingMode(CheckpointingMode.EXACTLY_ONCE);
        env.getCheckpointConfig().setMinPauseBetweenCheckpoints(30000);
        env.getCheckpointConfig().setCheckpointTimeout(120000);

        // ── Kafka Source ──────────────────────────────────────────────
        KafkaSource<OrderEvent> kafkaSource = KafkaSource.<OrderEvent>builder()
                .setBootstrapServers("kafka1:9092,kafka2:9092")
                .setTopics("order-events")
                .setGroupId("flink-order-processor")
                .setStartingOffsets(OffsetsInitializer.latest())
                .setValueOnlyDeserializer(new JsonDeserializationSchema<>(OrderEvent.class))
                .build();

        // Create stream with event time
        DataStream<OrderEvent> orderStream = env.fromSource(
                kafkaSource,
                WatermarkStrategy
                    .<OrderEvent>forBoundedOutOfOrderness(Duration.ofSeconds(30))
                    .withTimestampAssigner((event, ts) -> event.getTimestamp().toEpochMilli()),
                "kafka-source"
        );

        // ── Transformations ───────────────────────────────────────────

        // Map and filter
        DataStream<OrderEvent> validOrders = orderStream
                .filter(order -> order.getPrice() > 0 && order.getQuantity() > 0)
                .map(order -> {
                    order.setTotalPrice(order.getPrice() * order.getQuantity());
                    return order;
                })
                .returns(TypeInformation.of(OrderEvent.class));

        // Key by user ID
        KeyedStream<OrderEvent, String> keyedOrders =
                validOrders.keyBy(OrderEvent::getUserId);

        // Process function — stateful per-user processing
        DataStream<UserStats> userStats = keyedOrders.process(
                new KeyedProcessFunction<String, OrderEvent, UserStats>() {

                    // State for each user
                    private ValueState<Integer> orderCount;
                    private ValueState<Double> totalRevenue;

                    @Override
                    public void open(Configuration parameters) {
                        orderCount = getRuntimeContext().getState(
                            new ValueStateDescriptor<>("order-count", Integer.class));
                        totalRevenue = getRuntimeContext().getState(
                            new ValueStateDescriptor<>("total-revenue", Double.class));
                    }

                    @Override
                    public void processElement(OrderEvent order,
                                               Context ctx,
                                               Collector<UserStats> out) throws Exception {
                        // Update state
                        int count = orderCount.value() == null ? 0 : orderCount.value();
                        double revenue = totalRevenue.value() == null ? 0 : totalRevenue.value();

                        count++;
                        revenue += order.getTotalPrice();

                        orderCount.update(count);
                        totalRevenue.update(revenue);

                        // Emit updated stats
                        out.collect(new UserStats(order.getUserId(), count, revenue));

                        // Schedule a timer (e.g., inactivity detection)
                        ctx.timerService().registerEventTimeTimer(
                            ctx.timestamp() + Duration.ofHours(1).toMillis()
                        );
                    }

                    @Override
                    public void onTimer(long timestamp, OnTimerContext ctx,
                                        Collector<UserStats> out) {
                        // Called when timer fires — detect user inactivity
                        System.out.println("No activity for user: " + ctx.getCurrentKey());
                    }
                }
        );

        // ── Kafka Sink ────────────────────────────────────────────────
        KafkaSink<String> kafkaSink = KafkaSink.<String>builder()
                .setBootstrapServers("kafka1:9092")
                .setRecordSerializer(
                    KafkaRecordSerializationSchema.builder()
                        .setTopic("user-stats")
                        .setValueSerializationSchema(new SimpleStringSchema())
                        .build()
                )
                .setDeliveryGuarantee(DeliveryGuarantee.EXACTLY_ONCE)
                .build();

        userStats
                .map(stats -> stats.toJson())
                .sinkTo(kafkaSink);

        // ── Execute ───────────────────────────────────────────────────
        env.execute("Order Analytics Pipeline");
    }
}
```

---

## 24. Flink Table API & SQL

```java
import org.apache.flink.table.api.*;
import org.apache.flink.table.api.bridge.java.*;

public class FlinkTableSQLExample {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env);

        // ── Define Kafka Source Table ──────────────────────────────────
        tableEnv.executeSql("""
            CREATE TABLE order_events (
                order_id     BIGINT,
                user_id      STRING,
                product      STRING,
                quantity     INT,
                price        DOUBLE,
                `timestamp`  TIMESTAMP(3),
                WATERMARK FOR `timestamp` AS `timestamp` - INTERVAL '30' SECOND
            ) WITH (
                'connector' = 'kafka',
                'topic'     = 'order-events',
                'properties.bootstrap.servers' = 'kafka1:9092',
                'properties.group.id' = 'flink-sql-group',
                'format'    = 'json',
                'scan.startup.mode' = 'latest-offset'
            )
        """);

        // ── Define Kafka Sink Table ────────────────────────────────────
        tableEnv.executeSql("""
            CREATE TABLE order_metrics (
                window_start  TIMESTAMP(3),
                window_end    TIMESTAMP(3),
                product       STRING,
                order_count   BIGINT,
                total_revenue DOUBLE,
                avg_price     DOUBLE
            ) WITH (
                'connector' = 'kafka',
                'topic'     = 'order-metrics',
                'properties.bootstrap.servers' = 'kafka1:9092',
                'format'    = 'json'
            )
        """);

        // ── Streaming SQL with Window ──────────────────────────────────
        tableEnv.executeSql("""
            INSERT INTO order_metrics
            SELECT
                TUMBLE_START(`timestamp`, INTERVAL '5' MINUTE) as window_start,
                TUMBLE_END(`timestamp`, INTERVAL '5' MINUTE)   as window_end,
                product,
                COUNT(order_id)            as order_count,
                SUM(price * quantity)      as total_revenue,
                AVG(price)                 as avg_price
            FROM order_events
            GROUP BY
                TUMBLE(`timestamp`, INTERVAL '5' MINUTE),
                product
        """);

        // ── Table API (programmatic) ───────────────────────────────────
        Table orderTable = tableEnv.from("order_events");

        Table result = orderTable
                .filter($("price").isGreater(100))
                .groupBy($("product"))
                .select(
                    $("product"),
                    $("order_id").count().as("count"),
                    $("price").sum().as("revenue")
                );

        tableEnv.toChangelogStream(result).print();
    }
}
```

---

## 25. Flink Windowing & State Management

```java
import org.apache.flink.streaming.api.windowing.windows.*;
import org.apache.flink.streaming.api.windowing.assigners.*;

public class FlinkWindowingExample {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        DataStream<OrderEvent> orders = getOrderStream(env);
        KeyedStream<OrderEvent, String> keyedOrders = orders.keyBy(OrderEvent::getProduct);

        // ── Tumbling Window (non-overlapping, fixed size) ──────────────
        // 5-minute windows: [0-5min), [5-10min), [10-15min)...
        keyedOrders
            .window(TumblingEventTimeWindows.of(Time.minutes(5)))
            .aggregate(new RevenueAggregator(), new WindowResultFunction())
            .print();

        // ── Sliding Window (overlapping) ───────────────────────────────
        // 10-minute window, slide every 5 minutes
        // Each event appears in multiple windows
        keyedOrders
            .window(SlidingEventTimeWindows.of(Time.minutes(10), Time.minutes(5)))
            .reduce((a, b) -> new OrderEvent(
                a.getProduct(),
                a.getQuantity() + b.getQuantity(),
                a.getPrice() + b.getPrice()
            ))
            .print();

        // ── Session Window (activity-based, variable size) ─────────────
        // Window closes after 30 minutes of inactivity per key
        keyedOrders
            .window(EventTimeSessionWindows.withGap(Time.minutes(30)))
            .sum("quantity")
            .print();

        // ── Late Data Handling ──────────────────────────────────────────
        OutputTag<OrderEvent> lateOrdersTag = new OutputTag<OrderEvent>("late-orders") {};

        SingleOutputStreamOperator<String> mainStream = keyedOrders
            .window(TumblingEventTimeWindows.of(Time.minutes(5)))
            .allowedLateness(Time.minutes(2))      // Allow 2 min late arrivals
            .sideOutputLateData(lateOrdersTag)     // Route late data to side output
            .apply(new WindowFunction<OrderEvent, String, String, TimeWindow>() {
                @Override
                public void apply(String key, TimeWindow window,
                                  Iterable<OrderEvent> input,
                                  Collector<String> out) {
                    double total = StreamSupport.stream(input.spliterator(), false)
                            .mapToDouble(o -> o.getPrice() * o.getQuantity())
                            .sum();
                    out.collect(key + ": " + total);
                }
            });

        // Process late orders separately
        DataStream<OrderEvent> lateOrders = mainStream.getSideOutput(lateOrdersTag);
        lateOrders.print("LATE: ");

        env.execute("Windowing Examples");
    }
}

// Custom Aggregator
class RevenueAggregator implements AggregateFunction<OrderEvent, double[], Double> {
    @Override
    public double[] createAccumulator() { return new double[]{0.0, 0}; }

    @Override
    public double[] add(OrderEvent order, double[] acc) {
        acc[0] += order.getPrice() * order.getQuantity(); // revenue sum
        acc[1]++;                                          // count
        return acc;
    }

    @Override
    public Double getResult(double[] acc) { return acc[0]; }

    @Override
    public double[] merge(double[] a, double[] b) {
        return new double[]{a[0] + b[0], a[1] + b[1]};
    }
}
```

---

---

# PART 6 — NOSQL & STORAGE

---

## 26. HBase — Wide-Column Store

```java
import org.apache.hadoop.hbase.*;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.util.*;

public class HBaseOperations {

    private final Connection connection;
    private static final byte[] CF_ORDERS = Bytes.toBytes("orders");
    private static final byte[] CF_META = Bytes.toBytes("meta");

    public HBaseOperations() throws IOException {
        Configuration conf = HBaseConfiguration.create();
        conf.set("hbase.zookeeper.quorum", "zk1,zk2,zk3");
        conf.set("hbase.zookeeper.property.clientPort", "2181");
        this.connection = ConnectionFactory.createConnection(conf);
    }

    // ── Create Table ───────────────────────────────────────────────────
    public void createTable(String tableName) throws IOException {
        try (Admin admin = connection.getAdmin()) {
            TableName table = TableName.valueOf(tableName);
            if (!admin.tableExists(table)) {
                TableDescriptor descriptor = TableDescriptorBuilder.newBuilder(table)
                    .setColumnFamily(ColumnFamilyDescriptorBuilder.newBuilder(CF_ORDERS)
                        .setMaxVersions(3)
                        .setCompressionType(Compression.Algorithm.SNAPPY)
                        .build())
                    .setColumnFamily(ColumnFamilyDescriptorBuilder.of(CF_META))
                    .build();
                admin.createTable(descriptor);
                System.out.println("Table created: " + tableName);
            }
        }
    }

    // ── Put (Insert/Update) ────────────────────────────────────────────
    public void putOrder(String orderId, String userId, String product,
                          double price, int quantity) throws IOException {
        Table table = connection.getTable(TableName.valueOf("orders"));
        try {
            // Row key design: userId_timestamp_orderId (for scan efficiency)
            String rowKey = userId + "_" + System.currentTimeMillis() + "_" + orderId;
            Put put = new Put(Bytes.toBytes(rowKey));
            put.addColumn(CF_ORDERS, Bytes.toBytes("order_id"), Bytes.toBytes(orderId));
            put.addColumn(CF_ORDERS, Bytes.toBytes("user_id"), Bytes.toBytes(userId));
            put.addColumn(CF_ORDERS, Bytes.toBytes("product"), Bytes.toBytes(product));
            put.addColumn(CF_ORDERS, Bytes.toBytes("price"), Bytes.toBytes(price));
            put.addColumn(CF_ORDERS, Bytes.toBytes("quantity"), Bytes.toBytes(quantity));
            put.addColumn(CF_META, Bytes.toBytes("created_at"),
                    Bytes.toBytes(Instant.now().toString()));
            table.put(put);
        } finally {
            table.close();
        }
    }

    // ── Batch Put ─────────────────────────────────────────────────────
    public void batchPut(List<OrderRecord> orders) throws IOException {
        Table table = connection.getTable(TableName.valueOf("orders"));
        try {
            List<Put> puts = orders.stream().map(order -> {
                Put put = new Put(Bytes.toBytes(order.getRowKey()));
                put.addColumn(CF_ORDERS, Bytes.toBytes("product"),
                        Bytes.toBytes(order.getProduct()));
                put.addColumn(CF_ORDERS, Bytes.toBytes("price"),
                        Bytes.toBytes(order.getPrice()));
                return put;
            }).collect(Collectors.toList());
            table.put(puts);
        } finally {
            table.close();
        }
    }

    // ── Get (Point Lookup) ────────────────────────────────────────────
    public void getOrder(String rowKey) throws IOException {
        Table table = connection.getTable(TableName.valueOf("orders"));
        try {
            Get get = new Get(Bytes.toBytes(rowKey));
            get.addFamily(CF_ORDERS);          // Get all columns in family
            // get.addColumn(CF_ORDERS, Bytes.toBytes("price")); // Or specific column
            Result result = table.get(get);

            if (!result.isEmpty()) {
                String product = Bytes.toString(result.getValue(CF_ORDERS, Bytes.toBytes("product")));
                double price = Bytes.toDouble(result.getValue(CF_ORDERS, Bytes.toBytes("price")));
                System.out.println("Product: " + product + ", Price: " + price);
            }
        } finally {
            table.close();
        }
    }

    // ── Scan (Range Query) ────────────────────────────────────────────
    public void scanUserOrders(String userId) throws IOException {
        Table table = connection.getTable(TableName.valueOf("orders"));
        try {
            // Scan all orders for userId (range scan using row key prefix)
            Scan scan = new Scan();
            scan.withStartRow(Bytes.toBytes(userId + "_"));
            scan.withStopRow(Bytes.toBytes(userId + "_~"));  // ~ = high value
            scan.addFamily(CF_ORDERS);
            scan.setCaching(100);     // Fetch 100 rows at a time
            scan.setBatch(10);        // 10 columns per RPC
            scan.setLimit(1000);      // Max 1000 rows

            // Add filter
            scan.setFilter(new SingleColumnValueFilter(
                CF_ORDERS,
                Bytes.toBytes("product"),
                CompareOperator.EQUAL,
                Bytes.toBytes("Laptop")
            ));

            ResultScanner scanner = table.getScanner(scan);
            for (Result result : scanner) {
                System.out.println("Row: " + Bytes.toString(result.getRow()));
                result.getFamilyMap(CF_ORDERS).forEach((col, value) -> {
                    System.out.println("  " + Bytes.toString(col) + " = " + Bytes.toString(value));
                });
            }
            scanner.close();
        } finally {
            table.close();
        }
    }

    // ── Delete ────────────────────────────────────────────────────────
    public void deleteRow(String rowKey) throws IOException {
        Table table = connection.getTable(TableName.valueOf("orders"));
        try {
            Delete delete = new Delete(Bytes.toBytes(rowKey));
            table.delete(delete);
        } finally {
            table.close();
        }
    }

    public void close() throws IOException {
        connection.close();
    }
}
```

---

## 27. Apache Cassandra with Java

```java
import com.datastax.oss.driver.api.core.*;
import com.datastax.oss.driver.api.core.cql.*;

public class CassandraOperations {

    private final CqlSession session;

    public CassandraOperations() {
        this.session = CqlSession.builder()
                .addContactPoint(new InetSocketAddress("cassandra1", 9042))
                .addContactPoint(new InetSocketAddress("cassandra2", 9042))
                .withLocalDatacenter("datacenter1")
                .withKeyspace("ecommerce")
                .build();
    }

    // ── Schema Creation ────────────────────────────────────────────────
    public void createSchema() {
        // Create keyspace
        session.execute("""
            CREATE KEYSPACE IF NOT EXISTS ecommerce
            WITH replication = {
                'class': 'NetworkTopologyStrategy',
                'datacenter1': 3
            }
        """);

        // Create table — design by query pattern!
        // Query: "Get all orders for a user, sorted by date"
        session.execute("""
            CREATE TABLE IF NOT EXISTS orders_by_user (
                user_id    UUID,
                order_date TIMESTAMP,
                order_id   UUID,
                product    TEXT,
                quantity   INT,
                price      DECIMAL,
                status     TEXT,
                PRIMARY KEY ((user_id), order_date, order_id)
            ) WITH CLUSTERING ORDER BY (order_date DESC, order_id ASC)
              AND default_time_to_live = 7776000  -- 90 days TTL
        """);

        // Table for product queries
        session.execute("""
            CREATE TABLE IF NOT EXISTS orders_by_product (
                product    TEXT,
                order_date DATE,
                order_id   UUID,
                user_id    UUID,
                quantity   INT,
                price      DECIMAL,
                PRIMARY KEY ((product, order_date), order_id)
            )
        """);
    }

    // ── Prepared Statements (always use for repeated queries!) ──────────
    private PreparedStatement insertOrderStmt;
    private PreparedStatement selectOrdersStmt;

    public void prepareStatements() {
        insertOrderStmt = session.prepare("""
            INSERT INTO orders_by_user
            (user_id, order_date, order_id, product, quantity, price, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            USING TTL 7776000
        """);

        selectOrdersStmt = session.prepare("""
            SELECT * FROM orders_by_user
            WHERE user_id = ?
            AND order_date > ?
            LIMIT 100
        """);
    }

    // ── Insert ────────────────────────────────────────────────────────
    public void insertOrder(UUID userId, String product, int quantity, BigDecimal price) {
        UUID orderId = UUID.randomUUID();
        Instant now = Instant.now();

        BoundStatement bound = insertOrderStmt.bind(
                userId, now, orderId, product, quantity, price, "PENDING"
        );
        bound = bound.setConsistencyLevel(ConsistencyLevel.QUORUM);
        session.execute(bound);
    }

    // ── Async Insert ──────────────────────────────────────────────────
    public CompletableFuture<Void> asyncInsert(UUID userId, String product,
                                                int quantity, BigDecimal price) {
        BoundStatement bound = insertOrderStmt.bind(
                userId, Instant.now(), UUID.randomUUID(), product, quantity, price, "PENDING"
        );
        return session.executeAsync(bound)
                .thenAccept(rs -> {}) // discard result
                .toCompletableFuture();
    }

    // ── Batch Insert ──────────────────────────────────────────────────
    public void batchInsert(List<OrderRecord> orders) {
        BatchStatement batch = BatchStatement.newInstance(DefaultBatchType.LOGGED);
        for (OrderRecord order : orders) {
            batch = batch.add(insertOrderStmt.bind(
                order.getUserId(), order.getDate(), order.getOrderId(),
                order.getProduct(), order.getQuantity(), order.getPrice(), "PENDING"
            ));
        }
        session.execute(batch);
    }

    // ── Query ─────────────────────────────────────────────────────────
    public List<Row> getRecentOrders(UUID userId) {
        Instant thirtyDaysAgo = Instant.now().minus(30, ChronoUnit.DAYS);
        BoundStatement bound = selectOrdersStmt.bind(userId, thirtyDaysAgo)
                .setConsistencyLevel(ConsistencyLevel.LOCAL_QUORUM);

        ResultSet rs = session.execute(bound);
        List<Row> rows = new ArrayList<>();
        for (Row row : rs) {
            rows.add(row);
        }
        return rows;
    }

    // ── Lightweight Transactions (Compare and Set) ────────────────────
    public boolean updateOrderStatus(UUID userId, Instant orderDate,
                                      UUID orderId, String expectedStatus,
                                      String newStatus) {
        PreparedStatement stmt = session.prepare("""
            UPDATE orders_by_user
            SET status = ?
            WHERE user_id = ? AND order_date = ? AND order_id = ?
            IF status = ?
        """);
        Row row = session.execute(stmt.bind(
            newStatus, userId, orderDate, orderId, expectedStatus
        )).one();
        return row.getBoolean("[applied]");  // LWT returns applied flag
    }

    public void close() {
        session.close();
    }
}
```

---

## 28. Apache Hive — Data Warehousing

```java
import java.sql.*;

public class HiveJdbcExample {

    // Connect via HiveServer2 JDBC
    public static Connection createConnection() throws SQLException {
        String url = "jdbc:hive2://hiveserver:10000/default";
        Properties props = new Properties();
        props.setProperty("user", "hive");
        props.setProperty("password", "");
        return DriverManager.getConnection(url, props);
    }

    public static void main(String[] args) throws Exception {
        try (Connection conn = createConnection();
             Statement stmt = conn.createStatement()) {

            // ── Create External Table ──────────────────────────────────
            stmt.execute("""
                CREATE EXTERNAL TABLE IF NOT EXISTS orders (
                    order_id    BIGINT,
                    user_id     BIGINT,
                    product     STRING,
                    category    STRING,
                    quantity    INT,
                    price       DOUBLE,
                    order_date  DATE,
                    status      STRING
                )
                ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
                STORED AS PARQUET
                LOCATION 'hdfs:///data/warehouse/orders/'
                TBLPROPERTIES ('parquet.compress'='SNAPPY')
            """);

            // ── Create Partitioned Table ───────────────────────────────
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS orders_partitioned (
                    order_id  BIGINT,
                    user_id   BIGINT,
                    product   STRING,
                    quantity  INT,
                    price     DOUBLE,
                    status    STRING
                )
                PARTITIONED BY (year INT, month INT)
                STORED AS ORC
                TBLPROPERTIES ('orc.compress'='SNAPPY')
            """);

            // ── Load Data into Partition ───────────────────────────────
            stmt.execute("""
                SET hive.exec.dynamic.partition=true;
                SET hive.exec.dynamic.partition.mode=nonstrict;
            """);

            stmt.execute("""
                INSERT OVERWRITE TABLE orders_partitioned
                PARTITION (year, month)
                SELECT
                    order_id, user_id, product, quantity, price, status,
                    YEAR(order_date) as year,
                    MONTH(order_date) as month
                FROM orders
            """);

            // ── Analytics Queries ──────────────────────────────────────
            ResultSet rs = stmt.executeQuery("""
                SELECT
                    year,
                    month,
                    category,
                    COUNT(*) as order_count,
                    SUM(price * quantity) as revenue,
                    AVG(price) as avg_price,
                    PERCENTILE_APPROX(price, 0.95) as p95_price
                FROM orders_partitioned
                JOIN (SELECT DISTINCT order_id, category FROM orders) cat
                    ON orders_partitioned.order_id = cat.order_id
                WHERE year = 2024
                GROUP BY year, month, category
                ORDER BY year, month, revenue DESC
            """);

            while (rs.next()) {
                System.out.printf("%d-%02d | %-15s | %6d | %10.2f%n",
                    rs.getInt("year"), rs.getInt("month"),
                    rs.getString("category"),
                    rs.getLong("order_count"),
                    rs.getDouble("revenue"));
            }
        }
    }
}
```

---

## 29. Apache Parquet & Avro — Data Formats

### Format Comparison

```
┌────────────────┬──────────────┬───────────────┬──────────────────────────┐
│ Format         │ Type         │ Best For       │ Features                 │
├────────────────┼──────────────┼───────────────┼──────────────────────────┤
│ CSV            │ Row-based    │ Simple exports │ Human-readable, no schema│
│ JSON           │ Row-based    │ APIs, NoSQL    │ Flexible, verbose        │
│ Avro           │ Row-based    │ Streaming, ETL │ Schema evolution, compact│
│ Parquet        │ Columnar     │ Analytics, DW  │ Column pruning, splittable│
│ ORC            │ Columnar     │ Hive workloads │ Better for Hive/ACID     │
│ Delta Lake     │ Columnar+Log │ Data Lakehouse │ ACID, time travel        │
└────────────────┴──────────────┴───────────────┴──────────────────────────┘

Columnar advantage for analytics:
  Query: "SELECT SUM(price) FROM orders"
  Parquet reads ONLY the price column
  CSV/JSON must read ALL columns
  → 10x less I/O for wide tables!
```

### Apache Avro in Java

```java
import org.apache.avro.*;
import org.apache.avro.generic.*;
import org.apache.avro.io.*;
import org.apache.avro.file.*;
import org.apache.avro.specific.*;

public class AvroExample {

    // Define schema
    public static Schema createOrderSchema() {
        return SchemaBuilder.record("Order")
                .namespace("com.example")
                .fields()
                    .name("order_id").type().longType().noDefault()
                    .name("user_id").type().longType().noDefault()
                    .name("product").type().stringType().noDefault()
                    .name("quantity").type().intType().noDefault()
                    .name("price").type().doubleType().noDefault()
                    .name("status").type()
                        .enumeration("OrderStatus")
                        .symbols("PENDING", "CONFIRMED", "SHIPPED", "DELIVERED")
                        .noDefault()
                .endRecord();
    }

    // Write Avro file
    public static void writeAvro(List<GenericRecord> records, String filePath) throws IOException {
        Schema schema = createOrderSchema();
        DatumWriter<GenericRecord> writer = new GenericDatumWriter<>(schema);

        try (DataFileWriter<GenericRecord> fileWriter =
                new DataFileWriter<>(writer)) {
            fileWriter.setCodec(CodecFactory.snappyCodec());  // Compress
            fileWriter.create(schema, new File(filePath));
            for (GenericRecord record : records) {
                fileWriter.append(record);
            }
        }
    }

    // Read Avro file
    public static void readAvro(String filePath) throws IOException {
        DatumReader<GenericRecord> reader = new GenericDatumReader<>();
        try (DataFileReader<GenericRecord> fileReader =
                new DataFileReader<>(new File(filePath), reader)) {
            Schema schema = fileReader.getSchema();
            System.out.println("Schema: " + schema);
            for (GenericRecord record : fileReader) {
                System.out.printf("Order: %s | Product: %s | Price: %.2f%n",
                    record.get("order_id"),
                    record.get("product"),
                    record.get("price"));
            }
        }
    }

    // Serialize to bytes (for Kafka)
    public static byte[] serialize(GenericRecord record, Schema schema) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        DatumWriter<GenericRecord> writer = new GenericDatumWriter<>(schema);
        BinaryEncoder encoder = EncoderFactory.get().binaryEncoder(baos, null);
        writer.write(record, encoder);
        encoder.flush();
        return baos.toByteArray();
    }

    public static void main(String[] args) throws IOException {
        Schema schema = createOrderSchema();
        List<GenericRecord> orders = new ArrayList<>();

        for (int i = 1; i <= 1000; i++) {
            GenericRecord order = new GenericData.Record(schema);
            order.put("order_id", (long) i);
            order.put("user_id", (long) (i % 100));
            order.put("product", "Product-" + (i % 20));
            order.put("quantity", i % 5 + 1);
            order.put("price", 10.0 + (i % 990));
            order.put("status", "PENDING");
            orders.add(order);
        }

        writeAvro(orders, "/tmp/orders.avro");
        readAvro("/tmp/orders.avro");
    }
}
```

### Writing Parquet with Spark

```java
// Write DataFrame as Parquet (recommended approach)
Dataset<Row> df = spark.read().csv("input.csv");

df.write()
  .mode(SaveMode.Overwrite)
  .option("compression", "snappy")
  .partitionBy("year", "month")        // Creates year=.../month=... directories
  .parquet("hdfs:///data/orders/");

// Read Parquet with partition pruning
Dataset<Row> jan2024 = spark.read()
    .parquet("hdfs:///data/orders/")
    .filter("year = 2024 AND month = 1");  // Only reads year=2024/month=1 directory!
```

---

---

# PART 7 — DATA PIPELINES & ORCHESTRATION

---

## 30. Apache Airflow Concepts

Apache Airflow is a platform for programmatically authoring, scheduling, and monitoring data pipelines (DAGs).

```python
# airflow_dag_example.py — Python (Airflow uses Python for DAG definition)
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.providers.apache.spark.operators.spark_submit import SparkSubmitOperator
from airflow.providers.apache.hdfs.sensors.hdfs import HdfsSensor
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-team',
    'depends_on_past': False,
    'start_date': datetime(2024, 1, 1),
    'email': ['data-team@example.com'],
    'email_on_failure': True,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
}

with DAG(
    dag_id='daily_order_pipeline',
    default_args=default_args,
    description='Daily order data processing pipeline',
    schedule_interval='0 2 * * *',    # Run at 2 AM daily
    catchup=False,
    tags=['orders', 'daily', 'production'],
) as dag:

    # 1. Wait for data to arrive
    wait_for_data = HdfsSensor(
        task_id='wait_for_order_data',
        filepath='/data/raw/orders/{{ ds }}/',   # ds = execution date
        poke_interval=300,   # Check every 5 minutes
        timeout=7200,        # Fail after 2 hours
    )

    # 2. Validate raw data
    validate_data = SparkSubmitOperator(
        task_id='validate_raw_data',
        application='/opt/spark-jobs/data-quality-check.jar',
        java_class='com.example.DataQualityChecker',
        application_args=['--date', '{{ ds }}'],
        conf={'spark.executor.memory': '4g', 'spark.num.executors': '10'},
    )

    # 3. Process with Spark
    process_orders = SparkSubmitOperator(
        task_id='process_orders',
        application='/opt/spark-jobs/order-processor.jar',
        java_class='com.example.OrderProcessor',
        application_args=['--input-date', '{{ ds }}', '--output', '/data/processed/'],
        conf={
            'spark.executor.memory': '8g',
            'spark.executor.cores': '4',
            'spark.num.executors': '20',
        },
    )

    # 4. Update data warehouse
    update_warehouse = SparkSubmitOperator(
        task_id='update_warehouse',
        application='/opt/spark-jobs/warehouse-loader.jar',
        java_class='com.example.WarehouseLoader',
        application_args=['--date', '{{ ds }}'],
    )

    # 5. Run analytics
    run_analytics = SparkSubmitOperator(
        task_id='run_analytics',
        application='/opt/spark-jobs/daily-analytics.jar',
        java_class='com.example.DailyAnalytics',
    )

    # 6. Send report
    send_report = BashOperator(
        task_id='send_daily_report',
        bash_command='python /opt/scripts/send_report.py --date {{ ds }}',
    )

    # Define DAG flow
    wait_for_data >> validate_data >> process_orders >> update_warehouse >> [run_analytics, send_report]
```

---

## 31. Spring Batch for Big Data

```java
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.*;
import org.springframework.batch.item.*;
import org.springframework.batch.item.database.*;
import org.springframework.batch.item.file.*;

@Configuration
@EnableBatchProcessing
public class OrderBatchConfig {

    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final DataSource dataSource;

    // ── Job Definition ─────────────────────────────────────────────────
    @Bean
    public Job orderProcessingJob(Step validateStep, Step processStep, Step exportStep) {
        return jobBuilderFactory.get("orderProcessingJob")
                .incrementer(new RunIdIncrementer())
                .listener(new JobExecutionListener() {
                    @Override
                    public void beforeJob(JobExecution execution) {
                        System.out.println("Starting job: " + execution.getJobInstance().getJobName());
                    }
                    @Override
                    public void afterJob(JobExecution execution) {
                        System.out.println("Job completed: " + execution.getStatus());
                    }
                })
                .start(validateStep)
                .next(processStep)
                .next(exportStep)
                .build();
    }

    // ── Step: Read CSV → Process → Write to DB ─────────────────────────
    @Bean
    @StepScope
    public FlatFileItemReader<OrderRecord> csvReader(
            @Value("#{jobParameters['inputFile']}") String inputFile) {
        return new FlatFileItemReaderBuilder<OrderRecord>()
                .name("orderCsvReader")
                .resource(new FileSystemResource(inputFile))
                .delimited()
                .names("orderId", "userId", "product", "quantity", "price")
                .fieldSetMapper(new BeanWrapperFieldSetMapper<>() {{
                    setTargetType(OrderRecord.class);
                }})
                .linesToSkip(1)  // Skip header
                .build();
    }

    @Bean
    public ItemProcessor<OrderRecord, ProcessedOrder> orderProcessor() {
        return new OrderItemProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<ProcessedOrder> dbWriter() {
        return new JdbcBatchItemWriterBuilder<ProcessedOrder>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO processed_orders (order_id, user_id, product, total, status) " +
                     "VALUES (:orderId, :userId, :product, :total, :status)")
                .dataSource(dataSource)
                .build();
    }

    @Bean
    public Step processStep(FlatFileItemReader<OrderRecord> reader,
                             ItemProcessor<OrderRecord, ProcessedOrder> processor,
                             JdbcBatchItemWriter<ProcessedOrder> writer) {
        return stepBuilderFactory.get("processStep")
                .<OrderRecord, ProcessedOrder>chunk(1000)  // Process 1000 records per transaction
                .reader(reader)
                .processor(processor)
                .writer(writer)
                .faultTolerant()
                .skipLimit(100)
                .skip(FlatFileParseException.class)  // Skip bad records
                .retryLimit(3)
                .retry(DataAccessException.class)    // Retry DB errors
                .listener(new StepExecutionListener() {
                    @Override
                    public void beforeStep(StepExecution se) {
                        System.out.println("Starting step: " + se.getStepName());
                    }
                    @Override
                    public ExitStatus afterStep(StepExecution se) {
                        System.out.printf("Step done: read=%d, written=%d, skipped=%d%n",
                            se.getReadCount(), se.getWriteCount(), se.getSkipCount());
                        return ExitStatus.COMPLETED;
                    }
                })
                .build();
    }
}

// Processor — business logic
public class OrderItemProcessor implements ItemProcessor<OrderRecord, ProcessedOrder> {
    @Override
    public ProcessedOrder process(OrderRecord order) {
        if (order.getPrice() <= 0 || order.getQuantity() <= 0) {
            return null;  // Return null to skip this item
        }
        ProcessedOrder processed = new ProcessedOrder();
        processed.setOrderId(order.getOrderId());
        processed.setUserId(order.getUserId());
        processed.setProduct(order.getProduct().toUpperCase());
        processed.setTotal(order.getPrice() * order.getQuantity());
        processed.setStatus("PROCESSED");
        return processed;
    }
}
```

---

## 32. Building ETL Pipelines in Java

```java
// Complete ETL Pipeline: MySQL → Transform → Parquet on HDFS
public class OrderETLPipeline {

    private final SparkSession spark;
    private final String jdbcUrl;
    private final String hdfsOutputPath;

    public OrderETLPipeline(SparkSession spark, String jdbcUrl, String hdfsOutputPath) {
        this.spark = spark;
        this.jdbcUrl = jdbcUrl;
        this.hdfsOutputPath = hdfsOutputPath;
    }

    // ── Extract: Read from MySQL ──────────────────────────────────────
    public Dataset<Row> extract(String date) {
        System.out.println("Extracting data for date: " + date);
        return spark.read()
                .format("jdbc")
                .option("url", jdbcUrl)
                .option("dbtable", "(SELECT * FROM orders WHERE DATE(order_date) = '" + date + "') t")
                .option("user", "etl_user")
                .option("password", "secret")
                .option("driver", "com.mysql.cj.jdbc.Driver")
                .option("numPartitions", 10)           // Parallel reads
                .option("partitionColumn", "order_id")
                .option("lowerBound", "1")
                .option("upperBound", "10000000")
                .load();
    }

    // ── Transform: Clean and enrich ───────────────────────────────────
    public Dataset<Row> transform(Dataset<Row> rawData) {
        System.out.println("Transforming data...");

        // Load dimension tables
        Dataset<Row> usersDF = spark.table("dim_users");
        Dataset<Row> productsDF = spark.table("dim_products");

        return rawData
            // Clean data
            .filter(col("order_id").isNotNull()
                .and(col("price").gt(0))
                .and(col("quantity").gt(0)))

            // Deduplicate
            .dropDuplicates("order_id")

            // Enrich with user info
            .join(broadcast(usersDF.select("user_id", "region", "tier")),
                  "user_id", "left")

            // Enrich with product info
            .join(broadcast(productsDF.select("product_id", "category", "brand")),
                  "product_id", "left")

            // Compute derived fields
            .withColumn("total_price", col("price").multiply(col("quantity")))
            .withColumn("discount_amount",
                when(col("tier").equalTo("PREMIUM"), col("total_price").multiply(0.1))
                .otherwise(lit(0.0)))
            .withColumn("final_price", col("total_price").minus(col("discount_amount")))
            .withColumn("is_high_value", col("final_price").gt(500))

            // Standardize
            .withColumn("product_name", upper(col("product_name")))
            .withColumn("status", lower(col("status")))

            // Add metadata
            .withColumn("etl_date", current_date())
            .withColumn("etl_timestamp", current_timestamp())

            // Select final columns
            .select("order_id", "user_id", "product_id", "region", "category",
                    "brand", "tier", "quantity", "price", "total_price",
                    "discount_amount", "final_price", "is_high_value",
                    "order_date", "status", "etl_date", "etl_timestamp");
    }

    // ── Load: Write to HDFS as Parquet ────────────────────────────────
    public void load(Dataset<Row> transformedData, String date) {
        System.out.println("Loading data to HDFS...");

        // Extract year, month, day from date for partitioning
        String[] dateParts = date.split("-");
        String outputPath = String.format("%s/year=%s/month=%s/day=%s",
                hdfsOutputPath, dateParts[0], dateParts[1], dateParts[2]);

        transformedData
            .repartition(20)  // Control output file count
            .write()
            .mode(SaveMode.Overwrite)
            .option("compression", "snappy")
            .parquet(outputPath);

        System.out.println("Data written to: " + outputPath);
        System.out.println("Total records: " + transformedData.count());
    }

    // ── Run Full Pipeline ─────────────────────────────────────────────
    public void run(String date) {
        long startTime = System.currentTimeMillis();
        System.out.println("=== Starting ETL Pipeline for " + date + " ===");

        try {
            Dataset<Row> rawData = extract(date);
            System.out.println("Extracted records: " + rawData.count());

            Dataset<Row> transformed = transform(rawData);
            load(transformed, date);

            long elapsed = (System.currentTimeMillis() - startTime) / 1000;
            System.out.println("=== Pipeline completed in " + elapsed + "s ===");

        } catch (Exception e) {
            System.err.println("Pipeline failed: " + e.getMessage());
            throw new RuntimeException("ETL Pipeline failed for date: " + date, e);
        }
    }

    public static void main(String[] args) {
        String date = args.length > 0 ? args[0] : LocalDate.now().minusDays(1).toString();

        SparkSession spark = SparkSession.builder()
                .appName("Order ETL Pipeline")
                .master("yarn")
                .config("spark.sql.shuffle.partitions", "200")
                .config("spark.sql.adaptive.enabled", "true")
                .enableHiveSupport()
                .getOrCreate();

        OrderETLPipeline pipeline = new OrderETLPipeline(
                spark,
                "jdbc:mysql://mysql-host:3306/ecommerce",
                "hdfs:///data/warehouse/orders/"
        );

        pipeline.run(date);
        spark.stop();
    }
}
```

---

---

# PART 8 — CLOUD & DEPLOYMENT

---

## 33. Big Data on AWS — EMR, S3, Glue

```java
// Reading from S3 with Spark on EMR
public class AWSS3SparkJob {

    public static void main(String[] args) throws Exception {
        SparkSession spark = SparkSession.builder()
                .appName("S3 Big Data Job")
                .getOrCreate();

        // Configure S3 access
        spark.sparkContext().hadoopConfiguration().set(
            "fs.s3a.access.key", System.getenv("AWS_ACCESS_KEY_ID"));
        spark.sparkContext().hadoopConfiguration().set(
            "fs.s3a.secret.key", System.getenv("AWS_SECRET_ACCESS_KEY"));
        spark.sparkContext().hadoopConfiguration().set(
            "fs.s3a.impl", "org.apache.hadoop.fs.s3a.S3AFileSystem");

        // On EMR, S3 credentials are auto-configured via IAM role
        // Just use s3:// or s3a:// paths directly

        // ── Read from S3 ──────────────────────────────────────────────
        Dataset<Row> ordersDF = spark.read()
                .option("header", "true")
                .option("inferSchema", "true")
                .csv("s3a://my-data-lake/raw/orders/2024/01/");

        // Read Parquet from S3
        Dataset<Row> parquetDF = spark.read()
                .parquet("s3a://my-data-lake/processed/orders/");

        // ── Process ───────────────────────────────────────────────────
        Dataset<Row> result = ordersDF
                .groupBy("product")
                .agg(
                    count("order_id").as("count"),
                    sum("price").as("revenue")
                );

        // ── Write to S3 ───────────────────────────────────────────────
        result.write()
                .mode(SaveMode.Overwrite)
                .partitionBy("year", "month")
                .parquet("s3a://my-data-lake/processed/order-metrics/");

        spark.stop();
    }
}
```

### AWS Glue Catalog with Spark

```java
// Using AWS Glue Data Catalog as Hive Metastore
SparkSession spark = SparkSession.builder()
        .appName("Glue Catalog")
        .config("hive.metastore.client.factory.class",
                "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory")
        .enableHiveSupport()
        .getOrCreate();

// Query tables registered in Glue Catalog
Dataset<Row> orders = spark.table("my_database.orders");
orders.createOrReplaceTempView("orders");

spark.sql("""
    SELECT product, SUM(price) as revenue
    FROM orders
    WHERE order_date >= '2024-01-01'
    GROUP BY product
    ORDER BY revenue DESC
""").show();
```

### EMR Cluster Launch Script

```bash
# Launch EMR cluster with Spark
aws emr create-cluster \
    --name "Order Analytics Cluster" \
    --release-label emr-7.0.0 \
    --applications Name=Spark Name=Hadoop Name=Hive Name=Zeppelin \
    --instance-type m5.xlarge \
    --instance-count 5 \
    --ec2-attributes KeyName=my-key,SubnetId=subnet-xxxxx \
    --use-default-roles \
    --log-uri s3://my-logs/emr/ \
    --configurations '[{"Classification":"spark-defaults","Properties":{"spark.executor.memory":"6g"}}]'

# Submit Spark job to EMR
aws emr add-steps \
    --cluster-id j-XXXXXXXXXX \
    --steps '[{
        "Name": "Order Processing",
        "ActionOnFailure": "CONTINUE",
        "HadoopJarStep": {
            "Jar": "command-runner.jar",
            "Args": [
                "spark-submit",
                "--class", "com.example.OrderProcessor",
                "--master", "yarn",
                "--executor-memory", "8g",
                "--num-executors", "10",
                "s3://my-code/order-processor.jar",
                "--date", "2024-01-15"
            ]
        }
    }]'
```

---

## 34. Big Data on GCP — Dataproc, BigQuery

```java
// Read from Google Cloud Storage + write to BigQuery
public class GCPBigDataJob {

    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder()
                .appName("GCP Big Data")
                .getOrCreate();

        // Read from GCS
        Dataset<Row> ordersDF = spark.read()
                .parquet("gs://my-bucket/data/orders/");

        // Process
        Dataset<Row> metrics = ordersDF
                .groupBy("product", "category")
                .agg(
                    count("order_id").as("order_count"),
                    sum(col("price").multiply(col("quantity"))).as("revenue")
                );

        // Write to BigQuery (using Spark BigQuery connector)
        metrics.write()
                .format("bigquery")
                .option("table", "my-project.ecommerce.order_metrics")
                .option("temporaryGcsBucket", "temp-bucket")
                .mode(SaveMode.Overwrite)
                .save();

        spark.stop();
    }
}
```

### Dataproc Cluster Commands

```bash
# Create Dataproc cluster
gcloud dataproc clusters create my-cluster \
    --region=us-central1 \
    --num-workers=5 \
    --worker-machine-type=n2-standard-4 \
    --master-machine-type=n2-standard-4 \
    --image-version=2.1-debian11

# Submit Spark job
gcloud dataproc jobs submit spark \
    --cluster=my-cluster \
    --region=us-central1 \
    --class=com.example.OrderProcessor \
    --jars=gs://my-bucket/order-processor.jar \
    -- --date=2024-01-15 --output=gs://my-bucket/output/

# Delete cluster when done (save costs!)
gcloud dataproc clusters delete my-cluster --region=us-central1
```

---

## 35. Containerizing Big Data — Docker & Kubernetes

### Docker Compose for Local Big Data Dev

```yaml
version: '3.8'
services:

  # HDFS NameNode
  namenode:
    image: apache/hadoop:3.3.6
    command: ["hdfs", "namenode"]
    ports:
      - "9870:9870"    # NameNode Web UI
      - "9000:9000"    # HDFS port
    environment:
      HADOOP_HOME: /opt/hadoop
    volumes:
      - namenode-data:/tmp/hadoop-root/dfs/name
    healthcheck:
      test: ["CMD", "hdfs", "dfs", "-ls", "/"]
      interval: 30s

  # HDFS DataNodes
  datanode1:
    image: apache/hadoop:3.3.6
    command: ["hdfs", "datanode"]
    environment:
      HDFS_CONF_dfs_namenode_rpc___address: namenode:9000
    volumes:
      - datanode1-data:/tmp/hadoop-root/dfs/data
    depends_on: [namenode]

  # Spark Master
  spark-master:
    image: apache/spark:3.5.0
    command: ["/opt/spark/bin/spark-class", "org.apache.spark.deploy.master.Master"]
    ports:
      - "8080:8080"   # Spark Web UI
      - "7077:7077"   # Spark Master port
    environment:
      SPARK_MASTER_HOST: spark-master

  # Spark Workers
  spark-worker-1:
    image: apache/spark:3.5.0
    command: ["/opt/spark/bin/spark-class", "org.apache.spark.deploy.worker.Worker", "spark://spark-master:7077"]
    environment:
      SPARK_WORKER_CORES: 2
      SPARK_WORKER_MEMORY: 4g
    depends_on: [spark-master]

  # Kafka
  kafka:
    image: confluentinc/cp-kafka:7.5.0
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: "true"
    depends_on: [zookeeper]

  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  # Hive Metastore
  hive-metastore:
    image: apache/hive:3.1.3
    ports:
      - "9083:9083"   # Metastore Thrift port
    environment:
      SERVICE_NAME: metastore
    depends_on: [mysql-metastore]

  mysql-metastore:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: metastore

volumes:
  namenode-data:
  datanode1-data:
```

---

---

# PART 9 — PATTERNS & BEST PRACTICES

---

## 36. Data Engineering Best Practices

### Data Quality

```java
// Data quality checks as part of pipeline
public class DataQualityChecker {

    public DataQualityResult check(Dataset<Row> df, String datasetName, String date) {
        long totalRecords = df.count();
        DataQualityResult result = new DataQualityResult(datasetName, date, totalRecords);

        // 1. Completeness — check for nulls
        for (String col : df.columns()) {
            long nullCount = df.filter(functions.col(col).isNull()).count();
            double nullPct = (double) nullCount / totalRecords * 100;
            if (nullPct > 5.0) {  // Alert if > 5% null
                result.addIssue("HIGH_NULL_RATE", col, nullPct + "% nulls");
            }
        }

        // 2. Uniqueness — check for duplicates
        long uniqueCount = df.dropDuplicates("order_id").count();
        if (uniqueCount < totalRecords) {
            long dupCount = totalRecords - uniqueCount;
            result.addIssue("DUPLICATES", "order_id", dupCount + " duplicates");
        }

        // 3. Validity — value ranges
        long negativePrice = df.filter(col("price").lt(0)).count();
        if (negativePrice > 0) {
            result.addIssue("INVALID_VALUES", "price", negativePrice + " negative prices");
        }

        // 4. Freshness — data not too old
        long oldRecords = df.filter(
            datediff(current_date(), col("order_date")).gt(7)
        ).count();
        if (oldRecords > totalRecords * 0.01) {  // > 1% old records
            result.addIssue("STALE_DATA", "order_date", "High proportion of old records");
        }

        // 5. Volume check — compare to historical baseline
        if (totalRecords < result.getExpectedMinRecords()) {
            result.addIssue("LOW_VOLUME", "total", "Only " + totalRecords + " records");
        }

        return result;
    }
}
```

### Idempotent Processing

```java
// Design pipelines to be safely re-runnable
public class IdempotentPipeline {

    public void run(String date) {
        // Write to partition by date — re-run overwrites same partition
        Dataset<Row> processed = processData(date);
        processed.write()
                .mode(SaveMode.Overwrite)           // Overwrite if already exists
                .partitionBy("year", "month", "day")
                .parquet("hdfs:///data/processed/");

        // Use INSERT OVERWRITE in Hive
        spark.sql("INSERT OVERWRITE TABLE my_table PARTITION(dt='" + date + "') ...");
    }
}
```

---

## 37. Big Data Design Patterns

### Lambda vs Kappa Selection

```
Choose Lambda when:
  ✅ Need reprocessing from scratch (algorithm changes)
  ✅ Batch accuracy is critical (financial, compliance)
  ✅ Different teams own batch and streaming

Choose Kappa when:
  ✅ Simpler maintenance is priority
  ✅ Kafka can hold long retention (all historical data)
  ✅ Stream processing can handle all use cases
```

### Partitioning Strategy

```java
// Partition by time + common filter column for fast queries
df.write()
    .partitionBy("year", "month", "day", "region")
    .parquet("hdfs:///data/orders/");

// Query only reads relevant partitions
spark.read().parquet("hdfs:///data/orders/")
    .filter("year = 2024 AND month = 1 AND region = 'North'");
// → Reads only year=2024/month=1/region=North/  directory!

// Partition size rule: aim for 128MB–1GB per partition file
// Too many small files = NameNode pressure, slow scans
// Too large files = slow single-file reads
```

### Change Data Capture (CDC) Pattern

```
Database (MySQL)
       │
       │ Binary log (binlog)
       ▼
  Debezium CDC
  (Kafka Connect)
       │
       ▼
  Kafka Topic
  (change events)
       │
  ┌────┴────┐
  ▼         ▼
Flink     Spark
Stream    Streaming
(real-    (micro-
 time)     batch)
  │         │
  ▼         ▼
Elasticsearch  Data Lake
(search)       (analytics)
```

---

## 38. Big Data Cheat Sheet

### Technology Selection Quick Reference

```
Real-time streaming (< 100ms):     Apache Flink
Near-real-time streaming (seconds): Kafka Streams or Spark Streaming
Batch processing (minutes-hours):   Apache Spark
SQL analytics on big data:          Spark SQL / Presto / BigQuery
Distributed storage:                HDFS / AWS S3 / GCS
Time-series, IoT data:              Apache Cassandra / InfluxDB
Wide-column, HBase key-value:       Apache HBase
Graph processing:                   Apache Giraph / TinkerPop
ML on big data:                     Spark MLlib / TensorFlow on Spark
Workflow orchestration:             Apache Airflow
Change data capture:                Debezium + Kafka
Column file format:                 Parquet (analytics) / ORC (Hive)
Row file format:                    Avro (streaming/Kafka)
Data lakehouse:                     Delta Lake / Apache Iceberg
```

### Spark Configuration Quick Reference

```bash
# Cluster mode submission
spark-submit \
  --master yarn \
  --deploy-mode cluster \
  --executor-cores 4 \
  --executor-memory 8g \
  --num-executors 20 \
  --driver-memory 4g \
  --conf spark.sql.shuffle.partitions=400 \
  --conf spark.sql.adaptive.enabled=true \
  --conf spark.sql.adaptive.coalescePartitions.enabled=true \
  --conf spark.serializer=org.apache.spark.serializer.KryoSerializer \
  --class com.example.MySparkApp \
  myapp.jar
```

### Kafka Producer Settings

```java
// High throughput
props.put("batch.size", 65536);
props.put("linger.ms", 5);
props.put("compression.type", "snappy");
props.put("buffer.memory", 67108864);

// High reliability
props.put("acks", "all");
props.put("retries", 3);
props.put("enable.idempotence", true);
```

### Kafka Consumer Settings

```java
// High throughput
props.put("max.poll.records", 1000);
props.put("fetch.min.bytes", 65536);
props.put("enable.auto.commit", false);

// Group management
props.put("auto.offset.reset", "earliest");
props.put("session.timeout.ms", 45000);
props.put("max.poll.interval.ms", 300000);
```

### Big Data Pipeline Checklist

```
Design:
  [ ] Identified data sources and sinks
  [ ] Defined processing semantics (at-least-once, exactly-once)
  [ ] Designed partitioning strategy
  [ ] Chosen batch vs streaming approach
  [ ] Planned for late data / out-of-order events

Development:
  [ ] Data quality checks implemented
  [ ] Pipeline is idempotent (safe to re-run)
  [ ] Schema evolution handled (Avro/Parquet with evolution)
  [ ] Error handling and dead-letter queues
  [ ] Unit tests for transformations
  [ ] Integration tests with small datasets

Production:
  [ ] Monitoring and alerting configured
  [ ] Checkpointing enabled (Spark/Flink)
  [ ] Data lineage tracked
  [ ] Backfill strategy defined
  [ ] SLA defined and monitored
  [ ] Runbook documented
  [ ] Cost optimization (spot instances, cluster sizing)
```

### Key Big Data Formulas

```
HDFS Block Size:         128MB (default), adjust based on file sizes
HDFS Replication:        3 (default), 2 for dev clusters
Spark Partition Count:   2-4 × number of CPU cores in cluster
Kafka Partitions:        max(consumer threads, throughput / partition_throughput)
HBase Row Key Design:    distribute evenly to avoid hotspots (salt, hash, reverse timestamp)
Cassandra Partition Size: aim for 100MB max per partition
```

---

*"In God we trust. All others must bring data." — W. Edwards Deming*

*Build scalable, reliable, and efficient data pipelines!*