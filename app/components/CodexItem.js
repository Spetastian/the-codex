import React from 'react'

const CodexItem = ({ title, text }) => (
    <div>
        <p>{title}</p>
        <p>{text}</p>
    </div>

)

CodexItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
}

export default CodexItem