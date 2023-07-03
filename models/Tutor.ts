import mongoose from "mongoose";

// Schema for the pet
const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  carry: String,
  weight: Number,
});

// Schema for the person
const tutorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date_of_birth: Date,
  zip_code: String,
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }],
});

const Tutor = mongoose.model('Person', tutorSchema);
const Pet = mongoose.model('Pet', petSchema);

module.exports = {
  Tutor,
  Pet,
};
