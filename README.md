# My Tech Blog

This is a modern, fast, and secure blog built with the [Eleventy](https://www.11ty.dev/) static site generator.

## Features

*   Clean and minimalist design
*   Responsive layout for all screen sizes
*   Blog posts written in Markdown
*   Automatic deployment to GitHub Pages

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need [Node.js](https://nodejs.org/) (version 18 or higher) and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Navigate to the project directory
    ```sh
    cd your_repository
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

### Running Locally

To start the local development server, run the following command:

```sh
npx @11ty/eleventy --serve
```

This will build the site and serve it at `http://localhost:8080`. The site will automatically reload when you make changes to the source files.

To just build the site without starting a server, run:
```sh
npx @11ty/eleventy
```
The output will be in the `_site` directory.

## Built With

*   [Eleventy](https://www.11ty.dev/) - The static site generator
*   [Nunjucks](https://mozilla.github.io/nunjucks/) - The templating language
*   [Markdown](https://www.markdownguide.org/) - For writing content
*   [GitHub Actions](https://github.com/features/actions) - For continuous deployment
