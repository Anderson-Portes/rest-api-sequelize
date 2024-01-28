const { Router } = require('express');

const CoursesController = require('../controllers/CoursesController');
const controller = new CoursesController();

const router = Router();

router.get('/', (req,res) => controller.findAll(req,res))
router.get('/:id', (req,res) => controller.findById(req,res))
router.post('/', (req,res) => controller.create(req,res))
router.put('/:id', (req,res) => controller.update(req,res)) 
router.delete('/:id', (req,res) => controller.delete(req,res))

module.exports = router;