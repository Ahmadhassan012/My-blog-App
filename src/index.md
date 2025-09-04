---
layout: base.njk
title: Home
---

<h1>Latest Posts</h1>

<ul class="post-list">
  {% for post in collections.posts | reverse %}
    <li class="post-list-item">
      <h2 class="post-title">
        <a href="{{ post.url }}">{{ post.data.title }}</a>
      </h2>
      <p class="post-meta">
        <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
      </p>
      {% if post.data.thumbnail %}
        <a href="{{ post.url }}">
          <img src="{{ post.data.thumbnail }}" alt="Thumbnail for {{ post.data.title }}" class="post-thumbnail">
        </a>
      {% endif %}
      <p class="post-excerpt">
        {{ post.data.description }}
      </p>
    </li>
  {% endfor %}
</ul>

<style>
.post-list {
  list-style: none;
  padding: 0;
}
.post-list-item {
  margin-bottom: 50px;
}
.post-list-item .post-title {
  margin-bottom: 0.5rem;
}
.post-list-item .post-meta {
  color: #666;
  margin-bottom: 1rem;
}
.post-list-item .post-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.post-list-item .post-excerpt {
  font-size: 1.1rem;
}
</style>
