import './globals.css';
import { BaseGlow } from '@/components';

export const metadata = {
  title: 'Some football stats',
  description: 'Create what you want',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      {children}
      <BaseGlow/>
      </body>
    </html>
  );
}
