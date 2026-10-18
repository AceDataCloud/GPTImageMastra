import { ServiceToolProvider, type ProviderOptions } from './provider.js';
export { AceToolError } from './provider.js';
export type { ProviderOptions as GPTImageToolProviderOptions } from './provider.js';

/** GPT Image tools through Ace Data Cloud, independently installable in Mastra. */
export class GPTImageToolProvider extends ServiceToolProvider {
  constructor(options: ProviderOptions = {}) {
    super({
      slug: 'gptimage',
      name: 'GPT Image by Ace Data Cloud',
      description: 'GPT Image image generation and image editing, and same-task result queries.',
      endpoint: 'https://openai.mcp.acedata.cloud/mcp',
      packageName: '@acedatacloud/mastra-gpt-image',
      toolPrefix: 'openai_',
      toolNames: ['openai_generate_image', 'openai_edit_image', 'openai_get_task', 'openai_list_image_models'],
      modelFamily: 'gpt-image-',
      modelTools: ['openai_generate_image', 'openai_edit_image'],
    }, options);
  }
}
