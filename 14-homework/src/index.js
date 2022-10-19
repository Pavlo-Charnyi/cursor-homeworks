import addBackground from "./components/AddBackground.js";
import generateBlocks from "./components/GenerateBlocks.js";
import { generateBlocksInterval } from "./components/GenerateBlocksInterval.js";
import { getRandomChinese } from "./components/GetRandomChinese.js";
import { getCharactersInfoTable } from "./components/GetStarwarsCharacters.js";

getCharactersInfoTable("https://swapi.dev/api/films/2");
addBackground();
generateBlocks();
generateBlocksInterval();
getRandomChinese();
