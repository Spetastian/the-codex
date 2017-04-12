import React from 'react'
import CodexItem from './CodexItem'

const CodexList = ({ codex = [] }) => {
    console.log('codexList.codex', codex)
    const codexItemsRender = codex.map((item, index) =>
        (<CodexItem key={ index }  title={item.title} text={item.text} />)
    )

    return (
        <div>
            {codexItemsRender}
        </div>
    )
}

export default CodexList;