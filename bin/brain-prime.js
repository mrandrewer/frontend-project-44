#!/usr/bin/env node
import { runGame } from '../src/game.js';
import { getPrimeGameData, getPrimeManual } from '../src/games/prime.js';

runGame(getPrimeManual(), getPrimeGameData);
