// EventForm.js

import React, { useState } from 'react';

const EventForm = ({ onEventSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs (you can add more validation logic)
    if (!title || !description || !imageSource || !date || !time || !venue) {
      alert('Please fill in all fields');
      return;
    }

    // Create an event object with the form data
    const newEvent = {
      title,
      description,
      imageSource,
      date,
      time,
      venue,
    };

    // Call the onEventSubmit callback to handle the submitted event
    onEventSubmit(newEvent);

    // Clear the form fields after submission
    setTitle('');
    setDescription('');
    setImageSource('');
    setDate('');
    setTime('');
    setVenue('');
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image Source:
          <input
            type="text"
            value={imageSource}
            onChange={(e) => setImageSource(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Venue:
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
