import React from 'react';
import cx from 'classnames';
import Button from './Button';

export default function Navbar({ categories, active, onChange }) {
  const hover =
    'transition-all duration-300 hover:bg-white/35 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.18)]';
  const activeCls =
    'backdrop-blur-md bg-white/55 shadow-[0px_12px_32px_rgba(0,0,0,0.25)] border border-white/70 text-black';
  const idleCls = 'bg-white/15 border-none text-black/70';

  return (
    <div className="glass mx-auto w-full max-w-[1008px] px-6 py-3">
      <div className="flex items-center justify-between gap-3">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <Button
              key={cat}
              rounded
              className={cx(
                'px-6 py-3 uppercase tracking-[0.12em] text-sm',
                hover,
                isActive ? activeCls : idleCls
              )}
              onClick={() => onChange(cat)}
              aria-pressed={isActive}
            >
              {cat}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
