#!/usr/bin/env node
import { runGame } from '../src/game.js';
import { getEvenGameData, getEvenManual } from '../src/games/even.js';

runGame(getEvenManual(), getEvenGameData);
