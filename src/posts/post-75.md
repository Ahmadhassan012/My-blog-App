---
layout: post.njk
title: "Data Structures 101: Arrays and Linked Lists"
description: "Explore the fundamental data structures, arrays and linked lists. Learn their differences, use cases, and performance characteristics."
date: 2025-09-04
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-2-thumbnail.svg"
tags: ["Data Structures", "Computer Science", "Programming"]
---

Data structures are the building blocks of efficient software. Among the most fundamental are arrays and linked lists. While both are used to store collections of data, they do so in very different ways, leading to significant trade-offs in performance and memory usage.

An **array** is a collection of items stored at contiguous memory locations. This structure makes it incredibly fast to access elements by their index (e.g., getting the 5th element) because the computer can calculate the exact memory address. However, this also means that the size of an array is fixed, and resizing it can be a costly operation.

A **linked list**, on the other hand, is a collection of nodes where each node contains data and a reference (or link) to the next node in the sequence. This allows for dynamic resizing and makes it easy to insert or delete elements without reallocating the entire structure. The downside is that accessing an element by index requires traversing the list from the beginning, which can be slow for large lists.

Understanding the differences between these two data structures is a crucial first step in mastering data structures and algorithms. This post serves as a starting point for that journey.
