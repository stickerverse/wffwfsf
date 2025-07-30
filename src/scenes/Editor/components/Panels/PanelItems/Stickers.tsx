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

  // Filter shapes to show sticker-like items (could be based on category or tags)
  const stickerShapes = shapes.filter(shape => 
    shape.metadata?.category === 'sticker' || 
    shape.type === 'StaticImage' ||
    shape.metadata?.isSticker
  )

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ padding: '2rem 2rem' }}>
        <Input
          startEnhancer={() => <Icons.Search size={18} />}
          value={value}
          onChange={e => setValue((e.target as any).value)}
          placeholder="Search stickers"
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
            {(stickerShapes.length > 0 ? stickerShapes : shapes).map(shape => (
              <div
                key={shape.id}
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    backgroundColor: 'rgba(0,0,0,0.06)',
                    transform: 'scale(1.05)',
                  }
                }}
                onClick={() => handlers.objectsHandler.create(shape)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <img
                  width="60px"
                  src={shape.metadata.preview || 'https://via.placeholder.com/60'}
                  alt="sticker preview"
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