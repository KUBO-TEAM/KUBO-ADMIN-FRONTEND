Python commands

# Converting 

python save_model.py --weights ./weights/yolov4-tiny.weights --output ./tensorflow/yolov4-tiny-416 --input_size 416 --model yolov4 --tiny --framework tflite

python convert_tflite.py --weights ./tensorflow/yolov4-tiny-416 --output ./tflite/yolov4-tiny-416.tflite

# Detection

Tflite
python detect.py --weights ./tflite/yolov4-tiny-416.tflite --size 416 --model yolov4 --image ./uploads/ampalaya.jpg --output ./results/result.png --framework tflite

