import { MastraEditor } from '@mastra/editor';
import { GPTImageToolProvider } from '../src/index.js';

// Pass editor into your existing new Mastra({ ..., editor, storage }) configuration.
// Its API key belongs to the server owner; it is not a per-user OAuth connection.
export function createGPTImageEditor(apiKey: string) {
  const gptimage = new GPTImageToolProvider({ apiKey });
  const editor = new MastraEditor({ toolProviders: { gptimage } });
  return { gptimage, editor };
}

// Code-configured agents can use the same provider without stored-agent editing.
export async function createGPTImageTools(apiKey: string) {
  const gptimage = new GPTImageToolProvider({ apiKey });
  const tools = await gptimage.resolveTools(['openai_generate_image', 'openai_get_task']);
  return { gptimage, tools };
}
