import { Bell, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  userInitials?: string;
  userName?: string;
  onMenuClick?: () => void;
}

const Header = ({
  userInitials = 'JD',
  userName = 'John',
  onMenuClick,
}: HeaderProps) => (
  <header className="w-full bg-white px-4 md:px-8 py-4">
    <div className="flex items-center justify-between">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Spacer for desktop */}
      <div className="hidden lg:block flex-1" />

      <div className="flex items-center gap-2 md:gap-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-xs">5</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
            {userInitials}
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
    <h1 className="text-2xl md:text-3xl text-gray-900">Hello, {userName}!</h1>
  </header>
);

export default Header;
