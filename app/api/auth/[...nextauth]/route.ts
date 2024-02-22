import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from "bcrypt";
import prisma from '@/libs/db';


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter your Email' },
        password: { label: 'Password', type: 'password', placeholder: '******' },
      },
      async authorize(credentials, req) {
        try {

          if (!credentials?.email) {
            throw new Error("Email is Required");
          } else if (!credentials?.password) {
            throw new Error("Password is Required")
          }

          const profile = await prisma?.profile.findFirst({ where: { email: credentials?.email } })
          // const profile = await GetProfile(credentials?.email)
          if (!profile) throw new Error("User not found. Only Eriber can enter in the Throne Room!!!");

          const match = await compare(credentials.password, profile.pass!)
          if (!match) throw new Error("Invalid Credentials");

          const user = {
            id: String(profile.id),
            name: profile.name,
            email: profile.email
          }

          return user
        } catch (error) {
          console.log('el error: ', error);
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user
      return token
    },

  }
})


export { handler as GET, handler as POST }