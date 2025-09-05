---
layout: post.njk
title: "The OSI Model: A Layered Approach to Networking"
description: "An overview of the OSI model, a conceptual framework that standardizes the functions of a telecommunication or computing system."
date: 2024-09-03
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-8-thumbnail.svg"
tags: ["Computer Science", "Networking", "OSI Model"]
---

The Open Systems Interconnection (OSI) model is a conceptual framework that characterizes and standardizes the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology. Its goal is the interoperability of diverse communication systems with standard protocols.

The model partitions a communication system into abstraction layers. The original version of the model had seven layers.

## The 7 Layers of the OSI Model

Let's take a look at each of the seven layers, from the bottom up.

### 1. Physical Layer
This is the lowest layer of the OSI model. It is responsible for the physical connection between devices. This includes the layout of pins, voltages, cable specifications, and more. It's all about the physical transmission of raw data bits.

### 2. Data Link Layer
The data link layer is responsible for node-to-node data transfer. It takes the raw bits from the physical layer and organizes them into frames. It also handles error detection and correction. The MAC address is part of this layer.

### 3. Network Layer
The network layer is responsible for forwarding packets, including routing through intermediate routers. This is where IP (Internet Protocol) operates. The network layer determines the best path to move data from source to destination across the network.

### 4. Transport Layer
The transport layer provides reliable transmission of data segments between points on a network, including segmentation, acknowledgement, and multiplexing. This is where TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate.

### 5. Session Layer
The session layer is responsible for establishing, managing, and terminating connections between applications. It sets up, coordinates, and terminates conversations, exchanges, and dialogues between the applications at each end.

### 6. Presentation Layer
The presentation layer is responsible for translating, encrypting, and compressing data. It transforms data into the form that the application layer can accept. It's sometimes called the "syntax layer."

### 7. Application Layer
This is the top layer of the OSI model. It is the layer that is closest to the end user. It provides services for an end-user application such as a web browser or email client. This is where protocols like HTTP, FTP, and SMTP operate.

## OSI vs. TCP/IP Model

While the OSI model is a comprehensive framework, the more commonly used model in practice is the TCP/IP model. The TCP/IP model is a more concise framework with only four layers:

1.  **Network Access Layer** (combines OSI layers 1 and 2)
2.  **Internet Layer** (corresponds to OSI layer 3)
3.  **Transport Layer** (corresponds to OSI layer 4)
4.  **Application Layer** (combines OSI layers 5, 6, and 7)

## Why is the OSI Model Still Important?

Even though the TCP/IP model is more practical, the OSI model is still a valuable tool for learning and understanding how networks work. It provides a clear and structured way to think about the different functions and protocols that are involved in network communication. It's a foundational concept for anyone who wants to understand the world of computer networking. It helps in troubleshooting network problems by providing a framework for identifying where a problem might be occurring.
