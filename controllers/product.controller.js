// Require
const express = require('express');
const product_services = require('../services/product.service')

// Config
const controller = express.Router();

controller.get(`/getProducts`, product_services.getAllProducts);
controller.post(`/save`, product_services.insertProduct);
controller.delete(`/del/:id`, product_services.deleteProduct);
controller.post(`/update`, product_services.updateProduct);

module.exports = controller;