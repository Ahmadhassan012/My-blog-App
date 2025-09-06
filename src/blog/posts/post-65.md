---
layout: layouts/post.njk
title: "C++ Hidden Gems: `std::variant` and `std::visit`"
description: "An exploration of `std::variant`, a type-safe union, and how to use it with `std::visit`."
date: 2024-09-21
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-13-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++"]
---

C++ has long had C-style unions, but they are not type-safe and can be tricky to use correctly. C++17 introduced a modern, type-safe alternative: `std::variant`. A `std::variant` is a type-safe union that can hold a value from a set of specified types.

## What is `std::variant`?

A `std::variant<T, U, V>` can hold a value of type `T`, `U`, or `V`. It will always hold a value of one of its specified types; it cannot be empty (unlike `std::optional`).

```cpp
#include <variant>
#include <string>

int main() {
    std::variant<int, std::string> v;
    v = 10; // v now holds an int
    v = "hello"; // v now holds a std::string
}
```

## Accessing the Value in a `std::variant`

There are a few ways to access the value in a `std::variant`.

*   **`std::get`:** You can use `std::get` with either a type or an index. If the variant does not hold the specified type, it will throw a `std::bad_variant_access` exception.

```cpp
std::variant<int, std::string> v = "hello";
std::string s = std::get<std::string>(v);
// int i = std::get<int>(v); // Throws std::bad_variant_access
```

*   **`std::get_if`:** This is a safer alternative that returns a pointer to the value if the variant holds the specified type, and `nullptr` otherwise.

```cpp
if (auto p = std::get_if<std::string>(&v)) {
    std::cout << "Value: " << *p << std::endl;
}
```

## The Power of `std::visit`

The most powerful way to work with a `std::variant` is `std::visit`. `std::visit` takes a "visitor" (a callable object, like a lambda) and a variant, and it calls the visitor with the value that is currently stored in the variant.

This allows you to handle all of the possible types in the variant in a clean and type-safe way.

```cpp
#include <variant>
#include <string>
#include <iostream>

int main() {
    std::variant<int, std::string> v = "hello";

    std::visit([](auto&& arg) {
        using T = std::decay_t<decltype(arg)>;
        if constexpr (std::is_same_v<T, int>) {
            std::cout << "It's an int: " << arg << std::endl;
        } else if constexpr (std::is_same_v<T, std::string>) {
            std::cout << "It's a string: " << arg << std::endl;
        }
    }, v);
}
```

This pattern of using a generic lambda with `if constexpr` is a common and powerful way to work with `std::visit`.

## Why Use `std::variant`?

`std::variant` is a great tool for representing a value that can be one of a fixed set of types. It's often used for things like:

*   **Representing the states of a state machine.**
*   **Representing the different types of nodes in a tree or a graph.**
*   **Returning different types of values from a function.**

It provides a more modern, type-safe, and expressive alternative to using unions or inheritance for these kinds of problems.

## Conclusion

`std::variant` is a powerful and flexible tool that is a great addition to the C++ standard library. It provides a type-safe way to work with values that can have different types. When combined with `std::visit`, it allows you to write clean, expressive, and safe code for handling these types of situations.

If you're not yet familiar with `std::variant`, I highly recommend taking the time to learn it. It's a hidden gem that can help you to write more robust and modern C++ code. It's a key part of the C++17 revolution.
