import Nicolas from "../assets/img/Nicolas-Dutertre.jpg"

export default function Profile() {
    return (
        <div className="text-center flex flex-col p-8 gap-8">
            <img src={Nicolas} alt="Nicolas Dutertre" className="rounded-full w-[125px] self-center"/>
            <div>
                <p>Nicolas Dutertre</p>
                <p className="text-[var(--color-grey)]">Alternant Développement Web</p>
            </div>
        </div>
    );
};