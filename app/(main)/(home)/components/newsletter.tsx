import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Newsletter() {
    return (
        <section className="py-20 px-6 bg-muted/20">
            <div className="mx-auto max-w-4xl">
                <Card className="rounded-2xl overflow-hidden text-center">
                    <CardHeader className="pt-10">
                        <CardTitle className="text-2xl md:text-3xl">Jangan Lewatkan Update Terbaru!</CardTitle>
                        <CardDescription className="max-w-md mx-auto pt-2">Berlangganan newsletter kami dan dapatkan artikel, tips, dan sumber daya terbaru langsung di kotak masuk Anda.</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-10">
                        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mt-4">
                            <Input type="email" placeholder="Masukkan email Anda" className="flex-grow" />
                            <Button type="submit">Berlangganan</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
