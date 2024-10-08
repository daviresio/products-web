import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from './Container';
import styles from './Container.module.scss';

describe('Container Component', () => {
  it('deve renderizar o conteúdo passado como children', () => {
    render(
      <Container>
        <p>Conteúdo do Container</p>
      </Container>,
    );
    const childElement = screen.getByText(/Conteúdo do Container/i);
    expect(childElement).toBeInTheDocument();
  });

  it('deve aplicar a classe CSS correta para o estilo container', () => {
    render(
      <Container>
        <p>Classe container</p>
      </Container>,
    );
    const containerElement =
      screen.getByText(/Classe container/i).parentElement;
    expect(containerElement).toHaveClass(styles.container);
  });

  it('deve aplicar a classe adicional passada por props', () => {
    render(
      <Container className="custom-class">
        <p>Classe adicional</p>
      </Container>,
    );
    const containerElement =
      screen.getByText(/Classe adicional/i).parentElement;
    expect(containerElement).toHaveClass(styles.container);
    expect(containerElement).toHaveClass('custom-class');
  });
});
