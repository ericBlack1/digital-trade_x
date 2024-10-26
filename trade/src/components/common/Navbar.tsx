// src/components/common/Navbar.tsx
import Link from 'next/link';
import { Button } from './Button';
import { Logo } from './Logo';
import { Container } from '../ui/Container';

export function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/solutions" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Solutions
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/resources" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Resources
              </Link>
              <Link href="/enterprise" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Enterprise
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="secondary" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">
                Start free trial
              </Button>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}