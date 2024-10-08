import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import styles from './Badge.module.scss';

describe('Badge', () => {
  test('renders the badge with info variant', () => {
    render(<Badge variant="info">Info Badge</Badge>);

    const badgeElement = screen.getByText(/info badge/i);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass(styles.badge);
    expect(badgeElement.parentElement).toHaveClass(styles.info);
  });

  test('renders the badge with success variant', () => {
    render(<Badge variant="success">Success Badge</Badge>);

    const badgeElement = screen.getByText(/success badge/i);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass(styles.badge);
    expect(badgeElement.parentElement).toHaveClass(styles.success);
  });

  test('renders the badge with warning variant', () => {
    render(<Badge variant="warning">Warning Badge</Badge>);

    const badgeElement = screen.getByText(/warning badge/i);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass(styles.badge);
    expect(badgeElement.parentElement).toHaveClass(styles.warning);
  });
});
