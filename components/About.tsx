"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          As a straight-A software engineering student at Haramaya University, I
          possess a diverse skill set and extensive experience in full-stack web
          development and machine learning. With a strong academic record and
          GPA of 4.0, I have honed my expertise in programming languages like
          C++, Java, Python, and PHP, as well as web frameworks such as Laravel,
          Bootstrap,Flask, Django and React JS. Through my internships, I have demonstrated
          the ability to work collaboratively to deliver complex projects on
          time and budget. Driven by a passion for innovation and learning, I am
          eager to leverage my technical prowess and problem-solving skills to
          contribute to the development of cutting-edge solutions.
        </p>
        {/* <p className="text-start  text-muted-foreground lg:px-6">
          In parallel, my path took an exciting turn into the Web3 space,
          co-founding{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://swoop.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Swoop Exchange
          </a>{" "}
          two years ago, in a mission to tackle the fragmentation of liquidity
          and protocols and simplify the Decentralized Finance onboarding
          process for the next billion users. Our platform has quickly reached
          critical milestones, boasting a trading volume of millions USD and
          attracting over 4,000 monthly active users.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of work, I&#39;m an avid reader of blockchain and cryptography
          and enjoy my time outdoors. Looking forward, I aim to leverage my
          frontend development and quality assurance expertise to contribute to
          impactful tech ventures.
        </p> */}
      </div>
    </section>
  );
}
