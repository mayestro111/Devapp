import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Cases Bank App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Cases Bank home page correctly', () => {
    render(<App />);

    // Check for main title
    expect(screen.getByText('Cases Bank')).toBeInTheDocument();

    // Check for search functionality
    expect(
      screen.getByPlaceholderText('ابحث في التخصصات الطبية...')
    ).toBeInTheDocument();

    // Check for progress tracker
    expect(screen.getByText('تقدمك في التعلم')).toBeInTheDocument();
    expect(screen.getByText('0 / 1500')).toBeInTheDocument();
  });

  it('displays medical specialties correctly', () => {
    render(<App />);

    // Check for some key medical specialties
    expect(screen.getByText('الباطنة العامة')).toBeInTheDocument();
    expect(screen.getByText('Internal Medicine')).toBeInTheDocument();
    expect(screen.getByText('الجراحة العامة')).toBeInTheDocument();
    expect(screen.getByText('General Surgery')).toBeInTheDocument();
    expect(screen.getByText('طب الأطفال')).toBeInTheDocument();
    expect(screen.getByText('Pediatrics')).toBeInTheDocument();
  });

  it('allows searching through specialties', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(
      'ابحث في التخصصات الطبية...'
    );

    // Search for cardiology
    fireEvent.change(searchInput, { target: { value: 'cardiology' } });

    // Should still show cardiology specialty
    expect(screen.getByText('أمراض القلب')).toBeInTheDocument();
    expect(screen.getByText('Cardiology')).toBeInTheDocument();
  });
});
