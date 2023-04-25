import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import connectToDB from '../../../../utils/connectDB';
import User from '../../../../models/User';

connectToDB();

console.log(process.env);

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  callbacks: {
    async error(error, _, __) {
      console.log(error);
    },
    async session(session, token, user) {
      session.id = session.token.sub;

      return session;
    },
    async signIn(user, account, profile) {
      const doesUserExist = await User.findOne({ email: user.user.email });
      if (doesUserExist) {
        return true;
      }

      const newUser = await User.create({
        name: user.user.name,
        email: user.user.email,
        image: user.user.image,
        cart: [],
      });

      newUser.save();

      return true;
    },
  },
};

export default NextAuth(authOptions);
