import Image from "next/image";

export default function Home() {
    return (
        <div className="image-container">
            <p>hello / test</p>
            <Image src="/assets/front_dex.png" alt="Front Dex" width={1172} height={467}/>
        </div>
    );
};
