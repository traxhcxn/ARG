const Analytics = require('../models/analytics');
const fs = require('fs');
const path = require('path');
const { createChartImage } = require('../services/chartService');

exports.uploadFile = async (req, res) => {
    console.log('Upload request received'); // Debug log
    console.log('Files:', req.file); // Debug log
    console.log('Body:', req.body); // Debug log

    try {
        if (!req.file) {
            console.log('No file detected');
            return res.status(400).json({
                success: false,
                message: 'No file uploaded'
            });
        }

        if (!req.body.department || !req.body.category) {
            console.log('Missing department/category');
            return res.status(400).json({
                success: false,
                message: 'Department and category are required',
                received: req.body
            });
        }

        console.log('Processing file:', req.file.originalname);
        const chartImagePath = await createChartImage(req.file.path);
        console.log('Chart generated at:', chartImagePath);

        const analytics = new Analytics({
            filename: req.file.originalname,
            originalFile: req.file.path,
            chartImage: chartImagePath,
            department: req.body.department,
            category: req.body.category
        });

        await analytics.save();
        console.log('Record saved to DB');

        res.status(201).json({
            success: true,
            message: 'File uploaded successfully',
            chartPath: `/uploads/charts/${path.basename(chartImagePath)}` // Return accessible path
        });

    } catch (error) {
        console.error('SERVER ERROR:', error);
        res.status(500).json({
            success: false,
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

exports.getPendingAnalytics = async (req, res) => {
    try {
        const pendingAnalytics = await Analytics.find({ status: 'pending' })
            .sort({ uploadedAt: -1 });

        res.json({
            success: true,
            data: pendingAnalytics
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.approveAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.findByIdAndUpdate(
            req.params.id,
            { status: 'approved' },
            { new: true }
        );

        if (!analytics) {
            return res.status(404).json({
                success: false,
                message: 'Analytics not found'
            });
        }

        res.json({
            success: true,
            message: 'Analytics approved',
            data: analytics
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.rejectAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.findByIdAndDelete(req.params.id);

        if (!analytics) {
            return res.status(404).json({
                success: false,
                message: 'Analytics not found'
            });
        }

        fs.unlinkSync(analytics.originalFile);
        fs.unlinkSync(analytics.chartImage);

        res.json({
            success: true,
            message: 'Analytics rejected and deleted'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getStaffSubmissions = async (req, res) => {
    try {
        const submissions = await Analytics.find()
            .sort({ uploadedAt: -1 });

        res.json({
            success: true,
            data: submissions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};