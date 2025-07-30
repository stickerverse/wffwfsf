import { useStyletron } from 'baseui'
import Icons from '@components/icons'
import useAppContext from '@/hooks/useAppContext'

function PanelListItem({ label, icon, activePanel }: any) {
  const { setActivePanel } = useAppContext()
  const [css, theme] = useStyletron()
  const Icon = Icons[icon]
  const isActive = label === activePanel
  
  return (
    <div
      onClick={() => setActivePanel(label)}
      className={css({
        width: '84px',
        height: '84px',
        backgroundColor: isActive ? '#3498db' : 'transparent', // Modern blue for active
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Uber Move Text',
        fontWeight: 500,
        fontSize: '0.7rem',
        userSelect: 'none',
        transition: 'all 0.3s ease',
        gap: '0.3rem',
        color: isActive ? '#ffffff' : '#bdc3c7', // Better contrast
        position: 'relative',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: isActive ? '#3498db' : '#34495e',
          color: '#ffffff',
          transform: 'translateX(2px)',
        },
        // Add subtle border for active state
        borderRight: isActive ? '3px solid #2980b9' : '3px solid transparent',
      })}
    >
      <Icon size={28} />
      <div style={{ textAlign: 'center', lineHeight: '1.1' }}>{label}</div>
    </div>
  )
}

export default PanelListItem
