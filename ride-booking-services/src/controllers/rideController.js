import rideService from '../services/rideService.js';

const createRide = async (req, res) => {
    try {
        const ride = await rideService.createRide(req.body);
        res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRide = async (req, res) => {
    try {
        const ride = await rideService.getRide(req.params.rideId);
        res.status(200).json(ride);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export default { createRide, getRide };
