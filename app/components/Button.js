import Link from "next/link"

function Button({ children, url }) {
    return (
        <button className="px-16 py-4 bg-purple-600 text-white rounded-full text-xl font-medium hover:bg-purple-950 transition-all ease-in-out duration-300"><Link href={`/${url}`}>{children}</Link></button>
    )
}

Button.propTypes = {}

export default Button
