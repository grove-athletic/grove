import { Button } from "@repo/ui/components/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@repo/ui/components/card";

export default function Home() {

  const classes: Record<string, string> = {
    clay: 'bg-clay',
    moss: 'bg-moss',
    gold: 'bg-gold',
    sand: 'bg-sand',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    info: 'bg-info',
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="text-4xl font-bold">Grove</h1>
      <div>Grove is a lifetime sports platform: one place for anyone who plays, coaches, or organizes sports, from kids just starting out to lifelong adult players.</div>
      <div className={`grid grid-cols-8 gap-8`}>
        {Object.keys(classes).map((color: string) => (
          <div className="flex flex-col items-center gap-2" key={color}>
            <div className={`w-8 h-8 ${classes[color]}`} />
            <p>{color}</p>
          </div>
        ))}
      </div>
      <Button>Default button variant</Button>
      <Button variant="secondary">Secondary button variant</Button>
      <Button variant="destructive">Destructive button variant</Button>
      <Button variant="outline">Outline button variant</Button>
      <Button variant="ghost">Ghost button variant</Button>
      <Button variant="link">Link button variant</Button>
      <Card>
        <CardHeader>
          <CardTitle>Grove</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card.</p>
        </CardContent>
      </Card>
    </div>
  )
};