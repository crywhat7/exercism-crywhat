// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this._width = width
    this._height = height
  }

  resize(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }
  set width(value) {
    this._width = value
  }

  get height() {
    return this._height
  }
  set height(value) {
    this._height = value
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this._x = x
    this._y = y
  }

  move(x, y) {
    if (x < 0) x = 0
    if (y < 0) y = 0
    this._x = x
    this._y = y
  }

  get x() {
    return this._x
  }
  
  set x(value) {
    this._x =  value
  }

  get y() {
    return this._y
  }

  set y(value) {
    this._y = value
  }
}

export class ProgramWindow {
  constructor() {
    this._size = new Size()
    this._screenSize = new Size(800,600)
    this._position = new Position()
  }
  
  // Size
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value
  }

  // ScreenSize
  get screenSize() {
    return this._screenSize;
  }
  set screenSize(value) {
    this._screenSize = value
  }

  // Position
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value
  }

  // Methods
  resize(newSz) {
    if (newSz.width < 1) newSz.width = 1
    if (newSz.height < 1) newSz.height = 1
    
    const ssz = this._screenSize
    const pos = this._position
    const maxW = ssz.width - pos.x
    const maxH = ssz.height - pos.y
    
    if (newSz.width > maxW) newSz.width = maxW
    if (newSz.height > maxH) newSz.height = maxH
    
    this._size = newSz
  }

  move(newPos) {
    if (newPos.x < 0) newPos.x = 0
    if (newPos.y < 0) newPos.y = 0

    const ssz = this._screenSize
    const sz = this._size

    const maxX = ssz.width - sz.width
    const maxY = ssz.height - sz.height
    if (newPos.x > maxX) newPos.x = maxX
    if (newPos.y > maxY) newPos.y = maxY
    
    this._position = newPos
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400,300))
  programWindow.move(new Position(100,150))
  return programWindow
}
