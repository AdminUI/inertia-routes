<?php

namespace AdminUI\InertiaRoutes\Exceptions;

use Exception;

class MissingFormRequestException extends Exception
{
    protected $message = 'No form request found in controller action arguments';
}
