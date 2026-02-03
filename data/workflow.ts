export type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We start by understanding your goals, audience, and challenges — laying the foundation.",
  },
  {
    number: "02",
    title: "Define",
    description: "We outline the strategy, structure, and project roadmap with clear objectives.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our creative experts craft intuitive, visually stunning designs aligned with your brand.",
  },
  {
    number: "04",
    title: "Develop",
    description: "We code with precision and scalability — ensuring performance, security, and functionality.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "After testing and optimization, we launch your project for the world to experience.",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Our support continues post-launch, ensuring your platform grows and performs seamlessly.",
  }
];
