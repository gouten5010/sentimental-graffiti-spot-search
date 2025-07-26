import React, { useState } from 'react';
import type { Spot } from '../data/types';
import SpotRow from './SpotRow';
import Lightbox from './Lightbox';

type Props = {
    spots: Spot[];
};

export default function SpotTable({ spots }: Props) {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [lightboxAlt, setLightboxAlt] = useState<string>('');

    const openLightbox = (src: string, alt: string) => {
        setLightboxImage(src);
        setLightboxAlt(alt);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setLightboxAlt('');
    };

    return (
        <>
            <table className="w-full text-sm">
                <thead className="hidden md:table-header-group bg-gray-100">
                <tr>
                    <th className="border p-2 w-12">番号</th>
                    <th className="border p-2 w-24">所在地</th>
                    <th className="border p-2 w-40">スポット画像</th>
                    <th className="border p-2">場所名<span className="text-xs">（簡易説明）</span></th>
                    <th className="border p-2 w-60">地図<span className="text-xs">（ストリートビューのリンク）</span></th>
                </tr>
                </thead>
                <tbody id="spotTableBody">
                {spots.map((spot) => (
                    <SpotRow key={spot.id} spot={spot} onImageClick={openLightbox} />
                ))}
                </tbody>
            </table>

            <Lightbox
                src={lightboxImage ?? ''}
                alt={lightboxAlt}
                isOpen={!!lightboxImage}
                onClose={closeLightbox}
            />
        </>
    );
}
