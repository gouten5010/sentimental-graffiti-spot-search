// /src/components/SpotTableClient.tsx
'use client';

import { useEffect, useState } from 'react';
import SpotTable from './SpotTable';
import type { Spot } from '../data/types';

type Props = {
    spots: Spot[];
};

const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
    '岐阜県', '静岡県', '愛知県', '三重県',
    '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県',
    '沖縄県',
];
const trailing = ['未発見', '検証中'];

export default function SpotTableClient({ spots }: Props) {
    const [region, setRegion] = useState('');
    const [keyword, setKeyword] = useState('');

    const sortedRegions = (() => {
        const allRegions = [...new Set(spots.map((s) => s.region).filter(Boolean))];
        return [
            ...prefectures.filter((p) => allRegions.includes(p)),
            ...allRegions.filter((r) => !prefectures.includes(r) && !trailing.includes(r)).sort(),
            ...trailing.filter((r) => allRegions.includes(r)),
        ];
    })();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setRegion(params.get('region') || '');
        setKeyword(params.get('keyword') || '');
    }, []);

    useEffect(() => {
        const newParams = new URLSearchParams();
        if (region) newParams.set('region', region);
        if (keyword) newParams.set('keyword', keyword);
        const newURL = `${location.pathname}${newParams.toString() ? '?' + newParams.toString() : ''}`;
        history.replaceState(null, '', newURL);
    }, [region, keyword]);

    const filtered = spots.filter((s) => {
        const matchRegion = !region || s.region === region;
        const lowerKeyword = keyword.toLowerCase();
        const matchKeyword =
            !keyword ||
            (s.region?.toLowerCase().includes(lowerKeyword) ?? false) ||
            (s.place?.toLowerCase().includes(lowerKeyword) ?? false);
        return matchRegion && matchKeyword;
    });

    return (
        <>
            <div className="mb-4 grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8">
                <div className="grid grid-cols-[3rem_1fr] items-center">
                    <label htmlFor="regionFilter" className="text-sm font-semibold">地域：</label>
                    <select
                        id="regionFilter"
                        className="border w-full px-2 py-1 text-sm"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    >
                        <option value="">すべての地域</option>
                        {sortedRegions.map((region) => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-[6rem_1fr] items-center">
                    <label htmlFor="keywordFilter" className="text-sm font-semibold">キーワード：</label>
                    <input
                        id="keywordFilter"
                        type="text"
                        className="border px-2 py-1 w-full text-sm"
                        placeholder="場所名や所在地など"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
            </div>

            <SpotTable spots={filtered} />
        </>
    );
}
