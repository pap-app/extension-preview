import { ReactNode } from "react";

interface ChromeExtensionContainerProps {
  children: ReactNode;
}

export default function ChromeExtensionContainer({ children }: ChromeExtensionContainerProps) {
  return (
    <div className="w-[370px] overflow-y-auto h-[600px] bg-bg-primary flex flex-col overflow-hidden shadow-2xl rounded-lg mx-auto">
      {children}
    </div>
  );
}
