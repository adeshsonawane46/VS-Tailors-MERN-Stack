const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
trim: true,
},

email: {
  type: String,
  required: true,
  trim: true,
  lowercase: true,
},

contact: {
  type: String,
  required: true,
  trim: true,
},

service: {
  type: String,
  required: true,
  trim: true,
},

customService: {
  type: String,
  trim: true,
},

quantity: {
  type: Number,
  required: true,
  min: 1,
},

notes: {
  type: String,
  trim: true,
},

},
{
timestamps: true,
}
);

module.exports = mongoose.model("Appointment", appointmentSchema);
