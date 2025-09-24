import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <h1 className="text-2xl md:text-4xl mb-6">Ruang Digital untuk Pengetahuan Premium</h1>
                <p className="text-sm md:text-md mb-8 max-w-3xl mx-auto leading-relaxed">
                    Temukan wawasan mendalam, analisis berkualitas, dan perspektif segar dalam dunia teknologi, bisnis, dan inovasi.
                </p>
                <div className="flex items-center justify-center gap-2">
                    <Button asChild>
                        <Link href="#featured-post">Jelajahi Artikel</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
