import { IconHome, IconBrandGithub, IconBrandLinkedin, IconBrandX, IconTerminal2 } from '@tabler/icons-react';
import Image from 'next/image';

// Links Array
export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#", // Update with actual homepage link
  },
  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects", // Update with actual projects section link
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/your-username", // Replace with your GitHub link
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://linkedin.com/in/your-username", // Replace with your LinkedIn profile
  },
  {
    title: "X (Twitter)",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/your-username", // Replace with your Twitter (X) profile
  },
  {
    title: "Kaggle",
    icon: (
      <Image
        src="/kaggle-logo.svg" // Path to Kaggle logo image
        width={20}
        height={20}
        alt="Kaggle Logo"
      />
    ),
    href: "https://kaggle.com/your-username", // Replace with your Kaggle profile
  },
  {
    title: "Tableau",
    icon: (
      <Image
        src="/tableau-icon.svg" // Path to Kaggle logo image
        width={30}
        height={30}
        alt="Tableau Cloud"
      />
    ),
    href: "https://kaggle.com/your-username", // Replace with your Kaggle profile
  },
];


export const slugs = [
  "python",
  "java",
  "apachecassandra",
  "javascript",
  "cplusplus",
  "amazonaws",
  "microsoftazure",
  "googlecloud",
  "tensorflow",
  "pytorch",
  "keras",
  "langchain",
  "docker",
  "kubernetes",
  "git",
  "apachespark",
  "apacheairflow",
  "databricks",
  "tableau",
  "powerbi",
  "flask",
  "mlflow",
  "dvc",
  "snowflake",
  "postgresql",
  "mongodb",
  "sqlite",
  "github",
  "gitlab",
  "huggingface",
  "openai",
  "nvidia",
  "anaconda",
  "visualstudio",
  "visualstudiocode"

];