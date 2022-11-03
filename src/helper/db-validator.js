const Project = require("../../models/project");
const Client = require("../../models/client");
// const Project = require("../../models/project");
const ProjectType = require("../../models/project-type");
const Stage = require("../../models/stage");
const University = require("../../models/university");

const projectExistsByNumber = async(number = "") => {

    if(isNaN(number)){
      return;
    }
    const project = await Project.findOne({number});
 
    if(project) {
       throw new Error(`El número = ${number} ya existe de otro proyecto!`)
    }
 }
 
 const emptyIdsFromProject = async({_id}) => {
    try {
        if(!_id) {
          throw new Error('El id no debe ser vacío');
        }
        
    } catch (error) {
        throw new Error('El id no debe ser vacío')
    }
 }
 
 const findProjectById = async(id="") => {
 
    try {
 
       if(!id) {
          return
       }
       
       const project = await Project.findById(id);
       if(!project) {
          throw new Error(`No existe ningún proyecto con el id = ${id}`);
       }
       
    } catch (error) {
       throw new Error(`No existe ningún proyecto con el id = ${id}`);
    }
 
 }

 const clientExistsById = async(id = "") => {
   try {
      if(!id) {
         return
      }

      const client = await Client.findById(id);
      if(!client) {
        throw new Error(`No existe el cliente con ID = ${id}`);
      }
      
   } catch (error) {
      throw new Error(`No existe el cliente con ID = ${id}`)
   }
 }

 


const stageExistsById = async(id = "") => {
   try {

      if(!id) {
         return
      }

      const stage = await Stage.findById(id);
      if(!stage) {
        throw new Error(`No existe esta etapa con ID = ${id}`);
      }
      
   } catch (error) {
      throw new Error(`No existe esta etapa con ID = ${id}`);
   }
 }

 


const universityExistById = async(id = '') => {
   try {

      if(!id) {
         return
      }

      const university = await University.findById(id);
      if(!university) {
        throw new Error(`No existe esta universidad con ID = ${id}`);
      }
      
   } catch (error) {
      throw new Error(`No existe esta universidad con ID = ${id}`);
   }
}
const projectTypeExistsById = async(id = "") => {
   try {
      if(!id) {
         return
      }
      const projectType = await ProjectType.findById(id);
      if(!projectType) {
        throw new Error(`No existe este tipo de proyecto con ID = ${id}`);
      }
      
   } catch (error) {
      throw new Error(`No existe este tipo de proyecto con ID = ${id}`)
   }
 }


 module.exports = {
    projectExistsByNumber,
    emptyIdsFromProject,
    findProjectById,
    clientExistsById,
    stageExistsById,
    universityExistById,
    projectTypeExistsById
 }