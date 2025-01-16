import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Make sure to set this in your environment variables

// Function to generate JWT token with user details
export const generateToken = (user: { id: number; email: string; username: string; role: string }) => {
  const payload = {
    userId: user.id,
    email: user.email,
    username: user.username,
    role: user.role,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }); // Token expires in 7 days
  return token;
};

// Function to verify JWT token
