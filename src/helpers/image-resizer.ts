export class ImageResizer {
  constructor() {}
  resize(targetWidth: number, targetHeight: number, width: number, height: number, data: any) {
    var result: number[] = []
    var dx = width / targetWidth
    var dy = height / targetHeight
    for (var y = 0; y < targetHeight; y++) {
      for (var x = 0; x < targetWidth; x++) {
        var iy = Math.floor(dy * y)
        var ix = Math.floor(dx * x)
        var value = data[iy * width + ix]
        result.push(value ? 1 : 0)
      }
    }
    return result
  }
}
