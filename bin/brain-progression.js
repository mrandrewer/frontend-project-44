#!/usr/bin/env node
import { runGame } from '../src/game.js';
import { getProgressionGameData, getProgressionManual } from '../src/games/progression.js';

runGame(getProgressionManual(), getProgressionGameData);
