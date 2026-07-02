import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const allowedEmails = () =>
  (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    signIn({ profile }) {
      const email = profile?.email?.toLowerCase()
      if (!email) return false
      const allowed = allowedEmails()
      if (allowed.length === 0) return false
      return allowed.includes(email)
    },
  },
  trustHost: true,
})

export async function requireAdmin() {
  const session = await auth()
  if (!session?.user?.email) {
    return null
  }
  const email = session.user.email.toLowerCase()
  if (!allowedEmails().includes(email)) {
    return null
  }
  return session
}
