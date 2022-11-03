const { Schema, model } = require('mongoose');
const stageNames = require('../src/helper/stageNames');

const StageSchema = new Schema({
    name:{
        type:String,
        required:true,
        enum:stageNames
    },

}, {timestamps:true,versionKey:false});

module.exports = model('etapa', StageSchema);