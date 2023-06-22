import { render } from '@testing-library/react';

import NorseUi from './norse-ui';

describe('NorseUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NorseUi />);
    expect(baseElement).toBeTruthy();
  });
});
