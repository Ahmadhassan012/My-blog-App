---
layout: layouts/post.njk
title: "Binary and Data Representation"
description: "How do computers store information? This post covers the basics of binary, hexadecimal, and character encoding like ASCII and Unicode."
date: 2025-09-04
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-7-thumbnail.svg"
tags: ["Binary", "Computer Architecture", "Computer Science"]
---

At the most fundamental level, computers store and process information using a binary system. This means that all data, from text and images to videos and music, is represented as a series of 0s and 1s. In this post, we'll explore the basics of binary and other data representation systems.

### Binary

The binary system is a base-2 number system, which means that it only has two digits: 0 and 1. Each digit is called a **bit**. A group of 8 bits is called a **byte**. A single byte can represent 256 different values (2^8).

For example, the decimal number `10` is represented in binary as `1010`. Let's break it down:
- The rightmost digit is the 2^0 place (1).
- The next digit to the left is the 2^1 place (2).
- The next digit is the 2^2 place (4).
- The next digit is the 2^3 place (8).

So, `1010` in binary is `(1 * 8) + (0 * 4) + (1 * 2) + (0 * 1) = 10`.

### Hexadecimal

While computers use binary, it can be very verbose for humans to read. That's where hexadecimal comes in. The hexadecimal system is a base-16 number system, which means that it has 16 digits: 0-9 and A-F. Hexadecimal is often used as a more human-readable way to represent binary data.

One hexadecimal digit can represent 4 bits. This makes it easy to convert between binary and hexadecimal. For example, the binary number `11010110` can be split into two 4-bit groups: `1101` and `0110`.
- `1101` in binary is `13` in decimal, which is `D` in hexadecimal.
- `0110` in binary is `6` in decimal, which is `6` in hexadecimal.
So, `11010110` in binary is `D6` in hexadecimal.

### Character Encoding

So how do we represent text in binary? That's where character encoding comes in. A character encoding is a system that maps characters to numbers.

- **ASCII (American Standard Code for Information Interchange)** was one of the first character encoding standards. It uses 7 bits to represent 128 characters, including the English alphabet, numbers, and punctuation.

- **Unicode** is a more modern character encoding standard that supports a much wider range of characters, including characters from almost all of the world's writing systems. The most common Unicode encoding is **UTF-8**, which is backward-compatible with ASCII and uses a variable number of bytes to represent each character.

Understanding how data is represented in a computer is a fundamental concept in computer science. It's the foundation upon which all software is built. This post has just scratched the surface, but hopefully, it has given you a good starting point for further exploration.
