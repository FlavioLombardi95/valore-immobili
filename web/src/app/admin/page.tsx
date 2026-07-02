import { redirect } from 'next/navigation'
import { auth, isDevAdminBypass } from '@/lib/auth'
import { AdminLeadsPanel } from '@/components/AdminLeadsPanel'

export default async function AdminPage() {
  const session = await auth()
  if (!session && !isDevAdminBypass()) {
    redirect('/admin/login')
  }
  return <AdminLeadsPanel preview={isDevAdminBypass()} />
}
