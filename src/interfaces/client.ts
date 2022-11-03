import mongoose from "mongoose";

export interface IClient {
    _id: string;
    fullname: string;
    direction: string;
    phone: string;
    dni: number;
    user: mongoose.Types.ObjectId;
}