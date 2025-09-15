<?php

namespace Drupal\react_onlineshop\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

class ReactOnlineShopController extends ControllerBase
{
    public function products()
    {
        return [

            "#markup" => '<div id="root"></div>',

            "#attached" => [

                "library" => ["react_onlineshop/react_onlineshop"],

            ],

        ];
    }
}
