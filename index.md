---
layout: "layouts/base.njk"
title: "Home"
---

<div class="profile">
  <img src="{{ profile.avatar }}" alt="Avatar for {{ profile.name }}" class="profile-avatar">
  <h1>{{ profile.name }}</h1>
  <p>{{ profile.bio }}</p>
  <ul class="social-links">
    {% for social in profile.socials %}
      <li><a href="{{ social.url }}">{{ social.name }}</a></li>
    {% endfor %}
  </ul>
</div>
