"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error?.message || "Login failed"
        );
      }

      // Save access token
      localStorage.setItem(
        "accessToken",
        result.data.accessToken
      );

      // Go to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at top, #1f2937 0%, #0b1120 55%)",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(15, 23, 42, 0.82)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          borderRadius: "20px",
          boxShadow:
            "0 20px 60px rgba(15, 23, 42, 0.55)",
          padding: "32px 24px",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              margin: 0,
              color: "#a78bfa",
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            Nafs
          </p>

          <h1
            style={{
              margin: "12px 0 8px",
              fontSize: "32px",
              lineHeight: 1.1,
            }}
          >
            Welcome back
          </h1>

          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              fontSize: "15px",
            }}
          >
            Sign in to continue your journey.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <div style={{ display: "grid", gap: "8px" }}>
            <label
              htmlFor="email"
              style={{
                fontSize: "14px",
                color: "#e2e8f0",
              }}
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "12px 14px",
                borderRadius: "12px",
                border:
                  "1px solid rgba(148, 163, 184, 0.3)",
                background: "#111827",
                color: "#f8fafc",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "8px" }}>
            <label
              htmlFor="password"
              style={{
                fontSize: "14px",
                color: "#e2e8f0",
              }}
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "12px 14px",
                borderRadius: "12px",
                border:
                  "1px solid rgba(148, 163, 184, 0.3)",
                background: "#111827",
                color: "#f8fafc",
                outline: "none",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                margin: 0,
                color: "#f87171",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              border: "none",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              color: "white",
              fontWeight: 700,
              padding: "14px 16px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p
          style={{
            margin: "22px 0 0",
            textAlign: "center",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          Don't have an account?{" "}
          <Link
            href="/register"
            style={{
              color: "#a78bfa",
              textDecoration: "none",
            }}
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}