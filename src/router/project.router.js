const { Router } = require('express');
const { check } = require('express-validator');
const { createProject, getAllProjects, updateProject } = require('../controller/project');
const {postChecks, updateChecks} = require('../middleware/checks');
const validateFields = require('../middleware/validate-fields');
const { findProjectById } = require('../helper/db-validator');

const router = Router();

router.post('/create', [...postChecks, validateFields], createProject);

router.get('/get-all', getAllProjects);

router.put('/update/:id',[
    check('id', 'ID inválido').isMongoId(),
    check('id').custom(findProjectById),
    ...updateChecks,
    validateFields
], updateProject);

module.exports = router;