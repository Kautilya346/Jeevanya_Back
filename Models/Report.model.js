import mongoose,{Schema} from 'mongoose';

const ReportSchema = new Schema({
    patient:{
        type:Schema.Types.ObjectId,
        ref:'Patient',
        required:true
    },
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    dignosis:{
        type:String,
        required:true
    },
    date_of_creation:{
        type:Date,
        required:true
    },
    medications:[{
        type:String,
    }],
    suggestions:{
        type:String,
    },
    status:{
        type:String,
        required:true
    }
});

export const Report = mongoose.model('Report',ReportSchema);