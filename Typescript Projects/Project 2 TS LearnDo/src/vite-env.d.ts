/// <reference types="vite/client" />

type LangType = "ja" | "hi" | "es" | "fr";

type wordType = {
  word: string;
  meaning: string;
  options: string[];
};

type StateType = {
  loading: boolean;
  result: string[];
  words: wordType[];
  error?: string;
};

type FetchedDataType = {
  translations: {
    text: string
  }[]
}