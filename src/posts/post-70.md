---
layout: post.njk
title: "C++ Hidden Gems: Coroutines"
description: "An introduction to C++20 Coroutines, a powerful new feature for writing asynchronous and generator-style code."
date: 2024-09-26
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/images/post-5-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "C++20", "Concurrency"]
---

Asynchronous programming is becoming increasingly important in modern software development, but it can be challenging to write and reason about. Traditional approaches like callbacks and futures can lead to complex and hard-to-read code.

C++20 introduced a powerful new feature that aims to simplify asynchronous programming: **coroutines**.

## What are Coroutines?

A coroutine is a function that can be suspended and resumed. It allows you to write asynchronous code in a way that looks and feels like synchronous code. When a coroutine is suspended, it returns control to the caller, and its state is saved. It can then be resumed later from where it left off.

## The `co_await`, `co_yield`, and `co_return` Keywords

C++20 introduces three new keywords for working with coroutines:

*   **`co_await`:** This keyword suspends the coroutine and waits for an operation to complete. For example, you could `co_await` a network request.
*   **`co_yield`:** This keyword is used to produce a value from a coroutine, making it act like a generator.
*   **`co_return`:** This keyword is used to return a value from a coroutine.

## Coroutines as Generators

One of the simplest ways to understand coroutines is to see how they can be used to create generators. A generator is a function that can produce a sequence of values on demand.

Here's an example of a simple generator that produces a sequence of integers:

```cpp
#include <iostream>
#include <coroutine>
#include <ranges>

// A simple generator type (requires a more complex implementation in practice)
struct generator {
    struct promise_type {
        int current_value;
        auto get_return_object() { return generator{handle_type::from_promise(*this)}; }
        auto initial_suspend() { return std::suspend_always{}; }
        auto final_suspend() noexcept { return std::suspend_always{}; }
        void unhandled_exception() {}
        void return_void() {}
        auto yield_value(int value) {
            current_value = value;
            return std::suspend_always{};
        }
    };
    using handle_type = std::coroutine_handle<promise_type>;
    handle_type coro;

    generator(handle_type h) : coro(h) {}
    ~generator() { if (coro) coro.destroy(); }
    int operator()() {
        coro.resume();
        return coro.promise().current_value;
    }
};

generator count_to(int n) {
    for (int i = 0; i < n; ++i) {
        co_yield i;
    }
}

int main() {
    auto gen = count_to(5);
    for (int i = 0; i < 5; ++i) {
        std::cout << gen() << " "; // Prints 0 1 2 3 4
    }
}
```
*(Note: The implementation of a generator type is complex and beyond the scope of this post. The example above is a simplified illustration.)*

The `count_to` function is a coroutine. Each time `co_yield` is called, the function is suspended, and a value is produced.

## Coroutines for Asynchronous Programming

The primary motivation for coroutines is to simplify asynchronous programming. With coroutines, you can write asynchronous code that looks like this:

```cpp
// This is a conceptual example. `async_read` would return an "awaitable" object.
task<std::string> read_file_async(const std::string& filename) {
    auto file = co_await open_file_async(filename);
    auto buffer = co_await file.read_async();
    co_return buffer;
}
```

This code looks synchronous, but the `co_await` keywords indicate that the function may be suspended at these points. This makes the code much easier to read and reason about than a callback-based approach.

## The Coroutine Framework is a Library Feature

One of the unique things about C++ coroutines is that they are designed as a language feature that is implemented by libraries. The meaning of `co_await`, `co_yield`, and `co_return` is determined by the return type of the coroutine. This makes the C++ coroutine framework incredibly flexible and powerful, but it also means that there is a bit of a learning curve.

To use coroutines, you will typically use a library that provides the necessary "awaitable" and "promise" types, such as `cppcoro` or the networking library Asio.

## Conclusion

Coroutines are one of the most significant and complex features of C++20. They represent a fundamental shift in how we write concurrent and asynchronous code in C++. While the learning curve can be steep, the benefits in terms of code readability and maintainability are enormous.

Coroutines are a hidden gem that will unlock new possibilities for writing high-performance, asynchronous C++ code. As libraries provide better support for coroutines, they are likely to become the standard way to write asynchronous code in C++. It's a powerful feature that is shaping the future of the language. It's a new tool for a new era of programming.
