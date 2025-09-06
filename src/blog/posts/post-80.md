---
layout: layouts/post.njk
title: "Sorting Algorithms Explained: Bubble, Selection, and Insertion Sort"
description: "A visual and intuitive guide to basic sorting algorithms. Understand the mechanics and trade-offs of Bubble Sort, Selection Sort, and Insertion Sort."
date: 2025-09-04
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-7-thumbnail.svg"
tags: ["Algorithms", "Sorting", "Data Structures"]
---

Sorting is one of the most fundamental problems in computer science. From organizing a list of contacts to ranking search results, sorting algorithms are everywhere. While there are many advanced and highly efficient sorting algorithms, it's important to start with the basics. In this post, we'll explore three of the most common introductory sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort.

### Bubble Sort

Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller or larger elements "bubble" to the top of the list. While it's easy to understand, Bubble Sort is not very efficient for large lists, with a worst-case and average complexity of O(n^2).

### Selection Sort

Selection Sort is another simple sorting algorithm. It works by dividing the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list, and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right. Like Bubble Sort, Selection Sort has a time complexity of O(n^2).

### Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it provides several advantages: simple implementation, efficient for (quite) small data sets, adaptive (i.e., efficient for data sets that are already substantially sorted), and in-place (i.e., only requires a constant amount O(1) of additional memory space). It has an average and worst-case time complexity of O(n^2).

This post will provide visualizations and code examples to help you understand how each of these algorithms works, and when you might choose one over the other.
