import { Input } from 'baseui/input'
import Icons from '@components/icons'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useState } from 'react'
import useAppContext from '@/hooks/useAppContext'
import { useHandlers } from '@/uibox'

function Panel() {
  const [value, setValue] = useState('')
  const { shapes } = useAppContext()
  const handlers = useHandlers()

  // Filter shapes to show geometric shapes and basic forms
  const geometricShapes = shapes.filter(shape => 
    shape.metadata?.category === 'shape' || 
    shape.type === 'StaticPath' ||
    shape.metadata?.isShape
  )

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ padding: '2rem 2rem' }}>
        <Input
          startEnhancer={() => <Icons.Search size={18} />}
          value={value}
          onChange={e => setValue((e.target as any).value)}
          placeholder="Search shapes"
          clearOnEscape
        />
      </div>
      <div style={{ flex: 1 }}>
        <Scrollbars>
          <div
            style={{ 
              display: 'grid', 
              gap: '0.5rem', 
              padding: '0 2rem 2rem', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' 
            }}
          >
            {(geometricShapes.length > 0 ? geometricShapes : shapes).map(shape => (
              <div
                key={shape.id}
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
                onClick={() => handlers.objectsHandler.create(shape)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                }}
              >
                <img
                  width="60px"
                  src={shape.metadata.preview || 'https://via.placeholder.com/60'}
                  alt="shape preview"
                  height="60px"
                  style={{ borderRadius: '4px' }}
                />
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default Panel