import { describe, it, expect, vi } from 'vitest';
import { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import useClickOutside from './useClickOutside';

describe('useClickOutside', () => {
  it('deve chamar o callback quando clicar fora do elemento referenciado', () => {
    const handleClickOutside = vi.fn();

    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);
      useClickOutside(ref, handleClickOutside);

      return (
        <div>
          <div data-testid="outside">Clique fora</div>
          <div ref={ref} data-testid="inside">
            Clique dentro
          </div>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    fireEvent.mouseDown(getByTestId('outside'));
    expect(handleClickOutside).toHaveBeenCalledTimes(1);

    fireEvent.mouseDown(getByTestId('inside'));
    expect(handleClickOutside).toHaveBeenCalledTimes(1);
  });
});
