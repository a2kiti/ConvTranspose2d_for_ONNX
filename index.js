async function runGenerate() {
  // Create an ONNX inference session.
  const session = new onnx.InferenceSession({ backendHint: 'cpu' });

  // Load an ONNX model. 
  await session.loadModel("./netG.onnx");

  // make input tensor
  var z = ndarray(new Float32Array(1 * 100 * 1 * 1), [1, 100, 1, 1])
  for (var j = 0; j < 100; ++j) {
    z.set(0, j, 0, 0, rnorm());
  }
  const zTensor = new onnx.Tensor(z.data, 'float32', [1, 100, 1, 1]);

  // run model
  const x_Map = await session.run([zTensor]);
  const x_Data = x_Map.values().next().value.data;

  // draw to canvas
  const canvas = document.getElementById('canvas_32');
  const ctx = canvas.getContext('2d');
  var ctx_data = ctx.getImageData(0, 0, 32, 32)
  for (let j = 0; j < 32; ++j) {
    for (let i = 0; i < 32; ++i) {
      for (let c = 0; c < 3; ++c) {
        ctx_data.data[(j * 32 + i) * 4 + c] = (x_Data[j * 32 + i] - 1.0) * -127;
      }
      ctx_data.data[(j * 32 + i) * 4 + 3] = 255;
    }
  }
  ctx.putImageData(ctx_data, 0, 0);
}

function rnorm() {
  return Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());
}
