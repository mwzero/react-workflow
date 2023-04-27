import React, { useState, useEffect } from 'react'
import { Handle, useUpdateNodeInternals } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './ActionNode.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/semantic-ui.css'

const ActionNode = ({ data, id, type }) => {
  const [formData, setFormData] = useState({})
  const updateNodeInternals = useUpdateNodeInternals()

  useEffect(() => {
    if (data.internal.name === 'Send Text') {
      data.formData = formData
      updateNodeInternals(id)
    }
  }, [formData])

  return (
    <div className={globalStyles.node}>
      <div className={styles.actionNode}>
        <Handle
          id={`${id}`}
          type="target"
          position="left"
          className={`${styles.handle} ${styles.handleLeft}`}
          isConnectable
        />
        <NodeHeader label={data.internal.name} type={type} onDelete={data.internal.onDelete} id={id} />
        <Handle
          id={`${id}`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.handleRight}`}
          isConnectable
        />
        {data.internal.name === 'Send Text' ? (
          <div className={styles.body}>
            <label className={styles.label}>Phone Number</label>
            <PhoneInput
              enableSearch
              country={'us'}
              containerClass={`nodrag nowheel ${styles.phoneContainer}`}
              inputClass={styles.phoneInput}
              onChange={(number) => setFormData((prevState) => ({ ...prevState, phoneNumber: number }))}
            />
            <label className={styles.label}>Message</label>
            <textarea
              className={`nodrag nowheel ${styles.input}`}
              onChange={(e) => setFormData((prevState) => ({ ...prevState, message: e.target.value }))}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ActionNode
