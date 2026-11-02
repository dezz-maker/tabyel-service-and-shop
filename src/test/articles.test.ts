import { describe, expect, it } from "vitest";
import { ARTICLES } from "@/lib/articles";

describe("Requested electrical article topics", () => {
  it.each([
    "Hur vet jag om elen i mitt hus är säker?",
    "Varför fungerar inte ett eluttag?",
    "När behöver man byta gamla elledningar?",
    "Varför blinkar eller flimrar lamporna hemma?",
    "Hur installerar man smart belysning hemma?",
    "Måste man anlita elektriker för att installera en taklampa?",
  ])("provides article data for %s", (topic) => {
    expect(ARTICLES.find((article) => article.title === topic)).toBeDefined();
  });
});