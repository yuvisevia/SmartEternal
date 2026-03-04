// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartEternal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartEternal/i);
    expect(titleElement).toBeInTheDocument();
});
