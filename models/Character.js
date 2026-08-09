const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    house: {
      type: String,
      enum: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", "Ninguna"],
      required: true,
    },
    role: { type: String, required: true },
    patronus: { type: String, default: "Desconocido" },
    isStudent: { type: Boolean, required: true },
    isAlive: { type: String, required: true, default: "Desconocido" },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
