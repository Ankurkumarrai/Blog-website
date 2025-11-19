Full Project Documentation — Strapi Blog CMS + Next.js Frontend 

Blogging Platform (Strapi CMS + Next.js Frontend)

A full-stack blogging platform built using:

Strapi (Node.js) for the backend CMS

Next.js for the frontend Blog UI

REST API communication

Fully responsive UI

Supports posts, categories, media uploads, authors 

Project Structure 

project-root/
│
├── backend/        # Strapi CMS
└── frontend/       # Next.js Blog W

Features Implemented
 Backend (Strapi CMS)

Posts, Categories, Authors content types

Media upload (images)

REST API enabled

Token-based secured access

Auto-generated dashboard for content creation

Slug & SEO-ready schema

Frontend (Next.js)

Home page listing all blog posts

Single post page

Category filtering

Responsive UI

Fetches data from Strapi REST API

Dynamic routing for posts 

System Architecture Diagram 
                ┌────────────────────┐
                │   Strapi Admin UI  │
                │  (Content Manager) │
                └──────────┬─────────┘
                           │
                           │ Creates / Edits Content
                           ▼
┌───────────────────────────────┐        REST API       ┌────────────────────────┐
│         Strapi Backend        │ ◀──────────────────▶ │       Next.js UI        │
│  (Node.js CMS + SQLite/Postgres)                     │ (SSR/CSR Blog Website)  │
└───────────────────────────────┘                      └────────────────────────┘
                           ▲
                           │
                           │ API Token Authentication
                           │
                ┌──────────┴──────────┐
                │     Database         │
                │ (SQLite/Postgres)    │
                └──────────────────────┘

Data Flow Diagram 
Visitor → Next.js UI → /api/posts → Strapi → Database → Strapi Response → Next.js UI → Render Page


Installation & Setup
1️ Clone the project 
git clone https://github.com/Ankurkumarrai/Blog-website 

Backend (Strapi CMS) Setup 
cd backend
npm install

Start Strapi 
npm run develop

Strapi will open:
 http://localhost:1337/admin 

Frontend (Next.js) Setup 
cd frontend
npm install

Start frontend 
npm run dev
Frontend runs here:
http://localhost:3000 

UI Demo (Screens)
Home Page

Lists all posts

Shows featured image, title, short content

Click to open full post

Single Post Page

Full content

Cover image

Category

Responsive layout

Categories Filter

Browse posts by category

Media Upload Support

Upload images in Strapi

Automatically shown in frontend 




Additional Documentation (Backend + Frontend)

This repository contains three README files:

1. Root README (this file)

Full system overview

Architecture & diagrams

Setup instructions for both frontend + backend

Deployment guide

Demo video requirements

 2. Backend README (backend/README.md)

Contains:

How to run Strapi CMS

Content-type structure

Environment variables

API access

Admin panel screenshots

Database configuration

Production build instructions

 3. Frontend README (frontend/README.md)

Contains:

How to run Next.js app

All required environment variables

API integration guide

Folder structure explanation

UI components documentation

Build & deploy instructions