import { getAllLinksByUserId } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { links } = await getAllLinksByUserId(uid);

    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ error });
  }
};
