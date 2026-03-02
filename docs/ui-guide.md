# Studio UI Guide

This doc describes the current Studio IA and behavior.

## Agent Surfaces

### Chat (default)

- Selecting an agent opens chat as the primary workspace.
- Chat header controls include:
  - New session
  - Brain (personality) shortcut
  - Settings shortcut
- New session resets the current agent session and clears visible transcript state in Studio.

### Settings Sidebar

- The settings cog opens one sidebar with four tabs:
  1. Capabilities
  2. Automations
  3. Advanced
- Brain/Personality is a separate panel (see below).

## Brain Panel (Personality)

- The Brain panel is a dedicated full-panel editor for agent personality.
- Two editing modes:
  - **Structured** — form-based editor with sections for Persona, Directives, User Context
  - **Expert** — raw markdown editors for PERSONA.md, DIRECTIVES.md, USER.md
- Personality is stored in 5 files (new format):
  - `PERSONA.md` — name, creature, vibe, emoji, avatar, core truths, boundaries, continuity, traits
  - `DIRECTIVES.md` — mission, rules, priorities, output format, tool notes
  - `USER.md` — user name, pronouns, timezone, notes, context
  - `HEARTBEAT.md` — heartbeat configuration
  - `MEMORY.md` — durable memory
- Legacy 7-file format (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md) is auto-migrated on first open.
- Auto-save with 500ms debounce; status indicator shows "Saving..." / "Saved".
- Validation banner detects persona contradictions (trait tensions, missing fields).

## Agent Creation Wizard

- 5-step wizard with three creation modes:
  1. **Template** — pick from 14 pre-built agent templates
  2. **Conversational** — describe the agent in natural language; AI generates the persona
  3. **Blank** — start from scratch
- Steps:
  - Step 0: Mode selection
  - Step 1: Identity (name, description, avatar; template selector or conversational builder)
  - Step 2: Persona & Directives (traits sliders, core truths, boundaries, mission, rules)
  - Step 3: Model selection (grouped by provider, with template recommendation)
  - Step 4: Capabilities (commands, web access, file tools, persona preview)
- Heavy components (StepPersona, ConversationalBuilder, PersonaPreview) are lazy-loaded.
- Keyboard navigation: Escape closes, Tab cycles within focus trap.

## Capabilities

- Capabilities exposes direct controls (no role preset labels):
  - Run commands: Off / Ask / Auto
  - Web access: Off / On
  - File tools: Off / On
- Skills and Browser automation are visible as coming-soon toggles.

## Automations

- User-facing language is schedules/automations (not cron-first terminology).
- Schedule creation uses template -> task -> schedule -> review flow.
- Heartbeats are represented in this tab as coming soon.

## Advanced

- Advanced contains:
  - Display toggles (Show tool calls, Show thinking)
  - Open Full Control UI
  - Delete agent (danger zone)
- Session controls are not in Advanced.

## API Endpoints (Persona)

### POST `/api/persona-builder`

- Input: `{ message: string, history?: Array }` — user description of desired agent
- Output: `{ result: PersonaBuilderResult }` — full structured persona JSON
- Uses LLM to generate persona from natural language description.

### POST `/api/persona-validator`

- Input: `{ persona: { traits, vibe, coreTruths, boundaries }, directives: { mission, rules, ... } }`
- Output: `{ issues: Array<{ severity, message, field }> }`
- Detects contradictions (e.g., high warmth + high formality) and missing fields.
- Results cached in-memory for 5 minutes.

### POST `/api/persona-preview`

- Input: `{ persona, directives, prompts: string[] }`
- Output: `{ responses: string[] }`
- Generates sample responses to test prompts using the agent's persona.
