---
layout: "layouts/base.njk"
title: "Blog"
pagination:
  data: collections.post
  size: 10
  alias: posts
---

<h1>Blog Posts</h1>

<ul class="post-list">
  {% for post in posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      <p>{{ post.data.date | readableDate }}</p>
      <p>{{ post.data.summary }}</p>
    </li>
  {% endfor %}
</ul>
