#!/usr/bin/env node
import { runGame } from '../src/game.js';
import { getGCDGameData, getGCDManual } from '../src/games/gcd.js';

runGame(getGCDManual(), getGCDGameData);
