import type { Spot } from './types';
import { transformSpot } from '../utils/transformSpot';

const USE_SHEET = import.meta.env.PUBLIC_USE_SHEET === 'true';
const SHEET_URL = import.meta.env.PUBLIC_SHEET_URL;
const JSON_URL = import.meta.env.PUBLIC_JSON_URL; // ← 開発用の JSON パスもここで管理

export async function getSpots(): Promise<Spot[]> {
  const url = USE_SHEET ? SHEET_URL : JSON_URL;

  const res = await fetch(url);
  const raw = await res.json();
  return raw.map(transformSpot);
}
