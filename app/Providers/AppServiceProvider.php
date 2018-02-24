<?php

namespace App\Providers;
use Parse\ParseClient;
use Illuminate\Support\ServiceProvider;
session_start();
use Parse\ParseSessionStorage;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        ParseClient::initialize('gzkVJWW9ZoV0b9E8zOEdbAA8iOIiK8ekhvSAKvlC',
            'zy5ylB0QorLz8vYzvsbon2BOPFVZF7GzwfzEZcaR',
            'txUAe8S8VjeaSNvVqOfhesCOn7RSWTTxetm5BTog');

        ParseClient::setServerURL('https://parseapi.back4app.com', '/');
        // set session storage
        ParseClient::setStorage(new ParseSessionStorage());
        ParseClient::setTimeout(300);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
