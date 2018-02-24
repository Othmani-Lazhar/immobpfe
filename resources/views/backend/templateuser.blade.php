<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <title>
        @section('title')
            | DASHBOARD
        @show
    </title>

    <link rel="shortcut icon" href="{{asset('backend/favicon.ico')}}" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <!-- global css -->
    <link type="text/css" href="{{asset('backend/css/bootstrap.min.css')}}" rel="stylesheet" />
    <link type="text/css" href="{{asset('backend/css/font-awesome.min.css')}}" rel="stylesheet" />
    <link type="text/css" href="{{asset('backend/css/custom_css/metisMenu.css')}}" rel="stylesheet" />
    <!--page level css-->
@yield('header_styles')
<!--end of page level css-->
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
</head>

<body>
<div class="se-pre-con"></div>
<!-- header logo: style can be found in header-->
<!-- header logo: style can be found in header-->
<header class="header">
    <nav class="navbar navbar-static-top">
        <a href="{{ URL::to('index') }}" class="logo">
            <!-- Add the class icon to your logo image or logo icon to add the margining -->
            <img src="" width="80" height="50" alt="image not found">
        </a>
        <!-- Header Navbar: style can be found in header-->
        <!-- Sidebar toggle button-->
        <!-- Sidebar toggle button-->
        <div>
            <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button"> <i
                        class="fa fa-fw fa-navicon"></i>
            </a>
        </div>
        <div class="navbar-right">
            <ul class="nav navbar-nav">
                <!-- User Account: style can be found in dropdown-->
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle padding-user" data-toggle="dropdown">
                        <img src="" width="35"
                             class="img-circle img-responsive pull-left" height="35" alt="User Image">
                        <div class="riot">
                            <div>

                                <span>
										<i class="caret"></i>
									</span>
                            </div>
                        </div>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="" class="img-circle" alt="User Image">
                            <p> </p>
                        </li>
                        <!-- Menu Body -->
                        <li class="pad-3">
                            <a href="admin_userprofile">
                                <i class="fa fa-fw fa-user"></i> My Profile
                            </a>
                        </li>
                        <li role="presentation"></li>
                        <li>
                            <a href="#">
                                <i class="fa fa-fw fa-gear"></i> Account Settings
                            </a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                                <a href="#">
                                    <i class="fa fa-fw fa-lock"></i> Lock
                                </a>
                            </div>
                            <div class="pull-right">
                                <a href="" class="btn btn-default btn-flat">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</header>





<div class="wrapper row-offcanvas row-offcanvas-left">
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar-->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="#">
                            <img src="img/authors/avatar1.jpg" class="img-circle" alt="User Image">
                        </a>
                        <div class="content-profile">
                            <h4 class="media-heading">Nataliapery</h4>
                            <span class="text-default">Admin</span>
                        </div>
                    </div>
                </div>
                <ul class="navigation">
                    <li class="active" id="active">
                        <a href="index.html">
                            <i class="text-primary menu-icon fa fa-fw fa-dashboard"></i>
                            <span class="mm-text ">Dashboard</span>
                            <span class="arrow"></span>
                        </a>
                    </li>

                    <li class="menu-dropdown">
                        <a href="#">
                            <i class="text-info menu-icon fa fa-fw fa-newspaper-o"></i>
                            <span class="mm-text">Agences</span>
                            <span class="fa fa-angle-down pull-right"></span>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="news.html">
                                    <i class="text-primary menu-icon fa fa-inbox"></i> Liste Agences
                                </a>
                            </li>
                            <li>
                                <a href="admin_addnews.html">
                                    <i class="menu-icon text-success fa fa-pencil"></i> Ajouter
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-dropdown">
                        <a href="#">
                            <i class="text-danger menu-icon fa fa-fw fa-calendar"></i>
                            <span class="mm-text">Annonces</span>
                            <span class="fa fa-angle-down pull-right"></span>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="events_list.html">
                                    <i class="text-primary menu-icon fa fa-fw fa-list"></i>  Liste annonces
                                </a>
                            </li>
                            <li>
                                <a href="event_item.html">
                                    <i class="text-info menu-icon fa fa-fw fa-fast-forward"></i> Ajouter annonce
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="admin_coupon.html">
                            <i class="text-primary  menu-icon fa fa-scissors"></i>
                            <span class="mm-text">Estimations</span>
                        </a>
                    </li>


                    <li class="menu-dropdown">
                        <a href="#">
                            <i class="text-success menu-icon fa fa-fw fa-picture-o"></i>
                            <span class="mm-text">Statistiques</span>
                            <span class="fa fa-angle-down pull-right"></span>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="add_gallery.html">
                                    <i class="text-primary fa fa-fw fa-cloud-upload"></i> Achats
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html">
                                    <i class="text-success fa fa-fw fa-file-image-o"></i> Ventes
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html">
                                    <i class="text-success fa fa-fw fa-file-image-o"></i> Locations
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html">
                                    <i class="text-success fa fa-fw fa-file-image-o"></i> Visiteurs
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-dropdown">
                        <a href="#">
                            <i class="text-info menu-icon fa fa-fw fa-newspaper-o"></i>
                            <span class="mm-text">Contacts</span>
                            <span class="fa fa-angle-down pull-right"></span>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="news.html">
                                    <i class="text-primary menu-icon fa fa-inbox"></i>
                                </a>
                            </li>
                            <li>
                                <a href="admin_addnews.html">
                                    <i class="menu-icon text-success fa fa-pencil"></i>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
    <aside class="right-side">
        <!-- Content Header (Page header) -->
     @yield("content")
        <!-- /.content -->
    </aside>
</div>
<script src="{{asset('backend/vendors/holder/holder.js')}}" type="text/javascript"></script>
<!-- global js -->
<script src="{{asset('backend/js/jquery.min.js')}}" type="text/javascript"></script>
<script src="{{asset('backend/js/bootstrap.min.js')}}" type="text/javascript"></script>
<script src="{{asset('backend/js/custom_js/app.js')}}" type="text/javascript"></script>
<script src="{{asset('backend/js/custom_js/metisMenu.js')}}" type="text/javascript"></script>
<script src="{{asset('backend/js/custom_js/backstretch.js')}}"></script>

<!-- end of global js -->
@yield('footer_scripts')
<!-- end page level js -->
</body>

</html>
