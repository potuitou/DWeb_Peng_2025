import React from "react";
import cx from "classnames";

//Define the behavior of a product card
//item will take - item.image(URL of the img), item.name(name of the product)
export default function ProductCard({ item, selected, onSelect, className }) {
    //always show
    const base =
        "flex h-full w-full min-w-0 flex-col justify-between rounded-[24px] border p-6 backdrop-blur-md shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2";
    const hover =
        "hover:bg-white/35 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.18)]";
    const state = selected
        ? "bg-white/55 shadow-[0_12px_32px_rgba(0,0,0,0.25)] border-white/70"
        : "bg-[rgba(28,28,28,0.05)] border-transparent";

    return (
        <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            className={cx(base, hover, state, className)}
        >
            <div className="flex h-full flex-1 items-center justify-center">
                <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full w-full object-contain mix-blend-multiply"
                />
            </div>

            <p className="mt-6 text-center text-[16px] leading-5 text-[#1C1C1C]">
                {item.name}
            </p>
        </button>
    );
}
