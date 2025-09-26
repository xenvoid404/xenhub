import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 border-b">
            <div className="relative text-center max-w-6xl mx-auto px-6">
                <h1 className="text-2xl md:text-4xl mb-4">Ruang Digital untuk Pengetahuan Premium</h1>
                <p className="text-sm md:text-md mb-8 max-w-3xl mx-auto leading-relaxed">
                    Temukan wawasan mendalam, analisis berkualitas, dan perspektif segar dalam dunia teknologi, bisnis, dan inovasi.
                </p>
            </div>
        </section>
    );
}
