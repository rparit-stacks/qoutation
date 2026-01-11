import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"

const CheckpointTracker = () => {
  // eslint-disable-next-line no-unused-vars
  const [paymentData, setPaymentData] = useState({
    totalAmount: 21000,
    paidAmount: 0,
    currentRequested: 1000,
    currentCheckpoint: 1,
    upiId: "9810167696@indie",
  })

  const [showQRCode, setShowQRCode] = useState(false)
  const [expandedCheckpoints, setExpandedCheckpoints] = useState(new Set())
  
  // Track completed sub-checkpoints - You can modify this from code to mark items as completed
  // Format: "checkpointId-subCheckpointIdx-itemIdx"
  // Example: "1-0-0" means Checkpoint 1, Sub-checkpoint 0, Item 0
  const [completedItems, setCompletedItems] = useState(new Set([
    // Add completed items here, for example:
    // "1-0-0", // Checkpoint 1, Sub-checkpoint 0, Item 0
    // "1-0-1", // Checkpoint 1, Sub-checkpoint 0, Item 1
  ]))
  
  // Developer notes
  const [developerNotes, setDeveloperNotes] = useState("")

  const checkpoints = [
    {
      id: 1,
      title: "Planning & System Design",
      payment: 1000,
      duration: "1 Day",
      status: "pending",
      deliverables: [
        "Complete technical blueprint document",
        "Database ER diagram",
        "API structure documentation",
        "UI wireframes for all pages",
        "Final scope lock document",
        "Project repository initialized",
      ],
      subCheckpoints: [
        {
          title: "1.1 Requirement Finalization & Kickoff",
          items: [
            "Conduct kickoff meeting with client",
            "Finalize all modules and features confirmation",
            "Document mockup engine logic and user flows",
            "Confirm technology stack (Spring Boot, React, Database choice)",
            "Define UI/UX design approach (Google-like minimalist)",
            "Finalize scope lock document (no changes after this without additional cost)",
          ],
        },
        {
          title: "1.2 Database Schema Design",
          items: [
            "Design all database tables (User, Product, Category, Fabric, Design, CustomDesign, Mockup)",
            "Define all foreign key relationships",
            "Create indexing strategy for frequently queried columns",
            "Generate ER diagram documentation",
          ],
        },
        {
          title: "1.3 API Structure Design",
          items: [
            "Design all API endpoints (authentication, products, mockup, admin)",
            "Define request/response formats for all endpoints",
            "Define error response structure",
            "Create API versioning strategy (/api/v1/)",
            "Document authentication and authorization requirements",
          ],
        },
        {
          title: "1.4 UI/UX Flow Planning",
          items: [
            "Create wireframes for all major pages (landing, product, mockup, admin)",
            "Define user journey maps",
            "Plan responsive breakpoints (mobile, tablet, desktop)",
          ],
        },
        {
          title: "1.5 Technical Blueprint Documentation",
          items: [
            "Document system architecture (layered architecture)",
            "Document frontend architecture (React component structure)",
            "Document backend architecture (Controller, Service, Repository layers)",
            "Document mockup engine technical approach (Canvas API, layering algorithms)",
            "Create technical blueprint document",
          ],
        },
        {
          title: "1.6 Project Setup",
          items: [
            "Initialize Git repository",
            "Set up project structure (frontend and backend folders)",
            "Configure development environment",
            "Set up code quality tools and build tools",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Frontend Development & UI Implementation",
      payment: 7000,
      duration: "3 Days (2 dev + 1 review)",
      status: "pending",
      deliverables: [
        "Fully functional frontend with all pages",
        "Responsive layouts tested on multiple devices",
        "Performance-optimized UI",
        "Accessible design with proper ARIA labels",
        "Cross-browser compatible",
        "All UI components ready for backend integration",
      ],
      subCheckpoints: [
        {
          title: "2.1 Core Pages Development",
          items: [
            "Create landing page with hero section, featured products, navigation",
            "Create category and product listing pages with pagination",
            "Create product detail page with fabric/design selectors",
            "Create mockup customization page UI (canvas container placeholder)",
            "Create authentication pages (login, OTP entry)",
            "Create admin dashboard layout",
            "Create admin product management interface",
            "Create admin fabric/design management interface",
            "Create CMS editor interface",
          ],
        },
        {
          title: "2.2 Reusable Components",
          items: [
            "Create Header, Footer, Button, Input components",
            "Create Modal, Loading Spinner, Error Message components",
            "Create Image component with lazy loading",
            "Create Pagination component",
          ],
        },
        {
          title: "2.3 Responsive Design & Performance",
          items: [
            "Implement responsive design (mobile, tablet, desktop)",
            "Implement code splitting and lazy loading",
            "Optimize bundle size and images",
            "Add ARIA labels and SEO meta tags",
            "Test cross-browser compatibility",
          ],
        },
        {
          title: "2.4 Frontend Review (Day 3)",
          items: [
            "Review all frontend pages and components",
            "Test responsive design on multiple devices",
            "Verify performance metrics",
            "Fix any identified issues",
            "Get client feedback and approval",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Backend Development & Mockup Engine",
      payment: 10000,
      duration: "7-10 Days (4-7 dev + 1 review + 2 corrections)",
      status: "pending",
      deliverables: [
        "Complete backend APIs (all endpoints functional)",
        "Authentication system (Google OAuth + Email OTP)",
        "Fully working mockup engine with real-time preview",
        "Custom design upload functionality",
        "Admin panel backend integration",
        "Database integration with all tables",
        "Frontend-backend integration complete",
        "API documentation (Swagger)",
      ],
      subCheckpoints: [
        {
          title: "3.1 Backend Project Setup & Database",
          items: [
            "Initialize Spring Boot project and configure structure",
            "Set up database connection and JPA/Hibernate",
            "Create all Entity classes (User, Product, Category, Fabric, Design, CustomDesign, Mockup)",
            "Create Repository interfaces with custom queries",
            "Create database migration scripts",
            "Set up connection pooling and indexes",
          ],
        },
        {
          title: "3.2 DTO & Service Layer",
          items: [
            "Create DTO classes for all entities",
            "Set up MapStruct for entity-DTO mapping",
            "Create all Service classes (User, Product, Category, Fabric, Design, Mockup)",
            "Implement transaction management and business logic",
            "Write unit tests for services",
          ],
        },
        {
          title: "3.3 Authentication System",
          items: [
            "Set up Google OAuth 2.0 configuration",
            "Implement Google OAuth token validation and user creation",
            "Implement JWT token generation and validation",
            "Create JWT filter for request authentication",
            "Implement OTP generation, hashing, and verification",
            "Set up email service and OTP delivery",
            "Implement rate limiting for OTP requests",
            "Create authentication controller endpoints",
            "Test authentication flows",
          ],
        },
        {
          title: "3.4 Product & Mockup APIs",
          items: [
            "Create ProductController with categories and products endpoints",
            "Create FabricController and DesignController",
            "Create file upload system with validation and security",
            "Create MockupController with save/retrieve endpoints",
            "Test all product and mockup endpoints",
          ],
        },
        {
          title: "3.5 Admin APIs",
          items: [
            "Create AdminProductController with CRUD operations",
            "Create AdminFabricController and AdminDesignController",
            "Create AdminCMSController for content management",
            "Implement role-based access control (admin only)",
            "Test all admin endpoints",
          ],
        },
        {
          title: "3.6 Security & Error Handling",
          items: [
            "Implement input validation and SQL injection prevention",
            "Implement XSS prevention and CSRF protection",
            "Set up CORS configuration and rate limiting",
            "Create global exception handler",
            "Implement structured logging",
            "Test security measures",
          ],
        },
        {
          title: "3.7 Mockup Engine Development (Frontend)",
          items: [
            "Set up HTML5 Canvas API integration",
            "Implement blank fabric loading and preloading",
            "Implement fabric selection and texture replacement",
            "Implement design image loading and positioning",
            "Implement transparency handling (alpha channel blending)",
            "Implement design scaling algorithms (maintain aspect ratio)",
            "Implement real-time preview rendering",
            "Implement Web Workers for non-blocking rendering",
            "Add fallback mechanism for failed image loads",
            "Optimize rendering performance (target: <100ms update time)",
          ],
        },
        {
          title: "3.8 Custom Design Upload Integration",
          items: [
            "Integrate file upload with mockup engine",
            "Implement frontend file validation and progress display",
            "Implement uploaded design application to canvas",
            "Handle upload errors gracefully",
            "Test custom design upload flow",
          ],
        },
        {
          title: "3.9 Frontend-Backend Integration",
          items: [
            "Integrate authentication APIs with frontend",
            "Integrate product, fabric, and design APIs",
            "Integrate file upload and mockup save APIs",
            "Integrate admin panel APIs",
            "Implement API error handling and loading states",
            "Test complete user flows",
          ],
        },
        {
          title: "3.10 API Documentation",
          items: [
            "Set up Swagger/OpenAPI",
            "Add API documentation annotations",
            "Generate interactive API documentation",
          ],
        },
        {
          title: "3.11 Backend Review (Day 8 or 9)",
          items: [
            "Review all backend APIs and functionality",
            "Test authentication flows",
            "Test mockup engine performance",
            "Test admin panel functionality",
            "Identify issues and create correction list",
          ],
        },
        {
          title: "3.12 Corrections & Fixes (Days 9-10)",
          items: [
            "Fix identified issues from review",
            "Optimize performance bottlenecks",
            "Fix any bugs or errors",
            "Re-test all functionality",
            "Final verification of backend and mockup engine",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Client Handover & Training",
      payment: 3000,
      duration: "1 Week (7 Days)",
      status: "pending",
      deliverables: [
        "Live production-ready platform (if deployed)",
        "Complete documentation (user guide, admin guide, API docs, technical docs)",
        "Source code repository access",
        "Fully trained client on all platform features",
        "Client sign-off on final delivery",
        "30-day free support period begins",
      ],
      subCheckpoints: [
        {
          title: "4.1 Final Integration & Testing",
          items: [
            "Integrate WhatsApp notifications (if applicable)",
            "Perform final functional testing",
            "Test complete user journey",
            "Test admin panel functionality",
            "Fix any remaining issues",
          ],
        },
        {
          title: "4.2 Production Setup (If Required)",
          items: [
            "Set up production servers (if deployment needed)",
            "Configure production database",
            "Set up SSL certificates and domain",
            "Deploy application to production",
            "Test production deployment",
          ],
        },
        {
          title: "4.3 Documentation Preparation",
          items: [
            "Create user guide (how to use the platform)",
            "Create admin manual (how to manage content)",
            "Complete technical documentation",
            "Update API documentation",
            "Create deployment guide (if applicable)",
          ],
        },
        {
          title: "4.4 Source Code Organization",
          items: [
            "Organize Git repository",
            "Ensure all code is committed and documented",
            "Create comprehensive README files",
            "Document build and run instructions",
            "Prepare code for handover",
          ],
        },
        {
          title: "4.5 Client Training Sessions (Main Focus - 1 Week)",
          items: [
            "Day 1: Platform overview and navigation training",
            "Day 2: Product management training (add, edit, delete products)",
            "Day 3: Fabric and design management training",
            "Day 4: CMS content editing training",
            "Day 5: User management and admin dashboard training",
            "Day 6: Mockup creation process training",
            "Day 7: Q&A session, final walkthrough, and sign-off",
          ],
        },
        {
          title: "4.6 Finalization with Client",
          items: [
            "Sit with client to finalize all features",
            "Address any client concerns or questions",
            "Make any final adjustments based on client feedback",
            "Ensure client is comfortable with all features",
            "Get client sign-off on final delivery",
          ],
        },
        {
          title: "4.7 Handover",
          items: [
            "Provide Git repository access to client",
            "Hand over all documentation",
            "Provide access credentials (if applicable)",
            "Confirm 30-day free support period begins",
            "Final project closure",
          ],
        },
      ],
    },
  ]

  const toggleCheckpoint = (id) => {
    const newSet = new Set(expandedCheckpoints)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setExpandedCheckpoints(newSet)
  }

  const toggleItemCompletion = (checkpointId, subCheckpointIdx, itemIdx) => {
    const itemKey = `${checkpointId}-${subCheckpointIdx}-${itemIdx}`
    const newSet = new Set(completedItems)
    if (newSet.has(itemKey)) {
      newSet.delete(itemKey)
    } else {
      newSet.add(itemKey)
    }
    setCompletedItems(newSet)
  }

  const isItemCompleted = (checkpointId, subCheckpointIdx, itemIdx) => {
    const itemKey = `${checkpointId}-${subCheckpointIdx}-${itemIdx}`
    return completedItems.has(itemKey)
  }

  const handlePaymentClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      const upiUrl = `upi://pay?pa=${paymentData.upiId}&pn=Codvertex&am=${paymentData.currentRequested}&cu=INR`
      window.location.href = upiUrl
    } else {
      setShowQRCode(true)
    }
  }

  const generateQRCodeData = () => {
    // UPI payment URL format
    const upiUrl = `upi://pay?pa=${paymentData.upiId}&pn=Codvertex&am=${paymentData.currentRequested}&cu=INR`
    // Use QuickChart.io for QR code generation
    return `https://quickchart.io/qr?text=${encodeURIComponent(upiUrl)}&size=300`
  }

  const remainingAmount = paymentData.totalAmount - paymentData.paidAmount
  const progressPercentage = (paymentData.paidAmount / paymentData.totalAmount) * 100

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Progress Tracker</h1>
          <p className="text-gray-600">Custom E-Commerce Platform Development</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Payment Summary Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Project Amount</p>
              <p className="text-2xl font-semibold text-gray-900">₹{paymentData.totalAmount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Amount Paid</p>
              <p className="text-2xl font-semibold text-green-600">₹{paymentData.paidAmount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Remaining</p>
              <p className="text-2xl font-semibold text-gray-900">₹{remainingAmount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Current Payment</p>
              <p className="text-2xl font-semibold text-blue-600">₹{paymentData.currentRequested.toLocaleString()}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">Progress</p>
              <p className="text-sm text-gray-600">{progressPercentage.toFixed(1)}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={handlePaymentClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Pay ₹{paymentData.currentRequested.toLocaleString()}
          </button>
        </div>

        {/* QR Code Modal */}
        {showQRCode && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowQRCode(false)}
          >
            <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Scan QR Code to Pay</h3>
              <div className="mb-6 flex justify-center">
                <img src={generateQRCodeData()} alt="UPI QR Code" className="w-64 h-64" />
              </div>
              <p className="text-sm text-gray-600 text-center mb-2">
                Scan this QR code with any UPI app to pay ₹{paymentData.currentRequested.toLocaleString()}
              </p>
              <p className="text-sm text-gray-700 text-center font-medium mb-6">UPI ID: {paymentData.upiId}</p>
              <button
                onClick={() => setShowQRCode(false)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Checkpoints */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Checkpoints</h2>
          {checkpoints.map((checkpoint) => (
            <div
              key={checkpoint.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Checkpoint Header */}
              <button
                onClick={() => toggleCheckpoint(checkpoint.id)}
                className="w-full px-6 py-5 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    {checkpoint.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{checkpoint.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-600">⏱ {checkpoint.duration}</span>
                      <span className="text-sm text-gray-600">💰 ₹{checkpoint.payment.toLocaleString()}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          checkpoint.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : checkpoint.status === "in_progress"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {checkpoint.status.replace("_", " ").toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${expandedCheckpoints.has(checkpoint.id) ? "rotate-180" : ""}`}
                />
              </button>

              {/* Checkpoint Details */}
              {expandedCheckpoints.has(checkpoint.id) && (
                <div className="border-t border-gray-200 px-6 py-6 bg-gray-50">
                  {/* Deliverables */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Deliverables</h4>
                    <ul className="space-y-2">
                      {checkpoint.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sub-Checkpoints */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Sub-Checkpoints
                    </h4>
                    <div className="space-y-6">
                      {checkpoint.subCheckpoints.map((subCheckpoint, idx) => (
                        <div key={idx}>
                          <h5 className="text-sm font-medium text-gray-900 mb-3">{subCheckpoint.title}</h5>
                          <ul className="space-y-2 ml-4">
                            {subCheckpoint.items.map((item, itemIdx) => {
                              const isCompleted = isItemCompleted(checkpoint.id, idx, itemIdx)
                              return (
                                <li key={itemIdx} className="flex items-start gap-2">
                                  <button
                                    onClick={() => toggleItemCompletion(checkpoint.id, idx, itemIdx)}
                                    className={`mt-1 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                      isCompleted
                                        ? "bg-green-600 border-green-600"
                                        : "bg-white border-gray-300 hover:border-green-500"
                                    }`}
                                  >
                                    {isCompleted && <Check className="w-3 h-3 text-white" />}
                                  </button>
                                  <span
                                    className={`text-sm flex-1 ${
                                      isCompleted ? "text-gray-400 line-through" : "text-gray-600"
                                    }`}
                                  >
                                    {item}
                                  </span>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Developer Notes Section */}
        <div className="mt-12 border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Developer Notes</h2>
          <textarea
            value={developerNotes}
            onChange={(e) => setDeveloperNotes(e.target.value)}
            placeholder="Add your development notes, progress updates, issues, or reminders here..."
            className="w-full min-h-[150px] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
          />
          <p className="text-xs text-gray-500 mt-2">
            Notes are saved in browser session. To mark items as completed, edit the <code className="bg-gray-100 px-1 rounded">completedItems</code> state in the code.
          </p>
        </div>

        {/* Project Summary */}
        <div className="mt-8 border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Duration</p>
              <p className="text-lg font-semibold text-gray-900">18-21 Days</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Technology Stack</p>
              <p className="text-lg font-semibold text-gray-900">Java Spring Boot, React.js</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Current Checkpoint</p>
              <p className="text-lg font-semibold text-gray-900">Checkpoint {paymentData.currentCheckpoint}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Payment Progress</p>
              <p className="text-lg font-semibold text-gray-900">{progressPercentage.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CheckpointTracker
