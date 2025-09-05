---
layout: post.njk
title: "C++ Hidden Gems: The Spaceship Operator (`<=>`)"
description: "A look at the three-way comparison operator (`<=>`), a C++20 feature that simplifies the process of writing comparison operators."
date: 2024-09-29
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/images/post-8-thumbnail.svg"
tags: ["C++", "Programming", "Modern C++", "C++20"]
---

Before C++20, if you wanted to make your custom type comparable, you had to write a lot of boilerplate code. You would typically need to implement `operator==`, `operator!=`, `operator<`, `operator>`, `operator<=`, and `operator>=`. This is tedious and error-prone.

C++20 introduced a new feature that dramatically simplifies this process: the **three-way comparison operator**, also known as the **spaceship operator** (`<=>`).

## What is the Spaceship Operator?

The spaceship operator, `operator<=>`, is a single operator that can be used to implement all of the relational operators. It's called the spaceship operator because `<=>` looks a bit like a spaceship from an old arcade game.

The `operator<=>` function returns a comparison category type, such as `std::strong_ordering`, `std::weak_ordering`, or `std::partial_ordering`. The value of this object indicates the relationship between the two compared objects:

*   If the left-hand side is less than the right-hand side, it returns a value that is less than 0.
*   If the left-hand side is equal to the right-hand side, it returns a value that is equal to 0.
*   If the left-hand side is greater than the right-hand side, it returns a value that is greater than 0.

## How to Use the Spaceship Operator

The magic of the spaceship operator is that if you define an `operator<=>` for your type, the compiler will automatically generate the other relational operators (`<`, `>`, `<=`, `>=`) for you. If you also define an `operator==`, the compiler will generate `operator!=` as well.

Here's an example of a simple `Point` class:

```cpp
#include <compare>
#include <iostream>

struct Point {
    int x;
    int y;

    // The compiler will generate the rest of the operators
    auto operator<=>(const Point& other) const = default;
};

int main() {
    Point p1{1, 2};
    Point p2{1, 3};

    std::cout << std::boolalpha;
    std::cout << (p1 < p2) << std::endl;  // true
    std::cout << (p1 > p2) << std::endl;  // false
    std::cout << (p1 == p2) << std::endl; // false
}
```

By defining `operator<=>` as `= default`, we are telling the compiler to generate a default implementation that performs a member-wise comparison of the members of the struct in the order they are declared. This is often exactly what you want.

## Customizing the Comparison

Of course, you can also provide your own custom implementation of `operator<=>`.

```cpp
#include <compare>

struct Person {
    std::string name;
    int age;

    auto operator<=>(const Person& other) const {
        // Compare by age first, then by name
        if (auto cmp = age <=> other.age; cmp != 0) {
            return cmp;
        }
        return name <=> other.name;
    }
    bool operator==(const Person& other) const {
        return age == other.age && name == other.name;
    }
};
```

## Why Use the Spaceship Operator?

The spaceship operator is a major "quality of life" improvement for C++ developers.

*   **Less Boilerplate:** It significantly reduces the amount of boilerplate code you have to write to make your types comparable.
*   **Reduced Errors:** By generating the relational operators for you, it reduces the chances of making a mistake in your comparison logic.
*   **Improved Readability:** It makes the intent of your code clearer. A single `operator<=>` function is easier to read and understand than six separate relational operators.
*   **More Efficient:** The compiler can often generate more efficient code for the relational operators when they are derived from `operator<=>`.

## Conclusion

The spaceship operator is a fantastic addition to C++20. It's a simple feature that solves a common problem in a clean and elegant way. It's a great example of how C++ is evolving to be a more expressive and developer-friendly language.

If you are writing C++20 code and you need to make your types comparable, you should be using the spaceship operator. It's a hidden gem that will save you time, reduce bugs, and make your code more readable. It's a powerful new tool for your C++ toolkit. It's a small operator that makes a big difference.
