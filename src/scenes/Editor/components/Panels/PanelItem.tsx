import useAppContext from '@/hooks/useAppContext'
import { useEditorContext } from '@/uibox'
import { styled } from 'baseui'
import { useEffect } from 'react'
import PanelItems from './PanelItems'

const Container = styled('div', props => ({
  background: '#ffffff',
  width: '360px',
  flex: 'none',
  boxShadow: '2px 0px 8px rgba(0, 0, 0, 0.1)',
  borderRight: '1px solid #e9ecef',
  position: 'relative',
  zIndex: 5,
}))

function PanelsList() {
  const { activePanel, activeSubMenu, setActiveSubMenu } = useAppContext()
  const { activeObject } = useEditorContext()

  useEffect(() => {
    if (!activeObject) {
      setActiveSubMenu(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeObject])

  const Component = activeObject && activeSubMenu ? PanelItems[activeSubMenu] : PanelItems[activePanel]

  return <Container>{Component && <Component />}</Container>
}

export default PanelsList
