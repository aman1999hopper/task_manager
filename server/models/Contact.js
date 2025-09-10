import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
            maxlength: 1000,
            minlength: 10,
            trim: true,
        },
    },
    { timestamps: true }
);  

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;