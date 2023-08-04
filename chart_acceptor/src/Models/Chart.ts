export class Chart {
    private readonly name: string;
    private readonly path: string;
    private readonly size: number;

    public constructor(name: string, path: string, size: number) {
        this.name = name;
        this.path = path;
        this.size = size;
    }

    public Name(): string {
        return this.name
    }

    public Path(): string {
        return this.path
    }

    public Size(): number {
        return this.size
    }
}