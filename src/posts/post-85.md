---
layout: post.njk
title: "How Does the Internet Work?"
description: "A simplified explanation of the complex systems that make up the internet, from DNS and IP addresses to TCP/IP and HTTP."
date: 2025-09-04
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-12-thumbnail.svg"
tags: ["Internet", "Networking", "Web"]
---

The internet is a global network of billions of computers and other electronic devices. It's a complex system, but the basic principles of how it works are surprisingly simple. In this post, we'll take a high-level look at the key components and protocols that make the internet work.

### IP Addresses and DNS

Every device connected to the internet has a unique **IP (Internet Protocol) address**. An IP address is a numerical label, like `192.168.1.1`, that is used to identify a device on a network. However, IP addresses are hard for humans to remember. That's where the **Domain Name System (DNS)** comes in.

DNS is like the phonebook of the internet. When you type a domain name like `www.google.com` into your browser, your computer sends a request to a DNS server to look up the IP address associated with that domain name. Once your computer has the IP address, it can send a request to the correct server.

### TCP/IP

**TCP/IP (Transmission Control Protocol/Internet Protocol)** is the suite of communication protocols used to interconnect network devices on the internet. TCP/IP specifies how data should be packetized, addressed, transmitted, routed, and received.

- **IP (Internet Protocol)** is responsible for addressing and routing packets of data so that they can travel across networks and arrive at the correct destination.
- **TCP (Transmission Control Protocol)** is responsible for ensuring that the data is delivered reliably and in the correct order. It breaks down large messages into smaller packets and reassembles them at the destination.

### HTTP

**HTTP (Hypertext Transfer Protocol)** is the protocol used for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers. When you visit a website, your browser sends an HTTP request to the web server, and the server sends back an HTTP response containing the website's content.

### A Simple Analogy

Think of sending a letter.
- The **letter** is the data you want to send.
- The **envelope** with the address is the IP packet.
- The **postal service** is the TCP/IP protocol suite that handles the delivery.
- The **address** on the envelope is the IP address.
- Looking up the address in a phonebook is like using **DNS**.
- The language you write the letter in is like **HTTP**.

This is, of course, a simplified explanation. But it gives you a good starting point for understanding the magic of the internet. In future posts, we'll dive deeper into each of these topics.
