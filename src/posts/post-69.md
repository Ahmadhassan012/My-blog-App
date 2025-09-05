---
layout: post.njk
title: "C++ Hidden Gems: The Ranges Library"
description: "An introduction to the C++20 Ranges library, a new and more powerful way to work with sequences of data."
date: 2024-09-25
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/images/post-4-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "C++20"]
---

The C++ Standard Template Library (STL) provides a powerful set of algorithms for working with sequences of data. However, the traditional iterator-based design can sometimes be verbose and clunky. C++20 introduced a major new feature that revolutionizes how we work with sequences: the Ranges library.

## What are Ranges?

A range is a concept that represents a sequence of elements. It's a more abstract and powerful idea than a pair of iterators. A range is simply anything that you can iterate over. This could be a container like `std::vector`, a `std::string_view`, or a custom type that you have defined.

The Ranges library provides a new set of algorithms and views that operate on ranges instead of iterators.

## The Power of Pipelining

One of the most exciting features of the Ranges library is the ability to compose operations using the pipe (`|`) operator. This allows you to create complex data processing pipelines in a clean and readable way.

Let's say we have a vector of integers, and we want to get the squares of the even numbers.

Here's how we might have done it before C++20:

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6};
    std::vector<int> even_numbers;

    std::copy_if(numbers.begin(), numbers.end(), std::back_inserter(even_numbers),
                 [](int n) { return n % 2 == 0; });

    std::vector<int> squared_numbers;
    std::transform(even_numbers.begin(), even_numbers.end(), std::back_inserter(squared_numbers),
                   [](int n) { return n * n; });

    for (int n : squared_numbers) {
        std::cout << n << " "; // Prints 4 16 36
    }
}
```
This is quite verbose and requires creating intermediate vectors.

Here's how we can do it with C++20 Ranges:

```cpp
#include <vector>
#include <iostream>
#include <ranges>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6};

    auto results = numbers
                 | std::views::filter([](int n) { return n % 2 == 0; })
                 | std::views::transform([](int n) { return n * n; });

    for (int n : results) {
        std::cout << n << " "; // Prints 4 16 36
    }
}
```

This is much more concise and readable. The `std::views` are lazy, which means that the computations are not performed until you iterate over the `results` range. This can be much more efficient, as it avoids the creation of intermediate containers.

## Key Components of the Ranges Library

*   **Concepts:** The Ranges library is built on top of C++20 Concepts, which allow for better error messages and more constrained templates.
*   **Range Algorithms:** The library provides a new set of algorithms that operate on ranges. For example, `std::ranges::sort` can sort any range, not just a container that provides random access iterators.
*   **Views:** Views are lightweight, non-owning, and composable adaptors that modify a range. They are the key to the pipelining syntax.
*   **Projections:** Many of the range algorithms take an optional "projection," which is a function that is applied to the elements before the operation. This can simplify a lot of common tasks.

## Why Use Ranges?

The Ranges library is a major step forward for C++.

*   **Expressiveness:** It allows you to write more declarative and readable code.
*   **Composability:** The pipelining syntax makes it easy to compose complex operations.
*   **Efficiency:** The lazy nature of views can lead to more efficient code by avoiding intermediate allocations.
*   **Safety:** The use of Concepts leads to better error messages and safer code.

## Conclusion

The Ranges library is one of the most significant and exciting features of C++20. It provides a more modern, powerful, and expressive way to work with sequences of data. While it might take some time to get used to the new syntax and concepts, the benefits are well worth it.

If you are working with C++20, I highly encourage you to explore the Ranges library. It's a hidden gem that will fundamentally change the way you write C++ code. It's a glimpse into the future of the language, a future that is more declarative, more expressive, and more powerful.
