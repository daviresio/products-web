import { describe, it, expect } from 'vitest';
import { currencyFormatter } from './formatters';

describe('currencyFormatter', () => {
  it('deve formatar corretamente um valor numérico em ARS', () => {
    const value = 12345;
    const formattedValue = currencyFormatter(value);
    expect(formattedValue).toMatch(/\$\s?12\.345/);
  });

  it('deve formatar corretamente um valor com casas decimais', () => {
    const value = 12345.67;
    const formattedValue = currencyFormatter(value);
    expect(formattedValue).toMatch(/\$\s?12\.345,67/);
  });

  it('deve formatar 0 sem casas decimais', () => {
    const value = 0;
    const formattedValue = currencyFormatter(value);
    expect(formattedValue).toMatch(/\$\s?0/);
  });
});
