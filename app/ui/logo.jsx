import Image from "next/image";

export default function ProjectLogo({width , height}){
    return <Image width={width} height={height} src="/logo.svg" alt="Project Logo"></Image>
}