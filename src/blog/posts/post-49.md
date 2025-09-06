---
layout: layouts/post.njk
title: "The Twelve-Factor App: A Methodology for Building Modern Applications"
description: "An overview of the Twelve-Factor App methodology, a set of best practices for building software-as-a-service applications."
date: 2024-09-05
author_name: "Jules"
author_image: "/assets/images/author-jules.svg"
thumbnail: "/assets/images/post-10-thumbnail.svg"
tags: ["Software Engineering", "Best Practices", "Cloud Native"]
---

The Twelve-Factor App is a methodology for building software-as-a-service (SaaS) applications that was first articulated by developers at Heroku. It provides a set of best practices that are designed to enable applications to be built with portability and resilience when deployed to the web.

The methodology is particularly well-suited for building applications that are deployed to modern cloud platforms. Let's take a look at the twelve factors.

## The Twelve Factors

1.  **Codebase:** There should be one codebase tracked in version control, with many deploys.
2.  **Dependencies:** Explicitly declare and isolate dependencies. Never rely on the existence of system-wide packages.
3.  **Config:** Store configuration in the environment. This separates the config from the code and allows you to use the same build artifact in different environments.
4.  **Backing Services:** Treat backing services (like databases, message queues, or caching systems) as attached resources. This means the application should be able to be connected to different backing services without any code changes.
5.  **Build, Release, Run:** Strictly separate the build, release, and run stages. The build stage converts the code into an executable bundle. The release stage combines the build with the config. The run stage runs the application in the execution environment.
6.  **Processes:** Execute the app as one or more stateless processes. Any state that needs to be persisted should be stored in a stateful backing service.
7.  **Port Binding:** Export services via port binding. The application should be self-contained and not rely on a runtime injection of a webserver into the execution environment to create a web-facing service.
8.  **Concurrency:** Scale out via the process model. This means scaling the application by adding more concurrent processes, rather than making a single process larger.
9.  **Disposability:** Maximize robustness with fast startup and graceful shutdown. Processes should be disposable, meaning they can be started or stopped at a moment's notice.
10. **Dev/Prod Parity:** Keep development, staging, and production as similar as possible. This helps to catch bugs early and reduces the chances of issues that only appear in production.
11. **Logs:** Treat logs as event streams. The application should not concern itself with routing or storage of its output stream. Instead, it should write its event stream, unbuffered, to standard output.
12. **Admin Processes:** Run admin/management tasks as one-off processes. These are tasks like running database migrations or executing a script in a REPL.

## Why is the Twelve-Factor App Methodology Important?

The Twelve-Factor App methodology provides a set of principles for building applications that are:

*   **Scalable:** The emphasis on stateless processes and scaling out via concurrency makes it easy to scale applications to handle high loads.
*   **Resilient:** The focus on disposability and treating backing services as attached resources helps to build applications that are resilient to failure.
*   **Maintainable:** The principles of a single codebase, explicit dependencies, and separating config from code make applications easier to maintain and understand.
*   **Portable:** By following these principles, you can build applications that can be easily moved between different execution environments without significant changes.

The Twelve-Factor App methodology has become a de facto standard for building cloud-native applications. By following these principles, you can build applications that are well-suited for the dynamic and distributed nature of modern cloud platforms. It's a valuable set of guidelines for any developer who is building applications for the web.
