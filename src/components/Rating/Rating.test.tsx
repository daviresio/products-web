import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from './Rating';

describe('Rating Component', () => {
  it('should render the rating correctly', () => {
    render(<Rating rating={4.5} amountOfRatings={20} />);

    expect(screen.getByText('4.5')).toBeInTheDocument();

    expect(screen.getByText('(20)')).toBeInTheDocument();
  });

  it('should render the correct amount of filled stars', () => {
    render(<Rating rating={3} />);

    const filledStars = screen.getByTestId('stars-filled');
    expect(filledStars).toHaveStyle({ clipPath: `inset(0 40% 0 0)` });
  });

  it('should render the component even without the amount of ratings', () => {
    render(<Rating rating={3} />);

    expect(screen.getByText('3')).toBeInTheDocument();

    expect(screen.queryByText(/\(\d+\)/)).toBeNull();
  });

  it('should render correctly for maximum rating (5 stars)', () => {
    render(<Rating rating={5} amountOfRatings={100} />);

    expect(screen.getByText('5')).toBeInTheDocument();

    const filledStars = screen.getByTestId('stars-filled');
    expect(filledStars).toHaveStyle({ clipPath: `inset(0 0% 0 0)` });
  });
});
