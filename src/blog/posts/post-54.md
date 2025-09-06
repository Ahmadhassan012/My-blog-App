---
layout: layouts/post.njk
title: "The CAP Theorem and its Discontents"
description: "A nuanced look at the CAP theorem, its common misinterpretations, and how it applies to modern distributed systems."
date: 2024-09-10
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-2-thumbnail.svg"
tags: ["Computer Science", "Databases", "Distributed Systems"]
---

The CAP theorem is one of the most well-known concepts in distributed systems. However, it is also one of the most misunderstood. While the theorem itself is simple, its application to real-world systems is often more nuanced than a simple "pick two out of three" would suggest.

## A Quick Recap of the CAP Theorem

The CAP theorem states that a distributed data store can only provide two of the three following guarantees:

*   **Consistency (C):** All nodes see the same data at the same time.
*   **Availability (A):** Every request receives a response.
*   **Partition Tolerance (P):** The system continues to operate despite network partitions.

Since network partitions are a fact of life in any distributed system, the real trade-off is between consistency and availability.

## Common Misinterpretations of the CAP Theorem

### 1. It's a Binary Choice
The CAP theorem is often presented as a binary choice between C and A. However, in reality, both consistency and availability are continuous, not binary. There are many different levels of consistency (e.g., strong consistency, eventual consistency, causal consistency), and availability can be measured in terms of uptime (e.g., 99.99%).

Many modern databases allow you to "tune" the consistency level, effectively allowing you to slide along the C-A spectrum.

### 2. You Can't Have All Three
While it's true that you can't have all three guarantees *at the same time*, a system can be designed to provide all three at different times. For example, a system can provide both consistency and availability when there is no network partition. It is only when a partition occurs that you are forced to make a choice.

This is the core idea behind the PACELC theorem, which states that in case of a network partition (P), a distributed system must choose between availability (A) and consistency (C), but else (E), even when the system is running normally in the absence of partitions, it has to choose between latency (L) and consistency (C).

### 3. It Applies to the Entire System
The CAP theorem applies to individual operations, not to the entire system. It's possible for a system to provide different guarantees for different operations. For example, a system might provide strong consistency for write operations but eventual consistency for read operations.

## The CAP Theorem in the Age of Modern Databases

Modern distributed databases have been designed with the CAP theorem in mind. They often provide more sophisticated consistency models and give developers more control over the trade-offs.

*   **NewSQL Databases:** Databases like Google's Spanner and CockroachDB are designed to be strongly consistent and highly available. They achieve this through the use of protocols like Paxos or Raft and sophisticated clock synchronization mechanisms. While they are still bound by the CAP theorem, they are able to provide a higher level of both consistency and availability than was previously possible.
*   **Multi-Model Databases:** Databases like FaunaDB and Cosmos DB are designed to support multiple data models and consistency levels. This allows developers to choose the right trade-offs for their specific use case.

## Conclusion

The CAP theorem is a valuable tool for reasoning about the trade-offs in distributed system design. However, it's important to have a nuanced understanding of what it says and what it doesn't say. The world of distributed systems is not a simple choice between C and A. It's a world of complex trade-offs and sophisticated engineering.

By understanding the subtleties of the CAP theorem and the capabilities of modern databases, you can make more informed decisions about the architecture of your distributed systems. It's a reminder that in engineering, the answer is rarely a simple "pick two out of three." It's almost always "it depends."
