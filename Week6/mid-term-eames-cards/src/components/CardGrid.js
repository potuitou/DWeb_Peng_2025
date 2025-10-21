import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

//Auto adjust column & equal sizing
export default function CardGrid({ items, selectedId, onSelect }) {
    //React Hook - Cache the calculated number
    const columns = useMemo(() => {
        const n = Array.isArray(items) ? items.length : 0;
        //limit the number within 1 - 7
        return Math.max(1, Math.min(7, n));
    }, [items]);

    return (
        //"glass" base
        <div className="glass-dim mx-auto w-full max-w-[1008px] h-[680px] p-6 overflow-hidden">
            {/*"glass" cards */}
            <div
                className="grid h-full w-full items-stretch gap-6"
                //dynamic column
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gridAutoRows: '1fr',
                }}
            >
                {items.map((item, idx) => (
                    <ProductCard
                        key={item.id ?? idx}
                        item={item}
                        selected={item.id === selectedId}
                        onSelect={() => onSelect?.(item.id)}
                        className="h-full"
                    />
                ))}
            </div>
        </div>
    );
}
