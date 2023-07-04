import { model, Schema } from 'mongoose';
const bcrypt = require('bcrypt');

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
    email: { type: String ,
    unique: true},
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

tutorSchema.pre("save",async function (next){
  this.password = await bcrypt.hash(this.password,10);
  next();
  
  });

export const PetModel = model("Pet", petSchema);
export const TutorModel = model("Tutor", tutorSchema);
