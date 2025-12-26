import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <div className="space-y-3" id="#about">
        <h2 className="text-gray-white text-2xl">About</h2>
        <Card className="p-6 bg-card border-card-border">
          <h3 className="mb-3 font-semibold">$ cat about.txt</h3>
          <div className="text-gray-white">
            <ul className="flex flex-col ml-5">
              <li>👾 Production Engineer at Meta in NYC</li>
              <li>🐝 BS in CS from Georgia Tech</li>
              <li>👩‍💻 Interests in web, systems, and infra</li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  )
}
