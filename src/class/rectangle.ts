export class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public getWidth() {
    return this._width;
  }

  public setWidth(width: number) {
    this._width = width;
  }

  public getHeight() {
    return this._height;
  }

  public setHeight(height: number) {
    this._height = height;
  }

  public getArea() {
    return this._width * this._height;
  }
}

export class Square extends Rectangle {

  public square(talla: number) {
    super.setWidth(talla);
    super.setHeight(talla);
  }

  public setWidth(width: number) {
    super.setWidth(width);
    super.setHeight(width);
  }
  public setHeight(height: number) {
    super.setWidth(height);
    super.setHeight(height);
  }
}
