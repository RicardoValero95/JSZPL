import { ImageProcessor } from './image-processor'
import { ImageResizer } from './image-resizer'
const LabelTools = {
  ImageProcessor: new ImageProcessor(),
  ImageResizer: new ImageResizer(),
  Logger: function (msg: any) {
    console.log(msg)
  }
}
export default LabelTools
