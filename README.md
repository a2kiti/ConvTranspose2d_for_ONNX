# ConvTranspose2d_for_ONNX
How to convert nn.ConvTranspose2d to ONNX.js model

ONNX.js does not suppoet ConvTranspose2d layer. (as of May 1, 2020)

[operators.md](https://github.com/microsoft/onnxjs/blob/master/docs/operators.md)

This repository provides a custom Conv2d layer which work as ConvTranspose2d with 2 or 1 stride.

As shown in [A guide to convolution arithmetic for deep learning](https://arxiv.org/abs/1603.07285), ConvTranspose2d is processed by conv2d after upsampling and padding.

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/201397/21fafed0-a949-e599-efc6-23449c069d3c.png)

A schematic diagram of the custom layer is shown in following figure. 

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/201397/4ad726bc-b86f-53fa-6fa6-db3e3c8fc851.png)

Please see jupyter notebook.

This notebook is a simple DCGAN demo.

To confirm the onnx file,

python -m http.server

and

http://0.0.0.0:8000/

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/201397/1faf5539-4157-30f2-1c6c-4302d0df2a4e.png)



