"use client";
import { useState, useCallback } from "react";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const register = useCallback(async (formData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Registration failed");
      }

      setIsSuccess(true);
      return { success: true };
    } catch (err) {
      setError(err.message || "Unexpected error");
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    register,
    isLoading,
    error,
    isSuccess,
  };
}
