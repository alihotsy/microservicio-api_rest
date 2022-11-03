const { check } = require("express-validator");
const { clientExistsById, projectTypeExistsById, universityExistById, stageExistsById } = require("../helper/db-validator");
const { projectExistsByNumber, emptyIdsFromProject } = require("../helper/db-validator");

const postChecks = [
    check('number', 'El número del proyecto es requerido y único').not().isEmpty(),
    check('number', 'El número del proyecto debe ser un número').isNumeric(),
    check('number').custom(projectExistsByNumber),
    check('title', 'El título es requerido').not().isEmpty(),
    check('initialDate', 'La fecha inicial es requerida').not().isEmpty(),
    check('initialDate', 'La fecha inicial debe ser una fecha').isDate(),
    check('finalDate', 'La fecha final es requerida').not().isEmpty(),
    check('finalDate', 'La fecha final debe ser una fecha').isDate(),
    check('value', 'El valor es requerido').not().isEmpty(),
    check('value', 'El valor debe ser un número').isNumeric(),
    check('client', 'El cliente es requerido').custom(emptyIdsFromProject),
    check('client._id', 'ID inválido para el cliente').isMongoId(),
    check('client._id').custom(clientExistsById),
    check('projectType', 'El proyecto es requerido').custom(emptyIdsFromProject),
    check('projectType._id', 'ID inválido para el campo tipo de proyecto').isMongoId(),
    check('projectType._id').custom(projectTypeExistsById),
    check('university', 'La universidad es requerida').custom(emptyIdsFromProject),
    check('university._id', 'ID inválido para el campo universidad').isMongoId(),
    check('university._id').custom(universityExistById),
    check('stage', 'La etapa es requerida').custom(emptyIdsFromProject),
    check('stage._id', 'ID inválido para la etapa').isMongoId(),
    check('stage._id').custom(stageExistsById)
];

const updateChecks = postChecks.filter((element,i) => i!==2);

module.exports = {postChecks,updateChecks};