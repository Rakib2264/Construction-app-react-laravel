<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors('image')
            ]);
        }

        $image = $request->image;

       $ext = $image->getClientOriginalExtension();
            $imageName = strtotime('now') . '.' . $ext;
            
            // save data in database
            $modal = new TempImage();
            $modal->name = $imageName;
            $modal->save();

            // save image in folder
            $image->move(public_path('uploads/temp/'), $imageName);

            // generate thumbnail
            $path = public_path('uploads/temp/' . $imageName);
            $thumbpath = public_path('uploads/temp/thumbnail/' . $imageName);
            $manager = new ImageManager(Driver::class);
            $image = $manager->read($path);
            $image->coverDown(300, 300);
            $image->save($thumbpath);

            return response()->json([
                'status' => true,
                'message' => 'Image uploaded successfully',
                'data' => $modal
            ]);
    }
}
