---
layout: default
title: "Blog"
lang: en
permalink: /en/blog/
description: "Latest news, training tips, and insights from Armada BJJ. Stay updated with our Brazilian Jiu-Jitsu community."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>{{ t.blog.title }}</h1>
    <p>Training tips, academy news, and insights from the world of Brazilian Jiu-Jitsu</p>
  </div>
</div>

<section class="blog-section">
  <div class="wrapper">
    
    {% assign posts = site.posts | where: "lang", page.lang %}
    
    {% if posts.size > 0 %}
      <div class="blog-grid">
        {% for post in posts %}
          <article class="blog-post">
            {% if post.featured_image %}
              <div class="blog-post-image">
                <a href="{{ post.url | relative_url }}">
                  <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}">
                </a>
              </div>
            {% endif %}
            
            <div class="blog-post-content">
              <div class="blog-post-meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">
                  {{ post.date | date: "%B %d, %Y" }}
                </time>
                
                {% if post.categories %}
                  <div class="blog-post-categories">
                    {% for category in post.categories %}
                      <span class="category-tag">{{ category }}</span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
              
              <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
              
              <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
              
              <div class="blog-post-footer">
                <a href="{{ post.url | relative_url }}" class="read-more">{{ t.blog.read_more }}</a>
                
                {% if post.author %}
                  <span class="author">{{ t.blog.by }} {{ post.author }}</span>
                {% endif %}
              </div>
            </div>
          </article>
        {% endfor %}
      </div>
      
      <!-- Pagination would go here if needed -->
      
    {% else %}
      <div class="no-posts">
        <h2>Coming Soon</h2>
        <p>We're working on some great content. Check back soon for training tips, academy news, and BJJ insights!</p>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Contact Us</a>
      </div>
    {% endif %}
    
  </div>
</section>

<style>
.page-header {
  background: var(--section-bg);
  padding: 120px 0 var(--spacing-xl);
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.blog-section {
  padding: var(--spacing-xl) 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.blog-post {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
}

.blog-post:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.blog-post-image {
  height: 250px;
  overflow: hidden;
}

.blog-post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.blog-post:hover .blog-post-image img {
  transform: scale(1.05);
}

.blog-post-content {
  padding: var(--spacing-md);
}

.blog-post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: 0.9rem;
  color: var(--text-light);
}

.blog-post-categories {
  display: flex;
  gap: var(--spacing-xs);
}

.category-tag {
  background: var(--secondary-color);
  color: white;
  padding: 2px 8px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
}

.blog-post h2 {
  margin-bottom: var(--spacing-sm);
}

.blog-post h2 a {
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

.blog-post h2 a:hover {
  color: var(--secondary-color);
}

.blog-post p {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.blog-post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-more {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.read-more:hover {
  text-decoration: underline;
}

.author {
  font-size: 0.9rem;
  color: var(--text-light);
}

.no-posts {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.no-posts h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.no-posts p {
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .blog-post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
  
  .blog-post-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
}
</style>