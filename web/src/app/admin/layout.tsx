import { AuthProvider } from '@/components/AuthProvider'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
    </AuthProvider>
  )
}
