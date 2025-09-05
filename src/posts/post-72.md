---
layout: post.njk
title: "C++ Hidden Gems: `std::span`"
description: "A look at `std::span`, a C++20 feature that provides a non-owning view of a contiguous sequence of objects."
date: 2024-09-28
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/images/post-7-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "C++20"]
---

In C++, it's very common to write functions that operate on a sequence of objects. The traditional way to do this is to pass a pointer and a length, or a pair of iterators. However, this can be verbose and error-prone.

C++20 introduced a new feature that provides a better way to work with contiguous sequences of objects: `std::span`.

## What is `std::span`?

A `std::span<T>` is a non-owning view of a contiguous sequence of objects of type `T`. It's essentially a "fat pointer" that holds a pointer to the beginning of the sequence and a length.

You can think of it as being similar to `std::string_view`, but for any type of object, not just characters.

## How to Use `std::span`

You can create a `std::span` from a variety of sources, including C-style arrays, `std::vector`, and `std::array`.

```cpp
#include <span>
#include <vector>
#include <iostream>

void print_span(std::span<int> s) {
    for (int x : s) {
        std::cout << x << " ";
    }
    std::cout << std::endl;
}

int main() {
    int c_array[] = {1, 2, 3, 4, 5};
    print_span(c_array); // Create a span from a C-style array

    std::vector<int> vec = {6, 7, 8, 9, 10};
    print_span(vec); // Create a span from a std::vector

    // You can also create sub-spans
    std::span<int> sub_span = vec;
    print_span(sub_span.subspan(1, 3)); // Prints 7 8 9
}
```

The `print_span` function can now accept any contiguous sequence of integers, without having to be a template. This is a major advantage over the traditional iterator-based approach.

## Why Use `std::span`?

`std::span` offers a number of benefits over the traditional ways of working with sequences.

*   **Safety:** A `std::span` knows its own size. This helps to prevent buffer overflows and other common errors that can occur when working with raw pointers.
*   **Expressiveness:** It makes the intent of your code clear. When a function takes a `std::span`, it's immediately obvious that it expects a contiguous sequence of objects.
*   **Flexibility:** A single function that takes a `std::span` can be used with a C-style array, a `std::vector`, a `std::array`, or any other contiguous container.
*   **Efficiency:** Like `std::string_view`, `std::span` is a non-owning view. It doesn't make a copy of the data, so it's very efficient.

## The Dangers of `std::span`

Like `std::string_view`, the biggest advantage of `std::span` is also its biggest danger: it doesn't own the data. If the underlying container is destroyed, the `std::span` will be left dangling.

You should be careful not to return a `std::span` that refers to a local variable.

## `std::span` vs. Pointers

You might be wondering why you should use `std::span` instead of a raw pointer and a size. The main reason is safety. A `std::span` is a bounds-checked view of the data. If you try to access an element outside of the span, you will get a compile-time or run-time error (depending on the context), whereas with a raw pointer, you would just get undefined behavior.

## Conclusion

`std::span` is a fantastic addition to the C++ standard library. It provides a modern, safe, and efficient way to work with contiguous sequences of objects. It's a key part of the C++20 effort to make the language safer and more expressive.

If you are writing functions that operate on sequences of data, you should consider using `std::span`. It's a hidden gem that can help you to write code that is more robust, more flexible, and easier to read. It's a simple feature that can have a big impact on the quality of your C++ code. It's a better pointer for the modern era.
