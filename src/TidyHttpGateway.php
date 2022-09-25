<?php

namespace AdminUI\InertiaRoutes;

use Inertia\Ssr\HttpGateway;
use Inertia\Ssr\Response;

class TidyHttpGateway extends HttpGateway
{
    public function dispatch(array $page): ?Response
    {
        $response = parent::dispatch($page);

        $shouldTidy = config('inertia.ssr.tidy', false);

        if (is_null($response)) {
            return null;
        } else if (true !== $shouldTidy) {
            return $response;
        }

        $config = [
            'indent'         => true,
            'output-html'   => true,
            'show-body-only' => true,
            'wrap'           => 200,
        ];

        $tidy = new \tidy;
        $tidy->parseString($response->body, $config, 'utf8');
        $tidy->cleanRepair();

        $response->body = tidy_get_output($tidy);
        return $response;
    }
}
