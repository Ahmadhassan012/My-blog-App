---
layout: layouts/post.njk
title: "Introduction to Databases: SQL vs. NoSQL"
description: "A high-level overview of databases. Learn the main differences between relational (SQL) and non-relational (NoSQL) databases and when to use each."
date: 2025-09-04
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-9-thumbnail.svg"
tags: ["Databases", "SQL", "NoSQL"]
---

Almost every application you use today, from social media to online banking, relies on a database to store and retrieve information. A database is an organized collection of data, and there are many different types of databases to choose from. The two main categories of databases are relational (SQL) and non-relational (NoSQL).

### SQL Databases

**SQL (Structured Query Language)** databases have been around for decades and are the most common type of database. They are also known as relational databases because they store data in a structured format, using tables with rows and columns. Each table has a predefined schema that defines the data types and relationships between different tables.

**Key characteristics of SQL databases:**
- **Structured Data:** Data is stored in tables with a fixed schema.
- **ACID Compliance:** SQL databases are known for their reliability and guarantee of transactions (Atomicity, Consistency, Isolation, Durability).
- **Vertical Scaling:** They are typically scaled by increasing the resources (CPU, RAM, SSD) of a single server.
- **Examples:** MySQL, PostgreSQL, Microsoft SQL Server.

### NoSQL Databases

**NoSQL (Not Only SQL)** databases are a newer category of databases that were designed to handle the challenges of large-scale, distributed data. Unlike SQL databases, NoSQL databases do not have a fixed schema and can store unstructured or semi-structured data. There are several types of NoSQL databases, including document stores, key-value stores, column-family stores, and graph databases.

**Key characteristics of NoSQL databases:**
- **Flexible Schema:** Data can be stored in a variety of formats, such as JSON-like documents.
- **Horizontal Scaling:** They are designed to be scaled out across multiple servers.
- **High Availability and Performance:** NoSQL databases are often used for applications that require high availability and low latency.
- **Examples:** MongoDB, Redis, Cassandra, Neo4j.

### Which one should you choose?

The choice between SQL and NoSQL depends on the specific needs of your application. If you have structured data and require strong consistency and reliability, a SQL database is a good choice. If you have unstructured data, need to handle a large volume of traffic, or require high availability, a NoSQL database might be a better fit.

This post provides a high-level overview to get you started. As you dive deeper into database technologies, you'll learn more about the specific use cases and trade-offs of each type of database.
