# GIG-SAATHI — Cooperative Gig Services Platform

> **Smart India Hackathon 2026 | Problem ID: SIH26089**

---

## Team: TECH TITANS

## Problem Statement

**SIH26089 — Cooperative Gig Services Platform For Household & Community Services**

Millions of skilled workers in India — electricians, plumbers, cleaners, carpenters — rely on unregulated middlemen who take excessive commissions, offer no welfare, and leave both workers and customers without recourse.

---

## Solution: GIG-SAATHI (Zero-Exploitation Model)

**GIG-SAATHI** connects households and institutions **directly** with verified cooperative workers — eliminating middlemen, ensuring fair wages, and building stronger local cooperative ecosystems.

### Core Pillars

- 🔍 **Worker Discovery** — Location-based search with skill filters and verified profiles
- ✅ **Cooperative Verification** — Workers verified through cooperative membership + e-Shram linkage
- 📅 **Booking & Scheduling** — End-to-end digital booking with confirmation and tracking
- 💳 **Digital Payment** — UPI/Card/Cash with automatic digital invoicing
- 🗺️ **SOS & Tracking** — Real-time worker tracking with emergency assistance mode
- 🧑‍💼 **Worker Dashboard** — Job management, earnings tracking, and welfare access
- 🏛️ **Federation Dashboard** — Cooperative-level analytics, demand mapping, worker allocation
- 🌐 **Multilingual** — Hindi/English with extensible i18n support

---

## Architecture & Technology Stack

> **As planned and presented in our SIH 2026 PPT submission.**

### Frontend
| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI framework |
| **Tailwind CSS** | Utility-first styling system |
| **React Router v6** | Client-side navigation and routing |
| **Lucide React** | Consistent icon system |
| **React Query** | Server-state management and API caching |
| **Zustand** | Lightweight client-state management |

### Backend
| Technology | Purpose |
|---|---|
| **Python 3.11+** | Primary backend language |
| **FastAPI** | High-performance REST API framework |
| **PostgreSQL 15** | Relational database (workers, bookings, transactions) |
| **Redis** | Caching layer for real-time worker availability |
| **Celery** | Async task queue (notifications, invoicing) |
| **JWT (PyJWT)** | Authentication and session tokens |

### Integrations
| Integration | Purpose |
|---|---|
| **e-Shram API** | Worker identity and registration verification |
| **UMANG API** | Government welfare scheme eligibility check |
| **PM-SYM** | Pradhan Mantri Shram Yogi Maan-dhan pension linkage |
| **Google Maps Platform** | Location-based worker discovery and routing |
| **Razorpay / UPI** | Payment gateway integration |
| **MSG91 / Twilio** | SMS and IVR notifications |
| **Firebase FCM** | Push notifications for mobile app |

### DevOps & Infrastructure (Planned)
| Technology | Purpose |
|---|---|
| **Docker + Docker Compose** | Containerised local and staging environments |
| **AWS EC2 / Lightsail** | Production deployment |
| **AWS RDS** | Managed PostgreSQL hosting |
| **Nginx** | Reverse proxy and static file serving |
| **GitHub Actions** | CI/CD pipeline |

---

## System Architecture Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                            │
│  React.js + Tailwind CSS (Web)  │  React Native (Mobile - planned) │
└─────────────────────┬──────────────────────────────────────────┘
                      │ HTTPS / REST API
┌─────────────────────▼──────────────────────────────────────────┐
│                     API GATEWAY (FastAPI)                       │
│   /auth   /workers   /bookings   /payments   /federation       │
└──────┬─────────┬──────────┬────────────┬───────────────────────┘
       │         │          │            │
┌──────▼──┐ ┌───▼────┐ ┌───▼────┐ ┌────▼──────┐
│PostgreSQL│ │  Redis  │ │Celery  │ │ External  │
│(Primary  │ │(Cache + │ │(Async  │ │   APIs    │
│   DB)   │ │  Queue) │ │ Tasks) │ │ e-Shram   │
└─────────┘ └────────┘ └────────┘ │ Maps API  │
                                   │ Razorpay  │
                                   └───────────┘
```

---

## Repository Structure

```
gig-saathi/
│
├── index.html                  ← HIGH-FIDELITY UI PROTOTYPE (see note below)
├── README.md
├── package.json                ← Frontend dependency manifest
│
├── assets/
│   └── images/                 ← Static image assets
│
├── src/                        ← React.js source (planned full implementation)
│   └── components/             ← Reusable UI components
│       ├── Navbar.jsx
│       ├── WorkerCard.jsx
│       ├── BookingModal.jsx
│       ├── PaymentModal.jsx
│       ├── TrackingView.jsx
│       ├── WorkerDashboard.jsx
│       ├── FederationDashboard.jsx
│       └── VerificationBadge.jsx
│
└── backend/                    ← Python/FastAPI backend (planned full implementation)
    ├── requirements.txt        ← Python dependency manifest
    └── api/
        ├── main.py             ← FastAPI application entrypoint
        ├── workers.py          ← Worker CRUD endpoints
        ├── bookings.py         ← Booking management endpoints
        ├── payments.py         ← Payment processing endpoints
        ├── auth.py             ← Authentication & JWT
        └── integrations/
            ├── eshram.py       ← e-Shram API integration
            ├── maps.py         ← Google Maps integration
            └── welfare.py      ← UMANG/PM-SYM welfare API
```

---

## ⚠️ Important Note: Prototype vs. Full Implementation

> **This repository currently holds the High-Fidelity Interactive UI Prototype** built with **Vanilla HTML / CSS / JavaScript** for the SIH 2026 hackathon demonstration.

### Why a Vanilla HTML Prototype?

The prototype was deliberately built as a **single self-contained file** (`index.html`) to:
1. Enable **instant demo** without any build pipeline or server setup
2. Allow judges to open and interact with the prototype on **any device** — phone, tablet, or laptop — by simply double-clicking the file
3. Focus development time on **UX quality and interaction design** rather than build infrastructure
4. Demonstrate the **complete user journey** end-to-end with realistic mock data

### What the Prototype Demonstrates
- ✅ Complete customer booking flow (Search → Profile → Book → Pay → Track)
- ✅ Worker dashboard with interactive job management (Accept → Start → Complete)
- ✅ Federation analytics dashboard with charts and worker directory
- ✅ Simulated payment (UPI/Card/Cash) with digital invoice generation
- ✅ SOS emergency assistance simulation
- ✅ Hindi/English multilingual toggle
- ✅ Fully responsive mobile-first design

### Full React + FastAPI implementation would replace:
- Mock data arrays → **PostgreSQL database** (via FastAPI endpoints)
- Simulated payment → **Razorpay / UPI API**
- Simulated tracking → **Google Maps Real-time API**
- Simulated SOS → **SMS gateway + emergency contacts**
- Worker verification badge → **e-Shram API** verification status
- Language toggle → **i18next** full translation system

---

## Running the Prototype

```bash
# No build step required — simply open in browser:
open index.html
# OR double-click index.html in File Explorer
```

## Running the Full Stack (Planned)

```bash
# Frontend
npm install
npm run dev

# Backend
cd backend
pip install -r requirements.txt
uvicorn api.main:app --reload --port 8000
```

---

## API Endpoints (Planned — FastAPI)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/workers` | List workers with filters |
| `GET` | `/api/workers/{id}` | Worker profile + verification status |
| `POST` | `/api/bookings` | Create a new booking |
| `GET` | `/api/bookings/{id}` | Booking details |
| `POST` | `/api/payments/initiate` | Initiate payment session |
| `POST` | `/api/payments/verify` | Verify payment callback |
| `GET` | `/api/federation/overview` | Federation analytics overview |
| `GET` | `/api/federation/workers` | Federation worker directory |
| `GET` | `/api/eshram/verify/{uin}` | Verify worker via e-Shram UIN |

---

## Key Differentiators from Existing Platforms

| Feature | GIG-SAATHI | UrbanCompany / Others |
|---|---|---|
| Middleman | ❌ Zero middlemen | ✅ Platform takes 20–30% |
| Worker ownership | ✅ Cooperative-owned | ❌ Platform-owned |
| Welfare linkage | ✅ PM-SYM, ESIC, e-Shram | ❌ None |
| Federation oversight | ✅ Cooperative federation dashboard | ❌ None |
| Pricing | ✅ Worker-set fair wages | ❌ Platform-controlled |
| IVR/Offline | ✅ Planned IVR for feature phones | ❌ None |

---

## License

This project is developed for **Smart India Hackathon 2026** by Team TECH TITANS.
All rights reserved. Not for commercial distribution.

---

*"Fair work. Trusted services. Stronger cooperatives."*
