import Link from 'next/link';

interface TextLinkProps {
    text: string;
    route: string;
    action: string;
}

export function TextLink({ text, route, action }: TextLinkProps) {
    return (
        <div className="text-center text-sm text-muted-foreground">
            {text}{' '}
            <Link href={route} className="text-blue-500 hover:underline">
                {action}
            </Link>
        </div>
    );
}
