const Project = require("../../models/project");

const createProject = async(req,res) => {
   const { 
     number, 
     title, 
     initialDate, 
     finalDate, value, 
     client, 
     projectType,
     university,
     stage 
   } = req.body;

   const project = new Project({
    number,title,initialDate,finalDate,value,client,projectType,university,stage
   });
    await project.save();
   res.json(project);
}

const getAllProjects = async(req,res) => {

    const [total, projects] = await Promise.all([
        Project.countDocuments(),
        Project.find()
         .populate("client")
         .populate("projectType")
         .populate("university")
         .populate("stage")
    ])

    res.json({
        total,
        projects
    })

 }

const updateProject = async(req,res) => {
     const { id } = req.params;

     const { 
        number, 
        title, 
        initialDate, 
        finalDate, value, 
        client, 
        projectType,
        university,
        stage 
      } = req.body;

   
      const findProjectByNumber = await Project.findOne({number});

      if(id === findProjectByNumber?._id.toString() || !findProjectByNumber){
        const updateProject = await Project.findByIdAndUpdate(id, {
            number,title,initialDate,finalDate,value,client,projectType,university,stage
        })
        return res.json(updateProject);
      }
      return res.status(400).json({msg:`El número ${number} ya existe de otro proyecto`});
     
}

module.exports = {
    createProject,
    getAllProjects,
    updateProject
}