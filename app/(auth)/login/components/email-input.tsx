import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function EmailInput() {
    return (
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" autoCapitalize="none" autoComplete="email" />
        </div>
    );
}
