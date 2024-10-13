export class Item {
  constructor(private name: string, private price: number) {}

  public say(): string {
    return `書名：${this.name}  価格: ${this.price}円`;
  }
}
