Strapi CMS Backend – Documentation

This backend provides a fully functional Headless CMS for blog posts, categories, and media assets. It is built using Strapi v4, and exposes clean REST APIs consumed by the Next.js frontend. 


1. Project Overview

This Strapi backend provides:
Blog post management
Category management
Image upload handling
Public REST API endpoints
Authentication using API tokens
Auto-generated admin panel

Designed to work with any frontend through REST or GraphQL. 

2. Tech Stack

Strapi v4
Node.js
SQLite 
REST API
Cloud-ready structure 

Environment Variables (.env) 
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
ENCRYPTION_KEY=tobemodified

# Used by frontend
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN= a38fc7c5cbfe7fa061ade57f54bff818c9e45c7a3251dcce25dd15b320295151b52337de2239519d8e4a43b2917286f3e655ee993b647c3d38cf96362ee53bc8dd0341c7172534dadcd8b2f8b5db3cbf3b7e8f0b53e226d24e33a79598adb45c0e058a2ab56ab0822b61acd56075cd90c4a3d8d0582b501254c7d06a92aead6c
 
Generating API Token

Inside Strapi admin:

Settings → API Tokens → Create New Token
Token Type: Read Only
Permissions: blog, category


6. Content Types 

Blog Post
Fields:
title (text)
content (rich text)
cover (media)
category (relation → Category)
Category
Fields:
name (text) 

Admin Panel Screenshots 
![alt text](<Screenshot 2025-11-19 003907.png>)