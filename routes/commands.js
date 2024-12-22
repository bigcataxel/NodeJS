const express = require('express');
const Command = require('../models/command');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const commands = await Command.findAll();
    res.json(commands);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId, totalPrice, status } = req.body;
    const newCommand = await Command.create({ userId, totalPrice, status });
    res.status(201).json(newCommand);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const command = await Command.findByPk(req.params.id);
    if (!command) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }
    res.json(command);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
