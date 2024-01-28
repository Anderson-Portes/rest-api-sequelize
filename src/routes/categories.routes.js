const { Router } = require('express');

const CategoriesController = require('../controllers/CategoriesController');
const controller = new CategoriesController();

const router = Router();

router.get('/', (req,res) => controller.findAll(req,res))
router.get('/:id', (req,res) => controller.findById(req,res))
router.post('/', (req,res) => controller.create(req,res))
router.put('/:id', (req,res) => controller.update(req,res)) 
router.delete('/:id', (req,res) => controller.delete(req,res))

module.exports = router;