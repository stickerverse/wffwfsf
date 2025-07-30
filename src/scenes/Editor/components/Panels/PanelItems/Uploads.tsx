import { Input } from 'baseui/input'
import Icons from '@components/icons'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useState } from 'react'
import { useHandlers } from '@/uibox'

function Panel() {
  const [value, setValue] = useState('')
  const [uploadedImages, setUploadedImages] = useState<any[]>([])
  const handlers = useHandlers()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader()
          reader.onload = (e) => {
            const imageData = {
              id: Date.now() + Math.random(),
              type: 'StaticImage',
              metadata: {
                src: e.target?.result as string,
                preview: e.target?.result as string,
              }
            }
            setUploadedImages(prev => [...prev, imageData])
          }
          reader.readAsDataURL(file)
        }
      })
    }
  }

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ padding: '2rem 2rem' }}>
        <Input
          startEnhancer={() => <Icons.Search size={18} />}
          value={value}
          onChange={e => setValue((e.target as any).value)}
          placeholder="Search uploads"
          clearOnEscape
        />
      </div>
      
      <div style={{ padding: '0 2rem 1rem' }}>
        <label style={{
          display: 'block',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          border: '2px dashed #dee2e6',
          borderRadius: '8px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e9ecef'
          e.currentTarget.style.borderColor = '#adb5bd'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f8f9fa'
          e.currentTarget.style.borderColor = '#dee2e6'
        }}
        >
          <Icons.Uploads size={24} />
          <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#6c757d' }}>
            Click to upload images
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </label>
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
            {uploadedImages.map(image => (
              <div
                key={image.id}
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => handlers.objectsHandler.create(image)}
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
                  src={image.metadata.preview}
                  alt="uploaded image"
                  height="60px"
                  style={{ borderRadius: '4px', objectFit: 'cover' }}
                />
              </div>
            ))}
            {uploadedImages.length === 0 && (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '2rem',
                color: '#6c757d',
                fontSize: '0.9rem'
              }}>
                No uploaded images yet. Upload some images to get started!
              </div>
            )}
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default Panel