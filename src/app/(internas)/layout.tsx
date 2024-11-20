'use client'
import { UserProvider, useUserContext } from "@/context/usuario";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { usuario } = useUserContext()
  const router = useRouter()

  if (!usuario) {
    router.push('/login')
    return
  }

  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}
