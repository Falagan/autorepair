import { GITHUB_LANGUAGES_COLORS, GITHUB_TOPICS_COLORS } from '../config/github.config';

export const UiTools = {
  setGitHubTopicsColors: (topic: string) => {
    const color = GITHUB_TOPICS_COLORS[topic as keyof typeof GITHUB_TOPICS_COLORS];
    return color ? color : 'gray';
  },

  setGitHubLanguagesColors: (language: string) => {
    const color = GITHUB_LANGUAGES_COLORS[language as keyof typeof GITHUB_LANGUAGES_COLORS];
    return color ? color : 'gray';
  },

  setToolingToolsColors: (tool: any) => {
    const color = GITHUB_TOPICS_COLORS[tool as keyof typeof GITHUB_TOPICS_COLORS];
    return color ? color : 'gray';
  },
};
