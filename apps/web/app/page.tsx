export default function Home() {

  const colors = ["clay", "moss", "gold", "sand", "primary", "secondary", "tertiary", "success", "warning", "error", "info"];

  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-3xl font-bold">Grove</h1>
      <div>Grove is a lifetime sports platform: one place for anyone who plays, coaches, or organizes sports, from kids just starting out to lifelong adult players.</div>
      <div className={`grid grid-cols-${colors.length} gap-4`}>
        {colors.map((color: string) => (
          <div className="flex flex-col items-center gap-2" key={color}>
            <div className={`w-8 h-8 bg-${color}`} />
            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  )
};