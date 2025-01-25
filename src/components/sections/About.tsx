import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-[#7aa2f7] text-2xl">About Me</h2>
        <Card className="p-6 bg-[#1f2335] border-[#292e42]">
          <p className="mb-4">$ cat about.txt</p>
          <div className="text-[#9ece6a]">
            <ul className="flex flex-col gap-2">
              <li>🐝 I'm an undergraduate at the <span className="text-[#89ddff]">Georgia Institute of Technology</span> studying Computer Science</li>
              <li>👾 I'm pursuing concentrations in <span className="text-[#89ddff]">Systems & Architecture</span> and <span className="text-[#89ddff]">Networking & Internet Systems</span></li>
              <li>👩‍💻 Most of my experience is in <span className="text-[#89ddff]">full stack development</span> and <span className="text-[#89ddff]">systems programming</span></li>
            </ul>
          </div>
          <p className="mt-4 text-[#89ddff]">Experience:</p>
          <ul className="list-disc list-inside mt-2 text-[#bb9af7]">
            <li>Incoming Production Engineer Intern @ Meta</li>
            <li>Director of Engineering @ Bits of Good a Hack4Impact Chapter</li>
            <li>Previously @ Ericsson</li>
          </ul>
        </Card>
      </div>
    </>
  )
}
