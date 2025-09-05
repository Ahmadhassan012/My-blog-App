---
layout: post.njk
title: "The SOLID Principles in Practice"
description: "A practical guide to applying the SOLID principles of object-oriented design, with code examples."
date: 2024-09-16
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-8-thumbnail.svg"
tags: ["Software Engineering", "OOP", "Design Patterns"]
---

The SOLID principles are a set of five design principles for object-oriented programming that are intended to make software designs more understandable, flexible, and maintainable. But how do these theoretical principles translate into practice? Let's take a look at each of the principles with some simple code examples.

## 1. Single Responsibility Principle (SRP)

*A class should have only one reason to change.*

**Violation:**
```python
class User:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def save_to_database(self):
        # Code to save the user to the database
        pass

    def generate_report(self):
        # Code to generate a report for the user
        pass
```
The `User` class has two reasons to change: if the user's properties change, or if the way reports are generated changes.

**Solution:**
```python
class User:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

class UserRepository:
    def save(self, user):
        # Code to save the user to the database
        pass

class ReportGenerator:
    def generate(self, user):
        # Code to generate a report for the user
        pass
```
Now, each class has a single responsibility.

## 2. Open/Closed Principle (OCP)

*Software entities should be open for extension, but closed for modification.*

**Violation:**
```python
class Discount:
    def __init__(self, customer, price):
        self.customer = customer
        self.price = price

    def give_discount(self):
        if self.customer == 'favored':
            return self.price * 0.2
        if self.customer == 'vip':
            return self.price * 0.4
```
If we want to add a new type of discount, we have to modify this class.

**Solution:**
```python
class Discount:
    def get_discount(self):
        return 0

class FavoredDiscount(Discount):
    def get_discount(self):
        return 0.2

class VIPDiscount(Discount):
    def get_discount(self):
        return 0.4

class DiscountCalculator:
    def calculate(self, price, discount_type):
        return price * discount_type.get_discount()
```
Now, we can add new discount types by creating new subclasses of `Discount`, without modifying the existing code.

## 3. Liskov Substitution Principle (LSP)

*Subtypes must be substitutable for their base types.*

**Violation:**
```python
class Bird:
    def fly(self):
        pass

class Penguin(Bird):
    def fly(self):
        raise Exception("Penguins can't fly!")
```
If we have a function that takes a `Bird` object and calls `fly()`, it will break if we pass it a `Penguin` object.

**Solution:**
```python
class Bird:
    pass

class FlyingBird(Bird):
    def fly(self):
        pass

class Penguin(Bird):
    # No fly method
    pass
```
Now, a `Penguin` is not a `FlyingBird`, so it can't be substituted where a `FlyingBird` is expected.

## 4. Interface Segregation Principle (ISP)

*Clients should not be forced to depend on interfaces they do not use.*

**Violation:**
```python
from abc import ABC, abstractmethod

class Worker(ABC):
    @abstractmethod
    def work(self):
        pass

    @abstractmethod
    def eat(self):
        pass

class Human(Worker):
    def work(self):
        print("Human working")
    def eat(self):
        print("Human eating")

class Robot(Worker):
    def work(self):
        print("Robot working")
    def eat(self):
        # Robots don't eat!
        pass
```
The `Robot` class is forced to implement the `eat` method, even though it doesn't need it.

**Solution:**
```python
from abc import ABC, abstractmethod

class Workable(ABC):
    @abstractmethod
    def work(self):
        pass

class Eatable(ABC):
    @abstractmethod
    def eat(self):
        pass

class Human(Workable, Eatable):
    def work(self):
        print("Human working")
    def eat(self):
        print("Human eating")

class Robot(Workable):
    def work(self):
        print("Robot working")
```
Now, we have smaller, more specific interfaces, and clients only need to depend on the interfaces they actually use.

## 5. Dependency Inversion Principle (DIP)

*High-level modules should not depend on low-level modules. Both should depend on abstractions.*

**Violation:**
```python
class LightBulb:
    def turn_on(self):
        print("LightBulb on")
    def turn_off(self):
        print("LightBulb off")

class Switch:
    def __init__(self):
        self.bulb = LightBulb()
        self.on = False

    def flip(self):
        if self.on:
            self.bulb.turn_off()
            self.on = False
        else:
            self.bulb.turn_on()
            self.on = True
```
The `Switch` class directly depends on the `LightBulb` class.

**Solution:**
```python
from abc import ABC, abstractmethod

class Switchable(ABC):
    @abstractmethod
    def turn_on(self):
        pass
    @abstractmethod
    def turn_off(self):
        pass

class LightBulb(Switchable):
    def turn_on(self):
        print("LightBulb on")
    def turn_off(self):
        print("LightBulb off")

class Switch:
    def __init__(self, device: Switchable):
        self.device = device
        self.on = False

    def flip(self):
        if self.on:
            self.device.turn_off()
            self.on = False
        else:
            self.device.turn_on()
            self.on = True
```
Now, the `Switch` class depends on the `Switchable` abstraction, not the concrete `LightBulb` class. This allows us to use the `Switch` with any device that implements the `Switchable` interface.

## Conclusion

The SOLID principles are not hard and fast rules, but they are powerful guidelines that can help you to write code that is more maintainable, flexible, and robust. By understanding and applying these principles, you can improve the quality of your software designs and become a more effective object-oriented programmer. It's a key part of writing clean, professional code.
