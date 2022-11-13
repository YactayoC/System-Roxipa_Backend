import mongoose, { Schema, model, Model } from 'mongoose';
import { IClient } from '../interfaces';

const clientSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    direction: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    dni: {
      type: Number,
      unique: true,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Client: Model<IClient> = mongoose.models.Client || model('client', clientSchema);
export default Client;
