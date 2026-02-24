<?php

namespace AdminUI\InertiaRoutes\Exceptions;

use Exception;

class NoRulesFoundException extends Exception
{
    protected $message = 'Couldn\'t resolve any rules from this route';
}
