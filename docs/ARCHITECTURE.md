# Architecture — Agent Personality System

## File Format (5-file)

Each agent's personality is stored as 5 markdown files on the gateway:

| File            | Purpose                                         |
| --------------- | ----------------------------------------------- |
| `PERSONA.md`    | Identity, traits, vibe, core truths, boundaries |
| `DIRECTIVES.md` | Mission, rules, priorities, output format       |
| `USER.md`       | User profile, preferences, context              |
| `HEARTBEAT.md`  | Heartbeat configuration                         |
| `MEMORY.md`     | Durable cross-session memory                    |

### Legacy Format (7-file)

Older agents may use the legacy 7-file format:

- `IDENTITY.md` + `SOUL.md` → merged into `PERSONA.md`
- `AGENTS.md` + `TOOLS.md` → merged into `DIRECTIVES.md`
- `USER.md`, `HEARTBEAT.md`, `MEMORY.md` — unchanged

Migration is automatic: `migrateAgentFilesIfNeeded()` in `src/lib/gateway/agentFiles.ts` runs on first read.

## Key Types

```
PersonalityBuilderDraft     (src/lib/agents/personalityBuilder.ts)
├── persona: { name, creature, vibe, traits, coreTruths, boundaries, ... }
├── directives: { mission, rules, priorities, outputFormat, toolNotes }
├── user: { name, callThem, pronouns, timezone, notes, context }
├── heartbeat: string
└── memory: string

PersonalityTraits           (src/lib/agents/personalityTraits.ts)
├── formality:   0–100
├── verbosity:   0–100
├── creativity:  0–100
├── proactivity: 0–100
└── warmth:      0–100

AgentTemplate               (src/features/agents/templates/agentTemplates.ts)
├── id, icon, defaultModel
├── capabilities: { commandMode, webAccess, fileTools }
├── persona: AgentTemplatePersona
└── directives: AgentTemplateDirectives
```

## Data Flow

### Creation (Wizard → Gateway)

```
User fills wizard
  → useCreateAgentWizard() builds state
  → buildPayload() → AgentCreateModalSubmitPayload
  → createAgentBootstrapWorkflow writes persona files via gateway
  → Gateway stores 5 markdown files
```

### Editing (Brain Panel → Gateway)

```
User edits in Brain Panel (structured or expert mode)
  → handleDraftChange() → serializePersonalityFiles()
  → setAgentFileContent() updates local state
  → Auto-save debounce (500ms) → saveAgentFiles()
  → writeGatewayAgentFile() per file
```

### Parsing (Gateway → UI)

```
readAllAgentFiles()
  → migrateAgentFilesIfNeeded() (legacy auto-migration)
  → read 5 files from gateway
  → parsePersonalityFiles() → PersonalityBuilderDraft
  → UI renders structured/expert editors
```

## Component Map

```
AgentCreateModal (lazy-loaded at app level)
├── CreationModeSelector
├── TemplateSelector
├── ConversationalBuilder (lazy)
├── StepPersona (lazy)
│   ├── PersonalityTraitSliders
│   ├── CoreTruthsEditor
│   ├── BoundariesEditor
│   ├── MissionEditor
│   └── UserContextEditor
├── Model selector (inline)
├── Capabilities (inline)
└── PersonaPreview (lazy)

AgentBrainPanel (lazy-loaded at app level)
├── BrainPanelToggle
├── PersonaValidationBanner
├── BrainPanelStructured
│   └── PersonalityRadar (SVG)
└── MarkdownEditor (×3, expert mode)
```

## API Routes

| Route                    | Method | Purpose                                |
| ------------------------ | ------ | -------------------------------------- |
| `/api/persona-builder`   | POST   | LLM-powered persona generation         |
| `/api/persona-validator` | POST   | Heuristic coherence checks (cached 5m) |
| `/api/persona-preview`   | POST   | Sample response generation             |

## i18n

- Locales: `en`, `fr` (in `messages/en.json`, `messages/fr.json`)
- Template personalities translated under `templatePersonalities.*`
- All UI strings via `next-intl` `useTranslations()` hooks
