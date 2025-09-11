const Card = ({children, className=""}) => {
    return (
        <div className={`bg-[#FFF] w-full min-h-[100px] rounded-[4px] border border-zinc-200 shadow-sm p-6 flex ${className}`}>
            {children}
        </div>
    );
}

export default Card;