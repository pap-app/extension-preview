import BottomNavigation from "@/components/bottom-navigation";
import PreviewBanner from "@/components/preview-banner";
import AuthGate from "@/components/providers/authGate";
import { ClientProvider } from "@/components/providers/clientProviders";
import { WalletProvider } from "@/components/providers/walletProvider";
import ChromeExtensionContainer from "@/components/XtensionContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <div className={`min-h-screen bg-gray-100 flex items-center justify-center p-4`}>
        <PreviewBanner />
        <WalletProvider>
          <AuthGate>
         <ChromeExtensionContainer>
  {children}

         </ChromeExtensionContainer>
         </AuthGate>
      
        <BottomNavigation />
        </WalletProvider>
      </div>
      </ClientProvider>
  );
}
