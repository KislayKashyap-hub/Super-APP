import driverService from '../services/driverService.js';

const createDriver = async (req, res) => {
    try {
        const driver = await driverService.createDriver(req.body);
        res.status(201).json(driver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDrivers = async (req, res) => {
    try {
        const drivers = await driverService.getDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { createDriver, getDrivers };
