<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;

class ApisController extends Controller
{
    public function users(){
        header("Access-Control-Allow-Methods: *");
        $users = User::all();
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1Qi LCJhbGciOieyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1QiL CJhbGciOieyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1QiLCJ hbGciOieyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1QiLCJhbG ciOieyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1QiLCJhbGciOi eyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eX AiOiJKV1QiLCJhbGciOieyJ0eXAiOiJKV1QiLCJhbGciOieyJ0eXAiOiJK V1QiLCJhbGciOi';
        foreach($users as $user){
            $user->user_token = $token;
        }
        return response()->json($users);
    }

    public function upload_video(Request $request, Video $video){
        $file = $request->file('video');
        $extension = $file->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $videos = $video->truncate();
        return $video->create([
            'name' => $request->name,
            'file_name' => $filename,
            'path' => $request->video->move(public_path("storage\\videos"), $filename),
            'type' => $request->type,
            'description' => "",
        ]);
    }

    public function get_videos(){
        $videos = Video::first();
        return $videos;
    }

    public function add_title(Request $request, $id){
        // return $request['title'];
        $video = Video::find($id);
        $video->title = $request['title'];
        $video->color = $request['color'];
        $video->save();

        return $video;
    }
}
