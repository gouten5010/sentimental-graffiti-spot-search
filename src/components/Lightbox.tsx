import React from 'react';

type LightboxProps = {
    src: string;
    alt?: string;
    isOpen: boolean;
    onClose: () => void;
};

export default function Lightbox({ src, alt = '', isOpen, onClose }: LightboxProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            {/* 背景クリックで閉じる */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* モーダル本体 */}
            <div className="relative z-10 max-w-4xl w-full">
                {/* 閉じるボタン：モーダル右上から外へはみ出す */}
                <button
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 z-20 shadow"
                    onClick={onClose}
                    aria-label="閉じる"
                >
                    ×
                </button>

                {/* 画像 */}
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-contain"
                />

                {/* キャプション */}
                {alt && (
                    <p className="mt-2 text-center text-sm text-gray-300">{alt}</p>
                )}
            </div>
        </div>
    );
}
