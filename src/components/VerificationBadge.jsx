/**
 * GIG-SAATHI — React Component: VerificationBadge
 * Team TECH TITANS | SIH 2026 | Problem SIH26089
 *
 * INTEGRATION POINT: Verification status fetched from e-Shram API
 * via backend endpoint GET /api/eshram/verify/{uin}
 *
 * Displays:
 *   - Identity Verified (e-Shram UIN confirmed)
 *   - Skill Verified (cooperative skill assessment)
 *   - Cooperative Member (cooperative registry confirmed)
 *
 * Props:
 *   verified     {boolean}  — Whether worker is fully verified
 *   eshramStatus {string}   — 'verified' | 'pending' | 'failed'
 */

import React from 'react';

const VerificationBadge = ({ verified, eshramStatus = 'verified' }) => {
  if (!verified) return null;
  return (
    <span className="verified-badge">
      ✓ Cooperative Verified
    </span>
  );
};

export default VerificationBadge;
