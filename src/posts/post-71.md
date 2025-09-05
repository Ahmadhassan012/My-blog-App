---
layout: post.njk
title: "C++ Hidden Gems: Concepts"
description: "An introduction to C++20 Concepts, a new feature that allows you to place constraints on template parameters."
date: 2024-09-27
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/images/post-6-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "C++20", "Metaprogramming"]
---

Templates are one of the most powerful features of C++, but they can also be a source of frustration. When you misuse a template, you are often greeted with a long and cryptic error message that is difficult to decipher. This is because the compiler can only check for errors after it has substituted the template parameters.

C++20 introduced a new feature that is designed to solve this problem: **Concepts**.

## What are Concepts?

A concept is a named set of requirements for a template parameter. It allows you to specify the properties that a type must have in order to be used with a particular template.

For example, you could define a concept `Sortable` that requires a type to have a `begin()` and `end()` method, and for its elements to be comparable with the `<` operator.

## How to Define and Use Concepts

You can define a concept using the `concept` keyword and a `requires` expression.

```cpp
#include <vector>
#include <iostream>
#include <concepts>

// Define a concept for types that can be added together
template <typename T>
concept Addable = requires(T a, T b) {
    a + b;
};

// Use the concept to constrain a template function
template <Addable T>
T add(T a, T b) {
    return a + b;
}
```

Now, if you try to call the `add` function with a type that does not support the `+` operator, you will get a clear and concise error message.

```cpp
struct Point { int x, y; };

int main() {
    add(1, 2); // OK
    // add(Point{1, 2}, Point{3, 4}); // Compile-time error: Point does not satisfy Addable
}
```

The error message will tell you that the `Point` type does not satisfy the `Addable` concept, which is much more helpful than the long template substitution errors we used to get.

## The `requires` Clause

You can use concepts to constrain templates in a few different ways.

*   **On the template parameter list:** `template <Addable T>`
*   **In a `requires` clause:** `template <typename T> requires Addable<T>`
*   **In a "terse" syntax for function templates:** `void my_func(Addable auto param)`

## Concepts in the Standard Library

The C++20 standard library makes extensive use of concepts. There are a number of predefined concepts in the `<concepts>` header, such as:

*   `std::integral`: Specifies that a type is an integral type.
*   `std::floating_point`: Specifies that a type is a floating-point type.
*   `std::same_as<T, U>`: Specifies that two types are the same.
*   `std::convertible_to<From, To>`: Specifies that a type can be converted to another type.
*   `std::invocable<F, Args...>`: Specifies that a callable type can be invoked with a given set of arguments.

The Ranges library also uses concepts extensively to constrain its algorithms and views.

## Why Use Concepts?

Concepts are a major improvement for generic programming in C++.

*   **Improved Error Messages:** This is the most immediate and obvious benefit. Concepts provide much clearer and more concise error messages when you misuse a template.
*   **Improved Readability:** Concepts make the requirements of a template explicit. This makes the code more self-documenting and easier to understand.
*   **More Robust Templates:** By constraining your templates, you can ensure that they are only used with types that they are designed to work with. This can help to prevent subtle bugs.
*   **Function Overloading:** Concepts can be used to disambiguate function overloads.

## Conclusion

Concepts are one of the most important and impactful features of C++20. They are a game-changer for template metaprogramming, making it safer, easier, and more accessible.

If you are writing generic code in C++20, you should be using concepts. They are a hidden gem that will dramatically improve the quality of your code and your developer experience. It's a fundamental shift in how we write and think about generic programming in C++. It's a move towards a more expressive and safer language.
