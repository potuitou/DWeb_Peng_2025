import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import useLLMAudio from './hooks/useLLMAudio';

import BK from './assets/BK.png';
import Eames_Molded_Plastic_Dining_Chair from './assets/Eames_Molded_Plastic_Dining_Chair.png';
import Eames_Molded_Plastic_Rocking_Chair from './assets/Eames_Molded_Plastic_Rocking_Chair.png';
import Eames_Molded_Plywood_Dining_Chair from './assets/Eames_Molded_Plywood_Dining_Chair.png';
import Eames_Sofa_Compact from './assets/Eames_Sofa_Compact.png';
import Eames_Sofa from './assets/Eames_Sofa.png';
import Eames_Turned_Stool from './assets/Eames_Turned_Stool.png';
import Eames_Wire_Stool from './assets/Eames_Wire_Stool.png';

const CATEGORIES = ['ALL', 'CHAIR', 'STOOL', 'SOFA'];

const PRODUCTS = [
    { id: 'c1', name: 'Eames Molded Plastic Dining Chair', category: 'CHAIR', image: Eames_Molded_Plastic_Dining_Chair },
    { id: 'c2', name: 'Eames Molded Plastic Rocking Chair', category: 'CHAIR', image: Eames_Molded_Plastic_Rocking_Chair },
    { id: 'c3', name: 'Eames Molded Plywood Dining Chair', category: 'CHAIR', image: Eames_Molded_Plywood_Dining_Chair },
    { id: 's1', name: 'Eames Turned Stool', category: 'STOOL', image: Eames_Turned_Stool },
    { id: 's2', name: 'Eames Wire Stool', category: 'STOOL', image: Eames_Wire_Stool },
    { id: 'so1', name: 'Eames Sofa', category: 'SOFA', image: Eames_Sofa },
    { id: 'so2', name: 'Eames Sofa Compact', category: 'SOFA', image: Eames_Sofa_Compact },
];

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
            const product =
                filtered.find((p) => p.id === id) || PRODUCTS.find((p) => p.id === id);
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
