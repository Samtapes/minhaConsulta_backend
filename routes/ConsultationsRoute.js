const express = require('express');
const router = express.Router();
const consultationsController = require('../controllers/ConsultationsController');
const tokenController = require('../controllers/TokenController'); // Middleware


// Rota para obter consultas do usuário autenticado
router.get('/consultations', tokenController, (req, res) => {
    return consultationsController.getConsultations(req, res);
  });


// Rota para criar uma nova consulta
router.post('/consultations', consultationsController.createConsultation);

module.exports = router;