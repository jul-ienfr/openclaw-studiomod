import { expect, test } from "@playwright/test";

test.describe("Persona Validator API", () => {
  const API_URL = "/api/persona-validator";

  test("returns_warning_when_mission_is_missing", async ({ request }) => {
    const res = await request.post(API_URL, {
      data: {
        persona: { traits: { warmth: 50, formality: 50 }, vibe: "calm" },
        directives: {},
      },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          severity: "warning",
          field: "directives.mission",
        }),
      ]),
    );
  });

  test("returns_warning_when_vibe_and_core_truths_are_empty", async ({
    request,
  }) => {
    const res = await request.post(API_URL, {
      data: {
        persona: { traits: {} },
        directives: { mission: "Help users" },
      },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          severity: "warning",
          field: "persona.vibe",
        }),
      ]),
    );
  });

  test("detects_trait_tension_high_warmth_and_formality", async ({
    request,
  }) => {
    const res = await request.post(API_URL, {
      data: {
        persona: {
          traits: { warmth: 90, formality: 90, verbosity: 50, creativity: 50 },
          vibe: "professional",
          coreTruths: "Be helpful",
        },
        directives: { mission: "Assist users" },
      },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: "persona.traits",
          message: expect.stringContaining("warmth"),
        }),
      ]),
    );
  });

  test("detects_trait_tension_low_verbosity_high_creativity", async ({
    request,
  }) => {
    const res = await request.post(API_URL, {
      data: {
        persona: {
          traits: { warmth: 50, formality: 50, verbosity: 10, creativity: 90 },
          vibe: "creative",
          coreTruths: "Express freely",
        },
        directives: { mission: "Create content" },
      },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: "persona.traits",
          message: expect.stringContaining("verbosity"),
        }),
      ]),
    );
  });

  test("returns_no_issues_for_well_formed_persona", async ({ request }) => {
    const res = await request.post(API_URL, {
      data: {
        persona: {
          traits: { warmth: 70, formality: 50, verbosity: 60, creativity: 60 },
          vibe: "calm and friendly",
          coreTruths: "Be honest. Be helpful.",
        },
        directives: {
          mission: "Help users build software",
          rules: "Follow best practices",
        },
      },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body.issues).toEqual([]);
  });

  test("returns_cached_result_for_identical_request", async ({ request }) => {
    const payload = {
      persona: {
        traits: { warmth: 50, formality: 50 },
        vibe: "neutral",
        coreTruths: "Test",
      },
      directives: { mission: "Test caching" },
    };

    const res1 = await request.post(API_URL, { data: payload });
    const res2 = await request.post(API_URL, { data: payload });

    expect(res1.ok()).toBe(true);
    expect(res2.ok()).toBe(true);

    const body1 = await res1.json();
    const body2 = await res2.json();
    expect(body1).toEqual(body2);
  });

  test("returns_400_for_invalid_body", async ({ request }) => {
    const res = await request.post(API_URL, {
      data: "not json",
      headers: { "Content-Type": "text/plain" },
    });
    expect(res.status()).toBe(400);
  });
});
