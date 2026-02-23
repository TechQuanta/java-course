# Spring Framework & Spring Boot — Complete Tutorial

> A comprehensive guide covering the full Spring ecosystem — from core Spring Framework fundamentals to Spring Boot production-ready applications.

---

## Table of Contents

### 🌱 PART 1 — SPRING FRAMEWORK

1. [What is Spring Framework?](#1-what-is-spring-framework)
2. [Spring Architecture & Modules](#2-spring-architecture--modules)
3. [IoC & Dependency Injection](#3-ioc--dependency-injection)
4. [Spring Bean Lifecycle](#4-spring-bean-lifecycle)
5. [Spring Configuration Styles](#5-spring-configuration-styles)
6. [Spring AOP (Aspect-Oriented Programming)](#6-spring-aop-aspect-oriented-programming)
7. [Spring MVC](#7-spring-mvc)
8. [Spring JDBC & Transaction Management](#8-spring-jdbc--transaction-management)
9. [Spring ORM](#9-spring-orm)
10. [Spring Events](#10-spring-events)

### 🚀 PART 2 — SPRING BOOT

11. [What is Spring Boot?](#11-what-is-spring-boot)
12. [Spring vs Spring Boot](#12-spring-vs-spring-boot)
13. [Spring Boot Core Features](#13-spring-boot-core-features)
14. [Project Setup](#14-project-setup)
15. [Project Structure](#15-project-structure)
16. [Auto-Configuration](#16-auto-configuration)
17. [Spring Boot Starters](#17-spring-boot-starters)
18. [application.properties / application.yml](#18-applicationproperties--applicationyml)
19. [Spring Boot REST APIs](#19-spring-boot-rest-apis)
20. [Spring Data JPA](#20-spring-data-jpa)
21. [Spring Security](#21-spring-security)
22. [Spring Boot Actuator](#22-spring-boot-actuator)
23. [Profiles](#23-profiles)
24. [Exception Handling](#24-exception-handling)
25. [Validation](#25-validation)
26. [Logging](#26-logging)
27. [Testing](#27-testing)
28. [Packaging & Deployment](#28-packaging--deployment)
29. [Complete Annotations Cheat Sheet](#29-complete-annotations-cheat-sheet)

---

---

# 🌱 PART 1 — SPRING FRAMEWORK

---

## 1. What is Spring Framework?

**Spring Framework** is an open-source, lightweight, and comprehensive Java framework for building enterprise-grade applications. It was created by **Rod Johnson** and first released in **2003**.

Spring solves common enterprise problems by providing:
- A powerful **Inversion of Control (IoC)** container
- **Aspect-Oriented Programming (AOP)** support
- Built-in **transaction management**
- Integration with **databases, messaging, web, and security**
- Testability through **dependency injection**

### Spring Ecosystem Overview

```
Spring Framework (Core)
    ├── Spring Boot         → Rapid application development
    ├── Spring Data         → Data access abstraction
    ├── Spring Security     → Authentication & Authorization
    ├── Spring Cloud        → Microservices & distributed systems
    ├── Spring Batch        → Batch processing
    ├── Spring Integration  → Enterprise Integration Patterns
    └── Spring WebFlux      → Reactive programming
```

---

## 2. Spring Architecture & Modules

Spring is divided into several modules grouped into layers:

### Core Container
| Module | Description |
|---|---|
| `spring-core` | Core utilities, IoC container |
| `spring-beans` | BeanFactory, bean definitions |
| `spring-context` | ApplicationContext, events, i18n |
| `spring-context-support` | Caching, mail, scheduling |
| `spring-expression` (SpEL) | Spring Expression Language |

### Data Access / Integration
| Module | Description |
|---|---|
| `spring-jdbc` | JDBC abstraction |
| `spring-tx` | Transaction management |
| `spring-orm` | ORM integration (Hibernate, JPA) |
| `spring-jms` | Java Message Service |

### Web
| Module | Description |
|---|---|
| `spring-web` | Web basics, HTTP client |
| `spring-webmvc` | DispatcherServlet, MVC framework |
| `spring-websocket` | WebSocket support |
| `spring-webflux` | Reactive web (non-blocking) |

### AOP & Instrumentation
| Module | Description |
|---|---|
| `spring-aop` | Proxy-based AOP |
| `spring-aspects` | AspectJ integration |
| `spring-instrument` | Classloader instrumentation |

### Test
| Module | Description |
|---|---|
| `spring-test` | Testing support, MockMvc |

---

## 3. IoC & Dependency Injection

### Inversion of Control (IoC)

In traditional programming, the application controls the flow. With IoC, the **framework controls the flow** — the application "registers" its components and the framework manages them.

The Spring **IoC Container** is responsible for:
- Instantiating beans
- Wiring dependencies
- Managing bean lifecycle
- Destroying beans when no longer needed

### Two Types of IoC Containers

| Container | Interface | Description |
|---|---|---|
| BeanFactory | `BeanFactory` | Basic container, lazy-loading |
| ApplicationContext | `ApplicationContext` | Advanced container, eager-loading, events, i18n |

**ApplicationContext implementations:**

```java
// Load from XML
ApplicationContext ctx = new ClassPathXmlApplicationContext("beans.xml");

// Load from Java config
ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);

// Load from web context (Spring MVC)
ApplicationContext ctx = new GenericWebApplicationContext();
```

### Dependency Injection (DI)

DI is the design pattern Spring uses to implement IoC. Instead of creating dependencies inside a class, they are **injected from outside**.

#### 1. Constructor Injection (Recommended)

```java
@Component
public class OrderService {
    private final PaymentService paymentService;
    private final InventoryService inventoryService;

    // Spring injects both dependencies via constructor
    public OrderService(PaymentService paymentService, InventoryService inventoryService) {
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
    }
}
```

**Why constructor injection is preferred:**
- Supports immutability (`final` fields)
- Makes dependencies explicit
- Easier to unit test (no Spring context needed)
- Detects circular dependencies at startup

#### 2. Setter Injection

```java
@Component
public class NotificationService {
    private EmailService emailService;

    @Autowired
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}
```

#### 3. Field Injection (Discouraged)

```java
@Component
public class ReportService {
    @Autowired  // Not recommended — hides dependencies, hard to test
    private DataService dataService;
}
```

### @Autowired Resolution

Spring resolves beans in this order:

1. **By type** — Looks for a bean matching the field/parameter type
2. **By name** — If multiple beans match, uses the field/parameter name
3. **@Qualifier** — Explicitly specify which bean to use
4. **@Primary** — Mark one bean as the default

```java
@Component("fastEngine")
public class FastEngine implements Engine { ... }

@Component("slowEngine")
public class SlowEngine implements Engine { ... }

@Component
public class Car {
    @Autowired
    @Qualifier("fastEngine")
    private Engine engine;
}
```

---

## 4. Spring Bean Lifecycle

A Spring bean goes through well-defined lifecycle phases:

```
Container Starts
      ↓
Bean Definition Loaded
      ↓
Bean Instantiated (constructor)
      ↓
Dependencies Injected
      ↓
@PostConstruct / afterPropertiesSet()   ← Initialization
      ↓
Bean Ready for Use
      ↓
@PreDestroy / destroy()                 ← Destruction
      ↓
Container Closes
```

### Lifecycle Callbacks

```java
@Component
public class DatabaseConnection {

    @PostConstruct
    public void init() {
        System.out.println("Connecting to database...");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("Closing database connection...");
    }
}
```

### Using InitializingBean / DisposableBean

```java
@Component
public class CacheService implements InitializingBean, DisposableBean {

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("Cache initialized");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("Cache cleared");
    }
}
```

### Bean Scopes

| Scope | Description | Use Case |
|---|---|---|
| `singleton` (default) | One instance per IoC container | Stateless services |
| `prototype` | New instance on every request | Stateful beans |
| `request` | One per HTTP request | Web apps only |
| `session` | One per HTTP session | Web apps only |
| `application` | One per ServletContext | Web apps only |
| `websocket` | One per WebSocket session | WebSocket apps |

```java
@Bean
@Scope("prototype")
public ShoppingCart shoppingCart() {
    return new ShoppingCart();
}
```

---

## 5. Spring Configuration Styles

Spring supports three configuration approaches.

### A. XML Configuration (Legacy)

```xml
<!-- beans.xml -->
<beans xmlns="http://www.springframework.org/schema/beans" ...>

    <bean id="userService" class="com.example.UserService">
        <constructor-arg ref="userRepository"/>
    </bean>

    <bean id="userRepository" class="com.example.UserRepository">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource">
        <property name="url" value="jdbc:mysql://localhost/mydb"/>
        <property name="username" value="root"/>
        <property name="password" value="secret"/>
    </bean>

</beans>
```

```java
ApplicationContext ctx = new ClassPathXmlApplicationContext("beans.xml");
UserService service = ctx.getBean("userService", UserService.class);
```

### B. Java-Based Configuration (Modern)

```java
@Configuration
public class AppConfig {

    @Bean
    public DataSource dataSource() {
        BasicDataSource ds = new BasicDataSource();
        ds.setUrl("jdbc:mysql://localhost/mydb");
        ds.setUsername("root");
        ds.setPassword("secret");
        return ds;
    }

    @Bean
    public UserRepository userRepository() {
        return new UserRepository(dataSource());
    }

    @Bean
    public UserService userService() {
        return new UserService(userRepository());
    }
}
```

```java
ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
UserService service = ctx.getBean(UserService.class);
```

### C. Annotation-Based Configuration (Most Common)

```java
// Enable component scanning
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig { }
```

```java
@Component
public class UserRepository { ... }

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
```

### Mixing Configurations

```java
@Configuration
@ImportResource("classpath:legacy-beans.xml")  // Import XML into Java config
@Import(DatabaseConfig.class)                   // Import other @Configuration classes
public class AppConfig { }
```

---

## 6. Spring AOP (Aspect-Oriented Programming)

AOP allows you to separate **cross-cutting concerns** (logging, security, transactions) from business logic.

### Core AOP Concepts

| Term | Description |
|---|---|
| **Aspect** | A module encapsulating cross-cutting concerns |
| **Advice** | Action taken at a join point (what to do) |
| **Join Point** | A point in program execution (method call, exception) |
| **Pointcut** | Expression selecting which join points to intercept |
| **Weaving** | Linking aspects with application code |
| **Target Object** | The object being advised |
| **Proxy** | The AOP proxy wrapping the target |

### Types of Advice

| Type | Annotation | When it Runs |
|---|---|---|
| Before | `@Before` | Before the method |
| After | `@After` | After the method (always) |
| After Returning | `@AfterReturning` | After successful return |
| After Throwing | `@AfterThrowing` | After exception thrown |
| Around | `@Around` | Wraps the method (most powerful) |

### AOP Example

```java
@Aspect
@Component
public class LoggingAspect {

    // Pointcut: any method in the service package
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceMethods() {}

    // Before advice
    @Before("serviceMethods()")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Calling: " + joinPoint.getSignature().getName());
    }

    // After returning advice
    @AfterReturning(pointcut = "serviceMethods()", returning = "result")
    public void logAfter(JoinPoint joinPoint, Object result) {
        System.out.println("Returned: " + result);
    }

    // Around advice (most powerful)
    @Around("serviceMethods()")
    public Object measureTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = joinPoint.proceed();  // Execute the actual method
        long end = System.currentTimeMillis();
        System.out.println(joinPoint.getSignature() + " took " + (end - start) + "ms");
        return result;
    }

    // After throwing advice
    @AfterThrowing(pointcut = "serviceMethods()", throwing = "ex")
    public void logException(JoinPoint joinPoint, Exception ex) {
        System.out.println("Exception in " + joinPoint.getSignature() + ": " + ex.getMessage());
    }
}
```

### Pointcut Expressions

```java
// All methods in a package
execution(* com.example.service.*.*(..))

// Specific method
execution(public String com.example.UserService.findById(Long))

// Methods with annotation
@annotation(org.springframework.transaction.annotation.Transactional)

// Methods in a class annotated with @Service
within(@org.springframework.stereotype.Service *)

// Methods with a specific argument type
args(Long, ..)
```

### Enable AOP

```java
@Configuration
@EnableAspectJAutoProxy
public class AppConfig { }
```

---

## 7. Spring MVC

Spring MVC follows the **Model-View-Controller** pattern for building web applications.

### How Spring MVC Works

```
Browser Request
      ↓
DispatcherServlet (Front Controller)
      ↓
HandlerMapping → finds the right Controller
      ↓
Controller processes request, returns Model + View name
      ↓
ViewResolver → resolves the view (Thymeleaf/JSP)
      ↓
View renders the response
      ↓
Browser Response
```

### DispatcherServlet Setup (web.xml — Legacy)

```xml
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/spring-mvc.xml</param-value>
    </init-param>
</servlet>
<servlet-mapping>
    <servlet-name>dispatcher</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

### Controller Example

```java
@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Returns a view name
    @GetMapping
    public String listUsers(Model model) {
        model.addAttribute("users", userService.findAll());
        return "user/list";  // → resolves to /templates/user/list.html
    }

    // GET with path variable
    @GetMapping("/{id}")
    public String viewUser(@PathVariable Long id, Model model) {
        model.addAttribute("user", userService.findById(id));
        return "user/detail";
    }

    // POST form submission
    @PostMapping
    public String createUser(@ModelAttribute User user, BindingResult result) {
        if (result.hasErrors()) {
            return "user/form";
        }
        userService.save(user);
        return "redirect:/users";
    }

    // REST endpoint (returns JSON)
    @GetMapping("/api")
    @ResponseBody
    public List<User> getUsersJson() {
        return userService.findAll();
    }
}
```

### Model, ModelAndView, RedirectAttributes

```java
// Using Model
@GetMapping("/profile")
public String profile(Model model) {
    model.addAttribute("key", "value");
    return "profile";
}

// Using ModelAndView
@GetMapping("/dashboard")
public ModelAndView dashboard() {
    ModelAndView mav = new ModelAndView("dashboard");
    mav.addObject("stats", statsService.getStats());
    return mav;
}

// Redirect with flash attributes
@PostMapping("/save")
public String save(RedirectAttributes attrs) {
    attrs.addFlashAttribute("message", "Saved successfully!");
    return "redirect:/list";
}
```

### ViewResolver Configuration

```java
@Bean
public InternalResourceViewResolver viewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setPrefix("/WEB-INF/views/");
    resolver.setSuffix(".jsp");
    return resolver;
}
```

---

## 8. Spring JDBC & Transaction Management

### Spring JDBC Template

```java
@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Query for list
    public List<User> findAll() {
        return jdbcTemplate.query(
            "SELECT * FROM users",
            (rs, rowNum) -> new User(
                rs.getLong("id"),
                rs.getString("name"),
                rs.getString("email")
            )
        );
    }

    // Query for single object
    public User findById(Long id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM users WHERE id = ?",
            new Object[]{id},
            (rs, rowNum) -> new User(rs.getLong("id"), rs.getString("name"), rs.getString("email"))
        );
    }

    // Query for scalar value
    public int countUsers() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Integer.class);
    }

    // Update (INSERT, UPDATE, DELETE)
    public int save(User user) {
        return jdbcTemplate.update(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            user.getName(), user.getEmail()
        );
    }

    // Batch update
    public void saveAll(List<User> users) {
        jdbcTemplate.batchUpdate(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            users,
            users.size(),
            (ps, user) -> {
                ps.setString(1, user.getName());
                ps.setString(2, user.getEmail());
            }
        );
    }
}
```

### Transaction Management

Spring provides declarative transaction management via `@Transactional`.

```java
@Service
@Transactional  // Apply to all methods in class
public class OrderService {

    private final OrderRepository orderRepository;
    private final InventoryRepository inventoryRepository;

    // This method runs in a transaction
    // If any exception occurs, the whole transaction is rolled back
    public void placeOrder(Order order) {
        orderRepository.save(order);
        inventoryRepository.decreaseStock(order.getProductId(), order.getQuantity());
        // If decreaseStock fails, orderRepository.save is also rolled back
    }

    // Custom transaction settings
    @Transactional(
        propagation = Propagation.REQUIRED,
        isolation = Isolation.READ_COMMITTED,
        timeout = 30,
        rollbackFor = Exception.class,
        readOnly = false
    )
    public void processPayment(Payment payment) { ... }

    // Read-only transaction (optimized for SELECT)
    @Transactional(readOnly = true)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
```

### Transaction Propagation

| Propagation | Description |
|---|---|
| `REQUIRED` (default) | Join existing transaction or create new one |
| `REQUIRES_NEW` | Always create a new transaction (suspend existing) |
| `SUPPORTS` | Join existing or run without transaction |
| `NOT_SUPPORTED` | Always run without transaction |
| `MANDATORY` | Must join existing; exception if none |
| `NEVER` | Must run without transaction; exception if one exists |
| `NESTED` | Nested within existing transaction (savepoint) |

### Transaction Isolation Levels

| Isolation | Dirty Read | Non-repeatable Read | Phantom Read |
|---|---|---|---|
| `READ_UNCOMMITTED` | Possible | Possible | Possible |
| `READ_COMMITTED` | Prevented | Possible | Possible |
| `REPEATABLE_READ` | Prevented | Prevented | Possible |
| `SERIALIZABLE` | Prevented | Prevented | Prevented |

### Enable Transaction Management

```java
@Configuration
@EnableTransactionManagement
public class AppConfig {

    @Bean
    public PlatformTransactionManager transactionManager(DataSource ds) {
        return new DataSourceTransactionManager(ds);
    }
}
```

---

## 9. Spring ORM

Spring ORM integrates with popular ORM frameworks like Hibernate and JPA.

### Hibernate with Spring

```java
@Configuration
@EnableTransactionManagement
public class HibernateConfig {

    @Bean
    public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
        LocalSessionFactoryBean factory = new LocalSessionFactoryBean();
        factory.setDataSource(dataSource);
        factory.setPackagesToScan("com.example.model");
        Properties props = new Properties();
        props.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
        props.put("hibernate.show_sql", "true");
        props.put("hibernate.hbm2ddl.auto", "update");
        factory.setHibernateProperties(props);
        return factory;
    }

    @Bean
    public HibernateTransactionManager transactionManager(SessionFactory sf) {
        return new HibernateTransactionManager(sf);
    }
}
```

### Using HibernateTemplate

```java
@Repository
public class UserDao {

    private final HibernateTemplate hibernateTemplate;

    public UserDao(SessionFactory sessionFactory) {
        this.hibernateTemplate = new HibernateTemplate(sessionFactory);
    }

    public void save(User user) {
        hibernateTemplate.save(user);
    }

    public User findById(Long id) {
        return hibernateTemplate.get(User.class, id);
    }

    public List<User> findAll() {
        return hibernateTemplate.loadAll(User.class);
    }
}
```

---

## 10. Spring Events

Spring has a built-in event system for decoupled communication between components.

### Publishing Events

```java
@Service
public class UserService {

    private final ApplicationEventPublisher eventPublisher;

    public UserService(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    public User registerUser(User user) {
        User saved = userRepository.save(user);
        eventPublisher.publishEvent(new UserRegisteredEvent(this, saved));
        return saved;
    }
}
```

### Custom Event

```java
public class UserRegisteredEvent extends ApplicationEvent {
    private final User user;

    public UserRegisteredEvent(Object source, User user) {
        super(source);
        this.user = user;
    }

    public User getUser() { return user; }
}
```

### Listening to Events

```java
@Component
public class WelcomeEmailListener {

    @EventListener
    public void handleUserRegistered(UserRegisteredEvent event) {
        User user = event.getUser();
        System.out.println("Sending welcome email to: " + user.getEmail());
    }
}

// Async listener
@Component
public class AuditListener {

    @Async
    @EventListener
    public void handleUserRegistered(UserRegisteredEvent event) {
        // Runs in a separate thread
        auditService.log(event.getUser());
    }
}
```

### Built-in Spring Events

| Event | When Published |
|---|---|
| `ContextRefreshedEvent` | ApplicationContext initialized or refreshed |
| `ContextStartedEvent` | ApplicationContext started |
| `ContextStoppedEvent` | ApplicationContext stopped |
| `ContextClosedEvent` | ApplicationContext closed |
| `RequestHandledEvent` | HTTP request handled (web apps) |

---
---

# 🚀 PART 2 — SPRING BOOT

---

## 11. What is Spring Boot?

**Spring Boot** is an opinionated, production-ready framework built on top of the Spring Framework. It simplifies the process of building stand-alone, production-grade Spring-based applications by eliminating most of the boilerplate configuration.

Spring Boot was released in **2014** by Pivotal Team and has since become the most popular way to build Spring applications.

### Key Goals
- Minimize configuration effort
- Provide production-ready defaults
- Enable standalone application development (no external server required)
- Reduce time-to-production

---

## 12. Spring vs Spring Boot

| Feature | Spring Framework | Spring Boot |
|---|---|---|
| Configuration | Manual XML/Java config | Auto-configured |
| Server | External (Tomcat/Jetty) | Embedded (Tomcat by default) |
| Dependency Management | Manual | Starter POMs |
| Setup Time | High | Very Low |
| Opinionated | No | Yes (smart defaults) |
| Actuator/Monitoring | Manual setup | Built-in |
| Boilerplate | Significant | Minimal |
| Entry Point | Various | `@SpringBootApplication` main() |

---

## 13. Spring Boot Core Features

- **Auto-Configuration** — Automatically configures beans based on classpath
- **Starter Dependencies** — Curated dependency bundles
- **Embedded Server** — Tomcat, Jetty, or Undertow built in
- **Actuator** — Built-in monitoring and management endpoints
- **Spring Boot CLI** — Command-line tool for rapid prototyping
- **Externalized Configuration** — `application.properties` / `.yml` / environment variables
- **Spring Initializr** — Web-based project generator at [start.spring.io](https://start.spring.io)
- **DevTools** — Live reload and enhanced developer experience

---

## 14. Project Setup

### Option A: Spring Initializr (Recommended)

Visit [https://start.spring.io](https://start.spring.io) and configure:

- **Project**: Maven or Gradle
- **Language**: Java / Kotlin / Groovy
- **Spring Boot Version**: Latest stable
- **Dependencies**: Add what you need (Web, JPA, Security, etc.)

Download and extract the ZIP, then open in your IDE.

### Option B: Maven from Scratch

```xml
<!-- pom.xml -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

### Main Application Class

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

> `@SpringBootApplication` is a combination of:
> - `@Configuration`
> - `@EnableAutoConfiguration`
> - `@ComponentScan`

### Run the App

```bash
mvn spring-boot:run
# or
./mvnw spring-boot:run
```

---

## 15. Project Structure

```
demo/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       ├── DemoApplication.java         ← Entry point
│   │   │       ├── controller/
│   │   │       │   └── UserController.java
│   │   │       ├── service/
│   │   │       │   └── UserService.java
│   │   │       ├── repository/
│   │   │       │   └── UserRepository.java
│   │   │       ├── model/
│   │   │       │   └── User.java
│   │   │       ├── dto/
│   │   │       │   └── UserRequest.java
│   │   │       └── config/
│   │   │           └── SecurityConfig.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── application-dev.properties
│   │       ├── application-prod.properties
│   │       ├── static/                          ← CSS, JS, images
│   │       └── templates/                       ← Thymeleaf templates
│   └── test/
│       └── java/...
├── pom.xml
└── README.md
```

**Recommended Layered Architecture:**

```
Controller (HTTP) → Service (Business Logic) → Repository (Database) → DB
```

---

## 16. Auto-Configuration

Spring Boot's auto-configuration automatically configures beans based on what's on the classpath.

**Examples:**
- `spring-boot-starter-web` on classpath → Auto-configures `DispatcherServlet`, `Jackson`, embedded Tomcat
- `H2` on classpath → Auto-configures an in-memory datasource
- `spring-boot-starter-security` on classpath → Auto-configures security filter chain

### How It Works

Spring Boot reads configuration classes from:

```
META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
```

Each auto-configuration class uses `@Conditional` annotations to apply only when certain conditions are met:

```java
@ConditionalOnClass(DataSource.class)    // Only if DataSource is on classpath
@ConditionalOnMissingBean               // Only if no bean of this type exists
@ConditionalOnProperty(name="...",      // Only if property is set
    havingValue="true")
```

### Disable Specific Auto-Configuration

```java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class DemoApplication { }
```

### See What Was Auto-Configured

```properties
# Add to application.properties
debug=true
```

This prints a **Conditions Evaluation Report** at startup.

---

## 17. Spring Boot Starters

Starters are dependency descriptors that bundle commonly used libraries together.

| Starter | Purpose |
|---|---|
| `spring-boot-starter-web` | REST APIs, Spring MVC, embedded Tomcat |
| `spring-boot-starter-data-jpa` | JPA with Hibernate |
| `spring-boot-starter-security` | Spring Security |
| `spring-boot-starter-test` | JUnit, Mockito, AssertJ |
| `spring-boot-starter-actuator` | Monitoring & metrics |
| `spring-boot-starter-thymeleaf` | Thymeleaf templating engine |
| `spring-boot-starter-mail` | Email support (JavaMail) |
| `spring-boot-starter-cache` | Spring Cache abstraction |
| `spring-boot-starter-validation` | Bean Validation (Hibernate Validator) |
| `spring-boot-starter-aop` | Aspect-Oriented Programming |
| `spring-boot-starter-data-redis` | Redis integration |
| `spring-boot-starter-data-mongodb` | MongoDB integration |
| `spring-boot-starter-webflux` | Reactive web (non-blocking) |
| `spring-boot-starter-batch` | Spring Batch |
| `spring-boot-starter-amqp` | RabbitMQ / AMQP |

---

## 18. application.properties / application.yml

Spring Boot externalizes configuration using `src/main/resources/application.properties` or `application.yml`.

### application.properties

```properties
# Server
server.port=8080
server.servlet.context-path=/api

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Logging
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.file.name=logs/app.log

# Custom properties
app.name=My App
app.version=1.0.0
app.jwt.secret=my-secret-key
app.jwt.expiration=86400000
```

### application.yml (equivalent, preferred for complex config)

```yaml
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

logging:
  level:
    root: INFO
    com.example: DEBUG

app:
  name: My App
  version: 1.0.0
  jwt:
    secret: my-secret-key
    expiration: 86400000
```

### Reading Custom Properties

```java
// Simple value injection
@Component
public class AppInfo {
    @Value("${app.name}")
    private String appName;

    @Value("${app.version:unknown}")  // "unknown" is the default
    private String appVersion;
}
```

### @ConfigurationProperties (Recommended for Groups)

```java
@ConfigurationProperties(prefix = "app.jwt")
@Component
public class JwtProperties {
    private String secret;
    private long expiration;
    // Getters & Setters
}
```

```java
@Service
public class JwtService {
    private final JwtProperties jwtProperties;

    public JwtService(JwtProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    public String generateToken() {
        // Use jwtProperties.getSecret(), jwtProperties.getExpiration()
    }
}
```

---

## 19. Spring Boot REST APIs

### Controller Annotations

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    // GET by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST - Create
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User saved = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // PUT - Update
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return ResponseEntity.ok(userService.update(id, user));
    }

    // PATCH - Partial Update
    @PatchMapping("/{id}/email")
    public ResponseEntity<User> updateEmail(@PathVariable Long id, @RequestParam String email) {
        return ResponseEntity.ok(userService.updateEmail(id, email));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
```

### Request Parameters

```java
// /api/users?page=0&size=10&name=John&sort=name,asc
@GetMapping
public Page<User> getUsers(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size,
    @RequestParam(required = false) String name,
    Pageable pageable
) { ... }
```

### HTTP Status Codes Reference

| Code | Meaning | When to Use |
|---|---|---|
| 200 OK | Success | GET, PUT success |
| 201 Created | Resource created | POST success |
| 204 No Content | Success, no body | DELETE success |
| 400 Bad Request | Invalid input | Validation failure |
| 401 Unauthorized | Not authenticated | Missing/invalid token |
| 403 Forbidden | Not authorized | Insufficient permissions |
| 404 Not Found | Resource missing | Entity doesn't exist |
| 409 Conflict | Conflict | Duplicate resource |
| 500 Internal Server Error | Server error | Unhandled exception |

---

## 20. Spring Data JPA

### Entity

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Constructors, Getters, Setters
}
```

### Repository

```java
public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query methods
    List<User> findByName(String name);
    Optional<User> findByEmail(String email);
    List<User> findByNameContainingIgnoreCase(String keyword);
    List<User> findByStatus(UserStatus status);
    long countByStatus(UserStatus status);
    boolean existsByEmail(String email);

    // Custom JPQL
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.status = :status")
    Optional<User> findByEmailAndStatus(@Param("email") String email,
                                        @Param("status") UserStatus status);

    // Native SQL
    @Query(value = "SELECT * FROM users WHERE created_at >= ?1", nativeQuery = true)
    List<User> findRecentUsers(LocalDateTime since);

    // Paging
    Page<User> findByStatus(UserStatus status, Pageable pageable);

    // Modifying query
    @Modifying
    @Query("UPDATE User u SET u.status = :status WHERE u.id = :id")
    int updateUserStatus(@Param("id") Long id, @Param("status") UserStatus status);
}
```

### Service Layer

```java
@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new DuplicateEmailException("Email already exists");
        }
        return userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.deleteById(id);
    }
}
```

### JPA Relationships

```java
// One-to-Many
@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
private List<Order> orders = new ArrayList<>();

// Many-to-One
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_id", nullable = false)
private User user;

// Many-to-Many
@ManyToMany
@JoinTable(
    name = "user_roles",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id")
)
private Set<Role> roles = new HashSet<>();
```

---

## 21. Spring Security

### Basic Setup (Spring Boot 3.x)

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### Security Configuration

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final UserDetailsService userDetailsService;

    public SecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }
}
```

### Method-Level Security

```java
@RestController
public class AdminController {

    @GetMapping("/admin/users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getAllUsers() { ... }

    @DeleteMapping("/admin/users/{id}")
    @PreAuthorize("hasRole('ADMIN') or #id == authentication.principal.id")
    public void deleteUser(@PathVariable Long id) { ... }

    @GetMapping("/my-data")
    @PostAuthorize("returnObject.username == authentication.name")
    public User getMyData() { ... }
}
```

---

## 22. Spring Boot Actuator

Actuator adds production-ready monitoring endpoints to your app.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

### Common Endpoints

| Endpoint | Description |
|---|---|
| `/actuator/health` | App health status |
| `/actuator/info` | App info |
| `/actuator/metrics` | Application metrics |
| `/actuator/env` | Environment properties |
| `/actuator/beans` | All Spring beans |
| `/actuator/mappings` | All URL mappings |
| `/actuator/loggers` | Logging configuration |
| `/actuator/threaddump` | Thread dump |
| `/actuator/heapdump` | Heap dump |
| `/actuator/shutdown` | Gracefully shut down app |

### Configuration

```properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always
management.endpoints.web.base-path=/manage
management.info.env.enabled=true

# App info shown at /actuator/info
info.app.name=My Application
info.app.version=1.0.0
info.app.description=A Spring Boot demo app
```

---

## 23. Profiles

### Define Profile-Specific Files

```
application.properties          ← Default (always loaded)
application-dev.properties      ← Development
application-prod.properties     ← Production
application-test.properties     ← Testing
```

### Activate a Profile

```properties
# In application.properties
spring.profiles.active=dev
```

```bash
# Command line
java -jar app.jar --spring.profiles.active=prod

# Environment variable
export SPRING_PROFILES_ACTIVE=prod
```

### Profile-Specific Beans

```java
@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }
}

@Configuration
@Profile("prod")
public class ProdConfig {
    @Bean
    public DataSource prodDataSource() {
        // MySQL / PostgreSQL config
    }
}
```

---

## 24. Exception Handling

### Global Exception Handler

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ErrorResponse(404, ex.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.toList());
        return ResponseEntity.badRequest()
            .body(new ErrorResponse(400, "Validation failed", errors));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        return ResponseEntity.internalServerError()
            .body(new ErrorResponse(500, "Internal Server Error"));
    }
}
```

### Custom Exceptions

```java
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

public class DuplicateEmailException extends RuntimeException {
    public DuplicateEmailException(String message) {
        super(message);
    }
}
```

### Error Response DTO

```java
public class ErrorResponse {
    private int status;
    private String message;
    private List<String> errors;
    private LocalDateTime timestamp = LocalDateTime.now();

    public ErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ErrorResponse(int status, String message, List<String> errors) {
        this(status, message);
        this.errors = errors;
    }
    // Getters
}
```

---

## 25. Validation

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

### Annotate Your DTO

```java
public class UserRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotNull
    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 120, message = "Age must be less than 120")
    private Integer age;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number")
    private String phone;
}
```

### Trigger Validation in Controller

```java
@PostMapping
public ResponseEntity<User> create(@Valid @RequestBody UserRequest request) {
    // Validation runs automatically; MethodArgumentNotValidException thrown on failure
    return ResponseEntity.status(HttpStatus.CREATED).body(userService.create(request));
}
```

### Common Validation Annotations

| Annotation | Purpose |
|---|---|
| `@NotNull` | Must not be null |
| `@NotBlank` | Not null, not empty, not whitespace (String) |
| `@NotEmpty` | Not null, not empty |
| `@Size(min,max)` | String/collection size range |
| `@Min(value)` | Minimum numeric value |
| `@Max(value)` | Maximum numeric value |
| `@Email` | Valid email format |
| `@Pattern(regexp)` | Must match regex |
| `@Positive` | Must be > 0 |
| `@PositiveOrZero` | Must be >= 0 |
| `@Future` | Date must be in the future |
| `@Past` | Date must be in the past |
| `@Valid` | Trigger cascaded validation on nested objects |

---

## 26. Logging

Spring Boot uses **SLF4J** with **Logback** by default.

### Usage in Code

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {

    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    // With Lombok, use: @Slf4j on the class

    public User findById(Long id) {
        log.debug("Finding user with id: {}", id);
        return userRepository.findById(id)
            .orElseThrow(() -> {
                log.warn("User not found: {}", id);
                return new ResourceNotFoundException("User not found");
            });
    }
}
```

### Log Levels (lowest → highest severity)

`TRACE` → `DEBUG` → `INFO` → `WARN` → `ERROR`

### Configuration

```properties
logging.level.root=WARN
logging.level.com.example=DEBUG
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql=TRACE

# Log to file
logging.file.name=logs/application.log
logging.logback.rollingpolicy.max-file-size=10MB
logging.logback.rollingpolicy.max-history=30
```

---

## 27. Testing

### Unit Test

```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void shouldReturnUserWhenFound() {
        User user = new User(1L, "John", "john@example.com");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Optional<User> result = userService.findById(1L);

        assertTrue(result.isPresent());
        assertEquals("John", result.get().getName());
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    void shouldThrowWhenUserNotFound() {
        when(userRepository.findById(99L)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> userService.findById(99L));
    }
}
```

### Web Layer Test

```java
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldReturnUser() throws Exception {
        User user = new User(1L, "John", "john@example.com");
        when(userService.findById(1L)).thenReturn(Optional.of(user));

        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("John"))
            .andExpect(jsonPath("$.email").value("john@example.com"));
    }

    @Test
    void shouldCreateUser() throws Exception {
        User user = new User(null, "Jane", "jane@example.com");
        User saved = new User(1L, "Jane", "jane@example.com");
        when(userService.save(any())).thenReturn(saved);

        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(user)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1));
    }
}
```

### Repository (JPA) Test

```java
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void shouldFindByEmail() {
        User user = new User(null, "John", "john@test.com");
        userRepository.save(user);

        Optional<User> found = userRepository.findByEmail("john@test.com");

        assertTrue(found.isPresent());
        assertEquals("John", found.get().getName());
    }
}
```

### Full Integration Test

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
class UserIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void shouldCreateAndFetchUser() {
        User user = new User(null, "Jane", "jane@test.com");
        ResponseEntity<User> response = restTemplate.postForEntity("/api/users", user, User.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getBody().getId());

        // Verify we can fetch it
        ResponseEntity<User> getResponse = restTemplate
            .getForEntity("/api/users/" + response.getBody().getId(), User.class);
        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
    }
}
```

---

## 28. Packaging & Deployment

### Build Executable JAR

```bash
mvn clean package
# Creates: target/demo-0.0.1-SNAPSHOT.jar (fat/uber JAR with all dependencies)
```

### Run the JAR

```bash
java -jar target/demo.jar

# With profile
java -jar target/demo.jar --spring.profiles.active=prod

# With custom properties
java -jar target/demo.jar --server.port=9090 --spring.datasource.url=jdbc:mysql://...
```

### Dockerfile

```dockerfile
# Multi-stage build for smaller image
FROM eclipse-temurin:17 AS builder
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve
COPY src ./src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```bash
docker build -t my-spring-app .
docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod my-spring-app
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/mydb
      - SPRING_DATASOURCE_USERNAME=root
      - SPRING_DATASOURCE_PASSWORD=secret
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: mydb
    ports:
      - "3306:3306"
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```

---

## 29. Complete Annotations Cheat Sheet

### Spring Core Annotations

| Annotation | Description |
|---|---|
| `@Component` | Generic Spring-managed bean |
| `@Service` | Service layer bean |
| `@Repository` | Data access bean (+ exception translation) |
| `@Controller` | MVC controller |
| `@RestController` | REST controller (@Controller + @ResponseBody) |
| `@Configuration` | Defines configuration class |
| `@Bean` | Declares a bean in a @Configuration class |
| `@Autowired` | Injects a dependency |
| `@Qualifier("name")` | Specifies which bean to inject |
| `@Primary` | Preferred bean when multiple candidates exist |
| `@Value("${prop}")` | Injects a property value |
| `@Lazy` | Lazy initialization |
| `@Scope("prototype")` | Bean scope |
| `@ComponentScan` | Enables component scanning |
| `@Import` | Imports another configuration class |
| `@PropertySource` | Loads a properties file |
| `@Profile("env")` | Active only in specified profile |

### Spring Boot Annotations

| Annotation | Description |
|---|---|
| `@SpringBootApplication` | Entry point; enables auto-config, component scan |
| `@EnableAutoConfiguration` | Enables Spring Boot auto-configuration |
| `@ConfigurationProperties(prefix="...")` | Binds external config to a POJO |
| `@ConditionalOnClass` | Bean created only if class is on classpath |
| `@ConditionalOnMissingBean` | Bean created only if no other bean of type exists |
| `@ConditionalOnProperty` | Bean created based on property value |

### Web / REST Annotations

| Annotation | Description |
|---|---|
| `@RequestMapping` | Maps URL patterns |
| `@GetMapping` | HTTP GET |
| `@PostMapping` | HTTP POST |
| `@PutMapping` | HTTP PUT |
| `@DeleteMapping` | HTTP DELETE |
| `@PatchMapping` | HTTP PATCH |
| `@PathVariable` | Extracts URI template variable |
| `@RequestParam` | Extracts query parameter |
| `@RequestBody` | Binds HTTP body to method argument |
| `@ResponseBody` | Writes return value to HTTP response |
| `@ResponseStatus` | Sets HTTP status code |
| `@CrossOrigin` | Enables CORS |
| `@RequestHeader` | Extracts HTTP header value |

### Data / JPA Annotations

| Annotation | Description |
|---|---|
| `@Entity` | JPA entity |
| `@Table(name="...")` | Maps to a specific table |
| `@Id` | Primary key |
| `@GeneratedValue` | Auto-generate primary key |
| `@Column` | Column configuration |
| `@OneToMany` | One-to-many relationship |
| `@ManyToOne` | Many-to-one relationship |
| `@ManyToMany` | Many-to-many relationship |
| `@JoinColumn` | Foreign key column |
| `@JoinTable` | Join table for M2M |
| `@Transactional` | Wraps method in a transaction |
| `@Query` | Custom JPQL or native SQL |
| `@Modifying` | Marks query as update/delete |
| `@Enumerated` | Maps enum to column |
| `@Embedded` | Embeds another class |
| `@CreationTimestamp` | Auto-set on create |
| `@UpdateTimestamp` | Auto-set on update |

### AOP Annotations

| Annotation | Description |
|---|---|
| `@Aspect` | Declares an aspect |
| `@Pointcut` | Defines a reusable pointcut expression |
| `@Before` | Runs before the method |
| `@After` | Runs after the method (always) |
| `@AfterReturning` | Runs after successful return |
| `@AfterThrowing` | Runs after exception thrown |
| `@Around` | Wraps the method |
| `@EnableAspectJAutoProxy` | Enables AOP proxy support |

### Security Annotations

| Annotation | Description |
|---|---|
| `@EnableWebSecurity` | Enables Spring Security |
| `@EnableMethodSecurity` | Enables method-level security |
| `@PreAuthorize("expr")` | Check before method executes |
| `@PostAuthorize("expr")` | Check after method returns |
| `@Secured("ROLE_ADMIN")` | Role-based access control |
| `@RolesAllowed` | JSR-250 role annotation |

### Testing Annotations

| Annotation | Description |
|---|---|
| `@SpringBootTest` | Full integration test context |
| `@WebMvcTest` | Test only web layer |
| `@DataJpaTest` | Test only JPA layer |
| `@MockBean` | Creates mock in Spring context |
| `@Mock` | Creates a Mockito mock |
| `@InjectMocks` | Injects mocks into class under test |
| `@ExtendWith(MockitoExtension.class)` | Enables Mockito |
| `@Test` | JUnit test method |
| `@BeforeEach` | Runs before each test |
| `@AfterEach` | Runs after each test |
| `@BeforeAll` | Runs once before all tests |
| `@DisplayName` | Custom test name |
| `@ParameterizedTest` | Run test with multiple inputs |

### Scheduling & Async Annotations

| Annotation | Description |
|---|---|
| `@EnableScheduling` | Enable scheduling support |
| `@Scheduled(cron="0 0 * * * *")` | Schedule a method |
| `@EnableAsync` | Enable async support |
| `@Async` | Execute method asynchronously |

### Caching Annotations

| Annotation | Description |
|---|---|
| `@EnableCaching` | Enable caching support |
| `@Cacheable("users")` | Cache method result |
| `@CacheEvict("users")` | Evict cache on method call |
| `@CachePut("users")` | Update cache |

---

## Spring & Spring Boot — Full Flow

```
HTTP Request
      ↓
Embedded Server (Tomcat)
      ↓
DispatcherServlet (Front Controller)
      ↓
Security Filters (if Spring Security)
      ↓
HandlerMapping → @RestController
      ↓
@Service (Business Logic)
      ↓
@Repository (Data Access)
      ↓
JPA / Hibernate
      ↓
Database
      ↑
Response → Jackson (Java → JSON)
      ↑
HTTP Response to Client
```

---

## Quick Reference — Key application.properties

```properties
# App
spring.application.name=my-app
server.port=8080
server.error.include-message=always

# H2 Database (dev)
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# MySQL (prod)
# spring.datasource.url=jdbc:mysql://localhost:3306/mydb
# spring.datasource.username=root
# spring.datasource.password=secret

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Actuator
management.endpoints.web.exposure.include=*
management.endpoint.health.show-details=always

# File Upload
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# Jackson
spring.jackson.serialization.indent-output=true
spring.jackson.time-zone=UTC
spring.jackson.serialization.write-dates-as-timestamps=false

# DevTools
spring.devtools.restart.enabled=true
spring.devtools.livereload.enabled=true
```

---
