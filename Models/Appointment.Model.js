import mongoose,{Schema} from 'mongoose';

const AppointmentSchema = new Schema({
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    report:[{
        type:Schema.Types.ObjectId,
        ref:'Report'
    }],
});

const Appointment = mongoose.model('Appointment',AppointmentSchema);