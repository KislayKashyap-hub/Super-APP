const createDriver = async (driverData) => {
    const result = await global.db.collection('drivers').insertOne(driverData);
    return result.ops[0];
};

const getDrivers = async () => {
    const drivers = await global.db.collection('drivers').find().toArray();
    return drivers;
};

export default { createDriver, getDrivers };
