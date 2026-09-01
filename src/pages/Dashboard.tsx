import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-6">
      <header className="flex items-center justify-between pb-6 border-b">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
          Back to Home
        </Link>
      </header>
      <main className="pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
            <h3 className="font-semibold text-lg">Total Patients</h3>
            <p className="text-3xl font-bold mt-2">1,234</p>
          </div>
          <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
            <h3 className="font-semibold text-lg">Appointments Today</h3>
            <p className="text-3xl font-bold mt-2">42</p>
          </div>
        </div>
      </main>
    </div>
  )
}
