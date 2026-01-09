import React, { useState } from 'react';
import './QuotePage.css';

const QuotePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  // Comprehensive 30,000-40,000 word proposal content
  const sections = [
    {
      title: "I. EXECUTIVE SUMMARY & PROJECT PHILOSOPHY",
      content: (
        <div className="section-content">
          <p>This document presents a comprehensive technical and functional proposal for a <strong>Custom-Built E-Commerce Platform</strong> specifically engineered for personalized product mockups. Unlike template-based solutions that rely on heavy plugins and third-party dependencies, this platform is architected from the ground up using enterprise-grade technologies to ensure scalability, performance, and future extensibility.</p>
          
          <h4>1.1 The Core Problem We Solve</h4>
          <p>Traditional e-commerce platforms like Shopify, WooCommerce, or Magento are built for generic use cases. When you need a specialized feature like real-time mockup visualization where users can select fabrics, upload custom designs, and see instant previews, these platforms become bottlenecks. They rely on plugins that add unnecessary overhead, slow down page loads, and create maintenance nightmares. Our solution eliminates all these pain points by building a purpose-driven architecture that handles your specific business logic with precision and speed.</p>
          
          <h4>1.2 Why Custom Development Matters</h4>
          <p>Every line of code in this platform serves your business model. We don't include features you don't need, and we don't compromise on features you do need. The mockup engine, which is the heart of your platform, is built using custom mathematical algorithms for coordinate-based layering. This ensures that when a user selects a fabric and overlays a design, the rendering happens in real-time with zero perceptible lag. Template-based solutions simply cannot achieve this level of performance because they're constrained by their generic architecture.</p>
          
          <h4>1.3 Technology Stack Rationale</h4>
          <p>We've chosen <strong>Java Spring Boot</strong> for the backend because it's battle-tested in enterprise environments handling millions of requests per day. Spring Boot provides built-in security, dependency injection, and a clean layered architecture that makes the codebase maintainable and scalable. For the frontend, we use <strong>React.js</strong> because its Virtual DOM ensures that UI updates happen instantly without full page reloads. This is critical for the mockup preview engine where users expect immediate visual feedback.</p>
          
          <h4>1.4 Decoupled Architecture Benefits</h4>
          <p>Our architecture separates the frontend (what users see) from the backend (where business logic lives). This decoupling means that if you decide to build a mobile app in the future, the backend APIs are already ready to serve it. You won't need to rebuild the core logic or pay for additional development. The same APIs that power your website will power your mobile app, your admin panel, and any future integrations you might need.</p>
        </div>
      )
    },
    {
      title: "II. COMPREHENSIVE MODULE BREAKDOWN & TECHNICAL SYNOPSIS",
      content: (
        <div className="section-content">
          <div className="module-detail">
            <h4>2.1 Advanced Mockup Preview Engine (Core Module)</h4>
            <p>This is the most sophisticated component of the entire platform. The mockup engine is not a simple image overlay tool—it's a custom-built rendering system that combines multiple layers of visual data to create photorealistic product previews in real-time.</p>
            
            <h5>2.1.1 Blank Fabric Module Architecture</h5>
            <p>The blank fabric acts as the foundational canvas layer. When a product is selected, the system loads a standardized blank fabric image that serves as the base. This standardization is crucial because it ensures that all mockups maintain consistent dimensions and aspect ratios, regardless of which fabric or design is applied later. The blank fabric module includes:</p>
            <ul>
              <li><strong>Base Layer Management:</strong> Each product has a predefined blank fabric template stored in the database. This template includes metadata such as dimensions, aspect ratio, and anchor points for design placement.</li>
              <li><strong>Dynamic Loading:</strong> The blank fabric is loaded asynchronously to ensure fast initial page load times. We use lazy loading techniques so that the fabric image only loads when the user reaches the customization page.</li>
              <li><strong>Fallback Mechanism:</strong> If the primary blank fabric image fails to load (network issues, server errors), the system automatically falls back to a default template, ensuring the user experience is never broken.</li>
            </ul>
            
            <h5>2.1.2 Fabric Selection Module with Real-Time Texture Mapping</h5>
            <p>The fabric selection module allows users to choose from multiple fabric types (cotton, polyester, silk, etc.). When a user selects a fabric, the system performs real-time texture replacement without requiring a page reload. This is achieved through:</p>
            <ul>
              <li><strong>Image Preloading:</strong> All fabric images are preloaded in the background when the product page loads. This ensures instant switching when the user clicks on a fabric option.</li>
              <li><strong>Canvas API Integration:</strong> We use HTML5 Canvas API to perform pixel-level manipulation. When a fabric is selected, the canvas context is updated with the new texture, and the existing design layer (if any) is re-rendered on top.</li>
              <li><strong>State Management:</strong> The selected fabric ID is stored in React state and synchronized with the backend via API calls. This ensures that if the user refreshes the page, their selection is preserved.</li>
              <li><strong>Product-Fabric Mapping:</strong> Each fabric is mapped to specific products in the database. This allows admins to control which fabrics are available for which products, enabling flexible product catalog management.</li>
            </ul>
            
            <h5>2.1.3 Design Selection and Layering System</h5>
            <p>The design selection module handles both predefined designs (stored in the database) and custom user-uploaded designs. The layering system uses advanced algorithms to ensure designs are positioned correctly on the fabric:</p>
            <ul>
              <li><strong>Coordinate-Based Positioning:</strong> Each design has anchor points defined relative to the fabric dimensions. When a design is selected, the system calculates the exact pixel coordinates where it should be placed.</li>
              <li><strong>Transparency Handling:</strong> Designs with transparent backgrounds (PNG format) are processed using alpha channel blending. This ensures that the fabric texture shows through transparent areas of the design naturally.</li>
              <li><strong>Scaling Algorithms:</strong> Designs are automatically scaled to fit within predefined boundaries on the fabric. The scaling maintains aspect ratio to prevent distortion.</li>
              <li><strong>Real-Time Preview Updates:</strong> Every change (fabric selection, design selection, design upload) triggers an immediate re-render of the preview canvas. The rendering happens in the browser using Web Workers to prevent UI blocking.</li>
            </ul>
            
            <h5>2.1.4 Custom Design Upload with Security Validation</h5>
            <p>Users can upload their own designs (logos, graphics, text). The upload process includes multiple layers of security and validation:</p>
            <ul>
              <li><strong>File Type Validation:</strong> Only PNG, JPG, and JPEG files are accepted. The system checks both file extension and MIME type to prevent malicious file uploads.</li>
              <li><strong>File Size Limits:</strong> Maximum file size is set to 5MB to prevent server overload and ensure fast processing. Files exceeding this limit are rejected with a user-friendly error message.</li>
              <li><strong>Virus Scanning:</strong> Uploaded files are scanned for malware before being stored. This is done server-side using industry-standard scanning libraries.</li>
              <li><strong>Secure Storage:</strong> Files are stored in a dedicated directory outside the web root to prevent direct access. File names are hashed to prevent enumeration attacks.</li>
              <li><strong>Image Processing:</strong> Uploaded images are automatically optimized (compressed, resized if needed) to ensure they don't slow down the preview engine.</li>
            </ul>
          </div>
          
          <div className="module-detail">
            <h4>2.2 Enterprise-Grade Authentication System</h4>
            <p>Security is not an afterthought—it's built into every layer of the authentication system. We implement industry-standard OAuth 2.0 and JWT (JSON Web Tokens) to ensure that user sessions are secure and scalable.</p>
            
            <h5>2.2.1 Google OAuth 2.0 Integration</h5>
            <p>Google Sign-In provides a seamless one-click authentication experience. The implementation includes:</p>
            <ul>
              <li><strong>OAuth Flow:</strong> When a user clicks "Login with Google," they are redirected to Google's authentication server. After successful authentication, Google returns an authorization code to our backend.</li>
              <li><strong>Token Exchange:</strong> Our backend exchanges the authorization code for an access token and ID token. The ID token contains user information (name, email, profile picture) which we use to create or update the user record.</li>
              <li><strong>Token Validation:</strong> Before accepting the Google token, our backend validates it against Google's public keys to ensure it hasn't been tampered with.</li>
              <li><strong>User Record Management:</strong> If the user is logging in for the first time, a new record is created in the database. If they're a returning user, their existing record is updated with the latest information from Google.</li>
              <li><strong>Session Creation:</strong> After successful authentication, our backend generates a JWT token that is sent to the frontend. This token is stored securely and included in all subsequent API requests.</li>
            </ul>
            
            <h5>2.2.2 Email OTP (One-Time Password) System</h5>
            <p>For users who prefer not to use Google, we provide email-based OTP authentication:</p>
            <ul>
              <li><strong>OTP Generation:</strong> When a user enters their email, our backend generates a cryptographically secure 6-digit OTP. This OTP is hashed and stored in the database with an expiration time (typically 10 minutes).</li>
              <li><strong>Email Delivery:</strong> The OTP is sent to the user's email address using a reliable SMTP service. We use transactional email services (like SendGrid or AWS SES) to ensure high deliverability rates.</li>
              <li><strong>OTP Verification:</strong> When the user submits the OTP, our backend hashes the submitted value and compares it with the stored hash. If they match and the OTP hasn't expired, authentication is successful.</li>
              <li><strong>Rate Limiting:</strong> To prevent abuse, we implement rate limiting. Users can request a maximum of 3 OTPs per hour per email address. This prevents spam and reduces server load.</li>
              <li><strong>Session Management:</strong> Similar to Google OAuth, successful OTP verification results in a JWT token being issued to the user.</li>
            </ul>
            
            <h5>2.2.3 JWT Token Architecture</h5>
            <p>JWT tokens are stateless, meaning the server doesn't need to store session information. This makes the system highly scalable:</p>
            <ul>
              <li><strong>Token Structure:</strong> Each JWT contains three parts: header (algorithm info), payload (user ID, email, roles, expiration), and signature (cryptographic verification).</li>
              <li><strong>Token Expiration:</strong> Tokens expire after 24 hours of inactivity. This balances security (shorter sessions) with user convenience (not requiring frequent logins).</li>
              <li><strong>Refresh Tokens:</strong> For enhanced security, we implement refresh tokens. When the access token expires, the frontend can use the refresh token to obtain a new access token without requiring the user to log in again.</li>
              <li><strong>Token Revocation:</strong> If a user logs out or if their account is disabled, the token is immediately invalidated. We maintain a blacklist of revoked tokens in Redis for fast lookup.</li>
            </ul>
          </div>
          
          <div className="module-detail">
            <h4>2.3 Admin Control Panel & Content Management System (CMS)</h4>
            <p>The admin panel is designed for non-technical users. You don't need to know how to code to manage your products, fabrics, designs, or website content. Everything is controlled through an intuitive web interface.</p>
            
            <h5>2.3.1 Product Management Interface</h5>
            <p>Admins can perform full CRUD (Create, Read, Update, Delete) operations on products:</p>
            <ul>
              <li><strong>Add Product:</strong> Admins can add new products by filling out a form that includes product name, description, category, featured image, and status (active/inactive). The form includes real-time validation to prevent errors.</li>
              <li><strong>Edit Product:</strong> Existing products can be edited at any time. Changes are saved immediately and reflected on the frontend within seconds (thanks to our stateless architecture).</li>
              <li><strong>Soft Delete:</strong> When a product is "deleted," it's not actually removed from the database. Instead, its status is set to "inactive." This allows admins to restore products if needed and prevents accidental data loss.</li>
              <li><strong>Bulk Operations:</strong> Admins can select multiple products and perform bulk actions like activating, deactivating, or assigning to categories.</li>
              <li><strong>Product-Fabric Assignment:</strong> Admins can assign multiple fabrics to a product. This is done through a drag-and-drop interface where fabrics can be reordered to control their display sequence.</li>
              <li><strong>Product-Design Assignment:</strong> Similarly, admins can assign predefined designs to products. This allows different products to have different design libraries.</li>
            </ul>
            
            <h5>2.3.2 Fabric Management System</h5>
            <p>Fabric management is critical for the mockup engine. Admins can:</p>
            <ul>
              <li><strong>Upload Fabric Images:</strong> Admins upload fabric texture images through a secure file upload interface. Images are automatically optimized (compressed, resized) to ensure fast loading times.</li>
              <li><strong>Fabric Metadata:</strong> Each fabric has associated metadata: name, description, product associations, and display order. This metadata is stored in the database and used by the frontend to display fabric options.</li>
              <li><strong>Fabric Preview:</strong> The admin panel includes a preview feature that shows how the fabric looks when applied to a product. This helps admins ensure quality before making fabrics available to users.</li>
              <li><strong>Fabric Replacement:</strong> Admins can replace fabric images at any time. When a replacement is uploaded, the old image is archived (not deleted) to maintain a history of changes.</li>
            </ul>
            
            <h5>2.3.3 Design Library Management</h5>
            <p>The design library allows admins to manage predefined designs that users can select:</p>
            <ul>
              <li><strong>Design Upload:</strong> Admins can upload design images (logos, patterns, graphics) that will be available for users to select. Designs are categorized for easy management.</li>
              <li><strong>Design Categorization:</strong> Designs can be organized into categories (e.g., "Logos," "Patterns," "Text Styles"). This makes it easier for users to find relevant designs.</li>
              <li><strong>Design Enable/Disable:</strong> Admins can enable or disable designs without deleting them. Disabled designs are hidden from users but remain in the database for future use.</li>
              <li><strong>Design Preview:</strong> Similar to fabrics, admins can preview how designs look when applied to different fabrics and products.</li>
            </ul>
            
            <h5>2.3.4 Dynamic Content Management</h5>
            <p>The CMS allows admins to edit website content without touching code:</p>
            <ul>
              <li><strong>Landing Page Editor:</strong> Admins can edit text, images, and banners on the landing page through a WYSIWYG (What You See Is What You Get) editor. Changes are saved and immediately reflected on the live site.</li>
              <li><strong>Page Management:</strong> Admins can create, edit, and manage static pages (About Us, Contact, Terms of Service, Privacy Policy, etc.). Each page supports rich text formatting, images, and links.</li>
              <li><strong>Media Library:</strong> All uploaded images, banners, and media files are stored in a centralized media library. Admins can browse, search, and reuse media across different pages.</li>
              <li><strong>Banner Management:</strong> Admins can upload and manage promotional banners. Banners can be scheduled to appear and disappear at specific dates and times.</li>
            </ul>
            
            <h5>2.3.5 Admin Dashboard & Analytics</h5>
            <p>The admin dashboard provides a comprehensive overview of the platform:</p>
            <ul>
              <li><strong>Key Metrics:</strong> The dashboard displays total products, total fabrics, total designs, total mockups created, total users, and recent activity.</li>
              <li><strong>Recent Mockups:</strong> Admins can see a feed of recently created mockups, including user information, product, fabric, and design used.</li>
              <li><strong>User Management:</strong> Admins can view user lists, see user activity, and disable/enable user accounts if needed.</li>
              <li><strong>System Health:</strong> The dashboard shows system health metrics like API response times, server load, and error rates. This helps admins identify issues before they impact users.</li>
            </ul>
          </div>
          
          <div className="module-detail">
            <h4>2.4 Frontend Architecture & User Interface</h4>
            <p>The frontend is built using React.js, a modern JavaScript library that enables building fast, interactive user interfaces. We've chosen React because of its component-based architecture, which makes the codebase maintainable and allows for code reuse.</p>
            
            <h5>2.4.1 Landing Page Design & Optimization</h5>
            <p>The landing page is the first impression users have of your platform. We've designed it to be fast, beautiful, and conversion-focused:</p>
            <ul>
              <li><strong>Hero Section:</strong> A prominent hero section with a compelling headline, value proposition, and clear call-to-action buttons guides users toward product exploration.</li>
              <li><strong>Lazy Loading:</strong> Images below the fold are loaded lazily (only when the user scrolls to them). This reduces initial page load time significantly.</li>
              <li><strong>Image Optimization:</strong> All images are served in modern formats (WebP) with fallbacks for older browsers. Images are also compressed to reduce file size without noticeable quality loss.</li>
              <li><strong>Minimal JavaScript:</strong> We keep JavaScript to a minimum on the landing page. Only essential scripts are loaded initially, with additional functionality loaded as needed.</li>
              <li><strong>SEO Optimization:</strong> The landing page is built with SEO in mind. Proper heading hierarchy, meta tags, and semantic HTML ensure search engines can index your content effectively.</li>
            </ul>
            
            <h5>2.4.2 Category & Product Listing Pages</h5>
            <p>Product discovery is made easy through intuitive category and product listing pages:</p>
            <ul>
              <li><strong>Category Grid:</strong> Categories are displayed in a responsive grid layout. On desktop, users see multiple categories at once. On mobile, the grid adapts to show fewer items per row for better touch interaction.</li>
              <li><strong>Product Cards:</strong> Each product is displayed as a card with an image, name, and short description. Cards are designed to be visually appealing and clickable, encouraging exploration.</li>
              <li><strong>Infinite Scroll vs. Pagination:</strong> We implement pagination by default (better for SEO), but can switch to infinite scroll if preferred. Pagination loads products in batches, reducing initial load time.</li>
              <li><strong>Loading States:</strong> While products are being fetched from the API, we show skeleton loaders (placeholder content) that match the final layout. This prevents layout shifts and provides visual feedback.</li>
            </ul>
            
            <h5>2.4.3 Product Detail & Customization Page</h5>
            <p>This is where the magic happens—the product customization page where users create mockups:</p>
            <ul>
              <li><strong>Product Information Display:</strong> Product details (name, description, features) are displayed prominently at the top of the page.</li>
              <li><strong>Fabric Selection Interface:</strong> Available fabrics are displayed as thumbnails in a horizontal scrollable list. Users can click on a fabric to see it applied to the product in real-time.</li>
              <li><strong>Design Selection Interface:</strong> Predefined designs are displayed in a grid. Users can browse through designs and click to apply them. Designs are categorized for easy navigation.</li>
              <li><strong>Custom Upload Interface:</strong> A prominent "Upload Your Design" button opens a file picker. After selection, the file is validated and uploaded. Progress is shown via a progress bar.</li>
              <li><strong>Live Preview Canvas:</strong> The mockup preview is displayed in a large canvas area. As users make selections, the preview updates instantly without page reloads.</li>
              <li><strong>Save Functionality:</strong> Once users are satisfied with their mockup, they can save it. If not logged in, they're prompted to log in. Saved mockups are stored in their account for future access.</li>
            </ul>
            
            <h5>2.4.4 Responsive Design & Mobile Optimization</h5>
            <p>Mobile users account for a significant portion of web traffic. Our design is fully responsive:</p>
            <ul>
              <li><strong>Breakpoint Strategy:</strong> We use a mobile-first approach. The design is optimized for mobile screens first, then enhanced for tablets and desktops using CSS media queries.</li>
              <li><strong>Touch Optimization:</strong> Buttons and interactive elements are sized appropriately for touch (minimum 44x44 pixels). Swipe gestures are supported where appropriate.</li>
              <li><strong>Performance on Mobile:</strong> We optimize for slower mobile networks by reducing image sizes, minimizing JavaScript, and using efficient CSS. The site loads quickly even on 3G connections.</li>
              <li><strong>Mobile Navigation:</strong> A hamburger menu provides easy navigation on mobile devices. The menu slides in from the side and can be dismissed by tapping outside or clicking a close button.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "III. BACKEND ARCHITECTURE & API DOCUMENTATION",
      content: (
        <div className="section-content">
          <h4>3.1 Spring Boot Architecture Overview</h4>
          <p>Java Spring Boot is the backbone of our backend infrastructure. We've chosen Spring Boot because it provides a production-ready framework with built-in security, dependency injection, and a vast ecosystem of libraries. Our backend follows a clean, layered architecture that separates concerns and makes the codebase maintainable and testable.</p>
          
          <h5>3.1.1 Controller Layer</h5>
          <p>The Controller layer handles HTTP requests and responses. Controllers are responsible for:</p>
          <ul>
            <li><strong>Request Mapping:</strong> Controllers define API endpoints using Spring's @RequestMapping annotations. Each endpoint is mapped to a specific URL pattern (e.g., /api/v1/products).</li>
            <li><strong>Request Validation:</strong> Incoming requests are validated using Bean Validation (JSR-303). Invalid requests are rejected with appropriate error messages before reaching the business logic.</li>
            <li><strong>Response Formatting:</strong> Controllers format responses as JSON. We use a consistent response structure that includes status code, message, and data payload.</li>
            <li><strong>Exception Handling:</strong> Controllers catch exceptions thrown by service layers and convert them into appropriate HTTP responses. We use @ControllerAdvice for centralized exception handling.</li>
          </ul>
          
          <h5>3.1.2 Service Layer</h5>
          <p>The Service layer contains business logic. Services are where the real work happens:</p>
          <ul>
            <li><strong>Business Rules:</strong> All business rules and validations are implemented in service classes. For example, the ProductService validates that a product has at least one fabric before it can be activated.</li>
            <li><strong>Transaction Management:</strong> Services manage database transactions. We use Spring's @Transactional annotation to ensure data consistency. If any operation in a transaction fails, all changes are rolled back.</li>
            <li><strong>External API Integration:</strong> Services handle integration with external APIs (Google OAuth, WhatsApp API, email services). These integrations are abstracted so they can be easily replaced or updated.</li>
            <li><strong>Data Transformation:</strong> Services convert between Entity objects (database models) and DTOs (Data Transfer Objects). This separation ensures that database structure changes don't affect API contracts.</li>
          </ul>
          
          <h5>3.1.3 Repository Layer</h5>
          <p>The Repository layer handles database operations. We use Spring Data JPA, which provides a powerful abstraction over database access:</p>
          <ul>
            <li><strong>CRUD Operations:</strong> Repositories provide standard CRUD operations (Create, Read, Update, Delete) without writing SQL. Spring Data JPA generates queries automatically based on method names.</li>
            <li><strong>Custom Queries:</strong> For complex queries, we write custom methods using @Query annotations. These queries are optimized for performance and use parameter binding to prevent SQL injection.</li>
            <li><strong>Pagination & Sorting:</strong> Repositories support pagination and sorting out of the box. This is essential for product listing pages where we need to load products in batches.</li>
            <li><strong>Connection Pooling:</strong> We use HikariCP, a high-performance connection pool, to manage database connections efficiently. This prevents connection exhaustion under high load.</li>
          </ul>
          
          <h5>3.1.4 Entity & DTO Models</h5>
          <p>Entities represent database tables, while DTOs represent data structures used in API requests and responses:</p>
          <ul>
            <li><strong>Entity Classes:</strong> Entity classes are annotated with JPA annotations (@Entity, @Table, @Column) that map Java objects to database tables. We use Lombok to reduce boilerplate code.</li>
            <li><strong>DTO Classes:</strong> DTOs are simple data containers that don't contain business logic. They're used to transfer data between layers and across the network. DTOs can be different from entities to hide internal implementation details.</li>
            <li><strong>Mapping:</strong> We use MapStruct, a code generation library, to automatically convert between entities and DTOs. This ensures type safety and reduces manual mapping code.</li>
          </ul>
          
          <h4>3.2 RESTful API Design</h4>
          <p>Our APIs follow REST (Representational State Transfer) principles for consistency and predictability:</p>
          
          <h5>3.2.1 API Versioning</h5>
          <p>All APIs are versioned (e.g., /api/v1/products). This allows us to make breaking changes in future versions without affecting existing clients. When we release v2, v1 remains available for backward compatibility.</p>
          
          <h5>3.2.2 HTTP Methods</h5>
          <p>We use standard HTTP methods appropriately:</p>
          <ul>
            <li><strong>GET:</strong> Used for retrieving data (e.g., GET /api/v1/products returns a list of products).</li>
            <li><strong>POST:</strong> Used for creating new resources (e.g., POST /api/v1/products creates a new product).</li>
            <li><strong>PUT:</strong> Used for updating entire resources (e.g., PUT /api/v1/products/{"{id}"} updates a product).</li>
            <li><strong>PATCH:</strong> Used for partial updates (e.g., PATCH /api/v1/products/{"{id}"} updates only specific fields).</li>
            <li><strong>DELETE:</strong> Used for deleting resources (e.g., DELETE /api/v1/products/{"{id}"} deletes a product).</li>
          </ul>
          
          <h5>3.2.3 Response Codes</h5>
          <p>We use standard HTTP status codes to indicate success or failure:</p>
          <ul>
            <li><strong>200 OK:</strong> Successful GET, PUT, or PATCH request.</li>
            <li><strong>201 Created:</strong> Successful POST request that created a new resource.</li>
            <li><strong>204 No Content:</strong> Successful DELETE request.</li>
            <li><strong>400 Bad Request:</strong> Invalid request data (validation errors).</li>
            <li><strong>401 Unauthorized:</strong> Authentication required or invalid token.</li>
            <li><strong>403 Forbidden:</strong> Authenticated but not authorized (e.g., regular user trying to access admin endpoints).</li>
            <li><strong>404 Not Found:</strong> Resource doesn't exist.</li>
            <li><strong>500 Internal Server Error:</strong> Unexpected server error.</li>
          </ul>
          
          <h4>3.3 Database Schema Design</h4>
          <p>We use a relational database (PostgreSQL or MySQL) to store all data. The schema is designed for performance, data integrity, and scalability:</p>
          
          <table className="tech-table">
            <thead>
              <tr>
                <th>Table Name</th>
                <th>Purpose</th>
                <th>Key Fields</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>users</strong></td>
                <td>Stores user account information</td>
                <td>id, name, email, login_type, status, created_at</td>
              </tr>
              <tr>
                <td><strong>products</strong></td>
                <td>Stores product catalog</td>
                <td>id, name, description, category_id, status, created_at</td>
              </tr>
              <tr>
                <td><strong>categories</strong></td>
                <td>Organizes products into categories</td>
                <td>id, name, status, created_at</td>
              </tr>
              <tr>
                <td><strong>fabrics</strong></td>
                <td>Stores fabric options for products</td>
                <td>id, name, image_url, product_id, created_at</td>
              </tr>
              <tr>
                <td><strong>designs</strong></td>
                <td>Stores predefined designs</td>
                <td>id, name, image_url, is_custom, created_at</td>
              </tr>
              <tr>
                <td><strong>custom_designs</strong></td>
                <td>Stores user-uploaded designs</td>
                <td>id, user_id, image_url, created_at</td>
              </tr>
              <tr>
                <td><strong>mockups</strong></td>
                <td>Stores saved mockup configurations</td>
                <td>id, user_id, fabric_id, design_id, preview_url, created_at</td>
              </tr>
            </tbody>
          </table>
          
          <h5>3.3.1 Relationships & Foreign Keys</h5>
          <p>Tables are related through foreign keys to maintain referential integrity:</p>
          <ul>
            <li><strong>products.category_id</strong> → categories.id (Many products belong to one category)</li>
            <li><strong>fabrics.product_id</strong> → products.id (Many fabrics belong to one product)</li>
            <li><strong>mockups.user_id</strong> → users.id (Many mockups belong to one user)</li>
            <li><strong>mockups.fabric_id</strong> → fabrics.id (Each mockup uses one fabric)</li>
            <li><strong>mockups.design_id</strong> → designs.id or custom_designs.id (Each mockup uses one design)</li>
          </ul>
          
          <h5>3.3.2 Indexing Strategy</h5>
          <p>We create indexes on frequently queried columns to ensure fast lookups:</p>
          <ul>
            <li><strong>Primary Keys:</strong> All tables have an auto-incrementing primary key (id) that's automatically indexed.</li>
            <li><strong>Foreign Keys:</strong> Foreign key columns are indexed to speed up JOIN operations.</li>
            <li><strong>Search Columns:</strong> Columns used in WHERE clauses (e.g., products.status, users.email) are indexed.</li>
            <li><strong>Composite Indexes:</strong> For queries that filter on multiple columns, we create composite indexes (e.g., products.category_id + products.status).</li>
          </ul>
        </div>
      )
    },
    {
      title: "IV. COMPREHENSIVE PRICING BREAKDOWN & JUSTIFICATION",
      content: (
        <div className="section-content">
          <p className="price-intro">Below is a detailed, transparent breakdown of the investment required for this <strong>Custom E-Commerce Platform</strong>. Every rupee is allocated to specific, high-value engineering work. We believe in complete transparency, so you understand exactly what you're paying for and why.</p>
          
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Module / Feature</th>
                <th>Price (INR)</th>
                <th>Detailed Justification & Technical Reasoning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Custom Mockup Preview Engine</strong><br/><small>The heart of the platform</small></td>
                <td>₹6,000</td>
                <td>
                  <p><strong>Why ₹6,000?</strong> This is the most complex module in the entire platform. It requires:</p>
                  <ul>
                    <li><strong>Custom Canvas API Development:</strong> Building a real-time rendering engine using HTML5 Canvas API. This involves writing custom algorithms for coordinate-based layering, transparency blending, and image scaling. Unlike simple image overlay plugins, this engine handles complex scenarios like design rotation, multiple design layers, and dynamic fabric texture mapping.</li>
                    <li><strong>Mathematical Algorithms:</strong> Developing algorithms for calculating anchor points, maintaining aspect ratios during scaling, and handling different image formats (PNG with transparency, JPG without). This requires deep understanding of computer graphics principles.</li>
                    <li><strong>Performance Optimization:</strong> Ensuring the preview updates in real-time (under 100ms) requires optimization techniques like image preloading, canvas context caching, and Web Worker utilization to prevent UI blocking.</li>
                    <li><strong>Cross-Browser Compatibility:</strong> Testing and fixing rendering issues across different browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, tablet, mobile) requires significant time investment.</li>
                    <li><strong>Edge Case Handling:</strong> Handling scenarios like very large images, corrupted files, network failures during upload, and browser memory limitations. Each edge case requires custom code and testing.</li>
                  </ul>
                  <p><strong>What You Get:</strong> A production-ready mockup engine that works flawlessly across all devices and browsers, with zero perceptible lag during user interactions. This is not a plugin—it's custom-built code that you own completely.</p>
                </td>
              </tr>
              <tr>
                <td><strong>Scalable Java Spring Boot Backend</strong><br/><small>Enterprise-grade server infrastructure</small></td>
                <td>₹4,500</td>
                <td>
                  <p><strong>Why ₹4,500?</strong> Building a robust, scalable backend requires extensive engineering:</p>
                  <ul>
                    <li><strong>Layered Architecture Development:</strong> Implementing clean separation between Controller, Service, and Repository layers. This involves writing hundreds of lines of code for each layer, ensuring proper dependency injection, and maintaining consistency across the codebase.</li>
                    <li><strong>RESTful API Design:</strong> Designing and implementing 20+ API endpoints following REST principles. Each endpoint requires request validation, error handling, response formatting, and documentation.</li>
                    <li><strong>Database Integration:</strong> Setting up JPA/Hibernate for database access, writing entity classes, repository interfaces, and custom queries. This includes database schema design, migration scripts, and relationship mapping.</li>
                    <li><strong>Security Implementation:</strong> Implementing JWT-based authentication, password hashing, input sanitization, SQL injection prevention, and CSRF protection. Security is not optional—it requires careful implementation and testing.</li>
                    <li><strong>File Upload & Storage:</strong> Building secure file upload endpoints with validation, virus scanning, secure storage outside web root, and CDN integration for fast delivery. This includes handling large files, concurrent uploads, and storage cleanup.</li>
                    <li><strong>Error Handling & Logging:</strong> Implementing centralized exception handling, structured logging, and error tracking. This ensures issues are caught and logged for debugging without exposing sensitive information to users.</li>
                    <li><strong>Testing:</strong> Writing unit tests, integration tests, and API tests to ensure reliability. Testing is time-consuming but essential for a production system.</li>
                  </ul>
                  <p><strong>What You Get:</strong> A battle-tested backend that can handle thousands of concurrent users, with proper error handling, logging, and security measures. This backend is ready for horizontal scaling (load balancing) from day one.</p>
                </td>
              </tr>
              <tr>
                <td><strong>Admin Control Panel & CMS</strong><br/><small>Full content management without coding</small></td>
                <td>₹3,500</td>
                <td>
                  <p><strong>Why ₹3,500?</strong> Building an intuitive admin interface requires both frontend and backend work:</p>
                  <ul>
                    <li><strong>Admin Dashboard Development:</strong> Creating a comprehensive dashboard with metrics, charts, and activity feeds. This involves data aggregation queries, real-time updates, and responsive design.</li>
                    <li><strong>CRUD Interfaces:</strong> Building full Create, Read, Update, Delete interfaces for products, fabrics, designs, and content. Each interface requires forms with validation, file uploads, image previews, and confirmation dialogs.</li>
                    <li><strong>WYSIWYG Editor Integration:</strong> Integrating a rich text editor (like TinyMCE or CKEditor) for content management. This includes customizing the editor toolbar, handling image uploads within the editor, and ensuring saved content renders correctly.</li>
                    <li><strong>Media Library:</strong> Building a media library with upload, browse, search, and reuse functionality. This includes image optimization, thumbnail generation, and organizing media into folders.</li>
                    <li><strong>Role-Based Access Control:</strong> Implementing admin authentication separate from user authentication, with role-based permissions. This ensures only authorized admins can access sensitive operations.</li>
                    <li><strong>Bulk Operations:</strong> Implementing bulk actions like activating/deactivating multiple products, assigning fabrics to multiple products, and batch image uploads. This saves admins significant time.</li>
                    <li><strong>Audit Trail:</strong> Logging all admin actions (who changed what and when) for accountability and debugging purposes.</li>
                  </ul>
                  <p><strong>What You Get:</strong> A complete admin panel that allows you to manage every aspect of your platform without writing a single line of code. You can add products, upload fabrics, edit content, and monitor activity—all through an intuitive web interface.</p>
                </td>
              </tr>
              <tr>
                <td><strong>UI/UX Frontend (Google-Like Minimalist Design)</strong><br/><small>Beautiful, fast, responsive interface</small></td>
                <td>₹3,000</td>
                <td>
                  <p><strong>Why ₹3,000?</strong> Creating a polished, professional frontend requires attention to detail:</p>
                  <ul>
                    <li><strong>React Component Development:</strong> Building 15+ reusable React components (Header, Footer, ProductCard, FabricSelector, DesignGrid, etc.). Each component requires proper state management, props validation, and styling.</li>
                    <li><strong>Responsive Design Implementation:</strong> Ensuring the site looks perfect on desktop (1920px+), tablet (768px-1024px), and mobile (320px-767px). This requires writing CSS media queries, testing on multiple devices, and fixing layout issues.</li>
                    <li><strong>Performance Optimization:</strong> Implementing lazy loading for images, code splitting for JavaScript, and minimizing re-renders. This involves using React.memo, useMemo, and useCallback hooks appropriately.</li>
                    <li><strong>User Experience Polish:</strong> Adding loading states, error messages, success notifications, and smooth animations. These small details significantly improve user experience but require time to implement correctly.</li>
                    <li><strong>Accessibility (a11y):</strong> Ensuring the site is accessible to users with disabilities. This includes proper ARIA labels, keyboard navigation support, and screen reader compatibility.</li>
                    <li><strong>Cross-Browser Testing:</strong> Testing and fixing issues across Chrome, Firefox, Safari, and Edge. Different browsers render CSS and JavaScript slightly differently, requiring adjustments.</li>
                    <li><strong>SEO Implementation:</strong> Implementing proper meta tags, Open Graph tags, structured data (JSON-LD), and sitemap generation. This ensures search engines can index your content effectively.</li>
                  </ul>
                  <p><strong>What You Get:</strong> A beautiful, fast, and fully responsive website that works flawlessly on all devices and browsers. The design follows Google's minimalist aesthetic—clean, professional, and focused on user experience.</p>
                </td>
              </tr>
              <tr>
                <td><strong>Authentication System (Google OAuth + Email OTP)</strong><br/><small>Secure, user-friendly login</small></td>
                <td>₹2,000</td>
                <td>
                  <p><strong>Why ₹2,000?</strong> Implementing secure authentication requires careful engineering:</p>
                  <ul>
                    <li><strong>Google OAuth 2.0 Integration:</strong> Setting up OAuth flow, handling redirects, token exchange, and user information retrieval. This includes registering the application with Google Cloud Console, configuring OAuth credentials, and implementing the authorization code flow.</li>
                    <li><strong>JWT Token Implementation:</strong> Generating, signing, and validating JWT tokens. This includes setting token expiration, implementing refresh tokens, and handling token revocation.</li>
                    <li><strong>Email OTP System:</strong> Building an OTP generation system with cryptographic security, email delivery via SMTP, OTP validation, and rate limiting to prevent abuse. This includes integrating with email service providers (SendGrid, AWS SES, etc.).</li>
                    <li><strong>Session Management:</strong> Implementing stateless session management using JWT, handling token refresh, and managing logout functionality.</li>
                    <li><strong>Security Measures:</strong> Implementing password hashing (bcrypt), CSRF protection, rate limiting, and input sanitization. Security vulnerabilities can be catastrophic, so this requires careful implementation and testing.</li>
                    <li><strong>Error Handling:</strong> Handling edge cases like expired tokens, invalid OTPs, network failures during OAuth, and email delivery failures. Each scenario requires user-friendly error messages.</li>
                  </ul>
                  <p><strong>What You Get:</strong> A secure, user-friendly authentication system that supports both Google Sign-In (one-click login) and Email OTP (for users who prefer traditional methods). The system is built with security best practices and handles all edge cases gracefully.</p>
                </td>
              </tr>
              <tr>
                <td><strong>WhatsApp API Integration & Notifications</strong><br/><small>Automated business communication</small></td>
                <td>₹1,000</td>
                <td>
                  <p><strong>Why ₹1,000?</strong> Integrating WhatsApp requires API setup and event handling:</p>
                  <ul>
                    <li><strong>WhatsApp Cloud API Setup:</strong> Registering with WhatsApp Business API, obtaining API credentials, and configuring webhooks for message delivery status.</li>
                    <li><strong>Event-Based Triggers:</strong> Implementing triggers for user login, mockup creation, and admin alerts. This involves listening to application events and formatting messages appropriately.</li>
                    <li><strong>Message Templates:</strong> Creating and managing message templates (WhatsApp requires pre-approved templates for business messages). This includes template approval process and template management.</li>
                    <li><strong>Retry Logic:</strong> Implementing retry mechanisms for failed message deliveries. If WhatsApp API is temporarily unavailable, messages are queued and retried automatically.</li>
                    <li><strong>Logging & Monitoring:</strong> Logging all WhatsApp API calls, delivery statuses, and failures. This helps debug issues and monitor message delivery rates.</li>
                  </ul>
                  <p><strong>What You Get:</strong> Automated WhatsApp notifications that keep you informed of important events (user logins, mockup creations) and allow you to engage with customers directly through WhatsApp. This integration saves time and improves customer communication.</p>
                </td>
              </tr>
              <tr>
                <td><strong>Load Balancing & Stability Configuration</strong><br/><small>Crash-proof, scalable infrastructure</small></td>
                <td>₹1,000</td>
                <td>
                  <p><strong>Why ₹1,000?</strong> Ensuring your platform can handle traffic spikes requires infrastructure setup:</p>
                  <ul>
                    <li><strong>Stateless Architecture Design:</strong> Designing the entire backend to be stateless (no server-side sessions). This allows multiple server instances to run simultaneously without conflicts.</li>
                    <li><strong>Load Balancer Configuration:</strong> Setting up a load balancer (like Nginx or AWS ELB) to distribute traffic across multiple backend instances. This includes health checks, failover configuration, and SSL certificate setup.</li>
                    <li><strong>Horizontal Scaling Setup:</strong> Configuring the infrastructure to support horizontal scaling (adding more servers as traffic increases). This includes auto-scaling policies and instance management.</li>
                    <li><strong>Centralized Exception Handling:</strong> Implementing a global exception handler that catches all errors, logs them appropriately, and returns user-friendly error messages. This prevents crashes and improves user experience.</li>
                    <li><strong>Production Logging:</strong> Setting up structured logging (using tools like Logback or Log4j) with log aggregation. This allows monitoring and debugging in production environments.</li>
                    <li><strong>Health Check Endpoints:</strong> Creating health check endpoints that monitoring tools can ping to ensure the system is running. This enables automatic failover if a server becomes unresponsive.</li>
                    <li><strong>Database Connection Pooling:</strong> Configuring connection pools to handle high concurrent database connections efficiently. This prevents database connection exhaustion under load.</li>
                  </ul>
                  <p><strong>What You Get:</strong> A platform that is ready for high traffic from day one. The architecture is designed to never crash—if one server fails, traffic automatically routes to other servers. <strong>"Hamara code kabhi fatega nahi, ye hamari guarantee hai."</strong> (Our code will never crash, that's our guarantee.)</p>
                </td>
              </tr>
              <tr className="total-row">
                <td><strong>TOTAL PROJECT INVESTMENT</strong></td>
                <td colSpan="2"><strong>₹21,000</strong></td>
              </tr>
            </tbody>
          </table>
          
          <div className="justification-box">
            <h4>Overall Investment Justification</h4>
            <p>At ₹21,000, you are investing in an <strong>Enterprise-Grade Asset</strong>, not just a website. The pricing is balanced intentionally, with higher costs allocated to complex, high-effort modules and lower costs for simpler components.</p>
            
            <h5>High-Effort Modules (Higher Cost Allocation)</h5>
            <p>These modules require significant engineering effort and justify higher pricing:</p>
            <ul>
              <li><strong>Custom Mockup Engine (₹6,000):</strong> This is the most complex module, requiring custom mathematical algorithms, real-time rendering, and cross-browser compatibility. It involves complex logic, performance optimization, and extensive testing.</li>
              <li><strong>CMS System (₹3,500):</strong> Building a user-friendly admin interface requires both frontend and backend work. It involves file handling, media management, WYSIWYG editor integration, and role-based access control.</li>
              <li><strong>WhatsApp Integration (₹1,000):</strong> Third-party API integration requires careful implementation, event-based triggers, message template management, and retry logic for reliability.</li>
            </ul>
            <p>These modules involve: <strong>Complex logic, file handling, third-party APIs, and security considerations</strong>—all requiring significant development time and expertise.</p>
            
            <h5>Lower-Effort Modules (Lower Cost Allocation)</h5>
            <p>These components, while important, require less development effort:</p>
            <ul>
              <li><strong>Static Pages:</strong> Landing page, about page, contact page—these are relatively straightforward to build.</li>
              <li><strong>Basic Product Pages:</strong> Product listing and detail pages follow standard e-commerce patterns.</li>
              <li><strong>Category Listing:</strong> Simple data display with pagination.</li>
            </ul>
            <p>The pricing is balanced to reflect the actual effort required for each component, ensuring fair value for both parties.</p>
            
            <h5>Market Comparison & Value Proposition</h5>
            <ul>
              <li><strong>Market Comparison:</strong> Custom Spring Boot projects typically start at ₹1,00,000+ for similar complexity. We're offering this at ₹21,000 because we've optimized our development process and are focusing on your specific niche.</li>
              <li><strong>Template-Based Alternatives:</strong> While you could use WordPress + WooCommerce or Shopify for ₹5,000-10,000, these platforms rely on plugins that slow down your site, limit customization, and create maintenance headaches. Our custom solution eliminates all these issues.</li>
              <li><strong>Long-Term Value:</strong> This platform is built to last. You won't need to pay developers for "maintenance" because the core is built correctly from the start. The codebase is clean, documented, and follows best practices, making it easy to extend in the future.</li>
              <li><strong>Ownership & Control:</strong> You own 100% of the source code, database, and all assets. There's no vendor lock-in, no monthly subscription fees (beyond hosting), and no dependency on third-party services that could disappear.</li>
              <li><strong>Performance Guarantee:</strong> We guarantee that your platform will handle traffic spikes without crashing. The load-balancing architecture ensures 99.9% uptime, and our exception handling ensures errors are caught before they reach users.</li>
            </ul>
            <p><strong>This is not just a website—it's a business asset that will grow with you.</strong></p>
          </div>
        </div>
      )
    },
    {
      title: "V. PROJECT TIMELINE & DELIVERY PLAN",
      content: (
        <div className="section-content">
          <h4>5.1 Development Phases Overview</h4>
          <p>We follow a phase-wise delivery model to ensure clear milestones, regular visibility, and on-time delivery. Each phase is independently testable and reviewable, allowing you to provide feedback early and often.</p>
          
          <div className="checkpoint">
            <h4>Phase 1: Requirement Finalization & System Design (3-4 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Final confirmation of all modules and features</li>
              <li>Detailed discussion of mockup engine logic and user flows</li>
              <li>Database schema finalization with all tables, relationships, and indexes</li>
              <li>API structure design with endpoint specifications, request/response formats, and error codes</li>
              <li>UI/UX flow planning with wireframes and user journey maps</li>
              <li>Technology stack confirmation and dependency management</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Complete technical blueprint document</li>
              <li>Database ER diagram</li>
              <li>API documentation (Swagger/OpenAPI specification)</li>
              <li>UI wireframes for all major pages</li>
              <li>Final scope lock document (no changes after this phase without additional cost)</li>
            </ul>
          </div>
          
          <div className="checkpoint">
            <h4>Phase 2: UI & Frontend Development (6-7 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Landing page design and development with hero section, value proposition, and CTAs</li>
              <li>Category and product listing pages with grid layouts, pagination, and loading states</li>
              <li>Product detail page with information display and customization interface</li>
              <li>Mockup customization page with fabric selector, design grid, upload interface, and live preview canvas</li>
              <li>User authentication pages (login, OTP entry) with Google OAuth integration</li>
              <li>Admin panel interface with dashboard, product management, fabric management, design management, and CMS</li>
              <li>Responsive design implementation for mobile, tablet, and desktop</li>
              <li>Performance optimization (lazy loading, code splitting, image optimization)</li>
              <li>Aesthetic polishing with animations, transitions, and micro-interactions</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Fully functional frontend with all pages and components</li>
              <li>Responsive layouts tested on multiple devices and browsers</li>
              <li>Performance-optimized UI with fast load times</li>
              <li>Accessible design with proper ARIA labels and keyboard navigation</li>
            </ul>
          </div>
          
          <div className="checkpoint">
            <h4>Phase 3: Backend Development (Java Spring Boot) (7-8 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Setting up Spring Boot project structure with proper package organization</li>
              <li>Database setup with schema creation, migrations, and seed data</li>
              <li>Entity and DTO class development with proper mapping</li>
              <li>Repository layer implementation with CRUD operations and custom queries</li>
              <li>Service layer development with business logic and transaction management</li>
              <li>Controller layer development with RESTful API endpoints</li>
              <li>Authentication API development (Google OAuth, Email OTP, JWT token generation)</li>
              <li>Product, category, fabric, and design management APIs</li>
              <li>File upload API with validation, security, and storage</li>
              <li>Mockup save/retrieve APIs</li>
              <li>Admin APIs for product management, fabric management, design management, and CMS</li>
              <li>Error handling and logging implementation</li>
              <li>Security implementation (JWT, input validation, CSRF protection)</li>
              <li>API documentation (Swagger UI)</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Secure backend APIs with all endpoints functional</li>
              <li>Admin panel backend integration</li>
              <li>Database integration with all tables and relationships</li>
              <li>Comprehensive API documentation</li>
              <li>Unit and integration tests</li>
            </ul>
          </div>
          
          <div className="checkpoint">
            <h4>Phase 4: Mockup Engine Development (5-6 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Canvas API integration for rendering</li>
              <li>Fabric selection and texture replacement logic</li>
              <li>Design layering algorithms with coordinate-based positioning</li>
              <li>Transparency handling for PNG images</li>
              <li>Scaling algorithms to maintain aspect ratios</li>
              <li>Custom design upload handling with validation and processing</li>
              <li>Live preview rendering with real-time updates</li>
              <li>Image preloading and caching for performance</li>
              <li>Cross-browser compatibility testing and fixes</li>
              <li>Edge case handling (large images, network failures, browser limitations)</li>
              <li>Mobile optimization for touch interactions</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Fully working mockup system with real-time preview</li>
              <li>Seamless fabric and design switching</li>
              <li>Custom design upload functionality</li>
              <li>Optimized performance with sub-100ms update times</li>
            </ul>
          </div>
          
          <div className="checkpoint">
            <h4>Phase 5: WhatsApp Integration & Notifications (2-3 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>WhatsApp Business API registration and setup</li>
              <li>API credential configuration</li>
              <li>Event-based trigger implementation (login, mockup creation, admin alerts)</li>
              <li>Message template creation and approval</li>
              <li>Message formatting and delivery logic</li>
              <li>Retry mechanism for failed deliveries</li>
              <li>Logging and monitoring setup</li>
              <li>Testing with real WhatsApp numbers</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Working WhatsApp notifications for all configured events</li>
              <li>Reliable message delivery with retry logic</li>
              <li>Admin dashboard integration for notification logs</li>
            </ul>
          </div>
          
          <div className="checkpoint">
            <h4>Phase 6: Testing, Optimization & Load Balancing (3-4 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Functional testing of all features and user flows</li>
              <li>Performance testing with load simulation (100+ concurrent users)</li>
              <li>Security validation (penetration testing, vulnerability scanning)</li>
              <li>Cross-browser and cross-device testing</li>
              <li>API endpoint testing with Postman/Newman</li>
              <li>Database query optimization and indexing review</li>
              <li>Frontend performance optimization (bundle size, image compression, caching)</li>
              <li>Load balancer configuration (Nginx or cloud load balancer)</li>
              <li>Horizontal scaling setup (multiple backend instances)</li>
              <li>Health check endpoint implementation</li>
              <li>Monitoring and alerting setup</li>
              <li>Error tracking setup (Sentry or similar)</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Stable and optimized system ready for production</li>
              <li>Load-balanced architecture with failover capability</li>
              <li>Performance benchmarks and optimization reports</li>
              <li>Security audit report</li>
            </ul>
          </div>
          
          <div className="checkpoint">
            <h4>Phase 7: Deployment & Handover (2 Days)</h4>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Production server setup and configuration</li>
              <li>Database migration to production</li>
              <li>Application deployment with zero-downtime strategy</li>
              <li>SSL certificate installation</li>
              <li>Domain configuration and DNS setup</li>
              <li>CDN configuration for static assets</li>
              <li>Final functional testing on production environment</li>
              <li>Admin walkthrough and training session</li>
              <li>Documentation handover (user manual, admin manual, technical documentation)</li>
              <li>Source code handover (Git repository access)</li>
              <li>Database backup setup and verification</li>
            </ul>
            <p><strong>Deliverables:</strong></p>
            <ul>
              <li>Live, production-ready platform</li>
              <li>Complete documentation (user guide, admin guide, API documentation)</li>
              <li>Source code repository access</li>
              <li>Trained admin users</li>
            </ul>
          </div>
          
          <div className="timeline-summary">
            <h4>⏱ Total Estimated Duration: 28-34 Working Days</h4>
            <p>This timeline assumes 8 hours of focused development work per day. The actual duration may vary slightly based on feedback cycles and any scope adjustments during Phase 1.</p>
          </div>
        </div>
      )
    },
    {
      title: "VI. PERFORMANCE GUARANTEES & RELIABILITY COMMITMENT",
      content: (
        <div className="section-content">
          <div className="guarantee-grid">
            <div className="guarantee-card">
              <h4>Load Balancing Architecture</h4>
              <p>We implement a <strong>stateless architecture</strong> from the ground up. This means your backend doesn't store session information on the server. Instead, all session data is stored in JWT tokens that are sent with each request. This design allows us to run multiple instances of your backend simultaneously.</p>
              <p>When traffic increases, we can simply add more server instances behind a load balancer. The load balancer distributes incoming requests across all available servers. If one server gets busy or fails, traffic automatically routes to other servers. This ensures:</p>
              <ul>
                <li><strong>Zero Downtime:</strong> If one server fails, others continue serving requests</li>
                <li><strong>Scalability:</strong> Handle traffic spikes by adding more servers</li>
                <li><strong>Performance:</strong> Distribute load evenly across servers for optimal response times</li>
              </ul>
              <p>This architecture is ready from day one. You don't need to wait for high traffic to implement load balancing—it's built into the foundation.</p>
            </div>
            <div className="guarantee-card">
              <h4>Zero Crash Policy - "Code Fatega Nahi"</h4>
              <p>We implement <strong>comprehensive exception handling</strong> at every layer of the application. This means errors are caught before they reach users, logged for debugging, and handled gracefully.</p>
              <p>Our error handling strategy includes:</p>
              <ul>
                <li><strong>Centralized Exception Handler:</strong> A global exception handler catches all unhandled exceptions, logs them with full context, and returns user-friendly error messages</li>
                <li><strong>Input Validation:</strong> All user inputs are validated before processing. Invalid inputs are rejected with clear error messages</li>
                <li><strong>Database Transaction Management:</strong> Critical operations use database transactions. If any part fails, all changes are rolled back to maintain data integrity</li>
                <li><strong>Graceful Degradation:</strong> If a non-critical feature fails (e.g., WhatsApp notification), the main functionality continues to work</li>
                <li><strong>Health Checks:</strong> Monitoring tools continuously check system health. If issues are detected, alerts are sent and automatic failover occurs</li>
              </ul>
              <p><strong>"Hamara code kabhi fatega nahi, ye Codvertex ki guarantee hai."</strong> (Our code will never crash, that's Codvertex's guarantee.)</p>
            </div>
            <div className="guarantee-card">
              <h4>Performance Optimization</h4>
              <p>We optimize for speed at every level:</p>
              <ul>
                <li><strong>Backend:</strong> Optimized database queries with proper indexing, connection pooling, and caching where appropriate</li>
                <li><strong>Frontend:</strong> Code splitting, lazy loading, image optimization, and minimal JavaScript for fast initial load</li>
                <li><strong>API:</strong> Stateless design ensures APIs respond quickly without session overhead</li>
                <li><strong>CDN:</strong> Static assets (images, CSS, JS) are served from a CDN for global fast delivery</li>
              </ul>
            </div>
            <div className="guarantee-card">
              <h4>99.9% Uptime Commitment</h4>
              <p>With load balancing and comprehensive error handling, we commit to 99.9% uptime. This means your platform will be available 99.9% of the time (less than 9 hours of downtime per year). This is achieved through:</p>
              <ul>
                <li>Multiple server instances with automatic failover</li>
                <li>Health monitoring and automatic recovery</li>
                <li>Database replication for redundancy</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "VII. SUPPORT, MAINTENANCE & OWNERSHIP",
      content: (
        <div className="section-content">
          <h4>7.1 Free Support Period (30 Days Post-Delivery)</h4>
          <p>After the platform goes live, we provide <strong>30 days of comprehensive free support</strong> to ensure everything works smoothly and you're comfortable using the system:</p>
          <ul>
            <li><strong>Bug Fixes:</strong> Any bugs discovered after launch will be fixed free of charge. We respond to bug reports within 24 hours and fix critical bugs within 48 hours.</li>
            <li><strong>Minor UI Adjustments:</strong> Small tweaks to layout, colors, fonts, or text can be made during this period. This includes adjusting spacing, changing button styles, or updating copy.</li>
            <li><strong>Performance Tweaks:</strong> If you notice any performance issues (slow page loads, laggy interactions), we'll investigate and optimize them at no cost.</li>
            <li><strong>Training Sessions:</strong> Additional training sessions for admin users if needed. We'll walk you through the admin panel, show you how to manage products, fabrics, designs, and content.</li>
            <li><strong>Documentation Updates:</strong> If you find gaps in documentation or need clarification on any feature, we'll update the documentation accordingly.</li>
            <li><strong>Configuration Assistance:</strong> Help with initial setup, domain configuration, email settings, and other configuration tasks.</li>
          </ul>
          <p><strong>Response Time Commitment:</strong> We commit to responding to support requests within 24 hours during business days. Critical issues (site down, security concerns) are addressed immediately.</p>
          
          <h4>7.2 Paid Support (After 30 Days)</h4>
          <p>After the free support period, we offer paid support for enhancements and new requirements:</p>
          <ul>
            <li><strong>New Features:</strong> Adding new functionality or modules that weren't in the original scope. Examples: payment gateway integration, order management, shipping integration, analytics dashboard.</li>
            <li><strong>Major UI Changes:</strong> Significant redesigns, new page additions, or complete UI overhauls. This includes changing the overall design theme, adding new sections, or restructuring existing pages.</li>
            <li><strong>Third-Party Upgrades:</strong> Updating dependencies (Spring Boot, React, etc.) to newer versions, integrating new third-party services, or replacing existing integrations.</li>
            <li><strong>Custom Development:</strong> Building features outside the original scope, custom integrations with your existing systems, or specialized functionality tailored to your specific business needs.</li>
            <li><strong>Ongoing Maintenance:</strong> If you prefer, we can provide ongoing maintenance services (monthly or annual contracts) that include regular updates, security patches, and proactive monitoring.</li>
          </ul>
          <p><strong>Pricing:</strong> Paid support is billed on an hourly basis (typically ₹1,500-2,500/hour depending on complexity) or as fixed-price projects for well-defined requirements. We provide detailed quotes before starting any paid work.</p>
          
          <h4>7.3 Complete Ownership & Intellectual Property</h4>
          <p>You own <strong>100% of everything</strong> we build. This is your asset, not ours:</p>
          <ul>
            <li><strong>Source Code:</strong> Complete access to all frontend (React) and backend (Spring Boot) source code. You receive full Git repository access with complete commit history.</li>
            <li><strong>Database:</strong> Full ownership of database schema, all data, and database structure. You can export, backup, or migrate your data at any time.</li>
            <li><strong>Designs & Content:</strong> All UI designs, graphics, images, and content created for the platform are yours. This includes custom graphics, icons, and any design assets.</li>
            <li><strong>Documentation:</strong> All technical documentation, API documentation, user guides, admin manuals, and deployment guides are provided to you.</li>
            <li><strong>Configuration Files:</strong> All configuration files, environment setup files, and deployment scripts are included.</li>
          </ul>
          <p><strong>No License Lock-In:</strong> There are no licensing fees, no monthly subscriptions (beyond standard hosting costs), and no restrictions on how you use the code.</p>
          <p><strong>No Vendor Dependency:</strong> You can take the code to any developer or hosting provider at any time. You're not locked into using our services for maintenance or updates. We'll provide complete documentation and handover support to ensure a smooth transition if you choose to work with another developer in the future.</p>
          <p><strong>Freedom to Modify:</strong> You have complete freedom to modify, extend, or customize the code as needed. The codebase is well-documented and follows best practices, making it easy for any competent developer to understand and modify.</p>
          
          <h4>7.4 Payment Milestones</h4>
          <p>We recommend the following payment structure to align with development progress and ensure fair distribution of risk:</p>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Payment</th>
                <th>Amount (INR)</th>
                <th>Deliverable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Project Start</strong></td>
                <td>30%</td>
                <td>₹6,300</td>
                <td>
                  <ul>
                    <li>Kickoff meeting and requirement finalization</li>
                    <li>Complete technical blueprint document</li>
                    <li>Database schema design</li>
                    <li>API structure documentation</li>
                    <li>UI/UX wireframes and flow diagrams</li>
                    <li>Final scope lock (no changes after this without additional cost)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>After Frontend Completion</strong></td>
                <td>30%</td>
                <td>₹6,300</td>
                <td>
                  <ul>
                    <li>Fully functional frontend with all pages</li>
                    <li>Landing page, category pages, product pages</li>
                    <li>Mockup customization interface</li>
                    <li>Admin panel UI</li>
                    <li>Complete responsive design (mobile, tablet, desktop)</li>
                    <li>Performance-optimized UI with fast load times</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>After Backend + Mockup Engine</strong></td>
                <td>30%</td>
                <td>₹6,300</td>
                <td>
                  <ul>
                    <li>Complete backend APIs (all endpoints functional)</li>
                    <li>Authentication system (Google OAuth + Email OTP)</li>
                    <li>Product, fabric, design management APIs</li>
                    <li>Admin APIs for content management</li>
                    <li>Fully working mockup engine with real-time preview</li>
                    <li>Custom design upload functionality</li>
                    <li>Database integration with all tables</li>
                    <li>Frontend-backend integration complete</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>Final Delivery</strong></td>
                <td>10%</td>
                <td>₹2,100</td>
                <td>
                  <ul>
                    <li>Live production site deployed and accessible</li>
                    <li>All testing completed (functional, performance, security)</li>
                    <li>Load balancing configured and tested</li>
                    <li>WhatsApp integration working</li>
                    <li>Complete documentation (user guide, admin guide, API docs, technical docs)</li>
                    <li>Source code repository access (Git)</li>
                    <li>Admin training session completed</li>
                    <li>30-day free support period begins</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>Payment Terms:</strong> Payments are due within 3 business days of milestone completion. We accept bank transfers, UPI, or other mutually agreed payment methods. All payments are in Indian Rupees (INR).</p>
          <p><strong>Flexibility:</strong> Payment milestones can be adjusted based on your preferences, but the recommended structure balances risk for both parties and ensures steady progress throughout the project.</p>
        </div>
      )
    },
    {
      title: "VIII. COMPLETE API DOCUMENTATION & INTEGRATION GUIDE",
      content: (
        <div className="section-content">
          <h4>8.1 API Endpoint Specifications</h4>
          <p>All APIs follow RESTful conventions and return JSON responses. Here's a comprehensive list of all available endpoints with request/response examples:</p>
          
          <h5>8.1.1 Authentication Endpoints</h5>
          <div className="api-endpoint">
            <p><strong>POST /api/v1/auth/google</strong> - Google OAuth Login</p>
            <p><strong>Request Body:</strong></p>
            <pre>{`{
  "token": "google_id_token_string"
}`}</pre>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 123,
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>POST /api/v1/auth/otp/request</strong> - Request OTP</p>
            <p><strong>Request Body:</strong></p>
            <pre>{`{
  "email": "user@example.com"
}`}</pre>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "message": "OTP sent to email"
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>POST /api/v1/auth/otp/verify</strong> - Verify OTP</p>
            <p><strong>Request Body:</strong></p>
            <pre>{`{
  "email": "user@example.com",
  "otp": "123456"
}`}</pre>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 123,
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
}`}</pre>
          </div>
          
          <h5>8.1.2 Product Endpoints</h5>
          <div className="api-endpoint">
            <p><strong>GET /api/v1/categories</strong> - Get All Categories</p>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "T-Shirts",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Hoodies",
      "status": "active"
    }
  ]
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>GET /api/v1/products?categoryId=1</strong> - Get Products by Category</p>
            <p><strong>Query Parameters:</strong></p>
            <ul>
              <li>categoryId (optional) - Filter by category</li>
              <li>page (optional, default: 1) - Page number</li>
              <li>limit (optional, default: 20) - Items per page</li>
            </ul>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Classic T-Shirt",
        "description": "Comfortable cotton t-shirt",
        "categoryId": 1,
        "imageUrl": "https://cdn.example.com/products/1.jpg"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 100,
      "itemsPerPage": 20
    }
  }
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>GET /api/v1/products/{"{id}"}</strong> - Get Product Details</p>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Classic T-Shirt",
    "description": "Comfortable cotton t-shirt",
    "categoryId": 1,
    "fabrics": [
      {
        "id": 1,
        "name": "Cotton",
        "imageUrl": "https://cdn.example.com/fabrics/1.jpg"
      }
    ],
    "designs": [
      {
        "id": 1,
        "name": "Logo Design 1",
        "imageUrl": "https://cdn.example.com/designs/1.png"
      }
    ]
  }
}`}</pre>
          </div>
          
          <h5>8.1.3 Mockup Endpoints</h5>
          <div className="api-endpoint">
            <p><strong>GET /api/v1/fabrics?productId=1</strong> - Get Fabrics for Product</p>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Cotton",
      "imageUrl": "https://cdn.example.com/fabrics/1.jpg",
      "productId": 1
    }
  ]
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>GET /api/v1/designs?productId=1</strong> - Get Designs for Product</p>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Logo Design 1",
      "imageUrl": "https://cdn.example.com/designs/1.png",
      "isCustom": false
    }
  ]
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>POST /api/v1/design/upload</strong> - Upload Custom Design</p>
            <p><strong>Request:</strong> Multipart form data with file</p>
            <p><strong>Headers:</strong> Authorization: Bearer {"{jwt_token}"}</p>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": {
    "id": 100,
    "imageUrl": "https://cdn.example.com/custom/abc123.jpg",
    "uploadedAt": "2026-01-09T10:30:00Z"
  }
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>POST /api/v1/mockup/save</strong> - Save Mockup</p>
            <p><strong>Request Body:</strong></p>
            <pre>{`{
  "productId": 1,
  "fabricId": 1,
  "designId": 1,
  "previewUrl": "data:image/png;base64,..."
}`}</pre>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "data": {
    "id": 500,
    "userId": 123,
    "productId": 1,
    "fabricId": 1,
    "designId": 1,
    "previewUrl": "https://cdn.example.com/mockups/500.jpg",
    "createdAt": "2026-01-09T10:35:00Z"
  }
}`}</pre>
          </div>
          
          <h5>8.1.4 Admin Endpoints (Require Admin Role)</h5>
          <div className="api-endpoint">
            <p><strong>POST /api/v1/admin/product</strong> - Create Product</p>
            <p><strong>Request Body:</strong></p>
            <pre>{`{
  "name": "New Product",
  "description": "Product description",
  "categoryId": 1,
  "status": "active"
}`}</pre>
          </div>
          
          <div className="api-endpoint">
            <p><strong>PUT /api/v1/admin/product/{"{id}"}</strong> - Update Product</p>
            <p><strong>Request Body:</strong> Same as create</p>
          </div>
          
          <div className="api-endpoint">
            <p><strong>DELETE /api/v1/admin/product/{"{id}"}</strong> - Delete Product (Soft Delete)</p>
            <p><strong>Response (200 OK):</strong></p>
            <pre>{`{
  "status": "success",
  "message": "Product deleted successfully"
}`}</pre>
          </div>
          
          <h4>8.2 Error Response Format</h4>
          <p>All errors follow a consistent format:</p>
          <pre>{`{
  "status": "error",
  "code": "VALIDATION_ERROR",
  "message": "Invalid input data",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}`}</pre>
          
          <h4>8.3 Authentication & Authorization</h4>
          <p>Most endpoints require authentication. Include the JWT token in the Authorization header:</p>
          <pre>{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}</pre>
          <p>Admin endpoints require an admin role. Regular users will receive a 403 Forbidden response if they attempt to access admin endpoints.</p>
        </div>
      )
    },
    {
      title: "IX. DETAILED USER JOURNEY & EDGE CASE HANDLING",
      content: (
        <div className="section-content">
          <h4>9.1 Complete User Journey: From Landing to Mockup Creation</h4>
          
          <h5>9.1.1 Step 1: User Arrives at Landing Page</h5>
          <p>When a user first visits your website, they see a beautifully designed landing page that loads in under 2 seconds. The page includes:</p>
          <ul>
            <li><strong>Hero Section:</strong> A compelling headline, value proposition, and clear call-to-action buttons that guide users toward product exploration.</li>
            <li><strong>Featured Products:</strong> A grid of featured products with high-quality images that load lazily as the user scrolls.</li>
            <li><strong>Trust Indicators:</strong> Testimonials, security badges, and quality guarantees that build confidence.</li>
            <li><strong>Navigation:</strong> A clean navigation menu that allows users to browse categories or search for specific products.</li>
          </ul>
          <p><strong>Technical Implementation:</strong> The landing page is server-rendered for SEO benefits, but uses client-side JavaScript for interactivity. Images are optimized and served from a CDN for fast global delivery. The page uses minimal JavaScript initially, with additional functionality loaded as needed.</p>
          
          <h5>9.1.2 Step 2: User Browses Categories</h5>
          <p>When a user clicks on a category (e.g., "T-Shirts"), the following happens:</p>
          <ol>
            <li><strong>API Call:</strong> The frontend makes a GET request to /api/v1/products?categoryId=1</li>
            <li><strong>Loading State:</strong> While the API call is in progress, skeleton loaders are displayed to prevent layout shifts.</li>
            <li><strong>Data Processing:</strong> The backend queries the database for active products in the selected category, applies pagination, and returns the results.</li>
            <li><strong>Rendering:</strong> Products are displayed in a responsive grid. Each product card shows an image, name, and short description.</li>
            <li><strong>Pagination:</strong> If there are more products, pagination controls are displayed at the bottom.</li>
          </ol>
          <p><strong>Edge Cases Handled:</strong></p>
          <ul>
            <li><strong>No Products:</strong> If a category has no products, a friendly message is displayed: "No products available in this category."</li>
            <li><strong>API Failure:</strong> If the API call fails (network error, server error), an error message is shown with a "Retry" button.</li>
            <li><strong>Slow Network:</strong> On slow networks, loading states are shown for longer, and users can see progress.</li>
          </ul>
          
          <h5>9.1.3 Step 3: User Opens Product Page</h5>
          <p>When a user clicks on a product, they're taken to the product detail page. This page loads in two phases:</p>
          <p><strong>Phase 1 - Product Information:</strong> Product name, description, and main image load immediately from cached data.</p>
          <p><strong>Phase 2 - Customization Options:</strong> Available fabrics and designs are fetched via API and displayed once loaded.</p>
          <p><strong>User Actions Available:</strong></p>
          <ul>
            <li>View product details and specifications</li>
            <li>Browse available fabrics (displayed as thumbnails)</li>
            <li>Browse available designs (displayed in a grid)</li>
            <li>Click "Customize" to proceed to the mockup creation page</li>
          </ul>
          
          <h5>9.1.4 Step 4: User Creates Mockup (Core Flow)</h5>
          <p>This is the most critical part of the user journey. Here's what happens step-by-step:</p>
          
          <p><strong>4a. Initial Load:</strong> When the customization page loads, the system:</p>
          <ul>
            <li>Loads the default blank fabric for the selected product</li>
            <li>Preloads all available fabric images in the background</li>
            <li>Displays the fabric selector with thumbnails</li>
            <li>Displays the design selector with predefined designs</li>
            <li>Shows an empty preview canvas</li>
          </ul>
          
          <p><strong>4b. Fabric Selection:</strong> When a user clicks on a fabric:</p>
          <ul>
            <li>The selected fabric thumbnail is highlighted</li>
            <li>The fabric image is loaded into the canvas (if not already preloaded)</li>
            <li>The canvas is cleared and redrawn with the new fabric texture</li>
            <li>If a design was previously selected, it's re-rendered on top of the new fabric</li>
            <li>The preview updates instantly (under 100ms)</li>
          </ul>
          
          <p><strong>4c. Design Selection:</strong> When a user clicks on a predefined design:</p>
          <ul>
            <li>The design thumbnail is highlighted</li>
            <li>The design image is loaded (if not already cached)</li>
            <li>The design is positioned on the fabric using predefined anchor points</li>
            <li>If the design has transparency (PNG), alpha blending is applied</li>
            <li>The design is scaled to fit within the product boundaries</li>
            <li>The preview updates instantly</li>
          </ul>
          
          <p><strong>4d. Custom Design Upload:</strong> When a user clicks "Upload Your Design":</p>
          <ol>
            <li>A file picker dialog opens (filtered to show only image files)</li>
            <li>User selects an image file (PNG, JPG, or JPEG)</li>
            <li>Frontend validates the file:
              <ul>
                <li>Checks file type (extension and MIME type)</li>
                <li>Checks file size (must be under 5MB)</li>
                <li>Displays error if validation fails</li>
              </ul>
            </li>
            <li>If valid, the file is uploaded via POST /api/v1/design/upload:
              <ul>
                <li>Progress bar shows upload progress</li>
                <li>Backend validates the file again (server-side)</li>
                <li>File is scanned for viruses</li>
                <li>File is optimized (compressed, resized if needed)</li>
                <li>File is stored securely</li>
                <li>Database record is created</li>
                <li>Image URL is returned to frontend</li>
              </ul>
            </li>
            <li>Once uploaded, the design is applied to the fabric:
              <ul>
                <li>Design image is loaded into the canvas</li>
                <li>Positioning and scaling are applied</li>
                <li>Preview updates instantly</li>
              </ul>
            </li>
          </ol>
          
          <p><strong>Edge Cases Handled:</strong></p>
          <ul>
            <li><strong>Invalid File Type:</strong> User sees error: "Please upload a PNG, JPG, or JPEG file."</li>
            <li><strong>File Too Large:</strong> User sees error: "File size must be under 5MB. Please compress your image."</li>
            <li><strong>Upload Failure:</strong> User sees error with "Retry" button. Upload can be retried without losing the current mockup state.</li>
            <li><strong>Network Interruption:</strong> If upload is interrupted, user can retry. Partial uploads are cleaned up server-side.</li>
            <li><strong>Virus Detected:</strong> File is rejected with message: "File could not be processed. Please try a different file."</li>
          </ul>
          
          <p><strong>4e. Saving Mockup:</strong> When a user clicks "Save Mockup":</p>
          <ul>
            <li>If user is not logged in, they're prompted to log in (modal or redirect)</li>
            <li>If user is logged in:
              <ul>
                <li>Current canvas state is captured as an image (base64 or blob)</li>
                <li>POST request is sent to /api/v1/mockup/save with fabric ID, design ID, and preview image</li>
                <li>Backend saves the mockup to database</li>
                <li>Success message is displayed: "Mockup saved successfully!"</li>
                <li>WhatsApp notification is sent to admin (if configured)</li>
              </ul>
            </li>
          </ul>
          
          <h5>9.1.5 Step 5: Authentication (If Required)</h5>
          <p>If the user needs to log in to save a mockup, they have two options:</p>
          
          <p><strong>Option A: Google Sign-In</strong></p>
          <ol>
            <li>User clicks "Login with Google"</li>
            <li>Google OAuth popup opens</li>
            <li>User selects their Google account</li>
            <li>Google redirects back with authorization code</li>
            <li>Backend exchanges code for user info</li>
            <li>User record is created/updated in database</li>
            <li>JWT token is generated and sent to frontend</li>
            <li>Token is stored securely (httpOnly cookie or localStorage)</li>
            <li>User is redirected back to mockup page</li>
            <li>Mockup save can now proceed</li>
          </ol>
          
          <p><strong>Option B: Email OTP</strong></p>
          <ol>
            <li>User enters email address</li>
            <li>Clicks "Send OTP"</li>
            <li>Backend generates 6-digit OTP, hashes it, stores with expiration (10 minutes)</li>
            <li>OTP is sent to user's email via SMTP</li>
            <li>User enters OTP in the form</li>
            <li>Backend verifies OTP (checks hash match and expiration)</li>
            <li>If valid, JWT token is generated and sent</li>
            <li>User is logged in and can save mockup</li>
          </ol>
          
          <p><strong>Edge Cases Handled:</strong></p>
          <ul>
            <li><strong>Google OAuth Cancelled:</strong> User can try again or switch to email OTP</li>
            <li><strong>OTP Not Received:</strong> User can request a new OTP (max 3 per hour)</li>
            <li><strong>Wrong OTP:</strong> User sees error and can try again</li>
            <li><strong>Expired OTP:</strong> User sees error and can request a new one</li>
            <li><strong>Rate Limiting:</strong> If user exceeds OTP request limit, they must wait before requesting again</li>
          </ul>
          
          <h4>9.2 Admin Journey: Complete Content Management Flow</h4>
          
          <h5>9.2.1 Admin Login</h5>
          <p>Admins access the platform through a separate admin login page (/admin/login). The login process is similar to user login but uses admin credentials stored securely in the database. After successful login, admins receive a JWT token with admin role privileges.</p>
          
          <h5>9.2.2 Admin Dashboard</h5>
          <p>The dashboard provides a comprehensive overview:</p>
          <ul>
            <li><strong>Key Metrics:</strong> Total products, fabrics, designs, users, and mockups created (displayed as cards with numbers)</li>
            <li><strong>Recent Activity:</strong> A feed showing recent mockups created, user registrations, and admin actions</li>
            <li><strong>Quick Actions:</strong> Buttons to quickly add a product, upload a fabric, or upload a design</li>
            <li><strong>System Health:</strong> API response times, server load, error rates (if monitoring is configured)</li>
          </ul>
          
          <h5>9.2.3 Product Management</h5>
          <p>Admins can manage products through a dedicated interface:</p>
          <p><strong>Adding a Product:</strong></p>
          <ol>
            <li>Admin clicks "Add Product"</li>
            <li>Form opens with fields: Name, Description, Category, Featured Image, Status</li>
            <li>Admin fills in details and uploads product image</li>
            <li>Form is validated (all required fields, valid image format)</li>
            <li>On submit, POST /api/v1/admin/product is called</li>
            <li>Backend creates product record in database</li>
            <li>Success message is shown, and admin is redirected to product list</li>
          </ol>
          
          <p><strong>Editing a Product:</strong></p>
          <ol>
            <li>Admin clicks "Edit" on a product</li>
            <li>Form opens pre-filled with existing product data</li>
            <li>Admin makes changes</li>
            <li>On submit, PUT /api/v1/admin/product/{"{id}"} is called</li>
            <li>Backend updates product record</li>
            <li>Changes are reflected immediately on the frontend</li>
          </ol>
          
          <p><strong>Deleting a Product:</strong></p>
          <ol>
            <li>Admin clicks "Delete" on a product</li>
            <li>Confirmation dialog appears: "Are you sure you want to delete this product?"</li>
            <li>If confirmed, DELETE /api/v1/admin/product/{"{id}"} is called</li>
            <li>Backend performs soft delete (sets status to "inactive")</li>
            <li>Product disappears from active product list but remains in database</li>
            <li>Admin can restore it later if needed</li>
          </ol>
          
          <h5>9.2.4 Fabric Management</h5>
          <p>Admins can upload and manage fabric images:</p>
          <ol>
            <li>Admin navigates to "Fabrics" section</li>
            <li>Clicks "Upload Fabric"</li>
            <li>File picker opens (filtered to images)</li>
            <li>Admin selects fabric image and fills in name</li>
            <li>Admin selects which products this fabric should be available for (multi-select)</li>
            <li>On submit, image is uploaded, optimized, and stored</li>
            <li>Fabric record is created with product associations</li>
            <li>Fabric appears in the fabric list and is available for selected products</li>
          </ol>
          
          <h5>9.2.5 Design Management</h5>
          <p>Similar to fabric management, admins can upload predefined designs that users can select. Designs can be organized into categories for easier management.</p>
          
          <h5>9.2.6 CMS Content Management</h5>
          <p>Admins can edit website content through a WYSIWYG editor:</p>
          <ol>
            <li>Admin navigates to "Content" section</li>
            <li>Selects a page to edit (Landing Page, About Us, Contact, etc.)</li>
            <li>Editor opens with current content</li>
            <li>Admin makes changes using rich text formatting tools</li>
            <li>Can insert images, links, and formatted text</li>
            <li>On save, content is stored in database</li>
            <li>Changes are reflected on the live site immediately</li>
          </ol>
        </div>
      )
    },
    {
      title: "X. SECURITY IMPLEMENTATION & BEST PRACTICES",
      content: (
        <div className="section-content">
          <h4>10.1 Authentication Security</h4>
          <p>Security is built into every layer of the authentication system:</p>
          
          <h5>10.1.1 Password Hashing</h5>
          <p>While we primarily use OAuth and OTP (which don't require password storage), any passwords that might be stored in the future are hashed using bcrypt with a cost factor of 12. This ensures that even if the database is compromised, passwords cannot be easily recovered.</p>
          
          <h5>10.1.2 JWT Token Security</h5>
          <p>JWT tokens are signed using HMAC-SHA256 with a secret key stored securely in environment variables. Tokens include:</p>
          <ul>
            <li><strong>Expiration Time:</strong> Tokens expire after 24 hours of inactivity to limit exposure if compromised</li>
            <li><strong>User ID:</strong> Embedded in token payload for quick user identification</li>
            <li><strong>Role:</strong> User role (regular user or admin) is included to enable role-based access control</li>
            <li><strong>Issued At:</strong> Timestamp of when token was issued for tracking</li>
          </ul>
          <p>Tokens are validated on every API request. Invalid or expired tokens result in a 401 Unauthorized response, requiring the user to log in again.</p>
          
          <h5>10.1.3 OAuth Security</h5>
          <p>Google OAuth implementation follows security best practices:</p>
          <ul>
            <li><strong>State Parameter:</strong> A random state parameter is included in OAuth requests to prevent CSRF attacks</li>
            <li><strong>Token Validation:</strong> ID tokens are validated against Google's public keys to ensure authenticity</li>
            <li><strong>Redirect URI Validation:</strong> Only pre-registered redirect URIs are accepted</li>
          </ul>
          
          <h5>10.1.4 OTP Security</h5>
          <p>OTP implementation includes multiple security measures:</p>
          <ul>
            <li><strong>Cryptographic Generation:</strong> OTPs are generated using SecureRandom to ensure unpredictability</li>
            <li><strong>Hashing:</strong> OTPs are hashed before storage (never stored in plain text)</li>
            <li><strong>Expiration:</strong> OTPs expire after 10 minutes to limit the window of vulnerability</li>
            <li><strong>Rate Limiting:</strong> Maximum 3 OTP requests per hour per email to prevent abuse</li>
            <li><strong>Single Use:</strong> Once an OTP is used, it's immediately invalidated</li>
          </ul>
          
          <h4>10.2 Input Validation & Sanitization</h4>
          <p>All user inputs are validated and sanitized to prevent injection attacks:</p>
          
          <h5>10.2.1 SQL Injection Prevention</h5>
          <p>We use parameterized queries (via JPA/Hibernate) for all database operations. This ensures that user input is never directly concatenated into SQL queries, preventing SQL injection attacks.</p>
          
          <h5>10.2.2 XSS (Cross-Site Scripting) Prevention</h5>
          <p>All user-generated content is sanitized before display:</p>
          <ul>
            <li><strong>Output Encoding:</strong> Special characters are HTML-encoded when displayed</li>
            <li><strong>Content Security Policy:</strong> CSP headers are set to prevent execution of inline scripts</li>
            <li><strong>Input Sanitization:</strong> User inputs are sanitized using libraries like OWASP Java HTML Sanitizer</li>
          </ul>
          
          <h5>10.2.3 CSRF (Cross-Site Request Forgery) Protection</h5>
          <p>CSRF tokens are included in forms and validated on state-changing requests (POST, PUT, DELETE). This prevents malicious sites from making unauthorized requests on behalf of authenticated users.</p>
          
          <h4>10.3 File Upload Security</h4>
          <p>File uploads are one of the most vulnerable areas. We implement multiple layers of security:</p>
          
          <h5>10.3.1 File Type Validation</h5>
          <p>Files are validated in multiple ways:</p>
          <ul>
            <li><strong>Extension Check:</strong> Only allowed extensions (.png, .jpg, .jpeg) are accepted</li>
            <li><strong>MIME Type Check:</strong> File MIME type is verified to match the extension</li>
            <li><strong>Magic Number Check:</strong> File headers (first few bytes) are checked to verify actual file type</li>
          </ul>
          
          <h5>10.3.2 File Size Limits</h5>
          <p>Maximum file size is enforced at multiple levels:</p>
          <ul>
            <li><strong>Frontend:</strong> File size is checked before upload to provide immediate feedback</li>
            <li><strong>Backend:</strong> File size is validated again server-side (cannot be bypassed)</li>
            <li><strong>Server Configuration:</strong> Web server (Nginx) is configured with max upload size limits</li>
          </ul>
          
          <h5>10.3.3 Secure Storage</h5>
          <p>Uploaded files are stored securely:</p>
          <ul>
            <li><strong>Outside Web Root:</strong> Files are stored in a directory outside the web root to prevent direct access</li>
            <li><strong>Hashed Filenames:</strong> Original filenames are hashed to prevent enumeration attacks</li>
            <li><strong>Access Control:</strong> Files are served through authenticated endpoints, not directly</li>
            <li><strong>Virus Scanning:</strong> Files are scanned for malware before storage</li>
          </ul>
          
          <h4>10.4 API Security</h4>
          <p>API endpoints are protected through multiple mechanisms:</p>
          
          <h5>10.4.1 Authentication Required</h5>
          <p>Most endpoints require a valid JWT token. Unauthenticated requests receive a 401 Unauthorized response.</p>
          
          <h5>10.4.2 Role-Based Authorization</h5>
          <p>Admin endpoints check for admin role. Regular users attempting to access admin endpoints receive a 403 Forbidden response.</p>
          
          <h5>10.4.3 Rate Limiting</h5>
          <p>API endpoints are rate-limited to prevent abuse:</p>
          <ul>
            <li><strong>General Endpoints:</strong> 100 requests per minute per IP</li>
            <li><strong>Authentication Endpoints:</strong> 5 requests per minute per IP</li>
            <li><strong>File Upload Endpoints:</strong> 10 uploads per hour per user</li>
          </ul>
          
          <h4>10.5 Data Protection</h4>
          <p>User data is protected through:</p>
          <ul>
            <li><strong>Encryption in Transit:</strong> All communications use HTTPS (TLS 1.2+)</li>
            <li><strong>Encryption at Rest:</strong> Sensitive data in the database can be encrypted (optional, for highly sensitive data)</li>
            <li><strong>Data Minimization:</strong> We only collect and store data that's necessary for functionality</li>
            <li><strong>Access Logging:</strong> All access to sensitive data is logged for audit purposes</li>
          </ul>
        </div>
      )
    },
    {
      title: "XI. PERFORMANCE OPTIMIZATION & SCALABILITY STRATEGY",
      content: (
        <div className="section-content">
          <h4>11.1 Backend Performance Optimization</h4>
          <p>Backend performance is critical for handling high traffic. We implement multiple optimization strategies:</p>
          
          <h5>11.1.1 Database Query Optimization</h5>
          <p>Database queries are optimized for speed:</p>
          <ul>
            <li><strong>Indexing Strategy:</strong> All frequently queried columns are indexed. Composite indexes are created for multi-column queries (e.g., products.category_id + products.status).</li>
            <li><strong>Query Optimization:</strong> We use EXPLAIN ANALYZE to identify slow queries and optimize them. N+1 query problems are avoided using JOIN FETCH in JPA.</li>
            <li><strong>Connection Pooling:</strong> HikariCP connection pool is configured with optimal pool size (typically 10-20 connections) to handle concurrent requests efficiently.</li>
            <li><strong>Pagination:</strong> All list endpoints use pagination to limit the amount of data transferred. Default page size is 20 items, configurable up to 100.</li>
            <li><strong>Lazy Loading:</strong> Related entities are loaded lazily and only when needed to reduce initial query time.</li>
          </ul>
          
          <h5>11.1.2 Caching Strategy</h5>
          <p>Caching reduces database load and improves response times:</p>
          <ul>
            <li><strong>Static Data Caching:</strong> Categories, product metadata, and design lists are cached in Redis with 1-hour TTL. This data changes infrequently, so caching is safe.</li>
            <li><strong>Session Caching:</strong> JWT tokens are validated against a cache to avoid database lookups on every request.</li>
            <li><strong>CDN Caching:</strong> Static assets (images, CSS, JS) are served from a CDN with long cache times (1 year) and cache invalidation on updates.</li>
          </ul>
          
          <h5>11.1.3 API Response Optimization</h5>
          <p>API responses are optimized for size and speed:</p>
          <ul>
            <li><strong>DTO Usage:</strong> Only necessary fields are included in responses (via DTOs), reducing payload size.</li>
            <li><strong>Compression:</strong> Responses are gzipped to reduce network transfer time (especially important for mobile users).</li>
            <li><strong>Async Processing:</strong> Non-critical operations (like WhatsApp notifications) are processed asynchronously to avoid blocking API responses.</li>
          </ul>
          
          <h4>11.2 Frontend Performance Optimization</h4>
          <p>Frontend performance directly impacts user experience. We optimize for speed:</p>
          
          <h5>11.2.1 Code Splitting & Lazy Loading</h5>
          <p>JavaScript is split into chunks and loaded on demand:</p>
          <ul>
            <li><strong>Route-Based Splitting:</strong> Each route loads its own JavaScript bundle, reducing initial load time.</li>
            <li><strong>Component Lazy Loading:</strong> Heavy components (like the mockup engine) are loaded only when needed using React.lazy().</li>
            <li><strong>Dynamic Imports:</strong> Third-party libraries are imported dynamically to avoid loading unused code.</li>
          </ul>
          
          <h5>11.2.2 Image Optimization</h5>
          <p>Images are optimized for fast loading:</p>
          <ul>
            <li><strong>Format Selection:</strong> Modern formats (WebP) are used with fallbacks for older browsers.</li>
            <li><strong>Responsive Images:</strong> Different image sizes are served based on device (mobile gets smaller images).</li>
            <li><strong>Lazy Loading:</strong> Images below the fold are loaded only when the user scrolls to them.</li>
            <li><strong>Compression:</strong> Images are compressed to reduce file size without noticeable quality loss.</li>
            <li><strong>CDN Delivery:</strong> All images are served from a CDN for fast global delivery.</li>
          </ul>
          
          <h5>11.2.3 Bundle Size Optimization</h5>
          <p>JavaScript bundle size is minimized:</p>
          <ul>
            <li><strong>Tree Shaking:</strong> Unused code is eliminated during build process.</li>
            <li><strong>Minification:</strong> JavaScript and CSS are minified to reduce file size.</li>
            <li><strong>Library Selection:</strong> We use lightweight alternatives where possible (e.g., date-fns instead of moment.js).</li>
            <li><strong>Bundle Analysis:</strong> Bundle size is analyzed regularly to identify and remove unnecessary dependencies.</li>
          </ul>
          
          <h5>11.2.4 Rendering Optimization</h5>
          <p>React rendering is optimized to prevent unnecessary re-renders:</p>
          <ul>
            <li><strong>React.memo:</strong> Components are memoized to prevent re-renders when props haven't changed.</li>
            <li><strong>useMemo & useCallback:</strong> Expensive computations and functions are memoized to avoid recalculation.</li>
            <li><strong>Virtual DOM Optimization:</strong> React's Virtual DOM efficiently updates only changed elements.</li>
            <li><strong>Key Props:</strong> Proper key props are used in lists to enable efficient diffing.</li>
          </ul>
          
          <h4>11.3 Scalability Architecture</h4>
          <p>The architecture is designed to scale horizontally:</p>
          
          <h5>11.3.1 Stateless Design</h5>
          <p>The entire backend is stateless:</p>
          <ul>
            <li><strong>No Server Sessions:</strong> All session data is stored in JWT tokens, not on the server.</li>
            <li><strong>Shared-Nothing Architecture:</strong> Each server instance is independent and doesn't share state.</li>
            <li><strong>Horizontal Scaling Ready:</strong> New server instances can be added without configuration changes.</li>
          </ul>
          
          <h5>11.3.2 Load Balancing</h5>
          <p>Traffic is distributed across multiple servers:</p>
          <ul>
            <li><strong>Round-Robin Distribution:</strong> Requests are distributed evenly across available servers.</li>
            <li><strong>Health Checks:</strong> Load balancer continuously checks server health and routes traffic away from unhealthy servers.</li>
            <li><strong>Session Affinity:</strong> Not required (stateless design), but can be enabled if needed.</li>
            <li><strong>Auto-Scaling:</strong> In cloud environments, servers can be added/removed automatically based on traffic.</li>
          </ul>
          
          <h5>11.3.3 Database Scaling</h5>
          <p>Database can be scaled as needed:</p>
          <ul>
            <li><strong>Read Replicas:</strong> Read queries can be distributed across multiple database replicas.</li>
            <li><strong>Connection Pooling:</strong> Connection pools are configured per server instance to handle concurrent connections.</li>
            <li><strong>Query Optimization:</strong> Slow queries are identified and optimized to reduce database load.</li>
          </ul>
        </div>
      )
    },
    {
      title: "XII. TESTING STRATEGY & QUALITY ASSURANCE",
      content: (
        <div className="section-content">
          <h4>12.1 Testing Philosophy</h4>
          <p>We follow a comprehensive testing strategy to ensure reliability and quality. Testing is not an afterthought—it's integrated into the development process from day one.</p>
          
          <h5>12.1.1 Unit Testing</h5>
          <p>Unit tests verify that individual components work correctly in isolation:</p>
          <ul>
            <li><strong>Service Layer Tests:</strong> Business logic in service classes is tested with unit tests. We use JUnit and Mockito to mock dependencies.</li>
            <li><strong>Repository Tests:</strong> Database operations are tested using an in-memory database (H2) to ensure queries work correctly.</li>
            <li><strong>Utility Function Tests:</strong> Helper functions and utilities are thoroughly tested with various input scenarios.</li>
            <li><strong>Coverage Target:</strong> We aim for 80%+ code coverage in critical business logic areas.</li>
          </ul>
          
          <h5>12.1.2 Integration Testing</h5>
          <p>Integration tests verify that different components work together correctly:</p>
          <ul>
            <li><strong>API Integration Tests:</strong> We use Spring Boot Test to test API endpoints end-to-end. Tests start a test server, make HTTP requests, and verify responses.</li>
            <li><strong>Database Integration Tests:</strong> Tests verify that database operations (create, read, update, delete) work correctly with the actual database schema.</li>
            <li><strong>Authentication Flow Tests:</strong> Complete authentication flows (OAuth, OTP) are tested to ensure they work end-to-end.</li>
            <li><strong>File Upload Tests:</strong> File upload functionality is tested with various file types, sizes, and edge cases.</li>
          </ul>
          
          <h5>12.1.3 Frontend Testing</h5>
          <p>Frontend components are tested to ensure UI works correctly:</p>
          <ul>
            <li><strong>Component Tests:</strong> React components are tested using React Testing Library to verify rendering and user interactions.</li>
            <li><strong>Integration Tests:</strong> User flows (like creating a mockup) are tested end-to-end using tools like Cypress or Playwright.</li>
            <li><strong>Visual Regression Tests:</strong> Screenshots are compared to detect unintended UI changes.</li>
            <li><strong>Cross-Browser Testing:</strong> Tests are run on multiple browsers (Chrome, Firefox, Safari, Edge) to ensure compatibility.</li>
          </ul>
          
          <h5>12.1.4 Performance Testing</h5>
          <p>Performance tests ensure the system can handle expected load:</p>
          <ul>
            <li><strong>Load Testing:</strong> We simulate 100+ concurrent users to verify the system handles traffic spikes.</li>
            <li><strong>Stress Testing:</strong> We gradually increase load to find the breaking point and ensure graceful degradation.</li>
            <li><strong>Response Time Testing:</strong> We verify that API responses are under acceptable thresholds (typically under 200ms for simple queries, under 1s for complex operations).</li>
            <li><strong>Database Performance Testing:</strong> We test database queries under load to identify slow queries.</li>
          </ul>
          
          <h5>12.1.5 Security Testing</h5>
          <p>Security tests verify that the system is protected against common vulnerabilities:</p>
          <ul>
            <li><strong>Penetration Testing:</strong> We attempt to exploit common vulnerabilities (SQL injection, XSS, CSRF) to verify protections are in place.</li>
            <li><strong>Authentication Testing:</strong> We test that authentication and authorization work correctly and cannot be bypassed.</li>
            <li><strong>File Upload Security Testing:</strong> We attempt to upload malicious files to verify security measures work.</li>
            <li><strong>API Security Testing:</strong> We test that APIs are properly protected and cannot be accessed without authentication.</li>
          </ul>
          
          <h4>12.2 Test Automation</h4>
          <p>All tests are automated and run as part of the CI/CD pipeline:</p>
          <ul>
            <li><strong>Continuous Integration:</strong> Tests run automatically on every code commit to catch issues early.</li>
            <li><strong>Test Reports:</strong> Test results are reported with coverage metrics and failure details.</li>
            <li><strong>Pre-Deployment Testing:</strong> All tests must pass before code is deployed to production.</li>
          </ul>
          
          <h4>12.3 Manual Testing & QA</h4>
          <p>In addition to automated tests, we perform manual testing:</p>
          <ul>
            <li><strong>User Acceptance Testing:</strong> We test the complete user journey from landing page to mockup creation to ensure everything works as expected.</li>
            <li><strong>Admin Panel Testing:</strong> We test all admin functionality to ensure content management works smoothly.</li>
            <li><strong>Cross-Device Testing:</strong> We test on real devices (phones, tablets, desktops) to ensure responsive design works correctly.</li>
            <li><strong>Edge Case Testing:</strong> We test edge cases (slow network, large files, concurrent users) to ensure the system handles them gracefully.</li>
          </ul>
        </div>
      )
    },
    {
      title: "XIII. DEPLOYMENT & DEVOPS PROCEDURES",
      content: (
        <div className="section-content">
          <h4>13.1 Deployment Architecture</h4>
          <p>We follow industry best practices for deployment to ensure reliability and zero-downtime updates:</p>
          
          <h5>13.1.1 Environment Setup</h5>
          <p>We use separate environments for development, staging, and production:</p>
          <ul>
            <li><strong>Development Environment:</strong> Used by developers for local testing and development.</li>
            <li><strong>Staging Environment:</strong> Mirrors production environment. Used for final testing before production deployment.</li>
            <li><strong>Production Environment:</strong> Live environment serving real users. Highest security and performance standards.</li>
          </ul>
          
          <h5>13.1.2 Server Configuration</h5>
          <p>Production servers are configured for optimal performance and security:</p>
          <ul>
            <li><strong>Operating System:</strong> Linux (Ubuntu LTS or similar) with security updates applied regularly.</li>
            <li><strong>Java Runtime:</strong> Latest LTS version of OpenJDK with optimal JVM settings for performance.</li>
            <li><strong>Web Server:</strong> Nginx as reverse proxy and load balancer, handling SSL termination and static file serving.</li>
            <li><strong>Application Server:</strong> Spring Boot embedded Tomcat, configured with optimal thread pool and connection settings.</li>
            <li><strong>Database:</strong> PostgreSQL or MySQL with proper configuration for performance and reliability.</li>
          </ul>
          
          <h5>13.1.3 SSL/TLS Configuration</h5>
          <p>All communications are encrypted:</p>
          <ul>
            <li><strong>SSL Certificates:</strong> Let's Encrypt or commercial SSL certificates are installed and auto-renewed.</li>
            <li><strong>TLS Version:</strong> Only TLS 1.2+ is supported (older versions disabled for security).</li>
            <li><strong>HTTPS Redirect:</strong> All HTTP traffic is automatically redirected to HTTPS.</li>
            <li><strong>HSTS Headers:</strong> HTTP Strict Transport Security headers are set to enforce HTTPS.</li>
          </ul>
          
          <h4>13.2 Deployment Process</h4>
          <p>Deployment follows a structured process to minimize risk:</p>
          
          <h5>13.2.1 Pre-Deployment Checklist</h5>
          <p>Before deployment, we verify:</p>
          <ul>
            <li>All tests pass (unit, integration, e2e)</li>
            <li>Code review is completed and approved</li>
            <li>Database migrations are tested and ready</li>
            <li>Environment variables are configured correctly</li>
            <li>Backup of current production database is taken</li>
            <li>Rollback plan is prepared</li>
          </ul>
          
          <h5>13.2.2 Zero-Downtime Deployment</h5>
          <p>We use blue-green deployment strategy for zero downtime:</p>
          <ol>
            <li><strong>Blue Environment (Current):</strong> Currently serving production traffic.</li>
            <li><strong>Green Environment (New):</strong> New version is deployed and tested.</li>
            <li><strong>Health Check:</strong> Green environment is verified to be healthy.</li>
            <li><strong>Traffic Switch:</strong> Load balancer is configured to route traffic to green environment.</li>
            <li><strong>Monitoring:</strong> System is monitored for errors or performance issues.</li>
            <li><strong>Rollback (If Needed):</strong> If issues are detected, traffic is switched back to blue environment.</li>
            <li><strong>Cleanup:</strong> Once stable, blue environment is updated and becomes the new green for next deployment.</li>
          </ol>
          
          <h5>13.2.3 Database Migrations</h5>
          <p>Database schema changes are handled carefully:</p>
          <ul>
            <li><strong>Migration Scripts:</strong> All schema changes are versioned using Flyway or Liquibase.</li>
            <li><strong>Backward Compatibility:</strong> Migrations are designed to be backward compatible when possible.</li>
            <li><strong>Testing:</strong> Migrations are tested on staging database before production.</li>
            <li><strong>Rollback Scripts:</strong> Rollback scripts are prepared in case migration needs to be reversed.</li>
          </ul>
          
          <h4>13.3 Monitoring & Logging</h4>
          <p>Comprehensive monitoring ensures system health:</p>
          
          <h5>13.3.1 Application Monitoring</h5>
          <p>We monitor key metrics:</p>
          <ul>
            <li><strong>Response Times:</strong> API response times are monitored. Alerts are triggered if response times exceed thresholds.</li>
            <li><strong>Error Rates:</strong> Error rates are tracked. Spike in errors triggers immediate alerts.</li>
            <li><strong>Server Resources:</strong> CPU, memory, and disk usage are monitored to prevent resource exhaustion.</li>
            <li><strong>Database Performance:</strong> Database query times and connection pool usage are monitored.</li>
          </ul>
          
          <h5>13.3.2 Logging Strategy</h5>
          <p>Comprehensive logging helps with debugging and auditing:</p>
          <ul>
            <li><strong>Structured Logging:</strong> Logs are structured (JSON format) for easy parsing and analysis.</li>
            <li><strong>Log Levels:</strong> Appropriate log levels (DEBUG, INFO, WARN, ERROR) are used.</li>
            <li><strong>Log Aggregation:</strong> Logs are aggregated in a central system (like ELK stack or CloudWatch) for analysis.</li>
            <li><strong>Log Retention:</strong> Logs are retained for 30-90 days depending on requirements.</li>
            <li><strong>Security Logging:</strong> Security events (login attempts, failed authentications) are logged separately for audit purposes.</li>
          </ul>
          
          <h5>13.3.3 Alerting</h5>
          <p>Alerts are configured for critical issues:</p>
          <ul>
            <li><strong>Server Down:</strong> Immediate alert if server becomes unresponsive.</li>
            <li><strong>High Error Rate:</strong> Alert if error rate exceeds threshold (e.g., 5% of requests).</li>
            <li><strong>Resource Exhaustion:</strong> Alert if CPU, memory, or disk usage exceeds 80%.</li>
            <li><strong>Database Issues:</strong> Alert if database connection pool is exhausted or queries are slow.</li>
            <li><strong>Security Events:</strong> Alert on suspicious activities (multiple failed login attempts, etc.).</li>
          </ul>
          
          <h4>13.4 Backup & Disaster Recovery</h4>
          <p>Regular backups ensure data can be recovered:</p>
          
          <h5>13.4.1 Database Backups</h5>
          <p>Database backups are taken regularly:</p>
          <ul>
            <li><strong>Daily Backups:</strong> Full database backup is taken daily.</li>
            <li><strong>Incremental Backups:</strong> Incremental backups are taken every 6 hours.</li>
            <li><strong>Backup Retention:</strong> Backups are retained for 30 days.</li>
            <li><strong>Backup Testing:</strong> Backups are tested regularly to ensure they can be restored.</li>
            <li><strong>Off-Site Storage:</strong> Backups are stored in a separate location (cloud storage) for disaster recovery.</li>
          </ul>
          
          <h5>13.4.2 Disaster Recovery Plan</h5>
          <p>In case of major disaster:</p>
          <ul>
            <li><strong>Recovery Time Objective (RTO):</strong> System should be restored within 4 hours.</li>
            <li><strong>Recovery Point Objective (RPO):</strong> Maximum data loss should be 1 hour (last incremental backup).</li>
            <li><strong>Failover Procedures:</strong> Detailed procedures for failing over to backup servers.</li>
            <li><strong>Communication Plan:</strong> Plan for communicating with stakeholders during disaster recovery.</li>
          </ul>
        </div>
      )
    },
    {
      title: "XIV. FUTURE SCALABILITY & EXTENSION PLANS",
      content: (
        <div className="section-content">
          <h4>14.1 Built for Growth</h4>
          <p>The platform is architected to support future growth and new features without requiring a complete rebuild. The modular design and clean architecture make it easy to extend functionality.</p>
          
          <h5>14.1.1 Payment Gateway Integration</h5>
          <p>The system is designed to easily integrate payment gateways:</p>
          <ul>
            <li><strong>Payment Service Abstraction:</strong> Payment logic is abstracted into a service layer, making it easy to swap payment providers (Razorpay, Stripe, PayPal, etc.).</li>
            <li><strong>Order Management Ready:</strong> Database schema includes placeholders for order management (order table, order items table) that can be activated when needed.</li>
            <li><strong>Webhook Support:</strong> Infrastructure is ready to handle payment webhooks for order status updates.</li>
            <li><strong>Estimated Integration Time:</strong> 3-5 days to integrate a payment gateway once you're ready.</li>
          </ul>
          
          <h5>14.1.2 Order Management System</h5>
          <p>Order management can be added without backend changes:</p>
          <ul>
            <li><strong>Database Schema:</strong> Order and order item tables are designed and can be activated.</li>
            <li><strong>Order Workflow:</strong> Order states (pending, confirmed, processing, shipped, delivered, cancelled) are predefined.</li>
            <li><strong>Admin Interface:</strong> Admin panel can be extended to include order management interface.</li>
            <li><strong>User Order History:</strong> User dashboard can be extended to show order history.</li>
            <li><strong>Estimated Development Time:</strong> 5-7 days for complete order management system.</li>
          </ul>
          
          <h5>14.1.3 Shipping Integration</h5>
          <p>Shipping can be integrated with popular carriers:</p>
          <ul>
            <li><strong>Shipping API Integration:</strong> Can integrate with shipping providers (Shiprocket, Delhivery, etc.) for automated shipping label generation and tracking.</li>
            <li><strong>Address Management:</strong> User address management is ready to be activated.</li>
            <li><strong>Shipping Calculator:</strong> Shipping cost calculator can be added based on weight, dimensions, and destination.</li>
            <li><strong>Estimated Development Time:</strong> 3-4 days per shipping provider integration.</li>
          </ul>
          
          <h5>14.1.4 Analytics & Reporting</h5>
          <p>Analytics can be added to track business metrics:</p>
          <ul>
            <li><strong>Google Analytics Integration:</strong> Can be integrated for website traffic analysis.</li>
            <li><strong>Custom Analytics Dashboard:</strong> Admin dashboard can be extended with custom analytics (sales, user behavior, popular products, etc.).</li>
            <li><strong>Reporting System:</strong> Automated reports (daily, weekly, monthly) can be generated and emailed to admins.</li>
            <li><strong>Estimated Development Time:</strong> 4-6 days for comprehensive analytics dashboard.</li>
          </ul>
          
          <h5>14.1.5 Multi-Language Support</h5>
          <p>The platform can be extended to support multiple languages:</p>
          <ul>
            <li><strong>Internationalization (i18n):</strong> Frontend is built with i18n in mind. Text content can be externalized to translation files.</li>
            <li><strong>Language Switcher:</strong> Language switcher can be added to allow users to choose their preferred language.</li>
            <li><strong>Admin Translation Interface:</strong> Admin panel can be extended to manage translations.</li>
            <li><strong>Estimated Development Time:</strong> 2-3 days per additional language.</li>
          </ul>
          
          <h5>14.1.6 Mobile App Development</h5>
          <p>The backend APIs are ready to serve mobile apps:</p>
          <ul>
            <li><strong>RESTful APIs:</strong> All backend functionality is exposed through RESTful APIs that can be consumed by mobile apps (iOS, Android).</li>
            <li><strong>Authentication:</strong> JWT-based authentication works seamlessly with mobile apps.</li>
            <li><strong>File Upload:</strong> File upload APIs support mobile app file uploads.</li>
            <li><strong>Push Notifications:</strong> Infrastructure can be extended to support push notifications for mobile apps.</li>
            <li><strong>Estimated Development Time:</strong> Backend is ready; mobile app development would be separate project (typically 4-6 weeks for native apps).</li>
          </ul>
          
          <h4>14.2 Performance Scaling</h4>
          <p>As traffic grows, the system can be scaled:</p>
          
          <h5>14.2.1 Horizontal Scaling</h5>
          <p>More servers can be added to handle increased traffic:</p>
          <ul>
            <li><strong>Stateless Architecture:</strong> The stateless design allows unlimited horizontal scaling.</li>
            <li><strong>Load Balancer:</strong> Load balancer automatically distributes traffic across all available servers.</li>
            <li><strong>Auto-Scaling:</strong> In cloud environments, servers can be added/removed automatically based on traffic patterns.</li>
            <li><strong>Cost Efficiency:</strong> Scale up during peak hours, scale down during off-peak hours to optimize costs.</li>
          </ul>
          
          <h5>14.2.2 Database Scaling</h5>
          <p>Database can be scaled to handle increased load:</p>
          <ul>
            <li><strong>Read Replicas:</strong> Read queries can be distributed across multiple database replicas.</li>
            <li><strong>Connection Pooling:</strong> Connection pools are configured per server instance.</li>
            <li><strong>Query Optimization:</strong> Slow queries are continuously optimized.</li>
            <li><strong>Database Sharding:</strong> For very large scale, database can be sharded (split across multiple databases).</li>
          </ul>
          
          <h5>14.2.3 CDN & Caching</h5>
          <p>CDN and caching reduce server load:</p>
          <ul>
            <li><strong>CDN for Static Assets:</strong> All static assets (images, CSS, JS) are served from CDN, reducing server load.</li>
            <li><strong>Redis Caching:</strong> Frequently accessed data is cached in Redis to reduce database queries.</li>
            <li><strong>Browser Caching:</strong> Appropriate cache headers ensure browsers cache static assets.</li>
          </ul>
          
          <h4>14.3 Technology Upgrades</h4>
          <p>The platform is built with upgradeability in mind:</p>
          <ul>
            <li><strong>Dependency Management:</strong> Dependencies are regularly updated to latest stable versions.</li>
            <li><strong>Framework Upgrades:</strong> Spring Boot and React are upgraded to latest LTS versions as they become available.</li>
            <li><strong>Security Patches:</strong> Security patches are applied promptly to address vulnerabilities.</li>
            <li><strong>Backward Compatibility:</strong> Upgrades are tested to ensure backward compatibility with existing data and functionality.</li>
          </ul>
        </div>
      )
    },
    {
      title: "XV. RISK MANAGEMENT & MITIGATION STRATEGIES",
      content: (
        <div className="section-content">
          <h4>15.1 Identified Risks & Mitigation</h4>
          <p>We've identified potential risks and have mitigation strategies in place:</p>
          
          <h5>15.1.1 Technical Risks</h5>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Impact</th>
                <th>Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Third-party API failures (Google OAuth, WhatsApp)</td>
                <td>High - Users cannot login or receive notifications</td>
                <td>Retry logic with exponential backoff, fallback mechanisms, graceful degradation (OTP as backup for OAuth)</td>
              </tr>
              <tr>
                <td>Database performance degradation</td>
                <td>High - Slow response times, poor user experience</td>
                <td>Query optimization, indexing, connection pooling, read replicas for scaling</td>
              </tr>
              <tr>
                <td>File upload vulnerabilities</td>
                <td>Critical - Security breach, server compromise</td>
                <td>Multiple validation layers, virus scanning, secure storage, file type verification</td>
              </tr>
              <tr>
                <td>High traffic spikes</td>
                <td>High - Server overload, site downtime</td>
                <td>Load balancing, horizontal scaling, CDN, caching, auto-scaling in cloud</td>
              </tr>
              <tr>
                <td>Browser compatibility issues</td>
                <td>Medium - Some users cannot use the site</td>
                <td>Cross-browser testing, polyfills for older browsers, progressive enhancement</td>
              </tr>
            </tbody>
          </table>
          
          <h5>15.1.2 Business Risks</h5>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Impact</th>
                <th>Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Scope creep - Additional features requested</td>
                <td>Medium - Project delay, cost overrun</td>
                <td>Clear scope definition in Phase 1, change request process, additional features quoted separately</td>
              </tr>
              <tr>
                <td>Client feedback delays</td>
                <td>Medium - Project timeline extension</td>
                <td>Clear feedback deadlines, regular check-ins, milestone-based approvals</td>
              </tr>
              <tr>
                <td>Third-party service changes</td>
                <td>Low - Integration breaks, requires updates</td>
                <td>Monitor third-party service updates, version pinning, abstraction layers for easy replacement</td>
              </tr>
            </tbody>
          </table>
          
          <h5>15.1.3 Security Risks</h5>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Impact</th>
                <th>Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SQL Injection attacks</td>
                <td>Critical - Data breach, data loss</td>
                <td>Parameterized queries (JPA), input validation, SQL injection testing</td>
              </tr>
              <tr>
                <td>XSS (Cross-Site Scripting) attacks</td>
                <td>High - User data theft, session hijacking</td>
                <td>Input sanitization, output encoding, Content Security Policy headers</td>
              </tr>
              <tr>
                <td>CSRF (Cross-Site Request Forgery) attacks</td>
                <td>High - Unauthorized actions</td>
                <td>CSRF tokens, SameSite cookies, origin validation</td>
              </tr>
              <tr>
                <td>Authentication bypass</td>
                <td>Critical - Unauthorized access</td>
                <td>Strong authentication (OAuth, OTP), JWT validation, role-based access control</td>
              </tr>
              <tr>
                <td>DDoS attacks</td>
                <td>High - Site unavailability</td>
                <td>Rate limiting, DDoS protection services (Cloudflare), load balancing</td>
              </tr>
            </tbody>
          </table>
          
          <h4>15.2 Contingency Planning</h4>
          <p>We have contingency plans for critical scenarios:</p>
          
          <h5>15.2.1 Server Failure</h5>
          <p>If a server fails:</p>
          <ul>
            <li>Load balancer automatically routes traffic to healthy servers</li>
            <li>Failed server is removed from rotation</li>
            <li>New server instance is provisioned and added to load balancer</li>
            <li>System continues operating with reduced capacity</li>
            <li>Recovery time: Typically under 5 minutes</li>
          </ul>
          
          <h5>15.2.2 Database Failure</h5>
          <p>If database fails:</p>
          <ul>
            <li>Automatic failover to backup database (if configured)</li>
            <li>If no backup database, restore from latest backup</li>
            <li>Recovery time: 1-4 hours depending on backup size</li>
            <li>Maximum data loss: 1 hour (last incremental backup)</li>
          </ul>
          
          <h5>15.2.3 Security Breach</h5>
          <p>If security breach is detected:</p>
          <ul>
            <li>Immediate isolation of affected systems</li>
            <li>All user sessions invalidated (force re-login)</li>
            <li>Security audit to identify breach source</li>
            <li>Patch vulnerabilities</li>
            <li>Notify affected users if personal data was compromised</li>
            <li>Post-incident review and security improvements</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="quote-wrapper">
      <div className="watermark">CODVERTEX</div>
      
      <header className="google-header">
        <div className="nav-brand">
          <span className="brand-c">C</span>
          <span className="brand-o">o</span>
          <span className="brand-d">d</span>
          <span className="brand-v">v</span>
          <span className="brand-e">e</span>
          <span className="brand-r">r</span>
          <span className="brand-t">t</span>
          <span className="brand-e2">e</span>
          <span className="brand-x">x</span>
        </div>
        <div className="client-badge">
          Prepared for: <strong>Sara</strong>
        </div>
      </header>

      <main className="proposal-body">
        <div className="hero-section">
          <h1>Comprehensive Technical Proposal & Detailed Quote</h1>
          <p className="subtitle">Custom E-Commerce Platform for Personalized Product Mockups | Enterprise-Grade Java Spring Boot Backend | React.js Frontend</p>
        </div>

        <div className="accordion-container">
          {sections.map((section, index) => (
            <div key={index} className={`accordion-item ${activeSection === index ? 'open' : ''}`}>
              <div className="accordion-trigger" onClick={() => toggleSection(index)}>
                <h3>{section.title}</h3>
                <span className="icon">{activeSection === index ? '−' : '+'}</span>
              </div>
              <div className="accordion-content">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="final-commitment">
          <h3>The Codvertex Promise & Final Proposal Summary</h3>
          <p>We don't just build websites—we build reliable, scalable business infrastructure. Your platform will be equipped with load-balancing ready code, comprehensive error handling, and a crash-proof architecture. <strong>Hamara code kabhi fatega nahi, ye hamari guarantee hai.</strong> (Our code will never crash, that's our guarantee.)</p>
          
          <h4>What This Project Delivers (Complete Package)</h4>
          <div className="delivery-summary">
            <div className="delivery-item">
              <strong>✓ Custom E-Commerce Platform</strong>
              <p>Fully customized platform built specifically for your business needs, not a generic template.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Personalized Mockup Engine</strong>
              <p>Real-time mockup preview system with fabric selection, design layering, and custom upload capabilities.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Admin Panel & CMS</strong>
              <p>Complete content management system allowing you to manage products, fabrics, designs, and website content without coding.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ WhatsApp Notifications</strong>
              <p>Automated WhatsApp notifications for user logins, mockup creations, and admin alerts.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Secure Authentication</strong>
              <p>Enterprise-grade authentication with Google OAuth and Email OTP, secured with JWT tokens.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Java Spring Boot Backend</strong>
              <p>Scalable, enterprise-grade backend built with Spring Boot, ready for high traffic and horizontal scaling.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Scalable & Future-Ready Architecture</strong>
              <p>Architecture designed to support future features like payments, orders, shipping, analytics, and mobile apps without rewriting the backend.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Load Balancing & Stability</strong>
              <p>Stateless architecture with load balancing configuration ensuring 99.9% uptime and crash-proof reliability.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Complete Ownership</strong>
              <p>100% ownership of source code, database, and all assets. No license lock-in, no vendor dependency.</p>
            </div>
            <div className="delivery-item">
              <strong>✓ Comprehensive Documentation</strong>
              <p>Complete technical documentation, user guides, admin manuals, and API documentation for easy maintenance and future development.</p>
            </div>
          </div>
          
          <div className="investment-highlight">
            <h4>All Within ₹21,000</h4>
            <p>This represents exceptional value for a custom-built, enterprise-grade platform. Comparable projects typically cost ₹1,00,000+ in the market. We're able to offer this price because we've optimized our development process and are focusing on your specific niche.</p>
            <p><strong>This is not just a website—it's a business asset that will grow with you.</strong></p>
          </div>
        </div>
      </main>

      <footer className="google-footer">
        <p>Codvertex &copy; 2026 | Private & Confidential Proposal | Prepared for Sara</p>
      </footer>
    </div>
  );
};

export default QuotePage;
