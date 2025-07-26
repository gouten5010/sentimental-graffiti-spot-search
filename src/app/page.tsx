// /app/page.tsx
import { getSpots } from '../data/getSpots';
import SpotTableClient from '../components/SpotTableClient';

export const metadata = {
    title: 'センチスポット一覧',
};

export default async function HomePage() {
    const spots = await getSpots();

    return (
        <main className="p-4">
            <h1 className="text-4xl font-bold mb-4">センチスポット一覧</h1>
            <p className="mb-4">『センチメンタルグラフティ』のゲーム背景に使われた場所のご案内</p>
            <SpotTableClient spots={spots} />
        </main>
    );
}
