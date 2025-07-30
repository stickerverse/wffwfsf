import { useHandlers } from '@/uibox'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Input } from 'baseui/input'
import Icons from '@components/icons'
import { useState } from 'react'

function Panel() {
  const [value, setValue] = useState('')

  const handlers = useHandlers()

  const addHeading = () => {
    const options = {
      type: 'StaticText',
      width: 800,
      metadata: {
        fontWeight: 700,
        fontFamily: 'Lexend',
        textAlign: 'center',
        fontSize: 80,
        value: 'Add a heading',
      },
    }
    handlers.objectsHandler.create(options)
  }

  const addSubheading = () => {
    const options = {
      type: 'StaticText',
      width: 800,
      metadata: {
        value: 'Add a subheading',
        fontSize: 60,
        fontWeight: 500,
        fontFamily: 'Lexend',
        textAlign: 'center',
      },
    }
    handlers.objectsHandler.create(options)
  }

  const addTextBody = () => {
    const options = {
      type: 'StaticText',
      width: 800,
      metadata: {
        value: 'Add a little bit of body text',
        fontSize: 40,
        fontWeight: 300,
        fontFamily: 'Lexend',
        textAlign: 'center',
      },
    }
    handlers.objectsHandler.create(options)
  }

  const addCustomText = () => {
    const options = {
      type: 'StaticText',
      width: 600,
      metadata: {
        value: value || 'Your custom text',
        fontSize: 50,
        fontWeight: 400,
        fontFamily: 'Lexend',
        textAlign: 'center',
        fill: '#333333',
      },
    }
    handlers.objectsHandler.create(options)
  }

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ padding: '2rem 2rem' }}>
        <Input
          startEnhancer={() => <Icons.Search size={18} />}
          value={value}
          onChange={e => setValue((e.target as any).value)}
          placeholder="Type your custom text"
          clearOnEscape
        />
        {value && (
          <div 
            style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: '#3498db',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onClick={addCustomText}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Add "{value}" to Canvas
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <Scrollbars>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(3, 60px)',
              padding: '0 2rem',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                paddingLeft: '1rem',
                fontSize: '1.66rem',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                fontWeight: 700,
                cursor: 'pointer',
                borderRadius: '8px',
                border: '1px solid #dee2e6',
                transition: 'all 0.2s ease',
              }}
              onClick={addHeading}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Add a heading
            </div>
            <div
              style={{
                display: 'flex',
                paddingLeft: '1rem',
                fontSize: '1.12rem',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                fontWeight: 500,
                cursor: 'pointer',
                borderRadius: '8px',
                border: '1px solid #dee2e6',
                transition: 'all 0.2s ease',
              }}
              onClick={addSubheading}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Add a subheading
            </div>
            <div
              style={{
                display: 'flex',
                paddingLeft: '1rem',
                fontSize: '0.76rem',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                fontWeight: 300,
                cursor: 'pointer',
                borderRadius: '8px',
                border: '1px solid #dee2e6',
                transition: 'all 0.2s ease',
              }}
              onClick={addTextBody}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Add a little bit of body text
            </div>
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default Panel
