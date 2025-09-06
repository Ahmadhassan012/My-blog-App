---
layout: layouts/post.njk
title: "The CAP Theorem: A Fundamental Law of Distributed Systems"
description: "An explanation of the CAP theorem and its implications for designing and choosing distributed data stores."
date: 2024-08-22
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-9-thumbnail.svg"
tags: ["Computer Science", "Distributed Systems", "Databases"]
---

When you move from a single-server application to a distributed system, you enter a world of new challenges and trade-offs. One of the most fundamental principles that governs distributed systems is the CAP theorem. Proposed by Eric Brewer, the CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:

## The Three Guarantees

1.  **Consistency (C):** Every read receives the most recent write or an error. In a consistent system, all nodes in the distributed system have the same data at the same time.
2.  **Availability (A):** Every request receives a (non-error) response, without the guarantee that it contains the most recent write. In an available system, every non-failing node is able to respond to requests.
3.  **Partition Tolerance (P):** The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes. In other words, the system is resilient to network partitions.

## The Trade-off

The CAP theorem states that in the presence of a network partition (P), you must choose between consistency (C) and availability (A). You cannot have both.

*   **CP (Consistent and Partition Tolerant):** If you choose consistency over availability, the system will return an error or time out if it cannot guarantee that the data it is returning is the most recent write. This is a good choice for systems where data accuracy is paramount, such as banking systems.
*   **AP (Available and Partition Tolerant):** If you choose availability over consistency, the system will always respond to requests, even if it means returning stale data. This is a good choice for systems where high availability is critical, and eventual consistency is acceptable, such as social media feeds.

**What about CA?** A system that is consistent and available but not partition tolerant can exist, but it can only do so as long as there is no network partition. In any real-world distributed system, network partitions are a fact of life, so this is not a practical choice.

## CAP in the Real World

The CAP theorem is not just a theoretical concept. It has a profound impact on the design of real-world distributed systems. When you are choosing a database for your application, you need to understand where it falls on the CAP spectrum.

*   **Relational databases** like PostgreSQL and MySQL are traditionally CA systems.
*   **NoSQL databases** are often designed to be either CP (like MongoDB) or AP (like Cassandra or CouchDB).

The CAP theorem is a powerful tool for reasoning about the trade-offs in distributed system design. By understanding its principles, you can make more informed decisions about the architecture and technologies you choose for your applications. It forces you to think about what guarantees are most important for your specific use case.
