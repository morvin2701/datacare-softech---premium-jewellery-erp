// Prints the largest face rectangle in each image as JSON (pixel coords, top-left origin).
// Usage: swift scripts/faces.swift img1 img2 ...
import Foundation
import Vision
import CoreImage

var out: [String: [String: Int]] = [:]
for path in CommandLine.arguments.dropFirst() {
  guard let img = CIImage(contentsOf: URL(fileURLWithPath: path)) else { continue }
  let req = VNDetectFaceRectanglesRequest()
  let h = VNImageRequestHandler(ciImage: img)
  try? h.perform([req])
  guard let face = req.results?.max(by: { $0.boundingBox.width < $1.boundingBox.width }) else { continue }
  let W = img.extent.width, H = img.extent.height, b = face.boundingBox
  out[path] = ["x": Int(b.minX * W), "y": Int((1 - b.maxY) * H), "w": Int(b.width * W), "h": Int(b.height * H), "W": Int(W), "H": Int(H)]
}
let data = try JSONSerialization.data(withJSONObject: out)
print(String(data: data, encoding: .utf8)!)
