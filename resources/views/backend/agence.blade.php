@extends('backend.template')
{{-- Page title --}}
@section('title')
   Agences
    @parent
@stop

{{-- page level styles --}}
@section('header_styles')
    <!-- global css -->
    <link type="text/css" href="{{asset('backend/css/custom_css/panel.css')}}" rel="stylesheet" />

    <!-- end of global css -->
    <!--page level css -->
    <link type="text/css" href="{{asset('backend/vendors/jasny-bootstrap/css/jasny-bootstrap.css')}}" rel="stylesheet" />
    <link type="text/css" href="{{asset('backend/vendors/x-editable/css/bootstrap-editable.css')}}" rel="stylesheet" />
    <link type="text/css" href="{{asset('backend/vendors/summernote/summernote.css')}}" rel="stylesheet" media="screen" />
    <link type="text/css" href="{{asset('backend/css/custom_css/fitness.css')}}" rel="stylesheet" />
    <link type="text/css" href="{{asset('backend/css/custom_css/club_info.css')}}" rel="stylesheet" />
    <!--end of page level css-->
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
@stop

{{-- Page content --}}
@section('content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h2>Club Info</h2>
        <ol class="breadcrumb">
            <li>
                <a href="index.html">
                    <i class="fa fa-fw fa-home"></i> Dashboard
                </a>
            </li>
            <li>
                <a href="admin_clubinfo.html" class="activated">Agence Info</a>
            </li>
        </ol>
    </section>
    <!--section ends-->
    <div class="container-fluid">
        <!--main content-->
        <div class="row">
            <div class="col-lg-12">
                <!-- Basic charts strats here-->
                <div class="panel">
                    <div class="panel-heading bg-primary">
                        <h4 class="panel-title">
                            <i class="fa fa-fw fa-home"></i> Agence Info
                        </h4>
                        <span class="pull-right">
                                    <i class="glyphicon glyphicon-chevron-up showhide clickable"></i>
                                    <i class="glyphicon glyphicon-remove removepanel"></i>
                                </span>
                    </div>
                    <div class="panel-body">
                        <div role="tabpanel">
                            <!-- Nav tabs -->
                            <div class="terms">
                                <ul class="nav nav-tabs nav-custom " role="tablist">
                                    <li role="presentation" class="active">
                                        <a href="#Info" aria-controls="Info" role="tab" data-toggle="tab">
                                            <strong>Agence Info</strong>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#terms" aria-controls="terms" role="tab" data-toggle="tab">
                                            <strong>Terms & Conditions</strong>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#social" aria-controls="social" role="tab" data-toggle="tab">
                                            <strong>Social Networks</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="Info">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-4 text-center">
                                            <div class="form-group pad-top">
                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                    <div class="fileinput-new thumbnail">
                                                        <img data-src="holder.js/200x150" src="#" alt="profile">
                                                    </div>
                                                    <div class="fileinput-preview fileinput-exists thumbnail"></div>
                                                    <div class="select_align">
                                                                <span class="btn btn-primary btn-file">
                                                                    <span class="fileinput-new">Select image</span>
                                                                <span class="fileinput-exists">Change</span>
                                                                <input type="file" name="...">
                                                                </span>
                                                        <a href="#" class="btn btn-primary fileinput-exists" data-dismiss="fileinput">Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9 col-sm-8">
                                            <div class="panel-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" id="users">
                                                        <tr>
                                                            <td >Name</td>
                                                            <td>
                                                                <a href="#" data-pk="1" id="agencename" class="editable" data-title="Edit Agence Name" data-placeholder="Required">agence name</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>E-mail</td>
                                                            <td>
                                                                <a href="#" data-pk="1" class="editable" id="email" data-title="Edit E-mail" data-type="email" data-placeholder="Required">email@example.com</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone Number</td>
                                                            <td>
                                                                <a href="#" data-pk="1" class="editable" id="contact" data-title="Edit Phone Number" data-placeholder="Required">999-999-9999</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td>
                                                                <a href="#" data-pk="1" id="addr" class="editable" data-title="Edit Address" data-placeholder="Required">city, Contry</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>City</td>
                                                            <td>
                                                                <a href="#" data-pk="1" id="city" class="editable" data-title="Edit City" data-placeholder="Required">City</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pincode</td>
                                                            <td>
                                                                <a href="#" data-pk="1" id="pincode" class="editable" data-title="Edit Pincode" data-placeholder="Required">999999</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fax</td>
                                                            <td>
                                                                <a href="#" data-pk="1" id="fax" class="editable" data-title="Edit Fax">12345</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Website</td>
                                                            <td>
                                                                <a href="#" data-pk="1" id="url" class="editable" data-type="url" data-title="Edit Website">https://www.example.com</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="terms">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div>
                                                <h4>Terms and Conditions</h4>
                                            </div>
                                            <form>
                                                <textarea class="summernote edi-css" placeholder="Place some text here"></textarea>
                                                <div class="form-actions pad-top">
                                                    <div class="">
                                                        <input type="submit" class="btn btn-primary" value="Add"> &nbsp;
                                                        <input type="button" class="btn btn-danger" value="Cancel"> &nbsp;
                                                        <input type="reset" class="btn btn-default reset-editable" value="Reset">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="social">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div>
                                                <h4>Social Networks</h4>
                                            </div>
                                            <form action="#" class="form-horizontal" id="social_form">
                                                <div class="form-body">
                                                    <div class="form-group">
                                                        <label class="col-lg-2 control-label" for="fb-name">Facebook</label>
                                                        <div class="col-lg-6">
                                                            <div class="input-group">
                                                                        <span class="input-group-addon">
                                                                            <i class="fa fa-fw fa-facebook text-primary"></i>
                                                                        </span>
                                                                <input type="text" placeholder=" " id="fb-name" name="facebook" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-lg-2 control-label" for="twitter">Twitter</label>
                                                        <div class="col-lg-6">
                                                            <div class="input-group">
                                                                        <span class="input-group-addon">
                                                                            <i class="fa fa-fw fa-twitter text-primary"></i>
                                                                        </span>
                                                                <input type="text" placeholder=" " id="twitter" name="twitter" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-lg-2 control-label" for="g-plus"> Youtube</label>
                                                        <div class="col-lg-6">
                                                            <div class="input-group">
                                                                        <span class="input-group-addon">
                                                                            <i class="fa fa-fw fa-youtube text-primary"></i>
                                                                        </span>
                                                                <input type="text" placeholder=" " id="yt" name="youtube" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-lg-2 control-label" for="skype">Skype</label>
                                                        <div class="col-lg-6">
                                                            <div class="input-group">
                                                                        <span class="input-group-addon">
                                                                            <i class="fa fa-fw fa-skype text-primary"></i>
                                                                        </span>
                                                                <input type="text" placeholder=" " id="skype" name="skype" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-actions">
                                                    <div class="row">
                                                        <div class="col-md-offset-2 col-md-9">
                                                            <input type="submit" class="btn btn-primary" value="Add"> &nbsp;
                                                            <input type="button" class="btn btn-danger" value="Cancel"> &nbsp;
                                                            <input type="reset" class="btn btn-default" value="Reset">
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- col-md-6 -->
        <!--row -->
        <!--row ends-->
    </div>
    <!-- /.content -->

@stop

{{-- page level scripts --}}
@section('footer_scripts')
    <!-- global js -->
    <script src="{{asset('backend/vendors/holder/holder.js')}}" type="text/javascript"></script>
    <!-- end of page level js -->
    <!-- begining of page level js -->
    <script src="{{asset('backend/vendors/jasny-bootstrap/js/jasny-bootstrap.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/x-editable/jquery.mockjax.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/x-editable/bootstrap-editable.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/x-editable/js/html5types.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/summernote/summernote.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/jasny-bootstrap/js/inputmask.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/jasny-bootstrap/js/jquery.inputmask.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/vendors/x-editable/js/demo-mock.js')}}" type="text/javascript"></script>
    <script src="{{asset('backend/js/custom_js/agence_info.js')}}" type="text/javascript"></script>
    <!-- end of page level js -->
@stop