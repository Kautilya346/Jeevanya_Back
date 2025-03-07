import mongoose,{Schema} from 'mongoose';

const PatientSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    emergency_contact:{
        type:String,
    },
    address:{
        type:String,
        required:true
    },
    blood_group:{
        type:String,
        required:true
    },
    allergies:[{
        type:String,
    }],
    medications:[{
        type:String,
    }],
    appointments:[{
        type:Schema.Types.ObjectId,
        ref:'Appointment'
    }],
    reports:[{
        type:Schema.Types.ObjectId,
        ref:'Report'
    }],
    prescriptions:[{
        type:Schema.Types.ObjectId,
        ref:'Prescription'
    }],
});

const Patient = mongoose.model('Patient',PatientSchema);




    