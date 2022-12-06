import React from 'react';
import { useRouteError } from 'react-router-dom';

import Stack from 'react-bootstrap/Stack';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <Stack gap={5} className="col-md-5 mx-auto pt-5">
      <h2>Sorry, we have an error</h2>
      <p>
        {`
          We have the following error: ${error instanceof Error && error.message}.

          We will fix the issue as fast as we can.
        `}        
      </p>

    </Stack>
  )
}
