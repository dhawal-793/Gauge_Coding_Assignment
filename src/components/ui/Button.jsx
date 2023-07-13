
const Button = ({ children }) => {
    return (
        <button className="px-12 py-4 text-base font-semibold text-white bg-blue-500 rounded-full border-1 word-tighter hover:bg-blue-600 focus:outline-none">
            {children}
        </button>
    )
}

export default Button