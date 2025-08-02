import type { VercelRequest, VercelResponse } from '@vercel/node';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  console.log('Test API called');
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  return res.status(200).json({
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    method: req.method
  });
};

export default handler;