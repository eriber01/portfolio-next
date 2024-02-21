import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter your Email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials, req) {
        console.log({ credentials, req });

        const user = { id: '1', email: 'eriber' }

        if (user) {
          return user
        }

        return null

      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      console.log({ account, token, user, profile, session });
      if (user) token.user = user
      return token
    },

  }
})


export { handler as GET, handler as POST }