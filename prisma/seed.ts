import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contentData: Prisma.ContentCreateInput[] = [
  {
    heading: "Animation",
    paragraph:
      "learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    heading: "Design",
    paragraph:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    heading: "Photography",
    paragraph:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    heading: "Crypto",
    paragraph:
      "All you need to know to get started investing in crypto. Go from beginner to advance with this 54 hour course.",
  },
  {
    heading: "Business",
    paragraph:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];

async function main() {
  console.log("Start seeding ...");
  for (const c of contentData) {
    const content = await prisma.content.create({
      data: c,
    });
    console.log(`Created content with id: ${content.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
