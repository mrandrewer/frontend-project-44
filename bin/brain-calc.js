#!/usr/bin/env node
import { runGame } from '../src/game.js';
import { getCalcGameData, getCalcManual } from '../src/games/calc.js';

runGame(getCalcManual(), getCalcGameData);
