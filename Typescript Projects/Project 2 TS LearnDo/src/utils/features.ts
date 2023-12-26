import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMCQ = (meaning: { Text: string }[], idx: number): string[] => {
  const correctAns: string = meaning[idx].Text;

  const allMeaningExceptForCorrect = meaning.filter(
    (i) => i.Text !== correctAns
  );

  const incorrectOptions: string[] = _.sampleSize(
    allMeaningExceptForCorrect,
    3
  ).map((i) => i.Text);

  const mcqOptions = _.shuffle([...incorrectOptions, correctAns]);
  return mcqOptions;
};

export const translateWords = async (params: LangType): Promise<wordType[]> => {
  try {
    const words = generate(8).map((item) => ({ Text: item }));

    const response = await axios.post(
      `https://microsoft-translator-text.p.rapidapi.com/translate`,
      words,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "8e416a1d13mshbfe110c2b31d7d9p1225cbjsn9e93b234097c",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const recieve: FetchedDataType[] = response.data;

    const arr: wordType[] = recieve.map((item, index) => {
      const options: string[] = generateMCQ(words, index);
      return {
        word: item.translations[0].text,
        meaning: words[index].Text,
        options,
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Some Error");
  }
};


export const countMatchingElements = (
  arr1: string[],
  arr2: string[]
): number => {
  // console.log(arr1, arr2)
  // return 10
  if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");
  let matchedCount = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) matchedCount++;
  }

  return matchedCount;
};