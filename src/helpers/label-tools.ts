import { ImageProcessor } from './image-processor'
import { ImageResizer } from './image-resizer'

export default {
  ImageProcessor: new ImageProcessor(),
  ImageResizer: new ImageResizer(),
  Logger: function (msg: any) {
    console.log(msg)
  }
}
