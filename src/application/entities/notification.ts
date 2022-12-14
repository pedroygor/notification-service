export class Notification {
  constructor(private _content: string, private _category: string) {}

  set content(content: string) {
    this._content = content;
  }

  get content(): string {
    return this._content;
  }

  set category(category: string) {
    this._category = category;
  }

  get category(): string {
    return this._category;
  }
}
