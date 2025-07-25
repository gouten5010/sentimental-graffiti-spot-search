// /src/utils/transformSpot.ts
import type { RawSpot, Spot } from '../data/types';

export function transformSpot(raw: RawSpot): Spot {
    return {
        id: String(raw.番号),
        region: raw.所在地,
        image: `${raw.スポット画像}.webp`,
        place: raw.場所名,
        link: raw.地図,
    };
}
