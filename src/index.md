---
layout: base.njk
title: Home
pagination:
  data: collections.posts
  size: 3
  alias: posts
  reverse: true
---

<h1>Latest Posts</h1>

<ul class="post-list">
  {% for post in posts %}
    <li class="post-list-item">
      {% if post.data.thumbnail %}
        <a href="{{ post.url }}">
          <img src="{{ post.data.thumbnail }}" alt="Thumbnail for {{ post.data.title }}" class="post-thumbnail">
        </a>
      {% endif %}
      <div class="post-list-item-content">
        <h2 class="post-title">
          <a href="{{ post.url }}">{{ post.data.title }}</a>
        </h2>
        <p class="post-meta">
          <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
        </p>
        <p class="post-excerpt">
          {{ post.data.description }}
        </p>
        <a href="{{ post.url }}" class="read-more">Read More</a>
      </div>
    </li>
  {% endfor %}
</ul>

<nav class="pagination">
  <a href="{{ pagination.previousPageHref }}" class="pagination-link" {% if not pagination.previousPageHref %}disabled{% endif %}>Previous</a>
  <span class="pagination-page">Page {{ pagination.pageNumber | plus: 1 }} of {{ pagination.totalPages }}</span>
  <a href="{{ pagination.nextPageHref }}" class="pagination-link" {% if not pagination.nextPageHref %}disabled{% endif %}>Next</a>
</nav>
