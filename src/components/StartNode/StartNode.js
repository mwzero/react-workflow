import React from 'react'
import { Handle } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './StartNode.module.css'

const StartNode = ({ data, id, type }) => {
  return (
    <div className={globalStyles.node}>
      <div className={styles.startNode}>
        <NodeHeader label={data.internal.name} type={type} />
        <Handle id={`${id}`} type="source" position="right" className={styles.handle} isConnectable />
      </div>
    </div>
  )
}

export default StartNode
