# Proposed community integration: GPT Image by Ace Data Cloud

Prepared 2026-10-18; technical contribution request submitted at https://github.com/mastra-ai/mastra/issues/27373. The maintainer closed this request on 2026-10-18 (Asia/Shanghai), stating that this is not being pursued now. No official admission was granted. Decision: https://github.com/mastra-ai/mastra/issues/27373#issuecomment-6239261501 . Independent ToolProvider distribution remains available.

## Integration surface

An independent `@acedatacloud/mastra-gpt-image` ToolProvider, registering as **GPT Image by Ace Data Cloud** under `gptimage`. Users can search GPT Image, image generation and image editing, and task queries. Branding describes the service and identifies Ace Data Cloud as the maintainer; it does not claim a GPT Image or Mastra partnership.

Source: https://github.com/AceDataCloud/GPTImageMastra

The adapter reuses the existing canonical GPT Image MCP protocol/schemas instead of duplicating its API client. It supports server-owned API-key authentication, catalog/search/pagination, exact tool allowlists, MCP JSON schemas narrowed to the advertised GPT Image model family, description overrides and executable Mastra tools. It calls tools once, preserves async task IDs, and rejects JSON/MCP errors and explicit failed tasks. It has no per-user OAuth capability.

## Proposed official documentation entry

Suggested title: **GPT Image by Ace Data Cloud**.

Suggested description: **Add GPT Image image generation and image editing, and same-task result queries to Mastra agents through an independent ToolProvider.**

Proposed path, subject to maintainer feedback: `docs/src/content/en/integrations/tools/gpt-image.mdx`. Do not hand-edit generated model documentation. Link the real released package and the bilingual onboarding guide after release; include server configuration and generation/query tool examples. Keep pricing on the live service page.

## Contribution and admission gates

Mastra's CONTRIBUTING.md requires a linked issue for every PR and maintainer feedback before a new feature PR. No public self-service ToolProvider marketplace uploader or arbitrary Connect admission manifest has been established. Do not invent one or equate npm publication with official listing. The shared request is closed for now. Do not reopen, submit a duplicate request, or open an upstream PR against it without a new invitation or policy change. Continue the independent package/onboarding path; release and real Studio visual verification remain necessary. Do not submit a competing models.dev provider PR; #8873 has a separate owner.

## Free verification recipe for the UI owner

Use a disposable existing Mastra project with core 1.75.0, editor 0.16.0, database storage and an existing code-defined agent. Install the candidate tarball, register GPTImageToolProvider in MastraEditor, and use the existing authorized server key only for MCP discovery. Open Studio → Agents → agent → Editor → Tools → Integration Tools. Search/select GPT Image by Ace Data Cloud, inspect the toolkit, select `openai_list_image_models` and `openai_get_task`, and save a draft. Capture the real service name, tool list and schema; redact keys. Call only `openai_list_image_models`; do not call generation or query arbitrary customer tasks. This verifies local registered UI, not global official discovery.

For an offline screen capture, use an existing local MCP fixture with dummy credentials. Label that capture as a local fixture, not a hosted authorization test. GUI services/screens are coordinated elsewhere; this package task does not start Studio.
