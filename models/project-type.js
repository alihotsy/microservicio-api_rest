const { model, Schema } = require('mongoose');
const projectNames = require('../src/helper/projectNames');

const ProjectTypeSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        enum:projectNames
    }
}, {timestamps:true,versionKey:false});

module.exports = model('tipoproyecto',ProjectTypeSchema);