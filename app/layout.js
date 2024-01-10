import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import { BaseGlow } from '@/components';

export const metadata = {
  title: 'Easy football stats',
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
