import React from 'react';
import { useRouteError } from 'react-router-dom';

import Stack from 'react-bootstrap/Stack';

export function LoadingPage() {
  const error = useRouteError();

  return (
    <Stack gap={5} className="col-md-5 mx-auto pt-5">
      <h2>Loading the data required for the page...</h2>
    </Stack>
  )
}
