// Copyright 2004-present Facebook. All Rights Reserved.

import { cleanup, fireEvent, render } from '@testing-library/react';
import { ToggleButton } from '../stories/layout/ToggleButton';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Button changes class', () => {
  const { queryByLabelText, getByLabelText } = render(
    <ToggleButton
      callback={() => console.log('Executing...')}
      isMenuOpen={false}
    />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
