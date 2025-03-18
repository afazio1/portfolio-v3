---
id: "why-systems"
title: "Why I Chose Systems (and Why It's Worth It)"
description: "Insights into why I chose to pursue systems as a concentration for my CS degree."
date: "2024-12-17"
tags: ["University", "Systems", "Internships"]
---

Coming into university I thought I would pursue a concentration in AI/ML as a part of my Computer Science degree. After all, AI is all the rage. I would be doing myself a disservice if I did not take the opportunity to pursue it in college. I even enrolled in an upper-level AI class, the second semester of my freshman year. I quickly realized that it wasn't for me— it was challenging in ways that didn't excite me. The content was very math and theory heavy. I ended up withdrawing from the class as a cumulation of the course being too hard and me being a naive freshman.

Around that same time, I took two foundational system courses at Georgia Tech— Computer Organization & Programming (CS 2110) and Systems & Networks (CS 2200)— and everything clicked. I loved it. I felt like I'd found my place.
## Why Systems
What drew me to systems?

I enjoyed **knowing everything that happens behind the scenes**. Why something works or doesn't, and why one implementation is faster or more memory efficient or more scalable than another. I remember wiring up (in Circuit Sim, remember I'm a CS major not an EE) my own processor in CS 2200 and writing the microcode to fetch, decode, and execute instructions. It was cool to say that "I built a CPU". Also, learning about the differences between RISC and x86 ISAs was exciting. Specifically, *how*/*why* the size of the instruction set and the layout of the hardware affect processors' performance and use cases.

I loved how **different subsystems interact** with each other to create something greater. Opening a file seems like such a simple operation, but it involves synchronization between many different systems. In my Operating Systems course (CS 3210), we had to implement and extend a lot of these basic operating system features. I quickly learned to appreciate the work of systems programmers. It is truly a miracle that these interfaces work.

I appreciated the lack of a single "correct" answer. Systems are all about **tradeoffs and assumptions**. My OS professor would always say, 

> "Systems problems are always the same. It's the assumptions that change".

When implementing kernel-threading in an OS, there were at least 3 different approaches that my peers took for the implementation. It was exciting to hear about other people's ideas and discuss the performance, tradeoffs, and optimizations of their solutions.

With such knowledge comes power:

> The power to make informed engineering decisions.
> The power to solve, challenging real-world problems.

For a while, a voice in my head (and plenty of people around me) insisted I should stick with AI because it's the future. People told me systems knowledge wasn't relevant for a software engineering job. And that might be true for most SWE roles. But if I've already put myself through 3+ Georgia Tech systems courses—cramming 1s and 0s into the CPU, only managing to get the kernel to boot with an offering of my very own blood, sweat, and tears—whilst corrupting my 4MB of RAM and successfully forking a shell, then I probably wouldn't want to settle for just any SWE job.
## Systems Power Everything
It doesn't matter if you write the bestest-mostest-goodest LLM training algorithm if your scheduler isn't effectively distributing tasks to system resources. Everything is a system. Everything must run on a system. Oftentimes, the bottleneck of various operations is the system itself. Systems programming is objectively important.

Why were LLMs able to take off in recent years? It's because of systems. Underneath every AI model lies powerful, efficient systems that make it all possible. Whether it's optimized hardware, distributed computing, or operating systems that manage massive workloads.

>Systems knowledge matters because it powers the tech industry.
## Systems? (like it's hard)
Systems programming is **hard**, but that's what makes it worthwhile. Programming at such a low level, you have to deal with realities that most high-level languages shield you from. 

**Assumptions don't hold up**. You can't assume your function will work. What if you corrupted your own memory? What if the OS won't even boot?

**Debugging is a new beast**. Sometimes your debugging in the 9th circle of hell (the part of the kernel where `printf` hasn't been initialized yet) and you have to learn tools like **gdb** or write thorough tests to see what's happening.

Yes, it's frustrating. But systems forced me to grow:
I learned new skills like debugging with gdb.
I became better at testing and troubleshooting in complex environments. 

These experiences shaped me into a better engineer.

> This [paper](https://www.usenix.org/system/files/1311_05-08_mickens.pdf) written by James Mickens showcases the importance and struggles of systems engineers in a light-hearted manner.

## Where I'm At
Pursuing systems paid off. I landed an internship at Meta as a Production Engineer. I quite literally would not have gotten this opportunity without taking CS 3210 (Design of Operating Systems) and I cannot stress my gratitude for this course enough. However, I am excited to give back by becoming a TA for the class that solidified my interest in systems. I want to help others discover systems and navigate its challenges just like I did. 

Systems programming taught me how to think deeply, solve tough problems, and push through frustrations. It may not always get the spotlight in the tech world, but it powers everything. If you're considering what to focus on in computer science, don't underestimate the world of systems. It might surprise you.
