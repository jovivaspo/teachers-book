import { Schema, models, model } from 'mongoose'

const noteSchema = new Schema({
    type: {
        type: String,
        required: [true, "Type of note is requerid: events, task..."]
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required:true
    },
    description: {
        type: String,
        required: [true, "Type of note is requerid: events, task..."],
        trim:true
    }
}, {
    timestamps: true,
    versionKey: false
}
)

export default models.Note || model("Note", noteSchema)