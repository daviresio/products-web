import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  it('deve aplicar a classe correta para estilo "subtitle"', () => {
    render(<Text variant="subtitle">Texto de Subtítulo</Text>);
    const element = screen.getByText('Texto de Subtítulo');
    expect(element.tagName.toLowerCase()).toBe('h2');
    expect(element.className).toMatch(/subtitle/);
  });

  it('deve aplicar a cor correta com "primary"', () => {
    render(
      <Text variant="body-light" color="primary">
        Texto com Cor Primária
      </Text>,
    );
    const element = screen.getByText('Texto com Cor Primária');
    expect(element.className).toMatch(/primary/);
  });

  it('deve aplicar strikethrough corretamente', () => {
    render(
      <Text variant="caption" strikethrough>
        Texto Riscar
      </Text>,
    );
    const element = screen.getByText('Texto Riscar');
    expect(element.className).toMatch(/strikethrough/);
    expect(element).toHaveStyle('text-decoration: line-through');
  });

  it('deve aplicar estilos personalizados juntamente com as classes de estilo', () => {
    render(
      <Text variant="label" color="danger" className="custom-class">
        Texto Personalizado
      </Text>,
    );
    const element = screen.getByText('Texto Personalizado');
    expect(element.className).toMatch(/label/);
    expect(element.className).toMatch(/danger/);
    expect(element.className).toMatch(/custom-class/);
  });
});
