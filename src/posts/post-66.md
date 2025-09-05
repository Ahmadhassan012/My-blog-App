---
layout: post.njk
title: "C++ Hidden Gems: Structured Bindings"
description: "A look at structured bindings, a C++17 feature that allows you to decompose objects into their constituent parts."
date: 2024-09-22
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-1-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++"]
---

C++17 introduced a number of features that are designed to make the language more convenient and expressive. One of the most useful of these is **structured bindings**. Structured bindings allow you to declare multiple variables that are initialized from the members of an object.

## The Old Way

Before structured bindings, if you wanted to get the members of a struct or a pair, you would have to access them one by one.

```cpp
#include <map>
#include <string>
#include <iostream>

int main() {
    std::map<std::string, int> scores;
    scores["Jules"] = 100;
    scores["Vincent"] = 95;

    for (const auto& pair : scores) {
        const std::string& name = pair.first;
        int score = pair.second;
        std::cout << name << ": " << score << std::endl;
    }
}
```

This is a bit verbose, especially when you are iterating over a map.

## The New Way with Structured Bindings

With structured bindings, you can decompose the pair directly into its constituent parts.

```cpp
#include <map>
#include <string>
#include <iostream>

int main() {
    std::map<std::string, int> scores;
    scores["Jules"] = 100;
    scores["Vincent"] = 95;

    for (const auto& [name, score] : scores) {
        std::cout << name << ": " << score << std::endl;
    }
}
```

This is much more concise and readable. The `[name, score]` syntax declares two new variables, `name` and `score`, and initializes them from the `first` and `second` members of the pair.

## What Can You Decompose?

Structured bindings can be used to decompose a variety of types:

*   **Structs and classes:** You can decompose any struct or class that has only public, non-static data members.
*   **C-style arrays:** You can decompose a C-style array into its elements.
*   **Tuples and pairs:** You can decompose `std::tuple` and `std::pair` objects.

Here's an example with a struct:

```cpp
struct Person {
    std::string name;
    int age;
};

int main() {
    Person p = {"Jules", 30};
    auto [name, age] = p;
    std::cout << name << " is " << age << " years old." << std::endl;
}
```

## Why Use Structured Bindings?

Structured bindings are a relatively small feature, but they can have a big impact on the readability and expressiveness of your code.

*   **Conciseness:** They allow you to write less boilerplate code.
*   **Readability:** They can make your code more self-documenting. The names of the variables in the structured binding can describe the meaning of the values.
*   **Convenience:** They are particularly useful when working with maps, tuples, and other types that have a fixed structure.

## Conclusion

Structured bindings are a fantastic "quality of life" improvement in C++17. They are a simple feature, but they can make your code cleaner, more concise, and more readable. If you're not already using them, I highly recommend giving them a try. They are a great example of how modern C++ is evolving to be a more expressive and developer-friendly language. It's a hidden gem that you'll find yourself using all the time. It's a small change that makes a big difference.
