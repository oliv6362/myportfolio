import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Pager component props.
 *
 */
interface PagerProps {
    page: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
}

/**
 * Pager Component that renders a pagination control with:
 * 1. **Previous** and **Next** arrows (disabled at the bounds).  
 * 2. **Dot indicators**—one per page—highlighting the current page and clickable to navigate.
 */
export const Pager: React.FC<PagerProps> = ({ page, total, onPrev, onNext }) => {
    return (
        <nav className="my-6 flex items-center justify-center gap-4">
            <button
                onClick={onPrev}
                disabled={page === 0}
                className="rounded-full p-2 text-2xl text-white/70 enabled:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronLeft />
            </button>

            <div className="flex items-center space-x-2">
                {Array.from({ length: total }).map((_, idx) => (
                    <button
                        key={idx}
                        aria-label={`Go to page ${idx + 1}`}
                        className={`w-3 h-3 rounded-full transition-colors  ${idx === page ? 'bg-white' : 'bg-white/40'} cursor-pointer`}
                        onClick={() => idx !== page && (idx < page ? onPrev() : onNext())} />
                ))}
            </div>

            <button
                onClick={onNext}
                disabled={page === total - 1}
                className="rounded-full p-2 text-2xl text-white/70 enabled:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronRight />
            </button>
        </nav>
    );
};
