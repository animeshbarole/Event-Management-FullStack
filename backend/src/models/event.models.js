const mongoose = require('mongoose');

// Define the Mongoose schema for an event
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // This should match the model name you defined for users
    required: true,
  },

});

// Create a Mongoose model for the event using the schema
const Event = mongoose.model('Events', eventSchema);

// Export the Event model
module.exports = Event;