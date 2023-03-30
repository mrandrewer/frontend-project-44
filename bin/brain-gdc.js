#!/usr/bin/env node
import { runGame } from '../src/game.js';
import { getGDCGameData, getGDCManual } from '../src/games/gdc.js';

runGame(getGDCManual(), getGDCGameData);
