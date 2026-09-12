/**
 * GIG-SAATHI — React Component: WorkerCard
 * Team TECH TITANS | SIH 2026 | Problem SIH26089
 *
 * TODO: Replace index.html .worker-card with this dynamic React Component.
 *
 * INTEGRATION POINT: Worker data fetched from GET /api/workers via React Query.
 * INTEGRATION POINT: Fetch verification status from e-Shram API (via backend proxy).
 * INTEGRATION POINT: Real-time availability from Redis cache via WebSocket.
 *
 * Props:
 *   worker  {object}  — Worker object from API response
 *   onView  {fn}      — Navigate to worker profile
 */

import React from 'react';
import VerificationBadge from './VerificationBadge';

const WorkerCard = ({ worker, onView }) => {
  // TODO: Implement full WorkerCard JSX — see index.html .worker-card for reference UI
  return (
    <div className="worker-card" onClick={() => onView(worker.id)}>
      <h3>{worker.name}</h3>
      <p>{worker.skill}</p>
      <VerificationBadge verified={worker.isVerified} />
      <span>₹{worker.price} starting</span>
      <button onClick={() => onView(worker.id)}>View Profile</button>
    </div>
  );
};

export default WorkerCard;
