import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import useLLMAudio from './hooks/useLLMAudio';

import BK from './assets/BK.png';

//import data set
import { productInfo } from './data/productInfo';
const { CATEGORIES, PRODUCTS } = productInfo;


export default function App() {
    const [active, setActive] = useState('ALL');
    const [selectedId, setSelectedId] = useState(null);
    const narrator = useLLMAudio();

    const filtered = useMemo(
        () => (active === 'ALL' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
        [active]
    );

    // Deselect if current selection disappears due to filter change
    useEffect(() => {
        if (selectedId && !filtered.some((i) => i.id === selectedId)) {
            setSelectedId(null);
            narrator.stop();
        }
    }, [filtered, selectedId, narrator]);

    const handleCategoryChange = (cat) => {
        setActive(cat);
        setSelectedId(null);
        narrator.stop();
    };

    const handleSelect = (id) => {
        // Always stop previous narration first (cancels any in-flight tasks).
        narrator.stop();

        setSelectedId((prev) => {
            if (prev === id) return null; // toggle off
            const product = filtered.find((p) => p.id === id) || PRODUCTS.find((p) => p.id === id);
            narrator.speak({ name: product.name, category: product.category });
            return id;
        });
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <img src={BK} alt="" className="w-full h-full object-cover opacity-40" />
            </div>

            <main className="relative mx-auto w-full max-w-[1008px] px-6 py-10">
                <Navbar categories={CATEGORIES} active={active} onChange={handleCategoryChange} />
                <div className="h-6" />
                <CardGrid items={filtered} selectedId={selectedId} onSelect={handleSelect} />
            </main>
        </div>
    );
}