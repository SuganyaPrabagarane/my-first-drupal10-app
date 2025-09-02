<?php

namespace Drupal\hello_name\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Url;
use Drupal\Core\Link;

class HelloNameController extends ControllerBase
{
    public function content()
    {
        $url = Url::fromRoute('hello_name.form');
        $link = Link::fromTextAndUrl($this->t('👉 Click here'), $url)->toString();


        return [
            // reder array '#markup'
            '#markup' => $this->t('Welcome, Do you want to register your name? @link', ['@link' => $link]),
        ];
    }

    public function greeting($name)
    {
        return [
            '#markup' => $this->t('Hello @name! 😊', ['@name' => $name]),
        ];
    }
}
