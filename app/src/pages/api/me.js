import { getSession } from 'next-auth/react';
import User from '../../../models/User';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    const user = await User.findOne({ email: session.token.email });
    return res.status(200).json({ user, success: true });
  }

  res.status(200).json({ error: 'Not authenticated' });
}
