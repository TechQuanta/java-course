# Microservices in Java — Complete Guide

> A comprehensive guide covering Microservices architecture in Java using Spring Boot and Spring Cloud — from fundamentals to production-ready patterns.

---

## Table of Contents

### PART 1 — FOUNDATIONS
1. [What are Microservices?](#1-what-are-microservices)
2. [Monolith vs Microservices](#2-monolith-vs-microservices)
3. [Microservices Architecture Principles](#3-microservices-architecture-principles)
4. [When to Use Microservices](#4-when-to-use-microservices)

### PART 2 — BUILDING MICROSERVICES WITH SPRING BOOT
5. [Technology Stack Overview](#5-technology-stack-overview)
6. [Creating Your First Microservice](#6-creating-your-first-microservice)
7. [Inter-Service Communication (REST)](#7-inter-service-communication-rest)
8. [Inter-Service Communication (Feign Client)](#8-inter-service-communication-feign-client)

### PART 3 — SPRING CLOUD COMPONENTS
9. [Service Discovery — Eureka](#9-service-discovery--eureka)
10. [API Gateway — Spring Cloud Gateway](#10-api-gateway--spring-cloud-gateway)
11. [Centralized Configuration — Config Server](#11-centralized-configuration--config-server)
12. [Load Balancing](#12-load-balancing)
13. [Circuit Breaker — Resilience4j](#13-circuit-breaker--resilience4j)

### PART 4 — MESSAGING & EVENTS
14. [Asynchronous Communication — Kafka](#14-asynchronous-communication--kafka)
15. [Asynchronous Communication — RabbitMQ](#15-asynchronous-communication--rabbitmq)
16. [Event-Driven Architecture](#16-event-driven-architecture)

### PART 5 — DATA MANAGEMENT
17. [Database per Service Pattern](#17-database-per-service-pattern)
18. [Saga Pattern — Distributed Transactions](#18-saga-pattern--distributed-transactions)
19. [CQRS Pattern](#19-cqrs-pattern)

### PART 6 — OBSERVABILITY & SECURITY
20. [Distributed Tracing — Zipkin & Micrometer](#20-distributed-tracing--zipkin--micrometer)
21. [Centralized Logging — ELK Stack](#21-centralized-logging--elk-stack)
22. [Security — JWT & OAuth2](#22-security--jwt--oauth2)
23. [Health Checks & Actuator](#23-health-checks--actuator)

### PART 7 — DEPLOYMENT
24. [Containerization with Docker](#24-containerization-with-docker)
25. [Docker Compose for Microservices](#25-docker-compose-for-microservices)
26. [Kubernetes Basics for Microservices](#26-kubernetes-basics-for-microservices)

### PART 8 — PATTERNS & BEST PRACTICES
27. [Microservices Design Patterns](#27-microservices-design-patterns)
28. [Best Practices & Anti-Patterns](#28-best-practices--anti-patterns)
29. [Complete Architecture Diagram](#29-complete-architecture-diagram)
30. [Cheat Sheet](#30-cheat-sheet)

---

---

# PART 1 — FOUNDATIONS

---

## 1. What are Microservices?

**Microservices** is an architectural style where an application is built as a collection of **small, independently deployable services**, each responsible for a **specific business capability**, communicating over well-defined APIs (typically HTTP/REST or messaging queues).

### Key Idea

Instead of building one large application (a monolith), you build many small services:

```
E-Commerce Application

Monolith:                     Microservices:
+------------------+          +----------+  +----------+  +----------+
|                  |          |  User    |  |  Product |  |  Order   |
|  User Module     |          | Service  |  | Service  |  | Service  |
|  Product Module  |    -->   +----------+  +----------+  +----------+
|  Order Module    |
|  Payment Module  |          +----------+  +----------+
|  Notification    |          | Payment  |  |  Notify  |
+------------------+          | Service  |  | Service  |
                              +----------+  +----------+
```

### Core Characteristics

- **Single Responsibility** — Each service does one thing and does it well
- **Independently Deployable** — Deploy, scale, and update each service without touching others
- **Own Data Store** — Each service owns and manages its own database
- **Communicate via APIs** — Services talk through REST, gRPC, or messaging
- **Technology Agnostic** — Each service can use a different language or framework
- **Failure Isolation** — One service failing doesn't bring down the whole system

---

## 2. Monolith vs Microservices

### Monolithic Architecture

```
Client
  |
  v
+------------------------------------------------+
|              Single Application                |
|  +----------+ +----------+ +---------------+  |
|  |   UI     | | Business | |   Data Access |  |
|  |  Layer   | |  Logic   | |     Layer     |  |
|  +----------+ +----------+ +---------------+  |
+------------------------------------------------+
          |
          v
  +---------------+
  | Single Database|
  +---------------+
```

### Microservices Architecture

```
         Client
           |
           v
    +-------------+
    |  API Gateway |
    +-------------+
    /      |      \
   /       |       \
  v        v        v
+-----+ +-----+ +-------+
|User | |Order| |Payment|
| Svc | | Svc | |  Svc  |
+-----+ +-----+ +-------+
  |        |        |
  v        v        v
+----+  +----+  +------+
| DB |  | DB |  |  DB  |
+----+  +----+  +------+
```

### Detailed Comparison

| Aspect | Monolith | Microservices |
|---|---|---|
| **Deployment** | Deploy entire app at once | Deploy each service independently |
| **Scaling** | Scale entire app | Scale only the services that need it |
| **Development** | Simple for small teams | Better for large/distributed teams |
| **Technology** | Single tech stack | Polyglot (any language per service) |
| **Database** | Shared single DB | Database per service |
| **Fault Isolation** | One bug can crash all | Failures are isolated |
| **Testing** | Simpler end-to-end tests | Complex distributed testing |
| **Latency** | In-process calls (fast) | Network calls (slower) |
| **Data Consistency** | ACID transactions | Eventual consistency |
| **Complexity** | Low initially | High — needs DevOps maturity |
| **Best For** | Small apps, startups | Large systems, big teams |

---

## 3. Microservices Architecture Principles

### 1. Single Responsibility Principle (SRP)
Each microservice should handle one and only one business domain.

```
Good:
  UserService     → manages user accounts
  OrderService    → manages orders
  PaymentService  → handles payments
  EmailService    → sends emails

Bad:
  UserOrderService → manages users AND orders (too coupled)
```

### 2. Loose Coupling
Services should know as little as possible about each other. They communicate through well-defined interfaces (APIs or events), not by sharing code or databases.

### 3. High Cohesion
All code within a service should be closely related to that service's responsibility.

### 4. Design for Failure
In a distributed system, anything can fail. Design services to handle:
- Network timeouts
- Service unavailability
- Partial failures
- Slow responses

### 5. Decentralized Data Management
Each service has its own database. No sharing of databases between services.

### 6. Infrastructure Automation
Microservices require CI/CD pipelines, container orchestration, and automated testing to be manageable.

### 7. Observable
Every service must expose health checks, metrics, and logs so the system can be monitored effectively.

---

## 4. When to Use Microservices

### Use Microservices When:

```
✅ Your team has grown beyond 2-pizza team size (>8-10 developers)
✅ Different parts of the app need to scale independently
✅ You need to deploy different parts at different frequencies
✅ Different domains need different technologies
✅ You have high DevOps maturity (CI/CD, containers, monitoring)
✅ Your monolith has become hard to maintain and deploy
✅ You have clear domain boundaries (DDD bounded contexts)
```

### Stick with Monolith When:

```
❌ You're building a startup / MVP (premature optimization)
❌ Small team (1-5 developers)
❌ Unclear domain boundaries
❌ No DevOps infrastructure in place
❌ Simple application with few moving parts
❌ Team lacks distributed systems experience
```

> **Martin Fowler's Rule:** "Don't start with microservices. Start with a monolith, identify bounded contexts, then extract microservices when needed."

---

---

# PART 2 — BUILDING MICROSERVICES WITH SPRING BOOT

---

## 5. Technology Stack Overview

### Core Technologies

| Component | Technology | Purpose |
|---|---|---|
| **Service Framework** | Spring Boot | Build individual microservices |
| **Service Discovery** | Netflix Eureka | Services find each other |
| **API Gateway** | Spring Cloud Gateway | Single entry point for clients |
| **Config Management** | Spring Cloud Config | Centralized configuration |
| **Load Balancing** | Spring Cloud LoadBalancer | Distribute requests across instances |
| **Circuit Breaker** | Resilience4j | Fault tolerance |
| **HTTP Client** | OpenFeign | Declarative REST client |
| **Messaging** | Apache Kafka / RabbitMQ | Async communication |
| **Tracing** | Micrometer + Zipkin | Distributed request tracing |
| **Logging** | ELK Stack | Centralized log aggregation |
| **Containerization** | Docker | Package and run services |
| **Orchestration** | Kubernetes | Manage containers at scale |
| **Security** | Spring Security + JWT/OAuth2 | Authentication & Authorization |

### Maven BOM (Bill of Materials)

```xml
<!-- Parent pom.xml for all services -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<properties>
    <java.version>17</java.version>
    <spring-cloud.version>2023.0.0</spring-cloud.version>
</properties>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### Sample Project Structure

```
ecommerce-microservices/
├── api-gateway/                  ← API Gateway service
├── config-server/                ← Centralized config
├── discovery-server/             ← Eureka service registry
├── user-service/                 ← User management
├── product-service/              ← Product catalog
├── order-service/                ← Order management
├── payment-service/              ← Payment processing
├── notification-service/         ← Email/SMS notifications
├── docker-compose.yml            ← Local development setup
└── README.md
```

---

## 6. Creating Your First Microservice

### User Service — Complete Example

#### pom.xml

```xml
<dependencies>
    <!-- Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- JPA + Database -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Eureka Client (for service discovery) -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>

    <!-- Actuator (health checks) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

    <!-- Validation -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
</dependencies>
```

#### application.yml

```yaml
server:
  port: 8081

spring:
  application:
    name: user-service
  datasource:
    url: jdbc:mysql://localhost:3306/user_db
    username: root
    password: secret
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
```

#### Main Application Class

```java
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
```

#### User Entity

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String firstName;

    @NotBlank
    @Column(nullable = false)
    private String lastName;

    @Email
    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private UserStatus status = UserStatus.ACTIVE;

    @CreationTimestamp
    private LocalDateTime createdAt;

    // Getters, Setters, Constructors
}
```

#### User Repository

```java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    List<User> findByStatus(UserStatus status);
}
```

#### User Service

```java
@Service
@Transactional
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional(readOnly = true)
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
    }

    public User createUser(UserRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateEmailException("Email already registered: " + request.getEmail());
        }
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        log.info("Creating new user with email: {}", request.getEmail());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
        log.info("Deleted user with id: {}", id);
    }
}
```

#### User Controller

```java
@RestController
@RequestMapping("/api/users")
@Slf4j
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody UserRequest request) {
        User created = userService.createUser(request);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.getId())
                .toUri();
        return ResponseEntity.created(location).body(created);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
```

---

## 7. Inter-Service Communication (REST)

Services communicate using HTTP REST calls. Spring provides `RestTemplate` (legacy) and `WebClient` (modern, reactive).

### Using WebClient (Recommended)

```java
// In OrderService — calling UserService and ProductService

@Service
public class OrderService {

    private final WebClient.Builder webClientBuilder;

    public OrderService(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }

    public UserResponse getUserById(Long userId) {
        return webClientBuilder.build()
                .get()
                .uri("http://user-service/api/users/{id}", userId)
                // "user-service" is the Eureka service name, not a real hostname
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, response ->
                        Mono.error(new UserNotFoundException("User not found: " + userId)))
                .bodyToMono(UserResponse.class)
                .block(); // block() for synchronous; avoid in reactive apps
    }

    public ProductResponse getProductById(Long productId) {
        return webClientBuilder.build()
                .get()
                .uri("http://product-service/api/products/{id}", productId)
                .retrieve()
                .bodyToMono(ProductResponse.class)
                .block();
    }
}
```

### WebClient Configuration Bean

```java
@Configuration
public class WebClientConfig {

    @Bean
    @LoadBalanced  // Enables Eureka-based load balancing with service names
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}
```

### DTO for Cross-Service Communication

```java
// UserResponse DTO used when OrderService fetches user data
public class UserResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    // Getters, Setters
}
```

---

## 8. Inter-Service Communication (Feign Client)

**OpenFeign** is a declarative HTTP client — you define an interface, Spring generates the implementation.

### Add Dependency

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

### Enable Feign in Main Class

```java
@SpringBootApplication
@EnableFeignClients
@EnableDiscoveryClient
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}
```

### Define Feign Clients

```java
// Feign client for UserService
@FeignClient(name = "user-service", fallback = UserServiceFallback.class)
public interface UserServiceClient {

    @GetMapping("/api/users/{id}")
    UserResponse getUserById(@PathVariable("id") Long id);

    @GetMapping("/api/users")
    List<UserResponse> getAllUsers();
}

// Feign client for ProductService
@FeignClient(name = "product-service", fallback = ProductServiceFallback.class)
public interface ProductServiceClient {

    @GetMapping("/api/products/{id}")
    ProductResponse getProductById(@PathVariable("id") Long id);

    @PutMapping("/api/products/{id}/stock")
    void updateStock(@PathVariable("id") Long id,
                     @RequestParam("quantity") int quantity);
}
```

### Fallback Implementation (Circuit Breaker)

```java
@Component
public class UserServiceFallback implements UserServiceClient {

    @Override
    public UserResponse getUserById(Long id) {
        // Return default/cached response when UserService is down
        UserResponse fallback = new UserResponse();
        fallback.setId(id);
        fallback.setFirstName("Unknown");
        fallback.setLastName("User");
        return fallback;
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return Collections.emptyList();
    }
}
```

### Using Feign Client in Service

```java
@Service
public class OrderService {

    private final UserServiceClient userServiceClient;
    private final ProductServiceClient productServiceClient;
    private final OrderRepository orderRepository;

    public OrderService(UserServiceClient userServiceClient,
                        ProductServiceClient productServiceClient,
                        OrderRepository orderRepository) {
        this.userServiceClient = userServiceClient;
        this.productServiceClient = productServiceClient;
        this.orderRepository = orderRepository;
    }

    public OrderResponse createOrder(CreateOrderRequest request) {
        // Fetch user from UserService
        UserResponse user = userServiceClient.getUserById(request.getUserId());

        // Fetch product from ProductService
        ProductResponse product = productServiceClient.getProductById(request.getProductId());

        // Create the order
        Order order = new Order();
        order.setUserId(user.getId());
        order.setProductId(product.getId());
        order.setQuantity(request.getQuantity());
        order.setTotalPrice(product.getPrice().multiply(BigDecimal.valueOf(request.getQuantity())));
        order.setStatus(OrderStatus.PENDING);

        Order savedOrder = orderRepository.save(order);

        // Update product stock
        productServiceClient.updateStock(product.getId(), -request.getQuantity());

        return mapToResponse(savedOrder, user, product);
    }
}
```

---

---

# PART 3 — SPRING CLOUD COMPONENTS

---

## 9. Service Discovery — Eureka

**Eureka** is a service registry. Services register themselves, and other services look them up by name instead of hardcoded URLs.

```
Without Eureka:           With Eureka:
OrderService calls        OrderService registers with Eureka
http://192.168.1.5:8081   OrderService asks Eureka:
(hardcoded IP - fragile)  "Where is user-service?"
                          Eureka replies: 192.168.1.5:8081
                          OrderService calls the IP dynamically
```

### Eureka Server Setup

```xml
<!-- discovery-server/pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}
```

```yaml
# discovery-server/application.yml
server:
  port: 8761

spring:
  application:
    name: discovery-server

eureka:
  instance:
    hostname: localhost
  client:
    register-with-eureka: false   # Don't register itself
    fetch-registry: false         # Don't fetch registry from itself
  server:
    wait-time-in-ms-when-sync-empty: 0
```

### Eureka Client Setup (Every Microservice)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

```yaml
# any-service/application.yml
spring:
  application:
    name: user-service   # This is the service name used for discovery

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${server.port}
```

After startup, access Eureka dashboard at `http://localhost:8761` to see all registered services.

---

## 10. API Gateway — Spring Cloud Gateway

The **API Gateway** is the single entry point for all client requests. It handles routing, authentication, rate limiting, CORS, and more.

```
Client (Browser/Mobile)
        |
        v
  +------------+
  | API Gateway |  ← Single entry point
  |   :8080    |
  +------------+
   /    |    \
  /     |     \
 v      v      v
User  Order  Product
Svc   Svc    Svc
:8081 :8082  :8083
```

### Dependencies

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

### Gateway Configuration

```yaml
# api-gateway/application.yml
server:
  port: 8080

spring:
  application:
    name: api-gateway

  cloud:
    gateway:
      routes:
        # User Service routes
        - id: user-service
          uri: lb://user-service        # lb:// = load balanced via Eureka
          predicates:
            - Path=/api/users/**
          filters:
            - StripPrefix=0
            - name: CircuitBreaker
              args:
                name: user-service
                fallbackUri: forward:/fallback/user

        # Order Service routes
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
          filters:
            - StripPrefix=0

        # Product Service routes
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/api/products/**

      # Global CORS configuration
      globalcors:
        cors-configurations:
          '[/**]':
            allowedOrigins: "http://localhost:3000"
            allowedMethods: "*"
            allowedHeaders: "*"

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

### Global Filter (Authentication)

```java
@Component
@Slf4j
public class AuthenticationFilter implements GlobalFilter, Ordered {

    private final JwtUtils jwtUtils;

    // Endpoints that don't need authentication
    private static final List<String> PUBLIC_ENDPOINTS = List.of(
        "/api/auth/login",
        "/api/auth/register",
        "/api/products"
    );

    public AuthenticationFilter(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();

        // Skip auth for public endpoints
        if (isPublicEndpoint(path)) {
            return chain.filter(exchange);
        }

        // Validate JWT token
        String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        String token = authHeader.substring(7);
        if (!jwtUtils.isTokenValid(token)) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        // Add user info to downstream request headers
        String userId = jwtUtils.extractUserId(token);
        ServerHttpRequest modifiedRequest = exchange.getRequest().mutate()
                .header("X-User-Id", userId)
                .build();

        return chain.filter(exchange.mutate().request(modifiedRequest).build());
    }

    @Override
    public int getOrder() {
        return -1; // High priority
    }

    private boolean isPublicEndpoint(String path) {
        return PUBLIC_ENDPOINTS.stream().anyMatch(path::startsWith);
    }
}
```

### Fallback Controller

```java
@RestController
@RequestMapping("/fallback")
public class FallbackController {

    @GetMapping("/user")
    public ResponseEntity<String> userFallback() {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body("User Service is temporarily unavailable. Please try again later.");
    }

    @GetMapping("/order")
    public ResponseEntity<String> orderFallback() {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body("Order Service is temporarily unavailable.");
    }
}
```

---

## 11. Centralized Configuration — Config Server

Spring Cloud Config Server stores all service configurations in a Git repository. Services fetch their config on startup.

### Config Server Setup

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```

```yaml
# config-server/application.yml
server:
  port: 8888

spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          uri: https://github.com/your-org/microservices-config
          default-label: main
          search-paths: '{application}'  # Look in folder named after service
```

### Config Repository Structure (Git)

```
microservices-config/ (Git repo)
├── user-service/
│   ├── application.yml          ← Common config for all profiles
│   ├── application-dev.yml      ← Dev config
│   └── application-prod.yml     ← Prod config
├── order-service/
│   ├── application.yml
│   └── application-prod.yml
└── api-gateway/
    └── application.yml
```

### Client Setup (Every Microservice)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

```yaml
# bootstrap.yml (loaded before application.yml)
spring:
  application:
    name: user-service
  config:
    import: "configserver:http://localhost:8888"
  profiles:
    active: dev
```

### Refresh Config Without Restart

```java
// Add @RefreshScope to beans that use config values
@RestController
@RefreshScope
public class UserController {

    @Value("${user.max-page-size:20}")
    private int maxPageSize;

    // Config reloads when POST /actuator/refresh is called
}
```

```bash
# Trigger config refresh
curl -X POST http://localhost:8081/actuator/refresh
```

---

## 12. Load Balancing

Spring Cloud LoadBalancer distributes requests across multiple instances of a service.

```
        Order Service
             |
             v
   Spring Cloud LoadBalancer
      /         \
     /           \
    v             v
User-Svc:8081  User-Svc:8082
(Instance 1)   (Instance 2)
```

### Enable Load Balancing

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

```java
@Configuration
public class WebClientConfig {

    @Bean
    @LoadBalanced  // This annotation enables load balancing
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }

    @Bean
    @LoadBalanced  // Also works with RestTemplate
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### Custom Load Balancing Strategy

```java
@Configuration
public class LoadBalancerConfig {

    @Bean
    public ReactorLoadBalancer<ServiceInstance> randomLoadBalancer(
            Environment environment,
            LoadBalancerClientFactory loadBalancerClientFactory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RandomLoadBalancer(
                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),
                name
        );
    }
}
```

---

## 13. Circuit Breaker — Resilience4j

A **Circuit Breaker** prevents cascading failures. When a service keeps failing, the circuit "opens" and fails fast instead of waiting for timeouts.

```
Circuit States:
  CLOSED  → Normal operation. Calls pass through.
  OPEN    → Service is failing. Calls are blocked (fail fast).
  HALF-OPEN → Testing if service recovered. Let some calls through.

  CLOSED ──(failures exceed threshold)──> OPEN
  OPEN   ──(wait timeout expires)──────> HALF-OPEN
  HALF-OPEN ──(success)──────────────> CLOSED
  HALF-OPEN ──(failure)──────────────> OPEN
```

### Dependency

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
```

### Configuration

```yaml
# application.yml
resilience4j:
  circuitbreaker:
    instances:
      user-service:
        sliding-window-size: 10
        failure-rate-threshold: 50          # Open circuit if 50%+ of calls fail
        wait-duration-in-open-state: 10s   # Wait 10s before trying again
        permitted-number-of-calls-in-half-open-state: 3
        slow-call-rate-threshold: 50
        slow-call-duration-threshold: 2s

  retry:
    instances:
      user-service:
        max-attempts: 3
        wait-duration: 1s
        retry-exceptions:
          - java.io.IOException
          - java.net.ConnectException

  timelimiter:
    instances:
      user-service:
        timeout-duration: 3s
```

### Usage with Annotations

```java
@Service
@Slf4j
public class OrderService {

    private final UserServiceClient userServiceClient;

    // Circuit Breaker + Retry + Time Limiter
    @CircuitBreaker(name = "user-service", fallbackMethod = "getUserFallback")
    @Retry(name = "user-service")
    @TimeLimiter(name = "user-service")
    public CompletableFuture<UserResponse> getUserById(Long userId) {
        return CompletableFuture.supplyAsync(() ->
                userServiceClient.getUserById(userId));
    }

    // Fallback method — called when circuit is open or max retries exceeded
    public CompletableFuture<UserResponse> getUserFallback(Long userId, Exception ex) {
        log.error("Fallback for user id: {}. Reason: {}", userId, ex.getMessage());
        UserResponse fallback = new UserResponse();
        fallback.setId(userId);
        fallback.setFirstName("Unknown");
        return CompletableFuture.completedFuture(fallback);
    }

    // Rate Limiter
    @RateLimiter(name = "user-service", fallbackMethod = "rateLimitFallback")
    public UserResponse getUserRateLimited(Long userId) {
        return userServiceClient.getUserById(userId);
    }

    public UserResponse rateLimitFallback(Long userId, RequestNotPermitted ex) {
        throw new ServiceException("Rate limit exceeded. Please try again later.");
    }
}
```

### Programmatic Usage

```java
@Service
public class ProductService {

    private final CircuitBreakerFactory circuitBreakerFactory;
    private final ProductServiceClient productServiceClient;

    public ProductResponse getProduct(Long id) {
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("product-service");
        return circuitBreaker.run(
            () -> productServiceClient.getProductById(id),
            throwable -> getDefaultProduct(id, throwable)
        );
    }

    private ProductResponse getDefaultProduct(Long id, Throwable throwable) {
        log.warn("Circuit breaker fallback for product {}. Error: {}", id, throwable.getMessage());
        return new ProductResponse(id, "Unavailable", BigDecimal.ZERO);
    }
}
```

---

---

# PART 4 — MESSAGING & EVENTS

---

## 14. Asynchronous Communication — Kafka

**Apache Kafka** is a distributed event streaming platform. Used for decoupled, asynchronous communication between services.

```
OrderService      Kafka Topic         Notification
(Producer)  -->  [order-placed]  -->  Service
                                      (Consumer)
                 [order-placed]  -->  Inventory
                                      Service
                                      (Consumer)
```

### Dependencies

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

### Kafka Configuration

```yaml
# application.yml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
      properties:
        spring.json.add.type.headers: false
    consumer:
      group-id: notification-service-group
      auto-offset-reset: earliest
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring.json.trusted.packages: "com.example.*"
```

### Kafka Producer (OrderService)

```java
@Service
@Slf4j
public class OrderEventProducer {

    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public OrderEventProducer(KafkaTemplate<String, OrderEvent> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publishOrderPlaced(Order order) {
        OrderEvent event = new OrderEvent(
            order.getId(),
            order.getUserId(),
            order.getProductId(),
            order.getTotalPrice(),
            "ORDER_PLACED",
            LocalDateTime.now()
        );

        kafkaTemplate.send("order-placed", String.valueOf(order.getId()), event)
                .whenComplete((result, ex) -> {
                    if (ex == null) {
                        log.info("Order event published: orderId={}, partition={}, offset={}",
                            order.getId(),
                            result.getRecordMetadata().partition(),
                            result.getRecordMetadata().offset());
                    } else {
                        log.error("Failed to publish order event for orderId={}: {}",
                            order.getId(), ex.getMessage());
                    }
                });
    }
}
```

### Kafka Consumer (NotificationService)

```java
@Service
@Slf4j
public class OrderEventConsumer {

    private final EmailService emailService;

    public OrderEventConsumer(EmailService emailService) {
        this.emailService = emailService;
    }

    @KafkaListener(
        topics = "order-placed",
        groupId = "notification-service-group"
    )
    public void handleOrderPlaced(OrderEvent event,
                                   @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
                                   @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
                                   @Header(KafkaHeaders.OFFSET) long offset) {
        log.info("Received order event from topic={}, partition={}, offset={}",
            topic, partition, offset);

        try {
            emailService.sendOrderConfirmation(event.getUserId(), event.getOrderId());
            log.info("Order confirmation sent for orderId={}", event.getOrderId());
        } catch (Exception e) {
            log.error("Failed to send order confirmation: {}", e.getMessage());
            throw e; // Re-throw to trigger retry/DLQ
        }
    }

    // Dead Letter Queue listener
    @KafkaListener(topics = "order-placed.DLT", groupId = "notification-dlt-group")
    public void handleDLT(OrderEvent event) {
        log.error("Order event in DLQ — manual intervention needed: {}", event);
        // Alert team, save to error log, etc.
    }
}
```

### Event DTO

```java
public class OrderEvent {
    private Long orderId;
    private Long userId;
    private Long productId;
    private BigDecimal totalPrice;
    private String eventType;
    private LocalDateTime timestamp;
    // Constructors, Getters, Setters
}
```

---

## 15. Asynchronous Communication — RabbitMQ

**RabbitMQ** is a message broker using AMQP protocol. Good for task queues and request-reply patterns.

### Dependencies

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

### RabbitMQ Configuration

```java
@Configuration
public class RabbitMQConfig {

    public static final String ORDER_QUEUE = "order-queue";
    public static final String ORDER_EXCHANGE = "order-exchange";
    public static final String ORDER_ROUTING_KEY = "order.placed";

    @Bean
    public Queue orderQueue() {
        // durable = survives broker restart
        return QueueBuilder.durable(ORDER_QUEUE)
                .withArgument("x-dead-letter-exchange", "order-dlx")
                .build();
    }

    @Bean
    public TopicExchange orderExchange() {
        return new TopicExchange(ORDER_EXCHANGE);
    }

    @Bean
    public Binding orderBinding(Queue orderQueue, TopicExchange orderExchange) {
        return BindingBuilder.bind(orderQueue)
                .to(orderExchange)
                .with(ORDER_ROUTING_KEY);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate;
    }
}
```

### RabbitMQ Producer

```java
@Service
public class OrderMessageProducer {

    private final AmqpTemplate amqpTemplate;

    public OrderMessageProducer(AmqpTemplate amqpTemplate) {
        this.amqpTemplate = amqpTemplate;
    }

    public void sendOrderMessage(OrderEvent event) {
        amqpTemplate.convertAndSend(
            RabbitMQConfig.ORDER_EXCHANGE,
            RabbitMQConfig.ORDER_ROUTING_KEY,
            event
        );
    }
}
```

### RabbitMQ Consumer

```java
@Service
@Slf4j
public class OrderMessageConsumer {

    @RabbitListener(queues = RabbitMQConfig.ORDER_QUEUE)
    public void processOrderMessage(OrderEvent event) {
        log.info("Processing order: {}", event.getOrderId());
        // Process the order event
    }
}
```

---

## 16. Event-Driven Architecture

Event-Driven Architecture (EDA) is a design pattern where services communicate by producing and consuming **events** rather than direct calls.

### Event Types

```
Domain Event   → Something that happened: "OrderPlaced", "PaymentCompleted"
Command        → Request to do something: "PlaceOrder", "ProcessPayment"
Query          → Request for data: "GetOrderStatus"
```

### Event Flow Example

```
1. Client sends POST /api/orders
2. OrderService creates order in PENDING state
3. OrderService publishes "OrderPlaced" event to Kafka
4. Multiple consumers react independently:
   - PaymentService: processes payment
   - InventoryService: reserves stock
   - NotificationService: sends confirmation email
5. PaymentService publishes "PaymentCompleted" event
6. OrderService updates order to CONFIRMED state
```

### Outbox Pattern (Guaranteed Event Delivery)

```java
// Problem: What if service crashes after DB write but before publishing event?
// Solution: Write event to DB (same transaction), then publish asynchronously

@Entity
@Table(name = "outbox_events")
public class OutboxEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String aggregateType;
    private Long aggregateId;
    private String eventType;
    private String payload;       // JSON string
    private boolean processed;
    private LocalDateTime createdAt;
}

@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;
    private final OutboxEventRepository outboxRepository;
    private final ObjectMapper objectMapper;

    public Order createOrder(CreateOrderRequest request) {
        // 1. Save order
        Order order = orderRepository.save(buildOrder(request));

        // 2. Save event to outbox in SAME transaction
        OutboxEvent outboxEvent = new OutboxEvent();
        outboxEvent.setAggregateType("Order");
        outboxEvent.setAggregateId(order.getId());
        outboxEvent.setEventType("OrderPlaced");
        outboxEvent.setPayload(objectMapper.writeValueAsString(new OrderEvent(order)));
        outboxRepository.save(outboxEvent);

        // Both succeed or both fail — no event lost
        return order;
    }
}

// Separate scheduler publishes outbox events
@Component
@Slf4j
public class OutboxEventPublisher {

    private final OutboxEventRepository outboxRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Scheduled(fixedDelay = 1000) // Every 1 second
    @Transactional
    public void publishPendingEvents() {
        List<OutboxEvent> pendingEvents = outboxRepository.findByProcessedFalse();
        for (OutboxEvent event : pendingEvents) {
            kafkaTemplate.send(event.getEventType(), event.getPayload());
            event.setProcessed(true);
            outboxRepository.save(event);
        }
    }
}
```

---

---

# PART 5 — DATA MANAGEMENT

---

## 17. Database per Service Pattern

Each microservice has its **own dedicated database**. No service can directly access another service's database.

```
user-service    → user_db      (MySQL)
order-service   → order_db     (PostgreSQL)
product-service → product_db   (MongoDB)
session-service → session_db   (Redis)
```

### Why Separate Databases?

```
Loose Coupling   → Services can change DB schema independently
Tech Diversity   → Use the best DB for each use case
Fault Isolation  → DB failure affects only that service
Independent Scale → Scale each DB based on that service's load
```

### Handling Cross-Service Data Needs

```
Problem: OrderService needs user's email to send confirmation.
         But OrderService can't access user_db directly.

Solutions:
  1. API Call   → OrderService calls UserService REST API (synchronous)
  2. Event      → UserService publishes UserUpdated event; OrderService stores
                  a local copy of needed user fields
  3. API Gateway→ Compose response at gateway level
```

### Data Replication via Events

```java
// UserService publishes event when user is created/updated
@Service
public class UserService {
    public User createUser(UserRequest request) {
        User user = userRepository.save(buildUser(request));
        // Publish event with user data
        eventPublisher.publishEvent(new UserCreatedEvent(user.getId(), user.getEmail(), user.getName()));
        return user;
    }
}

// OrderService listens and stores a local copy
@KafkaListener(topics = "user-events")
public void handleUserCreated(UserCreatedEvent event) {
    // Store minimal user info needed by OrderService
    UserSnapshot snapshot = new UserSnapshot(event.getUserId(), event.getEmail(), event.getName());
    userSnapshotRepository.save(snapshot);
}

// Now OrderService can use the local snapshot without calling UserService
```

---

## 18. Saga Pattern — Distributed Transactions

In microservices, you can't use a single database transaction across services. The **Saga Pattern** manages distributed transactions through a sequence of local transactions, with compensating actions on failure.

### Two Types of Sagas

**Choreography Saga** — Each service publishes events and other services react. No central coordinator.

```
OrderService         PaymentService      InventoryService
     |                    |                    |
  PlaceOrder              |                    |
     |                    |                    |
 [OrderCreated] -------> listen              listen
                          |
                    ProcessPayment
                          |
                  [PaymentCompleted] ----------> listen
                                                  |
                                          ReserveInventory
                                                  |
                                          [InventoryReserved]
                                                  |
                                          --> OrderConfirmed
```

**Orchestration Saga** — A central orchestrator directs the saga steps.

```java
@Service
public class OrderSagaOrchestrator {

    private final PaymentServiceClient paymentClient;
    private final InventoryServiceClient inventoryClient;
    private final OrderRepository orderRepository;

    @Transactional
    public void executePlaceOrderSaga(Order order) {
        try {
            // Step 1: Reserve inventory
            inventoryClient.reserveStock(order.getProductId(), order.getQuantity());

            // Step 2: Process payment
            paymentClient.processPayment(order.getUserId(), order.getTotalPrice());

            // Step 3: Confirm order
            order.setStatus(OrderStatus.CONFIRMED);
            orderRepository.save(order);

        } catch (PaymentFailedException ex) {
            // Compensate: Release inventory reservation
            inventoryClient.releaseStock(order.getProductId(), order.getQuantity());
            order.setStatus(OrderStatus.FAILED);
            orderRepository.save(order);
            throw ex;

        } catch (InventoryException ex) {
            // No compensation needed — inventory failed first
            order.setStatus(OrderStatus.FAILED);
            orderRepository.save(order);
            throw ex;
        }
    }
}
```

---

## 19. CQRS Pattern

**Command Query Responsibility Segregation** separates **read** (Query) and **write** (Command) models.

```
Client
  |
  +-- Write Request --> Command Side --> Write DB
  |                    (OrderService)   (MySQL)
  |
  +-- Read Request  --> Query Side  --> Read DB
                        (OrderQuery)    (Elasticsearch / MongoDB)
```

```java
// Command Side — handles writes
@Service
public class OrderCommandService {

    private final OrderRepository orderRepository;
    private final EventPublisher eventPublisher;

    public Order placeOrder(PlaceOrderCommand command) {
        Order order = new Order(command.getUserId(), command.getProductId(), command.getQuantity());
        Order saved = orderRepository.save(order);
        eventPublisher.publish(new OrderPlacedEvent(saved));
        return saved;
    }
}

// Query Side — handles reads (can use denormalized, optimized read model)
@Service
public class OrderQueryService {

    private final OrderReadRepository orderReadRepository;

    public List<OrderSummary> getOrdersByUser(Long userId) {
        return orderReadRepository.findSummaryByUserId(userId);
    }

    public OrderDetail getOrderDetail(Long orderId) {
        return orderReadRepository.findDetailById(orderId);
    }
}

// Projection — updates read model when events are received
@Service
public class OrderProjection {

    private final OrderReadRepository orderReadRepository;

    @EventHandler
    public void on(OrderPlacedEvent event) {
        OrderSummary summary = new OrderSummary();
        summary.setOrderId(event.getOrderId());
        summary.setUserId(event.getUserId());
        summary.setStatus("PENDING");
        orderReadRepository.save(summary);
    }
}
```

---

---

# PART 6 — OBSERVABILITY & SECURITY

---

## 20. Distributed Tracing — Zipkin & Micrometer

In microservices, a single request may span multiple services. **Distributed tracing** lets you follow a request end to end.

```
Request: GET /api/orders/123

TraceId: abc123
  |
  +-- Span 1: api-gateway           [0ms - 5ms]
  |
  +-- Span 2: order-service         [5ms - 50ms]
  |     |
  |     +-- Span 3: user-service    [10ms - 30ms]
  |     |
  |     +-- Span 4: product-service [15ms - 40ms]
  |
  Total: 50ms
```

### Dependencies

```xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-brave</artifactId>
</dependency>
<dependency>
    <groupId>io.zipkin.reporter2</groupId>
    <artifactId>zipkin-reporter-brave</artifactId>
</dependency>
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

### Configuration

```yaml
management:
  tracing:
    sampling:
      probability: 1.0  # Sample 100% of requests (use 0.1 in prod for 10%)
  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans
```

### Every service automatically propagates traceId via headers — no code changes needed!

---

## 21. Centralized Logging — ELK Stack

**ELK = Elasticsearch + Logstash + Kibana**

```
Microservice Logs
(JSON format)
      |
      v
  Logstash (collect & transform)
      |
      v
 Elasticsearch (store & index)
      |
      v
   Kibana (visualize & search)
```

### JSON Logging Configuration (logback-spring.xml)

```xml
<configuration>
    <appender name="JSON" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <customFields>{"service":"user-service","version":"1.0.0"}</customFields>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="JSON"/>
    </root>
</configuration>
```

### Structured Logging in Code

```java
@Slf4j
@Service
public class OrderService {

    public Order createOrder(CreateOrderRequest request) {
        log.info("Creating order",
            kv("userId", request.getUserId()),
            kv("productId", request.getProductId()),
            kv("quantity", request.getQuantity())
        );

        Order order = orderRepository.save(buildOrder(request));

        log.info("Order created successfully",
            kv("orderId", order.getId()),
            kv("userId", request.getUserId()),
            kv("totalPrice", order.getTotalPrice())
        );

        return order;
    }
}
```

---

## 22. Security — JWT & OAuth2

### JWT Authentication Flow

```
1. Client: POST /api/auth/login (username + password)
2. AuthService: Validates credentials, issues JWT
3. Client: Stores JWT, sends it in every request
4. API Gateway: Validates JWT on every request
5. Downstream services: Trust the user info from gateway headers
```

### JWT Service

```java
@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration:86400000}")  // 24 hours
    private long jwtExpiration;

    public String generateToken(UserDetails userDetails) {
        return generateToken(Map.of(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
```

---

## 23. Health Checks & Actuator

Every microservice should expose health endpoints so infrastructure can monitor it.

### Configuration

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: always
  health:
    circuitbreakers:
      enabled: true
    ratelimiters:
      enabled: true
```

### Custom Health Indicator

```java
@Component
public class ExternalApiHealthIndicator implements HealthIndicator {

    private final ExternalApiClient externalApiClient;

    public ExternalApiHealthIndicator(ExternalApiClient externalApiClient) {
        this.externalApiClient = externalApiClient;
    }

    @Override
    public Health health() {
        try {
            externalApiClient.ping();
            return Health.up()
                    .withDetail("externalApi", "Available")
                    .build();
        } catch (Exception e) {
            return Health.down()
                    .withDetail("externalApi", "Unavailable")
                    .withException(e)
                    .build();
        }
    }
}
```

### Health Check Response Example

```json
{
  "status": "UP",
  "components": {
    "db": { "status": "UP", "details": { "database": "MySQL" } },
    "diskSpace": { "status": "UP", "details": { "free": 10737418240 } },
    "eureka": { "status": "UP" },
    "circuitBreakers": {
      "status": "UP",
      "details": {
        "user-service": { "state": "CLOSED", "failureRate": "5.0%" }
      }
    },
    "externalApi": { "status": "UP", "details": { "externalApi": "Available" } }
  }
}
```

---

---

# PART 7 — DEPLOYMENT

---

## 24. Containerization with Docker

### Dockerfile for Each Microservice

```dockerfile
# Multi-stage build for smaller image size
FROM eclipse-temurin:17 AS builder
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Create non-root user for security
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080

# JVM tuning for containers
ENTRYPOINT ["java", \
    "-XX:MaxRAMPercentage=75.0", \
    "-XX:+UseContainerSupport", \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar", "app.jar"]
```

### Build and Run

```bash
# Build Docker image
docker build -t user-service:1.0 .

# Run container
docker run -d \
  --name user-service \
  -p 8081:8081 \
  -e SPRING_PROFILES_ACTIVE=prod \
  -e SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/user_db \
  user-service:1.0

# View logs
docker logs -f user-service

# Stop container
docker stop user-service
```

---

## 25. Docker Compose for Microservices

```yaml
# docker-compose.yml — Full local development environment
version: '3.8'

services:

  # ── Infrastructure ──────────────────────────────────────

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
    volumes:
      - mysql-data:/var/lib/mysql
      - ./init-scripts:/docker-entrypoint-initdb.d  # Creates all DBs on startup
    ports:
      - "3306:3306"
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5

  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on: [zookeeper]
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: "true"
    ports:
      - "9092:9092"

  zipkin:
    image: openzipkin/zipkin
    ports:
      - "9411:9411"

  # ── Spring Cloud Infrastructure ──────────────────────────

  config-server:
    build: ./config-server
    ports:
      - "8888:8888"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8888/actuator/health"]
      interval: 10s
      timeout: 5s
      retries: 5

  discovery-server:
    build: ./discovery-server
    ports:
      - "8761:8761"
    depends_on:
      config-server:
        condition: service_healthy

  api-gateway:
    build: ./api-gateway
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://discovery-server:8761/eureka/
    depends_on:
      - discovery-server

  # ── Microservices ──────────────────────────────────────

  user-service:
    build: ./user-service
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/user_db
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://discovery-server:8761/eureka/
      - MANAGEMENT_ZIPKIN_TRACING_ENDPOINT=http://zipkin:9411/api/v2/spans
    depends_on:
      mysql:
        condition: service_healthy
      discovery-server:
        condition: service_started

  order-service:
    build: ./order-service
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/order_db
      - SPRING_KAFKA_BOOTSTRAP_SERVERS=kafka:9092
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://discovery-server:8761/eureka/
    depends_on:
      - mysql
      - kafka
      - discovery-server

  notification-service:
    build: ./notification-service
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - SPRING_KAFKA_BOOTSTRAP_SERVERS=kafka:9092
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://discovery-server:8761/eureka/
    depends_on:
      - kafka
      - discovery-server

volumes:
  mysql-data:
```

### Init Script for Multiple Databases

```sql
-- init-scripts/01-create-databases.sql
CREATE DATABASE IF NOT EXISTS user_db;
CREATE DATABASE IF NOT EXISTS order_db;
CREATE DATABASE IF NOT EXISTS product_db;
CREATE DATABASE IF NOT EXISTS payment_db;

GRANT ALL PRIVILEGES ON user_db.* TO 'root'@'%';
GRANT ALL PRIVILEGES ON order_db.* TO 'root'@'%';
GRANT ALL PRIVILEGES ON product_db.* TO 'root'@'%';
GRANT ALL PRIVILEGES ON payment_db.* TO 'root'@'%';
```

```bash
# Start all services
docker-compose up -d

# View all logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f order-service

# Scale a service
docker-compose up -d --scale user-service=3

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

---

## 26. Kubernetes Basics for Microservices

### Deployment YAML

```yaml
# user-service-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
  labels:
    app: user-service
spec:
  replicas: 3               # Run 3 instances
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
        - name: user-service
          image: your-registry/user-service:1.0.0
          ports:
            - containerPort: 8081
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: "kubernetes"
            - name: SPRING_DATASOURCE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: db-secret
                  key: password
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8081
            initialDelaySeconds: 30
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8081
            initialDelaySeconds: 60
            periodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
    - port: 80
      targetPort: 8081
  type: ClusterIP
```

### Key Kubernetes Commands

```bash
# Apply configuration
kubectl apply -f user-service-deployment.yaml

# View running pods
kubectl get pods

# View services
kubectl get services

# View logs
kubectl logs -f pod/user-service-xyz

# Scale deployment
kubectl scale deployment user-service --replicas=5

# Rolling update (zero downtime)
kubectl set image deployment/user-service user-service=your-registry/user-service:1.1.0

# Rollback
kubectl rollout undo deployment/user-service
```

---

---

# PART 8 — PATTERNS & BEST PRACTICES

---

## 27. Microservices Design Patterns

### 1. Strangler Fig Pattern
Gradually migrate a monolith to microservices by extracting functionality piece by piece.

```
Phase 1: Monolith (100%)
Phase 2: Extract User Service (Monolith 80% + UserService 20%)
Phase 3: Extract Order Service (Monolith 60% + UserService + OrderService)
Phase 4: Fully Microservices
```

### 2. API Gateway Pattern
Single entry point for all clients. Handles routing, auth, rate limiting, SSL termination.

### 3. Service Mesh Pattern
Infrastructure layer (like Istio) handles service-to-service communication, security, observability without changing application code.

### 4. Sidecar Pattern
Deploy a helper container alongside each service container (for logging, monitoring, security).

```
Pod:
  +------------------+   +------------------+
  |  user-service    |   |  sidecar         |
  |  (app container) |   |  (logging/proxy) |
  +------------------+   +------------------+
```

### 5. Bulkhead Pattern
Isolate resources for different services to prevent one failing service from consuming all resources.

```java
// Separate thread pools for each service call
@Bean
public ThreadPoolBulkhead userServiceBulkhead() {
    ThreadPoolBulkheadConfig config = ThreadPoolBulkheadConfig.custom()
            .maxThreadPoolSize(10)
            .coreThreadPoolSize(5)
            .queueCapacity(20)
            .build();
    return ThreadPoolBulkhead.of("user-service", config);
}
```

### 6. Aggregator Pattern
One service aggregates data from multiple services and returns a combined response.

```java
// OrderAggregatorService fetches from multiple services and combines
public OrderDetailResponse getOrderDetails(Long orderId) {
    Order order = orderRepository.findById(orderId).orElseThrow();
    UserResponse user = userServiceClient.getUserById(order.getUserId());
    ProductResponse product = productServiceClient.getProductById(order.getProductId());

    return OrderDetailResponse.builder()
            .order(order)
            .user(user)
            .product(product)
            .build();
}
```

### 7. Backend for Frontend (BFF) Pattern
Create separate API Gateways for different clients (mobile BFF, web BFF).

```
Mobile App → Mobile BFF → Microservices
Web App    → Web BFF    → Microservices
3rd Party  → Public API → Microservices
```

---

## 28. Best Practices & Anti-Patterns

### Best Practices

**Service Design**
```
✅ Design around business domains (Domain-Driven Design)
✅ Keep services small — one team can own it fully
✅ Design for failure — assume every call can fail
✅ Use async communication where possible (better decoupling)
✅ Version your APIs (/api/v1/users)
✅ Use correlation IDs for tracing requests across services
✅ Document APIs with OpenAPI/Swagger
✅ Follow backward compatibility when changing APIs
```

**Data**
```
✅ One database per service — never share databases
✅ Use events for data sync between services
✅ Design for eventual consistency
✅ Use the right database type per service
✅ Implement idempotency for critical operations
```

**Operations**
```
✅ Centralized logging with correlation IDs
✅ Distributed tracing (Zipkin/Jaeger)
✅ Health checks on every service
✅ Automated CI/CD pipelines per service
✅ Use feature flags for risky deployments
✅ Implement graceful shutdown
```

### Anti-Patterns to Avoid

**Distributed Monolith**
```
❌ Microservices that must be deployed together
❌ Shared database between services
❌ Tight coupling through synchronous calls everywhere
Solution: Design truly independent services
```

**Nano-services**
```
❌ Services so small they have too much overhead
❌ Single function as a service (for non-FaaS)
Solution: Size by business capability, not technical function
```

**Chatty Services**
```
❌ OrderService makes 10 synchronous calls to fulfill one request
Solution: Use async events, batch APIs, or aggregators
```

**Ignoring Operational Complexity**
```
❌ Building microservices without CI/CD, monitoring, tracing
Solution: Invest in platform engineering before scaling microservices
```

**Premature Decomposition**
```
❌ Starting with microservices before understanding domain boundaries
Solution: Start with a monolith, extract services as boundaries become clear
```

---

## 29. Complete Architecture Diagram

```
                        CLIENT (Browser / Mobile)
                               |
                               v
                    +---------------------+
                    |     API GATEWAY      |   :8080
                    |  (Authentication,    |
                    |   Routing, Rate      |
                    |   Limiting, CORS)    |
                    +---------------------+
                     /        |        \
                    /         |         \
                   v          v          v
          +-----------+  +---------+  +----------+
          |   User    |  |  Order  |  | Product  |
          |  Service  |  | Service |  | Service  |
          |   :8081   |  |  :8082  |  |  :8083   |
          +-----------+  +---------+  +----------+
               |              |             |
               v              v             v
          [user_db]      [order_db]    [product_db]
                               |
                       (Kafka Events)
                          /         \
                         v           v
                 +----------+  +----------+
                 | Payment  |  | Notify   |
                 | Service  |  | Service  |
                 |  :8084   |  |  :8085   |
                 +----------+  +----------+
                       |
                  [payment_db]

    ─────────── SPRING CLOUD INFRASTRUCTURE ──────────────

    +------------------+    +-------------------+
    | Discovery Server |    |  Config Server    |
    |    (Eureka)      |    |  (Git backend)    |
    |     :8761        |    |      :8888        |
    +------------------+    +-------------------+

    ─────────── OBSERVABILITY ─────────────────────────────

    +----------+    +---------------+    +----------+
    |  Zipkin  |    | Elasticsearch |    |  Kibana  |
    | (Trace)  |    |    (Logs)     |    |  (UI)    |
    |  :9411   |    |    :9200      |    |  :5601   |
    +----------+    +---------------+    +----------+
```

---

## 30. Cheat Sheet

### Spring Cloud Quick Reference

| Dependency | Purpose |
|---|---|
| `spring-cloud-starter-netflix-eureka-server` | Run Eureka server |
| `spring-cloud-starter-netflix-eureka-client` | Register with Eureka |
| `spring-cloud-starter-gateway` | API Gateway |
| `spring-cloud-starter-config` | Config client |
| `spring-cloud-config-server` | Config server |
| `spring-cloud-starter-openfeign` | Declarative HTTP client |
| `spring-cloud-starter-loadbalancer` | Client-side load balancing |
| `spring-cloud-starter-circuitbreaker-resilience4j` | Circuit breaker |

### Default Ports Convention

| Service | Port |
|---|---|
| API Gateway | 8080 |
| Config Server | 8888 |
| Eureka Server | 8761 |
| User Service | 8081 |
| Order Service | 8082 |
| Product Service | 8083 |
| Payment Service | 8084 |
| Notification Service | 8085 |
| Zipkin | 9411 |
| Kafka | 9092 |
| RabbitMQ | 5672 |
| Kibana | 5601 |

### Key Annotations

| Annotation | Description |
|---|---|
| `@SpringBootApplication` | Microservice entry point |
| `@EnableDiscoveryClient` | Register with Eureka |
| `@EnableEurekaServer` | Run Eureka server |
| `@EnableConfigServer` | Run Config server |
| `@EnableFeignClients` | Enable Feign clients |
| `@FeignClient(name="svc")` | Declare Feign client |
| `@LoadBalanced` | Enable load balancing on WebClient/RestTemplate |
| `@CircuitBreaker` | Apply circuit breaker |
| `@KafkaListener` | Consume Kafka messages |
| `@RefreshScope` | Reload config without restart |
| `@GlobalFilter` | Apply filter to all gateway routes |

### Communication Patterns Quick Reference

| Scenario | Pattern | Technology |
|---|---|---|
| Real-time data fetch | Synchronous REST | Feign / WebClient |
| Background processing | Async messaging | Kafka / RabbitMQ |
| Broadcasting events | Publish-Subscribe | Kafka |
| Task queue | Point-to-Point | RabbitMQ |
| Distributed transaction | Saga | Choreography / Orchestration |
| Read-heavy optimization | CQRS | Separate read/write models |
| Fault tolerance | Circuit Breaker | Resilience4j |
| Data aggregation | Aggregator | Dedicated aggregation service |

### Microservices Checklist

```
Service Design:
[ ] Single business responsibility
[ ] Own database (no DB sharing)
[ ] Versioned REST API
[ ] OpenAPI/Swagger documentation
[ ] Error handling & fallbacks
[ ] Input validation

Resilience:
[ ] Circuit breaker configured
[ ] Retry logic with backoff
[ ] Timeout configured
[ ] Bulkhead for thread isolation
[ ] Fallback responses defined

Observability:
[ ] Structured JSON logging
[ ] Distributed tracing (Zipkin)
[ ] Health endpoints exposed
[ ] Metrics for Prometheus
[ ] Correlation IDs propagated

Deployment:
[ ] Dockerfile created
[ ] Environment-based configuration
[ ] Graceful shutdown configured
[ ] CI/CD pipeline set up
[ ] Docker Compose for local dev
[ ] Resource limits set
```

---

*Build resilient, scalable systems with Microservices in Java!*