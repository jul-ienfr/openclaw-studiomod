export type AutoThinkLevel = "off" | "low" | "medium" | "high";

/**
 * Classifies the complexity of a user message using lightweight heuristics.
 * Used to automatically set the appropriate thinking level before sending.
 *
 * Rules (in priority order):
 * - "off"    → short greetings / acknowledgements (< 40 chars, known patterns)
 * - "high"   → long messages, code blocks, complex keywords
 * - "medium" → inline code, explanatory keywords, > 20 words
 * - "low"    → everything else
 */
export function classifyMessageDifficulty(message: string): AutoThinkLevel {
  const text = message.trim();
  const lower = text.toLowerCase();
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  // OFF — very short greetings / acknowledgements
  if (text.length < 40) {
    const simpleRe =
      /^(merci|ok|okay|oui|non|yes|no|super|parfait|génial|cool|d'accord|thanks|thx|lol|👍|✅|bonjour|salut|hello|hi|hey|ack|got it|np|de rien|ça marche|nickel|impec|bien reçu|reçu)[\s!.]*$/i;
    if (simpleRe.test(text)) return "off";
  }

  // HIGH — complex patterns
  const hasCodeBlock = /```/.test(text);
  const isLong = wordCount > 80;
  const HIGH_KEYWORDS = [
    "architecture",
    "refactor",
    "why doesn't",
    "why isn't",
    "debug",
    "investigate",
    "analyse",
    "analyze",
    "compare and contrast",
    "optimize",
    "scalab",
    "step by step",
    "étape par étape",
    "security",
    "vulnerab",
    "algorithme",
    "algorithm",
    "complexit",
    "implémente",
    "implement",
    "design pattern",
    "benchmark",
    "performance",
    "trade-off",
    "audit",
    "proof",
    "démonstration",
    "démontre",
    "prove",
    "raisonne",
    "reasoning",
    "architecture logicielle",
    "pourquoi ça ne",
    "scalability",
    "distributed",
    "concurrent",
  ];
  if (isLong || hasCodeBlock || HIGH_KEYWORDS.some((k) => lower.includes(k))) {
    return "high";
  }

  // MEDIUM — moderate complexity
  const hasInlineCode = /`[^`]+`/.test(text);
  const MEDIUM_KEYWORDS = [
    "pourquoi",
    "why",
    "how",
    "comment",
    "explique",
    "explain",
    "différence",
    "difference",
    "between",
    "entre",
    "help me",
    "aide-moi",
    "best practice",
    "bonne pratique",
    "review",
    "vérifie",
    "check",
    "suggest",
    "recommande",
    "propose",
    "comprendre",
    "understand",
    "résous",
    "solve",
    "fix",
    "corrige",
    "améliore",
    "improve",
    "what is",
    "qu'est-ce",
    "define",
    "définit",
  ];
  if (
    hasInlineCode ||
    MEDIUM_KEYWORDS.some((k) => lower.includes(k)) ||
    wordCount > 20
  ) {
    return "medium";
  }

  return "low";
}

/**
 * Returns true if the model is Claude 4.6 (Sonnet or Opus),
 * which supports the native "adaptive" thinking mode.
 */
export function isClaude46Model(modelStr: string): boolean {
  const lower = modelStr.toLowerCase();
  return (
    lower.includes("sonnet-4-6") ||
    lower.includes("opus-4-6") ||
    lower.includes("claude-sonnet-4-6") ||
    lower.includes("claude-opus-4-6")
  );
}
