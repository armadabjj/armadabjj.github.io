---
layout: default
title: "Blog"
lang: fr
description: "Dernières nouvelles, conseils d'entraînement et perspectives d'Armada BJJ. Restez à jour avec notre communauté de Jiu-Jitsu Brésilien."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>{{ t.blog.title }}</h1>
    <p>Conseils d'entraînement, nouvelles de l'académie et perspectives du monde du Jiu-Jitsu Brésilien</p>
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
                  {{ post.date | date: "%d %B %Y" }}
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
      
    {% else %}
      <div class="no-posts">
        <h2>Bientôt Disponible</h2>
        <p>Nous travaillons sur du contenu formidable. Revenez bientôt pour des conseils d'entraînement, des nouvelles de l'académie et des perspectives sur le BJJ !</p>
        <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Contactez-Nous</a>
      </div>
    {% endif %}
    
  </div>
</section>