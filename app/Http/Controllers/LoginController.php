<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Parse\ParseApp;
use Parse\ParseClient;
use Parse\ParseException;
use Parse\ParseQuery;
use Parse\ParseFile;
use Parse\ParseSession;
use Parse\ParseUser;
use Parse\ParseSessionStorage;

class LoginController extends Controller
{




    public function loginPost(Request $request)

    {
        try {
            $username = $request->input('username');
            $pass = $request->input('password');
            $user = ParseUser::logIn($username, $pass);

           return redirect("/dashbord");


        } catch (ParseException $error) {

            // The login failed. Check error to see why.
            // echo $error->getCode();

            return redirect('login')->withErrors($error->getMessage());
        }


    }


    public static function logoutPost()

    {
        try {
            ParseUser::logOut();
            return redirect("/login");
            // Do stuff after successful login.
        } catch (ParseException $error) {
            // The login failed. Check error to see why.

        }



    }



}
