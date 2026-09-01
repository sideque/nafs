'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'http://localhost:4000/api/v1/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(
          result?.error?.message || 'Registration failed'
        );
        return;
      }

      console.log('Registration successful:', result);

      alert('Account created successfully!');

      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      setError('Unable to connect to the server');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background:
          'radial-gradient(circle at top, #1f2937 0%, #0b1120 55%)',
        padding: '24px',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: 'rgba(15, 23, 42, 0.82)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.55)',
          padding: '32px 24px',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <p
            style={{
              margin: 0,
              color: '#a78bfa',
              fontWeight: 700,
              letterSpacing: '0.08em',
              fontSize: '12px',
              textTransform: 'uppercase',
            }}
          >
            Nafs
          </p>

          <h1
            style={{
              margin: '12px 0 8px',
              fontSize: '32px',
              lineHeight: 1.1,
            }}
          >
            Create account
          </h1>

          <p
            style={{
              margin: 0,
              color: '#cbd5e1',
              fontSize: '15px',
            }}
          >
            Start your journey with Nafs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gap: '18px',
          }}
        >
          <div style={{ display: 'grid', gap: '8px' }}>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                borderRadius: '12px',
                border:
                  '1px solid rgba(148, 163, 184, 0.3)',
                background: '#111827',
                color: '#f8fafc',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'grid', gap: '8px' }}>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                borderRadius: '12px',
                border:
                  '1px solid rgba(148, 163, 184, 0.3)',
                background: '#111827',
                color: '#f8fafc',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'grid', gap: '8px' }}>
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                borderRadius: '12px',
                border:
                  '1px solid rgba(148, 163, 184, 0.3)',
                background: '#111827',
                color: '#f8fafc',
                outline: 'none',
              }}
            />
          </div>

          {error && (
            <p
              style={{
                margin: 0,
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#fca5a5',
                fontSize: '14px',
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              border: 'none',
              borderRadius: '12px',
              background:
                'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              color: 'white',
              fontWeight: 700,
              padding: '14px 16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p
          style={{
            margin: '22px 0 0',
            textAlign: 'center',
            color: '#cbd5e1',
            fontSize: '14px',
          }}
        >
          Already have an account?{' '}
          <Link
            href="/login"
            style={{
              color: '#a78bfa',
              textDecoration: 'none',
            }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}