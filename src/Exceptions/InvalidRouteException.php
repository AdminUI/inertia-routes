<?php

namespace AdminUI\InertiaRoutes\Exceptions;

use Exception;

class InvalidRouteException extends Exception
{
    protected $message = 'Invalid route given';
}
