import { transformSpot } from '../utils/transformSpot';
import type { Spot } from './types';

const USE_SHEET = process.env.NEXT_PUBLIC_USE_SHEET === 'true';
const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL;
const JSON_URL = process.env.NEXT_PUBLIC_JSON_URL;

export async function getSpots(): Promise<Spot[]> {
    const url = USE_SHEET ? SHEET_URL : JSON_URL;

    if (!url) {
        throw new Error('環境変数に URL が指定されていません。');
    }

    const res = await fetch(url);
    const raw = await res.json();
    return raw.map(transformSpot);
}
