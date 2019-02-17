interface Rect {
  top: number
  bottom: number
}

export const aberrationRatio = (rect: Rect, height: number, amt: number = 2) =>
  ((height - rect.top - rect.bottom) / height) * amt
