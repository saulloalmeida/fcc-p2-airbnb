export default function Hero() {
    return <div>
        <div className="flex justify-center pt-6">
            <img
                className="xl:w-1/2 xl:h-1/3 w-10/12"
                src="../images/topo.png" alt="" />
        </div>
        <div className="font-poppins tracking-wider text-center font-bold text-4xl pl-9 py-4">Online Experiences</div>
        <div className="flex flex-wrap pl-9 pr-3 justify-center">
            <p className="font-poppins font-medium text-xl text-justify">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </div>;
}
