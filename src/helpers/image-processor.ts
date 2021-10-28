module.exports = class ImageProcessor {
  processor: any;
  contstructor() {
    this.processor = undefined
  }

  processImage(data: any, cb: any) {
    LabelTools.Logger('Image Processor not defined')
    cb([])
  }

  processZplImage(width: any, height: any, data: any) {}
}
