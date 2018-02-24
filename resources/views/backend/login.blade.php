<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <!-- global level css -->
    <link href="{{asset('backend/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('backend/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css" />
    <!-- end of global css-->
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/css/app.css') }}">
    <link type="text/css" href="{{ asset('backend/vendors/bootstrapvalidator/css/bootstrapValidator.min.css') }}" rel="stylesheet" />
    <link href="{{asset('backend/vendors/iCheck/css/all.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('backend/css/custom_css/login.css')}}" rel="stylesheet" type="text/css">

    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
</head>

<body>
    <div class="container">
        <div class="full-content-center">
            <div class="box bounceInLeft animated">
                <img src="img/logo.png" class="logo" alt="image not found">
                <h3 class="text-center">User Log In</h3>
                <form class="form"  method="post" action="/login">
                    {{csrf_field()}}

                    <div class="form-group">
                        <label class="sr-only"></label>
                        <input type="text" class="form-control text-danger" name="username" placeholder="Username " required>
                    </div>
                    <div class="form-group">
                        <label class="sr-only"></label>
                        <input type="password" class="form-control text-danger" name="password" placeholder="Password" required>
                    </div>
                    @if (count($errors) > 0)
                        <div class="text-danger ">
                            <ul class="list-unstyled">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <div class="checkbox text-left">
                        <label>
                            <input type="checkbox"> Remember Password
                        </label>
                    </div>
                    <input type="submit" class="btn btn-block btn-warning" value="Log In">
                </form>
                <p class="text-right"><a href="user_forgot.html" class="text-warning forgot_color" style="color: white">Forgot Password?</a></p>
            </div>
        </div>
    </div>
    <!-- global js -->
    <script type="text/javascript" src="{{ asset('backend/js/app.js') }}"></script>
    <!-- end of global js -->
    <!-- begining of page level js -->
    <script src="{{asset('backend/vendors/iCheck/js/icheck.js')}}" type="text/javascript"></script>
    <script  type="text/javascript" src="{{ asset('backend/vendors/bootstrapvalidator/js/bootstrapValidator.min.js') }}"></script>
    <script src="{{asset('backend/js/custom_js/login1.js')}}" type="text/javascript"></script>
    <!-- end of page level js -->
</body>

</html>
