function Nav() {
  return (
    <div className="w-full h-[80px] bg-primary_Blue drop-shadow-sm">
        <div className="flex items-center justify-between h-full max-w-6xl mx-auto max-xl:px-10">
            <div className="text-3xl font-bold text-white">Ayyoob</div>
            <div className="flex space-x-10">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Projects</a>
            <a href="#" className="text-white">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Nav