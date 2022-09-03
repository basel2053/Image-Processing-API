#Scripts
-------------------------------------------------------------------------------------------------
build --> compiling typescript to javascript

jasmine --> unit testing

test --> compiling and testing

start --> starting the production server (javascript)

start-server --> starting the development server (typescript)

lint --> linting both typescript and javascript

prettier --> formatting code for typescript and javascript

-------------------------------------------------------------------------------------------------
#EndPoints
-------------------------------------------------------------------------------------------------
Port is 3000
/
/api/images
/api/images?filename=(query value)&width=(query value)&height=(query value)

--------------------------------------------------------------------------------------------------
#Source folder (src)
--------------------------------------------------------------------------------------------------
app.ts --> start server on port 3000

middleware/checkimage.ts --> check the query has validated values and if the image exists already
to render it without processing it again

routes/images.ts --> contains express-validators conditions , create thumb folder if it doesn't
exist and use sharp to process the image and save it in the thumb folder, then the processed
image is sent as a response to the user

--------------------------------------------------------------------------------------------------
#tests folder
--------------------------------------------------------------------------------------------------
appSpec.ts --> tests the endpoints for / , /api/images, and instance of processed image

middleware/checkimageSpec.ts --> test the query values if missing or invalid user should get html
page displaying an error , if values are correct user gets an image as response

routes/imagesSpec.ts --> test if the image is missing or doesn't exist it should return status code
of 404

---------------------------------------------------------------------------------------------------
#images folder (contains the images)
---------------------------------------------------------------------------------------------------
there are 5 images before processing

thumb folder is for the processed images

---------------------------------------------------------------------------------------------------
#utilities folder (contains sharp resizing function)