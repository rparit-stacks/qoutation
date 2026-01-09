Detailed Technical & Functional Proposal
Custom Built E-Commerce Platform

Backend: Java Spring Boot

1. Introduction

This document explains the complete functional flow, technical flow, and module-level working of the proposed custom-built e-commerce website.

The platform is designed specifically for personalized product mockups, where users can:

Select fabric

Select or upload design

Instantly view a real-time mockup

Interact with a smooth, aesthetic UI

This project is not template-based. Every module is custom developed to ensure scalability, performance, and future extensibility.

2. Project Objective

The main objectives of this project are:

To build a fully customized e-commerce platform

To provide personalized product visualization

To ensure fast loading and optimized performance

To provide an admin-controlled CMS

To integrate secure authentication

To enable WhatsApp-based notifications

To create a future-ready backend using Spring Boot

3. Overall System Architecture
High-Level Architecture

Frontend: Custom-built UI (HTML/CSS/JS or framework)

Backend: Java Spring Boot REST APIs

Database: Relational DB (MySQL/PostgreSQL)

External Services:

Google OAuth

Email OTP Service

WhatsApp API

Request Flow

User interacts with frontend

Frontend sends API request to backend

Backend processes logic

Database interaction happens

Response sent back to frontend

UI updates dynamically

4. Frontend Pages – Detailed Flow
4.1 Landing Page

Purpose:
The landing page is the first impression of the platform.

Flow:

User opens website

Landing page loads with optimized assets

Hero section highlights brand & value proposition

Call-to-action buttons guide user to products

Responsive behavior adjusts layout for mobile/tablet

Technical Points:

Lazy loading of images

Minimal JS for faster load

SEO-friendly structure

4.2 Category Page

Purpose:
Displays products grouped by category.

Flow:

User clicks on category

API fetches category-wise products

Products displayed in grid/list

Filters can be applied later (future scope)

Backend Flow:

/api/categories

/api/products?categoryId=

4.3 Product Page

Purpose:
Detailed view of a single product.

Flow:

User selects a product

Backend fetches:

Product details

Available fabrics

Available designs

User can proceed to customization

5. Personalized Mockup System (Core Feature)

This is the heart of the project.

5.1 Blank Fabric Module

Purpose:
Acts as a base layer for mockup generation.

Flow:

System loads a default blank fabric image

Fabric acts as background canvas

All designs are applied on top of this

Why Required:
Without a blank fabric layer, mockups cannot be standardized.

5.2 Fabric Selection Module

Purpose:
Allows users to choose different fabric types.

Flow:

Backend stores fabric metadata (ID, image, name)

User selects fabric

Frontend updates preview

Backend logs user selection

Technical Logic:

Fabric mapped with product ID

Image overlays handled on frontend

5.3 Design Selection Module

Purpose:
User selects a predefined design.

Flow:

Designs fetched from backend

User clicks on design

Design overlays on selected fabric

Mockup preview updates instantly

5.4 Custom Design Upload

Purpose:
Allows user to upload their own design.

Flow:

User uploads image (PNG/JPG)

Backend validates file

Image stored securely

Design is applied to fabric

Live preview shown

Security Handling:

File size limit

File type validation

Sanitized storage

5.5 Mockup Preview Engine

Purpose:
Combines fabric + design into a single visual preview.

Flow:

Fabric selected

Design selected/uploaded

Frontend overlays images

Positioning & scaling applied

User sees final mockup

Why Custom:
This logic is custom-built, not plugin-based.

6. Authentication System
6.1 Google Sign-In

Flow:

User clicks “Login with Google”

OAuth authentication happens

Backend verifies token

User record created/updated

Session established

6.2 Email Login with OTP

Flow:

User enters email

OTP generated

OTP sent via email

User enters OTP

Backend verifies OTP

Login successful

7. Admin Panel – Detailed Explanation
7.1 Admin Authentication

Secure admin login

Role-based access

7.2 Product Management

Admin can:

Add products

Edit products

Assign fabrics

Assign designs

7.3 Mockup Content Control

Admin manages:

Blank fabrics

Fabric images

Design images

This ensures full control without developer dependency.

8. CMS (Content Management System)
8.1 Page Content Management

Admin can edit:

Landing page text

Contact page content

Static sections

8.2 Media Management

Upload images

Replace banners

Manage assets

9. WhatsApp Notification System
Flow:

User performs action

Backend triggers event

WhatsApp API called

Message delivered

Examples:

Login alert

Admin notification

User confirmation

10. Backend – Java Spring Boot
Why Spring Boot?

Scalable

Secure

Enterprise-grade

Clean architecture

Backend Layers

Controller

Service

Repository

Entity

DTO

Security

Token-based auth

Input validation

Secure API endpoints

11. Load Balancing & Performance

Optimized APIs

Stateless backend

Ready for horizontal scaling

Cache-ready architecture


PART-2: Backend APIs, Database Design & Data Flow
Custom E-Commerce Platform (Java Spring Boot)
12. Backend Architecture (Deep Dive)

The backend is developed using Java Spring Boot, following clean layered architecture to ensure maintainability, scalability, and performance.

Architecture Layers

Controller Layer

Service Layer

Business Logic Layer

Repository (DAO) Layer

Database Layer

Each layer has a single responsibility, preventing tight coupling.

13. API Design Philosophy

The platform follows:

RESTful API standards

Stateless communication

JSON-based request/response

Versioned APIs for future upgrades

Example:

/api/v1/products
/api/v1/fabrics
/api/v1/designs
/api/v1/mockup

14. Database Schema Design

Relational database (MySQL/PostgreSQL) is used.

14.1 User Table
Field	Description
id	Unique user ID
name	User full name
email	User email
login_type	GOOGLE / OTP
created_at	Account creation time
status	Active / Disabled
14.2 Product Table
Field	Description
id	Product ID
name	Product name
description	Product details
feature	Single product feature
status	Active / Inactive
14.3 Category Table
Field	Description
id	Category ID
name	Category name
status	Active
14.4 Fabric Table
Field	Description
id	Fabric ID
name	Fabric name
image_url	Fabric base image
product_id	Linked product
14.5 Design Table
Field	Description
id	Design ID
name	Design name
image_url	Design image
is_custom	Yes / No
14.6 Custom Design Upload Table
Field	Description
id	Upload ID
user_id	Uploaded by
image_url	Stored image
created_at	Upload time
14.7 Mockup Table
Field	Description
id	Mockup ID
user_id	User
fabric_id	Selected fabric
design_id	Selected/uploaded design
preview_url	Generated preview
created_at	Timestamp
15. Complete User Journey (Backend Perspective)
15.1 User Visits Website

No API call initially

Static content served

Lazy API calls on interaction

15.2 User Authentication Flow
Google Login

Frontend sends Google token

Backend validates token

Checks user existence

Creates user if not present

Returns auth token

Email OTP Login

User enters email

OTP generated & stored temporarily

OTP sent via email

User submits OTP

Backend verifies OTP

Session token issued

16. Product Browsing Flow
16.1 Category API
GET /api/v1/categories


Returns list of active categories.

16.2 Product List API
GET /api/v1/products?categoryId=1


Returns products mapped to category.

16.3 Product Detail API
GET /api/v1/products/{id}


Returns:

Product info

Available fabrics

Available designs

17. Custom Mockup System – Backend Logic
17.1 Fabric Fetch Flow
GET /api/v1/fabrics?productId=1


Returns fabric metadata

Includes base image URL

17.2 Design Fetch Flow
GET /api/v1/designs?productId=1


Predefined designs only

Optimized image URLs

17.3 Custom Design Upload API
POST /api/v1/design/upload


Steps:

File received

Validate file type

Validate size

Store securely

Save record in DB

Return image URL

17.4 Mockup Generation Flow

Mockup rendering happens frontend-side for performance.

Backend responsibility:

Save user selections

Store mockup metadata

POST /api/v1/mockup/save

18. Admin Panel – Backend Flow
18.1 Admin Login

Role-based authentication

Separate admin APIs

18.2 Product Management APIs
POST /api/v1/admin/product
PUT /api/v1/admin/product/{id}
DELETE /api/v1/admin/product/{id}

18.3 Fabric & Design Management

Admin can:

Upload fabric images

Upload designs

Map to products

18.4 CMS APIs
GET /api/v1/cms/page/{slug}
PUT /api/v1/admin/cms/page


Allows admin to update content dynamically.

19. WhatsApp Notification System (Technical Flow)
Trigger-Based System

Events:

User login

Mockup creation

Admin alert

Flow:

Event triggered

Backend formats message

WhatsApp API called

Delivery confirmation logged

20. Security Implementation
API Security

JWT-based authentication

Role-based authorization

CSRF protection

Input sanitization

File Security

Only allowed file types

Secure storage location

No public execution access

21. Performance Optimization
Backend

Stateless APIs

Connection pooling

Optimized queries

Frontend

Lazy loading

Image compression

Minimal re-renders

22. Load Balancing & Scalability
Design Approach

Horizontal scaling ready

Multiple backend instances

Load balancer in front

23. Error Handling & Logging

Centralized exception handling

Meaningful error responses

Server-side logs

Admin-visible alerts (optional)

24. Future Scalability Scope

Payment gateway

Order management

Analytics dashboard

Multi-language support

CDN integration

PART-3: User Journey, Admin Journey & Edge-Case Handling
Custom Built E-Commerce Platform
25. End-to-End User Journey (Step-by-Step)

This section explains exactly what happens from the moment a user opens the website until a mockup is created, in very simple but professional terms.

25.1 User Opens Website

User enters website URL

Landing page loads

Static content (text, banners) loads first

Images load lazily

No login required at this stage

Why this matters:
User gets fast experience without forced login.

25.2 User Browses Categories

User clicks on a category

Backend API fetches products under that category

Products displayed with:

Image

Name

Short description

Edge Case Handling:

If no products → “No products available”

If API fails → fallback message shown

25.3 User Opens Product Page

User clicks a product

Backend sends:

Product details

Available fabrics

Available designs

Page loads in structured manner:

Product info first

Customization options next

26. Customization Flow (Most Important Part)

This is the core business logic of the project.

26.1 Fabric Selection Flow

Default blank fabric loads

User clicks another fabric

Fabric image replaces base layer

UI updates instantly

Edge Case:

If fabric image fails → fallback blank fabric used

26.2 Design Selection Flow

User selects predefined design

Design overlays on fabric

Position & scale auto-applied

Mockup preview refreshes live

26.3 Custom Design Upload Flow

User clicks “Upload Design”

File picker opens

User selects image

Backend validates:

File type

File size

File uploaded securely

Design applied to fabric

Preview shown instantly

Edge Case Handling:

Invalid file → error message

Large file → rejected

Upload fail → retry option

26.4 Mockup Preview Finalization

Fabric selected

Design selected/uploaded

Combined mockup shown

User can:

Change fabric

Change design

Upload new design

No page reloads — pure dynamic experience.

27. Login & Authentication Flow (Real Life)
27.1 Login Trigger

Login is required only when:

User saves mockup

User proceeds further (future scope)

27.2 Google Login (User View)

User clicks Google Login

Google popup opens

User selects account

Redirect back to site

User logged in

Backend Actions (Invisible to User):

Token validation

User creation (if new)

Session creation

27.3 Email OTP Login (User View)

User enters email

OTP sent

User enters OTP

Login successful

Edge Case:

Wrong OTP

Expired OTP

Retry OTP allowed

28. Admin Journey (Full Control Explained)
28.1 Admin Login

Separate admin login panel

Role-based security

Protected routes

28.2 Admin Dashboard

Admin sees:

Total products

Total fabrics

Total designs

Total mockups created

28.3 Product Management Flow

Admin can:

Add product

Edit product

Disable product (soft delete)

Why soft delete:
Avoids data loss.

28.4 Fabric Management

Admin uploads:

Blank fabric

Colored fabric

Patterned fabric

Each fabric is:

Linked to product

Previewable

Replaceable anytime

28.5 Design Management

Admin can:

Upload designs

Enable / disable designs

Categorize designs

28.6 CMS Management Flow

Admin edits:

Landing page text

Contact page info

Static banners

No developer needed after deployment.

29. WhatsApp Notification – Real Scenarios
29.1 User Login Notification

Trigger: Successful login

Message: Login confirmation

Receiver: User / Admin

29.2 Mockup Creation Notification

Trigger: Mockup saved

Receiver: Admin

Message includes:

User name

Product

Time

29.3 Failure Handling

API down → retry mechanism

Message failed → logged in system

30. Error Handling Strategy
Frontend Errors

User-friendly messages

No technical jargon

Backend Errors

Logged internally

Sanitized response to frontend

31. Security Edge Cases

Unauthorized API access → blocked

Admin routes protected

File upload sanitization

Token expiration handling

32. Data Consistency & Integrity

Transactions for critical operations

No partial data saves

Rollback on failure

33. Real-World Usage Example

Example:

User selects T-shirt

Chooses cotton fabric

Uploads logo

Sees mockup

Saves mockup

Admin notified on WhatsApp

This flow happens in seconds.

34. Why This System Is Custom & Valuable

No plugins

No third-party builders

Fully controlled logic

Extendable anytime

Enterprise-ready backend

PART-4: Project Timeline, Delivery Plan, Cost Justification & Support
Custom Built E-Commerce Platform (Java Spring Boot)
35. Project Execution Strategy

This project will be executed using a phase-wise delivery model, ensuring:

Clear milestones

Regular visibility

Controlled scope

On-time delivery

Each phase is independently testable and reviewable.

36. Development Phases & Timeline
Phase 1: Requirement Finalization & System Design (3–4 Days)

Activities:

Final confirmation of all modules

Mockup logic discussion

Database schema finalization

API structure design

UI flow planning

Deliverables:

Technical blueprint

Flow confirmation

Final scope lock

Phase 2: UI & Frontend Development (6–7 Days)

Activities:

Landing page design

Category & product pages

Personalised page

Responsive behavior

Aesthetic polishing

Deliverables:

Fully functional frontend

Responsive layouts

Performance-optimized UI

Phase 3: Backend Development (Java Spring Boot) (7–8 Days)

Activities:

API development

Authentication (Google + OTP)

Product, fabric, design APIs

Admin APIs

CMS APIs

Deliverables:

Secure backend APIs

Admin panel integration

Database integration

Phase 4: Mockup Engine Development (5–6 Days)

Activities:

Fabric + design layering logic

Custom design upload handling

Live preview rendering

Edge case handling

Deliverables:

Fully working mockup system

Real-time preview

Phase 5: WhatsApp Integration & Notifications (2–3 Days)

Activities:

WhatsApp API integration

Event-based triggers

Message templates

Retry & logging logic

Deliverables:

Working WhatsApp notifications

Phase 6: Testing, Optimization & Load Balancing (3–4 Days)

Activities:

Functional testing

Performance testing

Security validation

Load balancing configuration

Deliverables:

Stable & optimized system

Phase 7: Deployment & Handover (2 Days)

Activities:

Server deployment

Final checks

Admin walkthrough

Documentation handover

⏱ Total Estimated Duration

28–34 Working Days

37. Cost Justification (Why ₹21,000 is合理 / Fair)

Although the total cost is ₹21,000, the project includes enterprise-level custom features.

High-Effort Modules (Higher Cost)

Custom mockup engine

CMS system

WhatsApp integration

These involve:

Complex logic

File handling

Third-party APIs

Security considerations

Lower-Effort Modules (Lower Cost)

Static pages

Basic product pages

Category listing

Pricing is balanced intentionally.

38. Payment Milestones (Recommended)
Stage	Payment
Project Start	30%
After Frontend Completion	30%
After Backend + Mockup	30%
Final Delivery	10%
39. Support & Maintenance Policy
Free Support (30 Days)

Bug fixes

Minor UI adjustments

Performance tweaks

Paid Support (Post 30 Days)

New features

Major UI changes

Third-party upgrades

40. Ownership & Intellectual Property

Client owns:

Source code

Database

Designs & content

No license lock-in

No vendor dependency

41. Security & Compliance Commitment

Secure coding standards

Protected admin access

Data validation

Secure file handling

42. Risks & Mitigation
Risk	Mitigation
Scope creep	Scope freeze after Phase 1
Third-party API issues	Retry & fallback logic
High traffic	Load-balanced architecture
43. Future Expansion Ready

System is designed to support:

Payments

Orders

Shipping

Analytics

Multi-language

Mobile apps

Without rewriting backend.

44. Final Proposal Summary

This project delivers:

Custom e-commerce platform

Personalized mockup engine

Admin + CMS

WhatsApp notifications

Secure authentication

Java Spring Boot backend

Scalable & future-ready architecture

All within ₹21,000.