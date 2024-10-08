import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import styles from './Button.module.scss';

describe('Button', () => {
  test('renders the button with correct label', () => {
    render(
      <Button
        variant="flat"
        color="primary"
        label="Click Me"
        onClick={vi.fn()}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies correct classes for flat variant and primary color', () => {
    render(
      <Button
        variant="flat"
        color="primary"
        label="Click Me"
        onClick={vi.fn()}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass(styles.button);
    expect(buttonElement).toHaveClass(styles.flat);
    expect(buttonElement).toHaveClass(styles.primary);
  });

  test('applies correct classes for outlined variant and success color', () => {
    render(
      <Button
        variant="outlined"
        color="success"
        label="Click Me"
        onClick={vi.fn()}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass(styles.button);
    expect(buttonElement).toHaveClass(styles.outlined);
    expect(buttonElement).toHaveClass(styles.success);
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <Button
        variant="flat"
        color="primary"
        label="Click Me"
        onClick={handleClick}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
