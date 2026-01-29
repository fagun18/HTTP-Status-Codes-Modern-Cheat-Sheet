import { useState, useMemo } from 'react';
import { statusCodes, type StatusCode } from './data';
import {
  Search,
  Info,
  CheckCircle,
  ArrowRightCircle,
  AlertCircle,
  Server,
  Database,
  Github,
  X,
  Globe,
  ArrowUp
} from 'lucide-react';
import { useEffect } from 'react';
import './App.css';

// Helper to get styling based on category
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'Informational': return { color: 'var(--color-1xx)', icon: Info, bg: 'rgba(59, 130, 246, 0.1)' };
    case 'Success': return { color: 'var(--color-2xx)', icon: CheckCircle, bg: 'rgba(34, 197, 94, 0.1)' };
    case 'Redirection': return { color: 'var(--color-3xx)', icon: ArrowRightCircle, bg: 'rgba(234, 179, 8, 0.1)' };
    case 'Client Error': return { color: 'var(--color-4xx)', icon: AlertCircle, bg: 'rgba(244, 63, 94, 0.1)' };
    case 'Server Error': return { color: 'var(--color-5xx)', icon: Server, bg: 'rgba(168, 85, 247, 0.1)' };
    case 'WebDAV': return { color: 'var(--color-webdav)', icon: Database, bg: 'rgba(20, 184, 166, 0.1)' };
    case 'Unofficial': return { color: 'var(--text-muted)', icon: Globe, bg: 'rgba(148, 163, 184, 0.1)' };
    default: return { color: 'var(--text-muted)', icon: Info, bg: 'rgba(148, 163, 184, 0.1)' };
  }
};

const categories = ['All', 'Informational', 'Success', 'Redirection', 'Client Error', 'Server Error', 'WebDAV', 'Unofficial'];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCode, setActiveCode] = useState<StatusCode | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filteredCodes = useMemo(() => {
    return statusCodes.filter(item => {
      const matchesSearch =
        item.code.toString().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Header */}
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Globe size={32} color="var(--color-1xx)" />
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.025em' }}>
            HTTP Status<span style={{ color: 'var(--color-1xx)' }}> Codes</span>
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          A comprehensive and modern cheat sheet for every HTTP response status code.
        </p>
      </header>

      {/* Controls */}
      <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>

        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
          <Search
            size={20}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search by code (e.g. 404) or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-main)',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-1xx)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                background: selectedCategory === cat ? 'var(--text-main)' : 'var(--bg-card)',
                color: selectedCategory === cat ? 'var(--bg-body)' : 'var(--text-muted)',
                border: selectedCategory === cat ? '1px solid var(--text-main)' : '1px solid var(--border-color)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredCodes.map((item) => {
          const style = getCategoryStyle(item.category);
          const Icon = style.icon;

          return (
            <div
              key={item.code}
              onClick={() => setActiveCode(item)}
              className="code-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'transform 0.2s, background 0.2s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = style.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: style.color,
                  lineHeight: 1
                }}>
                  {item.code}
                </span>
                <div style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: style.bg
                }}>
                  <Icon size={20} color={style.color} />
                </div>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {filteredCodes.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          <Search size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
          <p>No status codes found matching your criteria.</p>
        </div>
      )}

      {/* Modal / Detail View */}
      {activeCode && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '1rem'
        }} onClick={() => setActiveCode(null)}>
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border-color)',
            borderRadius: '16px', padding: '0', width: '100%', maxWidth: '900px',
            position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden'
          }} onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div style={{
              padding: '1.5rem', borderBottom: '1px solid var(--border-color)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'rgba(255,255,255,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{
                  fontSize: '1.5rem', fontWeight: 'bold', color: getCategoryStyle(activeCode.category).color,
                  fontFamily: 'monospace'
                }}>
                  {activeCode.code}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '500',
                  background: getCategoryStyle(activeCode.category).bg, color: getCategoryStyle(activeCode.category).color, border: `1px solid ${getCategoryStyle(activeCode.category).color}`
                }}>
                  {activeCode.category}
                </span>
              </div>
              <button
                onClick={() => setActiveCode(null)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>

                {/* Left Column: Details */}
                <div style={{ padding: '2rem', borderRight: '1px solid var(--border-color)' }}>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>{activeCode.title}</h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    {activeCode.description}
                  </p>

                  {activeCode.details && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Info size={16} /> Details
                      </h3>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        {activeCode.details}
                      </p>
                    </div>
                  )}

                  {activeCode.useCase && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Globe size={16} /> Common Use Case
                      </h3>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderLeft: `3px solid ${getCategoryStyle(activeCode.category).color}` }}>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>
                          {activeCode.useCase}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeCode.solution && (
                    <div>
                      <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertCircle size={16} /> How to Fix
                      </h3>
                      <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                        {activeCode.solution}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column: Media & Code */}
                <div style={{ padding: '2rem', background: 'rgba(0,0,0,0.2)' }}>
                  {/* Image Section */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      Visual Representation
                    </h3>
                    <div style={{
                      width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden',
                      background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid var(--border-color)', position: 'relative'
                    }}>
                      {/* Using http.cat as a reliable source for fun visualization */}
                      <img
                        src={`https://http.cat/${activeCode.code}`}
                        alt={`${activeCode.code} cat`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.style.background = getCategoryStyle(activeCode.category).bg;
                          e.currentTarget.parentElement!.innerHTML = `<span style="font-size: 3rem; color: ${getCategoryStyle(activeCode.category).color}">${activeCode.code}</span>`;
                        }}
                      />
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'right' }}>
                      Image source: http.cat
                    </p>
                  </div>

                  {/* Code Snippet Section */}
                  {activeCode.codeSnippet && (
                    <div>
                      <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                        Response Example
                      </h3>
                      <div style={{
                        background: '#0f172a', borderRadius: '8px', padding: '1rem', border: '1px solid var(--border-color)',
                        overflowX: 'auto'
                      }}>
                        <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                          {activeCode.codeSnippet}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>

          <p style={{ marginTop: '0.5rem' }}>
            Built by <strong>Mejbaur Bahar Fagun</strong>
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            Senior Software Engineer QA
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a
              href="https://www.linkedin.com/in/mejbaur/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
                style={{ height: '28px', borderRadius: '4px' }}
              />
            </a>

            <a
              href="https://github.com/fagun18/HTTP-Status-Codes-Modern-Cheat-Sheet.git"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                border: '1px solid var(--border-color)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                background: 'var(--bg-card)',
                height: '28px'
              }}
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'var(--color-1xx)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
            zIndex: 100,
            transition: 'transform 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
}



export default App;
