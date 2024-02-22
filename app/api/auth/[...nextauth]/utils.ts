'use server'

export async function GetProfile(email: string) {
  const profile = await prisma?.profile.findFirst({ where: { email } })
  return profile
}