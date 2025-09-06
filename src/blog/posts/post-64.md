---
layout: layouts/post.njk
title: "C++ Hidden Gems: `std::optional`"
description: "A look at `std::optional`, a C++17 feature that provides a more expressive way to represent optional values."
date: 2024-09-20
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-12-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++"]
---

In C++, it's common to have functions that may or may not return a value. For example, a function that searches for an item in a database might not find it. Historically, there have been several ways to handle this, such as returning a null pointer, a special error code, or throwing an exception. However, these approaches can be error-prone or verbose.

C++17 introduced a more expressive and safer way to handle optional values: `std::optional`.

## What is `std::optional`?

`std::optional<T>` is a wrapper that may or may not contain a value of type `T`. It's a value type, which means it has value semantics (it's not a pointer).

You can think of it as a box that either contains a `T` or is empty.

## How to Use `std::optional`

Here's a simple example of a function that might not return a value:

```cpp
#include <optional>
#include <string>
#include <iostream>

std::optional<std::string> find_user(int id) {
    if (id == 1) {
        return "Jules";
    }
    return std::nullopt; // Represents an empty optional
}
```

To use the result of this function, you can check if it contains a value before accessing it:

```cpp
int main() {
    auto user1 = find_user(1);
    if (user1) { // The bool conversion checks for a value
        std::cout << "Found user: " << *user1 << std::endl; // Use * or -> to access the value
    }

    auto user2 = find_user(2);
    if (!user2) {
        std::cout << "User 2 not found." << std::endl;
    }
}
```

`std::optional` also provides a `value_or` method, which is a convenient way to provide a default value:

```cpp
std::string user2_name = find_user(2).value_or("Guest");
std::cout << "User 2 name: " << user2_name << std::endl; // Prints "Guest"
```

## Why Use `std::optional`?

`std::optional` provides several benefits over traditional approaches to optional values:

*   **Expressiveness:** It makes the intent of your code clear. When a function returns a `std::optional`, it's immediately obvious that the value may not be present.
*   **Safety:** It forces you to check for the presence of a value before you can use it. This helps to prevent null pointer dereferences and other common errors.
*   **No Dynamic Allocation:** Unlike returning a pointer, `std::optional` does not involve any dynamic memory allocation, which can improve performance.
*   **Value Semantics:** It behaves like a regular value, which makes it easier to work with.

## Conclusion

`std::optional` is a fantastic addition to the C++ standard library. It provides a clean, safe, and expressive way to represent optional values. If you're working with C++17 or later, you should make `std::optional` a regular part of your toolkit. It's a hidden gem that can help you to write better, more modern C++ code. It's a simple feature that can have a big impact on the clarity and correctness of your code.
