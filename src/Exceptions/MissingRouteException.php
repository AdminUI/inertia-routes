<?php

namespace AdminUI\InertiaRoutes\Exceptions;

use Exception;

class MissingRouteException extends Exception
{
    protected $message = 'No route given. Ensure it is passed as the first argument of "useExtendedForm"';
}
