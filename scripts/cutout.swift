// Lifts the person out of a photo and places them on a white background.
// Uses Apple Vision (macOS 14+). Usage: swift scripts/cutout.swift in.jpg out.png [transparent]
import Foundation
import Vision
import CoreImage
import AppKit

let args = CommandLine.arguments
guard args.count >= 3, let src = CIImage(contentsOf: URL(fileURLWithPath: args[1])) else { print("usage: cutout in out"); exit(1) }
let req = VNGenerateForegroundInstanceMaskRequest()
let handler = VNImageRequestHandler(ciImage: src)
try handler.perform([req])
guard let result = req.results?.first else { print("no subject found"); exit(2) }
let maskBuffer = try result.generateScaledMaskForImage(forInstances: result.allInstances, from: handler)
let mask = CIImage(cvPixelBuffer: maskBuffer)
let bgColor: CIColor = args.count > 3 && args[3] == "transparent" ? .clear : .white
let white = CIImage(color: bgColor).cropped(to: src.extent)
let blend = CIFilter(name: "CIBlendWithMask", parameters: [kCIInputImageKey: src, kCIInputBackgroundImageKey: white, kCIInputMaskImageKey: mask])!
let out = blend.outputImage!.cropped(to: src.extent)
let ctx = CIContext()
let cg = ctx.createCGImage(out, from: out.extent)!
let rep = NSBitmapImageRep(cgImage: cg)
try rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: args[2]))
print("ok", Int(out.extent.width), Int(out.extent.height))
