import React from 'react';
import type { Spot } from '../data/types';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Props = {
    spot: Spot;
    onImageClick?: (src: string, alt: string) => void;
};

export default function SpotRow({ spot, onImageClick }: Props)  {
    if (!spot) {
        throw new Error('Missing `spot` prop in SpotRow');
    }

    return (
        <tr className="block md:table-row mb-4 md:mb-0">
            <td className="block md:table-cell p-2 border border-gray-300 relative pl-28 md:pl-2 before:content-['番号'] before:absolute before:left-2 before:font-bold md:before:content-none">
                No.{spot.id}
            </td>
            <td className="block md:table-cell p-2 border-b border-x md:border-t border-gray-300 relative pl-28 md:pl-2 before:content-['所在地'] before:absolute before:left-2 before:font-bold md:before:content-none">
                {spot.region}
            </td>
            <td className="block md:table-cell p-2 border-b border-x md:border-t border-gray-300 relative pl-28 md:pl-2 before:content-['スポット画像'] before:absolute before:left-2 before:font-bold md:before:content-none">
                <img
                    src={`${basePath}/cg_img/${spot.image}`}
                    alt={`No.${spot.id}｜${spot.place}` || 'No Image'}
                    className="cursor-pointer"
                    onClick={() => {
                        if (onImageClick) {
                            onImageClick(`${basePath}/cg_img/${spot.image}`, `No.${spot.id}｜${spot.place}`);
                        }
                    }}
                />
            </td>
            <td className="block md:table-cell p-2 border-b border-x md:border-t border-gray-300 relative pl-28 md:pl-2 before:content-['場所名'] before:absolute before:left-2 before:font-bold md:before:content-none">
                {spot.place || '-'}
            </td>
            <td className="block md:table-cell p-2 border-b border-x md:border-t border-gray-300 relative pl-28 md:pl-2 before:content-['地図'] before:absolute before:left-2 before:font-bold md:before:content-none">
                {spot.link ? (
                    <a
                        href={spot.link}
                        className="text-blue-600 underline hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ストリートビューで確認
                    </a>
                ) : (
                    '-'
                )}
            </td>
        </tr>
    );
}
