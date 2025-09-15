---
layout: "layouts/base.njk"
title: "Projects"
---

<h1>Projects</h1>

<ul class="project-list">
  {% for project in projects %}
    <li>
      <h2><a href="{{ project.url }}">{{ project.name }}</a></h2>
      <p>{{ project.description }}</p>
    </li>
  {% endfor %}
</ul>
