// /app/page.tsx
import SpotTableClient from '../components/SpotTableClient';

export const metadata = {
    title: 'センチメンタルグラフティ データ・スポット',
    description: ''
};

export default function HomePage() {
    return (
        <main className="p-4">
            <h1 className="text-4xl font-bold mb-4">センチスポット一覧</h1>
            <p className="mb-4">『センチメンタルグラフティ』のゲーム背景に使われた場所のご案内</p>
            <SpotTableClient />
        </main>
    );
}
