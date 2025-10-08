export interface Experience {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
  tags?: string[]
}

const experiences: Experience[] = [
  {
    company: "Meta",
    position: "Production Engineer Intern",
    description:
    "Built infrastructure-as-code and testing services in Go and Python to manage packages and improve reliability across server fleets.",
    startDate: "May 2025",
    endDate: "Aug 2025",
    tags: ["Go", "Python", "Chef"]
  },
  {
    company: "Ericsson",
    position: "Software Engineer Intern",
    description:
    "Reduced employee onboarding time (3.5 hrs → 5 mins) by developing an automation framework to parse emails, create support tickets, and display onboarding progress.",
    startDate: "Jun 2023",
    endDate: "Dec 2024",
    tags: ["Java", "Python", "TypeScript"]
  },
  {
    company: "LogicomUSA",
    position: "Software Developer Intern",
    description:
    "Developed AWS-based REST APIs and automation scripts that reduced manual work and improved process efficiency.",
    startDate: "May 2023",
    endDate: "Jun 2023",
    tags: ["AWS", "PHP", "JavaScript"]
  },
  {
    company: "Bits of Good",
    position: "Engineering Manager",
    description:
    "Led a team to maintain and improve GT Scheduler, a course scheduling web app used by 22K students monthly.",
    startDate: "Aug 2023",
    endDate: "Present",
    tags: ["Next.js", "MongoDB"]
  },
  {
    company: "Georgia Tech",
    position: "Teaching Assistant — Operating Systems",
    description:
    "Mentored 400+ students through labs and technical topics in Georgia Tech’s Operating Systems course.",
    startDate: "Jan 2025",
    endDate: "Present",
    tags: ["C", "GDB"]
  }
]

export default experiences;
