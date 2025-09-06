---
layout: base.njk
title: Contact Me
---

<div class="contact-page">
  <h1>Get in Touch</h1>
  <p class="lead">I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me through the form below or on social media.</p>

  <div class="contact-container">
    <div class="contact-form">
      <h2>Send me a message</h2>
      <form action="YOUR_FORM_ACTION_URL" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="button">Send Message</button>
      </form>
    </div>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <p>You can also find me on the following platforms:</p>
      <ul class="social-links">
        <li><strong>GitHub:</strong> <a href="https://github.com/YourGitHubUsername" target="_blank">YourGitHubUsername</a></li>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/YourTwitterHandle" target="_blank">@YourTwitterHandle</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/YourLinkedInProfile" target="_blank">YourLinkedInProfile</a></li>
      </ul>
      <p>Or send me an email at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    </div>
  </div>
</div>
