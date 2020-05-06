# ConvTranspose2d_for_ONNX
How to convert nn.ConvTranspose2d to ONNX.js model

Please read jupyter notebook.
ONNX.js does not suppoet ConvTranspose2d layer. (as of May 1, 2020)

I make custom Conv2d layer which work as ConvTranspose2d with 2 or 1 stride.



