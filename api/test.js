module.exports = async (req, res) => {
  console.log('Test API called');
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  return res.status(200).json({
    message: 'API is working with CommonJS!',
    timestamp: new Date().toISOString(),
    method: req.method,
    nodeVersion: process.version
  });
};