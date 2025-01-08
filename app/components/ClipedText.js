function ClipedText({ children }) {
    return (
        <span
            className="text-transparent !bg-clip-text"
            style={{ background: 'linear-gradient(90deg, #6A47ED 35.31%, #FB17FF 100%)' }}
        >
            {children}
        </span>
    )
}

ClipedText.propTypes = {}

export default ClipedText
