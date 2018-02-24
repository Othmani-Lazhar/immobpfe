<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Parse\ParseObject;
use Parse\ParseQuery;
use  View;
class AgenceController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');


    }



    public function getagence(){

        $query=new ParseQuery("Agence");
        $agences=$query->find();

        return View::make("backend/agence",['agences' => $agences ]);


    }

    public function addagence(Request $request){

        $query=new ParseQuery("Agence");
        $agence=$query->first();

        if ($agence == null)
        {
           $agence=new ParseObject("Agence");
           $agence->set("fb_link",$request->input("fb_link"));
            $agence->set("twt_link",$request->input("twt_link"));
            $agence->set("yt_link",$request->input("yt_link"));
            $agence->set("skype",$request->input("skype"));
           $agence->save();
        }else{
            $agence->set("fb_link",$request->input("fb_link"));
            $agence->set("twt_link",$request->input("twt_link"));
            $agence->set("yt_link",$request->input("yt_link"));
            $agence->set("skype",$request->input("skype"));
            $agence->save();
        }



    }

}
