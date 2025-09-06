---
layout: layouts/post.njk
title: "The Brewer's CAP Theorem in Real Life"
description: "A practical look at the CAP theorem and how it applies to the databases we use every day."
date: 2024-08-28
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-2-thumbnail.svg"
tags: ["Computer Science", "Databases", "Distributed Systems"]
---

The CAP theorem, which states that a distributed data store can only provide two of the three guarantees of Consistency, Availability, and Partition Tolerance, is a cornerstone of distributed systems theory. But how does this theoretical concept play out in the real world with the databases we use?

## Understanding the "P" is a Must

In any distributed system, network partitions are a fact of life. Servers crash, and network links fail. Therefore, any practical distributed system must be partition tolerant (P). This means the real trade-off is between consistency (C) and availability (A).

Let's look at how different types of databases navigate this trade-off.

### Traditional Relational Databases (CA)

Relational databases like MySQL, PostgreSQL, and Microsoft SQL Server were designed in an era before large-scale distributed systems were common. They typically prioritize consistency. In a single-server setup, you get both consistency and availability (CA).

When you introduce replication for high availability, these systems often use a single-master setup. If the master database becomes unavailable due to a network partition, the system might not be able to accept writes to ensure consistency, thus sacrificing availability.

### CP Databases: Prioritizing Consistency

Many NoSQL databases are designed to be distributed from the ground up and make a clear choice in the C vs. A trade-off. CP databases choose consistency over availability.

*   **MongoDB:** In a replica set, if the primary node becomes inaccessible to a majority of the nodes due to a partition, it will step down, and the replica set will elect a new primary. During this time, the system may be unavailable for writes.
*   **HBase:** Built on top of HDFS, HBase is a CP system. It relies on a master server to manage regions, and if the master is down, the cluster can become unavailable.

These systems are a good fit for applications where data consistency is critical, such as e-commerce backends or financial services.

### AP Databases: Prioritizing Availability

AP databases choose availability over consistency. They will always respond to a request, even if it means returning data that is not the most up-to-date (stale data). These systems typically use an "eventual consistency" model.

*   **Cassandra:** Designed with a masterless, peer-to-peer architecture, Cassandra is highly available. It allows for "tunable consistency," where you can decide on a per-query basis how many replicas must acknowledge a read or write. At lower consistency levels, you get higher availability.
*   **Amazon DynamoDB:** A key-value store that prioritizes availability and performance at scale. It offers eventual consistency for reads by default but also provides an option for strongly consistent reads.

These systems are ideal for applications that need to be highly available and can tolerate some level of data staleness, such as social media feeds, real-time analytics, or IoT data collection.

## Conclusion

The CAP theorem is not just a theoretical exercise; it's a practical framework for understanding the trade-offs inherent in distributed database systems. When choosing a database for your application, it's crucial to understand where it falls on the CAP spectrum and whether its trade-offs align with the requirements of your specific use case. There is no one-size-fits-all solution, and the right choice depends on whether your application needs to prioritize consistency or availability.
