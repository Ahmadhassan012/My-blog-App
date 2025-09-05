---
layout: post.njk
title: "C++ Hidden Gems: `if constexpr`"
description: "A look at `if constexpr`, a C++17 feature that allows you to write compile-time conditional logic in your templates."
date: 2024-09-23
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-2-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "Metaprogramming"]
---

Template metaprogramming in C++ is a powerful technique, but it can also be complex and verbose. Before C++17, if you wanted to have conditional logic in your templates, you often had to resort to techniques like SFINAE (Substitution Failure Is Not An Error) or tag dispatching. These techniques are powerful, but they can be difficult to read and write.

C++17 introduced a much simpler and more expressive way to write conditional logic in templates: `if constexpr`.

## What is `if constexpr`?

`if constexpr` is a compile-time `if` statement. The condition in an `if constexpr` statement must be a compile-time constant expression. The compiler evaluates the condition at compile time and discards the branch that is not taken. This means that the code in the discarded branch is not even compiled, so it doesn't need to be syntactically or semantically correct.

## A Motivating Example

Let's say we want to write a generic `to_string` function that can handle different types.

Here's how we might have done it before C++17, using function overloading:

```cpp
#include <string>
#include <iostream>

std::string to_string_impl(const std::string& s) {
    return s;
}

template <typename T>
std::string to_string_impl(const T& value) {
    return std::to_string(value);
}

template <typename T>
std::string my_to_string(const T& value) {
    return to_string_impl(value);
}
```

This works, but it requires creating a set of overloaded helper functions.

Here's how we can do it with `if constexpr`:

```cpp
#include <string>
#include <iostream>
#include <type_traits>

template <typename T>
std::string my_to_string(const T& value) {
    if constexpr (std::is_same_v<T, std::string>) {
        return value;
    } else {
        return std::to_string(value);
    }
}
```

This is much more concise and readable. The `if constexpr` statement allows us to have a single function that can handle different types in different ways. The compiler will discard the `else` branch when `T` is a `std::string`, and it will discard the `if` branch for all other types.

## Why Use `if constexpr`?

`if constexpr` is a major simplification for template metaprogramming in C++.

*   **Readability:** It makes the intent of your code much clearer than SFINAE or tag dispatching.
*   **Conciseness:** It allows you to write less boilerplate code.
*   **Power:** It allows you to write generic code that can be customized for different types at compile time.

It's particularly useful when you are working with `std::variant` and `std::visit`, or when you are writing any kind of generic library code.

## The Power of Discarded Statements

The fact that the discarded branch is not compiled is a very powerful feature. It allows you to write code that would not be valid for all types.

For example, let's say we want to write a generic function that can get the size of a container, but we also want it to work for integers (where "size" is just the value itself).

```cpp
template <typename T>
auto get_size(const T& t) {
    if constexpr (std::is_integral_v<T>) {
        return t;
    } else {
        return t.size();
    }
}
```
If we used a regular `if` statement here, this code would not compile for integers, because integers don't have a `.size()` method. But because we are using `if constexpr`, the `else` branch is discarded when `T` is an integer, so the code compiles just fine.

## Conclusion

`if constexpr` is a game-changing feature for template metaprogramming in C++. It makes it much easier to write clean, readable, and powerful generic code. If you are writing templates in C++17 or later, `if constexpr` should be one of the first tools you reach for. It's a hidden gem that takes a lot of the pain out of template metaprogramming and makes it accessible to a wider range of developers. It's a key part of the ongoing effort to make C++ a more expressive and developer-friendly language.
