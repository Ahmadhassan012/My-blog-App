---
layout: layouts/post.njk
title: "Understanding Networking: The OSI Model"
description: "Explore the 7 layers of the OSI model, a conceptual framework used to understand and standardize the functions of a telecommunication or computing system."
date: 2025-09-04
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-10-thumbnail.svg"
tags: ["Networking", "OSI Model", "Computer Networks"]
---

Computer networking can seem like a black box. How does data get from your computer to a server on the other side of the world? The Open Systems Interconnection (OSI) model is a conceptual framework that helps us understand and standardize the complex processes involved in network communication. The OSI model breaks down the communication process into seven distinct layers, each with its own specific responsibilities.

Here's a brief overview of the 7 layers of the OSI model, from the bottom up:

1.  **Physical Layer:** This is the lowest layer of the OSI model. It deals with the physical connection between devices, such as the cables, switches, and other hardware. It's responsible for transmitting raw binary data (bits) over a physical medium.

2.  **Data Link Layer:** This layer is responsible for node-to-node data transfer and error detection. It takes the raw data from the Physical Layer and organizes it into frames. It also manages how devices on the same network gain access to the physical medium.

3.  **Network Layer:** This layer is responsible for routing data between different networks. It's where IP addresses and routing protocols live. The Network Layer determines the best path for data to travel from the source to the destination.

4.  **Transport Layer:** This layer provides reliable data transfer between two systems. It's responsible for flow control, error correction, and ensuring that data is delivered in the correct order. The two most common protocols at this layer are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

5.  **Session Layer:** This layer is responsible for establishing, managing, and terminating sessions between applications. It handles things like authentication and authorization.

6.  **Presentation Layer:** This layer is responsible for translating, encrypting, and compressing data. It ensures that data from the sending application can be understood by the receiving application.

7.  **Application Layer:** This is the highest layer of the OSI model, and it's the one that is closest to the end user. It provides services for user applications, such as email, file transfer, and web browsing. Examples of Application Layer protocols include HTTP, FTP, and SMTP.

While the OSI model is a theoretical model, it provides a valuable framework for understanding how computer networks work and for troubleshooting network problems. In practice, the more widely used model is the TCP/IP model, which is a simplified version of the OSI model. This post will serve as your guide to understanding this fundamental networking concept.
