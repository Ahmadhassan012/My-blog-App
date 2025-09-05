---
layout: post.njk
title: "C++ Hidden Gems: `std::string_view`"
description: "A look at `std::string_view`, a C++17 feature that provides a non-owning, read-only view of a string."
date: 2024-09-24
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-3-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "Performance"]
---

Working with strings is a common task in C++, but it can also be a source of performance issues. `std::string` is a powerful and flexible class, but it owns its data, which means that creating substrings or passing strings to functions can involve expensive memory allocations and copies.

C++17 introduced a new string-like type that can help to avoid these costs: `std::string_view`.

## What is `std::string_view`?

A `std::string_view` is a non-owning, read-only view of a string. It's essentially a pointer and a length. It allows you to refer to a string or a substring without having to make a copy of the data.

```cpp
#include <string_view>
#include <iostream>

void print_sv(std::string_view sv) {
    std::cout << sv << std::endl;
}

int main() {
    std::string s = "Hello, world!";
    std::string_view sv = s;

    print_sv(sv); // No copy of the string data is made

    // You can also create a string_view from a C-style string
    const char* c_str = "Hello, C-style string!";
    print_sv(c_str);

    // You can easily create substrings without any allocations
    std::string_view sub = sv.substr(0, 5);
    print_sv(sub); // Prints "Hello"
}
```

## The Problem with `const std::string&`

Before `std::string_view`, the standard way to pass a string to a function without making a copy was to pass it by `const std::string&`. However, this still has a hidden cost. If you have a C-style string literal and you pass it to a function that takes a `const std::string&`, a temporary `std::string` object has to be created.

```cpp
void print_str(const std::string& s) {
    std::cout << s << std::endl;
}

int main() {
    print_str("Hello"); // A temporary std::string is created here
}
```

With `std::string_view`, you can avoid this allocation.

```cpp
void print_sv(std::string_view sv) {
    std::cout << sv << std::endl;
}

int main() {
    print_sv("Hello"); // No allocation!
}
```

For this reason, you should generally prefer to pass strings by `std::string_view` in your function parameters, unless you need to take ownership of the string.

## The Dangers of `std::string_view`

The biggest advantage of `std::string_view` is also its biggest danger: it doesn't own the data. A `std::string_view` is just a view into some other string. If the underlying string is destroyed, the `std::string_view` will be left dangling, and trying to use it will lead to undefined behavior.

```cpp
std::string_view get_dangling_sv() {
    std::string s = "This string will be destroyed";
    return s; // The string_view will be dangling!
}

int main() {
    std::string_view sv = get_dangling_sv();
    // Using sv here is undefined behavior!
}
```

You should be very careful not to return a `std::string_view` that refers to a local variable.

## When to Use `std::string_view`

*   **Function parameters:** Use `std::string_view` for function parameters when you need a read-only view of a string. This is almost always better than `const std::string&`.
*   **Parsing strings:** `std::string_view` is great for parsing strings, as you can create substrings and move the view around without having to make any copies.
*   **Return values:** Be very careful when returning a `std::string_view`. Only do it if you can guarantee that the underlying string will outlive the `std::string_view`.

## Conclusion

`std::string_view` is a powerful tool for writing more efficient C++ code. By providing a non-owning view of a string, it can help you to avoid unnecessary memory allocations and copies. However, with great power comes great responsibility. You need to be mindful of the lifetime of the underlying string to avoid dangling views.

`std::string_view` is a fantastic addition to the C++ standard library and a key part of modern C++ development. It's a hidden gem that can give you a significant performance boost in your string-heavy code. It's a simple change that can make your code faster and more efficient.
