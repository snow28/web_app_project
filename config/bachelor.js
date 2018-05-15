var mongoose = require("mongoose");


//collection cell schema

var articleSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        } ,
        date : String,
        description : String ,
        website : String ,
        languages : String,
        numberOfStudents : String ,
        facultyStaff : String ,
        avarageFee  : String ,
        fees : String ,
        accomodation : String ,
        contacts : {
            emails : {
                Liliana_Lato : {
                    Position : String,
                    email : String
                },
                Aneta_Sorbjan : {
                    Position : String,
                    email : String
                }
            },
            phone : String
        },
        rating : String ,
        faculties : {
            Computer_Science : {
                name : String ,
                description : String ,
                Erasmus : String ,
                ECTS : String,
                duration : String,
                website : String
            },
            Mathematic : {
                name : String ,
                description : String ,
                Erasmus : String ,
                ECTS : String,
                duration : String,
                website : String
            },
            Statistics : {
                name : String,
                description : String,
                Erasmus : String ,
                ECTS : String,
                duration : String ,
                website : String
            }
        }
    }
);

//here we exporting our scheme to the file where we will call this module

var Article = module.exports = mongoose.model('bachelor' , articleSchema);

