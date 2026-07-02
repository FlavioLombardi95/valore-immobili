import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { AdminLeadsPanel } from '@/components/AdminLeadsPanel'

export default async function AdminPage() {
  const session = await auth()
  if (!session) {
    redirect('/admin/login')
  }
  return <AdminLeadsPanel />
}
