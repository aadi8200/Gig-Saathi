/**
 * GIG-SAATHI — React Component: BookingModal
 * Team TECH TITANS | SIH 2026 | Problem SIH26089
 *
 * TODO: Replace index.html #booking-modal with this dynamic React Component.
 *
 * INTEGRATION POINT: On confirm booking → POST /api/bookings
 * INTEGRATION POINT: Push booking data to PostgreSQL via FastAPI
 * INTEGRATION POINT: Trigger SMS notification to worker via MSG91 (via Celery task)
 * INTEGRATION POINT: Create booking entry in PostgreSQL bookings table
 *
 * Props:
 *   isOpen    {boolean}  — Modal visibility
 *   onClose   {fn}       — Close handler
 *   worker    {object}   — Selected worker object
 *   onSuccess {fn}       — Called with booking ID on success
 */

import React, { useState } from 'react';
// import { useMutation } from '@tanstack/react-query';
// import { createBooking } from '../api/bookings';

const BookingModal = ({ isOpen, onClose, worker, onSuccess }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  const handleConfirm = async () => {
    // TODO: Replace with React Query mutation
    // INTEGRATION POINT: POST /api/bookings with worker id, date, time, address
    // const result = await createBooking({ workerId: worker.id, date, time, address });
    // onSuccess(result.bookingId);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* TODO: Implement full BookingModal JSX — see index.html #booking-modal for reference UI */}
      <div className="modal">
        <h2>Book {worker?.name}</h2>
        <button onClick={handleConfirm}>Confirm Booking</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BookingModal;
