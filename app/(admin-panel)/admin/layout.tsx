export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    console.log("Dash Layout")
    return (
      <section>
        {children}
      </section>
    )
  }