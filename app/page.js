"use client";
import "@/app/ui/global.css";
import NavBar from "./ui/home/navbar";
import CenterContainer from "./ui/home/centerContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  if(user){
    router.push('/dashboard');
  }
  return (
    <>
      <CenterContainer />
    </>
  );
}
