import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivani Varma Vilambi | Senior Full Stack Developer" },
      { name: "description", content: "Portfolio of Shivani Varma Vilambi, a senior full stack developer building reliable enterprise software with React, Java, Node.js, Kafka, AWS and Azure." },
      { property: "og:title", content: "Shivani Varma Vilambi | Senior Full Stack Developer" },
      { property: "og:description", content: "Eight years building secure, reliable software across finance, healthcare and HR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
