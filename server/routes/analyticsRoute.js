const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const upload = require('../config/multerConfig');

const validateUpload = (req, res, next) => {
  if (!req.body.department || !req.body.category) {
    return res.status(400).json({ 
      success: false,
      message: 'Department and category are required' 
    });
  }
  next();
};

router.post('/upload', upload.single('file'), validateUpload, analyticsController.uploadFile);
router.get('/staff/submissions', analyticsController.getStaffSubmissions);
router.get('/pending', analyticsController.getPendingAnalytics);
router.put('/approve/:id', analyticsController.approveAnalytics);
router.delete('/reject/:id', analyticsController.rejectAnalytics);

module.exports = router;