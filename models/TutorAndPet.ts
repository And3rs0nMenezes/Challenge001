import { model, Schema } from 'mongoose';

const petSchema = new Schema(
  {
    name: { type: String },
    species:{type:String},
    carry:{type: String},
    weight: { type: String },
    date_of_birth: { type: String }
  },
  {
    timestamps: true
  }
)

const tutorSchema = new Schema(
  {
    name: { type: String },
    password: { type: String },
    phone: { type: String },
    email: { type: String },
    date_of_birth: { type: String },
    zip_code: { type: String },
    pets: {
      type:[petSchema]
    }
  },
  {
    timestamps: true
  }
);
export const PetModel = model("Pet", petSchema);
export const TutorModel = model("Tutor", tutorSchema);
